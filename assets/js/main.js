import * as THREE from "three";
import { STLLoader } from "../vendor/STLLoader.js";
import modelUrl from "../models/dfma-heatsink-viewer.stl";

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    {
      rootMargin: "-38% 0px -52% 0px",
      threshold: 0.01,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

const stlStages = Array.from(document.querySelectorAll("[data-stl-viewer]"));
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let sharedGeometryPromise;

function extractHeatSinkGeometry(sourceGeometry) {
  sourceGeometry.computeBoundingBox();
  const box = sourceGeometry.boundingBox;
  const size = new THREE.Vector3();
  box.getSize(size);
  const sortedDimensions = [size.x, size.y, size.z].sort((a, b) => a - b);

  if (sortedDimensions[2] / sortedDimensions[1] < 1.55) {
    sourceGeometry.center();
    sourceGeometry.computeVertexNormals();
    return sourceGeometry;
  }

  const dimensions = [size.x, size.y, size.z];
  const primaryAxis = dimensions.indexOf(Math.max(...dimensions));
  const minByAxis = [box.min.x, box.min.y, box.min.z];
  const maxByAxis = [box.max.x, box.max.y, box.max.z];
  const cutoff = minByAxis[primaryAxis] + (maxByAxis[primaryAxis] - minByAxis[primaryAxis]) * 0.31;

  const source = sourceGeometry.getAttribute("position");
  const filtered = [];
  for (let triangle = 0; triangle < source.count; triangle += 3) {
    const a = source.getComponent(triangle, primaryAxis);
    const b = source.getComponent(triangle + 1, primaryAxis);
    const c = source.getComponent(triangle + 2, primaryAxis);

    if (Math.max(a, b, c) > cutoff) continue;

    for (let vertex = triangle; vertex < triangle + 3; vertex += 1) {
      filtered.push(source.getX(vertex), source.getY(vertex), source.getZ(vertex));
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(filtered, 3));
  geometry.computeBoundingBox();
  geometry.center();
  geometry.computeVertexNormals();
  return geometry;
}

function loadSharedGeometry() {
  if (!sharedGeometryPromise) {
    sharedGeometryPromise = new Promise((resolve, reject) => {
      const loader = new STLLoader();
      loader.load(
        modelUrl,
        (geometry) => {
          resolve(extractHeatSinkGeometry(geometry));
        },
        undefined,
        reject
      );
    });
  }

  return sharedGeometryPromise;
}

class HeatSinkViewer {
  constructor(stage, index) {
    this.stage = stage;
    this.canvas = stage.querySelector(".stl-canvas");
    this.view = stage.dataset.stlView || "hero";
    this.index = index;
    this.pointer = { x: 0, y: 0 };
    this.rotation = { spin: index * 0.45 };
    this.frame = 0;
    this.isVisible = false;
    this.isReducedMotion = reducedMotionQuery.matches;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    this.camera.position.set(4.8, 3.35, 5.85);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    this.root = new THREE.Group();
    this.root.rotation.set(-0.36, -0.68, 0);
    this.scene.add(this.root);

    this.addLights();
    this.addTelemetryGeometry();
    this.bindEvents();
    this.resize();

    loadSharedGeometry()
      .then((geometry) => this.setGeometry(geometry))
      .catch(() => this.stage.classList.add("has-webgl-error"));
  }

  addLights() {
    const ambient = new THREE.HemisphereLight(0xe8f7ff, 0x08111d, 1.9);
    this.scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 2.8);
    key.position.set(3.5, 4.6, 4.8);
    this.scene.add(key);

    const rim = new THREE.DirectionalLight(0x00e5ff, 2.1);
    rim.position.set(-4.6, 2.2, -3.5);
    this.scene.add(rim);

    const warning = new THREE.PointLight(0xff3b3b, 0.65, 10);
    warning.position.set(3.5, -1.2, 2.2);
    this.scene.add(warning);
  }

  addTelemetryGeometry() {
    const grid = new THREE.GridHelper(5.6, 18, 0x00e5ff, 0x17304a);
    grid.material.transparent = true;
    grid.material.opacity = 0.17;
    grid.position.y = -1.28;
    this.scene.add(grid);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
    });

    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.007, 8, 140), ringMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -1.16;
    this.scene.add(ring);
    this.ring = ring;

    const innerRing = new THREE.Mesh(new THREE.TorusGeometry(1.22, 0.005, 8, 96), ringMaterial.clone());
    innerRing.material.opacity = 0.1;
    innerRing.rotation.x = Math.PI / 2;
    innerRing.position.y = -1.15;
    this.scene.add(innerRing);
    this.innerRing = innerRing;

    const flowMaterial = new THREE.LineDashedMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.34,
      dashSize: 0.12,
      gapSize: 0.11,
      depthWrite: false,
    });

    this.flowLines = [-0.62, 0, 0.62].map((zOffset, index) => {
      const points = [];
      for (let i = 0; i <= 42; i += 1) {
        const t = i / 42;
        points.push(
          new THREE.Vector3(
            -2.65 + t * 5.3,
            -0.48 + Math.sin(t * Math.PI) * (0.42 + index * 0.05),
            zOffset + Math.sin(t * Math.PI * 2) * 0.12
          )
        );
      }

      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), flowMaterial.clone());
      line.computeLineDistances();
      this.scene.add(line);
      return line;
    });
  }

  bindEvents() {
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.stage);

    this.stage.addEventListener("pointermove", (event) => {
      const rect = this.stage.getBoundingClientRect();
      this.pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      this.pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    });

    this.stage.addEventListener("pointerleave", () => {
      this.pointer.x = 0;
      this.pointer.y = 0;
    });

    this.visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        this.isVisible = entry.isIntersecting;
        if (this.isVisible) this.animate();
      },
      { threshold: 0.08 }
    );
    this.visibilityObserver.observe(this.stage);
  }

  resize() {
    const { width, height } = this.stage.getBoundingClientRect();
    if (!width || !height) return;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  setGeometry(sourceGeometry) {
    const geometry = sourceGeometry.clone();
    const box = new THREE.Box3().setFromBufferAttribute(geometry.getAttribute("position"));
    const size = new THREE.Vector3();
    box.getSize(size);
    const compactAxis = Math.max(size.x, size.z, size.y * 0.92) || 1;
    const scale = this.view === "dossier" ? 2.48 / compactAxis : 2.72 / compactAxis;

    const material = new THREE.MeshStandardMaterial({
      color: 0xd5d2ca,
      metalness: 0.72,
      roughness: 0.33,
      emissive: 0x07151d,
      emissiveIntensity: 0.18,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.setScalar(scale);
    mesh.rotation.set(0, 0, 0);
    mesh.position.y = -0.08;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    this.root.add(mesh);

    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0xeffaff,
      transparent: true,
      opacity: 0.17,
    });
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 42), edgeMaterial);
    edges.scale.copy(mesh.scale);
    edges.rotation.copy(mesh.rotation);
    edges.position.copy(mesh.position);
    this.root.add(edges);

    this.mesh = mesh;
    this.edges = edges;
    this.stage.classList.add("is-loaded");
    this.render();
    this.animate();
  }

  animate() {
    if (!this.isVisible || this.frame) return;

    const tick = () => {
      this.frame = 0;
      if (!this.isVisible) return;

      const spinSpeed = this.isReducedMotion ? 0 : this.view === "dossier" ? 0.004 : 0.0055;
      this.rotation.spin += spinSpeed;

      const targetX = -0.36 + this.pointer.y * 0.13;
      const targetY = -0.68 + this.rotation.spin + this.pointer.x * 0.2;
      const targetZ = this.pointer.x * 0.06;

      this.root.rotation.x += (targetX - this.root.rotation.x) * 0.055;
      this.root.rotation.y += (targetY - this.root.rotation.y) * 0.055;
      this.root.rotation.z += (targetZ - this.root.rotation.z) * 0.055;

      if (this.ring) this.ring.rotation.z -= spinSpeed * 0.9;
      if (this.innerRing) this.innerRing.rotation.z += spinSpeed * 1.25;
      if (this.flowLines) {
        this.flowLines.forEach((line, index) => {
          line.material.dashOffset -= spinSpeed * (4 + index * 0.55);
        });
      }

      this.render();
      this.frame = requestAnimationFrame(tick);
    };

    this.frame = requestAnimationFrame(tick);
  }

  render() {
    this.camera.lookAt(0, 0, 0);
    this.renderer.render(this.scene, this.camera);
  }
}

if (stlStages.length && window.WebGLRenderingContext) {
  stlStages.forEach((stage, index) => new HeatSinkViewer(stage, index));
}
