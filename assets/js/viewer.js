/* STL viewer for the heat sink.
   Case study: loads when the visitor presses "Rotate in 3D" and renders only
   when something changes (drag, keys, view buttons).
   Homepage: opts.spin turns it into a slow turntable (one turn per 24 s) that
   stops while off screen, while the tab is hidden, while being dragged, or when
   paused. Shown on the same dark plate as the CAD render, so colors are fixed.
   Edges and a section plane after bernhard-42/three-cad-viewer (MIT). */

import * as THREE from "three";
import { STLLoader } from "../vendor/STLLoader.js";

export function mountViewer(stage, controls, status, opts = {}) {
  const src = stage.dataset.stl;
  const canvas = document.createElement("canvas");
  canvas.setAttribute("tabindex", "0");
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", stage.dataset.label || "3D model");

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.localClippingEnabled = true;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 4 / 3, 1, 2000);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x445566, 1.6));
  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(1, 2, 1.5);
  scene.add(key);
  // A soft light that travels with the camera keeps the far faces readable
  // while the part turns.
  const fill = new THREE.DirectionalLight(0xffffff, 0.9);
  fill.position.set(0, 0, 1);
  camera.add(fill);
  scene.add(camera);

  const pivot = new THREE.Group();
  scene.add(pivot);

  // Section plane through the middle of the part, square to the fins (the fins
  // are normal to model x and run along z), so the cut shows the fin comb and gaps.
  const localSection = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0);
  const section = new THREE.Plane();
  const views = { iso: [0.5, -0.6], front: [0, 0], top: [Math.PI / 2 - 0.001, 0] };
  const state = { pitch: views.iso[0], yaw: views.iso[1], cut: false, radius: 1 };
  const spin = { on: !!opts.spin, visible: true, last: 0, frame: 0 };

  let mesh, edges;

  function resize() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    render();
  }

  function render() {
    pivot.rotation.set(state.pitch, state.yaw, 0, "XYZ");
    pivot.updateMatrixWorld(true);
    section.copy(localSection).applyMatrix4(pivot.matrixWorld);
    const d = state.radius * (opts.zoom || 3.6);
    camera.position.set(0, 0, d);
    camera.lookAt(0, 0, 0);
    if (mesh) {
      const planes = state.cut ? [section] : [];
      mesh.material.clippingPlanes = planes;
      edges.material.clippingPlanes = planes;
    }
    renderer.render(scene, camera);
  }

  function setView(name) {
    [state.pitch, state.yaw] = views[name];
    render();
  }

  // Pointer drag rotates. No wheel zoom, so page scrolling is never captured.
  let drag = null;
  canvas.addEventListener("pointerdown", (e) => {
    drag = { x: e.clientX, y: e.clientY, pitch: state.pitch, yaw: state.yaw };
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!drag) return;
    state.yaw = drag.yaw + (e.clientX - drag.x) * 0.01;
    state.pitch = Math.max(-1.55, Math.min(1.55, drag.pitch + (e.clientY - drag.y) * 0.01));
    render();
  });
  const end = () => { drag = null; };
  canvas.addEventListener("pointerup", end);
  canvas.addEventListener("pointercancel", end);

  canvas.addEventListener("keydown", (e) => {
    const step = 0.15;
    if (e.key === "ArrowLeft") state.yaw -= step;
    else if (e.key === "ArrowRight") state.yaw += step;
    else if (e.key === "ArrowUp") state.pitch = Math.max(-1.55, state.pitch - step);
    else if (e.key === "ArrowDown") state.pitch = Math.min(1.55, state.pitch + step);
    else if (e.key === "r" || e.key === "R") { setView("iso"); return; }
    else return;
    e.preventDefault();
    render();
  });

  if (controls) controls.querySelectorAll("[data-view]").forEach((b) => {
    b.addEventListener("click", () => setView(b.dataset.view));
  });
  const cutBtn = controls && controls.querySelector("[data-section]");
  if (cutBtn) {
    cutBtn.addEventListener("click", () => {
      state.cut = !state.cut;
      cutBtn.setAttribute("aria-pressed", String(state.cut));
      render();
    });
  }

  // Turntable: advance yaw by elapsed time so speed doesn't depend on frame rate.
  function tick(t) {
    spin.frame = 0;
    if (!spin.on || !spin.visible || drag || document.hidden || !mesh) return;
    if (spin.last) state.yaw += ((t - spin.last) / 1000) * ((2 * Math.PI) / 24);
    spin.last = t;
    render();
    spin.frame = requestAnimationFrame(tick);
  }
  function startSpin() {
    if (spin.frame) return;
    spin.last = 0;
    spin.frame = requestAnimationFrame(tick);
  }
  function setSpin(on) {
    spin.on = on;
    if (on) startSpin();
  }
  if (opts.spin !== undefined) {
    new IntersectionObserver((entries) => {
      spin.visible = entries[0].isIntersecting;
      if (spin.visible) startSpin();
    }).observe(stage);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) startSpin(); });
    canvas.addEventListener("pointerup", () => startSpin());
  }

  new ResizeObserver(resize).observe(stage);

  if (opts.spin === undefined) status.textContent = "Loading model…";
  new STLLoader().load(
    src,
    (geometry) => {
      geometry.computeBoundingBox();
      const box = geometry.boundingBox;
      const center = box.getCenter(new THREE.Vector3());
      geometry.translate(-center.x, -center.y, -center.z);
      geometry.computeVertexNormals();
      state.radius = box.getSize(new THREE.Vector3()).length() / 2;

      mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({ color: 0xc9ced6, metalness: 0.15, roughness: 0.6, side: THREE.DoubleSide })
      );
      edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry, 25),
        new THREE.LineBasicMaterial({ color: 0x1c1b19 })
      );
      pivot.add(mesh, edges);

      stage.appendChild(canvas);
      stage.classList.add("is-live");
      if (controls) controls.hidden = false;
      status.textContent = opts.readyText ?? "Drag, or focus the model and use the arrow keys. R resets the view.";
      resize();
      if (opts.spin !== undefined) startSpin();
      // The button that opened the viewer is now hidden; keep keyboard focus here.
      if (opts.focus !== false) canvas.focus({ preventScroll: true });
    },
    undefined,
    () => {
      status.textContent = "The 3D model didn't load. The render above shows the same part.";
      if (opts.focus !== false) {
        status.tabIndex = -1;
        status.focus();
      }
    }
  );

  return { setSpin };
}
