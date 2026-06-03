(()=>{var rc=1,zc=2,Gt=3,ri=0,ot=1;var Ai=100;var ta=204,ia=205;var sc=0,kc=1,Hc=2,ii=0,Gc=1,Wc=2,jc=3,no=4,Xc=5,qc=6,Yc=7;var ac=300,Yi=301,$i=302,na=303,ra=304,rs=306,sa=1e3,En=1001,aa=1002,ft=1003,$c=1004;var Wn=1005;var Ct=1006,fs=1007;var Gi=1008;var yi=1009;var oc=1012,lc=1013,Ki=1014,ei=1015,ss=1016,cc=1017,hc=1018,zn=1020;var jt=1023;var ji=1026,wn=1027,Kc=1028,uc=1029;var dc=1031,pc=1033,gs=33776,As=33777,_s=33778,vs=33779,wo=35840,To=35841,Ro=35842,Co=35843,Lo=36196,Fo=37492,Vo=37496,Po=37808,Io=37809,Do=37810,Uo=37811,No=37812,Oo=37813,zo=37814,ko=37815,Ho=37816,Go=37817,Wo=37818,jo=37819,Xo=37820,qo=37821,xs=36492,Yo=36494,$o=36495;var Ko=36284,Jo=36285,Zo=36286;var Mr=2300,Br=2301,ys=2302,Qo=2400,el=2401,tl=2402;var Hi="",mt="srgb",oi="srgb-linear",ro="display-p3",as="display-p3-linear",Sr="linear",ze="srgb",br="rec709",Er="p3";var Ei=7680;var il=35044;var nl="300 es",Ji=2e3,wr=2001,si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}},et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yr=Math.PI/180,oa=180/Math.PI;function on(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(et[255&r]+et[r>>8&255]+et[r>>16&255]+et[r>>24&255]+"-"+et[255&e]+et[e>>8&255]+"-"+et[e>>16&15|64]+et[e>>24&255]+"-"+et[63&t|128]+et[t>>8&255]+"-"+et[t>>16&255]+et[t>>24&255]+et[255&i]+et[i>>8&255]+et[i>>16&255]+et[i>>24&255]).toLowerCase()}function Je(r,e,t){return Math.max(e,Math.min(t,r))}function Jc(r,e){return(r%e+e)%e}function Ms(r,e,t){return(1-t)*r+t*e}function pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function at(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var te=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class r{constructor(e,t,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],_=n[0],m=n[3],v=n[6],A=n[1],g=n[4],y=n[7],w=n[2],E=n[5],T=n[8];return s[0]=a*_+o*A+l*w,s[3]=a*m+o*g+l*E,s[6]=a*v+o*y+l*T,s[1]=c*_+h*A+u*w,s[4]=c*m+h*g+u*E,s[7]=c*v+h*y+u*T,s[2]=d*_+p*A+f*w,s[5]=d*m+p*g+f*E,s[8]=d*v+p*y+f*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+i*d+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=u*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*a)*_,e[3]=d*_,e[4]=(h*t-n*l)*_,e[5]=(n*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bs.makeScale(e,t)),this}rotate(e){return this.premultiply(Bs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bs=new Be;function mc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Tr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zc(){let r=Tr("canvas");return r.style.display="block",r}var rl={};function Qc(r){r in rl||(rl[r]=!0,console.warn(r))}var sl=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),al=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jn={[oi]:{transfer:Sr,primaries:br,toReference:r=>r,fromReference:r=>r},[mt]:{transfer:ze,primaries:br,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[as]:{transfer:Sr,primaries:Er,toReference:r=>r.applyMatrix3(al),fromReference:r=>r.applyMatrix3(sl)},[ro]:{transfer:ze,primaries:Er,toReference:r=>r.convertSRGBToLinear().applyMatrix3(al),fromReference:r=>r.applyMatrix3(sl).convertLinearToSRGB()}},eh=new Set([oi,as]),Ie={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!eh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let i=jn[e].toReference;return(0,jn[t].fromReference)(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return jn[r].primaries},getTransfer:function(r){return r===Hi?Sr:jn[r].transfer}};function Xi(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Ss(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var wi,la=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=Tr("canvas")),wi.width=e.width,wi.height=e.height;let i=wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Tr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Xi(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Xi(t[i]/255)):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},th=0,Rr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(bs(n[a].image)):s.push(bs(n[a]))}else s=bs(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function bs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?la.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ih=0,gt=class r extends si{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=on(),this.name="",this.source=new Rr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sa:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case sa:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gt.DEFAULT_IMAGE=null,gt.DEFAULT_MAPPING=ac,gt.DEFAULT_ANISOTROPY=1;var Ue=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],_=l[2],m=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(c+1)/2,y=(p+1)/2,w=(v+1)/2,E=(h+d)/4,T=(u+_)/4,L=(f+m)/4;return g>y&&g>w?g<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(g),n=E/i,s=T/i):y>w?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=E/n,s=L/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=T/s,n=L/s),this.set(i,n,s,t),this}let A=Math.sqrt((m-f)*(m-f)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-f)/A,this.y=(u-_)/A,this.z=(d-h)/A,this.w=Math.acos((c+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ca=class extends si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new gt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Rr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends ca{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Cr=class extends gt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ft,this.minFilter=ft,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ha=class extends gt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ft,this.minFilter=ft,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],p=s[a+1],f=s[a+2],_=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=_);if(u!==_||l!==d||c!==p||h!==f){let m=1-o,v=l*d+c*p+h*f+u*_,A=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){let w=Math.sqrt(g),E=Math.atan2(w,v*A);m=Math.sin(m*E)/w,o=Math.sin(o*E)/w}let y=o*A;if(l=l*m+d*y,c=c*m+p*y,h=h*m+f*y,u=u*m+_*y,m===1-o){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),p=l(n/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ol.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Es.copy(this).projectOnVector(e),this.sub(Es)}reflect(e){return this.sub(Es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Es=new S,ol=new Lt,At=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(St.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(St.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=St.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,St):St.fromBufferAttribute(s,a),St.applyMatrix4(e.matrixWorld),this.expandByPoint(St);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xn.copy(i.boundingBox)),Xn.applyMatrix4(e.matrixWorld),this.union(Xn)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,St),St.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mn),qn.subVectors(this.max,mn),Ti.subVectors(e.a,mn),Ri.subVectors(e.b,mn),Ci.subVectors(e.c,mn),Yt.subVectors(Ri,Ti),$t.subVectors(Ci,Ri),hi.subVectors(Ti,Ci);let t=[0,-Yt.z,Yt.y,0,-$t.z,$t.y,0,-hi.z,hi.y,Yt.z,0,-Yt.x,$t.z,0,-$t.x,hi.z,0,-hi.x,-Yt.y,Yt.x,0,-$t.y,$t.x,0,-hi.y,hi.x,0];return!!ws(t,Ti,Ri,Ci,qn)&&(t=[1,0,0,0,1,0,0,0,1],!!ws(t,Ti,Ri,Ci,qn)&&(Yn.crossVectors(Yt,$t),t=[Yn.x,Yn.y,Yn.z],ws(t,Ti,Ri,Ci,qn)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,St).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(St).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ut[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ut[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ut[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ut[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ut[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ut[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ut[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ut[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ut)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ut=[new S,new S,new S,new S,new S,new S,new S,new S],St=new S,Xn=new At,Ti=new S,Ri=new S,Ci=new S,Yt=new S,$t=new S,hi=new S,mn=new S,qn=new S,Yn=new S,ui=new S;function ws(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){ui.fromArray(r,s);let o=n.x*Math.abs(ui.x)+n.y*Math.abs(ui.y)+n.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),h=i.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var nh=new At,fn=new S,Ts=new S,Ft=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):nh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fn.subVectors(e,this.center);let t=fn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(fn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ts.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fn.copy(e.center).add(Ts)),this.expandByPoint(fn.copy(e.center).sub(Ts))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nt=new S,Rs=new S,$n=new S,Kt=new S,Cs=new S,Kn=new S,Ls=new S,Zi=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nt.copy(this.origin).addScaledVector(this.direction,t),Nt.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Rs.copy(e).add(t).multiplyScalar(.5),$n.copy(t).sub(e).normalize(),Kt.copy(this.origin).sub(Rs);let s=.5*e.distanceTo(t),a=-this.direction.dot($n),o=Kt.dot(this.direction),l=-Kt.dot($n),c=Kt.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Rs).addScaledVector($n,d),p}intersectSphere(e,t){Nt.subVectors(e.center,this.origin);let i=Nt.dot(this.direction),n=Nt.dot(Nt)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Nt)!==null}intersectTriangle(e,t,i,n,s){Cs.subVectors(t,e),Kn.subVectors(i,e),Ls.crossVectors(Cs,Kn);let a,o=this.direction.dot(Ls);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Kt.subVectors(this.origin,e);let l=a*this.direction.dot(Kn.crossVectors(Kt,Kn));if(l<0)return null;let c=a*this.direction.dot(Cs.cross(Kt));if(c<0||l+c>o)return null;let h=-a*Kt.dot(Ls);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class r{constructor(e,t,i,n,s,a,o,l,c,h,u,d,p,f,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,u,d,p,f,_,m)}set(e,t,i,n,s,a,o,l,c,h,u,d,p,f,_,m){let v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=n,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=d,v[3]=p,v[7]=f,v[11]=_,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Li.setFromMatrixColumn(e,0).length(),s=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,_=c*u;t[0]=d+_*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,_=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rh,e,sh)}lookAt(e,t,i){let n=this.elements;return lt.subVectors(e,t),lt.lengthSq()===0&&(lt.z=1),lt.normalize(),Jt.crossVectors(i,lt),Jt.lengthSq()===0&&(Math.abs(i.z)===1?lt.x+=1e-4:lt.z+=1e-4,lt.normalize(),Jt.crossVectors(i,lt)),Jt.normalize(),Jn.crossVectors(lt,Jt),n[0]=Jt.x,n[4]=Jn.x,n[8]=lt.x,n[1]=Jt.y,n[5]=Jn.y,n[9]=lt.y,n[2]=Jt.z,n[6]=Jn.z,n[10]=lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],_=i[6],m=i[10],v=i[14],A=i[3],g=i[7],y=i[11],w=i[15],E=n[0],T=n[4],L=n[8],k=n[12],O=n[1],C=n[5],P=n[9],H=n[13],$=n[2],J=n[6],j=n[10],ee=n[14],K=n[3],he=n[7],ue=n[11],Z=n[15];return s[0]=a*E+o*O+l*$+c*K,s[4]=a*T+o*C+l*J+c*he,s[8]=a*L+o*P+l*j+c*ue,s[12]=a*k+o*H+l*ee+c*Z,s[1]=h*E+u*O+d*$+p*K,s[5]=h*T+u*C+d*J+p*he,s[9]=h*L+u*P+d*j+p*ue,s[13]=h*k+u*H+d*ee+p*Z,s[2]=f*E+_*O+m*$+v*K,s[6]=f*T+_*C+m*J+v*he,s[10]=f*L+_*P+m*j+v*ue,s[14]=f*k+_*H+m*ee+v*Z,s[3]=A*E+g*O+y*$+w*K,s[7]=A*T+g*C+y*J+w*he,s[11]=A*L+g*P+y*j+w*ue,s[15]=A*k+g*H+y*ee+w*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-n*a*p+n*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+i*a*p+s*o*h-i*c*h)+e[15]*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],_=e[13],m=e[14],v=e[15],A=u*m*c-_*d*c+_*l*p-o*m*p-u*l*v+o*d*v,g=f*d*c-h*m*c-f*l*p+a*m*p+h*l*v-a*d*v,y=h*_*c-f*u*c+f*o*p-a*_*p-h*o*v+a*u*v,w=f*u*l-h*_*l-f*o*d+a*_*d+h*o*m-a*u*m,E=t*A+i*g+n*y+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return e[0]=A*T,e[1]=(_*d*s-u*m*s-_*n*p+i*m*p+u*n*v-i*d*v)*T,e[2]=(o*m*s-_*l*s+_*n*c-i*m*c-o*n*v+i*l*v)*T,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*p-i*l*p)*T,e[4]=g*T,e[5]=(h*m*s-f*d*s+f*n*p-t*m*p-h*n*v+t*d*v)*T,e[6]=(f*l*s-a*m*s-f*n*c+t*m*c+a*n*v-t*l*v)*T,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*p+t*l*p)*T,e[8]=y*T,e[9]=(f*u*s-h*_*s-f*i*p+t*_*p+h*i*v-t*u*v)*T,e[10]=(a*_*s-f*o*s+f*i*c-t*_*c-a*i*v+t*o*v)*T,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*p-t*o*p)*T,e[12]=w*T,e[13]=(h*_*n-f*u*n+f*i*d-t*_*d-h*i*m+t*u*m)*T,e[14]=(f*o*n-a*_*n-f*i*l+t*_*l+a*i*m-t*o*m)*T,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*T,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,_=a*h,m=a*u,v=o*u,A=l*c,g=l*h,y=l*u,w=i.x,E=i.y,T=i.z;return n[0]=(1-(_+v))*w,n[1]=(p+y)*w,n[2]=(f-g)*w,n[3]=0,n[4]=(p-y)*E,n[5]=(1-(d+v))*E,n[6]=(m+A)*E,n[7]=0,n[8]=(f+g)*T,n[9]=(m-A)*T,n[10]=(1-(d+_))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=Li.set(n[0],n[1],n[2]).length(),a=Li.set(n[4],n[5],n[6]).length(),o=Li.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],bt.copy(this);let l=1/s,c=1/a,h=1/o;return bt.elements[0]*=l,bt.elements[1]*=l,bt.elements[2]*=l,bt.elements[4]*=c,bt.elements[5]*=c,bt.elements[6]*=c,bt.elements[8]*=h,bt.elements[9]*=h,bt.elements[10]*=h,t.setFromRotationMatrix(bt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),p,f;if(o===Ji)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==wr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-s),d=(t+e)*c,p=(i+n)*h,f,_;if(o===Ji)f=(a+s)*u,_=-2*u;else{if(o!==wr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,_=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Li=new S,bt=new xe,rh=new S(0,0,0),sh=new S(1,1,1),Jt=new S,Jn=new S,lt=new S,ll=new xe,cl=new Lt,Vt=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ll,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cl.setFromEuler(this),this.setFromQuaternion(cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vt.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},ah=0,hl=new S,Fi=new Lt,Ot=new xe,Zn=new S,gn=new S,oh=new S,lh=new Lt,ul=new S(1,0,0),dl=new S(0,1,0),pl=new S(0,0,1),ml={type:"added"},ch={type:"removed"},Vi={type:"childadded",child:null},Fs={type:"childremoved",child:null},nt=class r extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new S,t=new Vt,i=new Lt,n=new S(1,1,1);t._onChange((function(){i.setFromEuler(t,!1)})),i._onChange((function(){t.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new xe},normalMatrix:{value:new Be}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(ul,e)}rotateY(e){return this.rotateOnAxis(dl,e)}rotateZ(e){return this.rotateOnAxis(pl,e)}translateOnAxis(e,t){return hl.copy(e).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ul,e)}translateY(e){return this.translateOnAxis(dl,e)}translateZ(e){return this.translateOnAxis(pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ot.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zn.copy(e):Zn.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),gn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ot.lookAt(gn,Zn,this.up):Ot.lookAt(Zn,gn,this.up),this.quaternion.setFromRotationMatrix(Ot),n&&(Ot.extractRotation(n.matrixWorld),Fi.setFromRotationMatrix(Ot),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ml),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ch),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ot.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ot.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ot),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ml),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gn,e,oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gn,lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};nt.DEFAULT_UP=new S(0,1,0),nt.DEFAULT_MATRIX_AUTO_UPDATE=!0,nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=new S,zt=new S,Vs=new S,kt=new S,Pi=new S,Ii=new S,fl=new S,Ps=new S,Is=new S,Ds=new S,xi=class r{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Et.subVectors(e,t),n.cross(Et);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Et.subVectors(n,t),zt.subVectors(i,t),Vs.subVectors(e,t);let a=Et.dot(Et),o=Et.dot(zt),l=Et.dot(Vs),c=zt.dot(zt),h=zt.dot(Vs),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,kt)!==null&&kt.x>=0&&kt.y>=0&&kt.x+kt.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,kt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kt.x),l.addScaledVector(a,kt.y),l.addScaledVector(o,kt.z),l)}static isFrontFacing(e,t,i,n){return Et.subVectors(i,t),zt.subVectors(e,t),Et.cross(zt).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Et.subVectors(this.c,this.b),zt.subVectors(this.a,this.b),.5*Et.cross(zt).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Pi.subVectors(n,i),Ii.subVectors(s,i),Ps.subVectors(e,i);let l=Pi.dot(Ps),c=Ii.dot(Ps);if(l<=0&&c<=0)return t.copy(i);Is.subVectors(e,n);let h=Pi.dot(Is),u=Ii.dot(Is);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Pi,a);Ds.subVectors(e,s);let p=Pi.dot(Ds),f=Ii.dot(Ds);if(f>=0&&p<=f)return t.copy(s);let _=p*c-l*f;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Ii,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return fl.subVectors(s,n),o=(u-h)/(u-h+(p-f)),t.copy(n).addScaledVector(fl,o);let v=1/(m+_+d);return a=_*v,o=d*v,t.copy(i).addScaledVector(Pi,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zt={h:0,s:0,l:0},Qn={h:0,s:0,l:0};function Us(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ie.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ie.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ie.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ie.workingColorSpace){if(e=Jc(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Us(a,s,e+1/3),this.g=Us(a,s,e),this.b=Us(a,s,e-1/3)}return Ie.toWorkingColorSpace(this,n),this}setStyle(e,t=mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let i=fc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Ie.fromWorkingColorSpace(tt.copy(this),e),65536*Math.round(Je(255*tt.r,0,255))+256*Math.round(Je(255*tt.g,0,255))+Math.round(Je(255*tt.b,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ie.workingColorSpace){Ie.fromWorkingColorSpace(tt.copy(this),t);let i=tt.r,n=tt.g,s=tt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(tt.copy(this),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=mt){Ie.fromWorkingColorSpace(tt.copy(this),e);let t=tt.r,i=tt.g,n=tt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Zt),this.setHSL(Zt.h+e,Zt.s+t,Zt.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zt),e.getHSL(Qn);let i=Ms(Zt.h,Qn.h,t),n=Ms(Zt.s,Qn.s,t),s=Ms(Zt.l,Qn.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tt=new ye;ye.NAMES=fc;var hh=0,ai=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=on(),this.name="",this.type="Material",this.blending=1,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ia,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ta&&(i.blendSrc=this.blendSrc),this.blendDst!==ia&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qi=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dd=uh();function uh(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var Xe=new S,er=new te,rt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xe.fromBufferAttribute(this,t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xe.fromBufferAttribute(this,t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),e}};var Fr=class extends rt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Vr=class extends rt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ge=class extends rt{constructor(e,t,i){super(new Float32Array(e),t,i)}},dh=0,pt=new xe,Ns=new nt,Di=new S,ct=new At,An=new At,Ke=new S,De=class r extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mc(e)?Vr:Fr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pt.makeRotationFromQuaternion(e),this.applyMatrix4(pt),this}rotateX(e){return pt.makeRotationX(e),this.applyMatrix4(pt),this}rotateY(e){return pt.makeRotationY(e),this.applyMatrix4(pt),this}rotateZ(e){return pt.makeRotationZ(e),this.applyMatrix4(pt),this}translate(e,t,i){return pt.makeTranslation(e,t,i),this.applyMatrix4(pt),this}scale(e,t,i){return pt.makeScale(e,t,i),this.applyMatrix4(pt),this}lookAt(e){return Ns.lookAt(e),Ns.updateMatrix(),this.applyMatrix4(Ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ge(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new At);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];ct.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,ct.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,ct.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(ct.min),this.boundingBox.expandByPoint(ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new S,1/0);if(e){let i=this.boundingSphere.center;if(ct.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];An.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(ct.min,An.min),ct.expandByPoint(Ke),Ke.addVectors(ct.max,An.max),ct.expandByPoint(Ke)):(ct.expandByPoint(An.min),ct.expandByPoint(An.max))}ct.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Ke.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Ke));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(e,c),Ke.add(Di)),n=Math.max(n,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new S,l[L]=new S;let c=new S,h=new S,u=new S,d=new te,p=new te,f=new te,_=new S,m=new S;function v(L,k,O){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,k),u.fromBufferAttribute(i,O),d.fromBufferAttribute(s,L),p.fromBufferAttribute(s,k),f.fromBufferAttribute(s,O),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let C=1/(p.x*f.y-f.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(C),o[L].add(_),o[k].add(_),o[O].add(_),l[L].add(m),l[k].add(m),l[O].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,k=A.length;L<k;++L){let O=A[L],C=O.start;for(let P=C,H=C+O.count;P<H;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let g=new S,y=new S,w=new S,E=new S;function T(L){w.fromBufferAttribute(n,L),E.copy(w);let k=o[L];g.copy(k),g.sub(w.multiplyScalar(w.dot(k))).normalize(),y.crossVectors(E,k);let O=y.dot(l[L])<0?-1:1;a.setXYZW(L,g.x,g.y,g.z,O)}for(let L=0,k=A.length;L<k;++L){let O=A[L],C=O.start;for(let P=C,H=C+O.count;P<H;P+=3)T(e.getX(P+0)),T(e.getX(P+1)),T(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new S,s=new S,a=new S,o=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,f),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ke.fromBufferAttribute(e,t),Ke.normalize(),e.setXYZ(t,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let _=0,m=l.length;_<m;_++){p=o.isInterleavedBufferAttribute?l[_]*o.data.stride+o.offset:l[_]*h;for(let v=0;v<h;v++)d[f++]=c[p++]}return new rt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gl=new xe,di=new Zi,tr=new Ft,Al=new S,Ui=new S,Ni=new S,Oi=new S,Os=new S,ir=new S,nr=new te,rr=new te,sr=new te,_l=new S,vl=new S,xl=new S,ar=new S,or=new S,Ze=class extends nt{constructor(e=new De,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){ir.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Os.fromBufferAttribute(u,e),a?ir.addScaledVector(Os,h):ir.addScaledVector(Os.sub(t),h))}t.add(ir)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),tr.copy(i.boundingSphere),tr.applyMatrix4(s),di.copy(e.ray).recast(e.near),tr.containsPoint(di.origin)===!1&&(di.intersectSphere(tr,Al)===null||di.origin.distanceToSquared(Al)>(e.far-e.near)**2))return;gl.copy(s).invert(),di.copy(e.ray).applyMatrix4(gl),i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,di)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let m=d[f],v=a[m.materialIndex];for(let A=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));A<g;A+=3)n=lr(this,v,e,i,c,h,u,o.getX(A),o.getX(A+1),o.getX(A+2)),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);f<_;f+=3)n=lr(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let m=d[f],v=a[m.materialIndex];for(let A=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));A<g;A+=3)n=lr(this,v,e,i,c,h,u,A,A+1,A+2),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);f<_;f+=3)n=lr(this,a,e,i,c,h,u,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}};function lr(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,Ui),r.getVertexPosition(l,Ni),r.getVertexPosition(c,Oi);let h=(function(u,d,p,f,_,m,v,A){let g;if(g=d.side===ot?f.intersectTriangle(v,m,_,!0,A):f.intersectTriangle(_,m,v,d.side===ri,A),g===null)return null;or.copy(A),or.applyMatrix4(u.matrixWorld);let y=p.ray.origin.distanceTo(or);return y<p.near||y>p.far?null:{distance:y,point:or.clone(),object:u}})(r,e,t,i,Ui,Ni,Oi,ar);if(h){n&&(nr.fromBufferAttribute(n,o),rr.fromBufferAttribute(n,l),sr.fromBufferAttribute(n,c),h.uv=xi.getInterpolation(ar,Ui,Ni,Oi,nr,rr,sr,new te)),s&&(nr.fromBufferAttribute(s,o),rr.fromBufferAttribute(s,l),sr.fromBufferAttribute(s,c),h.uv1=xi.getInterpolation(ar,Ui,Ni,Oi,nr,rr,sr,new te)),a&&(_l.fromBufferAttribute(a,o),vl.fromBufferAttribute(a,l),xl.fromBufferAttribute(a,c),h.normal=xi.getInterpolation(ar,Ui,Ni,Oi,_l,vl,xl,new S),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new S,materialIndex:0};xi.getNormal(Ui,Ni,Oi,u.normal),h.face=u}return h}var en=class r extends De{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(_,m,v,A,g,y,w,E,T,L,k){let O=y/T,C=w/L,P=y/2,H=w/2,$=E/2,J=T+1,j=L+1,ee=0,K=0,he=new S;for(let ue=0;ue<j;ue++){let Z=ue*C-H;for(let re=0;re<J;re++){let ce=re*O-P;he[_]=ce*A,he[m]=Z*g,he[v]=$,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[v]=E>0?1:-1,h.push(he.x,he.y,he.z),u.push(re/T),u.push(1-ue/L),ee+=1}}for(let ue=0;ue<L;ue++)for(let Z=0;Z<T;Z++){let re=d+Z+J*ue,ce=d+Z+J*(ue+1),M=d+(Z+1)+J*(ue+1),B=d+(Z+1)+J*ue;l.push(re,ce,B),l.push(ce,M,B),K+=6}o.addGroup(p,K,k),p+=K,d+=ee}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,s,4),f("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function tn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function st(r){let e={};for(let t=0;t<r.length;t++){let i=tn(r[t]);for(let n in i)e[n]=i[n]}return e}function gc(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ie.workingColorSpace}var ph={clone:tn,merge:st},Pt=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Tn=class extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qt=new S,yl=new te,Ml=new te,it=class extends Tn{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*oa*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*yr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*oa*Math.atan(Math.tan(.5*yr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qt.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qt.x,Qt.y).multiplyScalar(-e/Qt.z),Qt.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qt.x,Qt.y).multiplyScalar(-e/Qt.z)}getViewSize(e,t){return this.getViewBounds(e,yl,Ml),t.subVectors(Ml,yl)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*yr*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zi=-90,ua=class extends nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new it(zi,1,e,t);n.layers=this.layers,this.add(n);let s=new it(zi,1,e,t);s.layers=this.layers,this.add(s);let a=new it(zi,1,e,t);a.layers=this.layers,this.add(a);let o=new it(zi,1,e,t);o.layers=this.layers,this.add(o);let l=new it(zi,1,e,t);l.layers=this.layers,this.add(l);let c=new it(zi,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==wr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Pr=class extends gt{constructor(e,t,i,n,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Yi,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},da=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Pr(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new en(5,5,5),s=new Pt({name:"CubemapFromEquirect",uniforms:tn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ot,blending:0});s.uniforms.tEquirect.value=t;let a=new Ze(n,s),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Ct),new ua(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},zs=new S,mh=new S,fh=new Be,Wt=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=zs.subVectors(i,t).cross(mh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(zs),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fh.getNormalMatrix(e),n=this.coplanarPoint(zs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new Ft,cr=new S,nn=class{constructor(e=new Wt,t=new Wt,i=new Wt,n=new Wt,s=new Wt,a=new Wt){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],f=n[9],_=n[10],m=n[11],v=n[12],A=n[13],g=n[14],y=n[15];if(i[0].setComponents(l-s,d-c,m-p,y-v).normalize(),i[1].setComponents(l+s,d+c,m+p,y+v).normalize(),i[2].setComponents(l+a,d+h,m+f,y+A).normalize(),i[3].setComponents(l-a,d-h,m-f,y-A).normalize(),i[4].setComponents(l-o,d-u,m-_,y-g).normalize(),t===Ji)i[5].setComponents(l+o,d+u,m+_,y+g).normalize();else{if(t!==wr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,_,g).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(cr.x=n.normal.x>0?e.max.x:e.min.x,cr.y=n.normal.y>0?e.max.y:e.min.y,cr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ac(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function gh(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a._updateRange,h=a.updateRanges;if(r.bindBuffer(o,s),c.count===-1&&h.length===0&&r.bufferSubData(o,0,l),h.length!==0){for(let u=0,d=h.length;u<d;u++){let p=h[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}c.count!==-1&&(r.bufferSubData(o,c.offset*l.BYTES_PER_ELEMENT,l,c.offset,c.count),c.count=-1),a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var Rn=class r extends De{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],_=[],m=[];for(let v=0;v<h;v++){let A=v*d-a;for(let g=0;g<c;g++){let y=g*u-s;f.push(y,-A,0),_.push(0,0,1),m.push(g/o),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let A=0;A<o;A++){let g=A+c*v,y=A+c*(v+1),w=A+1+c*(v+1),E=A+1+c*v;p.push(g,y,E),p.push(y,w,E)}this.setIndex(p),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Me={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},oe={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Rt={basic:{uniforms:st([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:st([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:st([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:st([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:st([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:st([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:st([oe.points,oe.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:st([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:st([oe.common,oe.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:st([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:st([oe.sprite,oe.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:st([oe.common,oe.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:st([oe.lights,oe.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};Rt.physical={uniforms:st([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};var hr={r:0,b:0,g:0},mi=new Vt,Ah=new xe;function _h(r,e,t,i,n,s,a){let o=new ye(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let v=m.isScene===!0?m.background:null;return v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v}function _(m,v){m.getRGB(hr,gc(r)),i.buffers.color.setClear(hr.r,hr.g,hr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(m,v=1){o.set(m),h=v,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,_(o,h)},render:function(m){let v=!1,A=f(m);A===null?_(o,h):A&&A.isColor&&(_(A,1),v=!0);let g=r.xr.getEnvironmentBlendMode();g==="additive"?i.buffers.color.setClear(0,0,0,1,a):g==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)},addToRenderList:function(m,v){let A=f(v);A&&(A.isCubeTexture||A.mapping===rs)?(c===void 0&&(c=new Ze(new en(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:tn(Rt.backgroundCube.uniforms),vertexShader:Rt.backgroundCube.vertexShader,fragmentShader:Rt.backgroundCube.fragmentShader,side:ot,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(g,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),mi.copy(v.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ah.makeRotationFromEuler(mi)),c.material.toneMapped=Ie.getTransfer(A.colorSpace)!==ze,u===A&&d===A.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=A,d=A.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Ze(new Rn(2,2),new Pt({name:"BackgroundMaterial",uniforms:tn(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ie.getTransfer(A.colorSpace)!==ze,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),u===A&&d===A.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=A,d=A.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function vh(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=c(null),s=n,a=!1;function o(v){return r.bindVertexArray(v)}function l(v){return r.deleteVertexArray(v)}function c(v){let A=[],g=[],y=[];for(let w=0;w<t;w++)A[w]=0,g[w]=0,y[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:g,attributeDivisors:y,object:v,attributes:{},index:null}}function h(){let v=s.newAttributes;for(let A=0,g=v.length;A<g;A++)v[A]=0}function u(v){d(v,0)}function d(v,A){let g=s.newAttributes,y=s.enabledAttributes,w=s.attributeDivisors;g[v]=1,y[v]===0&&(r.enableVertexAttribArray(v),y[v]=1),w[v]!==A&&(r.vertexAttribDivisor(v,A),w[v]=A)}function p(){let v=s.newAttributes,A=s.enabledAttributes;for(let g=0,y=A.length;g<y;g++)A[g]!==v[g]&&(r.disableVertexAttribArray(g),A[g]=0)}function f(v,A,g,y,w,E,T){T===!0?r.vertexAttribIPointer(v,A,g,w,E):r.vertexAttribPointer(v,A,g,y,w,E)}function _(){m(),a=!0,s!==n&&(s=n,o(s.object))}function m(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(v,A,g,y,w){let E=!1,T=(function(L,k,O){let C=O.wireframe===!0,P=i[L.id];P===void 0&&(P={},i[L.id]=P);let H=P[k.id];H===void 0&&(H={},P[k.id]=H);let $=H[C];return $===void 0&&($=c(r.createVertexArray()),H[C]=$),$})(y,g,A);s!==T&&(s=T,o(s.object)),E=(function(L,k,O,C){let P=s.attributes,H=k.attributes,$=0,J=O.getAttributes();for(let j in J)if(J[j].location>=0){let ee=P[j],K=H[j];if(K===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),ee===void 0||ee.attribute!==K||K&&ee.data!==K.data)return!0;$++}return s.attributesNum!==$||s.index!==C})(v,y,g,w),E&&(function(L,k,O,C){let P={},H=k.attributes,$=0,J=O.getAttributes();for(let j in J)if(J[j].location>=0){let ee=H[j];ee===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));let K={};K.attribute=ee,ee&&ee.data&&(K.data=ee.data),P[j]=K,$++}s.attributes=P,s.attributesNum=$,s.index=C})(v,y,g,w),w!==null&&e.update(w,r.ELEMENT_ARRAY_BUFFER),(E||a)&&(a=!1,(function(L,k,O,C){h();let P=C.attributes,H=O.getAttributes(),$=k.defaultAttributeValues;for(let J in H){let j=H[J];if(j.location>=0){let ee=P[J];if(ee===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){let K=ee.normalized,he=ee.itemSize,ue=e.get(ee);if(ue===void 0)continue;let Z=ue.buffer,re=ue.type,ce=ue.bytesPerElement,M=re===r.INT||re===r.UNSIGNED_INT||ee.gpuType===lc;if(ee.isInterleavedBufferAttribute){let B=ee.data,D=B.stride,W=ee.offset;if(B.isInstancedInterleavedBuffer){for(let V=0;V<j.locationSize;V++)d(j.location+V,B.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let V=0;V<j.locationSize;V++)u(j.location+V);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let V=0;V<j.locationSize;V++)f(j.location+V,he/j.locationSize,re,K,D*ce,(W+he/j.locationSize*V)*ce,M)}else{if(ee.isInstancedBufferAttribute){for(let B=0;B<j.locationSize;B++)d(j.location+B,ee.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let B=0;B<j.locationSize;B++)u(j.location+B);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let B=0;B<j.locationSize;B++)f(j.location+B,he/j.locationSize,re,K,he*ce,he/j.locationSize*B*ce,M)}}else if($!==void 0){let K=$[J];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(j.location,K);break;case 3:r.vertexAttrib3fv(j.location,K);break;case 4:r.vertexAttrib4fv(j.location,K);break;default:r.vertexAttrib1fv(j.location,K)}}}}p()})(v,A,g,y),w!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))},reset:_,resetDefaultState:m,dispose:function(){_();for(let v in i){let A=i[v];for(let g in A){let y=A[g];for(let w in y)l(y[w].object),delete y[w];delete A[g]}delete i[v]}},releaseStatesOfGeometry:function(v){if(i[v.id]===void 0)return;let A=i[v.id];for(let g in A){let y=A[g];for(let w in y)l(y[w].object),delete y[w];delete A[g]}delete i[v.id]},releaseStatesOfProgram:function(v){for(let A in i){let g=i[A];if(g[v.id]===void 0)continue;let y=g[v.id];for(let w in y)l(y[w].object),delete y[w];delete g[v.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function xh(r,e,t){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let c=0;c<o;c++)this.render(s[c],a[c]);else{l.multiDrawArraysWEBGL(i,s,0,a,0,o);let c=0;for(let h=0;h<o;h++)c+=a[h];t.update(c,i,1)}},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)n(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u];for(let u=0;u<l.length;u++)t.update(h,i,l[u])}}}function yh(r,e,t,i){let n;function s(u){if(u==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(u){return u===jt||i.convert(u)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let d=u===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==yi&&i.convert(u)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==ei&&!d)},precision:a,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:h,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:h>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Mh(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Wt,o=new Be,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,_=null;if(f!==0){if(_=l.value,p!==!0||_===null){let m=d+4*f,v=u.matrixWorldInverse;o.getNormalMatrix(v),(_===null||_.length<m)&&(_=new Float32Array(m));for(let A=0,g=d;A!==f;++A,g+=4)a.copy(h[A]).applyMatrix4(v,o),a.normal.toArray(_,g),_[g+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,_}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||n;return n=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,_=h.clipShadows,m=r.get(h);if(!n||p===null||p.length===0||s&&!_)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let v=s?0:i,A=4*v,g=m.clippingState||null;l.value=g,g=c(p,u,A,d);for(let y=0;y!==A;++y)g[y]=t[y];m.clippingState=g,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}}}function Bh(r){let e=new WeakMap;function t(n,s){return s===na?n.mapping=Yi:s===ra&&(n.mapping=$i),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===na||s===ra){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new da(a.height);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Ir=class extends Tn{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bl=[.125,.215,.35,.446,.526,.582],_n=20,ks=new Ir,Sl=new ye,Hs=null,Gs=0,Ws=0,js=!1,gi=(1+Math.sqrt(5))/2,ki=1/gi,bl=[new S(-gi,ki,0),new S(gi,ki,0),new S(-ki,0,gi),new S(ki,0,gi),new S(0,gi,-ki),new S(0,gi,ki),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],Dr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Hs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hs,Gs,Ws),this._renderer.xr.enabled=js,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:ss,format:jt,colorSpace:oi,depthBuffer:!1},n=El(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Bl.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=Bl[d-a+4-1]:d===0&&(f=0),c.push(f);let _=1/(p-2),m=-_,v=1+_,A=[m,m,v,m,v,v,m,m,v,v,m,v],g=6,y=6,w=3,E=2,T=1,L=new Float32Array(w*y*g),k=new Float32Array(E*y*g),O=new Float32Array(T*y*g);for(let P=0;P<g;P++){let H=P%3*2/3-1,$=P>2?0:-1,J=[H,$,0,H+2/3,$,0,H+2/3,$+1,0,H,$,0,H+2/3,$+1,0,H,$+1,0];L.set(J,w*y*P),k.set(A,E*y*P);let j=[P,P,P,P,P,P];O.set(j,T*y*P)}let C=new De;C.setAttribute("position",new rt(L,w)),C.setAttribute("uv",new rt(k,E)),C.setAttribute("faceIndex",new rt(O,T)),o.push(C),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(_n),h=new S(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:_n,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,ks)}_sceneToCubeUV(e,t,i,n){let s=new it(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Sl),l.toneMapping=ii,l.autoClear=!1;let u=new Qi({name:"PMREM.Background",side:ot,depthWrite:!1,depthTest:!1}),d=new Ze(new en,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(Sl),p=!0);for(let _=0;_<6;_++){let m=_%3;m===0?(s.up.set(0,a[_],0),s.lookAt(o[_],0,0)):m===1?(s.up.set(0,0,a[_]),s.lookAt(0,o[_],0)):(s.up.set(0,a[_],0),s.lookAt(0,0,o[_]));let v=this._cubeSize;ur(n,m*v,_>2?v:0,v,v),l.setRenderTarget(n),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Yi||e.mapping===$i;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;ur(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,ks)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=bl[(n-s-1)%bl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Ze(this._lodPlanes[n],c),u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,_=isFinite(s)?1+Math.floor(3*f):_n;_>_n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],v=0;for(let y=0;y<_n;++y){let w=y/f,E=Math.exp(-w*w/2);m.push(E),y===0?v+=E:y<_&&(v+=2*E)}for(let y=0;y<m.length;y++)m[y]=m[y]/v;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:A}=this;u.dTheta.value=p,u.mipInt.value=A-i;let g=this._sizeLods[n];ur(t,3*g*(n>A-4?n-A+4:0),4*(this._cubeSize-g),3*g,2*g),l.setRenderTarget(t),l.render(h,ks)}};function El(r,e,t){let i=new Xt(r,e,t);return i.texture.mapping=rs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function wl(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tl(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function so(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sh(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===na||s===ra,o=s===Yi||s===$i;if(a||o){let l=e.get(n),c=l!==void 0?l.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==c)return t===null&&(t=new Dr(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),l.texture;if(l!==void 0)return l.texture;{let h=n.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Dr(r)),l=a?t.fromEquirectangular(n):t.fromCubemap(n),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),n.addEventListener("dispose",i),l.texture):null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function bh(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Eh(r,e,t,i){let n={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete n[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let _=h.array;d=h.version;for(let m=0,v=_.length;m<v;m+=3){let A=_[m+0],g=_[m+1],y=_[m+2];c.push(A,g,g,y,y,A)}}else{if(u===void 0)return;{let _=u.array;d=u.version;for(let m=0,v=_.length/3-1;m<v;m+=3){let A=m+0,g=m+1,y=m+2;c.push(A,g,g,y,y,A)}}}let p=new(mc(c)?Vr:Fr)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function wh(r,e,t){let i,n,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(i,l,n,o*s,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(i,l,n,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<c;u++)this.render(o[u]/s,l[u]);else{h.multiDrawElementsWEBGL(i,l,0,n,o,0,c);let u=0;for(let d=0;d<c;d++)u+=l[d];t.update(u,i,1)}},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,n,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p];for(let p=0;p<h.length;p++)t.update(d,i,h[p])}}}function Th(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Rh(r,e,t){let i=new WeakMap,n=new Ue;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let L=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],A=0;d===!0&&(A=1),p===!0&&(A=2),f===!0&&(A=3);let g=a.attributes.position.count*A,y=1;g>e.maxTextureSize&&(y=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let w=new Float32Array(g*y*4*h),E=new Cr(w,g,y,h);E.type=ei,E.needsUpdate=!0;let T=4*A;for(let k=0;k<h;k++){let O=_[k],C=m[k],P=v[k],H=g*y*4*k;for(let $=0;$<O.count;$++){let J=$*T;d===!0&&(n.fromBufferAttribute(O,$),w[H+J+0]=n.x,w[H+J+1]=n.y,w[H+J+2]=n.z,w[H+J+3]=0),p===!0&&(n.fromBufferAttribute(C,$),w[H+J+4]=n.x,w[H+J+5]=n.y,w[H+J+6]=n.z,w[H+J+7]=0),f===!0&&(n.fromBufferAttribute(P,$),w[H+J+8]=n.x,w[H+J+9]=n.y,w[H+J+10]=n.z,w[H+J+11]=P.itemSize===4?n.w:1)}}u={count:h,texture:E,size:new te(g,y)},i.set(a,u),a.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function Ch(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(n.get(c)!==o&&(e.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return c},dispose:function(){n=new WeakMap}}}var Ur=class extends gt{constructor(e,t,i,n,s,a,o,l,c,h){if((h=h!==void 0?h:ji)!==ji&&h!==wn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ji&&(i=Ki),i===void 0&&h===wn&&(i=zn),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ft,this.minFilter=l!==void 0?l:ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},_c=new gt,vc=new Ur(1,1);vc.compareFunction=515;var xc=new Cr,yc=new ha,Mc=new Pr,Rl=[],Cl=[],Ll=new Float32Array(16),Fl=new Float32Array(9),Vl=new Float32Array(4);function ln(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=Rl[n];if(s===void 0&&(s=new Float32Array(n),Rl[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ye(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function $e(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function os(r,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Lh(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Fh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ye(t,e))return;r.uniform2fv(this.addr,e),$e(t,e)}}function Vh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ye(t,e))return;r.uniform3fv(this.addr,e),$e(t,e)}}function Ph(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ye(t,e))return;r.uniform4fv(this.addr,e),$e(t,e)}}function Ih(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ye(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$e(t,e)}else{if(Ye(t,i))return;Vl.set(i),r.uniformMatrix2fv(this.addr,!1,Vl),$e(t,i)}}function Dh(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ye(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$e(t,e)}else{if(Ye(t,i))return;Fl.set(i),r.uniformMatrix3fv(this.addr,!1,Fl),$e(t,i)}}function Uh(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ye(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$e(t,e)}else{if(Ye(t,i))return;Ll.set(i),r.uniformMatrix4fv(this.addr,!1,Ll),$e(t,i)}}function Nh(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Oh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ye(t,e))return;r.uniform2iv(this.addr,e),$e(t,e)}}function zh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ye(t,e))return;r.uniform3iv(this.addr,e),$e(t,e)}}function kh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ye(t,e))return;r.uniform4iv(this.addr,e),$e(t,e)}}function Hh(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Gh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ye(t,e))return;r.uniform2uiv(this.addr,e),$e(t,e)}}function Wh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ye(t,e))return;r.uniform3uiv(this.addr,e),$e(t,e)}}function jh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ye(t,e))return;r.uniform4uiv(this.addr,e),$e(t,e)}}function Xh(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?vc:_c;t.setTexture2D(e||s,n)}function qh(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||yc,n)}function Yh(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Mc,n)}function $h(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||xc,n)}function Kh(r,e){r.uniform1fv(this.addr,e)}function Jh(r,e){let t=ln(e,this.size,2);r.uniform2fv(this.addr,t)}function Zh(r,e){let t=ln(e,this.size,3);r.uniform3fv(this.addr,t)}function Qh(r,e){let t=ln(e,this.size,4);r.uniform4fv(this.addr,t)}function eu(r,e){let t=ln(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function tu(r,e){let t=ln(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function iu(r,e){let t=ln(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function nu(r,e){r.uniform1iv(this.addr,e)}function ru(r,e){r.uniform2iv(this.addr,e)}function su(r,e){r.uniform3iv(this.addr,e)}function au(r,e){r.uniform4iv(this.addr,e)}function ou(r,e){r.uniform1uiv(this.addr,e)}function lu(r,e){r.uniform2uiv(this.addr,e)}function cu(r,e){r.uniform3uiv(this.addr,e)}function hu(r,e){r.uniform4uiv(this.addr,e)}function uu(r,e,t){let i=this.cache,n=e.length,s=os(t,n);Ye(i,s)||(r.uniform1iv(this.addr,s),$e(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||_c,s[a])}function du(r,e,t){let i=this.cache,n=e.length,s=os(t,n);Ye(i,s)||(r.uniform1iv(this.addr,s),$e(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||yc,s[a])}function pu(r,e,t){let i=this.cache,n=e.length,s=os(t,n);Ye(i,s)||(r.uniform1iv(this.addr,s),$e(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Mc,s[a])}function mu(r,e,t){let i=this.cache,n=e.length,s=os(t,n);Ye(i,s)||(r.uniform1iv(this.addr,s),$e(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||xc,s[a])}var pa=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return Lh;case 35664:return Fh;case 35665:return Vh;case 35666:return Ph;case 35674:return Ih;case 35675:return Dh;case 35676:return Uh;case 5124:case 35670:return Nh;case 35667:case 35671:return Oh;case 35668:case 35672:return zh;case 35669:case 35673:return kh;case 5125:return Hh;case 36294:return Gh;case 36295:return Wh;case 36296:return jh;case 35678:case 36198:case 36298:case 36306:case 35682:return Xh;case 35679:case 36299:case 36307:return qh;case 35680:case 36300:case 36308:case 36293:return Yh;case 36289:case 36303:case 36311:case 36292:return $h}})(t.type)}},ma=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return Kh;case 35664:return Jh;case 35665:return Zh;case 35666:return Qh;case 35674:return eu;case 35675:return tu;case 35676:return iu;case 5124:case 35670:return nu;case 35667:case 35671:return ru;case 35668:case 35672:return su;case 35669:case 35673:return au;case 5125:return ou;case 36294:return lu;case 36295:return cu;case 36296:return hu;case 35678:case 36198:case 36298:case 36306:case 35682:return uu;case 35679:case 36299:case 36307:return du;case 35680:case 36300:case 36308:case 36293:return pu;case 36289:case 36303:case 36311:case 36292:return mu}})(t.type)}},fa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Xs=/(\w+)(\])?(\[|\.)?/g;function Pl(r,e){r.seq.push(e),r.map[e.id]=e}function fu(r,e,t){let i=r.name,n=i.length;for(Xs.lastIndex=0;;){let s=Xs.exec(i),a=Xs.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){Pl(t,c===void 0?new pa(o,r,e):new ma(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new fa(o),Pl(t,h)),t=h}}}var qi=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);fu(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Il(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var gu=37297,Au=0;function Dl(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function _u(r,e){let t=(function(i){let n=Ie.getPrimaries(Ie.workingColorSpace),s=Ie.getPrimaries(i),a;switch(n===s?a="":n===Er&&s===br?a="LinearDisplayP3ToLinearSRGB":n===br&&s===Er&&(a="LinearSRGBToLinearDisplayP3"),i){case oi:case as:return[a,"LinearTransferOETF"];case mt:case ro:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vu(r,e){let t;switch(e){case Gc:t="Linear";break;case Wc:t="Reinhard";break;case jc:t="OptimizedCineon";break;case no:t="ACESFilmic";break;case qc:t="AgX";break;case Yc:t="Neutral";break;case Xc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vn(r){return r!==""}function Ul(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xu=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(r){return r.replace(xu,Mu)}var yu=new Map;function Mu(r,e){let t=Me[e];if(t===void 0){let i=yu.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Me[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return ga(t)}var Bu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(r){return r.replace(Bu,Su)}function Su(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function zl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bu(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(C){let P="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===rc?P="SHADOWMAP_TYPE_PCF":C.shadowMapType===zc?P="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===Gt&&(P="SHADOWMAP_TYPE_VSM"),P})(t),c=(function(C){let P="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case Yi:case $i:P="ENVMAP_TYPE_CUBE";break;case rs:P="ENVMAP_TYPE_CUBE_UV"}return P})(t),h=(function(C){let P="ENVMAP_MODE_REFLECTION";return C.envMap&&C.envMapMode===$i&&(P="ENVMAP_MODE_REFRACTION"),P})(t),u=(function(C){let P="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case sc:P="ENVMAP_BLENDING_MULTIPLY";break;case kc:P="ENVMAP_BLENDING_MIX";break;case Hc:P="ENVMAP_BLENDING_ADD"}return P})(t),d=(function(C){let P=C.envMapCubeUVHeight;if(P===null)return null;let H=Math.log2(P)-2,$=1/P;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:$,maxMip:H}})(t),p=(function(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",C.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vn).join(`
`)})(t),f=(function(C){let P=[];for(let H in C){let $=C[H];$!==!1&&P.push("#define "+H+" "+$)}return P.join(`
`)})(s),_=n.createProgram(),m,v,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(vn).join(`
`),m.length>0&&(m+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(vn).join(`
`),v.length>0&&(v+=`
`)):(m=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vn).join(`
`),v=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Me.tonemapping_pars_fragment:"",t.toneMapping!==ii?vu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,_u("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vn).join(`
`)),a=ga(a),a=Ul(a,t),a=Nl(a,t),o=ga(o),o=Ul(o,t),o=Nl(o,t),a=Ol(a),o=Ol(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let g=A+m+a,y=A+v+o,w=Il(n,n.VERTEX_SHADER,g),E=Il(n,n.FRAGMENT_SHADER,y);function T(C){if(r.debug.checkShaderErrors){let P=n.getProgramInfoLog(_).trim(),H=n.getShaderInfoLog(w).trim(),$=n.getShaderInfoLog(E).trim(),J=!0,j=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,w,E);else{let ee=Dl(n,w,"vertex"),K=Dl(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+ee+`
`+K)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):H!==""&&$!==""||(j=!1);j&&(C.diagnostics={runnable:J,programLog:P,vertexShader:{log:H,prefix:m},fragmentShader:{log:$,prefix:v}})}n.deleteShader(w),n.deleteShader(E),L=new qi(n,_),k=(function(P,H){let $={},J=P.getProgramParameter(H,P.ACTIVE_ATTRIBUTES);for(let j=0;j<J;j++){let ee=P.getActiveAttrib(H,j),K=ee.name,he=1;ee.type===P.FLOAT_MAT2&&(he=2),ee.type===P.FLOAT_MAT3&&(he=3),ee.type===P.FLOAT_MAT4&&(he=4),$[K]={type:ee.type,location:P.getAttribLocation(H,K),locationSize:he}}return $})(n,_)}let L,k;n.attachShader(_,w),n.attachShader(_,E),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_),this.getUniforms=function(){return L===void 0&&T(this),L},this.getAttributes=function(){return k===void 0&&T(this),k};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=n.getProgramParameter(_,gu)),O},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Au++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}var Eu=0,Aa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _a(e),t.set(e,i)),i}},_a=class{constructor(e){this.id=Eu++,this.code=e,this.usedTimes=0}};function wu(r,e,t,i,n,s,a){let o=new Lr,l=new Aa,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,v,A,g,y){let w=g.fog,E=y.geometry,T=m.isMeshStandardMaterial?g.environment:null,L=(m.isMeshStandardMaterial?t:e).get(m.envMap||T),k=L&&L.mapping===rs?L.image.height:null,O=f[m.type];m.precision!==null&&(p=n.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let C=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,P=C!==void 0?C.length:0,H,$,J,j,ee=0;if(E.morphAttributes.position!==void 0&&(ee=1),E.morphAttributes.normal!==void 0&&(ee=2),E.morphAttributes.color!==void 0&&(ee=3),O){let un=Rt[O];H=un.vertexShader,$=un.fragmentShader}else H=m.vertexShader,$=m.fragmentShader,l.update(m),J=l.getVertexShaderID(m),j=l.getFragmentShaderID(m);let K=r.getRenderTarget(),he=y.isInstancedMesh===!0,ue=y.isBatchedMesh===!0,Z=!!m.map,re=!!m.matcap,ce=!!L,M=!!m.aoMap,B=!!m.lightMap,D=!!m.bumpMap,W=!!m.normalMap,V=!!m.displacementMap,R=!!m.emissiveMap,I=!!m.metalnessMap,x=!!m.roughnessMap,F=m.anisotropy>0,N=m.clearcoat>0,U=m.dispersion>0,G=m.iridescence>0,se=m.sheen>0,ie=m.transmission>0,ne=F&&!!m.anisotropyMap,_e=N&&!!m.clearcoatMap,le=N&&!!m.clearcoatNormalMap,de=N&&!!m.clearcoatRoughnessMap,Se=G&&!!m.iridescenceMap,Le=G&&!!m.iridescenceThicknessMap,me=se&&!!m.sheenColorMap,be=se&&!!m.sheenRoughnessMap,Fe=!!m.specularMap,qe=!!m.specularColorMap,Ae=!!m.specularIntensityMap,Ne=ie&&!!m.transmissionMap,Pe=ie&&!!m.thicknessMap,vt=!!m.gradientMap,xt=!!m.alphaMap,bi=m.alphaTest>0,X=!!m.alphaHash,cn=!!m.extensions,hn=ii;m.toneMapped&&(K!==null&&K.isXRRenderTarget!==!0||(hn=r.toneMapping));let We={shaderID:O,shaderType:m.type,shaderName:m.name,vertexShader:H,fragmentShader:$,defines:m.defines,customVertexShaderID:J,customFragmentShaderID:j,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:ue,instancing:he,instancingColor:he&&y.instanceColor!==null,instancingMorph:he&&y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:oi,alphaToCoverage:!!m.alphaToCoverage,map:Z,matcap:re,envMap:ce,envMapMode:ce&&L.mapping,envMapCubeUVHeight:k,aoMap:M,lightMap:B,bumpMap:D,normalMap:W,displacementMap:d&&V,emissiveMap:R,normalMapObjectSpace:W&&m.normalMapType===1,normalMapTangentSpace:W&&m.normalMapType===0,metalnessMap:I,roughnessMap:x,anisotropy:F,anisotropyMap:ne,clearcoat:N,clearcoatMap:_e,clearcoatNormalMap:le,clearcoatRoughnessMap:de,dispersion:U,iridescence:G,iridescenceMap:Se,iridescenceThicknessMap:Le,sheen:se,sheenColorMap:me,sheenRoughnessMap:be,specularMap:Fe,specularColorMap:qe,specularIntensityMap:Ae,transmission:ie,transmissionMap:Ne,thicknessMap:Pe,gradientMap:vt,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:xt,alphaTest:bi,alphaHash:X,combine:m.combine,mapUv:Z&&_(m.map.channel),aoMapUv:M&&_(m.aoMap.channel),lightMapUv:B&&_(m.lightMap.channel),bumpMapUv:D&&_(m.bumpMap.channel),normalMapUv:W&&_(m.normalMap.channel),displacementMapUv:V&&_(m.displacementMap.channel),emissiveMapUv:R&&_(m.emissiveMap.channel),metalnessMapUv:I&&_(m.metalnessMap.channel),roughnessMapUv:x&&_(m.roughnessMap.channel),anisotropyMapUv:ne&&_(m.anisotropyMap.channel),clearcoatMapUv:_e&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(m.sheenRoughnessMap.channel),specularMapUv:Fe&&_(m.specularMap.channel),specularColorMapUv:qe&&_(m.specularColorMap.channel),specularIntensityMapUv:Ae&&_(m.specularIntensityMap.channel),transmissionMapUv:Ne&&_(m.transmissionMap.channel),thicknessMapUv:Pe&&_(m.thicknessMap.channel),alphaMapUv:xt&&_(m.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(W||F),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!E.attributes.uv&&(Z||xt),fog:!!w,useFog:m.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:y.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ee,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:hn,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Z&&m.map.isVideoTexture===!0&&Ie.getTransfer(m.map.colorSpace)===ze,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===ot,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:cn&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:cn&&m.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We},getProgramCacheKey:function(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let A in m.defines)v.push(A),v.push(m.defines[A]);return m.isRawShaderMaterial===!1&&((function(A,g){A.push(g.precision),A.push(g.outputColorSpace),A.push(g.envMapMode),A.push(g.envMapCubeUVHeight),A.push(g.mapUv),A.push(g.alphaMapUv),A.push(g.lightMapUv),A.push(g.aoMapUv),A.push(g.bumpMapUv),A.push(g.normalMapUv),A.push(g.displacementMapUv),A.push(g.emissiveMapUv),A.push(g.metalnessMapUv),A.push(g.roughnessMapUv),A.push(g.anisotropyMapUv),A.push(g.clearcoatMapUv),A.push(g.clearcoatNormalMapUv),A.push(g.clearcoatRoughnessMapUv),A.push(g.iridescenceMapUv),A.push(g.iridescenceThicknessMapUv),A.push(g.sheenColorMapUv),A.push(g.sheenRoughnessMapUv),A.push(g.specularMapUv),A.push(g.specularColorMapUv),A.push(g.specularIntensityMapUv),A.push(g.transmissionMapUv),A.push(g.thicknessMapUv),A.push(g.combine),A.push(g.fogExp2),A.push(g.sizeAttenuation),A.push(g.morphTargetsCount),A.push(g.morphAttributeCount),A.push(g.numDirLights),A.push(g.numPointLights),A.push(g.numSpotLights),A.push(g.numSpotLightMaps),A.push(g.numHemiLights),A.push(g.numRectAreaLights),A.push(g.numDirLightShadows),A.push(g.numPointLightShadows),A.push(g.numSpotLightShadows),A.push(g.numSpotLightShadowsWithMaps),A.push(g.numLightProbes),A.push(g.shadowMapType),A.push(g.toneMapping),A.push(g.numClippingPlanes),A.push(g.numClipIntersection),A.push(g.depthPacking)})(v,m),(function(A,g){o.disableAll(),g.supportsVertexTextures&&o.enable(0),g.instancing&&o.enable(1),g.instancingColor&&o.enable(2),g.instancingMorph&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),g.dispersion&&o.enable(20),A.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.skinning&&o.enable(4),g.morphTargets&&o.enable(5),g.morphNormals&&o.enable(6),g.morphColors&&o.enable(7),g.premultipliedAlpha&&o.enable(8),g.shadowMapEnabled&&o.enable(9),g.useLegacyLights&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.alphaToCoverage&&o.enable(20),A.push(o.mask)})(v,m),v.push(r.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()},getUniforms:function(m){let v=f[m.type],A;if(v){let g=Rt[v];A=ph.clone(g.uniforms)}else A=m.uniforms;return A},acquireProgram:function(m,v){let A;for(let g=0,y=h.length;g<y;g++){let w=h[g];if(w.cacheKey===v){A=w,++A.usedTimes;break}}return A===void 0&&(A=new bu(r,v,m,s),h.push(A)),A},releaseProgram:function(m){if(--m.usedTimes==0){let v=h.indexOf(m);h[v]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function Tu(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function Ru(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function kl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hl(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Ru),i.length>1&&i.sort(o||kl),n.length>1&&n.sort(o||kl)}}}function Cu(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new Hl,r.set(e,[n])):t>=i.length?(n=new Hl,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Lu(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new ye};break;case"SpotLight":t={position:new S,direction:new S,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new S,halfWidth:new S,halfHeight:new S}}return r[e.id]=t,t}}}var Fu=0;function Vu(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Pu(r){let e=new Lu,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new S);let n=new S,s=new xe,a=new xe;return{setup:function(o,l){let c=0,h=0,u=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let d=0,p=0,f=0,_=0,m=0,v=0,A=0,g=0,y=0,w=0,E=0;o.sort(Vu);let T=l===!0?Math.PI:1;for(let k=0,O=o.length;k<O;k++){let C=o[k],P=C.color,H=C.intensity,$=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=P.r*H*T,h+=P.g*H*T,u+=P.b*H*T;else if(C.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(C.sh.coefficients[j],H);E++}else if(C.isDirectionalLight){let j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity*T),C.castShadow){let ee=C.shadow,K=t.get(C);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,i.directionalShadow[d]=K,i.directionalShadowMap[d]=J,i.directionalShadowMatrix[d]=C.shadow.matrix,v++}i.directional[d]=j,d++}else if(C.isSpotLight){let j=e.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(P).multiplyScalar(H*T),j.distance=$,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,i.spot[f]=j;let ee=C.shadow;if(C.map&&(i.spotLightMap[y]=C.map,y++,ee.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[f]=ee.matrix,C.castShadow){let K=t.get(C);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,i.spotShadow[f]=K,i.spotShadowMap[f]=J,g++}f++}else if(C.isRectAreaLight){let j=e.get(C);j.color.copy(P).multiplyScalar(H),j.halfWidth.set(.5*C.width,0,0),j.halfHeight.set(0,.5*C.height,0),i.rectArea[_]=j,_++}else if(C.isPointLight){let j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity*T),j.distance=C.distance,j.decay=C.decay,C.castShadow){let ee=C.shadow,K=t.get(C);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,K.shadowCameraNear=ee.camera.near,K.shadowCameraFar=ee.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=C.shadow.matrix,A++}i.point[p]=j,p++}else if(C.isHemisphereLight){let j=e.get(C);j.skyColor.copy(C.color).multiplyScalar(H*T),j.groundColor.copy(C.groundColor).multiplyScalar(H*T),i.hemi[m]=j,m++}}_>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=u;let L=i.hash;L.directionalLength===d&&L.pointLength===p&&L.spotLength===f&&L.rectAreaLength===_&&L.hemiLength===m&&L.numDirectionalShadows===v&&L.numPointShadows===A&&L.numSpotShadows===g&&L.numSpotMaps===y&&L.numLightProbes===E||(i.directional.length=d,i.spot.length=f,i.rectArea.length=_,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=g+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,L.directionalLength=d,L.pointLength=p,L.spotLength=f,L.rectAreaLength=_,L.hemiLength=m,L.numDirectionalShadows=v,L.numPointShadows=A,L.numSpotShadows=g,L.numSpotMaps=y,L.numLightProbes=E,i.version=Fu++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let _=0,m=o.length;_<m;_++){let v=o[_];if(v.isDirectionalLight){let A=i.directional[c];A.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(f),c++}else if(v.isSpotLight){let A=i.spot[u];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(f),u++}else if(v.isRectAreaLight){let A=i.rectArea[d];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(f),a.identity(),s.copy(v.matrixWorld),s.premultiply(f),a.extractRotation(s),A.halfWidth.set(.5*v.width,0,0),A.halfHeight.set(0,.5*v.height,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),d++}else if(v.isPointLight){let A=i.point[h];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(f),h++}else if(v.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(f),p++}}},state:i}}function Gl(r){let e=new Pu(r),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,t.length=0,i.length=0},state:n,setupLights:function(s){e.setup(t,s)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function Iu(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new Gl(r),e.set(t,[s])):i>=n.length?(s=new Gl(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var va=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xa=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Du(r,e,t){let i=new nn,n=new te,s=new te,a=new Ue,o=new va({depthPacking:3201}),l=new xa,c={},h=t.maxTextureSize,u={[ri]:ot,[ot]:ri,2:2},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new De;f.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ze(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let v=this.type;function A(E,T){let L=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xt(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,L,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,L,p,_,null)}function g(E,T,L,k){let O=null,C=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)O=C;else if(O=L.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let P=O.uuid,H=T.uuid,$=c[P];$===void 0&&($={},c[P]=$);let J=$[H];J===void 0&&(J=O.clone(),$[H]=J,T.addEventListener("dispose",w)),O=J}return O.visible=T.visible,O.wireframe=T.wireframe,O.side=k===Gt?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],O.alphaMap=T.alphaMap,O.alphaTest=T.alphaTest,O.map=T.map,O.clipShadows=T.clipShadows,O.clippingPlanes=T.clippingPlanes,O.clipIntersection=T.clipIntersection,O.displacementMap=T.displacementMap,O.displacementScale=T.displacementScale,O.displacementBias=T.displacementBias,O.wireframeLinewidth=T.wireframeLinewidth,O.linewidth=T.linewidth,L.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(r.properties.get(O).light=L),O}function y(E,T,L,k,O){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===Gt)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let P=e.update(E),H=E.material;if(Array.isArray(H)){let $=P.groups;for(let J=0,j=$.length;J<j;J++){let ee=$[J],K=H[ee.materialIndex];if(K&&K.visible){let he=g(E,K,k,O);E.onBeforeShadow(r,E,T,L,P,he,ee),r.renderBufferDirect(L,null,P,he,E,ee),E.onAfterShadow(r,E,T,L,P,he,ee)}}}else if(H.visible){let $=g(E,H,k,O);E.onBeforeShadow(r,E,T,L,P,$,null),r.renderBufferDirect(L,null,P,$,E,null),E.onAfterShadow(r,E,T,L,P,$,null)}}let C=E.children;for(let P=0,H=C.length;P<H;P++)y(C[P],T,L,k,O)}function w(E){E.target.removeEventListener("dispose",w);for(let T in c){let L=c[T],k=E.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}this.render=function(E,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let k=r.getRenderTarget(),O=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),P=r.state;P.setBlending(0),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let H=v!==Gt&&this.type===Gt,$=v===Gt&&this.type!==Gt;for(let J=0,j=E.length;J<j;J++){let ee=E[J],K=ee.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);let he=K.getFrameExtents();if(n.multiply(he),s.copy(K.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/he.x),n.x=s.x*he.x,K.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/he.y),n.y=s.y*he.y,K.mapSize.y=s.y)),K.map===null||H===!0||$===!0){let Z=this.type!==Gt?{minFilter:ft,magFilter:ft}:{};K.map!==null&&K.map.dispose(),K.map=new Xt(n.x,n.y,Z),K.map.texture.name=ee.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();let ue=K.getViewportCount();for(let Z=0;Z<ue;Z++){let re=K.getViewport(Z);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),P.viewport(a),K.updateMatrices(ee,Z),i=K.getFrustum(),y(T,L,K.camera,ee,this.type)}K.isPointLightShadow!==!0&&this.type===Gt&&A(K,L),K.needsUpdate=!1}v=this.type,m.needsUpdate=!1,r.setRenderTarget(k,O,C)}}function Uu(r){let e=new function(){let x=!1,F=new Ue,N=null,U=new Ue(0,0,0,0);return{setMask:function(G){N===G||x||(r.colorMask(G,G,G,G),N=G)},setLocked:function(G){x=G},setClear:function(G,se,ie,ne,_e){_e===!0&&(G*=ne,se*=ne,ie*=ne),F.set(G,se,ie,ne),U.equals(F)===!1&&(r.clearColor(G,se,ie,ne),U.copy(F))},reset:function(){x=!1,N=null,U.set(-1,0,0,0)}}},t=new function(){let x=!1,F=null,N=null,U=null;return{setTest:function(G){G?ce(r.DEPTH_TEST):M(r.DEPTH_TEST)},setMask:function(G){F===G||x||(r.depthMask(G),F=G)},setFunc:function(G){if(N!==G){switch(G){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}N=G}},setLocked:function(G){x=G},setClear:function(G){U!==G&&(r.clearDepth(G),U=G)},reset:function(){x=!1,F=null,N=null,U=null}}},i=new function(){let x=!1,F=null,N=null,U=null,G=null,se=null,ie=null,ne=null,_e=null;return{setTest:function(le){x||(le?ce(r.STENCIL_TEST):M(r.STENCIL_TEST))},setMask:function(le){F===le||x||(r.stencilMask(le),F=le)},setFunc:function(le,de,Se){N===le&&U===de&&G===Se||(r.stencilFunc(le,de,Se),N=le,U=de,G=Se)},setOp:function(le,de,Se){se===le&&ie===de&&ne===Se||(r.stencilOp(le,de,Se),se=le,ie=de,ne=Se)},setLocked:function(le){x=le},setClear:function(le){_e!==le&&(r.clearStencil(le),_e=le)},reset:function(){x=!1,F=null,N=null,U=null,G=null,se=null,ie=null,ne=null,_e=null}}},n=new WeakMap,s=new WeakMap,a={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,p=null,f=null,_=null,m=null,v=null,A=null,g=new ye(0,0,0),y=0,w=!1,E=null,T=null,L=null,k=null,O=null,C=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,H=0,$=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),P=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),P=H>=2);let J=null,j={},ee=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),he=new Ue().fromArray(ee),ue=new Ue().fromArray(K);function Z(x,F,N,U){let G=new Uint8Array(4),se=r.createTexture();r.bindTexture(x,se),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ie=0;ie<N;ie++)x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?r.texImage3D(F,0,r.RGBA,1,1,U,0,r.RGBA,r.UNSIGNED_BYTE,G):r.texImage2D(F+ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,G);return se}let re={};function ce(x){a[x]!==!0&&(r.enable(x),a[x]=!0)}function M(x){a[x]!==!1&&(r.disable(x),a[x]=!1)}re[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),e.setClear(0,0,0,1),t.setClear(1),i.setClear(0),ce(r.DEPTH_TEST),t.setFunc(3),V(!1),R(1),ce(r.CULL_FACE),W(0);let B={[Ai]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};B[103]=r.MIN,B[104]=r.MAX;let D={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[ta]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[ia]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function W(x,F,N,U,G,se,ie,ne,_e,le){if(x!==0){if(u===!1&&(ce(r.BLEND),u=!0),x===5)G=G||F,se=se||N,ie=ie||U,F===p&&G===m||(r.blendEquationSeparate(B[F],B[G]),p=F,m=G),N===f&&U===_&&se===v&&ie===A||(r.blendFuncSeparate(D[N],D[U],D[se],D[ie]),f=N,_=U,v=se,A=ie),ne.equals(g)!==!1&&_e===y||(r.blendColor(ne.r,ne.g,ne.b,_e),g.copy(ne),y=_e),d=x,w=!1;else if(x!==d||le!==w){if(p===Ai&&m===Ai||(r.blendEquation(r.FUNC_ADD),p=Ai,m=Ai),le)switch(x){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}else switch(x){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}f=null,_=null,v=null,A=null,g.set(0,0,0),y=0,d=x,w=le}}else u===!0&&(M(r.BLEND),u=!1)}function V(x){E!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),E=x)}function R(x){x!==0?(ce(r.CULL_FACE),x!==T&&(x===1?r.cullFace(r.BACK):x===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):M(r.CULL_FACE),T=x}function I(x,F,N){x?(ce(r.POLYGON_OFFSET_FILL),k===F&&O===N||(r.polygonOffset(F,N),k=F,O=N)):M(r.POLYGON_OFFSET_FILL)}return{buffers:{color:e,depth:t,stencil:i},enable:ce,disable:M,bindFramebuffer:function(x,F){return o[x]!==F&&(r.bindFramebuffer(x,F),o[x]=F,x===r.DRAW_FRAMEBUFFER&&(o[r.FRAMEBUFFER]=F),x===r.FRAMEBUFFER&&(o[r.DRAW_FRAMEBUFFER]=F),!0)},drawBuffers:function(x,F){let N=c,U=!1;if(x){N=l.get(F),N===void 0&&(N=[],l.set(F,N));let G=x.textures;if(N.length!==G.length||N[0]!==r.COLOR_ATTACHMENT0){for(let se=0,ie=G.length;se<ie;se++)N[se]=r.COLOR_ATTACHMENT0+se;N.length=G.length,U=!0}}else N[0]!==r.BACK&&(N[0]=r.BACK,U=!0);U&&r.drawBuffers(N)},useProgram:function(x){return h!==x&&(r.useProgram(x),h=x,!0)},setBlending:W,setMaterial:function(x,F){x.side===2?M(r.CULL_FACE):ce(r.CULL_FACE);let N=x.side===ot;F&&(N=!N),V(N),x.blending===1&&x.transparent===!1?W(0):W(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),t.setFunc(x.depthFunc),t.setTest(x.depthTest),t.setMask(x.depthWrite),e.setMask(x.colorWrite);let U=x.stencilWrite;i.setTest(U),U&&(i.setMask(x.stencilWriteMask),i.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),i.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),I(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):M(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:V,setCullFace:R,setLineWidth:function(x){x!==L&&(P&&r.lineWidth(x),L=x)},setPolygonOffset:I,setScissorTest:function(x){x?ce(r.SCISSOR_TEST):M(r.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=r.TEXTURE0+C-1),J!==x&&(r.activeTexture(x),J=x)},bindTexture:function(x,F,N){N===void 0&&(N=J===null?r.TEXTURE0+C-1:J);let U=j[N];U===void 0&&(U={type:void 0,texture:void 0},j[N]=U),U.type===x&&U.texture===F||(J!==N&&(r.activeTexture(N),J=N),r.bindTexture(x,F||re[x]),U.type=x,U.texture=F)},unbindTexture:function(){let x=j[J];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},updateUBOMapping:function(x,F){let N=s.get(F);N===void 0&&(N=new WeakMap,s.set(F,N));let U=N.get(x);U===void 0&&(U=r.getUniformBlockIndex(F,x.name),N.set(x,U))},uniformBlockBinding:function(x,F){let N=s.get(F).get(x);n.get(F)!==N&&(r.uniformBlockBinding(F,N,x.__bindingPointIndex),n.set(F,N))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},scissor:function(x){he.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),he.copy(x))},viewport:function(x){ue.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),ue.copy(x))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),a={},J=null,j={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,p=null,f=null,_=null,m=null,v=null,A=null,g=new ye(0,0,0),y=0,w=!1,E=null,T=null,L=null,k=null,O=null,he.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),e.reset(),t.reset(),i.reset()}}}function Nu(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(M,B){return p?new OffscreenCanvas(M,B):Tr("canvas")}function _(M,B,D){let W=1,V=ce(M);if((V.width>D||V.height>D)&&(W=D/Math.max(V.width,V.height)),W<1){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let R=Math.floor(W*V.width),I=Math.floor(W*V.height);u===void 0&&(u=f(R,I));let x=B?f(R,I):u;return x.width=R,x.height=I,x.getContext("2d").drawImage(M,0,0,R,I),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+R+"x"+I+")."),x}return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),M}return M}function m(M){return M.generateMipmaps&&M.minFilter!==ft&&M.minFilter!==Ct}function v(M){r.generateMipmap(M)}function A(M,B,D,W,V=!1){if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let R=B;if(B===r.RED&&(D===r.FLOAT&&(R=r.R32F),D===r.HALF_FLOAT&&(R=r.R16F),D===r.UNSIGNED_BYTE&&(R=r.R8)),B===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(R=r.R8UI),D===r.UNSIGNED_SHORT&&(R=r.R16UI),D===r.UNSIGNED_INT&&(R=r.R32UI),D===r.BYTE&&(R=r.R8I),D===r.SHORT&&(R=r.R16I),D===r.INT&&(R=r.R32I)),B===r.RG&&(D===r.FLOAT&&(R=r.RG32F),D===r.HALF_FLOAT&&(R=r.RG16F),D===r.UNSIGNED_BYTE&&(R=r.RG8)),B===r.RG_INTEGER&&(D===r.UNSIGNED_BYTE&&(R=r.RG8UI),D===r.UNSIGNED_SHORT&&(R=r.RG16UI),D===r.UNSIGNED_INT&&(R=r.RG32UI),D===r.BYTE&&(R=r.RG8I),D===r.SHORT&&(R=r.RG16I),D===r.INT&&(R=r.RG32I)),B===r.RGB&&D===r.UNSIGNED_INT_5_9_9_9_REV&&(R=r.RGB9_E5),B===r.RGBA){let I=V?Sr:Ie.getTransfer(W);D===r.FLOAT&&(R=r.RGBA32F),D===r.HALF_FLOAT&&(R=r.RGBA16F),D===r.UNSIGNED_BYTE&&(R=I===ze?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT_4_4_4_4&&(R=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(R=r.RGB5_A1)}return R!==r.R16F&&R!==r.R32F&&R!==r.RG16F&&R!==r.RG32F&&R!==r.RGBA16F&&R!==r.RGBA32F||e.get("EXT_color_buffer_float"),R}function g(M,B){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==ft&&M.minFilter!==Ct?Math.log2(Math.max(B.width,B.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?B.mipmaps.length:1}function y(M){let B=M.target;B.removeEventListener("dispose",y),(function(D){let W=i.get(D);if(W.__webglInit===void 0)return;let V=D.source,R=d.get(V);if(R){let I=R[W.__cacheKey];I.usedTimes--,I.usedTimes===0&&E(D),Object.keys(R).length===0&&d.delete(V)}i.remove(D)})(B),B.isVideoTexture&&h.delete(B)}function w(M){let B=M.target;B.removeEventListener("dispose",w),(function(D){let W=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(W.__webglFramebuffer[R]))for(let I=0;I<W.__webglFramebuffer[R].length;I++)r.deleteFramebuffer(W.__webglFramebuffer[R][I]);else r.deleteFramebuffer(W.__webglFramebuffer[R]);W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[R])}else{if(Array.isArray(W.__webglFramebuffer))for(let R=0;R<W.__webglFramebuffer.length;R++)r.deleteFramebuffer(W.__webglFramebuffer[R]);else r.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let R=0;R<W.__webglColorRenderbuffer.length;R++)W.__webglColorRenderbuffer[R]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[R]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}let V=D.textures;for(let R=0,I=V.length;R<I;R++){let x=i.get(V[R]);x.__webglTexture&&(r.deleteTexture(x.__webglTexture),a.memory.textures--),i.remove(V[R])}i.remove(D)})(B)}function E(M){let B=i.get(M);r.deleteTexture(B.__webglTexture);let D=M.source;delete d.get(D)[B.__cacheKey],a.memory.textures--}let T=0;function L(M,B){let D=i.get(M);if(M.isVideoTexture&&(function(W){let V=a.render.frame;h.get(W)!==V&&(h.set(W,V),W.update())})(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){let W=M.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(W.complete!==!1)return void $(D,M,B);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+B)}let k={[sa]:r.REPEAT,[En]:r.CLAMP_TO_EDGE,[aa]:r.MIRRORED_REPEAT},O={[ft]:r.NEAREST,[$c]:r.NEAREST_MIPMAP_NEAREST,[Wn]:r.NEAREST_MIPMAP_LINEAR,[Ct]:r.LINEAR,[fs]:r.LINEAR_MIPMAP_NEAREST,[Gi]:r.LINEAR_MIPMAP_LINEAR},C={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function P(M,B){if(B.type!==ei||e.has("OES_texture_float_linear")!==!1||B.magFilter!==Ct&&B.magFilter!==fs&&B.magFilter!==Wn&&B.magFilter!==Gi&&B.minFilter!==Ct&&B.minFilter!==fs&&B.minFilter!==Wn&&B.minFilter!==Gi||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(M,r.TEXTURE_WRAP_S,k[B.wrapS]),r.texParameteri(M,r.TEXTURE_WRAP_T,k[B.wrapT]),M!==r.TEXTURE_3D&&M!==r.TEXTURE_2D_ARRAY||r.texParameteri(M,r.TEXTURE_WRAP_R,k[B.wrapR]),r.texParameteri(M,r.TEXTURE_MAG_FILTER,O[B.magFilter]),r.texParameteri(M,r.TEXTURE_MIN_FILTER,O[B.minFilter]),B.compareFunction&&(r.texParameteri(M,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(M,r.TEXTURE_COMPARE_FUNC,C[B.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(B.magFilter===ft||B.minFilter!==Wn&&B.minFilter!==Gi||B.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(B.anisotropy>1||i.get(B).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");r.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,n.getMaxAnisotropy())),i.get(B).__currentAnisotropy=B.anisotropy}}}function H(M,B){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,B.addEventListener("dispose",y));let W=B.source,V=d.get(W);V===void 0&&(V={},d.set(W,V));let R=(function(I){let x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()})(B);if(R!==M.__cacheKey){V[R]===void 0&&(V[R]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,D=!0),V[R].usedTimes++;let I=V[M.__cacheKey];I!==void 0&&(V[M.__cacheKey].usedTimes--,I.usedTimes===0&&E(B)),M.__cacheKey=R,M.__webglTexture=V[R].texture}return D}function $(M,B,D){let W=r.TEXTURE_2D;(B.isDataArrayTexture||B.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),B.isData3DTexture&&(W=r.TEXTURE_3D);let V=H(M,B),R=B.source;t.bindTexture(W,M.__webglTexture,r.TEXTURE0+D);let I=i.get(R);if(R.version!==I.__version||V===!0){t.activeTexture(r.TEXTURE0+D);let x=Ie.getPrimaries(Ie.workingColorSpace),F=B.colorSpace===Hi?null:Ie.getPrimaries(B.colorSpace),N=B.colorSpace===Hi||x===F?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,B.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,B.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);let U=_(B.image,!1,n.maxTextureSize);U=re(B,U);let G=s.convert(B.format,B.colorSpace),se=s.convert(B.type),ie,ne=A(B.internalFormat,G,se,B.colorSpace,B.isVideoTexture);P(W,B);let _e=B.mipmaps,le=B.isVideoTexture!==!0,de=I.__version===void 0||V===!0,Se=R.dataReady,Le=g(B,U);if(B.isDepthTexture)ne=r.DEPTH_COMPONENT16,B.type===ei?ne=r.DEPTH_COMPONENT32F:B.type===Ki?ne=r.DEPTH_COMPONENT24:B.type===zn&&(ne=r.DEPTH24_STENCIL8),de&&(le?t.texStorage2D(r.TEXTURE_2D,1,ne,U.width,U.height):t.texImage2D(r.TEXTURE_2D,0,ne,U.width,U.height,0,G,se,null));else if(B.isDataTexture)if(_e.length>0){le&&de&&t.texStorage2D(r.TEXTURE_2D,Le,ne,_e[0].width,_e[0].height);for(let me=0,be=_e.length;me<be;me++)ie=_e[me],le?Se&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,ie.width,ie.height,G,se,ie.data):t.texImage2D(r.TEXTURE_2D,me,ne,ie.width,ie.height,0,G,se,ie.data);B.generateMipmaps=!1}else le?(de&&t.texStorage2D(r.TEXTURE_2D,Le,ne,U.width,U.height),Se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,U.width,U.height,G,se,U.data)):t.texImage2D(r.TEXTURE_2D,0,ne,U.width,U.height,0,G,se,U.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){le&&de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,ne,_e[0].width,_e[0].height,U.depth);for(let me=0,be=_e.length;me<be;me++)ie=_e[me],B.format!==jt?G!==null?le?Se&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,ie.width,ie.height,U.depth,G,ie.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,me,ne,ie.width,ie.height,U.depth,0,ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,ie.width,ie.height,U.depth,G,se,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,me,ne,ie.width,ie.height,U.depth,0,G,se,ie.data)}else{le&&de&&t.texStorage2D(r.TEXTURE_2D,Le,ne,_e[0].width,_e[0].height);for(let me=0,be=_e.length;me<be;me++)ie=_e[me],B.format!==jt?G!==null?le?Se&&t.compressedTexSubImage2D(r.TEXTURE_2D,me,0,0,ie.width,ie.height,G,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,me,ne,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Se&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,ie.width,ie.height,G,se,ie.data):t.texImage2D(r.TEXTURE_2D,me,ne,ie.width,ie.height,0,G,se,ie.data)}else if(B.isDataArrayTexture)le?(de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,ne,U.width,U.height,U.depth),Se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,G,se,U.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ne,U.width,U.height,U.depth,0,G,se,U.data);else if(B.isData3DTexture)le?(de&&t.texStorage3D(r.TEXTURE_3D,Le,ne,U.width,U.height,U.depth),Se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,G,se,U.data)):t.texImage3D(r.TEXTURE_3D,0,ne,U.width,U.height,U.depth,0,G,se,U.data);else if(B.isFramebufferTexture){if(de)if(le)t.texStorage2D(r.TEXTURE_2D,Le,ne,U.width,U.height);else{let me=U.width,be=U.height;for(let Fe=0;Fe<Le;Fe++)t.texImage2D(r.TEXTURE_2D,Fe,ne,me,be,0,G,se,null),me>>=1,be>>=1}}else if(_e.length>0){if(le&&de){let me=ce(_e[0]);t.texStorage2D(r.TEXTURE_2D,Le,ne,me.width,me.height)}for(let me=0,be=_e.length;me<be;me++)ie=_e[me],le?Se&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,G,se,ie):t.texImage2D(r.TEXTURE_2D,me,ne,G,se,ie);B.generateMipmaps=!1}else if(le){if(de){let me=ce(U);t.texStorage2D(r.TEXTURE_2D,Le,ne,me.width,me.height)}Se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,G,se,U)}else t.texImage2D(r.TEXTURE_2D,0,ne,G,se,U);m(B)&&v(W),I.__version=R.version,B.onUpdate&&B.onUpdate(B)}M.__version=B.version}function J(M,B,D,W,V,R){let I=s.convert(D.format,D.colorSpace),x=s.convert(D.type),F=A(D.internalFormat,I,x,D.colorSpace);if(!i.get(B).__hasExternalTextures){let N=Math.max(1,B.width>>R),U=Math.max(1,B.height>>R);V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?t.texImage3D(V,R,F,N,U,B.depth,0,I,x,null):t.texImage2D(V,R,F,N,U,0,I,x,null)}t.bindFramebuffer(r.FRAMEBUFFER,M),Z(B)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,V,i.get(D).__webglTexture,0,ue(B)):(V===r.TEXTURE_2D||V>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,V,i.get(D).__webglTexture,R),t.bindFramebuffer(r.FRAMEBUFFER,null)}function j(M,B,D){if(r.bindRenderbuffer(r.RENDERBUFFER,M),B.depthBuffer&&!B.stencilBuffer){let W=r.DEPTH_COMPONENT24;if(D||Z(B)){let V=B.depthTexture;V&&V.isDepthTexture&&(V.type===ei?W=r.DEPTH_COMPONENT32F:V.type===Ki&&(W=r.DEPTH_COMPONENT24));let R=ue(B);Z(B)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,R,W,B.width,B.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,R,W,B.width,B.height)}else r.renderbufferStorage(r.RENDERBUFFER,W,B.width,B.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,M)}else if(B.depthBuffer&&B.stencilBuffer){let W=ue(B);D&&Z(B)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,W,r.DEPTH24_STENCIL8,B.width,B.height):Z(B)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W,r.DEPTH24_STENCIL8,B.width,B.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,M)}else{let W=B.textures;for(let V=0;V<W.length;V++){let R=W[V],I=s.convert(R.format,R.colorSpace),x=s.convert(R.type),F=A(R.internalFormat,I,x,R.colorSpace),N=ue(B);D&&Z(B)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,N,F,B.width,B.height):Z(B)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N,F,B.width,B.height):r.renderbufferStorage(r.RENDERBUFFER,F,B.width,B.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ee(M){let B=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!B.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");(function(W,V){if(V&&V.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,W),!V.depthTexture||!V.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(V.depthTexture).__webglTexture&&V.depthTexture.image.width===V.width&&V.depthTexture.image.height===V.height||(V.depthTexture.image.width=V.width,V.depthTexture.image.height=V.height,V.depthTexture.needsUpdate=!0),L(V.depthTexture,0);let R=i.get(V.depthTexture).__webglTexture,I=ue(V);if(V.depthTexture.format===ji)Z(V)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,R,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,R,0);else{if(V.depthTexture.format!==wn)throw new Error("Unknown depthTexture format");Z(V)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,R,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,R,0)}})(B.__webglFramebuffer,M)}else if(D){B.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(r.FRAMEBUFFER,B.__webglFramebuffer[W]),B.__webglDepthbuffer[W]=r.createRenderbuffer(),j(B.__webglDepthbuffer[W],M,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,B.__webglFramebuffer),B.__webglDepthbuffer=r.createRenderbuffer(),j(B.__webglDepthbuffer,M,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}let K=[],he=[];function ue(M){return Math.min(n.maxSamples,M.samples)}function Z(M){let B=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function re(M,B){let D=M.colorSpace,W=M.format,V=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||D!==oi&&D!==Hi&&(Ie.getTransfer(D)===ze?W===jt&&V===yi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),B}function ce(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=function(){let M=T;return M>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+n.maxTextures),T+=1,M},this.resetTextureUnits=function(){T=0},this.setTexture2D=L,this.setTexture2DArray=function(M,B){let D=i.get(M);M.version>0&&D.__version!==M.version?$(D,M,B):t.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+B)},this.setTexture3D=function(M,B){let D=i.get(M);M.version>0&&D.__version!==M.version?$(D,M,B):t.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+B)},this.setTextureCube=function(M,B){let D=i.get(M);M.version>0&&D.__version!==M.version?(function(W,V,R){if(V.image.length!==6)return;let I=H(W,V),x=V.source;t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+R);let F=i.get(x);if(x.version!==F.__version||I===!0){t.activeTexture(r.TEXTURE0+R);let N=Ie.getPrimaries(Ie.workingColorSpace),U=V.colorSpace===Hi?null:Ie.getPrimaries(V.colorSpace),G=V.colorSpace===Hi||N===U?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,V.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,V.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);let se=V.isCompressedTexture||V.image[0].isCompressedTexture,ie=V.image[0]&&V.image[0].isDataTexture,ne=[];for(let Ae=0;Ae<6;Ae++)ne[Ae]=se||ie?ie?V.image[Ae].image:V.image[Ae]:_(V.image[Ae],!0,n.maxCubemapSize),ne[Ae]=re(V,ne[Ae]);let _e=ne[0],le=s.convert(V.format,V.colorSpace),de=s.convert(V.type),Se=A(V.internalFormat,le,de,V.colorSpace),Le=V.isVideoTexture!==!0,me=F.__version===void 0||I===!0,be=x.dataReady,Fe,qe=g(V,_e);if(P(r.TEXTURE_CUBE_MAP,V),se){Le&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,qe,Se,_e.width,_e.height);for(let Ae=0;Ae<6;Ae++){Fe=ne[Ae].mipmaps;for(let Ne=0;Ne<Fe.length;Ne++){let Pe=Fe[Ne];V.format!==jt?le!==null?Le?be&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne,0,0,Pe.width,Pe.height,le,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne,Se,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?be&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne,0,0,Pe.width,Pe.height,le,de,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne,Se,Pe.width,Pe.height,0,le,de,Pe.data)}}}else{if(Fe=V.mipmaps,Le&&me){Fe.length>0&&qe++;let Ae=ce(ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,qe,Se,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(ie){Le?be&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ne[Ae].width,ne[Ae].height,le,de,ne[Ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Se,ne[Ae].width,ne[Ae].height,0,le,de,ne[Ae].data);for(let Ne=0;Ne<Fe.length;Ne++){let Pe=Fe[Ne].image[Ae].image;Le?be&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne+1,0,0,Pe.width,Pe.height,le,de,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne+1,Se,Pe.width,Pe.height,0,le,de,Pe.data)}}else{Le?be&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,le,de,ne[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Se,le,de,ne[Ae]);for(let Ne=0;Ne<Fe.length;Ne++){let Pe=Fe[Ne];Le?be&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne+1,0,0,le,de,Pe.image[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne+1,Se,le,de,Pe.image[Ae])}}}m(V)&&v(r.TEXTURE_CUBE_MAP),F.__version=x.version,V.onUpdate&&V.onUpdate(V)}W.__version=V.version})(D,M,B):t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+B)},this.rebindTextures=function(M,B,D){let W=i.get(M);B!==void 0&&J(W.__webglFramebuffer,M,M.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&ee(M)},this.setupRenderTarget=function(M){let B=M.texture,D=i.get(M),W=i.get(B);M.addEventListener("dispose",w);let V=M.textures,R=M.isWebGLCubeRenderTarget===!0,I=V.length>1;if(I||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=B.version,a.memory.textures++),R){D.__webglFramebuffer=[];for(let x=0;x<6;x++)if(B.mipmaps&&B.mipmaps.length>0){D.__webglFramebuffer[x]=[];for(let F=0;F<B.mipmaps.length;F++)D.__webglFramebuffer[x][F]=r.createFramebuffer()}else D.__webglFramebuffer[x]=r.createFramebuffer()}else{if(B.mipmaps&&B.mipmaps.length>0){D.__webglFramebuffer=[];for(let x=0;x<B.mipmaps.length;x++)D.__webglFramebuffer[x]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(I)for(let x=0,F=V.length;x<F;x++){let N=i.get(V[x]);N.__webglTexture===void 0&&(N.__webglTexture=r.createTexture(),a.memory.textures++)}if(M.samples>0&&Z(M)===!1){D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let x=0;x<V.length;x++){let F=V[x];D.__webglColorRenderbuffer[x]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[x]);let N=s.convert(F.format,F.colorSpace),U=s.convert(F.type),G=A(F.internalFormat,N,U,F.colorSpace,M.isXRRenderTarget===!0),se=ue(M);r.renderbufferStorageMultisample(r.RENDERBUFFER,se,G,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+x,r.RENDERBUFFER,D.__webglColorRenderbuffer[x])}r.bindRenderbuffer(r.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),j(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(R){t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),P(r.TEXTURE_CUBE_MAP,B);for(let x=0;x<6;x++)if(B.mipmaps&&B.mipmaps.length>0)for(let F=0;F<B.mipmaps.length;F++)J(D.__webglFramebuffer[x][F],M,B,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+x,F);else J(D.__webglFramebuffer[x],M,B,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+x,0);m(B)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(I){for(let x=0,F=V.length;x<F;x++){let N=V[x],U=i.get(N);t.bindTexture(r.TEXTURE_2D,U.__webglTexture),P(r.TEXTURE_2D,N),J(D.__webglFramebuffer,M,N,r.COLOR_ATTACHMENT0+x,r.TEXTURE_2D,0),m(N)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let x=r.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(x=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(x,W.__webglTexture),P(x,B),B.mipmaps&&B.mipmaps.length>0)for(let F=0;F<B.mipmaps.length;F++)J(D.__webglFramebuffer[F],M,B,r.COLOR_ATTACHMENT0,x,F);else J(D.__webglFramebuffer,M,B,r.COLOR_ATTACHMENT0,x,0);m(B)&&v(x),t.unbindTexture()}M.depthBuffer&&ee(M)},this.updateRenderTargetMipmap=function(M){let B=M.textures;for(let D=0,W=B.length;D<W;D++){let V=B[D];if(m(V)){let R=M.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,I=i.get(V).__webglTexture;t.bindTexture(R,I),v(R),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(M){if(M.samples>0){if(Z(M)===!1){let B=M.textures,D=M.width,W=M.height,V=r.COLOR_BUFFER_BIT,R=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=i.get(M),x=B.length>1;if(x)for(let F=0;F<B.length;F++)t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,I.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let F=0;F<B.length;F++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(V|=r.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(V|=r.STENCIL_BUFFER_BIT)),x){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,I.__webglColorRenderbuffer[F]);let N=i.get(B[F]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,D,W,0,0,D,W,V,r.NEAREST),l===!0&&(K.length=0,he.length=0,K.push(r.COLOR_ATTACHMENT0+F),M.depthBuffer&&M.resolveDepthBuffer===!1&&(K.push(R),he.push(R),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,he)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),x)for(let F=0;F<B.length;F++){t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,I.__webglColorRenderbuffer[F]);let N=i.get(B[F]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,I.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,N,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let B=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[B])}}},this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Z}function Ou(r,e){return{convert:function(t,i=""){let n,s=Ie.getTransfer(i);if(t===yi)return r.UNSIGNED_BYTE;if(t===cc)return r.UNSIGNED_SHORT_4_4_4_4;if(t===hc)return r.UNSIGNED_SHORT_5_5_5_1;if(t===35902)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===1010)return r.BYTE;if(t===1011)return r.SHORT;if(t===oc)return r.UNSIGNED_SHORT;if(t===lc)return r.INT;if(t===Ki)return r.UNSIGNED_INT;if(t===ei)return r.FLOAT;if(t===ss)return r.HALF_FLOAT;if(t===1021)return r.ALPHA;if(t===1022)return r.RGB;if(t===jt)return r.RGBA;if(t===1024)return r.LUMINANCE;if(t===1025)return r.LUMINANCE_ALPHA;if(t===ji)return r.DEPTH_COMPONENT;if(t===wn)return r.DEPTH_STENCIL;if(t===Kc)return r.RED;if(t===uc)return r.RED_INTEGER;if(t===1030)return r.RG;if(t===dc)return r.RG_INTEGER;if(t===pc)return r.RGBA_INTEGER;if(t===gs||t===As||t===_s||t===vs)if(s===ze){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===gs)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===As)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===_s)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===vs)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===gs)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===As)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===_s)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===vs)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===wo||t===To||t===Ro||t===Co){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===wo)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===To)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Ro)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Co)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Lo||t===Fo||t===Vo){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===Lo||t===Fo)return s===ze?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===Vo)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(t===Po||t===Io||t===Do||t===Uo||t===No||t===Oo||t===zo||t===ko||t===Ho||t===Go||t===Wo||t===jo||t===Xo||t===qo){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===Po)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Io)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Do)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Uo)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===No)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Oo)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===zo)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===ko)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Ho)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Go)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Wo)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===jo)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Xo)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===qo)return s===ze?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===xs||t===Yo||t===$o){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===xs)return s===ze?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Yo)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===$o)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===36283||t===Ko||t===Jo||t===Zo){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===xs)return n.COMPRESSED_RED_RGTC1_EXT;if(t===Ko)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Jo)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Zo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===zn?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var ya=class extends it{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ti=class extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zu={type:"move"},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),v=this._getHandJoint(c,_);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=m.radius),v.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zu)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ti;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ma=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new gt;e.properties.get(n).__webglTexture=t.texture,t.depthNear==i.depthNear&&t.depthFar==i.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,n=new Pt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ze(new Rn(20,20),n)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},Ba=class extends si{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,_=new Ma,m=t.getContextAttributes(),v=null,A=null,g=[],y=[],w=new te,E=null,T=new it;T.layers.enable(1),T.viewport=new Ue;let L=new it;L.layers.enable(2),L.viewport=new Ue;let k=[T,L],O=new ya;O.layers.enable(1),O.layers.enable(2);let C=null,P=null;function H(Z){let re=y.indexOf(Z.inputSource);if(re===-1)return;let ce=g[re];ce!==void 0&&(ce.update(Z.inputSource,Z.frame,c||a),ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",$),n.removeEventListener("inputsourceschange",J);for(let Z=0;Z<g.length;Z++){let re=y[Z];re!==null&&(y[Z]=null,g[Z].disconnect(re))}C=null,P=null,_.reset(),e.setRenderTarget(v),p=null,d=null,u=null,n=null,A=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}function J(Z){for(let re=0;re<Z.removed.length;re++){let ce=Z.removed[re],M=y.indexOf(ce);M>=0&&(y[M]=null,g[M].disconnect(ce))}for(let re=0;re<Z.added.length;re++){let ce=Z.added[re],M=y.indexOf(ce);if(M===-1){for(let D=0;D<g.length;D++){if(D>=y.length){y.push(ce),M=D;break}if(y[D]===null){y[D]=ce,M=D;break}}if(M===-1)break}let B=g[M];B&&B.connect(ce)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=g[Z];return re===void 0&&(re=new Mn,g[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=g[Z];return re===void 0&&(re=new Mn,g[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=g[Z];return re===void 0&&(re=new Mn,g[Z]=re),re.getHandSpace()},this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",$),n.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),n.renderState.layers===void 0){let re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,re),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Xt(p.framebufferWidth,p.framebufferHeight,{format:jt,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,ce=null,M=null;m.depth&&(M=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?wn:ji,ce=m.stencil?zn:Ki);let B={colorFormat:t.RGBA8,depthFormat:M,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(B),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Xt(d.textureWidth,d.textureHeight,{format:jt,type:yi,depthTexture:new Ur(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ue.setContext(n),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let j=new S,ee=new S;function K(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;_.texture!==null&&(Z.near=_.depthNear,Z.far=_.depthFar),O.near=L.near=T.near=Z.near,O.far=L.far=T.far=Z.far,C===O.near&&P===O.far||(n.updateRenderState({depthNear:O.near,depthFar:O.far}),C=O.near,P=O.far,T.near=C,T.far=P,L.near=C,L.far=P,T.updateProjectionMatrix(),L.updateProjectionMatrix(),Z.updateProjectionMatrix());let re=Z.parent,ce=O.cameras;K(O,re);for(let M=0;M<ce.length;M++)K(ce[M],re);ce.length===2?(function(M,B,D){j.setFromMatrixPosition(B.matrixWorld),ee.setFromMatrixPosition(D.matrixWorld);let W=j.distanceTo(ee),V=B.projectionMatrix.elements,R=D.projectionMatrix.elements,I=V[14]/(V[10]-1),x=V[14]/(V[10]+1),F=(V[9]+1)/V[5],N=(V[9]-1)/V[5],U=(V[8]-1)/V[0],G=(R[8]+1)/R[0],se=I*U,ie=I*G,ne=W/(-U+G),_e=ne*-U;B.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(_e),M.translateZ(ne),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert();let le=I+ne,de=x+ne,Se=se-_e,Le=ie+(W-_e),me=F*x/de*le,be=N*x/de*le;M.projectionMatrix.makePerspective(Se,Le,me,be,le,de),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()})(O,T,L):O.projectionMatrix.copy(T.projectionMatrix),(function(M,B,D){D===null?M.matrix.copy(B.matrixWorld):(M.matrix.copy(D.matrixWorld),M.matrix.invert(),M.matrix.multiply(B.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(B.projectionMatrix),M.projectionMatrixInverse.copy(B.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=2*oa*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)})(Z,O,re)},this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null};let he=null,ue=new Ac;ue.setAnimationLoop((function(Z,re){if(h=re.getViewerPose(c||a),f=re,h!==null){let ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let M=!1;ce.length!==O.cameras.length&&(O.cameras.length=0,M=!0);for(let D=0;D<ce.length;D++){let W=ce[D],V=null;if(p!==null)V=p.getViewport(W);else{let I=u.getViewSubImage(d,W);V=I.viewport,D===0&&(e.setRenderTargetTextures(A,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(A))}let R=k[D];R===void 0&&(R=new it,R.layers.enable(D),R.viewport=new Ue,k[D]=R),R.matrix.fromArray(W.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(W.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(V.x,V.y,V.width,V.height),D===0&&(O.matrix.copy(R.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),M===!0&&O.cameras.push(R)}let B=n.enabledFeatures;if(B&&B.includes("depth-sensing")){let D=u.getDepthInformation(ce[0]);D&&D.isValid&&D.texture&&_.init(e,D,n.renderState)}}for(let ce=0;ce<g.length;ce++){let M=y[ce],B=g[ce];M!==null&&B!==void 0&&B.update(M,re,c||a)}_.render(e,O),he&&he(Z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),f=null})),this.setAnimationLoop=function(Z){he=Z},this.dispose=function(){}}},fi=new Vt,ku=new xe;function Hu(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===ot&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===ot&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;if(o&&(n.envMap.value=o,fi.copy(l),fi.x*=-1,fi.y*=-1,fi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),n.envMapRotation.value.setFromMatrix4(ku.makeRotationFromEuler(fi)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap){n.lightMap.value=s.lightMap;let c=r._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=s.lightMapIntensity*c,t(s.lightMap,n.lightMapTransform)}s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,gc(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(n,s)):s.isMeshStandardMaterial?(i(n,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ot&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Gu(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let _=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let v=f[m];if(typeof _=="number"||typeof _=="boolean"){if(v!==_)return f[m]=_,!0}else if(v.equals(_)===!1)return v.copy(_),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[d.id]),delete n[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&((function(m){let v=m.uniforms,A=0,g=16;for(let w=0,E=v.length;w<E;w++){let T=Array.isArray(v[w])?v[w]:[v[w]];for(let L=0,k=T.length;L<k;L++){let O=T[L],C=Array.isArray(O.value)?O.value:[O.value];for(let P=0,H=C.length;P<H;P++){let $=c(C[P]),J=A%g;J!==0&&g-J<$.boundary&&(A+=g-J),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=A,A+=$.storage}}}let y=A%g;y>0&&(A+=g-y),m.__size=A,m.__cache={}})(u),p=(function(m){let v=(function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=v;let A=r.createBuffer(),g=m.__size,y=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,g,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,A),A})(u),n[u.id]=p,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let _=e.render.frame;s[u.id]!==_&&((function(m){let v=n[m.id],A=m.uniforms,g=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let y=0,w=A.length;y<w;y++){let E=Array.isArray(A[y])?A[y]:[A[y]];for(let T=0,L=E.length;T<L;T++){let k=E[T];if(l(k,y,T,g)===!0){let O=k.__offset,C=Array.isArray(k.value)?k.value:[k.value],P=0;for(let H=0;H<C.length;H++){let $=C[H],J=c($);typeof $=="number"||typeof $=="boolean"?(k.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,O+P,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=0,k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=0,k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=0):($.toArray(k.__data,P),P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=_)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}var Nr=class{constructor(e={}){let{canvas:t=Zc(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let p=new Uint32Array(4),f=new Int32Array(4),_=null,m=null,v=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;let g=this,y=!1,w=0,E=0,T=null,L=-1,k=null,O=new Ue,C=new Ue,P=null,H=new ye(0),$=0,J=t.width,j=t.height,ee=1,K=null,he=null,ue=new Ue(0,0,J,j),Z=new Ue(0,0,J,j),re=!1,ce=new nn,M=!1,B=!1,D=new xe,W=new S,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function R(){return T===null?ee:1}let I,x,F,N,U,G,se,ie,ne,_e,le,de,Se,Le,me,be,Fe,qe,Ae,Ne,Pe,vt,xt,bi,X=i;function cn(b,z){return t.getContext(b,z)}try{let b={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r164"),t.addEventListener("webglcontextlost",un,!1),t.addEventListener("webglcontextrestored",ho,!1),t.addEventListener("webglcontextcreationerror",uo,!1),X===null){let z="webgl2";if(X=cn(z,b),X===null)throw cn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}function hn(){I=new bh(X),I.init(),vt=new Ou(X,I),x=new yh(X,I,e,vt),F=new Uu(X),N=new Th(X),U=new Tu,G=new Nu(X,I,F,U,x,vt,N),se=new Bh(g),ie=new Sh(g),ne=new gh(X),xt=new vh(X,ne),_e=new Eh(X,ne,N,xt),le=new Ch(X,_e,ne,N),Ae=new Rh(X,x,G),be=new Mh(U),de=new wu(g,se,ie,I,x,xt,be),Se=new Hu(g,U),Le=new Cu,me=new Iu(I),qe=new _h(g,se,ie,F,le,d,l),Fe=new Du(g,le,x),bi=new Gu(X,N,x,F),Ne=new xh(X,I,N),Pe=new wh(X,I,N),N.programs=de.programs,g.capabilities=x,g.extensions=I,g.properties=U,g.renderLists=Le,g.shadowMap=Fe,g.state=F,g.info=N}hn();let We=new Ba(g,X);function un(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ho(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let b=N.autoReset,z=Fe.enabled,q=Fe.autoUpdate,Q=Fe.needsUpdate,Y=Fe.type;hn(),N.autoReset=b,Fe.enabled=z,Fe.autoUpdate=q,Fe.needsUpdate=Q,Fe.type=Y}function uo(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function po(b){let z=b.target;z.removeEventListener("dispose",po),(function(q){(function(Q){let Y=U.get(Q).programs;Y!==void 0&&(Y.forEach((function(ae){de.releaseProgram(ae)})),Q.isShaderMaterial&&de.releaseShaderCache(Q))})(q),U.remove(q)})(z)}function mo(b,z,q){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=ot,b.needsUpdate=!0,Hn(b,z,q),b.side=ri,b.needsUpdate=!0,Hn(b,z,q),b.side=2):Hn(b,z,q)}this.xr=We,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let b=I.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=I.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(J,j,!1))},this.getSize=function(b){return b.set(J,j)},this.setSize=function(b,z,q=!0){We.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(J=b,j=z,t.width=Math.floor(b*ee),t.height=Math.floor(z*ee),q===!0&&(t.style.width=b+"px",t.style.height=z+"px"),this.setViewport(0,0,b,z))},this.getDrawingBufferSize=function(b){return b.set(J*ee,j*ee).floor()},this.setDrawingBufferSize=function(b,z,q){J=b,j=z,ee=q,t.width=Math.floor(b*q),t.height=Math.floor(z*q),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(O)},this.getViewport=function(b){return b.copy(ue)},this.setViewport=function(b,z,q,Q){b.isVector4?ue.set(b.x,b.y,b.z,b.w):ue.set(b,z,q,Q),F.viewport(O.copy(ue).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(Z)},this.setScissor=function(b,z,q,Q){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,z,q,Q),F.scissor(C.copy(Z).multiplyScalar(ee).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(b){F.setScissorTest(re=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(b=!0,z=!0,q=!0){let Q=0;if(b){let Y=!1;if(T!==null){let ae=T.texture.format;Y=ae===pc||ae===dc||ae===uc}if(Y){let ae=T.texture.type,fe=ae===yi||ae===Ki||ae===oc||ae===zn||ae===cc||ae===hc,pe=qe.getClearColor(),ve=qe.getClearAlpha(),Ee=pe.r,Ce=pe.g,Te=pe.b;fe?(p[0]=Ee,p[1]=Ce,p[2]=Te,p[3]=ve,X.clearBufferuiv(X.COLOR,0,p)):(f[0]=Ee,f[1]=Ce,f[2]=Te,f[3]=ve,X.clearBufferiv(X.COLOR,0,f))}else Q|=X.COLOR_BUFFER_BIT}z&&(Q|=X.DEPTH_BUFFER_BIT),q&&(Q|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",un,!1),t.removeEventListener("webglcontextrestored",ho,!1),t.removeEventListener("webglcontextcreationerror",uo,!1),Le.dispose(),me.dispose(),U.dispose(),se.dispose(),ie.dispose(),le.dispose(),xt.dispose(),bi.dispose(),de.dispose(),We.dispose(),We.removeEventListener("sessionstart",fo),We.removeEventListener("sessionend",go),li.stop()},this.renderBufferDirect=function(b,z,q,Q,Y,ae){z===null&&(z=V);let fe=Y.isMesh&&Y.matrixWorld.determinant()<0,pe=(function(je,Dt,yt,we,Ve){Dt.isScene!==!0&&(Dt=V),G.resetTextureUnits();let us=Dt.fog,Cc=we.isMeshStandardMaterial?Dt.environment:null,Lc=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:oi,Gn=(we.isMeshStandardMaterial?ie:se).get(we.envMap||Cc),Fc=we.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,Vc=!!yt.attributes.tangent&&(!!we.normalMap||we.anisotropy>0),Pc=!!yt.morphAttributes.position,Ic=!!yt.morphAttributes.normal,Dc=!!yt.morphAttributes.color,Bo=ii;we.toneMapped&&(T!==null&&T.isXRRenderTarget!==!0||(Bo=g.toneMapping));let So=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,Uc=So!==void 0?So.length:0,Re=U.get(we),Nc=m.state.lights;if(M===!0&&(B===!0||je!==k)){let dt=je===k&&we.id===L;be.setState(we,je,dt)}let Mt=!1;we.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==Nc.state.version||Re.outputColorSpace!==Lc||Ve.isBatchedMesh&&Re.batching===!1?Mt=!0:Ve.isBatchedMesh||Re.batching!==!0?Ve.isInstancedMesh&&Re.instancing===!1?Mt=!0:Ve.isInstancedMesh||Re.instancing!==!0?Ve.isSkinnedMesh&&Re.skinning===!1?Mt=!0:Ve.isSkinnedMesh||Re.skinning!==!0?Ve.isInstancedMesh&&Re.instancingColor===!0&&Ve.instanceColor===null||Ve.isInstancedMesh&&Re.instancingColor===!1&&Ve.instanceColor!==null||Ve.isInstancedMesh&&Re.instancingMorph===!0&&Ve.morphTexture===null||Ve.isInstancedMesh&&Re.instancingMorph===!1&&Ve.morphTexture!==null||Re.envMap!==Gn||we.fog===!0&&Re.fog!==us?Mt=!0:Re.numClippingPlanes===void 0||Re.numClippingPlanes===be.numPlanes&&Re.numIntersection===be.numIntersection?(Re.vertexAlphas!==Fc||Re.vertexTangents!==Vc||Re.morphTargets!==Pc||Re.morphNormals!==Ic||Re.morphColors!==Dc||Re.toneMapping!==Bo||Re.morphTargetsCount!==Uc)&&(Mt=!0):Mt=!0:Mt=!0:Mt=!0:Mt=!0:(Mt=!0,Re.__version=we.version);let ci=Re.currentProgram;Mt===!0&&(ci=Hn(we,Dt,Ve));let bo=!1,dn=!1,ds=!1,Qe=ci.getUniforms(),qt=Re.uniforms;if(F.useProgram(ci.program)&&(bo=!0,dn=!0,ds=!0),we.id!==L&&(L=we.id,dn=!0),bo||k!==je){Qe.setValue(X,"projectionMatrix",je.projectionMatrix),Qe.setValue(X,"viewMatrix",je.matrixWorldInverse);let dt=Qe.map.cameraPosition;dt!==void 0&&dt.setValue(X,W.setFromMatrixPosition(je.matrixWorld)),x.logarithmicDepthBuffer&&Qe.setValue(X,"logDepthBufFC",2/(Math.log(je.far+1)/Math.LN2)),(we.isMeshPhongMaterial||we.isMeshToonMaterial||we.isMeshLambertMaterial||we.isMeshBasicMaterial||we.isMeshStandardMaterial||we.isShaderMaterial)&&Qe.setValue(X,"isOrthographic",je.isOrthographicCamera===!0),k!==je&&(k=je,dn=!0,ds=!0)}if(Ve.isSkinnedMesh){Qe.setOptional(X,Ve,"bindMatrix"),Qe.setOptional(X,Ve,"bindMatrixInverse");let dt=Ve.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),Qe.setValue(X,"boneTexture",dt.boneTexture,G))}Ve.isBatchedMesh&&(Qe.setOptional(X,Ve,"batchingTexture"),Qe.setValue(X,"batchingTexture",Ve._matricesTexture,G));let ps=yt.morphAttributes;ps.position===void 0&&ps.normal===void 0&&ps.color===void 0||Ae.update(Ve,yt,ci),(dn||Re.receiveShadow!==Ve.receiveShadow)&&(Re.receiveShadow=Ve.receiveShadow,Qe.setValue(X,"receiveShadow",Ve.receiveShadow)),we.isMeshGouraudMaterial&&we.envMap!==null&&(qt.envMap.value=Gn,qt.flipEnvMap.value=Gn.isCubeTexture&&Gn.isRenderTargetTexture===!1?-1:1),we.isMeshStandardMaterial&&we.envMap===null&&Dt.environment!==null&&(qt.envMapIntensity.value=Dt.environmentIntensity),dn&&(Qe.setValue(X,"toneMappingExposure",g.toneMappingExposure),Re.needsLights&&(Bt=ds,(Tt=qt).ambientLightColor.needsUpdate=Bt,Tt.lightProbe.needsUpdate=Bt,Tt.directionalLights.needsUpdate=Bt,Tt.directionalLightShadows.needsUpdate=Bt,Tt.pointLights.needsUpdate=Bt,Tt.pointLightShadows.needsUpdate=Bt,Tt.spotLights.needsUpdate=Bt,Tt.spotLightShadows.needsUpdate=Bt,Tt.rectAreaLights.needsUpdate=Bt,Tt.hemisphereLights.needsUpdate=Bt),us&&we.fog===!0&&Se.refreshFogUniforms(qt,us),Se.refreshMaterialUniforms(qt,we,ee,j,m.state.transmissionRenderTarget[je.id]),qi.upload(X,yo(Re),qt,G));var Tt,Bt;if(we.isShaderMaterial&&we.uniformsNeedUpdate===!0&&(qi.upload(X,yo(Re),qt,G),we.uniformsNeedUpdate=!1),we.isSpriteMaterial&&Qe.setValue(X,"center",Ve.center),Qe.setValue(X,"modelViewMatrix",Ve.modelViewMatrix),Qe.setValue(X,"normalMatrix",Ve.normalMatrix),Qe.setValue(X,"modelMatrix",Ve.matrixWorld),we.isShaderMaterial||we.isRawShaderMaterial){let dt=we.uniformsGroups;for(let ms=0,Oc=dt.length;ms<Oc;ms++){let Eo=dt[ms];bi.update(Eo,ci),bi.bind(Eo,ci)}}return ci})(b,z,q,Q,Y);F.setMaterial(Q,fe);let ve=q.index,Ee=1;if(Q.wireframe===!0){if(ve=_e.getWireframeAttribute(q),ve===void 0)return;Ee=2}let Ce=q.drawRange,Te=q.attributes.position,Oe=Ce.start*Ee,ht=(Ce.start+Ce.count)*Ee;ae!==null&&(Oe=Math.max(Oe,ae.start*Ee),ht=Math.min(ht,(ae.start+ae.count)*Ee)),ve!==null?(Oe=Math.max(Oe,0),ht=Math.min(ht,ve.count)):Te!=null&&(Oe=Math.max(Oe,0),ht=Math.min(ht,Te.count));let It=ht-Oe;if(It<0||It===1/0)return;let ut;xt.setup(Y,Q,pe,q,ve);let Ge=Ne;if(ve!==null&&(ut=ne.get(ve),Ge=Pe,Ge.setIndex(ut)),Y.isMesh)Q.wireframe===!0?(F.setLineWidth(Q.wireframeLinewidth*R()),Ge.setMode(X.LINES)):Ge.setMode(X.TRIANGLES);else if(Y.isLine){let je=Q.linewidth;je===void 0&&(je=1),F.setLineWidth(je*R()),Y.isLineSegments?Ge.setMode(X.LINES):Y.isLineLoop?Ge.setMode(X.LINE_LOOP):Ge.setMode(X.LINE_STRIP)}else Y.isPoints?Ge.setMode(X.POINTS):Y.isSprite&&Ge.setMode(X.TRIANGLES);if(Y.isBatchedMesh)Y._multiDrawInstances!==null?Ge.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances):Ge.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Ge.renderInstances(Oe,It,Y.count);else if(q.isInstancedBufferGeometry){let je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Dt=Math.min(q.instanceCount,je);Ge.renderInstances(Oe,It,Dt)}else Ge.render(Oe,It)},this.compile=function(b,z,q=null){q===null&&(q=b),m=me.get(q),m.init(z),A.push(m),q.traverseVisible((function(Y){Y.isLight&&Y.layers.test(z.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))})),b!==q&&b.traverseVisible((function(Y){Y.isLight&&Y.layers.test(z.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))})),m.setupLights(g._useLegacyLights);let Q=new Set;return b.traverse((function(Y){let ae=Y.material;if(ae)if(Array.isArray(ae))for(let fe=0;fe<ae.length;fe++){let pe=ae[fe];mo(pe,q,Y),Q.add(pe)}else mo(ae,q,Y),Q.add(ae)})),A.pop(),m=null,Q},this.compileAsync=function(b,z,q=null){let Q=this.compile(b,z,q);return new Promise((Y=>{function ae(){Q.forEach((function(fe){U.get(fe).currentProgram.isReady()&&Q.delete(fe)})),Q.size!==0?setTimeout(ae,10):Y(b)}I.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)}))};let hs=null;function fo(){li.stop()}function go(){li.start()}let li=new Ac;function Ao(b,z,q,Q){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ce.intersectsSprite(b)){Q&&W.setFromMatrixPosition(b.matrixWorld).applyMatrix4(D);let ae=le.update(b),fe=b.material;fe.visible&&_.push(b,ae,fe,q,W.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ce.intersectsObject(b))){let ae=le.update(b),fe=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),W.copy(b.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),W.copy(ae.boundingSphere.center)),W.applyMatrix4(b.matrixWorld).applyMatrix4(D)),Array.isArray(fe)){let pe=ae.groups;for(let ve=0,Ee=pe.length;ve<Ee;ve++){let Ce=pe[ve],Te=fe[Ce.materialIndex];Te&&Te.visible&&_.push(b,ae,Te,q,W.z,Ce)}}else fe.visible&&_.push(b,ae,fe,q,W.z,null)}}let Y=b.children;for(let ae=0,fe=Y.length;ae<fe;ae++)Ao(Y[ae],z,q,Q)}function _o(b,z,q,Q){let Y=b.opaque,ae=b.transmissive,fe=b.transparent;m.setupLightsView(q),M===!0&&be.setGlobalState(g.clippingPlanes,q),Q&&F.viewport(O.copy(Q)),Y.length>0&&kn(Y,z,q),ae.length>0&&kn(ae,z,q),fe.length>0&&kn(fe,z,q),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function vo(b,z,q,Q){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Xt(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?ss:yi,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));let Y=m.state.transmissionRenderTarget[Q.id],ae=Q.viewport||O;Y.setSize(ae.z,ae.w);let fe=g.getRenderTarget();g.setRenderTarget(Y),g.getClearColor(H),$=g.getClearAlpha(),$<1&&g.setClearColor(16777215,.5),g.clear();let pe=g.toneMapping;g.toneMapping=ii;let ve=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),M===!0&&be.setGlobalState(g.clippingPlanes,Q),kn(b,q,Q),G.updateMultisampleRenderTarget(Y),G.updateRenderTargetMipmap(Y),I.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Ce=0,Te=z.length;Ce<Te;Ce++){let Oe=z[Ce],ht=Oe.object,It=Oe.geometry,ut=Oe.material,Ge=Oe.group;if(ut.side===2&&ht.layers.test(Q.layers)){let je=ut.side;ut.side=ot,ut.needsUpdate=!0,xo(ht,q,Q,It,ut,Ge),ut.side=je,ut.needsUpdate=!0,Ee=!0}}Ee===!0&&(G.updateMultisampleRenderTarget(Y),G.updateRenderTargetMipmap(Y))}g.setRenderTarget(fe),g.setClearColor(H,$),ve!==void 0&&(Q.viewport=ve),g.toneMapping=pe}function kn(b,z,q){let Q=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,ae=b.length;Y<ae;Y++){let fe=b[Y],pe=fe.object,ve=fe.geometry,Ee=Q===null?fe.material:Q,Ce=fe.group;pe.layers.test(q.layers)&&xo(pe,z,q,ve,Ee,Ce)}}function xo(b,z,q,Q,Y,ae){b.onBeforeRender(g,z,q,Q,Y,ae),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(g,z,q,Q,b,ae),Y.transparent===!0&&Y.side===2&&Y.forceSinglePass===!1?(Y.side=ot,Y.needsUpdate=!0,g.renderBufferDirect(q,z,Q,Y,b,ae),Y.side=ri,Y.needsUpdate=!0,g.renderBufferDirect(q,z,Q,Y,b,ae),Y.side=2):g.renderBufferDirect(q,z,Q,Y,b,ae),b.onAfterRender(g,z,q,Q,Y,ae)}function Hn(b,z,q){z.isScene!==!0&&(z=V);let Q=U.get(b),Y=m.state.lights,ae=m.state.shadowsArray,fe=Y.state.version,pe=de.getParameters(b,Y.state,ae,z,q),ve=de.getProgramCacheKey(pe),Ee=Q.programs;Q.environment=b.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(b.isMeshStandardMaterial?ie:se).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Ee===void 0&&(b.addEventListener("dispose",po),Ee=new Map,Q.programs=Ee);let Ce=Ee.get(ve);if(Ce!==void 0){if(Q.currentProgram===Ce&&Q.lightsStateVersion===fe)return Mo(b,pe),Ce}else pe.uniforms=de.getUniforms(b),b.onBuild(q,pe,g),b.onBeforeCompile(pe,g),Ce=de.acquireProgram(pe,ve),Ee.set(ve,Ce),Q.uniforms=pe.uniforms;let Te=Q.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(Te.clippingPlanes=be.uniform),Mo(b,pe),Q.needsLights=(function(Oe){return Oe.isMeshLambertMaterial||Oe.isMeshToonMaterial||Oe.isMeshPhongMaterial||Oe.isMeshStandardMaterial||Oe.isShadowMaterial||Oe.isShaderMaterial&&Oe.lights===!0})(b),Q.lightsStateVersion=fe,Q.needsLights&&(Te.ambientLightColor.value=Y.state.ambient,Te.lightProbe.value=Y.state.probe,Te.directionalLights.value=Y.state.directional,Te.directionalLightShadows.value=Y.state.directionalShadow,Te.spotLights.value=Y.state.spot,Te.spotLightShadows.value=Y.state.spotShadow,Te.rectAreaLights.value=Y.state.rectArea,Te.ltc_1.value=Y.state.rectAreaLTC1,Te.ltc_2.value=Y.state.rectAreaLTC2,Te.pointLights.value=Y.state.point,Te.pointLightShadows.value=Y.state.pointShadow,Te.hemisphereLights.value=Y.state.hemi,Te.directionalShadowMap.value=Y.state.directionalShadowMap,Te.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Te.spotShadowMap.value=Y.state.spotShadowMap,Te.spotLightMatrix.value=Y.state.spotLightMatrix,Te.spotLightMap.value=Y.state.spotLightMap,Te.pointShadowMap.value=Y.state.pointShadowMap,Te.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=Ce,Q.uniformsList=null,Ce}function yo(b){if(b.uniformsList===null){let z=b.currentProgram.getUniforms();b.uniformsList=qi.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Mo(b,z){let q=U.get(b);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}li.setAnimationLoop((function(b){hs&&hs(b)})),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(b){hs=b,We.setAnimationLoop(b),b===null?li.stop():li.start()},We.addEventListener("sessionstart",fo),We.addEventListener("sessionend",go),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(z),z=We.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,z,T),m=me.get(b,A.length),m.init(z),A.push(m),D.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ce.setFromProjectionMatrix(D),B=this.localClippingEnabled,M=be.init(this.clippingPlanes,B),_=Le.get(b,v.length),_.init(),v.push(_),Ao(b,z,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(K,he);let q=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1;q&&qe.addToRenderList(_,b),this.info.render.frame++,M===!0&&be.beginShadows();let Q=m.state.shadowsArray;Fe.render(Q,b,z),M===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=_.opaque,ae=_.transmissive;if(m.setupLights(g._useLegacyLights),z.isArrayCamera){let fe=z.cameras;if(ae.length>0)for(let pe=0,ve=fe.length;pe<ve;pe++)vo(Y,ae,b,fe[pe]);q&&qe.render(b);for(let pe=0,ve=fe.length;pe<ve;pe++){let Ee=fe[pe];_o(_,b,Ee,Ee.viewport)}}else ae.length>0&&vo(Y,ae,b,z),q&&qe.render(b),_o(_,b,z);T!==null&&(G.updateMultisampleRenderTarget(T),G.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(g,b,z),xt.resetDefaultState(),L=-1,k=null,A.pop(),A.length>0?(m=A[A.length-1],M===!0&&be.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,v.pop(),_=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,z,q){U.get(b.texture).__webglTexture=z,U.get(b.depthTexture).__webglTexture=q;let Q=U.get(b);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=q===void 0,Q.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){let q=U.get(b);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,q=0){T=b,w=z,E=q;let Q=!0,Y=null,ae=!1,fe=!1;if(b){let pe=U.get(b);pe.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(X.FRAMEBUFFER,null),Q=!1):pe.__webglFramebuffer===void 0?G.setupRenderTarget(b):pe.__hasExternalTextures&&G.rebindTextures(b,U.get(b.texture).__webglTexture,U.get(b.depthTexture).__webglTexture);let ve=b.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let Ee=U.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Y=Array.isArray(Ee[z])?Ee[z][q]:Ee[z],ae=!0):Y=b.samples>0&&G.useMultisampledRTT(b)===!1?U.get(b).__webglMultisampledFramebuffer:Array.isArray(Ee)?Ee[q]:Ee,O.copy(b.viewport),C.copy(b.scissor),P=b.scissorTest}else O.copy(ue).multiplyScalar(ee).floor(),C.copy(Z).multiplyScalar(ee).floor(),P=re;if(F.bindFramebuffer(X.FRAMEBUFFER,Y)&&Q&&F.drawBuffers(b,Y),F.viewport(O),F.scissor(C),F.setScissorTest(P),ae){let pe=U.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe.__webglTexture,q)}else if(fe){let pe=U.get(b.texture),ve=z||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,pe.__webglTexture,q||0,ve)}L=-1},this.readRenderTargetPixels=function(b,z,q,Q,Y,ae,fe){if(!b||!b.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=U.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&fe!==void 0&&(pe=pe[fe]),pe){F.bindFramebuffer(X.FRAMEBUFFER,pe);try{let ve=b.texture,Ee=ve.format,Ce=ve.type;if(!x.textureFormatReadable(Ee))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!x.textureTypeReadable(Ce))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");z>=0&&z<=b.width-Q&&q>=0&&q<=b.height-Y&&X.readPixels(z,q,Q,Y,vt.convert(Ee),vt.convert(Ce),ae)}finally{let ve=T!==null?U.get(T).__webglFramebuffer:null;F.bindFramebuffer(X.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(b,z,q=0){let Q=Math.pow(2,-q),Y=Math.floor(z.image.width*Q),ae=Math.floor(z.image.height*Q);G.setTexture2D(z,0),X.copyTexSubImage2D(X.TEXTURE_2D,q,0,0,b.x,b.y,Y,ae),F.unbindTexture()},this.copyTextureToTexture=function(b,z,q,Q=0){let Y=z.image.width,ae=z.image.height,fe=vt.convert(q.format),pe=vt.convert(q.type);G.setTexture2D(q,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment),z.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Q,b.x,b.y,Y,ae,fe,pe,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Q,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,fe,z.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,Q,b.x,b.y,fe,pe,z.image),Q===0&&q.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(b,z,q,Q,Y=0){let ae=b.max.x-b.min.x,fe=b.max.y-b.min.y,pe=b.max.z-b.min.z,ve=vt.convert(Q.format),Ee=vt.convert(Q.type),Ce;if(Q.isData3DTexture)G.setTexture3D(Q,0),Ce=X.TEXTURE_3D;else{if(!Q.isDataArrayTexture&&!Q.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");G.setTexture2DArray(Q,0),Ce=X.TEXTURE_2D_ARRAY}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment);let Te=X.getParameter(X.UNPACK_ROW_LENGTH),Oe=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ht=X.getParameter(X.UNPACK_SKIP_PIXELS),It=X.getParameter(X.UNPACK_SKIP_ROWS),ut=X.getParameter(X.UNPACK_SKIP_IMAGES),Ge=q.isCompressedTexture?q.mipmaps[Y]:q.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ge.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ge.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,b.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,b.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,b.min.z),q.isDataTexture||q.isData3DTexture?X.texSubImage3D(Ce,Y,z.x,z.y,z.z,ae,fe,pe,ve,Ee,Ge.data):Q.isCompressedArrayTexture?X.compressedTexSubImage3D(Ce,Y,z.x,z.y,z.z,ae,fe,pe,ve,Ge.data):X.texSubImage3D(Ce,Y,z.x,z.y,z.z,ae,fe,pe,ve,Ee,Ge),X.pixelStorei(X.UNPACK_ROW_LENGTH,Te),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Oe),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ht),X.pixelStorei(X.UNPACK_SKIP_ROWS,It),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ut),Y===0&&Q.generateMipmaps&&X.generateMipmap(Ce),F.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?G.setTextureCube(b,0):b.isData3DTexture?G.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?G.setTexture2DArray(b,0):G.setTexture2D(b,0),F.unbindTexture()},this.resetState=function(){w=0,E=0,T=null,F.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ro?"display-p3":"srgb",t.unpackColorSpace=Ie.workingColorSpace===as?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};var Or=class extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vt,this.environmentIntensity=1,this.environmentRotation=new Vt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var pd=new S;var md=new S,fd=new S,gd=new S,Ad=new te,_d=new te,vd=new xe,xd=new S,yd=new S,Md=new S,Bd=new te,Sd=new te,bd=new te;var Ed=new S,wd=new S;var Td=new S,Rd=new Ue,Cd=new Ue,Ld=new S,Fd=new xe,Vd=new S,Pd=new Ft,Id=new xe,Dd=new Zi;var Ud=new xe,Nd=new xe;var Od=new xe,zd=new xe;var kd=new At,Hd=new xe,Gd=new Ze,Wd=new Ft;var Sa=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,n=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let s=i[this.index];n.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var jd=new xe,Xd=new xe,qd=new xe,Yd=new xe,$d=new nn,Kd=new At,Jd=new Ft,Zd=new S,Qd=new Sa,ep=new Ze;var Mi=class extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zr=new S,kr=new S,Wl=new xe,xn=new Zi,dr=new Ft,qs=new S,jl=new S,Cn=class extends nt{constructor(e=new De,t=new Mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)zr.fromBufferAttribute(t,n-1),kr.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=zr.distanceTo(kr);e.setAttribute("lineDistance",new ge(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(n),dr.radius+=s,e.ray.intersectsSphere(dr)===!1)return;Wl.copy(n).invert(),xn.copy(e.ray).applyMatrix4(Wl);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,_=p-1;f<_;f+=c){let m=h.getX(f),v=h.getX(f+1),A=pr(this,e,xn,l,m,v);A&&t.push(A)}if(this.isLineLoop){let f=h.getX(p-1),_=h.getX(d),m=pr(this,e,xn,l,f,_);m&&t.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,_=p-1;f<_;f+=c){let m=pr(this,e,xn,l,f,f+1);m&&t.push(m)}if(this.isLineLoop){let f=pr(this,e,xn,l,p-1,d);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function pr(r,e,t,i,n,s){let a=r.geometry.attributes.position;if(zr.fromBufferAttribute(a,n),kr.fromBufferAttribute(a,s),t.distanceSqToSegment(zr,kr,qs,jl)>i)return;qs.applyMatrix4(r.matrixWorld);let o=e.ray.origin.distanceTo(qs);return o<e.near||o>e.far?void 0:{distance:o,point:jl.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,object:r}}var Xl=new S,ql=new S,Ln=class extends Cn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Xl.fromBufferAttribute(t,n),ql.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Xl.distanceTo(ql);e.setAttribute("lineDistance",new ge(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tp=new xe,ip=new Zi,np=new Ft,rp=new S;var _t=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new te:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new S,n=[],s=[],a=[],o=new S,l=new xe;for(let p=0;p<=e;p++){let f=p/e;n[p]=this.getTangentAt(f,new S)}s[0]=new S,a[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Je(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(Je(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fn=class extends _t{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new te){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ba=class extends Fn{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ao(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,n(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var mr=new S,Ys=new ao,$s=new ao,Ks=new ao,Ea=class extends _t{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new S){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=n[(c-1)%s]:(mr.subVectors(n[0],n[1]).add(n[0]),o=mr);let u=n[c%s],d=n[(c+1)%s];if(this.closed||c+2<s?l=n[(c+2)%s]:(mr.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=mr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),Ys.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,_,m),$s.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,_,m),Ks.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,_,m)}else this.curveType==="catmullrom"&&(Ys.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),$s.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Ks.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Ys.calc(h),$s.calc(h),Ks.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new S().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yl(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Bn(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function Sn(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var Hr=class extends _t{constructor(e=new te,t=new te,i=new te,n=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new te){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Sn(e,n.x,s.x,a.x,o.x),Sn(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wa=class extends _t{constructor(e=new S,t=new S,i=new S,n=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new S){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Sn(e,n.x,s.x,a.x,o.x),Sn(e,n.y,s.y,a.y,o.y),Sn(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gr=class extends _t{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends _t{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends _t{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Bn(e,n.x,s.x,a.x),Bn(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jr=class extends _t{constructor(e=new S,t=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new S){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Bn(e,n.x,s.x,a.x),Bn(e,n.y,s.y,a.y),Bn(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends _t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Yl(o,l.x,c.x,h.x,u.x),Yl(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new te().fromArray(n))}return this}},qr=Object.freeze({__proto__:null,ArcCurve:ba,CatmullRomCurve3:Ea,CubicBezierCurve:Hr,CubicBezierCurve3:wa,EllipseCurve:Fn,LineCurve:Gr,LineCurve3:Ta,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:jr,SplineCurve:Xr}),Ra=class extends _t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qr[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new qr[n.type]().fromJSON(n))}return this}},Vn=class extends Ra{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Gr(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Wr(this.currentPoint.clone(),new te(e,t),new te(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new Hr(this.currentPoint.clone(),new te(e,t),new te(i,n),new te(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Xr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let c=new Fn(e,t,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yr=class r extends De{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Je(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new S,d=new te,p=new S,f=new S,_=new S,m=0,v=0;for(let A=0;A<=e.length-1;A++)switch(A){case 0:m=e[A+1].x-e[A].x,v=e[A+1].y-e[A].y,p.x=1*v,p.y=-m,p.z=0*v,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[A+1].x-e[A].x,v=e[A+1].y-e[A].y,p.x=1*v,p.y=-m,p.z=0*v,f.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(f)}for(let A=0;A<=t;A++){let g=i+A*h*n,y=Math.sin(g),w=Math.cos(g);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*w,a.push(u.x,u.y,u.z),d.x=A/t,d.y=E/(e.length-1),o.push(d.x,d.y);let T=l[3*E+0]*y,L=l[3*E+1],k=l[3*E+0]*w;c.push(T,L,k)}}for(let A=0;A<t;A++)for(let g=0;g<e.length-1;g++){let y=g+A*e.length,w=y,E=y+e.length,T=y+e.length+1,L=y+1;s.push(w,E,L),s.push(T,L,E)}this.setIndex(s),this.setAttribute("position",new ge(a,3)),this.setAttribute("uv",new ge(o,2)),this.setAttribute("normal",new ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Ca=class r extends Yr{constructor(e=1,t=1,i=4,n=8){let s=new Vn;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},La=class r extends De{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new S,h=new te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$r=class r extends De{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,_=[],m=i/2,v=0;function A(g){let y=f,w=new te,E=new S,T=0,L=g===!0?e:t,k=g===!0?1:-1;for(let C=1;C<=n;C++)u.push(0,m*k,0),d.push(0,k,0),p.push(.5,.5),f++;let O=f;for(let C=0;C<=n;C++){let P=C/n*l+o,H=Math.cos(P),$=Math.sin(P);E.x=L*$,E.y=m*k,E.z=L*H,u.push(E.x,E.y,E.z),d.push(0,k,0),w.x=.5*H+.5,w.y=.5*$*k+.5,p.push(w.x,w.y),f++}for(let C=0;C<n;C++){let P=y+C,H=O+C;g===!0?h.push(H,H+1,P):h.push(H+1,H,P),T+=3}c.addGroup(v,T,g===!0?1:2),v+=T}(function(){let g=new S,y=new S,w=0,E=(t-e)/i;for(let T=0;T<=s;T++){let L=[],k=T/s,O=k*(t-e)+e;for(let C=0;C<=n;C++){let P=C/n,H=P*l+o,$=Math.sin(H),J=Math.cos(H);y.x=O*$,y.y=-k*i+m,y.z=O*J,u.push(y.x,y.y,y.z),g.set($,E,J).normalize(),d.push(g.x,g.y,g.z),p.push(P,1-k),L.push(f++)}_.push(L)}for(let T=0;T<n;T++)for(let L=0;L<s;L++){let k=_[L][T],O=_[L+1][T],C=_[L+1][T+1],P=_[L][T+1];h.push(k,O,P),h.push(O,C,P),w+=6}c.addGroup(v,w,0),v+=w})(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fa=class r extends $r{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bi=class r extends De{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(d,p,f,_){let m=_+1,v=[];for(let A=0;A<=m;A++){v[A]=[];let g=d.clone().lerp(f,A/m),y=p.clone().lerp(f,A/m),w=m-A;for(let E=0;E<=w;E++)v[A][E]=E===0&&A===m?g:g.clone().lerp(y,E/w)}for(let A=0;A<m;A++)for(let g=0;g<2*(m-A)-1;g++){let y=Math.floor(g/2);g%2==0?(l(v[A][y+1]),l(v[A+1][y]),l(v[A][y])):(l(v[A][y+1]),l(v[A+1][y+1]),l(v[A+1][y]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,_){_<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=_/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new S,f=new S,_=new S;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],_),o(p,f,_,d)})(n),(function(d){let p=new S;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(i),(function(){let d=new S;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let _=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(_,1-m)}var p;(function(){let f=new S,_=new S,m=new S,v=new S,A=new te,g=new te,y=new te;for(let w=0,E=0;w<s.length;w+=9,E+=6){f.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),m.set(s[w+6],s[w+7],s[w+8]),A.set(a[E+0],a[E+1]),g.set(a[E+2],a[E+3]),y.set(a[E+4],a[E+5]),v.copy(f).add(_).add(m).divideScalar(3);let T=u(v);h(A,E+0,f,T),h(g,E+2,_,T),h(y,E+4,m,T)}})(),(function(){for(let f=0;f<a.length;f+=6){let _=a[f+0],m=a[f+2],v=a[f+4],A=Math.max(_,m,v),g=Math.min(_,m,v);A>.9&&g<.1&&(_<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),v<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new ge(s,3)),this.setAttribute("normal",new ge(s.slice(),3)),this.setAttribute("uv",new ge(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Va=class r extends Bi{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},fr=new S,gr=new S,Js=new S,Ar=new xi,Pn=class extends De{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(yr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:_,b:m,c:v}=Ar;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),v.fromBufferAttribute(o,c[2]),Ar.getNormal(Js),u[0]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,u[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[2]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let A=0;A<3;A++){let g=(A+1)%3,y=u[A],w=u[g],E=Ar[h[A]],T=Ar[h[g]],L=`${y}_${w}`,k=`${w}_${y}`;k in d&&d[k]?(Js.dot(d[k].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(T.x,T.y,T.z)),d[k]=null):L in d||(d[L]={index0:c[A],index1:c[g],normal:Js.clone()})}}for(let f in d)if(d[f]){let{index0:_,index1:m}=d[f];fr.fromBufferAttribute(o,_),gr.fromBufferAttribute(o,m),p.push(fr.x,fr.y,fr.z),p.push(gr.x,gr.y,gr.z)}this.setAttribute("position",new ge(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Kr=class extends Vn{constructor(e){super(e),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Vn().fromJSON(n))}return this}},Wu=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=$l(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(i&&(s=(function(f,_,m,v){let A=[],g,y,w,E,T;for(g=0,y=_.length;g<y;g++)w=_[g]*v,E=g<y-1?_[g+1]*v:f.length,T=$l(f,w,E,v,!1),T===T.next&&(T.steiner=!0),A.push(Zu(T));for(A.sort($u),g=0;g<A.length;g++)m=Ku(A[g],m);return m})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<n;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return In(s,a,t,o,l,p,0),a};function $l(r,e,t,i,n){let s,a;if(n===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,i)>0)for(s=e;s<t;s+=i)a=Kl(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=Kl(s,r[s],r[s+1],a);return a&&ls(a,a.next)&&(Un(a),a=a.next),a}function Si(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!ls(i,i.next)&&He(i.prev,i,i.next)!==0)i=i.next;else{if(Un(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function In(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=Pa(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(_){let m,v,A,g,y,w,E,T,L=1;do{for(v=_,_=null,y=null,w=0;v;){for(w++,A=v,E=0,m=0;m<L&&(E++,A=A.nextZ,A);m++);for(T=L;E>0||T>0&&A;)E!==0&&(T===0||!A||v.z<=A.z)?(g=v,v=v.nextZ,E--):(g=A,A=A.nextZ,T--),y?y.nextZ=g:_=g,g.prevZ=y,y=g;v=A}y.nextZ=null,L*=2}while(w>1)})(f)})(r,i,n,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Xu(r,i,n,s):ju(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Un(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?In(r=qu(Si(r),e,t),e,t,i,n,s,2):a===2&&Yu(r,e,t,i,n,s):In(Si(r),e,t,i,n,s,1);break}}function ju(r){let e=r.prev,t=r,i=r.next;if(He(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Wi(n,o,s,l,a,c,f.x,f.y)&&He(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Xu(r,e,t,i){let n=r.prev,s=r,a=r.next;if(He(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,v=Pa(p,f,e,t,i),A=Pa(_,m,e,t,i),g=r.prevZ,y=r.nextZ;for(;g&&g.z>=v&&y&&y.z<=A;){if(g.x>=p&&g.x<=_&&g.y>=f&&g.y<=m&&g!==n&&g!==a&&Wi(o,h,l,u,c,d,g.x,g.y)&&He(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=p&&y.x<=_&&y.y>=f&&y.y<=m&&y!==n&&y!==a&&Wi(o,h,l,u,c,d,y.x,y.y)&&He(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=v;){if(g.x>=p&&g.x<=_&&g.y>=f&&g.y<=m&&g!==n&&g!==a&&Wi(o,h,l,u,c,d,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=A;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=m&&y!==n&&y!==a&&Wi(o,h,l,u,c,d,y.x,y.y)&&He(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function qu(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!ls(n,s)&&Bc(n,i,i.next,s)&&Dn(n,s)&&Dn(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Un(i),Un(i.next),i=r=s),i=i.next}while(i!==r);return Si(i)}function Yu(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qu(a,o)){let l=Sc(a,o);return a=Si(a,a.next),l=Si(l,l.next),In(a,e,t,i,n,s,0),void In(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function $u(r,e){return r.x-e.x}function Ku(r,e){let t=(function(n,s){let a,o=s,l=-1/0,c=n.x,h=n.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,_=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&Wi(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Dn(o,n)&&(f<_||f===_&&(o.x>a.x||o.x===a.x&&Ju(a,o)))&&(a=o,_=f)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let i=Sc(t,r);return Si(i,i.next),Si(t,t.next)}function Ju(r,e){return He(r.prev,r,e.prev)<0&&He(e.next,r,r.next)<0}function Pa(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Zu(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Wi(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Qu(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Bc(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(Dn(r,e)&&Dn(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(He(r.prev,r,e.prev)||He(r,e.prev,e))||ls(r,e)&&He(r.prev,r,r.next)>0&&He(e.prev,e,e.next)>0)}function He(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ls(r,e){return r.x===e.x&&r.y===e.y}function Bc(r,e,t,i){let n=vr(He(r,e,t)),s=vr(He(r,e,i)),a=vr(He(t,i,r)),o=vr(He(t,i,e));return n!==s&&a!==o||!(n!==0||!_r(r,t,e))||!(s!==0||!_r(r,i,e))||!(a!==0||!_r(t,r,i))||!(o!==0||!_r(t,e,i))}function _r(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function vr(r){return r>0?1:r<0?-1:0}function Dn(r,e){return He(r.prev,r,r.next)<0?He(r,e,r.next)>=0&&He(r,r.prev,e)>=0:He(r,e,r.prev)<0||He(r,r.next,e)<0}function Sc(r,e){let t=new Ia(r.i,r.x,r.y),i=new Ia(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Kl(r,e,t,i){let n=new Ia(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Un(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ia(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var ni=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Jl(e),Zl(i,e);let a=e.length;t.forEach(Jl);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Zl(i,t[l]);let o=Wu(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Jl(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Zl(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Da=class r extends De{constructor(e=new Kr([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:ed,g,y,w,E,T,L=!1;v&&(g=v.getSpacedPoints(h),L=!0,d=!1,y=v.computeFrenetFrames(h,!1),w=new S,E=new S,T=new S),d||(m=0,p=0,f=0,_=0);let k=o.extractPoints(c),O=k.shape,C=k.holes;if(!ni.isClockWise(O)){O=O.reverse();for(let R=0,I=C.length;R<I;R++){let x=C[R];ni.isClockWise(x)&&(C[R]=x.reverse())}}let P=ni.triangulateShape(O,C),H=O;for(let R=0,I=C.length;R<I;R++){let x=C[R];O=O.concat(x)}function $(R,I,x){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(I,x)}let J=O.length,j=P.length;function ee(R,I,x){let F,N,U,G=R.x-I.x,se=R.y-I.y,ie=x.x-R.x,ne=x.y-R.y,_e=G*G+se*se,le=G*ne-se*ie;if(Math.abs(le)>Number.EPSILON){let de=Math.sqrt(_e),Se=Math.sqrt(ie*ie+ne*ne),Le=I.x-se/de,me=I.y+G/de,be=((x.x-ne/Se-Le)*ne-(x.y+ie/Se-me)*ie)/(G*ne-se*ie);F=Le+G*be-R.x,N=me+se*be-R.y;let Fe=F*F+N*N;if(Fe<=2)return new te(F,N);U=Math.sqrt(Fe/2)}else{let de=!1;G>Number.EPSILON?ie>Number.EPSILON&&(de=!0):G<-Number.EPSILON?ie<-Number.EPSILON&&(de=!0):Math.sign(se)===Math.sign(ne)&&(de=!0),de?(F=-se,N=G,U=Math.sqrt(_e)):(F=G,N=se,U=Math.sqrt(_e/2))}return new te(F/U,N/U)}let K=[];for(let R=0,I=H.length,x=I-1,F=R+1;R<I;R++,x++,F++)x===I&&(x=0),F===I&&(F=0),K[R]=ee(H[R],H[x],H[F]);let he=[],ue,Z=K.concat();for(let R=0,I=C.length;R<I;R++){let x=C[R];ue=[];for(let F=0,N=x.length,U=N-1,G=F+1;F<N;F++,U++,G++)U===N&&(U=0),G===N&&(G=0),ue[F]=ee(x[F],x[U],x[G]);he.push(ue),Z=Z.concat(ue)}for(let R=0;R<m;R++){let I=R/m,x=p*Math.cos(I*Math.PI/2),F=f*Math.sin(I*Math.PI/2)+_;for(let N=0,U=H.length;N<U;N++){let G=$(H[N],K[N],F);M(G.x,G.y,-x)}for(let N=0,U=C.length;N<U;N++){let G=C[N];ue=he[N];for(let se=0,ie=G.length;se<ie;se++){let ne=$(G[se],ue[se],F);M(ne.x,ne.y,-x)}}}let re=f+_;for(let R=0;R<J;R++){let I=d?$(O[R],Z[R],re):O[R];L?(E.copy(y.normals[0]).multiplyScalar(I.x),w.copy(y.binormals[0]).multiplyScalar(I.y),T.copy(g[0]).add(E).add(w),M(T.x,T.y,T.z)):M(I.x,I.y,0)}for(let R=1;R<=h;R++)for(let I=0;I<J;I++){let x=d?$(O[I],Z[I],re):O[I];L?(E.copy(y.normals[R]).multiplyScalar(x.x),w.copy(y.binormals[R]).multiplyScalar(x.y),T.copy(g[R]).add(E).add(w),M(T.x,T.y,T.z)):M(x.x,x.y,u/h*R)}for(let R=m-1;R>=0;R--){let I=R/m,x=p*Math.cos(I*Math.PI/2),F=f*Math.sin(I*Math.PI/2)+_;for(let N=0,U=H.length;N<U;N++){let G=$(H[N],K[N],F);M(G.x,G.y,u+x)}for(let N=0,U=C.length;N<U;N++){let G=C[N];ue=he[N];for(let se=0,ie=G.length;se<ie;se++){let ne=$(G[se],ue[se],F);L?M(ne.x,ne.y+g[h-1].y,g[h-1].x+x):M(ne.x,ne.y,u+x)}}}function ce(R,I){let x=R.length;for(;--x>=0;){let F=x,N=x-1;N<0&&(N=R.length-1);for(let U=0,G=h+2*m;U<G;U++){let se=J*U,ie=J*(U+1);D(I+F+se,I+N+se,I+N+ie,I+F+ie)}}}function M(R,I,x){l.push(R),l.push(I),l.push(x)}function B(R,I,x){W(R),W(I),W(x);let F=n.length/3,N=A.generateTopUV(i,n,F-3,F-2,F-1);V(N[0]),V(N[1]),V(N[2])}function D(R,I,x,F){W(R),W(I),W(F),W(I),W(x),W(F);let N=n.length/3,U=A.generateSideWallUV(i,n,N-6,N-3,N-2,N-1);V(U[0]),V(U[1]),V(U[3]),V(U[1]),V(U[2]),V(U[3])}function W(R){n.push(l[3*R+0]),n.push(l[3*R+1]),n.push(l[3*R+2])}function V(R){s.push(R.x),s.push(R.y)}(function(){let R=n.length/3;if(d){let I=0,x=J*I;for(let F=0;F<j;F++){let N=P[F];B(N[2]+x,N[1]+x,N[0]+x)}I=h+2*m,x=J*I;for(let F=0;F<j;F++){let N=P[F];B(N[0]+x,N[1]+x,N[2]+x)}}else{for(let I=0;I<j;I++){let x=P[I];B(x[2],x[1],x[0])}for(let I=0;I<j;I++){let x=P[I];B(x[0]+J*h,x[1]+J*h,x[2]+J*h)}}i.addGroup(R,n.length/3-R,0)})(),(function(){let R=n.length/3,I=0;ce(H,I),I+=H.length;for(let x=0,F=C.length;x<F;x++){let N=C[x];ce(N,I),I+=N.length}i.addGroup(R,n.length/3-R,1)})()}this.setAttribute("position",new ge(n,3)),this.setAttribute("uv",new ge(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new qr[n.type]().fromJSON(n)),new r(i,e.options)}},ed={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new te(s,a),new te(o,l),new te(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],f=e[3*n+2],_=e[3*s],m=e[3*s+1],v=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new te(a,1-l),new te(c,1-u),new te(d,1-f),new te(_,1-v)]:[new te(o,1-l),new te(h,1-u),new te(p,1-f),new te(m,1-v)]}},Ua=class r extends Bi{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Na=class r extends Bi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Oa=class r extends De{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new S,f=new te;for(let _=0;_<=n;_++){for(let m=0;m<=i;m++){let v=s+m/i*a;p.x=u*Math.cos(v),p.y=u*Math.sin(v),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let _=0;_<n;_++){let m=_*(i+1);for(let v=0;v<i;v++){let A=v+m,g=A,y=A+i+1,w=A+i+2,E=A+1;o.push(g,y,E),o.push(y,w,E)}}this.setIndex(o),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},za=class r extends De{constructor(e=new Kr([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=n.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;ni.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,v=f.length;m<v;m++){let A=f[m];ni.isClockWise(A)===!0&&(f[m]=A.reverse())}let _=ni.triangulateShape(p,f);for(let m=0,v=f.length;m<v;m++){let A=f[m];p=p.concat(A)}for(let m=0,v=p.length;m<v;m++){let A=p[m];n.push(A.x,A.y,0),s.push(0,0,1),a.push(A.x,A.y)}for(let m=0,v=_.length;m<v;m++){let A=_[m],g=A[0]+u,y=A[1]+u,w=A[2]+u;i.push(g,y,w),l+=3}}this.setIndex(i),this.setAttribute("position",new ge(n,3)),this.setAttribute("normal",new ge(s,3)),this.setAttribute("uv",new ge(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},ka=class r extends De{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new S,d=new S,p=[],f=[],_=[],m=[];for(let v=0;v<=i;v++){let A=[],g=v/i,y=0;v===0&&a===0?y=.5/t:v===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let E=w/t;u.x=-e*Math.cos(n+E*s)*Math.sin(a+g*o),u.y=e*Math.cos(a+g*o),u.z=e*Math.sin(n+E*s)*Math.sin(a+g*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+y,1-g),A.push(c++)}h.push(A)}for(let v=0;v<i;v++)for(let A=0;A<t;A++){let g=h[v][A+1],y=h[v][A],w=h[v+1][A],E=h[v+1][A+1];(v!==0||a>0)&&p.push(g,y,E),(v!==i-1||l<Math.PI)&&p.push(y,w,E)}this.setIndex(p),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ha=class r extends Bi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},rn=class r extends De{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new S,u=new S,d=new S;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let _=f/n*s,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let _=(n+1)*p+f-1,m=(n+1)*(p-1)+f-1,v=(n+1)*(p-1)+f,A=(n+1)*p+f;a.push(_,m,A),a.push(m,v,A)}this.setIndex(a),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ga=class r extends De{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],u=new S,d=new S,p=new S,f=new S,_=new S,m=new S,v=new S;for(let g=0;g<=i;++g){let y=g/i*s*Math.PI*2;A(y,s,a,e,p),A(y+.01,s,a,e,f),m.subVectors(f,p),v.addVectors(f,p),_.crossVectors(m,v),v.crossVectors(_,m),_.normalize(),v.normalize();for(let w=0;w<=n;++w){let E=w/n*Math.PI*2,T=-t*Math.cos(E),L=t*Math.sin(E);u.x=p.x+(T*v.x+L*_.x),u.y=p.y+(T*v.y+L*_.y),u.z=p.z+(T*v.z+L*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(g/i),h.push(w/n)}}for(let g=1;g<=i;g++)for(let y=1;y<=n;y++){let w=(n+1)*(g-1)+(y-1),E=(n+1)*g+(y-1),T=(n+1)*g+y,L=(n+1)*(g-1)+y;o.push(w,E,L),o.push(E,T,L)}function A(g,y,w,E,T){let L=Math.cos(g),k=Math.sin(g),O=w/y*g,C=Math.cos(O);T.x=E*(2+C)*.5*L,T.y=E*(2+C)*k*.5,T.z=E*Math.sin(O)*.5}this.setIndex(o),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Wa=class r extends De{constructor(e=new jr(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new S,l=new S,c=new te,h=new S,u=[],d=[],p=[],f=[];function _(m){h=e.getPointAt(m/t,h);let v=a.normals[m],A=a.binormals[m];for(let g=0;g<=n;g++){let y=g/n*Math.PI*2,w=Math.sin(y),E=-Math.cos(y);l.x=E*v.x+w*A.x,l.y=E*v.y+w*A.y,l.z=E*v.z+w*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)_(m);_(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let v=0;v<=n;v++)c.x=m/t,c.y=v/n,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let v=1;v<=n;v++){let A=(n+1)*(m-1)+(v-1),g=(n+1)*m+(v-1),y=(n+1)*m+v,w=(n+1)*(m-1)+v;f.push(A,g,w),f.push(g,y,w)}})()})(),this.setIndex(f),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new qr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ja=class extends De{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new S,s=new S;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let _=0;_<3;_++){let m=o.getX(p+_),v=o.getX(p+(_+1)%3);n.fromBufferAttribute(a,m),s.fromBufferAttribute(a,v),Ql(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Ql(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ge(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ql(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var sp=Object.freeze({__proto__:null,BoxGeometry:en,CapsuleGeometry:Ca,CircleGeometry:La,ConeGeometry:Fa,CylinderGeometry:$r,DodecahedronGeometry:Va,EdgesGeometry:Pn,ExtrudeGeometry:Da,IcosahedronGeometry:Ua,LatheGeometry:Yr,OctahedronGeometry:Na,PlaneGeometry:Rn,PolyhedronGeometry:Bi,RingGeometry:Oa,ShapeGeometry:za,SphereGeometry:ka,TetrahedronGeometry:Ha,TorusGeometry:rn,TorusKnotGeometry:Ga,TubeGeometry:Wa,WireframeGeometry:ja});var Jr=class extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Zr=class extends Mi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function xr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function td(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var sn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=s)break t;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xa=class extends sn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qo,endingEnd:Qo}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case el:s=e,o=2*t-i;break;case tl:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case el:a=e,l=2*i-t;break;case tl:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(n-t),_=f*f,m=_*f,v=-d*m+2*d*_-d*f,A=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*f+1,g=(-1-p)*m+(1.5+p)*_+.5*f,y=p*m-p*_;for(let w=0;w!==o;++w)s[w]=v*a[h+w]+A*a[c+w]+g*a[l+w]+y*a[u+w];return s}},qa=class extends sn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Ya=class extends sn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},wt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xr(t,this.TimeBufferType),this.values=xr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:xr(e.times,Array),values:xr(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case ys:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return ys}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&td(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ys,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};wt.prototype.TimeBufferType=Float32Array,wt.prototype.ValueBufferType=Float32Array,wt.prototype.DefaultInterpolation=Br;var _i=class extends wt{};_i.prototype.ValueTypeName="bool",_i.prototype.ValueBufferType=Array,_i.prototype.DefaultInterpolation=Mr,_i.prototype.InterpolantFactoryMethodLinear=void 0,_i.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends wt{};$a.prototype.ValueTypeName="color";var Ka=class extends wt{};Ka.prototype.ValueTypeName="number";var Ja=class extends sn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Lt.slerpFlat(s,0,a,c-o,a,c,l);return s}},bn=class extends wt{InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}};bn.prototype.ValueTypeName="quaternion",bn.prototype.DefaultInterpolation=Br,bn.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends wt{};vi.prototype.ValueTypeName="string",vi.prototype.ValueBufferType=Array,vi.prototype.DefaultInterpolation=Mr,vi.prototype.InterpolantFactoryMethodLinear=void 0,vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends wt{};Za.prototype.ValueTypeName="vector";var ec={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Qa=class{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},id=new Qa,an=class{constructor(e){this.manager=e!==void 0?e:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise((function(n,s){i.load(e,n,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};an.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ht={},eo=class extends Error{constructor(e,t){super(e),this.response=t}},Qr=class extends an{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ec.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout((()=>{t&&t(s),this.manager.itemEnd(e)}),0),s;if(Ht[e]!==void 0)return void Ht[e].push({onLoad:t,onProgress:i,onError:n});Ht[e]=[],Ht[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then((c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ht[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,_=0,m=new ReadableStream({start(v){(function A(){u.read().then((({done:g,value:y})=>{if(g)v.close();else{_+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:p});for(let E=0,T=h.length;E<T;E++){let L=h[E];L.onProgress&&L.onProgress(w)}v.enqueue(y),A()}}))})()}});return new Response(m)}throw new eo(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)})).then((c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then((h=>new DOMParser().parseFromString(h,o)));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then((p=>d.decode(p)))}}})).then((c=>{ec.add(e,c);let h=Ht[e];delete Ht[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}})).catch((c=>{let h=Ht[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ht[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)})).finally((()=>{this.manager.itemEnd(e)})),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Nn=class extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},es=class extends Nn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Zs=new xe,tc=new S,ic=new S,ts=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nn,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(tc),ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ic),t.updateMatrixWorld(),Zs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var nc=new xe,yn=new S,Qs=new S,to=class extends ts{constructor(){super(new it(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),yn.setFromMatrixPosition(e.matrixWorld),i.position.copy(yn),Qs.copy(i.position),Qs.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Qs),i.updateMatrixWorld(),n.makeTranslation(-yn.x,-yn.y,-yn.z),nc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc)}},is=class extends Nn{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new to}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},io=class extends ts{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},On=class extends Nn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new io}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ap=new xe,op=new xe,lp=new xe;var cp=new S,hp=new Lt,up=new S,dp=new S;var pp=new S,mp=new Lt,fp=new S,gp=new S;var oo="\\[\\]\\.:\\/",nd=new RegExp("["+oo+"]","g"),ea="[^"+oo+"]",rd="[^"+oo.replace("\\.","")+"]",sd=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",ea)+/(WCOD+)?/.source.replace("WCOD",rd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ea)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ea)+"$"),ad=["material","materials","bones","map"],ke=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nd,"")}static parseTrackName(e){let t=sd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);ad.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=class{constructor(r,e,t){let i=t||ke.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray],ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ap=new Float32Array(1);var _p=new xe;var vp=new te;var xp=new S,yp=new S;var Mp=new S;var Bp=new S,Sp=new xe,bp=new xe;var Ep=new S,wp=new ye,Tp=new ye;var ns=class extends Ln{constructor(e=10,t=10,i=4473924,n=8947848){i=new ye(i),n=new ye(n);let s=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,d=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let f=u===s?i:n;f.toArray(c,d),d+=3,f.toArray(c,d),d+=3,f.toArray(c,d),d+=3,f.toArray(c,d),d+=3}let h=new De;h.setAttribute("position",new ge(l,3)),h.setAttribute("color",new ge(c,3)),super(h,new Mi({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Rp=new S,Cp=new S,Lp=new S;var Fp=new S,Vp=new Tn;var Pp=new At;var Ip=new S;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"164"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="164");var cs=class extends an{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new Qr(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}parse(e){function t(c){let h=new DataView(c),u=32/8*3+32/8*3*3+16/8,d=h.getUint32(80,!0);if(80+32/8+d*u===h.byteLength)return!0;let f=[115,111,108,105,100];for(let _=0;_<5;_++)if(i(f,h,_))return!1;return!0}function i(c,h,u){for(let d=0,p=c.length;d<p;d++)if(c[d]!==h.getUint8(u+d))return!1;return!0}function n(c){let h=new DataView(c),u=h.getUint32(80,!0),d,p,f,_=!1,m,v,A,g,y;for(let C=0;C<70;C++)h.getUint32(C,!1)==1129270351&&h.getUint8(C+4)==82&&h.getUint8(C+5)==61&&(_=!0,m=new Float32Array(u*3*3),v=h.getUint8(C+6)/255,A=h.getUint8(C+7)/255,g=h.getUint8(C+8)/255,y=h.getUint8(C+9)/255);let w=84,E=50,T=new De,L=new Float32Array(u*3*3),k=new Float32Array(u*3*3),O=new ye;for(let C=0;C<u;C++){let P=w+C*E,H=h.getFloat32(P,!0),$=h.getFloat32(P+4,!0),J=h.getFloat32(P+8,!0);if(_){let j=h.getUint16(P+48,!0);(j&32768)===0?(d=(j&31)/31,p=(j>>5&31)/31,f=(j>>10&31)/31):(d=v,p=A,f=g)}for(let j=1;j<=3;j++){let ee=P+j*12,K=C*3*3+(j-1)*3;L[K]=h.getFloat32(ee,!0),L[K+1]=h.getFloat32(ee+4,!0),L[K+2]=h.getFloat32(ee+8,!0),k[K]=H,k[K+1]=$,k[K+2]=J,_&&(O.set(d,p,f).convertSRGBToLinear(),m[K]=O.r,m[K+1]=O.g,m[K+2]=O.b)}}return T.setAttribute("position",new rt(L,3)),T.setAttribute("normal",new rt(k,3)),_&&(T.setAttribute("color",new rt(m,3)),T.hasColors=!0,T.alpha=y),T}function s(c){let h=new De,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/,f=0,_=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),v=new RegExp("normal"+_+_+_,"g"),A=[],g=[],y=[],w=new S,E,T=0,L=0,k=0;for(;(E=u.exec(c))!==null;){L=k;let O=E[0],C=(E=p.exec(O))!==null?E[1]:"";for(y.push(C);(E=d.exec(O))!==null;){let $=0,J=0,j=E[0];for(;(E=v.exec(j))!==null;)w.x=parseFloat(E[1]),w.y=parseFloat(E[2]),w.z=parseFloat(E[3]),J++;for(;(E=m.exec(j))!==null;)A.push(parseFloat(E[1]),parseFloat(E[2]),parseFloat(E[3])),g.push(w.x,w.y,w.z),$++,k++;J!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+f),$!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+f),f++}let P=L,H=k-L;h.userData.groupNames=y,h.addGroup(P,H,T),T++}return h.setAttribute("position",new ge(A,3)),h.setAttribute("normal",new ge(g,3)),h}function a(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){let h=new Uint8Array(c.length);for(let u=0;u<c.length;u++)h[u]=c.charCodeAt(u)&255;return h.buffer||h}else return c}let l=o(e);return t(l)?n(l):s(a(e))}};var bc="data:application/octet-stream;base64,QWRyaWVsIFZlbnR1cmEgcG9ydGZvbGlvIGhlYXQgc2luayB2aWV3ZXIgU1RMIGRlcml2ZWQgZnJvbSBERk1BIHNvdXJjZSAgICAgICAgICBMAwAAAACAvwAAAAAAAACAbKvjQKuHiz8stzRCbKvjQA4rQj86xeVAbKvjQFEEFT+2uzRCAAAAAIC/AAAAAAAAAIBsq+NAUQQVP7a7NEJsq+NADitCPzrF5UBsq+NAEECAPovp5UAAAAAAAIC++Q48gf1/P211NEKrh4s/LLc0Qmyr40Crh4s/LLc0Qm11NEJRBBU/trs0QgAAAAAAAL75DjyB/X8/bXU0QlEEFT+2uzRCbKvjQKuHiz8stzRCbKvjQFEEFT+2uzRCAAAAAIA/AAAAAAAAAABtdTRCDitCPzrF5UBtdTRCq4eLPyy3NEJtdTRCEECAPovp5UAAAAAAgD8AAAAAAAAAAG11NEIQQIA+i+nlQG11NEKrh4s/LLc0Qm11NEJRBBU/trs0QgAAAAAAAL75DryB/X+/bKvjQA4rQj86xeVAbXU0Qg4rQj86xeVAbKvjQBBAgD6L6eVAAAAAAAAAvvkOvIH9f79sq+NAEECAPovp5UBtdTRCDitCPzrF5UBtdTRCEECAPovp5UAAAAAAAACB/X8/vvkOvG11NEKrh4s/LLc0Qm11NEIOK0I/OsXlQGyr40Crh4s/LLc0QgAAAAAAAIH9fz+++Q68bKvjQKuHiz8stzRCbXU0Qg4rQj86xeVAbKvjQA4rQj86xeVAAAAAAACAgf1/v775DjxtdTRCEECAPovp5UBtdTRCUQQVP7a7NEJsq+NAEECAPovp5UAAAAAAAACB/X+/vvkOPGyr40AQQIA+i+nlQG11NEJRBBU/trs0Qmyr40BRBBU/trs0QgAAZYCyvQAAAACZBn8/LoWlQAwPVkF6SVBALoWlQAwPRkF6SVBAmT6vQAwPVkEV/VFAAABlgLK9AAAAAJkGfz+ZPq9ADA9WQRX9UUAuhaVADA9GQXpJUECZPq9ADA9GQRX9UUAAAB6EhL4AAAAA5EZ3P5k+r0AMD1ZBFf1RQJk+r0AMD0ZBFf1RQGGsuEAMD1ZBogpXQAAAHoSEvgAAAADkRnc/Yay4QAwPVkGiCldAmT6vQAwPRkEV/VFAYay4QAwPRkGiCldAAABNYdi+AAAAANEDaD9hrLhADA9WQaIKV0BhrLhADA9GQaIKV0AuhcFADA9WQdBKX0AAAE1h2L4AAAAA0QNoPy6FwUAMD1ZB0EpfQGGsuEAMD0ZBogpXQC6FwUAMD0ZB0EpfQAAAv9USvwAAAAAPtFE/LoXBQAwPVkHQSl9ALoXBQAwPRkHQSl9AL4TJQAwPVkF0fWpAAAC/1RK/AAAAAA+0UT8vhMlADA9WQXR9akAuhcFADA9GQdBKX0AvhMlADA9GQXR9akAAAA0FNb8AAAAA2gQ1Py+EyUAMD1ZBdH1qQC+EyUAMD0ZBdH1qQDBr0EAMD1ZBe0t4QAAADQU1vwAAAADaBDU/MGvQQAwPVkF7S3hAL4TJQAwPRkF0fWpAMGvQQAwPRkF7S3hAAAAItFG/AAAAAMnVEj8wa9BADA9WQXtLeEAwa9BADA9GQXtLeECEBNZADA9WQcEkhEAAAAi0Ub8AAAAAydUSP4QE1kAMD1ZBwSSEQDBr0EAMD0ZBe0t4QIQE1kAMD0ZBwSSEQAAAqwNovwAAAADwYdg+hATWQAwPVkHBJIRAhATWQAwPRkHBJIRAnSTaQAwPVkGK/YxAAACrA2i/AAAAAPBh2D6dJNpADA9WQYr9jECEBNZADA9GQcEkhECdJNpADA9GQYr9jEAAAPRGd78AAAAApYOEPp0k2kAMD1ZBiv2MQJ0k2kAMD0ZBiv2MQGKr3EAMD1ZBU2uWQAAA9EZ3vwAAAAClg4Q+YqvcQAwPVkFTa5ZAnSTaQAwPRkGK/YxAYqvcQAwPRkFTa5ZAAACeBn+/AAAAAKt+sj1iq9xADA9WQVNrlkBiq9xADA9GQVNrlkAthd1ADA9WQcAkoEAAAJ4Gf78AAAAAq36yPS2F3UAMD1ZBwCSgQGKr3EAMD0ZBU2uWQC2F3UAMD0ZBwCSgQAAAnQZ/vwAAAIDyfrK9LYXdQAwPVkHAJKBALYXdQAwPRkHAJKBAYqvcQAwPVkEp3qlAAACdBn+/AAAAgPJ+sr1iq9xADA9WQSneqUAthd1ADA9GQcAkoEBiq9xADA9GQSneqUAAAPRGd78AAACApYOEvmKr3EAMD1ZBKd6pQGKr3EAMD0ZBKd6pQJ0k2kAMD1ZB80uzQAAA9EZ3vwAAAIClg4S+nSTaQAwPVkHzS7NAYqvcQAwPRkEp3qlAnSTaQAwPRkHzS7NAAAC9A2i/AAAAgKJh2L6dJNpADA9WQfNLs0CdJNpADA9GQfNLs0CEBNZADA9WQcAkvEAAAL0DaL8AAACAomHYvoQE1kAMD1ZBwCS8QJ0k2kAMD0ZB80uzQIQE1kAMD0ZBwCS8QAAA5rNRvwAAAID61RK/hATWQAwPVkHAJLxAhATWQAwPRkHAJLxAMGvQQAwPVkG/I8RAAADms1G/AAAAgPrVEr8wa9BADA9WQb8jxECEBNZADA9GQcAkvEAwa9BADA9GQb8jxEAAAA0FNb8AAACA2gQ1vzBr0EAMD1ZBvyPEQDBr0EAMD0ZBvyPEQC+EyUAMD1ZBwwrLQAAADQU1vwAAAIDaBDW/L4TJQAwPVkHDCstAMGvQQAwPRkG/I8RAL4TJQAwPRkHDCstAAADh1RK/AAAAgPezUb8vhMlADA9WQcMKy0AvhMlADA9GQcMKy0AuhcFADA9WQRek0EAAAOHVEr8AAACA97NRvy6FwUAMD1ZBF6TQQC+EyUAMD0ZBwwrLQC6FwUAMD0ZBF6TQQAAATWHYvgAAAIDRA2i/LoXBQAwPVkEXpNBALoXBQAwPRkEXpNBAYay4QAwPVkEuxNRAAABNYdi+AAAAgNEDaL9hrLhADA9WQS7E1EAuhcFADA9GQRek0EBhrLhADA9GQS7E1EAAAL6DhL4AAACA8UZ3v2GsuEAMD1ZBLsTUQGGsuEAMD0ZBLsTUQJk+r0AMD1ZB8krXQAAAvoOEvgAAAIDxRne/mT6vQAwPVkHyStdAYay4QAwPRkEuxNRAmT6vQAwPRkHyStdAAADPfrK9AAAAgJ0Gf7+ZPq9ADA9WQfJK10CZPq9ADA9GQfJK10AuhaVADA9WQb4k2EAAAM9+sr0AAACAnQZ/vy6FpUAMD1ZBviTYQJk+r0AMD0ZB8krXQC6FpUAMD0ZBviTYQAAAq36yPQAAAACeBn+/LoWlQAwPVkG+JNhALoWlQAwPRkG+JNhAwcubQAwPVkHyStdAAACrfrI9AAAAAJ4Gf7/By5tADA9WQfJK10AuhaVADA9GQb4k2EDBy5tADA9GQfJK10AAANiDhD4AAAAA7UZ3v8HLm0AMD1ZB8krXQMHLm0AMD0ZB8krXQPtdkkAMD1ZBLsTUQAAA2IOEPgAAAADtRne/+12SQAwPVkEuxNRAwcubQAwPRkHyStdA+12SQAwPRkEuxNRAAABNYdg+AAAAANEDaL/7XZJADA9WQS7E1ED7XZJADA9GQS7E1EAuhYlADA9WQRek0EAAAE1h2D4AAAAA0QNovy6FiUAMD1ZBF6TQQPtdkkAMD0ZBLsTUQC6FiUAMD0ZBF6TQQAAA+tUSPwAAAADms1G/LoWJQAwPVkEXpNBALoWJQAwPRkEXpNBAL4aBQAwPVkHDCstAAAD61RI/AAAAAOazUb8vhoFADA9WQcMKy0AuhYlADA9GQRek0EAvhoFADA9GQcMKy0AAAPMENT8AAAAA8wQ1vy+GgUAMD1ZBwwrLQC+GgUAMD0ZBwwrLQFc+dUAMD1ZBvyPEQAAA8wQ1PwAAAADzBDW/Vz51QAwPVkG/I8RAL4aBQAwPRkHDCstAVz51QAwPRkG/I8RAAADOs1E/AAAAABzWEr9XPnVADA9WQb8jxEBXPnVADA9GQb8jxECrC2pADA9WQcAkvEAAAM6zUT8AAAAAHNYSv6sLakAMD1ZBwCS8QFc+dUAMD0ZBvyPEQKsLakAMD0ZBwCS8QAAA0QNoPwAAAABNYdi+qwtqQAwPVkHAJLxAqwtqQAwPRkHAJLxAfcthQAwPVkHzS7NAAADRA2g/AAAAAE1h2L59y2FADA9WQfNLs0CrC2pADA9GQcAkvEB9y2FADA9GQfNLs0AAAOdGdz8AAAAABISEvn3LYUAMD1ZB80uzQH3LYUAMD0ZB80uzQPC9XEAMD1ZBKd6pQAAA50Z3PwAAAAAEhIS+8L1cQAwPVkEp3qlAfcthQAwPRkHzS7NA8L1cQAwPRkEp3qlAAAChBn8/AAAAAFx9sr3wvVxADA9WQSneqUDwvVxADA9GQSneqUBcCltADA9WQcAkoEAAAKEGfz8AAAAAXH2yvVwKW0AMD1ZBwCSgQPC9XEAMD0ZBKd6pQFwKW0AMD0ZBwCSgQAAAogZ/PwAAAAAVfbI9XApbQAwPVkHAJKBAXApbQAwPRkHAJKBA8L1cQAwPVkFTa5ZAAACiBn8/AAAAABV9sj3wvVxADA9WQVNrlkBcCltADA9GQcAkoEDwvVxADA9GQVNrlkAAAOdGdz8AAAAABISEPvC9XEAMD1ZBU2uWQPC9XEAMD0ZBU2uWQH3LYUAMD1ZBiv2MQAAA50Z3PwAAAAAEhIQ+fcthQAwPVkGK/YxA8L1cQAwPRkFTa5ZAfcthQAwPRkGK/YxAAAC+A2g/AAAAAJxh2D59y2FADA9WQYr9jEB9y2FADA9GQYr9jECrC2pADA9WQcEkhEAAAL4DaD8AAAAAnGHYPqsLakAMD1ZBwSSEQH3LYUAMD0ZBiv2MQKsLakAMD0ZBwSSEQAAA8LNRPwAAAADs1RI/qwtqQAwPVkHBJIRAqwtqQAwPRkHBJIRAVz51QAwPVkF7S3hAAADws1E/AAAAAOzVEj9XPnVADA9WQXtLeECrC2pADA9GQcEkhEBXPnVADA9GQXtLeEAAAPMENT8AAAAA8wQ1P1c+dUAMD1ZBe0t4QFc+dUAMD0ZBe0t4QC+GgUAMD1ZBdH1qQAAA8wQ1PwAAAADzBDU/L4aBQAwPVkF0fWpAVz51QAwPRkF7S3hAL4aBQAwPRkF0fWpAAADX1RI/AAAAAP6zUT8vhoFADA9WQXR9akAvhoFADA9GQXR9akAuhYlADA9WQdBKX0AAANfVEj8AAAAA/rNRPy6FiUAMD1ZB0EpfQC+GgUAMD0ZBdH1qQC6FiUAMD0ZB0EpfQAAATWHYPgAAAADRA2g/LoWJQAwPVkHQSl9ALoWJQAwPRkHQSl9A+12SQAwPVkGiCldAAABNYdg+AAAAANEDaD/7XZJADA9WQaIKV0AuhYlADA9GQdBKX0D7XZJADA9GQaIKV0AAADiEhD4AAAAA4EZ3P/tdkkAMD1ZBogpXQPtdkkAMD0ZBogpXQMHLm0AMD1ZBFf1RQAAAOISEPgAAAADgRnc/wcubQAwPVkEV/VFA+12SQAwPRkGiCldAwcubQAwPRkEV/VFAAABCgLI9AAAAAJkGfz/By5tADA9WQRX9UUDBy5tADA9GQRX9UUAuhaVADA9WQXpJUEAAAEKAsj0AAAAAmQZ/Py6FpUAMD1ZBeklQQMHLm0AMD0ZBFf1RQC6FpUAMD0ZBeklQQAAAiYCyvQAAAACZBn8/RN87QgwPVkF6SVBARN87QgwPRkF6SVBAcRY9QgwPVkEV/VFAAACJgLK9AAAAAJkGfz9xFj1CDA9WQRX9UUBE3ztCDA9GQXpJUEBxFj1CDA9GQRX9UUAAAASEhL4AAAAA50Z3P3EWPUIMD1ZBFf1RQHEWPUIMD0ZBFf1RQCpEPkIMD1ZBogpXQAAABISEvgAAAADnRnc/KkQ+QgwPVkGiCldAcRY9QgwPRkEV/VFAKkQ+QgwPRkGiCldAAABNYdi+AAAAANEDaD8qRD5CDA9WQaIKV0AqRD5CDA9GQaIKV0BEXz9CDA9WQdBKX0AAAE1h2L4AAAAA0QNoP0RfP0IMD1ZB0EpfQCpEPkIMD0ZBogpXQERfP0IMD0ZB0EpfQAAA19USvwAAAAD+s1E/RF8/QgwPVkHQSl9ARF8/QgwPRkHQSl9AI19AQgwPVkF0fWpAAADX1RK/AAAAAP6zUT8jX0BCDA9WQXR9akBEXz9CDA9GQdBKX0AjX0BCDA9GQXR9akAAAPMENb8AAAAA8wQ1PyNfQEIMD1ZBdH1qQCNfQEIMD0ZBdH1qQAQ8QUIMD1ZBe0t4QAAA8wQ1vwAAAADzBDU/BDxBQgwPVkF7S3hAI19AQgwPRkF0fWpABDxBQgwPRkF7S3hAAAAgtFG/AAAAAKfVEj8EPEFCDA9WQXtLeEAEPEFCDA9GQXtLeEAu70FCDA9WQcEkhEAAACC0Ub8AAAAAp9USPy7vQUIMD1ZBwSSEQAQ8QUIMD0ZBe0t4QC7vQUIMD0ZBwSSEQAAAlwNovwAAAABEYtg+Lu9BQgwPVkHBJIRALu9BQgwPRkHBJIRAMXNCQgwPVkGK/YxAAACXA2i/AAAAAERi2D4xc0JCDA9WQYr9jEAu70FCDA9GQcEkhEAxc0JCDA9GQYr9jEAAAAFHd78AAAAARYOEPjFzQkIMD1ZBiv2MQDFzQkIMD0ZBiv2MQArEQkIMD1ZBU2uWQAAAAUd3vwAAAABFg4Q+CsRCQgwPVkFTa5ZAMXNCQgwPRkGK/YxACsRCQgwPRkFTa5ZAAACZBn+/AAAAAEKAsj0KxEJCDA9WQVNrlkAKxEJCDA9GQVNrlkBD30JCDA9WQcAkoEAAAJkGf78AAAAAQoCyPUPfQkIMD1ZBwCSgQArEQkIMD0ZBU2uWQEPfQkIMD0ZBwCSgQAAAmQZ/vwAAAICJgLK9Q99CQgwPVkHAJKBAQ99CQgwPRkHAJKBACsRCQgwPVkEp3qlAAACZBn+/AAAAgImAsr0KxEJCDA9WQSneqUBD30JCDA9GQcAkoEAKxEJCDA9GQSneqUAAAAFHd78AAACARYOEvgrEQkIMD1ZBKd6pQArEQkIMD0ZBKd6pQDFzQkIMD1ZB80uzQAAAAUd3vwAAAIBFg4S+MXNCQgwPVkHzS7NACsRCQgwPRkEp3qlAMXNCQgwPRkHzS7NAAACpA2i/AAAAgPZh2L4xc0JCDA9WQfNLs0Axc0JCDA9GQfNLs0Au70FCDA9WQcAkvEAAAKkDaL8AAACA9mHYvi7vQUIMD1ZBwCS8QDFzQkIMD0ZB80uzQC7vQUIMD0ZBwCS8QAAA/rNRvwAAAIDX1RK/Lu9BQgwPVkHAJLxALu9BQgwPRkHAJLxABDxBQgwPVkG/I8RAAAD+s1G/AAAAgNfVEr8EPEFCDA9WQb8jxEAu70FCDA9GQcAkvEAEPEFCDA9GQb8jxEAAAPMENb8AAACA8wQ1vwQ8QUIMD1ZBvyPEQAQ8QUIMD0ZBvyPEQCNfQEIMD1ZBwwrLQAAA8wQ1vwAAAIDzBDW/I19AQgwPVkHDCstABDxBQgwPRkG/I8RAI19AQgwPRkHDCstAAAD61RK/AAAAgOazUb8jX0BCDA9WQcMKy0AjX0BCDA9GQcMKy0BEXz9CDA9WQRek0EAAAPrVEr8AAACA5rNRv0RfP0IMD1ZBF6TQQCNfQEIMD0ZBwwrLQERfP0IMD0ZBF6TQQAAATWHYvgAAAIDRA2i/RF8/QgwPVkEXpNBARF8/QgwPRkEXpNBAKkQ+QgwPVkEuxNRAAABNYdi+AAAAgNEDaL8qRD5CDA9WQS7E1EBEXz9CDA9GQRek0EAqRD5CDA9GQS7E1EAAAKWDhL4AAACA9EZ3vypEPkIMD1ZBLsTUQCpEPkIMD0ZBLsTUQHEWPUIMD1ZB8krXQAAApYOEvgAAAID0Rne/cRY9QgwPVkHyStdAKkQ+QgwPRkEuxNRAcRY9QgwPRkHyStdAAADyfrK9AAAAgJ0Gf79xFj1CDA9WQfJK10BxFj1CDA9GQfJK10BE3ztCDA9WQb4k2EAAAPJ+sr0AAACAnQZ/v0TfO0IMD1ZBviTYQHEWPUIMD0ZB8krXQETfO0IMD0ZBviTYQAAAq36yPQAAAACeBn+/RN87QgwPVkG+JNhARN87QgwPRkG+JNhAFqg6QgwPVkHyStdAAACrfrI9AAAAAJ4Gf78WqDpCDA9WQfJK10BE3ztCDA9GQb4k2EAWqDpCDA9GQfJK10AAAKWDhD4AAAAA9EZ3vxaoOkIMD1ZB8krXQBaoOkIMD0ZB8krXQF16OUIMD1ZBLsTUQAAApYOEPgAAAAD0Rne/XXo5QgwPVkEuxNRAFqg6QgwPRkHyStdAXXo5QgwPRkEuxNRAAACcYdg+AAAAAL4DaL9dejlCDA9WQS7E1EBdejlCDA9GQS7E1EBEXzhCDA9WQRek0EAAAJxh2D4AAAAAvgNov0RfOEIMD1ZBF6TQQF16OUIMD0ZBLsTUQERfOEIMD0ZBF6TQQAAAydUSPwAAAAAItFG/RF84QgwPVkEXpNBARF84QgwPRkEXpNBAY183QgwPVkHDCstAAADJ1RI/AAAAAAi0Ub9jXzdCDA9WQcMKy0BEXzhCDA9GQRek0EBjXzdCDA9GQcMKy0AAAPMENT8AAAAA8wQ1v2NfN0IMD1ZBwwrLQGNfN0IMD0ZBwwrLQIOCNkIMD1ZBvyPEQAAA8wQ1PwAAAADzBDW/g4I2QgwPVkG/I8RAY183QgwPRkHDCstAg4I2QgwPRkG/I8RAAAD+s1E/AAAAANfVEr+DgjZCDA9WQb8jxECDgjZCDA9GQb8jxEBZzzVCDA9WQcAkvEAAAP6zUT8AAAAA19USv1nPNUIMD1ZBwCS8QIOCNkIMD0ZBvyPEQFnPNUIMD0ZBwCS8QAAA0QNoPwAAAABNYdi+Wc81QgwPVkHAJLxAWc81QgwPRkHAJLxAVks1QgwPVkHzS7NAAADRA2g/AAAAAE1h2L5WSzVCDA9WQfNLs0BZzzVCDA9GQcAkvEBWSzVCDA9GQfNLs0AAAOdGdz8AAAAABISEvlZLNUIMD1ZB80uzQFZLNUIMD0ZB80uzQH36NEIMD1ZBKd6pQAAA50Z3PwAAAAAEhIS+ffo0QgwPVkEp3qlAVks1QgwPRkHzS7NAffo0QgwPRkEp3qlAAAChBn8/AAAAAFx9sr19+jRCDA9WQSneqUB9+jRCDA9GQSneqUBE3zRCDA9WQcAkoEAAAKEGfz8AAAAAXH2yvUTfNEIMD1ZBwCSgQH36NEIMD0ZBKd6pQETfNEIMD0ZBwCSgQAAAogZ/PwAAAAAVfbI9RN80QgwPVkHAJKBARN80QgwPRkHAJKBAffo0QgwPVkFTa5ZAAACiBn8/AAAAABV9sj19+jRCDA9WQVNrlkBE3zRCDA9GQcAkoEB9+jRCDA9GQVNrlkAAAOdGdz8AAAAABISEPn36NEIMD1ZBU2uWQH36NEIMD0ZBU2uWQFZLNUIMD1ZBiv2MQAAA50Z3PwAAAAAEhIQ+Vks1QgwPVkGK/YxAffo0QgwPRkFTa5ZAVks1QgwPRkGK/YxAAAC+A2g/AAAAAJxh2D5WSzVCDA9WQYr9jEBWSzVCDA9GQYr9jEBZzzVCDA9WQcEkhEAAAL4DaD8AAAAAnGHYPlnPNUIMD1ZBwSSEQFZLNUIMD0ZBiv2MQFnPNUIMD0ZBwSSEQAAAILRRPwAAAACn1RI/Wc81QgwPVkHBJIRAWc81QgwPRkHBJIRAg4I2QgwPVkF7S3hAAAAgtFE/AAAAAKfVEj+DgjZCDA9WQXtLeEBZzzVCDA9GQcEkhECDgjZCDA9GQXtLeEAAAPMENT8AAAAA8wQ1P4OCNkIMD1ZBe0t4QIOCNkIMD0ZBe0t4QGNfN0IMD1ZBdH1qQAAA8wQ1PwAAAADzBDU/Y183QgwPVkF0fWpAg4I2QgwPRkF7S3hAY183QgwPRkF0fWpAAACn1RI/AAAAACC0UT9jXzdCDA9WQXR9akBjXzdCDA9GQXR9akBEXzhCDA9WQdBKX0AAAKfVEj8AAAAAILRRP0RfOEIMD1ZB0EpfQGNfN0IMD0ZBdH1qQERfOEIMD0ZB0EpfQAAAnGHYPgAAAAC+A2g/RF84QgwPVkHQSl9ARF84QgwPRkHQSl9AXXo5QgwPVkGiCldAAACcYdg+AAAAAL4DaD9dejlCDA9WQaIKV0BEXzhCDA9GQdBKX0BdejlCDA9GQaIKV0AAAASEhD4AAAAA50Z3P116OUIMD1ZBogpXQF16OUIMD0ZBogpXQBaoOkIMD1ZBFf1RQAAABISEPgAAAADnRnc/Fqg6QgwPVkEV/VFAXXo5QgwPRkGiCldAFqg6QgwPRkEV/VFAAABCgLI9AAAAAJkGfz8WqDpCDA9WQRX9UUAWqDpCDA9GQRX9UUBE3ztCDA9WQXpJUEAAAEKAsj0AAAAAmQZ/P0TfO0IMD1ZBeklQQBaoOkIMD0ZBFf1RQETfO0IMD0ZBeklQQAAAAACAvwAAAIAAAACAyUWHQLmsKkIzBi9CyUWHQLmsKkJrxgBByUWHQAwPVkEzBi9CAAAAAIC/AAAAAAAAAADJRYdADA9WQTMGL0LJRYdAuawqQmvGAEHJRYdADA9WQWvGAEEAAAAAgD8AAACAAAAAAMpFp0AMD1ZBMwYvQspFp0AMD1ZBa8YAQcpFp0C5rCpCMwYvQgAAAACAPwAAAAAAAAAAykWnQLmsKkIzBi9CykWnQAwPVkFrxgBBykWnQLmsKkJrxgBBAAAAAAAAAACAPwAAAIDKRadAuawqQmvGAEHJRYdAuawqQmvGAEHKRadAuawqQjMGL0IAAAAAAAAAAIA/AAAAAMpFp0C5rCpCMwYvQslFh0C5rCpCa8YAQclFh0C5rCpCMwYvQgAAAACAvwAAAAAAAAAAJKU7QgwPVkFrxgBBJKU7QgwPVkEzBi9CJKU7QrmsKkJrxgBBAAAAAIC/AAAAAAAAAAAkpTtCuawqQmvGAEEkpTtCDA9WQTMGL0IkpTtCuawqQjMGL0IAAAAAgD8AAAAAAAAAgCSlP0K5rCpCa8YAQSSlP0K5rCpCMwYvQiSlP0IMD1ZBa8YAQQAAAACAPwAAAAAAAAAAJKU/QgwPVkFrxgBBJKU/QrmsKkIzBi9CJKU/QgwPVkEzBi9CAAAAAACAAACAPwAAAAAkpTtCuawqQjMGL0IkpT9CuawqQjMGL0IkpTtCuawqQmvGAEEAAAAAAAAAAIA/AAAAACSlO0K5rCpCa8YAQSSlP0K5rCpCMwYvQiSlP0K5rCpCa8YAQQAAAAAAAAAAgD8AAAAARF84QgwPVkFLIzVCXXo5QgwPVkFHnzRCJKU7QgwPVkEzBi9CAAAAAACAAACAPwAAAAAkpT9CDA9WQTMGL0KC30lCDA9WQYA1TUIkpT9CDA9WQWvGAEEAAAAAAIAAAIA/AAAAACSlP0IMD1ZBa8YAQYLfSUIMD1ZBgDVNQoLfSUIMD1ZBTJMAPwAAAAAAAAAAgD8AAAAARF84QgwPVkFLIzVCJKU7QgwPVkEzBi9CY183QgwPVkF11jVCAAAAAAAAAACAPwAAAAAWqDpCDA9WQfwXQkJdejlCDA9WQSPHQULFajBCDA9WQYA1TUIAAAAAAAAAAIA/AAAAAF16OUIMD1ZBI8dBQkRfOEIMD1ZBIENBQsVqMEIMD1ZBgDVNQgAAAAAAAAAAgD8AAAAAxWowQgwPVkGANU1CRF84QgwPVkEgQ0FCY183QgwPVkH2j0BCAAAAAAAAAACAPwAAAADFajBCDA9WQYA1TUJjXzdCDA9WQfaPQEKDgjZCDA9WQRazP0IAAAAAAIAAAIA/AAAAACpEPkIMD1ZBogpXQERfP0IMD1ZB0EpfQILfSUIMD1ZBTJMAPwAAAAAAAAAAgD8AAACAQ99CQgwPVkE1MztCCsRCQgwPVkFjajxCgt9JQgwPVkGANU1CAAAAAAAAAACAPwAAAACC30lCDA9WQYA1TUIKxEJCDA9WQWNqPEIxc0JCDA9WQRyYPUIAAAAAAAAAAIA/AAAAAILfSUIMD1ZBgDVNQjFzQkIMD1ZBHJg9Qi7vQUIMD1ZBNbM+QgAAAAAAAAAAgD8AAAAAXXo5QgwPVkFHnzRCFqg6QgwPVkFvTjRCJKU7QgwPVkEzBi9CAAAAAAAAAACAPwAAAIAkpTtCDA9WQTMGL0IWqDpCDA9WQW9ONEJE3ztCDA9WQTUzNEIAAAAAAAAAAIA/AAAAACSlO0IMD1ZBMwYvQkTfO0IMD1ZBNTM0QiSlP0IMD1ZBMwYvQgAAAAAAAAAAgD8AAAAAJKU/QgwPVkEzBi9CRN87QgwPVkE1MzRCcRY9QgwPVkFvTjRCAAAAAAAAAACAPwAAAAAkpT9CDA9WQTMGL0JxFj1CDA9WQW9ONEIqRD5CDA9WQUefNEIAAAAAAIAAAIA/AAAAACpEPkIMD1ZBR580QkRfP0IMD1ZBSyM1QiSlP0IMD1ZBMwYvQgAAAAAAAAAAgD8AAACAJKU/QgwPVkEzBi9CRF8/QgwPVkFLIzVCI19AQgwPVkF11jVCAAAAAAAAAACAPwAAAAAkpT9CDA9WQTMGL0IjX0BCDA9WQXXWNUIEPEFCDA9WQVWzNkIAAAAAAAAAAIA/AAAAgC7vQUIMD1ZBNbM+QgQ8QUIMD1ZBFrM/QoLfSUIMD1ZBgDVNQgAAAAAAAAAAgD8AAAAAgt9JQgwPVkGANU1CBDxBQgwPVkEWsz9CI19AQgwPVkH2j0BCAAAAAAAAAACAPwAAAACC30lCDA9WQYA1TUIjX0BCDA9WQfaPQEJEXz9CDA9WQSBDQUIAAAAAAAAAAIA/AAAAAIOCNkIMD1ZBFrM/QlnPNUIMD1ZBNbM+QsVqMEIMD1ZBgDVNQgAAAAAAAAAAgD8AAAAAxWowQgwPVkGANU1CWc81QgwPVkE1sz5CVks1QgwPVkEcmD1CAAAAAAAAAACAPwAAAADFajBCDA9WQYA1TUJWSzVCDA9WQRyYPUJ9+jRCDA9WQWNqPEIAAAAAAIAAAIA/AAAAAAQ8QUIMD1ZBVbM2Qi7vQUIMD1ZBNbM3QiSlP0IMD1ZBMwYvQgAAAAAAAAAAgD8AAAAAJKU/QgwPVkEzBi9CLu9BQgwPVkE1szdCMXNCQgwPVkFPzjhCAAAAAAAAAACAPwAAAAAkpT9CDA9WQTMGL0Ixc0JCDA9WQU/OOEKC30lCDA9WQYA1TUIAAAAAAAAAAIA/AAAAAILfSUIMD1ZBgDVNQjFzQkIMD1ZBT844QgrEQkIMD1ZBCPw5QgAAAAAAAAAAgD8AAAAAgt9JQgwPVkGANU1CCsRCQgwPVkEI/DlCQ99CQgwPVkE1MztCAAAAAAAAAACAPwAAAIBEXz9CDA9WQSBDQUIqRD5CDA9WQSPHQUKC30lCDA9WQYA1TUIAAAAAAAAAAIA/AAAAAILfSUIMD1ZBgDVNQipEPkIMD1ZBI8dBQnEWPUIMD1ZB/BdCQgAAAAAAAAAAgD8AAAAAgt9JQgwPVkGANU1CcRY9QgwPVkH8F0JCxWowQgwPVkGANU1CAAAAAAAAAACAPwAAAADFajBCDA9WQYA1TUJxFj1CDA9WQfwXQkJE3ztCDA9WQTUzQkIAAAAAAAAAAIA/AAAAAMVqMEIMD1ZBgDVNQkTfO0IMD1ZBNTNCQhaoOkIMD1ZB/BdCQgAAAAAAAAAAgD8AAAAAxWowQgwPVkFMkwA/RN80QgwPVkHAJKBAffo0QgwPVkFTa5ZAAAAAAAAAAACAPwAAAABdejlCDA9WQaIKV0AWqDpCDA9WQRX9UUDFajBCDA9WQUyTAD8AAAAAAAAAAIA/AAAAAMVqMEIMD1ZBTJMAPxaoOkIMD1ZBFf1RQETfO0IMD1ZBeklQQAAAAAAAAAAAgD8AAAAAxWowQgwPVkFMkwA/RN87QgwPVkF6SVBAgt9JQgwPVkFMkwA/AAAAAAAAAACAPwAAAACC30lCDA9WQUyTAD9E3ztCDA9WQXpJUEBxFj1CDA9WQRX9UUAAAAAAAAAAAIA/AAAAAILfSUIMD1ZBTJMAP3EWPUIMD1ZBFf1RQCpEPkIMD1ZBogpXQAAAAAAAgAAAgD8AAAAARF8/QgwPVkHQSl9AI19AQgwPVkF0fWpAgt9JQgwPVkFMkwA/AAAAAAAAAACAPwAAAACC30lCDA9WQUyTAD8jX0BCDA9WQXR9akAEPEFCDA9WQXtLeEAAAAAAAAAAAIA/AAAAAILfSUIMD1ZBTJMAPwQ8QUIMD1ZBe0t4QC7vQUIMD1ZBwSSEQAAAAAAAgAAAgD8AAAAALu9BQgwPVkHBJIRAMXNCQgwPVkGK/YxAgt9JQgwPVkFMkwA/AAAAAAAAAACAPwAAAACC30lCDA9WQUyTAD8xc0JCDA9WQYr9jEAKxEJCDA9WQVNrlkAAAAAAAAAAAIA/AAAAAILfSUIMD1ZBTJMAPwrEQkIMD1ZBU2uWQEPfQkIMD1ZBwCSgQAAAAAAAAAAAgD8AAAAAI19AQgwPVkHDCstARF8/QgwPVkEXpNBAJKU/QgwPVkFrxgBBAAAAAAAAAACAPwAAAAAWqDpCDA9WQfJK10BdejlCDA9WQS7E1EDFajBCDA9WQYA1TUIAAAAAAAAAAIA/AAAAAMVqMEIMD1ZBgDVNQl16OUIMD1ZBLsTUQERfOEIMD1ZBF6TQQAAAAAAAAAAAgD8AAAAAxWowQgwPVkGANU1CRF84QgwPVkEXpNBAY183QgwPVkHDCstAAAAAAAAAAACAPwAAAIBE3zRCDA9WQcAkoEDFajBCDA9WQUyTAD99+jRCDA9WQSneqUAAAAAAAAAAAIA/AAAAAH36NEIMD1ZBKd6pQMVqMEIMD1ZBTJMAP8VqMEIMD1ZBgDVNQgAAAAAAAAAAgD8AAACAffo0QgwPVkEp3qlAxWowQgwPVkGANU1CVks1QgwPVkHzS7NAAAAAAAAAAACAPwAAAAB9+jRCDA9WQVNrlkBWSzVCDA9WQYr9jEDFajBCDA9WQUyTAD8AAAAAAAAAAIA/AAAAAMVqMEIMD1ZBTJMAP1ZLNUIMD1ZBiv2MQFnPNUIMD1ZBwSSEQAAAAAAAAAAAgD8AAAAAxWowQgwPVkFMkwA/Wc81QgwPVkHBJIRAg4I2QgwPVkF7S3hAAAAAAAAAAACAPwAAAACDgjZCDA9WQXtLeEBjXzdCDA9WQXR9akDFajBCDA9WQUyTAD8AAAAAAAAAAIA/AAAAAMVqMEIMD1ZBTJMAP2NfN0IMD1ZBdH1qQERfOEIMD1ZB0EpfQAAAAAAAAAAAgD8AAAAAxWowQgwPVkFMkwA/RF84QgwPVkHQSl9AXXo5QgwPVkGiCldAAAAAAACAAACAPwAAAIAjX0BCDA9WQcMKy0AkpT9CDA9WQWvGAEEEPEFCDA9WQb8jxEAAAAAAAAAAAIA/AAAAgERfP0IMD1ZBF6TQQCpEPkIMD1ZBLsTUQCSlP0IMD1ZBa8YAQQAAAAAAAAAAgD8AAAAAJKU/QgwPVkFrxgBBKkQ+QgwPVkEuxNRAcRY9QgwPVkHyStdAAAAAAAAAAACAPwAAAAAkpT9CDA9WQWvGAEFxFj1CDA9WQfJK10AkpTtCDA9WQWvGAEEAAAAAAAAAAIA/AAAAACSlO0IMD1ZBa8YAQXEWPUIMD1ZB8krXQETfO0IMD1ZBviTYQAAAAAAAAAAAgD8AAAAAJKU7QgwPVkFrxgBBRN87QgwPVkG+JNhAFqg6QgwPVkHyStdAAAAAAACAAACAPwAAAIBD30JCDA9WQcAkoEAKxEJCDA9WQSneqUCC30lCDA9WQUyTAD8AAAAAAAAAAIA/AAAAAILfSUIMD1ZBTJMAPwrEQkIMD1ZBKd6pQDFzQkIMD1ZB80uzQAAAAAAAAAAAgD8AAAAAgt9JQgwPVkFMkwA/MXNCQgwPVkHzS7NAJKU/QgwPVkFrxgBBAAAAAAAAAACAPwAAAAAkpT9CDA9WQWvGAEExc0JCDA9WQfNLs0Au70FCDA9WQcAkvEAAAAAAAAAAAIA/AAAAACSlP0IMD1ZBa8YAQS7vQUIMD1ZBwCS8QAQ8QUIMD1ZBvyPEQAAAAAAAAAAAgD8AAAAAY183QgwPVkHDCstAg4I2QgwPVkG/I8RAxWowQgwPVkGANU1CAAAAAAAAAACAPwAAAADFajBCDA9WQYA1TUKDgjZCDA9WQb8jxEBZzzVCDA9WQcAkvEAAAAAAAAAAAIA/AAAAAMVqMEIMD1ZBgDVNQlnPNUIMD1ZBwCS8QFZLNUIMD1ZB80uzQAAAAAAAAAAAgD8AAAAAffo0QgwPVkFjajxCRN80QgwPVkE1MztCxWowQgwPVkGANU1CAAAAAAAAAACAPwAAAADFajBCDA9WQYA1TUJE3zRCDA9WQTUzO0J9+jRCDA9WQQj8OUIAAAAAAAAAAIA/AAAAAMVqMEIMD1ZBgDVNQn36NEIMD1ZBCPw5QhaoOkIMD1ZB8krXQAAAAAAAAAAAgD8AAAAAFqg6QgwPVkHyStdAffo0QgwPVkEI/DlCVks1QgwPVkFPzjhCAAAAAAAAAACAPwAAAIAWqDpCDA9WQfJK10BWSzVCDA9WQU/OOEIkpTtCDA9WQWvGAEEAAAAAAAAAAIA/AAAAACSlO0IMD1ZBa8YAQVZLNUIMD1ZBT844QlnPNUIMD1ZBNbM3QgAAAAAAAAAAgD8AAACAJKU7QgwPVkFrxgBBWc81QgwPVkE1szdCJKU7QgwPVkEzBi9CAAAAAAAAAACAPwAAAAAkpTtCDA9WQTMGL0JZzzVCDA9WQTWzN0KDgjZCDA9WQVWzNkIAAAAAAAAAAIA/AAAAACSlO0IMD1ZBMwYvQoOCNkIMD1ZBVbM2QmNfN0IMD1ZBddY1QgAAAAAAAAAAgD8AAACAxWotQgwPVkFMkwA/ZzAjQgwPVkFMkwA/xWotQgwPVkGANU1CAAAAAAAAAACAPwAAAADFai1CDA9WQYA1TUJnMCNCDA9WQUyTAD9nMCNCDA9WQYA1TUIAAAAAAAAAAIA/AAAAgGcwH0IMD1ZBTJMAPwn2FEIMD1ZBTJMAP2cwH0IMD1ZBgDVNQgAAAAAAAAAAgD8AAAAAZzAfQgwPVkGANU1CCfYUQgwPVkFMkwA/CfYUQgwPVkGANU1CAAAAAAAAAACAPwAAAIAJ9hBCDA9WQUyTAD+ruwZCDA9WQUyTAD8J9hBCDA9WQYA1TUIAAAAAAAAAAIA/AAAAAAn2EEIMD1ZBgDVNQqu7BkIMD1ZBTJMAP6u7BkIMD1ZBgDVNQgAAAAAAAAAAgD8AAACAq7sCQgwPVkFMkwA/mQLxQQwPVkFMkwA/q7sCQgwPVkGANU1CAAAAAAAAAACAPwAAAACruwJCDA9WQYA1TUKZAvFBDA9WQUyTAD+ZAvFBDA9WQYA1TUIAAAAAAAAAAIA/AAAAgJkC6UEMD1ZBTJMAP92N1EEMD1ZBTJMAP5kC6UEMD1ZBgDVNQgAAAAAAAAAAgD8AAAAAmQLpQQwPVkGANU1C3Y3UQQwPVkFMkwA/3Y3UQQwPVkGANU1CAAAAAAAAAACAPwAAAIDdjcxBDA9WQUyTAD8gGbhBDA9WQUyTAD/djcxBDA9WQYA1TUIAAAAAAAAAAIA/AAAAAN2NzEEMD1ZBgDVNQiAZuEEMD1ZBTJMAPyAZuEEMD1ZBgDVNQgAAAAAAAAAAgD8AAACAIBmwQQwPVkFMkwA/ZKSbQQwPVkFMkwA/IBmwQQwPVkGANU1CAAAAAAAAAACAPwAAAAAgGbBBDA9WQYA1TUJkpJtBDA9WQUyTAD9kpJtBDA9WQYA1TUIAAAAAAAAAAIA/AAAAgGSkk0EMD1ZBTJMAP09ffkEMD1ZBTJMAP2Skk0EMD1ZBgDVNQgAAAAAAAAAAgD8AAAAAZKSTQQwPVkGANU1CT19+QQwPVkFMkwA/T19+QQwPVkGANU1CAAAAAAAAAACAPwAAAIBPX25BDA9WQUyTAD/WdUVBDA9WQUyTAD9PX25BDA9WQYA1TUIAAAAAAAAAAIA/AAAAAE9fbkEMD1ZBgDVNQtZ1RUEMD1ZBTJMAP9Z1RUEMD1ZBgDVNQgAAAAAAAAAAgD8AAACA1nU1QQwPVkFMkwA/XYwMQQwPVkFMkwA/1nU1QQwPVkGANU1CAAAAAAAAAACAPwAAAADWdTVBDA9WQYA1TUJdjAxBDA9WQUyTAD9djAxBDA9WQYA1TUIAAAAAAAAAAIA/AAAAAMlFh0AMD1ZBa8YAQftdkkAMD1ZBLsTUQC6FiUAMD1ZBF6TQQAAAAAAAAAAAgD8AAAAALoWlQAwPVkF6SVBAXYwAQQwPVkFMkwA/wcubQAwPVkEV/VFAAAAAAAAAAACAPwAAAADBy5tADA9WQRX9UUBdjABBDA9WQUyTAD9dy9U/DA9WQUyTAD8AAAAAAAAAAIA/AAAAAMHLm0AMD1ZBFf1RQF3L1T8MD1ZBTJMAP/tdkkAMD1ZBogpXQAAAAAAAAAAAgD8AAAAA+12SQAwPVkEjx0FCLoWJQAwPVkEgQ0FCXcvVPwwPVkGANU1CAAAAAAAAAACAPwAAAABdy9U/DA9WQYA1TUIuhYlADA9WQSBDQUIvhoFADA9WQfaPQEIAAAAAAAAAAIA/AAAAAC+GgUAMD1ZB9o9AQlc+dUAMD1ZBFrM/Ql3L1T8MD1ZBgDVNQgAAAAAAAAAAgD8AAAAAXcvVPwwPVkGANU1CVz51QAwPVkEWsz9CqwtqQAwPVkE1sz5CAAAAAAAAAACAPwAAAABdy9U/DA9WQYA1TUKrC2pADA9WQTWzPkJ9y2FADA9WQRyYPUIAAAAAAAAAAIA/AAAAAC6FpUAMD1ZBNTM0QspFp0AMD1ZBMwYvQsHLm0AMD1ZBb040QgAAAAAAAAAAgD8AAAAAwcubQAwPVkFvTjRCykWnQAwPVkEzBi9CyUWHQAwPVkEzBi9CAAAAAAAAAACAPwAAAADBy5tADA9WQW9ONELJRYdADA9WQTMGL0L7XZJADA9WQUefNEIAAAAAAIAAAIA/AAAAAC6FpUAMD1ZBNTM0Qpk+r0AMD1ZBb040QspFp0AMD1ZBMwYvQgAAAAAAAAAAgD8AAAAAykWnQAwPVkEzBi9CmT6vQAwPVkFvTjRCYay4QAwPVkFHnzRCAAAAAAAAAACAPwAAAADKRadADA9WQTMGL0JhrLhADA9WQUefNEIuhcFADA9WQUsjNUIAAAAAAAAAAIA/AAAAAH3LYUAMD1ZB80uzQPC9XEAMD1ZBKd6pQF3L1T8MD1ZBTJMAPwAAAAAAAAAAgD8AAAAAXcvVPwwPVkFMkwA/8L1cQAwPVkEp3qlAXApbQAwPVkHAJKBAAAAAAAAAAACAPwAAAABdy9U/DA9WQUyTAD9cCltADA9WQcAkoEDwvVxADA9WQVNrlkAAAAAAAAAAAIA/AAAAAPC9XEAMD1ZBU2uWQH3LYUAMD1ZBiv2MQF3L1T8MD1ZBTJMAPwAAAAAAAAAAgD8AAAAAXcvVPwwPVkFMkwA/fcthQAwPVkGK/YxAqwtqQAwPVkHBJIRAAAAAAAAAAACAPwAAAABdy9U/DA9WQUyTAD+rC2pADA9WQcEkhEBXPnVADA9WQXtLeEAAAAAAAAAAAIA/AAAAAFc+dUAMD1ZBe0t4QC+GgUAMD1ZBdH1qQF3L1T8MD1ZBTJMAPwAAAAAAAAAAgD8AAAAAXcvVPwwPVkFMkwA/L4aBQAwPVkF0fWpALoWJQAwPVkHQSl9AAAAAAAAAAACAPwAAAABdy9U/DA9WQUyTAD8uhYlADA9WQdBKX0D7XZJADA9WQaIKV0AAAAAAAIAAAIA/AAAAAC6FpUAMD1ZBeklQQJk+r0AMD1ZBFf1RQF2MAEEMD1ZBTJMAPwAAAAAAAAAAgD8AAAAAXYwAQQwPVkFMkwA/mT6vQAwPVkEV/VFAYay4QAwPVkGiCldAAAAAAAAAAACAPwAAAABdjABBDA9WQUyTAD9hrLhADA9WQaIKV0AuhcFADA9WQdBKX0AAAAAAAAAAAIA/AAAAgGKr3EAMD1ZBY2o8Qp0k2kAMD1ZBHJg9Ql2MAEEMD1ZBgDVNQgAAAAAAAAAAgD8AAAAAXYwAQQwPVkGANU1CnSTaQAwPVkEcmD1ChATWQAwPVkE1sz5CAAAAAAAAAACAPwAAAABdjABBDA9WQYA1TUKEBNZADA9WQTWzPkIwa9BADA9WQRazP0IAAAAAAAAAAIA/AAAAgDBr0EAMD1ZBFrM/Qi+EyUAMD1ZB9o9AQl2MAEEMD1ZBgDVNQgAAAAAAAAAAgD8AAAAAXYwAQQwPVkGANU1CL4TJQAwPVkH2j0BCLoXBQAwPVkEgQ0FCAAAAAAAAAACAPwAAAABdjABBDA9WQYA1TUIuhcFADA9WQSBDQUJhrLhADA9WQSPHQUIAAAAAAAAAAIA/AAAAgGGsuEAMD1ZBI8dBQpk+r0AMD1ZB/BdCQl2MAEEMD1ZBgDVNQgAAAAAAAAAAgD8AAAAAXYwAQQwPVkGANU1CmT6vQAwPVkH8F0JCLoWlQAwPVkE1M0JCAAAAAAAAAACAPwAAAABdjABBDA9WQYA1TUIuhaVADA9WQTUzQkJdy9U/DA9WQYA1TUIAAAAAAAAAAIA/AAAAAF3L1T8MD1ZBgDVNQi6FpUAMD1ZBNTNCQsHLm0AMD1ZB/BdCQgAAAAAAAAAAgD8AAAAAXcvVPwwPVkGANU1CwcubQAwPVkH8F0JC+12SQAwPVkEjx0FCAAAAAAAAAACAPwAAAAB9y2FADA9WQRyYPULwvVxADA9WQWNqPEJdy9U/DA9WQYA1TUIAAAAAAAAAAIA/AAAAAF3L1T8MD1ZBgDVNQvC9XEAMD1ZBY2o8QlwKW0AMD1ZBNTM7QgAAAAAAAAAAgD8AAAAAXcvVPwwPVkGANU1CXApbQAwPVkE1MztC8L1cQAwPVkEI/DlCAAAAAAAAAACAPwAAAAB9y2FADA9WQU/OOEKrC2pADA9WQTWzN0LJRYdADA9WQTMGL0IAAAAAAAAAAIA/AAAAAMlFh0AMD1ZBMwYvQqsLakAMD1ZBNbM3Qlc+dUAMD1ZBVbM2QgAAAAAAgAAAgD8AAAAALoXBQAwPVkFLIzVCL4TJQAwPVkF11jVCykWnQAwPVkEzBi9CAAAAAAAAAACAPwAAAADKRadADA9WQTMGL0IvhMlADA9WQXXWNUIwa9BADA9WQVWzNkIAAAAAAAAAAIA/AAAAAMpFp0AMD1ZBMwYvQjBr0EAMD1ZBVbM2QoQE1kAMD1ZBNbM3QgAAAAAAAAAAgD8AAAAALoWJQAwPVkEXpNBAL4aBQAwPVkHDCstAyUWHQAwPVkFrxgBBAAAAAAAAAACAPwAAAADJRYdADA9WQWvGAEEvhoFADA9WQcMKy0BXPnVADA9WQb8jxEAAAAAAAAAAAIA/AAAAAMlFh0AMD1ZBa8YAQVc+dUAMD1ZBvyPEQKsLakAMD1ZBwCS8QAAAAAAAAAAAgD8AAAAAVz51QAwPVkFVszZCL4aBQAwPVkF11jVCyUWHQAwPVkEzBi9CAAAAAAAAAACAPwAAAIDJRYdADA9WQTMGL0IvhoFADA9WQXXWNUIuhYlADA9WQUsjNUIAAAAAAAAAAIA/AAAAAMlFh0AMD1ZBMwYvQi6FiUAMD1ZBSyM1QvtdkkAMD1ZBR580QgAAAAAAgAAAgD8AAAAAhATWQAwPVkHBJIRAnSTaQAwPVkGK/YxAXYwAQQwPVkFMkwA/AAAAAAAAAACAPwAAAABdjABBDA9WQUyTAD+dJNpADA9WQYr9jEBiq9xADA9WQVNrlkAAAAAAAAAAAIA/AAAAAF2MAEEMD1ZBTJMAP2Kr3EAMD1ZBU2uWQC2F3UAMD1ZBwCSgQAAAAAAAAAAAgD8AAAAALoXBQAwPVkEXpNBAYay4QAwPVkEuxNRAykWnQAwPVkFrxgBBAAAAAAAAAACAPwAAAICrC2pADA9WQcAkvEB9y2FADA9WQfNLs0DJRYdADA9WQWvGAEEAAAAAAAAAAIA/AAAAAMlFh0AMD1ZBa8YAQX3LYUAMD1ZB80uzQF3L1T8MD1ZBTJMAPwAAAAAAAAAAgD8AAACAyUWHQAwPVkFrxgBBXcvVPwwPVkFMkwA/yUWHQAwPVkEzBi9CAAAAAAAAAACAPwAAAADJRYdADA9WQTMGL0Jdy9U/DA9WQUyTAD9dy9U/DA9WQYA1TUIAAAAAAAAAAIA/AAAAAMlFh0AMD1ZBMwYvQl3L1T8MD1ZBgDVNQn3LYUAMD1ZBT844QgAAAAAAAAAAgD8AAAAAfcthQAwPVkFPzjhCXcvVPwwPVkGANU1C8L1cQAwPVkEI/DlCAAAAAACAAACAPwAAAAAuhcFADA9WQdBKX0AvhMlADA9WQXR9akBdjABBDA9WQUyTAD8AAAAAAAAAAIA/AAAAAF2MAEEMD1ZBTJMAPy+EyUAMD1ZBdH1qQDBr0EAMD1ZBe0t4QAAAAAAAAAAAgD8AAAAAXYwAQQwPVkFMkwA/MGvQQAwPVkF7S3hAhATWQAwPVkHBJIRAAAAAAACAAACAPwAAAACEBNZADA9WQTWzN0KdJNpADA9WQU/OOEKdJNpADA9WQfNLs0AAAAAAAAAAAIA/AAAAAJ0k2kAMD1ZB80uzQJ0k2kAMD1ZBT844QmKr3EAMD1ZBCPw5QgAAAAAAgAAAgD8AAAAAnSTaQAwPVkHzS7NAYqvcQAwPVkEI/DlCYqvcQAwPVkEp3qlAAAAAAACAAACAPwAAAIAuhcFADA9WQRek0EDKRadADA9WQWvGAEEvhMlADA9WQcMKy0AAAAAAAAAAAIA/AAAAAGGsuEAMD1ZBLsTUQJk+r0AMD1ZB8krXQMpFp0AMD1ZBa8YAQQAAAAAAAAAAgD8AAAAAykWnQAwPVkFrxgBBmT6vQAwPVkHyStdALoWlQAwPVkG+JNhAAAAAAAAAAACAPwAAAADKRadADA9WQWvGAEEuhaVADA9WQb4k2EDJRYdADA9WQWvGAEEAAAAAAAAAAIA/AAAAAMlFh0AMD1ZBa8YAQS6FpUAMD1ZBviTYQMHLm0AMD1ZB8krXQAAAAAAAAAAAgD8AAAAAyUWHQAwPVkFrxgBBwcubQAwPVkHyStdA+12SQAwPVkEuxNRAAAAAAACAAACAPwAAAIAthd1ADA9WQcAkoEBiq9xADA9WQSneqUBdjABBDA9WQUyTAD8AAAAAAAAAAIA/AAAAAF2MAEEMD1ZBTJMAP2Kr3EAMD1ZBKd6pQGKr3EAMD1ZBCPw5QgAAAAAAAAAAgD8AAACAXYwAQQwPVkFMkwA/YqvcQAwPVkEI/DlCXYwAQQwPVkGANU1CAAAAAAAAAACAPwAAAABdjABBDA9WQYA1TUJiq9xADA9WQQj8OUIthd1ADA9WQTUzO0IAAAAAAAAAAIA/AAAAAF2MAEEMD1ZBgDVNQi2F3UAMD1ZBNTM7QmKr3EAMD1ZBY2o8QgAAAAAAAAAAgD8AAAAAhATWQAwPVkE1szdCnSTaQAwPVkHzS7NAykWnQAwPVkEzBi9CAAAAAAAAAACAPwAAAADKRadADA9WQTMGL0KdJNpADA9WQfNLs0CEBNZADA9WQcAkvEAAAAAAAAAAAIA/AAAAAMpFp0AMD1ZBMwYvQoQE1kAMD1ZBwCS8QMpFp0AMD1ZBa8YAQQAAAAAAAAAAgD8AAAAAykWnQAwPVkFrxgBBhATWQAwPVkHAJLxAMGvQQAwPVkG/I8RAAAAAAAAAAACAPwAAAADKRadADA9WQWvGAEEwa9BADA9WQb8jxEAvhMlADA9WQcMKy0AAAAAAgL8AAACAAAAAgLeWKz+5rCpCgDVNQreWKz+5rCpCTJMAP7eWKz8MD0ZBgDVNQgAAAACAvwAAAAAAAAAAt5YrPwwPRkGANU1Ct5YrP7msKkJMkwA/t5YrPwwPRkFMkwA/AAAAAAAAAAAAAAAAgD+3lis/DA9GQYA1TUKO4U1CDA9GQYA1TUKC301CDA9WQYA1TUIAAAAAAIAAAAAAAACAP8VqMEIMD1ZBgDVNQreWKz8MD0ZBgDVNQoLfSUIMD1ZBgDVNQgAAAAAAgAAAAAAAAIA/gt9JQgwPVkGANU1Ct5YrPwwPRkGANU1Cgt9NQgwPVkGANU1CAAAAAAAAAAAAAAAAgD+C30lCDA9WQYA1TUKC301CDA9WQYA1TUKC30lCuawqQoA1TUIAAAAAAIAAAAAAAACAP4LfSUK5rCpCgDVNQoLfTUIMD1ZBgDVNQoLfTUK5rCpCgDVNQgAAAAAAAAAAAIAAAIA/CfYUQgwPVkGANU1CCfYUQrmsKkKANU1CCfYQQrmsKkKANU1CAAAAAAAAAAAAAAAAgD8J9hBCDA9WQYA1TUKruwZCDA9WQYA1TUK3lis/DA9GQYA1TUIAAAAAAAAAAAAAAACAP8VqMEK5rCpCgDVNQsVqLUK5rCpCgDVNQsVqMEIMD1ZBgDVNQgAAAAAAAAAAAAAAAIA/xWowQgwPVkGANU1CxWotQrmsKkKANU1CxWotQgwPVkGANU1CAAAAAAAAAAAAAAAAgD/FajBCDA9WQYA1TULFai1CDA9WQYA1TUK3lis/DA9GQYA1TUIAAAAAAAAAAAAAAACAP7eWKz8MD0ZBgDVNQsVqLUIMD1ZBgDVNQmcwI0IMD1ZBgDVNQgAAAAAAAAAAAAAAAIA/ZzAjQrmsKkKANU1CZzAfQrmsKkKANU1CZzAjQgwPVkGANU1CAAAAAAAAAAAAAAAAgD9nMCNCDA9WQYA1TUJnMB9CuawqQoA1TUJnMB9CDA9WQYA1TUIAAAAAAAAAAAAAAACAP2cwI0IMD1ZBgDVNQmcwH0IMD1ZBgDVNQreWKz8MD0ZBgDVNQgAAAAAAAAAAAAAAAIA/t5YrPwwPRkGANU1CZzAfQgwPVkGANU1CCfYUQgwPVkGANU1CAAAAAAAAAAAAAAAAgD+3lis/DA9GQYA1TUIJ9hRCDA9WQYA1TUIJ9hBCDA9WQYA1TUIAAAAAAAAAAAAAAACAPwn2EEIMD1ZBgDVNQgn2FEIMD1ZBgDVNQgn2EEK5rCpCgDVNQgAAAAAAAAAAAIAAAIA/3Y3UQQwPVkGANU1C3Y3UQbmsKkKANU1C3Y3MQbmsKkKANU1CAAAAAAAAAAAAAAAAgD+ruwZCuawqQoA1TUKruwJCuawqQoA1TUKruwZCDA9WQYA1TUIAAAAAAAAAAAAAAACAP6u7BkIMD1ZBgDVNQqu7AkK5rCpCgDVNQqu7AkIMD1ZBgDVNQgAAAAAAAAAAAAAAAIA/q7sGQgwPVkGANU1Cq7sCQgwPVkGANU1Ct5YrPwwPRkGANU1CAAAAAAAAAAAAAAAAgD+3lis/DA9GQYA1TUKruwJCDA9WQYA1TUKZAvFBDA9WQYA1TUIAAAAAAAAAAAAAAACAP92NzEEMD1ZBgDVNQiAZuEEMD1ZBgDVNQreWKz8MD0ZBgDVNQgAAAAAAAAAAAAAAAIA/3Y3MQbmsKkKANU1C3Y3MQQwPVkGANU1C3Y3UQQwPVkGANU1CAAAAAAAAAAAAAAAAgD/djdRBDA9WQYA1TULdjcxBDA9WQYA1TUK3lis/DA9GQYA1TUIAAAAAAIAAAAAAAACAP92N1EEMD1ZBgDVNQreWKz8MD0ZBgDVNQpkC6UEMD1ZBgDVNQgAAAAAAgAAAAAAAAIA/mQLpQQwPVkGANU1Ct5YrPwwPRkGANU1CmQLxQQwPVkGANU1CAAAAAAAAAAAAAAAAgD+ZAulBDA9WQYA1TUKZAvFBDA9WQYA1TUKZAulBuawqQoA1TUIAAAAAAIAAAAAAAACAP5kC6UG5rCpCgDVNQpkC8UEMD1ZBgDVNQpkC8UG5rCpCgDVNQgAAAAAAAAAAAIAAAIA/ZKSbQQwPVkGANU1CZKSbQbmsKkKANU1CZKSTQbmsKkKANU1CAAAAAAAAAAAAAAAAgD9kpJNBDA9WQYA1TUJPX35BDA9WQYA1TUK3lis/DA9GQYA1TUIAAAAAAAAAAAAAAACAP2Skk0G5rCpCgDVNQmSkk0EMD1ZBgDVNQmSkm0EMD1ZBgDVNQgAAAAAAAAAAAAAAAIA/ZKSbQQwPVkGANU1CZKSTQQwPVkGANU1Ct5YrPwwPRkGANU1CAAAAAACAAAAAAAAAgD9kpJtBDA9WQYA1TUK3lis/DA9GQYA1TUIgGbBBDA9WQYA1TUIAAAAAAIAAAAAAAACAPyAZsEEMD1ZBgDVNQreWKz8MD0ZBgDVNQiAZuEEMD1ZBgDVNQgAAAAAAAAAAAAAAAIA/IBmwQQwPVkGANU1CIBm4QQwPVkGANU1CIBmwQbmsKkKANU1CAAAAAACAAAAAAAAAgD8gGbBBuawqQoA1TUIgGbhBDA9WQYA1TUIgGbhBuawqQoA1TUIAAAAAAAAAAACAAACAP9Z1RUEMD1ZBgDVNQtZ1RUG5rCpCgDVNQtZ1NUG5rCpCgDVNQgAAAAAAAAAAAAAAAIA/1nU1QQwPVkGANU1CXYwMQQwPVkGANU1Ct5YrPwwPRkGANU1CAAAAAAAAAAAAAAAAgD/WdTVBuawqQoA1TULWdTVBDA9WQYA1TULWdUVBDA9WQYA1TUIAAAAAAAAAAAAAAACAP9Z1RUEMD1ZBgDVNQtZ1NUEMD1ZBgDVNQreWKz8MD0ZBgDVNQgAAAAAAgAAAAAAAAIA/1nVFQQwPVkGANU1Ct5YrPwwPRkGANU1CT19uQQwPVkGANU1CAAAAAACAAAAAAAAAgD9PX25BDA9WQYA1TUK3lis/DA9GQYA1TUJPX35BDA9WQYA1TUIAAAAAAAAAAAAAAACAP09fbkEMD1ZBgDVNQk9ffkEMD1ZBgDVNQk9fbkG5rCpCgDVNQgAAAAAAgAAAAAAAAIA/T19uQbmsKkKANU1CT19+QQwPVkGANU1CT19+QbmsKkKANU1CAAAAAAAAAAAAAAAAgD9dy9U/uawqQoA1TUK3lis/uawqQoA1TUJdy9U/DA9WQYA1TUIAAAAAAAAAAAAAAACAP13L1T8MD1ZBgDVNQreWKz+5rCpCgDVNQreWKz8MD0ZBgDVNQgAAAAAAgAAAAAAAAIA/XcvVPwwPVkGANU1Ct5YrPwwPRkGANU1CXYwAQQwPVkGANU1CAAAAAACAAAAAAAAAgD9djABBDA9WQYA1TUK3lis/DA9GQYA1TUJdjAxBDA9WQYA1TUIAAAAAAAAAAAAAAACAP12MAEEMD1ZBgDVNQl2MDEEMD1ZBgDVNQl2MAEG5rCpCgDVNQgAAAAAAgAAAAAAAAIA/XYwAQbmsKkKANU1CXYwMQQwPVkGANU1CXYwMQbmsKkKANU1CAADe/38/LvsCOwAAAICC301CDA9WQUyTAD+C301CDA9WQYA1TUKO4U1CDA9GQUyTAD8AAN7/fz8u+wI7AAAAgI7hTUIMD0ZBTJMAP4LfTUIMD1ZBgDVNQo7hTUIMD0ZBgDVNQgAAAAAAgAAAAIAAAIC/gt9JQgwPVkFMkwA/juFNQgwPRkFMkwA/xWowQgwPVkFMkwA/AAAAAAAAAAAAgAAAgL/FajBCDA9WQUyTAD+O4U1CDA9GQUyTAD+3lis/DA9GQUyTAD8AAAAAAIAAAACAAACAv4LfTUIMD1ZBTJMAP47hTUIMD0ZBTJMAP4LfSUIMD1ZBTJMAPwAAAAAAAAAAAAAAAIC/gt9NQgwPVkFMkwA/gt9JQgwPVkFMkwA/gt9NQrmsKkJMkwA/AAAAAACAAAAAAAAAgL+C301CuawqQkyTAD+C30lCDA9WQUyTAD+C30lCuawqQkyTAD8AAAAAAAAAAAAAAACAv2Skk0EMD1ZBTJMAP2Skk0G5rCpCTJMAP2Skm0G5rCpCTJMAPwAAAAAAAAAAAAAAAIC/3Y3MQQwPVkFMkwA/3Y3MQbmsKkJMkwA/3Y3UQbmsKkJMkwA/AAAAAAAAAAAAAAAAgL8J9hBCDA9WQUyTAD8J9hBCuawqQkyTAD8J9hRCuawqQkyTAD8AAAAAAAAAAAAAAACAv8VqLUIMD1ZBTJMAP8VqLUK5rCpCTJMAP8VqMEK5rCpCTJMAPwAAAAAAAAAAAAAAAIC/t5YrP7msKkJMkwA/XcvVP7msKkJMkwA/t5YrPwwPRkFMkwA/AAAAAAAAAAAAAAAAgL+3lis/DA9GQUyTAD9dy9U/uawqQkyTAD9dy9U/DA9WQUyTAD8AAAAAAAAAAAAAAACAv7eWKz8MD0ZBTJMAP13L1T8MD1ZBTJMAP12MAEEMD1ZBTJMAPwAAAAAAAAAAAAAAAIC/XYwAQbmsKkJMkwA/XYwMQbmsKkJMkwA/XYwAQQwPVkFMkwA/AAAAAAAAAAAAAAAAgL9djABBDA9WQUyTAD9djAxBuawqQkyTAD9djAxBDA9WQUyTAD8AAAAAAAAAAACAAACAv12MAEEMD1ZBTJMAP12MDEEMD1ZBTJMAP7eWKz8MD0ZBTJMAPwAAAAAAAAAAAAAAAIC/t5YrPwwPRkFMkwA/XYwMQQwPVkFMkwA/1nU1QQwPVkFMkwA/AAAAAAAAAAAAAAAAgL/WdTVBuawqQkyTAD/WdUVBuawqQkyTAD/WdTVBDA9WQUyTAD8AAAAAAAAAAAAAAACAv9Z1NUEMD1ZBTJMAP9Z1RUG5rCpCTJMAP9Z1RUEMD1ZBTJMAPwAAAAAAAAAAAIAAAIC/1nU1QQwPVkFMkwA/1nVFQQwPVkFMkwA/t5YrPwwPRkFMkwA/AAAAAAAAAAAAAAAAgL+3lis/DA9GQUyTAD/WdUVBDA9WQUyTAD9PX25BDA9WQUyTAD8AAAAAAAAAAACAAACAv2Skm0EMD1ZBTJMAPyAZsEEMD1ZBTJMAP7eWKz8MD0ZBTJMAPwAAAAAAAAAAAIAAAIC/ZKSbQbmsKkJMkwA/ZKSbQQwPVkFMkwA/ZKSTQQwPVkFMkwA/AAAAAAAAAAAAgAAAgL9kpJNBDA9WQUyTAD9kpJtBDA9WQUyTAD+3lis/DA9GQUyTAD8AAAAAAIAAAAAAAACAv2Skk0EMD1ZBTJMAP7eWKz8MD0ZBTJMAP09ffkEMD1ZBTJMAPwAAAAAAgAAAAAAAAIC/T19+QQwPVkFMkwA/t5YrPwwPRkFMkwA/T19uQQwPVkFMkwA/AAAAAAAAAAAAAAAAgL9PX35BDA9WQUyTAD9PX25BDA9WQUyTAD9PX35BuawqQkyTAD8AAAAAAIAAAAAAAACAv09ffkG5rCpCTJMAP09fbkEMD1ZBTJMAP09fbkG5rCpCTJMAPwAAAAAAAAAAAIAAAIC/3Y3UQQwPVkFMkwA/mQLpQQwPVkFMkwA/t5YrPwwPRkFMkwA/AAAAAAAAAAAAgAAAgL/djdRBuawqQkyTAD/djdRBDA9WQUyTAD/djcxBDA9WQUyTAD8AAAAAAAAAAACAAACAv92NzEEMD1ZBTJMAP92N1EEMD1ZBTJMAP7eWKz8MD0ZBTJMAPwAAAAAAgAAAAAAAAIC/3Y3MQQwPVkFMkwA/t5YrPwwPRkFMkwA/IBm4QQwPVkFMkwA/AAAAAACAAAAAAAAAgL8gGbhBDA9WQUyTAD+3lis/DA9GQUyTAD8gGbBBDA9WQUyTAD8AAAAAAAAAAAAAAACAvyAZuEEMD1ZBTJMAPyAZsEEMD1ZBTJMAPyAZuEG5rCpCTJMAPwAAAAAAgAAAAAAAAIC/IBm4QbmsKkJMkwA/IBmwQQwPVkFMkwA/IBmwQbmsKkJMkwA/AAAAAAAAAAAAAAAAgL+ZAulBuawqQkyTAD+ZAvFBuawqQkyTAD+ZAulBDA9WQUyTAD8AAAAAAAAAAAAAAACAv5kC6UEMD1ZBTJMAP5kC8UG5rCpCTJMAP5kC8UEMD1ZBTJMAPwAAAAAAAAAAAIAAAIC/mQLpQQwPVkFMkwA/mQLxQQwPVkFMkwA/t5YrPwwPRkFMkwA/AAAAAAAAAAAAAAAAgL+3lis/DA9GQUyTAD+ZAvFBDA9WQUyTAD+ruwJCDA9WQUyTAD8AAAAAAAAAAAAAAACAv7eWKz8MD0ZBTJMAPwn2FEIMD1ZBTJMAP2cwH0IMD1ZBTJMAPwAAAAAAAAAAAIAAAIC/CfYUQrmsKkJMkwA/CfYUQgwPVkFMkwA/CfYQQgwPVkFMkwA/AAAAAAAAAAAAgAAAgL8J9hBCDA9WQUyTAD8J9hRCDA9WQUyTAD+3lis/DA9GQUyTAD8AAAAAAIAAAAAAAACAvwn2EEIMD1ZBTJMAP7eWKz8MD0ZBTJMAP6u7BkIMD1ZBTJMAPwAAAAAAgAAAAAAAAIC/q7sGQgwPVkFMkwA/t5YrPwwPRkFMkwA/q7sCQgwPVkFMkwA/AAAAAAAAAAAAAAAAgL+ruwZCDA9WQUyTAD+ruwJCDA9WQUyTAD+ruwZCuawqQkyTAD8AAAAAAIAAAAAAAACAv6u7BkK5rCpCTJMAP6u7AkIMD1ZBTJMAP6u7AkK5rCpCTJMAPwAAAAAAAAAAAIAAAIC/xWowQrmsKkJMkwA/xWowQgwPVkFMkwA/xWotQgwPVkFMkwA/AAAAAAAAAAAAgAAAgL/Fai1CDA9WQUyTAD/FajBCDA9WQUyTAD+3lis/DA9GQUyTAD8AAAAAAIAAAAAAAACAv8VqLUIMD1ZBTJMAP7eWKz8MD0ZBTJMAP2cwI0IMD1ZBTJMAPwAAAAAAgAAAAAAAAIC/ZzAjQgwPVkFMkwA/t5YrPwwPRkFMkwA/ZzAfQgwPVkFMkwA/AAAAAAAAAAAAAAAAgL9nMCNCDA9WQUyTAD9nMB9CDA9WQUyTAD9nMCNCuawqQkyTAD8AAAAAAIAAAAAAAACAv2cwI0K5rCpCTJMAP2cwH0IMD1ZBTJMAP2cwH0K5rCpCTJMAPwAAAAAAgAAAgL8AAAAAFqg6QgwPRkFvTjRCXXo5QgwPRkFHnzRCRN80QgwPRkHAJKBAAAAAAACAAACAvwAAAADBy5tADA9GQRX9UUD7XZJADA9GQaIKV0C3lis/DA9GQUyTAD8AAAAAAAAAAIC/AAAAALeWKz8MD0ZBTJMAP/tdkkAMD0ZBogpXQC6FiUAMD0ZB0EpfQAAAAAAAgAAAgL8AAAAALoWJQAwPRkHQSl9AL4aBQAwPRkF0fWpAt5YrPwwPRkFMkwA/AAAAAAAAAACAvwAAAAC3lis/DA9GQUyTAD8vhoFADA9GQXR9akBXPnVADA9GQXtLeEAAAAAAAAAAAIC/AAAAALeWKz8MD0ZBTJMAP1c+dUAMD0ZBe0t4QKsLakAMD0ZBwSSEQAAAAAAAgAAAgL8AAAAAqwtqQAwPRkHBJIRAfcthQAwPRkGK/YxAt5YrPwwPRkFMkwA/AAAAAAAAAACAvwAAAAC3lis/DA9GQUyTAD99y2FADA9GQYr9jEDwvVxADA9GQVNrlkAAAAAAAAAAAIC/AAAAALeWKz8MD0ZBTJMAP/C9XEAMD0ZBU2uWQFwKW0AMD0ZBwCSgQAAAAAAAAAAAgL8AAAAARN80QgwPRkHAJKBARF8/QgwPRkFLIzVCKkQ+QgwPRkFHnzRCAAAAAAAAAACAvwAAAABcCltADA9GQTUzO0LwvVxADA9GQWNqPEK3lis/DA9GQYA1TUIAAAAAAAAAAIC/AAAAALeWKz8MD0ZBgDVNQvC9XEAMD0ZBY2o8Qn3LYUAMD0ZBHJg9QgAAAAAAAAAAgL8AAAAAt5YrPwwPRkGANU1CfcthQAwPRkEcmD1CqwtqQAwPRkE1sz5CAAAAAAAAAACAvwAAAAAu70FCDA9GQTWzN0IEPEFCDA9GQVWzNkJE3zRCDA9GQcAkoEAAAAAAAAAAAIC/AAAAAETfNEIMD0ZBwCSgQAQ8QUIMD0ZBVbM2QiNfQEIMD0ZBddY1QgAAAAAAAAAAgL8AAAAARN80QgwPRkHAJKBAI19AQgwPRkF11jVCRF8/QgwPRkFLIzVCAAAAAAAAAACAvwAAAAAqRD5CDA9GQUefNEJxFj1CDA9GQW9ONEJE3zRCDA9GQcAkoEAAAAAAAAAAAIC/AAAAAETfNEIMD0ZBwCSgQHEWPUIMD0ZBb040QkTfO0IMD0ZBNTM0QgAAAAAAAAAAgL8AAAAARN80QgwPRkHAJKBARN87QgwPRkE1MzRCFqg6QgwPRkFvTjRCAAAAAAAAAACAvwAAAABWSzVCDA9GQRyYPUJZzzVCDA9GQTWzPkK3lis/DA9GQYA1TUIAAAAAAAAAAIC/AAAAALeWKz8MD0ZBgDVNQlnPNUIMD0ZBNbM+QoOCNkIMD0ZBFrM/QgAAAAAAAAAAgL8AAAAAt5YrPwwPRkGANU1Cg4I2QgwPRkEWsz9CY183QgwPRkH2j0BCAAAAAAAAAACAvwAAAAAxc0JCDA9GQYr9jECO4U1CDA9GQUyTAD8KxEJCDA9GQVNrlkAAAAAAAAAAAIC/AAAAAArEQkIMD0ZBU2uWQI7hTUIMD0ZBTJMAP0PfQkIMD0ZBwCSgQAAAAAAAAAAAgL8AAACAVz51QAwPRkFVszZCt5YrPwwPRkFMkwA/L4aBQAwPRkF11jVCAAAAAAAAAACAvwAAAIAvhoFADA9GQXXWNUK3lis/DA9GQUyTAD8uhYlADA9GQUsjNUIAAAAAAAAAAIC/AAAAAIQE1kAMD0ZBNbM3QjBr0EAMD0ZBVbM2QvC9XEAMD0ZBKd6pQAAAAAAAAAAAgL8AAAAAMGvQQAwPRkFVszZCL4TJQAwPRkF11jVC8L1cQAwPRkEp3qlAAAAAAAAAAACAvwAAAADwvVxADA9GQSneqUAvhMlADA9GQXXWNUIuhcFADA9GQUsjNUIAAAAAAAAAAIC/AAAAAPC9XEAMD0ZBKd6pQC6FwUAMD0ZBSyM1QmGsuEAMD0ZBR580QgAAAAAAAAAAgL8AAAAAqwtqQAwPRkE1sz5CVz51QAwPRkEWsz9Ct5YrPwwPRkGANU1CAAAAAAAAAACAvwAAAAC3lis/DA9GQYA1TUJXPnVADA9GQRazP0IvhoFADA9GQfaPQEIAAAAAAAAAAIC/AAAAALeWKz8MD0ZBgDVNQi+GgUAMD0ZB9o9AQi6FiUAMD0ZBIENBQgAAAAAAgAAAgL8AAAAARF84QgwPRkHQSl9AY183QgwPRkF0fWpAt5YrPwwPRkFMkwA/AAAAAAAAAACAvwAAAABjXzdCDA9GQfaPQEJEXzhCDA9GQSBDQUK3lis/DA9GQYA1TUIAAAAAAAAAAIC/AAAAALeWKz8MD0ZBgDVNQkRfOEIMD0ZBIENBQl16OUIMD0ZBI8dBQgAAAAAAAAAAgL8AAAAAt5YrPwwPRkGANU1CXXo5QgwPRkEjx0FCjuFNQgwPRkGANU1CAAAAAAAAAACAvwAAAACO4U1CDA9GQYA1TUJdejlCDA9GQSPHQUIWqDpCDA9GQfwXQkIAAAAAAAAAAIC/AAAAAI7hTUIMD0ZBgDVNQhaoOkIMD0ZB/BdCQkTfO0IMD0ZBNTNCQgAAAAAAAAAAgL8AAAAARN87QgwPRkE1M0JCcRY9QgwPRkH8F0JCjuFNQgwPRkGANU1CAAAAAAAAAACAvwAAAACO4U1CDA9GQYA1TUJxFj1CDA9GQfwXQkIqRD5CDA9GQSPHQUIAAAAAAAAAAIC/AAAAAI7hTUIMD0ZBgDVNQipEPkIMD0ZBI8dBQkRfP0IMD0ZBIENBQgAAAAAAAAAAgL8AAACAMXNCQgwPRkGK/YxALu9BQgwPRkHBJIRAjuFNQgwPRkFMkwA/AAAAAAAAAACAvwAAAACO4U1CDA9GQUyTAD8u70FCDA9GQcEkhEAEPEFCDA9GQXtLeEAAAAAAAAAAAIC/AAAAAI7hTUIMD0ZBTJMAPwQ8QUIMD0ZBe0t4QCNfQEIMD0ZBdH1qQAAAAAAAAAAAgL8AAACAI19AQgwPRkF0fWpARF8/QgwPRkHQSl9AjuFNQgwPRkFMkwA/AAAAAAAAAACAvwAAAACO4U1CDA9GQUyTAD9EXz9CDA9GQdBKX0AqRD5CDA9GQaIKV0AAAAAAAAAAAIC/AAAAAI7hTUIMD0ZBTJMAPypEPkIMD0ZBogpXQHEWPUIMD0ZBFf1RQAAAAAAAgAAAgL8AAAAAVz51QAwPRkFVszZCqwtqQAwPRkE1szdCt5YrPwwPRkFMkwA/AAAAAAAAAACAvwAAAAC3lis/DA9GQUyTAD+rC2pADA9GQTWzN0J9y2FADA9GQU/OOEIAAAAAAAAAAIC/AAAAALeWKz8MD0ZBTJMAP33LYUAMD0ZBT844QreWKz8MD0ZBgDVNQgAAAAAAAAAAgL8AAAAAt5YrPwwPRkGANU1CfcthQAwPRkFPzjhC8L1cQAwPRkEI/DlCAAAAAAAAAACAvwAAAAC3lis/DA9GQYA1TULwvVxADA9GQQj8OUJcCltADA9GQTUzO0IAAAAAAAAAAIC/AAAAAGGsuEAMD0ZBR580Qpk+r0AMD0ZBb040QvC9XEAMD0ZBKd6pQAAAAAAAAAAAgL8AAAAA8L1cQAwPRkEp3qlAmT6vQAwPRkFvTjRCLoWlQAwPRkE1MzRCAAAAAACAAACAvwAAAADwvVxADA9GQSneqUAuhaVADA9GQTUzNEJcCltADA9GQcAkoEAAAAAAAAAAAIC/AAAAAFwKW0AMD0ZBwCSgQC6FpUAMD0ZBNTM0QsHLm0AMD0ZBb040QgAAAAAAgAAAgL8AAAAAXApbQAwPRkHAJKBAwcubQAwPRkFvTjRCt5YrPwwPRkFMkwA/AAAAAAAAAACAvwAAAAC3lis/DA9GQUyTAD/By5tADA9GQW9ONEL7XZJADA9GQUefNEIAAAAAAAAAAIC/AAAAALeWKz8MD0ZBTJMAP/tdkkAMD0ZBR580Qi6FiUAMD0ZBSyM1QgAAAAAAAAAAgL8AAAAALoWJQAwPRkEgQ0FC+12SQAwPRkEjx0FCt5YrPwwPRkGANU1CAAAAAAAAAACAvwAAAAC3lis/DA9GQYA1TUL7XZJADA9GQSPHQULBy5tADA9GQfwXQkIAAAAAAAAAAIC/AAAAALeWKz8MD0ZBgDVNQsHLm0AMD0ZB/BdCQi6FpUAMD0ZBNTNCQgAAAAAAAAAAgL8AAACAcRY9QgwPRkEV/VFARN87QgwPRkF6SVBAjuFNQgwPRkFMkwA/AAAAAAAAAACAvwAAAACO4U1CDA9GQUyTAD9E3ztCDA9GQXpJUEAWqDpCDA9GQRX9UUAAAAAAAAAAAIC/AAAAAI7hTUIMD0ZBTJMAPxaoOkIMD0ZBFf1RQLeWKz8MD0ZBTJMAPwAAAAAAAAAAgL8AAAAAt5YrPwwPRkFMkwA/Fqg6QgwPRkEV/VFAXXo5QgwPRkGiCldAAAAAAAAAAACAvwAAAAC3lis/DA9GQUyTAD9dejlCDA9GQaIKV0BEXzhCDA9GQdBKX0AAAAAAAAAAAIC/AAAAAERfP0IMD0ZBIENBQiNfQEIMD0ZB9o9AQo7hTUIMD0ZBgDVNQgAAAAAAAAAAgL8AAAAAjuFNQgwPRkGANU1CI19AQgwPRkH2j0BCBDxBQgwPRkEWsz9CAAAAAAAAAACAvwAAAACO4U1CDA9GQYA1TUIEPEFCDA9GQRazP0Iu70FCDA9GQTWzPkIAAAAAAIAAAIC/AAAAAGNfN0IMD0ZBdH1qQIOCNkIMD0ZBe0t4QLeWKz8MD0ZBTJMAPwAAAAAAAAAAgL8AAAAAt5YrPwwPRkFMkwA/g4I2QgwPRkF7S3hAWc81QgwPRkHBJIRAAAAAAAAAAACAvwAAAAC3lis/DA9GQUyTAD9ZzzVCDA9GQcEkhEBhrLhADA9GQaIKV0AAAAAAAIAAAIC/AAAAAKsLakAMD0ZBwCS8QC2F3UAMD0ZBNTM7Qn3LYUAMD0ZB80uzQAAAAAAAAAAAgL8AAAAAfcthQAwPRkHzS7NALYXdQAwPRkE1MztCYqvcQAwPRkEI/DlCAAAAAACAAACAvwAAAAB9y2FADA9GQfNLs0Biq9xADA9GQQj8OULwvVxADA9GQSneqUAAAAAAAAAAAIC/AAAAAPC9XEAMD0ZBKd6pQGKr3EAMD0ZBCPw5Qp0k2kAMD0ZBT844QgAAAAAAAAAAgL8AAAAA8L1cQAwPRkEp3qlAnSTaQAwPRkFPzjhChATWQAwPRkE1szdCAAAAAAAAAACAvwAAAABD30JCDA9GQTUzO0JdejlCDA9GQS7E1EAWqDpCDA9GQfJK10AAAAAAAAAAAIC/AAAAAEPfQkIMD0ZBwCSgQI7hTUIMD0ZBTJMAPwrEQkIMD0ZBKd6pQAAAAAAAAAAAgL8AAAAACsRCQgwPRkEp3qlAjuFNQgwPRkFMkwA/juFNQgwPRkGANU1CAAAAAAAAAACAvwAAAAAKxEJCDA9GQSneqUCO4U1CDA9GQYA1TUIxc0JCDA9GQfNLs0AAAAAAAIAAAIC/AAAAAIOCNkIMD0ZBVbM2QlnPNUIMD0ZBNbM3Qi+GgUAMD0ZBwwrLQAAAAAAAAAAAgL8AAACAYqvcQAwPRkFTa5ZAnSTaQAwPRkGK/YxAWc81QgwPRkHBJIRAAAAAAAAAAACAvwAAAABZzzVCDA9GQcEkhECdJNpADA9GQYr9jECEBNZADA9GQcEkhEAAAAAAAIAAAIC/AAAAAFnPNUIMD0ZBwSSEQIQE1kAMD0ZBwSSEQDBr0EAMD0ZBe0t4QAAAAAAAAAAAgL8AAAAAYay4QAwPRkGiCldAmT6vQAwPRkEV/VFAt5YrPwwPRkFMkwA/AAAAAAAAAACAvwAAAAC3lis/DA9GQUyTAD+ZPq9ADA9GQRX9UUAuhaVADA9GQXpJUEAAAAAAAAAAAIC/AAAAALeWKz8MD0ZBTJMAPy6FpUAMD0ZBeklQQMHLm0AMD0ZBFf1RQAAAAAAAAAAAgL8AAAAAL4TJQAwPRkH2j0BCMGvQQAwPRkEWsz9CVks1QgwPRkEcmD1CAAAAAAAAAACAvwAAAACDgjZCDA9GQb8jxEBjXzdCDA9GQcMKy0BD30JCDA9GQTUzO0IAAAAAAAAAAIC/AAAAAEPfQkIMD0ZBNTM7QmNfN0IMD0ZBwwrLQERfOEIMD0ZBF6TQQAAAAAAAAAAAgL8AAAAAQ99CQgwPRkE1MztCRF84QgwPRkEXpNBAXXo5QgwPRkEuxNRAAAAAAAAAAACAvwAAAACO4U1CDA9GQYA1TUJEXz9CDA9GQRek0EAjX0BCDA9GQcMKy0AAAAAAAAAAAIC/AAAAgIOCNkIMD0ZBVbM2Qi+GgUAMD0ZBwwrLQGNfN0IMD0ZBddY1QgAAAAAAAAAAgL8AAAAAwcubQAwPRkHyStdALoWlQAwPRkG+JNhAXXo5QgwPRkFHnzRCAAAAAAAAAACAvwAAAIAwa9BADA9GQXtLeEAvhMlADA9GQXR9akBZzzVCDA9GQcEkhEAAAAAAAAAAAIC/AAAAAFnPNUIMD0ZBwSSEQC+EyUAMD0ZBdH1qQC6FwUAMD0ZB0EpfQAAAAAAAAAAAgL8AAAAAWc81QgwPRkHBJIRALoXBQAwPRkHQSl9AYay4QAwPRkGiCldAAAAAAAAAAACAvwAAAAAuhaVADA9GQTUzQkKZPq9ADA9GQfwXQkK3lis/DA9GQYA1TUIAAAAAAAAAAIC/AAAAALeWKz8MD0ZBgDVNQpk+r0AMD0ZB/BdCQmGsuEAMD0ZBI8dBQgAAAAAAAAAAgL8AAAAAt5YrPwwPRkGANU1CYay4QAwPRkEjx0FCVks1QgwPRkEcmD1CAAAAAAAAAACAvwAAAABWSzVCDA9GQRyYPUJhrLhADA9GQSPHQUIuhcFADA9GQSBDQUIAAAAAAAAAAIC/AAAAAFZLNUIMD0ZBHJg9Qi6FwUAMD0ZBIENBQi+EyUAMD0ZB9o9AQgAAAAAAAAAAgL8AAAAAMGvQQAwPRkEWsz9ChATWQAwPRkE1sz5CVks1QgwPRkEcmD1CAAAAAAAAAACAvwAAAABWSzVCDA9GQRyYPUKEBNZADA9GQTWzPkKdJNpADA9GQRyYPUIAAAAAAIAAAIC/AAAAAFZLNUIMD0ZBHJg9Qp0k2kAMD0ZBHJg9QmKr3EAMD0ZBY2o8QgAAAAAAAAAAgL8AAAAAI19AQgwPRkHDCstABDxBQgwPRkG/I8RAjuFNQgwPRkGANU1CAAAAAAAAAACAvwAAAACO4U1CDA9GQYA1TUIEPEFCDA9GQb8jxEAu70FCDA9GQcAkvEAAAAAAAAAAAIC/AAAAAI7hTUIMD0ZBgDVNQi7vQUIMD0ZBwCS8QDFzQkIMD0ZB80uzQAAAAAAAAAAAgL8AAACAY183QgwPRkF11jVCL4aBQAwPRkHDCstARF84QgwPRkFLIzVCAAAAAAAAAACAvwAAAABEXzhCDA9GQUsjNUIvhoFADA9GQcMKy0AuhYlADA9GQRek0EAAAAAAAAAAAIC/AAAAgERfOEIMD0ZBSyM1Qi6FiUAMD0ZBF6TQQF16OUIMD0ZBR580QgAAAAAAAAAAgL8AAAAAXXo5QgwPRkFHnzRCLoWJQAwPRkEXpNBA+12SQAwPRkEuxNRAAAAAAAAAAACAvwAAAABdejlCDA9GQUefNEL7XZJADA9GQS7E1EDBy5tADA9GQfJK10AAAAAAAAAAAIC/AAAAAKsLakAMD0ZBwCS8QFc+dUAMD0ZBvyPEQC2F3UAMD0ZBNTM7QgAAAAAAAAAAgL8AAAAALYXdQAwPRkE1MztCVz51QAwPRkG/I8RAL4aBQAwPRkHDCstAAAAAAAAAAACAvwAAAIAthd1ADA9GQTUzO0IvhoFADA9GQcMKy0BWSzVCDA9GQU/OOEIAAAAAAAAAAIC/AAAAgFZLNUIMD0ZBT844Qi+GgUAMD0ZBwwrLQFnPNUIMD0ZBNbM3QgAAAAAAAAAAgL8AAACALu9BQgwPRkE1szdCRN80QgwPRkHAJKBAMXNCQgwPRkFPzjhCAAAAAAAAAACAvwAAAAAxc0JCDA9GQU/OOEJE3zRCDA9GQcAkoEB9+jRCDA9GQSneqUAAAAAAAAAAAIC/AAAAgDFzQkIMD0ZBT844Qn36NEIMD0ZBKd6pQArEQkIMD0ZBCPw5QgAAAAAAAAAAgL8AAAAACsRCQgwPRkEI/DlCffo0QgwPRkEp3qlAVks1QgwPRkHzS7NAAAAAAAAAAACAvwAAAIAKxEJCDA9GQQj8OUJWSzVCDA9GQfNLs0BD30JCDA9GQTUzO0IAAAAAAAAAAIC/AAAAAEPfQkIMD0ZBNTM7QlZLNUIMD0ZB80uzQFnPNUIMD0ZBwCS8QAAAAAAAAAAAgL8AAAAAQ99CQgwPRkE1MztCWc81QgwPRkHAJLxAg4I2QgwPRkG/I8RAAAAAAAAAAACAvwAAAAAu70FCDA9GQTWzPkIxc0JCDA9GQRyYPUKO4U1CDA9GQYA1TUIAAAAAAAAAAIC/AAAAAI7hTUIMD0ZBgDVNQjFzQkIMD0ZBHJg9QgrEQkIMD0ZBY2o8QgAAAAAAAAAAgL8AAAAAjuFNQgwPRkGANU1CCsRCQgwPRkFjajxCQ99CQgwPRkE1MztCAAAAAAAAAACAvwAAAABZzzVCDA9GQcEkhEBWSzVCDA9GQYr9jEBiq9xADA9GQVNrlkAAAAAAAAAAAIC/AAAAAGKr3EAMD0ZBU2uWQFZLNUIMD0ZBiv2MQH36NEIMD0ZBU2uWQAAAAAAAAAAAgL8AAAAAYqvcQAwPRkFTa5ZAffo0QgwPRkFTa5ZALYXdQAwPRkHAJKBAAAAAAAAAAACAvwAAAAAthd1ADA9GQcAkoEB9+jRCDA9GQVNrlkBE3zRCDA9GQcAkoEAAAAAAAAAAAIC/AAAAAC2F3UAMD0ZBwCSgQETfNEIMD0ZBwCSgQGKr3EAMD0ZBKd6pQAAAAAAAAAAAgL8AAAAAYqvcQAwPRkEp3qlARN80QgwPRkHAJKBAnSTaQAwPRkHzS7NAAAAAAAAAAACAvwAAAABWSzVCDA9GQU/OOEJ9+jRCDA9GQQj8OUIthd1ADA9GQTUzO0IAAAAAAAAAAIC/AAAAAC2F3UAMD0ZBNTM7Qn36NEIMD0ZBCPw5QkTfNEIMD0ZBNTM7QgAAAAAAAAAAgL8AAAAALYXdQAwPRkE1MztCRN80QgwPRkE1MztCYqvcQAwPRkFjajxCAAAAAAAAAACAvwAAAABiq9xADA9GQWNqPEJE3zRCDA9GQTUzO0J9+jRCDA9GQWNqPEIAAAAAAAAAAIC/AAAAAGKr3EAMD0ZBY2o8Qn36NEIMD0ZBY2o8QlZLNUIMD0ZBHJg9QgAAAAAAAAAAgL8AAAAAFqg6QgwPRkHyStdARN87QgwPRkG+JNhAQ99CQgwPRkE1MztCAAAAAAAAAACAvwAAAABD30JCDA9GQTUzO0JE3ztCDA9GQb4k2EBxFj1CDA9GQfJK10AAAAAAAAAAAIC/AAAAgEPfQkIMD0ZBNTM7QnEWPUIMD0ZB8krXQI7hTUIMD0ZBgDVNQgAAAAAAAAAAgL8AAAAAjuFNQgwPRkGANU1CcRY9QgwPRkHyStdAKkQ+QgwPRkEuxNRAAAAAAAAAAACAvwAAAACO4U1CDA9GQYA1TUIqRD5CDA9GQS7E1EBEXz9CDA9GQRek0EAAAAAAAAAAAIC/AAAAAC6FpUAMD0ZBviTYQJk+r0AMD0ZB8krXQF16OUIMD0ZBR580QgAAAAAAAAAAgL8AAAAAXXo5QgwPRkFHnzRCmT6vQAwPRkHyStdAYay4QAwPRkEuxNRAAAAAAAAAAACAvwAAAABdejlCDA9GQUefNEJhrLhADA9GQS7E1EBE3zRCDA9GQcAkoEAAAAAAAAAAAIC/AAAAAETfNEIMD0ZBwCSgQGGsuEAMD0ZBLsTUQC6FwUAMD0ZBF6TQQAAAAAAAAAAAgL8AAAAARN80QgwPRkHAJKBALoXBQAwPRkEXpNBAL4TJQAwPRkHDCstAAAAAAAAAAACAvwAAAAAvhMlADA9GQcMKy0Awa9BADA9GQb8jxEBE3zRCDA9GQcAkoEAAAAAAAAAAAIC/AAAAAETfNEIMD0ZBwCSgQDBr0EAMD0ZBvyPEQIQE1kAMD0ZBwCS8QAAAAAAAAAAAgL8AAAAARN80QgwPRkHAJKBAhATWQAwPRkHAJLxAnSTaQAwPRkHzS7NAAAAAAIA/AAAAAAAAAIBdy9U/uawqQkyTAD9dy9U/uawqQoA1TUJdy9U/DA9WQUyTAD8AAAAAgD8AAAAAAAAAAF3L1T8MD1ZBTJMAP13L1T+5rCpCgDVNQl3L1T8MD1ZBgDVNQgAAAAAAAAAAgD8AAAAAXcvVP7msKkKANU1CXcvVP7msKkJMkwA/t5YrP7msKkKANU1CAAAAAAAAAACAPwAAAAC3lis/uawqQoA1TUJdy9U/uawqQkyTAD+3lis/uawqQkyTAD8AAAAAgD8AAAAAAAAAgF2MDEG5rCpCTJMAP12MDEG5rCpCgDVNQl2MDEEMD1ZBTJMAPwAAAACAPwAAAAAAAAAAXYwMQQwPVkFMkwA/XYwMQbmsKkKANU1CXYwMQQwPVkGANU1CAAAAAAAAAACAPwAAAABdjAxBuawqQoA1TUJdjAxBuawqQkyTAD9djABBuawqQoA1TUIAAAAAAAAAAIA/AAAAAF2MAEG5rCpCgDVNQl2MDEG5rCpCTJMAP12MAEG5rCpCTJMAPwAAAACAvwAAAIAAAACA1nU1QbmsKkKANU1C1nU1QbmsKkJMkwA/1nU1QQwPVkGANU1CAAAAAIC/AAAAAAAAAADWdTVBDA9WQYA1TULWdTVBuawqQkyTAD/WdTVBDA9WQUyTAD8AAAAAgD8AAAAAAAAAgNZ1RUG5rCpCTJMAP9Z1RUG5rCpCgDVNQtZ1RUEMD1ZBTJMAPwAAAACAPwAAAAAAAAAA1nVFQQwPVkFMkwA/1nVFQbmsKkKANU1C1nVFQQwPVkGANU1CAAAAAAAAAACAPwAAAADWdUVBuawqQoA1TULWdUVBuawqQkyTAD/WdTVBuawqQoA1TUIAAAAAAAAAAIA/AAAAANZ1NUG5rCpCgDVNQtZ1RUG5rCpCTJMAP9Z1NUG5rCpCTJMAPwAAAACAvwAAAIAAAACAT19uQbmsKkKANU1CT19uQbmsKkJMkwA/T19uQQwPVkGANU1CAAAAAIC/AAAAAAAAAABPX25BDA9WQYA1TUJPX25BuawqQkyTAD9PX25BDA9WQUyTAD8AAAAAgD8AAAAAAAAAgE9ffkG5rCpCTJMAP09ffkG5rCpCgDVNQk9ffkEMD1ZBTJMAPwAAAACAPwAAAAAAAAAAT19+QQwPVkFMkwA/T19+QbmsKkKANU1CT19+QQwPVkGANU1CAAAAAAAAAACAPwAAAABPX35BuawqQoA1TUJPX35BuawqQkyTAD9PX25BuawqQoA1TUIAAAAAAAAAAIA/AAAAAE9fbkG5rCpCgDVNQk9ffkG5rCpCTJMAP09fbkG5rCpCTJMAPwAAAACAvwAAAIAAAACAZKSTQbmsKkKANU1CZKSTQbmsKkJMkwA/ZKSTQQwPVkGANU1CAAAAAIC/AAAAAAAAAABkpJNBDA9WQYA1TUJkpJNBuawqQkyTAD9kpJNBDA9WQUyTAD8AAAAAgD8AAAAAAAAAgGSkm0G5rCpCTJMAP2Skm0G5rCpCgDVNQmSkm0EMD1ZBTJMAPwAAAACAPwAAAAAAAAAAZKSbQQwPVkFMkwA/ZKSbQbmsKkKANU1CZKSbQQwPVkGANU1CAAAAAAAAAACAPwAAAABkpJtBuawqQoA1TUJkpJtBuawqQkyTAD9kpJNBuawqQoA1TUIAAAAAAAAAAIA/AAAAAGSkk0G5rCpCgDVNQmSkm0G5rCpCTJMAP2Skk0G5rCpCTJMAPwAAAACAvwAAAIAAAACAIBmwQbmsKkKANU1CIBmwQbmsKkJMkwA/IBmwQQwPVkGANU1CAAAAAIC/AAAAAAAAAAAgGbBBDA9WQYA1TUIgGbBBuawqQkyTAD8gGbBBDA9WQUyTAD8AAAAAgD8AAAAAAAAAgCAZuEG5rCpCTJMAPyAZuEG5rCpCgDVNQiAZuEEMD1ZBTJMAPwAAAACAPwAAAAAAAAAAIBm4QQwPVkFMkwA/IBm4QbmsKkKANU1CIBm4QQwPVkGANU1CAAAAAAAAAACAPwAAAAAgGbhBuawqQoA1TUIgGbhBuawqQkyTAD8gGbBBuawqQoA1TUIAAAAAAAAAAIA/AAAAACAZsEG5rCpCgDVNQiAZuEG5rCpCTJMAPyAZsEG5rCpCTJMAPwAAAACAvwAAAIAAAACA3Y3MQbmsKkKANU1C3Y3MQbmsKkJMkwA/3Y3MQQwPVkGANU1CAAAAAIC/AAAAAAAAAADdjcxBDA9WQYA1TULdjcxBuawqQkyTAD/djcxBDA9WQUyTAD8AAAAAgD8AAAAAAAAAgN2N1EG5rCpCTJMAP92N1EG5rCpCgDVNQt2N1EEMD1ZBTJMAPwAAAACAPwAAAAAAAAAA3Y3UQQwPVkFMkwA/3Y3UQbmsKkKANU1C3Y3UQQwPVkGANU1CAAAAAAAAAACAPwAAAADdjdRBuawqQoA1TULdjdRBuawqQkyTAD/djcxBuawqQoA1TUIAAAAAAAAAAIA/AAAAAN2NzEG5rCpCgDVNQt2N1EG5rCpCTJMAP92NzEG5rCpCTJMAPwAAAACAvwAAAIAAAACAmQLpQbmsKkKANU1CmQLpQbmsKkJMkwA/mQLpQQwPVkGANU1CAAAAAIC/AAAAAAAAAACZAulBDA9WQYA1TUKZAulBuawqQkyTAD+ZAulBDA9WQUyTAD8AAAAAgD8AAAAAAAAAgJkC8UG5rCpCTJMAP5kC8UG5rCpCgDVNQpkC8UEMD1ZBTJMAPwAAAACAPwAAAAAAAAAAmQLxQQwPVkFMkwA/mQLxQbmsKkKANU1CmQLxQQwPVkGANU1CAAAAAAAAAACAPwAAAACZAvFBuawqQoA1TUKZAvFBuawqQkyTAD+ZAulBuawqQoA1TUIAAAAAAAAAAIA/AAAAAJkC6UG5rCpCgDVNQpkC8UG5rCpCTJMAP5kC6UG5rCpCTJMAPwAAAACAvwAAAIAAAACAq7sCQrmsKkKANU1Cq7sCQrmsKkJMkwA/q7sCQgwPVkGANU1CAAAAAIC/AAAAAAAAAACruwJCDA9WQYA1TUKruwJCuawqQkyTAD+ruwJCDA9WQUyTAD8AAAAAgD8AAAAAAAAAgKu7BkK5rCpCTJMAP6u7BkK5rCpCgDVNQqu7BkIMD1ZBTJMAPwAAAACAPwAAAAAAAAAAq7sGQgwPVkFMkwA/q7sGQrmsKkKANU1Cq7sGQgwPVkGANU1CAAAAAAAAAACAPwAAAACruwZCuawqQoA1TUKruwZCuawqQkyTAD+ruwJCuawqQoA1TUIAAAAAAAAAAIA/AAAAAKu7AkK5rCpCgDVNQqu7BkK5rCpCTJMAP6u7AkK5rCpCTJMAPwAAAACAvwAAAIAAAACACfYQQrmsKkKANU1CCfYQQrmsKkJMkwA/CfYQQgwPVkGANU1CAAAAAIC/AAAAAAAAAAAJ9hBCDA9WQYA1TUIJ9hBCuawqQkyTAD8J9hBCDA9WQUyTAD8AAAAAgD8AAAAAAAAAgAn2FEK5rCpCTJMAPwn2FEK5rCpCgDVNQgn2FEIMD1ZBTJMAPwAAAACAPwAAAAAAAAAACfYUQgwPVkFMkwA/CfYUQrmsKkKANU1CCfYUQgwPVkGANU1CAAAAAAAAAACAPwAAAAAJ9hRCuawqQoA1TUIJ9hRCuawqQkyTAD8J9hBCuawqQoA1TUIAAAAAAAAAAIA/AAAAAAn2EEK5rCpCgDVNQgn2FEK5rCpCTJMAPwn2EEK5rCpCTJMAPwAAAACAvwAAAIAAAACAZzAfQrmsKkKANU1CZzAfQrmsKkJMkwA/ZzAfQgwPVkGANU1CAAAAAIC/AAAAAAAAAABnMB9CDA9WQYA1TUJnMB9CuawqQkyTAD9nMB9CDA9WQUyTAD8AAAAAgD8AAAAAAAAAgGcwI0K5rCpCTJMAP2cwI0K5rCpCgDVNQmcwI0IMD1ZBTJMAPwAAAACAPwAAAAAAAAAAZzAjQgwPVkFMkwA/ZzAjQrmsKkKANU1CZzAjQgwPVkGANU1CAAAAAAAAAACAPwAAAABnMCNCuawqQoA1TUJnMCNCuawqQkyTAD9nMB9CuawqQoA1TUIAAAAAAAAAAIA/AAAAAGcwH0K5rCpCgDVNQmcwI0K5rCpCTJMAP2cwH0K5rCpCTJMAPwAAAACAvwAAAIAAAACAxWotQrmsKkKANU1CxWotQrmsKkJMkwA/xWotQgwPVkGANU1CAAAAAIC/AAAAAAAAAADFai1CDA9WQYA1TULFai1CuawqQkyTAD/Fai1CDA9WQUyTAD8AAAAAAAAAAIA/AAAAAMVqLUK5rCpCTJMAP8VqLUK5rCpCgDVNQsVqMEK5rCpCTJMAPwAAAAAAAAAAgD8AAACAxWowQrmsKkJMkwA/xWotQrmsKkKANU1CxWowQrmsKkKANU1CAAAAAIC/AAAAgAAAAICC30lCuawqQoA1TUKC30lCuawqQkyTAD+C30lCDA9WQYA1TUIAAAAAgL8AAAAAAAAAAILfSUIMD1ZBgDVNQoLfSUK5rCpCTJMAP4LfSUIMD1ZBTJMAPwAAAACAPwAAAAAAAACAgt9NQrmsKkJMkwA/gt9NQrmsKkKANU1Cgt9NQgwPVkFMkwA/AAAAAIA/AAAAAAAAAACC301CDA9WQUyTAD+C301CuawqQoA1TUKC301CDA9WQYA1TUIAAAAAAAAAAIA/AAAAAILfTUK5rCpCgDVNQoLfTUK5rCpCTJMAP4LfSUK5rCpCgDVNQgAAAAAAAAAAgD8AAAAAgt9JQrmsKkKANU1Cgt9NQrmsKkJMkwA/gt9JQrmsKkJMkwA/AACJgLK9AAAAAJkGfz9E3ztCDA9WQTUzNEJE3ztCDA9GQTUzNEJxFj1CDA9WQW9ONEIAAImAsr0AAAAAmQZ/P3EWPUIMD1ZBb040QkTfO0IMD0ZBNTM0QnEWPUIMD0ZBb040QgAARYOEvgAAAAABR3c/cRY9QgwPVkFvTjRCcRY9QgwPRkFvTjRCKkQ+QgwPVkFHnzRCAABFg4S+AAAAAAFHdz8qRD5CDA9WQUefNEJxFj1CDA9GQW9ONEIqRD5CDA9GQUefNEIAAPZh2L4AAAAAqQNoPypEPkIMD1ZBR580QipEPkIMD0ZBR580QkRfP0IMD1ZBSyM1QgAA9mHYvgAAAACpA2g/RF8/QgwPVkFLIzVCKkQ+QgwPRkFHnzRCRF8/QgwPRkFLIzVCAADX1RK/AAAAAP6zUT9EXz9CDA9WQUsjNUJEXz9CDA9GQUsjNUIjX0BCDA9WQXXWNUIAANfVEr8AAAAA/rNRPyNfQEIMD1ZBddY1QkRfP0IMD0ZBSyM1QiNfQEIMD0ZBddY1QgAA8wQ1vwAAAADzBDU/I19AQgwPVkF11jVCI19AQgwPRkF11jVCBDxBQgwPVkFVszZCAADzBDW/AAAAAPMENT8EPEFCDA9WQVWzNkIjX0BCDA9GQXXWNUIEPEFCDA9GQVWzNkIAAP6zUb8AAAAA19USPwQ8QUIMD1ZBVbM2QgQ8QUIMD0ZBVbM2Qi7vQUIMD1ZBNbM3QgAA/rNRvwAAAADX1RI/Lu9BQgwPVkE1szdCBDxBQgwPRkFVszZCLu9BQgwPRkE1szdCAACpA2i/AAAAAPZh2D4u70FCDA9WQTWzN0Iu70FCDA9GQTWzN0Ixc0JCDA9WQU/OOEIAAKkDaL8AAAAA9mHYPjFzQkIMD1ZBT844Qi7vQUIMD0ZBNbM3QjFzQkIMD0ZBT844QgAAAUd3vwAAAABFg4Q+MXNCQgwPVkFPzjhCMXNCQgwPRkFPzjhCCsRCQgwPVkEI/DlCAAABR3e/AAAAAEWDhD4KxEJCDA9WQQj8OUIxc0JCDA9GQU/OOEIKxEJCDA9GQQj8OUIAAJkGf78AAAAAiYCyPQrEQkIMD1ZBCPw5QgrEQkIMD0ZBCPw5QkPfQkIMD1ZBNTM7QgAAmQZ/vwAAAACJgLI9Q99CQgwPVkE1MztCCsRCQgwPRkEI/DlCQ99CQgwPRkE1MztCAACZBn+/AAAAgEKAsr1D30JCDA9WQTUzO0JD30JCDA9GQTUzO0IKxEJCDA9WQWNqPEIAAJkGf78AAACAQoCyvQrEQkIMD1ZBY2o8QkPfQkIMD0ZBNTM7QgrEQkIMD0ZBY2o8QgAA+kZ3vwAAAIB5g4S+CsRCQgwPVkFjajxCCsRCQgwPRkFjajxCMXNCQgwPVkEcmD1CAAD6Rne/AAAAgHmDhL4xc0JCDA9WQRyYPUIKxEJCDA9GQWNqPEIxc0JCDA9GQRyYPUIAAKkDaL8AAACA9mHYvjFzQkIMD1ZBHJg9QjFzQkIMD0ZBHJg9Qi7vQUIMD1ZBNbM+QgAAqQNovwAAAID2Ydi+Lu9BQgwPVkE1sz5CMXNCQgwPRkEcmD1CLu9BQgwPRkE1sz5CAAAgtFG/AAAAgKfVEr8u70FCDA9WQTWzPkIu70FCDA9GQTWzPkIEPEFCDA9WQRazP0IAACC0Ub8AAACAp9USvwQ8QUIMD1ZBFrM/Qi7vQUIMD0ZBNbM+QgQ8QUIMD0ZBFrM/QgAAwAQ1vwAAAIAmBTW/BDxBQgwPVkEWsz9CBDxBQgwPRkEWsz9CI19AQgwPVkH2j0BCAADABDW/AAAAgCYFNb8jX0BCDA9WQfaPQEIEPEFCDA9GQRazP0IjX0BCDA9GQfaPQEIAABzWEr8AAACAzrNRvyNfQEIMD1ZB9o9AQiNfQEIMD0ZB9o9AQkRfP0IMD1ZBIENBQgAAHNYSvwAAAIDOs1G/RF8/QgwPVkEgQ0FCI19AQgwPRkH2j0BCRF8/QgwPRkEgQ0FCAABNYdi+AAAAgNEDaL9EXz9CDA9WQSBDQUJEXz9CDA9GQSBDQUIqRD5CDA9WQSPHQUIAAE1h2L4AAACA0QNovypEPkIMD1ZBI8dBQkRfP0IMD0ZBIENBQipEPkIMD0ZBI8dBQgAABISEvgAAAIDnRne/KkQ+QgwPVkEjx0FCKkQ+QgwPRkEjx0FCcRY9QgwPVkH8F0JCAAAEhIS+AAAAgOdGd79xFj1CDA9WQfwXQkIqRD5CDA9GQSPHQUJxFj1CDA9GQfwXQkIAAFx9sr0AAACAoQZ/v3EWPUIMD1ZB/BdCQnEWPUIMD0ZB/BdCQkTfO0IMD1ZBNTNCQgAAXH2yvQAAAIChBn+/RN87QgwPVkE1M0JCcRY9QgwPRkH8F0JCRN87QgwPRkE1M0JCAAAVfbI9AAAAAKIGf79E3ztCDA9WQTUzQkJE3ztCDA9GQTUzQkIWqDpCDA9WQfwXQkIAABV9sj0AAAAAogZ/vxaoOkIMD1ZB/BdCQkTfO0IMD0ZBNTNCQhaoOkIMD0ZB/BdCQgAABISEPgAAAADnRne/Fqg6QgwPVkH8F0JCFqg6QgwPRkH8F0JCXXo5QgwPVkEjx0FCAAAEhIQ+AAAAAOdGd79dejlCDA9WQSPHQUIWqDpCDA9GQfwXQkJdejlCDA9GQSPHQUIAAJxh2D4AAAAAvgNov116OUIMD1ZBI8dBQl16OUIMD0ZBI8dBQkRfOEIMD1ZBIENBQgAAnGHYPgAAAAC+A2i/RF84QgwPVkEgQ0FCXXo5QgwPRkEjx0FCRF84QgwPRkEgQ0FCAADs1RI/AAAAAPCzUb9EXzhCDA9WQSBDQUJEXzhCDA9GQSBDQUJjXzdCDA9WQfaPQEIAAOzVEj8AAAAA8LNRv2NfN0IMD1ZB9o9AQkRfOEIMD0ZBIENBQmNfN0IMD0ZB9o9AQgAAwAQ1PwAAAAAmBTW/Y183QgwPVkH2j0BCY183QgwPRkH2j0BCg4I2QgwPVkEWsz9CAADABDU/AAAAACYFNb+DgjZCDA9WQRazP0JjXzdCDA9GQfaPQEKDgjZCDA9GQRazP0IAACC0UT8AAAAAp9USv4OCNkIMD1ZBFrM/QoOCNkIMD0ZBFrM/QlnPNUIMD1ZBNbM+QgAAILRRPwAAAACn1RK/Wc81QgwPVkE1sz5Cg4I2QgwPRkEWsz9CWc81QgwPRkE1sz5CAADRA2g/AAAAAE1h2L5ZzzVCDA9WQTWzPkJZzzVCDA9GQTWzPkJWSzVCDA9WQRyYPUIAANEDaD8AAAAATWHYvlZLNUIMD1ZBHJg9QlnPNUIMD0ZBNbM+QlZLNUIMD0ZBHJg9QgAA4EZ3PwAAAAA4hIS+Vks1QgwPVkEcmD1CVks1QgwPRkEcmD1Cffo0QgwPVkFjajxCAADgRnc/AAAAADiEhL59+jRCDA9WQWNqPEJWSzVCDA9GQRyYPUJ9+jRCDA9GQWNqPEIAAKIGfz8AAAAAFX2yvX36NEIMD1ZBY2o8Qn36NEIMD0ZBY2o8QkTfNEIMD1ZBNTM7QgAAogZ/PwAAAAAVfbK9RN80QgwPVkE1MztCffo0QgwPRkFjajxCRN80QgwPRkE1MztCAAChBn8/AAAAAFx9sj1E3zRCDA9WQTUzO0JE3zRCDA9GQTUzO0J9+jRCDA9WQQj8OUIAAKEGfz8AAAAAXH2yPX36NEIMD1ZBCPw5QkTfNEIMD0ZBNTM7Qn36NEIMD0ZBCPw5QgAA50Z3PwAAAAAEhIQ+ffo0QgwPVkEI/DlCffo0QgwPRkEI/DlCVks1QgwPVkFPzjhCAADnRnc/AAAAAASEhD5WSzVCDA9WQU/OOEJ9+jRCDA9GQQj8OUJWSzVCDA9GQU/OOEIAANEDaD8AAAAATWHYPlZLNUIMD1ZBT844QlZLNUIMD0ZBT844QlnPNUIMD1ZBNbM3QgAA0QNoPwAAAABNYdg+Wc81QgwPVkE1szdCVks1QgwPRkFPzjhCWc81QgwPRkE1szdCAAD+s1E/AAAAANfVEj9ZzzVCDA9WQTWzN0JZzzVCDA9GQTWzN0KDgjZCDA9WQVWzNkIAAP6zUT8AAAAA19USP4OCNkIMD1ZBVbM2QlnPNUIMD0ZBNbM3QoOCNkIMD0ZBVbM2QgAA8wQ1PwAAAADzBDU/g4I2QgwPVkFVszZCg4I2QgwPRkFVszZCY183QgwPVkF11jVCAADzBDU/AAAAAPMENT9jXzdCDA9WQXXWNUKDgjZCDA9GQVWzNkJjXzdCDA9GQXXWNUIAAKfVEj8AAAAAILRRP2NfN0IMD1ZBddY1QmNfN0IMD0ZBddY1QkRfOEIMD1ZBSyM1QgAAp9USPwAAAAAgtFE/RF84QgwPVkFLIzVCY183QgwPRkF11jVCRF84QgwPRkFLIzVCAABEYtg+AAAAAJcDaD9EXzhCDA9WQUsjNUJEXzhCDA9GQUsjNUJdejlCDA9WQUefNEIAAERi2D4AAAAAlwNoP116OUIMD1ZBR580QkRfOEIMD0ZBSyM1Ql16OUIMD0ZBR580QgAARYOEPgAAAAABR3c/XXo5QgwPVkFHnzRCXXo5QgwPRkFHnzRCFqg6QgwPVkFvTjRCAABFg4Q+AAAAAAFHdz8WqDpCDA9WQW9ONEJdejlCDA9GQUefNEIWqDpCDA9GQW9ONEIAAEKAsj0AAAAAmQZ/PxaoOkIMD1ZBb040QhaoOkIMD0ZBb040QkTfO0IMD1ZBNTM0QgAAQoCyPQAAAACZBn8/RN87QgwPVkE1MzRCFqg6QgwPRkFvTjRCRN87QgwPRkE1MzRCAABlgLK9AAAAAJkGfz8uhaVADA9WQTUzNEIuhaVADA9GQTUzNEKZPq9ADA9WQW9ONEIAAGWAsr0AAAAAmQZ/P5k+r0AMD1ZBb040Qi6FpUAMD0ZBNTM0Qpk+r0AMD0ZBb040QgAAX4OEvgAAAAD9Rnc/mT6vQAwPVkFvTjRCmT6vQAwPRkFvTjRCYay4QAwPVkFHnzRCAABfg4S+AAAAAP1Gdz9hrLhADA9WQUefNEKZPq9ADA9GQW9ONEJhrLhADA9GQUefNEIAAPZh2L4AAAAAqQNoP2GsuEAMD1ZBR580QmGsuEAMD0ZBR580Qi6FwUAMD1ZBSyM1QgAA9mHYvgAAAACpA2g/LoXBQAwPVkFLIzVCYay4QAwPRkFHnzRCLoXBQAwPRkFLIzVCAAC/1RK/AAAAAA+0UT8uhcFADA9WQUsjNUIuhcFADA9GQUsjNUIvhMlADA9WQXXWNUIAAL/VEr8AAAAAD7RRPy+EyUAMD1ZBddY1Qi6FwUAMD0ZBSyM1Qi+EyUAMD0ZBddY1QgAADQU1vwAAAADaBDU/L4TJQAwPVkF11jVCL4TJQAwPRkF11jVCMGvQQAwPVkFVszZCAAANBTW/AAAAANoENT8wa9BADA9WQVWzNkIvhMlADA9GQXXWNUIwa9BADA9GQVWzNkIAAOazUb8AAAAA+tUSPzBr0EAMD1ZBVbM2QjBr0EAMD0ZBVbM2QoQE1kAMD1ZBNbM3QgAA5rNRvwAAAAD61RI/hATWQAwPVkE1szdCMGvQQAwPRkFVszZChATWQAwPRkE1szdCAAC9A2i/AAAAAKJh2D6EBNZADA9WQTWzN0KEBNZADA9GQTWzN0KdJNpADA9WQU/OOEIAAL0DaL8AAAAAomHYPp0k2kAMD1ZBT844QoQE1kAMD0ZBNbM3Qp0k2kAMD0ZBT844QgAA9EZ3vwAAAAClg4Q+nSTaQAwPVkFPzjhCnSTaQAwPRkFPzjhCYqvcQAwPVkEI/DlCAAD0Rne/AAAAAKWDhD5iq9xADA9WQQj8OUKdJNpADA9GQU/OOEJiq9xADA9GQQj8OUIAAJ0Gf78AAAAA8n6yPWKr3EAMD1ZBCPw5QmKr3EAMD0ZBCPw5Qi2F3UAMD1ZBNTM7QgAAnQZ/vwAAAADyfrI9LYXdQAwPVkE1MztCYqvcQAwPRkEI/DlCLYXdQAwPRkE1MztCAACeBn+/AAAAgKt+sr0thd1ADA9WQTUzO0Ithd1ADA9GQTUzO0Jiq9xADA9WQWNqPEIAAJ4Gf78AAACAq36yvWKr3EAMD1ZBY2o8Qi2F3UAMD0ZBNTM7QmKr3EAMD0ZBY2o8QgAA7UZ3vwAAAIDYg4S+YqvcQAwPVkFjajxCYqvcQAwPRkFjajxCnSTaQAwPVkEcmD1CAADtRne/AAAAgNiDhL6dJNpADA9WQRyYPUJiq9xADA9GQWNqPEKdJNpADA9GQRyYPUIAAL0DaL8AAACAomHYvp0k2kAMD1ZBHJg9Qp0k2kAMD0ZBHJg9QoQE1kAMD1ZBNbM+QgAAvQNovwAAAICiYdi+hATWQAwPVkE1sz5CnSTaQAwPRkEcmD1ChATWQAwPRkE1sz5CAAAItFG/AAAAgMnVEr+EBNZADA9WQTWzPkKEBNZADA9GQTWzPkIwa9BADA9WQRazP0IAAAi0Ub8AAACAydUSvzBr0EAMD1ZBFrM/QoQE1kAMD0ZBNbM+QjBr0EAMD0ZBFrM/QgAA2gQ1vwAAAIANBTW/MGvQQAwPVkEWsz9CMGvQQAwPRkEWsz9CL4TJQAwPVkH2j0BCAADaBDW/AAAAgA0FNb8vhMlADA9WQfaPQEIwa9BADA9GQRazP0IvhMlADA9GQfaPQEIAAATWEr8AAACA37NRvy+EyUAMD1ZB9o9AQi+EyUAMD0ZB9o9AQi6FwUAMD1ZBIENBQgAABNYSvwAAAIDfs1G/LoXBQAwPVkEgQ0FCL4TJQAwPRkH2j0BCLoXBQAwPRkEgQ0FCAABNYdi+AAAAgNEDaL8uhcFADA9WQSBDQUIuhcFADA9GQSBDQUJhrLhADA9WQSPHQUIAAE1h2L4AAACA0QNov2GsuEAMD1ZBI8dBQi6FwUAMD0ZBIENBQmGsuEAMD0ZBI8dBQgAAHoSEvgAAAIDkRne/Yay4QAwPVkEjx0FCYay4QAwPRkEjx0FCmT6vQAwPVkH8F0JCAAAehIS+AAAAgORGd7+ZPq9ADA9WQfwXQkJhrLhADA9GQSPHQUKZPq9ADA9GQfwXQkIAADh9sr0AAACAogZ/v5k+r0AMD1ZB/BdCQpk+r0AMD0ZB/BdCQi6FpUAMD1ZBNTNCQgAAOH2yvQAAAICiBn+/LoWlQAwPVkE1M0JCmT6vQAwPRkH8F0JCLoWlQAwPRkE1M0JCAAAVfbI9AAAAAKIGf78uhaVADA9WQTUzQkIuhaVADA9GQTUzQkLBy5tADA9WQfwXQkIAABV9sj0AAAAAogZ/v8HLm0AMD1ZB/BdCQi6FpUAMD0ZBNTNCQsHLm0AMD0ZB/BdCQgAAOISEPgAAAADgRne/wcubQAwPVkH8F0JCwcubQAwPRkH8F0JC+12SQAwPVkEjx0FCAAA4hIQ+AAAAAOBGd7/7XZJADA9WQSPHQULBy5tADA9GQfwXQkL7XZJADA9GQSPHQUIAAE1h2D4AAAAA0QNov/tdkkAMD1ZBI8dBQvtdkkAMD0ZBI8dBQi6FiUAMD1ZBIENBQgAATWHYPgAAAADRA2i/LoWJQAwPVkEgQ0FC+12SQAwPRkEjx0FCLoWJQAwPRkEgQ0FCAAAc1hI/AAAAAM6zUb8uhYlADA9WQSBDQUIuhYlADA9GQSBDQUIvhoFADA9WQfaPQEIAABzWEj8AAAAAzrNRvy+GgUAMD1ZB9o9AQi6FiUAMD0ZBIENBQi+GgUAMD0ZB9o9AQgAAwAQ1PwAAAAAmBTW/L4aBQAwPVkH2j0BCL4aBQAwPRkH2j0BCVz51QAwPVkEWsz9CAADABDU/AAAAACYFNb9XPnVADA9WQRazP0IvhoFADA9GQfaPQEJXPnVADA9GQRazP0IAAPCzUT8AAAAA7NUSv1c+dUAMD1ZBFrM/Qlc+dUAMD0ZBFrM/QqsLakAMD1ZBNbM+QgAA8LNRPwAAAADs1RK/qwtqQAwPVkE1sz5CVz51QAwPRkEWsz9CqwtqQAwPRkE1sz5CAADRA2g/AAAAAE1h2L6rC2pADA9WQTWzPkKrC2pADA9GQTWzPkJ9y2FADA9WQRyYPUIAANEDaD8AAAAATWHYvn3LYUAMD1ZBHJg9QqsLakAMD0ZBNbM+Qn3LYUAMD0ZBHJg9QgAA4EZ3PwAAAAA4hIS+fcthQAwPVkEcmD1CfcthQAwPRkEcmD1C8L1cQAwPVkFjajxCAADgRnc/AAAAADiEhL7wvVxADA9WQWNqPEJ9y2FADA9GQRyYPULwvVxADA9GQWNqPEIAAKIGfz8AAAAAFX2yvfC9XEAMD1ZBY2o8QvC9XEAMD0ZBY2o8QlwKW0AMD1ZBNTM7QgAAogZ/PwAAAAAVfbK9XApbQAwPVkE1MztC8L1cQAwPRkFjajxCXApbQAwPRkE1MztCAAChBn8/AAAAAFx9sj1cCltADA9WQTUzO0JcCltADA9GQTUzO0LwvVxADA9WQQj8OUIAAKEGfz8AAAAAXH2yPfC9XEAMD1ZBCPw5QlwKW0AMD0ZBNTM7QvC9XEAMD0ZBCPw5QgAA50Z3PwAAAAAEhIQ+8L1cQAwPVkEI/DlC8L1cQAwPRkEI/DlCfcthQAwPVkFPzjhCAADnRnc/AAAAAASEhD59y2FADA9WQU/OOELwvVxADA9GQQj8OUJ9y2FADA9GQU/OOEIAANEDaD8AAAAATWHYPn3LYUAMD1ZBT844Qn3LYUAMD0ZBT844QqsLakAMD1ZBNbM3QgAA0QNoPwAAAABNYdg+qwtqQAwPVkE1szdCfcthQAwPRkFPzjhCqwtqQAwPRkE1szdCAADOs1E/AAAAABzWEj+rC2pADA9WQTWzN0KrC2pADA9GQTWzN0JXPnVADA9WQVWzNkIAAM6zUT8AAAAAHNYSP1c+dUAMD1ZBVbM2QqsLakAMD0ZBNbM3Qlc+dUAMD0ZBVbM2QgAA8wQ1PwAAAADzBDU/Vz51QAwPVkFVszZCVz51QAwPRkFVszZCL4aBQAwPVkF11jVCAADzBDU/AAAAAPMENT8vhoFADA9WQXXWNUJXPnVADA9GQVWzNkIvhoFADA9GQXXWNUIAANfVEj8AAAAA/rNRPy+GgUAMD1ZBddY1Qi+GgUAMD0ZBddY1Qi6FiUAMD1ZBSyM1QgAA19USPwAAAAD+s1E/LoWJQAwPVkFLIzVCL4aBQAwPRkF11jVCLoWJQAwPRkFLIzVCAAD2Ydg+AAAAAKkDaD8uhYlADA9WQUsjNUIuhYlADA9GQUsjNUL7XZJADA9WQUefNEIAAPZh2D4AAAAAqQNoP/tdkkAMD1ZBR580Qi6FiUAMD0ZBSyM1QvtdkkAMD0ZBR580QgAAeYOEPgAAAAD6Rnc/+12SQAwPVkFHnzRC+12SQAwPRkFHnzRCwcubQAwPVkFvTjRCAAB5g4Q+AAAAAPpGdz/By5tADA9WQW9ONEL7XZJADA9GQUefNELBy5tADA9GQW9ONEIAAEKAsj0AAAAAmQZ/P8HLm0AMD1ZBb040QsHLm0AMD0ZBb040Qi6FpUAMD1ZBNTM0QgAAQoCyPQAAAACZBn8/LoWlQAwPVkE1MzRCwcubQAwPRkFvTjRCLoWlQAwPRkE1MzRCAAAAAAAAAAAAAAAAgD8kpT9CuawqQjMGL0IkpTtCuawqQjMGL0IkpT9CDA9WQTMGL0IAAAAAAAAAAAAAAACAPySlP0IMD1ZBMwYvQiSlO0K5rCpCMwYvQiSlO0IMD1ZBMwYvQgAAAAAAAAAAAAAAAIC/JKU/QgwPVkFrxgBBJKU7QgwPVkFrxgBBJKU/QrmsKkJrxgBBAAAAAACAAAAAAAAAgL8kpT9CuawqQmvGAEEkpTtCDA9WQWvGAEEkpTtCuawqQmvGAEEAAAAAAAAAAAAAAACAv8pFp0AMD1ZBa8YAQclFh0AMD1ZBa8YAQcpFp0C5rCpCa8YAQQAAAAAAgAAAAAAAAIC/ykWnQLmsKkJrxgBByUWHQAwPVkFrxgBByUWHQLmsKkJrxgBBAAAAAAAAAAAAAAAAgD/KRadAuawqQjMGL0LJRYdAuawqQjMGL0LKRadADA9WQTMGL0IAAAAAAAAAAAAAAACAP8pFp0AMD1ZBMwYvQslFh0C5rCpCMwYvQslFh0AMD1ZBMwYvQgAAAACAPwAAAIAAAAAAxWowQgwPVkGANU1CxWowQgwPVkFMkwA/xWowQrmsKkKANU1CAAAAAIA/AAAAAAAAAADFajBCuawqQoA1TULFajBCDA9WQUyTAD/FajBCuawqQkyTAD8AAAAAgL8AAAAAAAAAAF2MAEEMD1ZBTJMAP12MAEEMD1ZBgDVNQl2MAEG5rCpCTJMAPwAAAACAvwAAAAAAAAAAXYwAQbmsKkJMkwA/XYwAQQwPVkGANU1CXYwAQbmsKkKANU1CAAA=";var Ec=document.querySelector("#year");Ec&&(Ec.textContent=new Date().getFullYear());var Rc=Array.from(document.querySelectorAll(".nav-links a")),wc=Rc.map(r=>document.querySelector(r.getAttribute("href"))).filter(Boolean);if("IntersectionObserver"in window&&wc.length){let r=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&Rc.forEach(i=>{i.classList.toggle("is-active",i.getAttribute("href")===`#${t.target.id}`)})})},{rootMargin:"-38% 0px -52% 0px",threshold:.01});wc.forEach(e=>r.observe(e))}var Tc=Array.from(document.querySelectorAll("[data-stl-viewer]")),cd=window.matchMedia("(prefers-reduced-motion: reduce)"),lo;function hd(r){r.computeBoundingBox();let e=r.boundingBox,t=new S;e.getSize(t);let i=[t.x,t.y,t.z].sort((d,p)=>d-p);if(i[2]/i[1]<1.55)return r.center(),r.computeVertexNormals(),r;let n=[t.x,t.y,t.z],s=n.indexOf(Math.max(...n)),a=[e.min.x,e.min.y,e.min.z],o=[e.max.x,e.max.y,e.max.z],l=a[s]+(o[s]-a[s])*.31,c=r.getAttribute("position"),h=[];for(let d=0;d<c.count;d+=3){let p=c.getComponent(d,s),f=c.getComponent(d+1,s),_=c.getComponent(d+2,s);if(!(Math.max(p,f,_)>l))for(let m=d;m<d+3;m+=1)h.push(c.getX(m),c.getY(m),c.getZ(m))}let u=new De;return u.setAttribute("position",new ge(h,3)),u.computeBoundingBox(),u.center(),u.computeVertexNormals(),u}function ud(){return lo||(lo=new Promise((r,e)=>{new cs().load(bc,i=>{r(hd(i))},void 0,e)})),lo}var co=class{constructor(e,t){this.stage=e,this.canvas=e.querySelector(".stl-canvas"),this.view=e.dataset.stlView||"hero",this.index=t,this.pointer={x:0,y:0},this.rotation={spin:t*.45},this.frame=0,this.isVisible=!1,this.isReducedMotion=cd.matches,this.scene=new Or,this.camera=new it(30,1,.1,100),this.camera.position.set(4.8,3.35,5.85),this.renderer=new Nr({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8)),this.renderer.outputColorSpace=mt,this.renderer.toneMapping=no,this.renderer.toneMappingExposure=1.15,this.root=new ti,this.root.rotation.set(-.36,-.68,0),this.scene.add(this.root),this.addLights(),this.addTelemetryGeometry(),this.bindEvents(),this.resize(),ud().then(i=>this.setGeometry(i)).catch(()=>this.stage.classList.add("has-webgl-error"))}addLights(){let e=new es(15267839,528669,1.9);this.scene.add(e);let t=new On(16777215,2.8);t.position.set(3.5,4.6,4.8),this.scene.add(t);let i=new On(58879,2.1);i.position.set(-4.6,2.2,-3.5),this.scene.add(i);let n=new is(16726843,.65,10);n.position.set(3.5,-1.2,2.2),this.scene.add(n)}addTelemetryGeometry(){let e=new ns(5.6,18,58879,1519690);e.material.transparent=!0,e.material.opacity=.17,e.position.y=-1.28,this.scene.add(e);let t=new Qi({color:58879,transparent:!0,opacity:.18,depthWrite:!1}),i=new Ze(new rn(2.25,.007,8,140),t);i.rotation.x=Math.PI/2,i.position.y=-1.16,this.scene.add(i),this.ring=i;let n=new Ze(new rn(1.22,.005,8,96),t.clone());n.material.opacity=.1,n.rotation.x=Math.PI/2,n.position.y=-1.15,this.scene.add(n),this.innerRing=n;let s=new Zr({color:58879,transparent:!0,opacity:.34,dashSize:.12,gapSize:.11,depthWrite:!1});this.flowLines=[-.62,0,.62].map((a,o)=>{let l=[];for(let h=0;h<=42;h+=1){let u=h/42;l.push(new S(-2.65+u*5.3,-.48+Math.sin(u*Math.PI)*(.42+o*.05),a+Math.sin(u*Math.PI*2)*.12))}let c=new Cn(new De().setFromPoints(l),s.clone());return c.computeLineDistances(),this.scene.add(c),c})}bindEvents(){this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.stage),this.stage.addEventListener("pointermove",e=>{let t=this.stage.getBoundingClientRect();this.pointer.x=((e.clientX-t.left)/t.width-.5)*2,this.pointer.y=((e.clientY-t.top)/t.height-.5)*2}),this.stage.addEventListener("pointerleave",()=>{this.pointer.x=0,this.pointer.y=0}),this.visibilityObserver=new IntersectionObserver(([e])=>{this.isVisible=e.isIntersecting,this.isVisible&&this.animate()},{threshold:.08}),this.visibilityObserver.observe(this.stage)}resize(){let{width:e,height:t}=this.stage.getBoundingClientRect();!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}setGeometry(e){let t=e.clone(),i=new At().setFromBufferAttribute(t.getAttribute("position")),n=new S;i.getSize(n);let s=Math.max(n.x,n.z,n.y*.92)||1,a=this.view==="dossier"?2.48/s:2.72/s,o=new Jr({color:14013130,metalness:.72,roughness:.33,emissive:464157,emissiveIntensity:.18}),l=new Ze(t,o);l.scale.setScalar(a),l.rotation.set(0,0,0),l.position.y=-.08,l.castShadow=!1,l.receiveShadow=!1,this.root.add(l);let c=new Mi({color:15727359,transparent:!0,opacity:.17}),h=new Ln(new Pn(t,42),c);h.scale.copy(l.scale),h.rotation.copy(l.rotation),h.position.copy(l.position),this.root.add(h),this.mesh=l,this.edges=h,this.stage.classList.add("is-loaded"),this.render(),this.animate()}animate(){if(!this.isVisible||this.frame)return;let e=()=>{if(this.frame=0,!this.isVisible)return;let t=this.isReducedMotion?0:this.view==="dossier"?.004:.0055;this.rotation.spin+=t;let i=-.36+this.pointer.y*.13,n=-.68+this.rotation.spin+this.pointer.x*.2,s=this.pointer.x*.06;this.root.rotation.x+=(i-this.root.rotation.x)*.055,this.root.rotation.y+=(n-this.root.rotation.y)*.055,this.root.rotation.z+=(s-this.root.rotation.z)*.055,this.ring&&(this.ring.rotation.z-=t*.9),this.innerRing&&(this.innerRing.rotation.z+=t*1.25),this.flowLines&&this.flowLines.forEach((a,o)=>{a.material.dashOffset-=t*(4+o*.55)}),this.render(),this.frame=requestAnimationFrame(e)};this.frame=requestAnimationFrame(e)}render(){this.camera.lookAt(0,0,0),this.renderer.render(this.scene,this.camera)}};Tc.length&&window.WebGLRenderingContext&&Tc.forEach((r,e)=>new co(r,e));})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
