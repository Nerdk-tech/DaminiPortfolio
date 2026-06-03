import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeFaceBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    /* ── Scene ── */
    const scene = new THREE.Scene();
    scene.background = null;

    /* ── Camera: face-to-neck crop ── */
    const camera = new THREE.PerspectiveCamera(38, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.3, 5.8);
    camera.lookAt(0, 0.3, 0);

    /* ── Toon gradient map (3-step cel shading) ── */
    const toonSteps = 4;
    const toonData = new Uint8Array(toonSteps * 4);
    const toonColors = [
      [30, 20, 15, 255],   // deep shadow
      [160, 100, 60, 255], // mid shadow
      [210, 145, 90, 255], // mid
      [245, 185, 120, 255],// highlight
    ];
    toonColors.forEach((c, i) => { toonData.set(c, i * 4); });
    const toonMap = new THREE.DataTexture(toonData, toonSteps, 1);
    toonMap.minFilter = THREE.NearestFilter;
    toonMap.magFilter = THREE.NearestFilter;
    toonMap.needsUpdate = true;

    /* ── Toon gradient map for lighter areas ── */
    const lightToonData = new Uint8Array(toonSteps * 4);
    const lightToonColors = [
      [20, 15, 10, 255],
      [80, 55, 35, 255],
      [140, 100, 65, 255],
      [190, 140, 90, 255],
    ];
    lightToonColors.forEach((c, i) => { lightToonData.set(c, i * 4); });
    const darkToonMap = new THREE.DataTexture(lightToonData, toonSteps, 1);
    darkToonMap.minFilter = THREE.NearestFilter;
    darkToonMap.magFilter = THREE.NearestFilter;
    darkToonMap.needsUpdate = true;

    /* ── Materials (MeshToonMaterial for cartoon look) ── */
    const skinMat = new THREE.MeshToonMaterial({ color: 0xd4824a, gradientMap: toonMap });
    const darkSkinMat = new THREE.MeshToonMaterial({ color: 0xa05a30, gradientMap: darkToonMap });
    const outlineMat = new THREE.MeshToonMaterial({ color: 0x1a0a00, side: THREE.BackSide });
    const eyeWhiteMat = new THREE.MeshToonMaterial({ color: 0xf5f0e8 });
    const irisMat = new THREE.MeshToonMaterial({ color: 0x2a5fa8, emissive: 0x0a2040, emissiveIntensity: 0.3 });
    const pupilMat = new THREE.MeshToonMaterial({ color: 0x050505 });
    const eyeHighlightMat = new THREE.MeshToonMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.5 });
    const hairMat = new THREE.MeshToonMaterial({ color: 0x0d0808 });
    const browMat = new THREE.MeshToonMaterial({ color: 0x150a05 });
    const lipTopMat = new THREE.MeshToonMaterial({ color: 0xb86040 });
    const lipBotMat = new THREE.MeshToonMaterial({ color: 0xd07050 });
    const teethMat = new THREE.MeshToonMaterial({ color: 0xf5f0e0 });
    const neckMat = new THREE.MeshToonMaterial({ color: 0xc07540, gradientMap: toonMap });
    const eyeLidMat = new THREE.MeshToonMaterial({ color: 0xc07040 });
    const eyeLashMat = new THREE.MeshToonMaterial({ color: 0x0d0808 });
    const collarMat = new THREE.MeshToonMaterial({ color: 0x111111 });
    const shirtMat = new THREE.MeshToonMaterial({ color: 0x1a1a2e });

    /* ── Helpers ── */
    function addOutline(mesh: THREE.Mesh, thickness = 0.045) {
      const outGeo = mesh.geometry.clone();
      const outMesh = new THREE.Mesh(outGeo, outlineMat.clone());
      outMesh.scale.setScalar(1 + thickness);
      mesh.add(outMesh);
    }

    /* ════════════════════════════════════
       HEAD GROUP — everything parented here
    ════════════════════════════════════ */
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.5, 0);
    scene.add(headGroup);

    /* ── HEAD SHAPE: big round cartoon head ── */
    const headGeo = new THREE.SphereGeometry(1.05, 64, 64);
    // Squash bottom (jaw), keep top round
    const hPos = headGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < hPos.count; i++) {
      const y = hPos.getY(i);
      const x = hPos.getX(i);
      const z = hPos.getZ(i);
      const jawFactor = Math.max(0, -y) / 1.05;
      // Taper jaw slightly, widen cheeks
      hPos.setXYZ(
        i,
        x * (1.0 - jawFactor * 0.15),
        y * 1.08,
        z * (0.88 - jawFactor * 0.08)
      );
    }
    headGeo.computeVertexNormals();
    const head = new THREE.Mesh(headGeo, skinMat);
    head.castShadow = true;
    headGroup.add(head);
    // Outline for head
    const headOutline = new THREE.Mesh(headGeo.clone(), outlineMat);
    headOutline.scale.setScalar(1.04);
    headGroup.add(headOutline);

    /* ── NECK ── */
    const neckGeo = new THREE.CylinderGeometry(0.3, 0.36, 0.7, 32);
    const neck = new THREE.Mesh(neckGeo, neckMat);
    neck.position.set(0, -1.22, 0);
    scene.add(neck);
    const neckOutline = new THREE.Mesh(neckGeo.clone(), outlineMat);
    neckOutline.scale.setScalar(1.06);
    neck.add(neckOutline);

    /* ── SHIRT / COLLAR ── */
    const shirtGeo = new THREE.CylinderGeometry(0.85, 1.1, 0.6, 32, 1, true, 0, Math.PI * 2);
    const shirt = new THREE.Mesh(shirtGeo, shirtMat);
    shirt.position.set(0, -1.95, 0);
    scene.add(shirt);
    // Collar
    const collarGeo = new THREE.TorusGeometry(0.42, 0.06, 12, 40);
    const collar = new THREE.Mesh(collarGeo, collarMat);
    collar.position.set(0, -1.62, 0.08);
    collar.rotation.x = 0.3;
    scene.add(collar);

    /* ── SHOULDERS ── */
    for (const side of [-1, 1]) {
      const sGeo = new THREE.SphereGeometry(0.62, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.55);
      const s = new THREE.Mesh(sGeo, shirtMat);
      s.scale.set(1.1, 0.45, 0.9);
      s.position.set(side * 1.1, -1.92, -0.1);
      scene.add(s);
    }

    /* ════════════════════════
       EYES — cartoon big eyes
    ════════════════════════ */
    function makeEye(xPos: number) {
      const g = new THREE.Group();

      // Eye white — big oval
      const ballGeo = new THREE.SphereGeometry(0.18, 32, 32);
      const ball = new THREE.Mesh(ballGeo, eyeWhiteMat);
      ball.scale.set(1, 1.12, 0.85);
      g.add(ball);

      // Eye white outline
      const ballOut = new THREE.Mesh(ballGeo.clone(), outlineMat);
      ballOut.scale.set(1.12, 1.24, 0.95);
      g.add(ballOut);

      // Iris — large cartoon iris
      const irisGeo = new THREE.SphereGeometry(0.11, 32, 32);
      const iris = new THREE.Mesh(irisGeo, irisMat);
      iris.position.set(0, 0, 0.15);
      g.add(iris);

      // Pupil
      const pupilGeo = new THREE.SphereGeometry(0.065, 24, 24);
      const pupil = new THREE.Mesh(pupilGeo, pupilMat);
      pupil.position.set(0, 0, 0.21);
      g.add(pupil);

      // Big cartoon highlight — top right of eye
      const hiGeo1 = new THREE.SphereGeometry(0.028, 12, 12);
      const hi1 = new THREE.Mesh(hiGeo1, eyeHighlightMat);
      hi1.position.set(0.04, 0.04, 0.25);
      g.add(hi1);

      // Smaller second highlight
      const hiGeo2 = new THREE.SphereGeometry(0.014, 8, 8);
      const hi2 = new THREE.Mesh(hiGeo2, eyeHighlightMat);
      hi2.position.set(-0.03, 0.06, 0.24);
      g.add(hi2);

      // Upper eyelid (for blinking) — flat disc that slides down
      const lidGeo = new THREE.SphereGeometry(0.195, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
      const lid = new THREE.Mesh(lidGeo, eyeLidMat);
      lid.rotation.x = Math.PI;
      lid.scale.set(1, 1.1, 0.9);
      lid.position.y = 0.19;
      g.add(lid);

      // Eyelash strip (top)
      const lashGeo = new THREE.TorusGeometry(0.19, 0.022, 8, 24, Math.PI * 0.9);
      const lash = new THREE.Mesh(lashGeo, eyeLashMat);
      lash.rotation.z = Math.PI * 0.05;
      lash.position.set(0, 0.16, 0.06);
      lash.rotation.x = -0.2;
      g.add(lash);

      g.position.set(xPos, 0.42, 0.82);
      headGroup.add(g);
      return { group: g, lid, iris, pupil };
    }

    const eyeL = makeEye(-0.35);
    const eyeR = makeEye(0.35);

    /* ── EYEBROWS — thick cartoon brows ── */
    function makeBrow(xPos: number, flip: boolean) {
      // Thick rectangular-ish brow
      const browGeo = new THREE.BoxGeometry(0.32, 0.06, 0.06);
      const brow = new THREE.Mesh(browGeo, browMat);
      brow.rotation.z = flip ? -0.25 : 0.25;
      brow.rotation.x = -0.15;
      brow.position.set(xPos, 0.68, 0.74);
      // Round the ends a little with spheres
      headGroup.add(brow);
      addOutline(brow, 0.4);

      // Rounded end caps
      for (const ex of [-0.15, 0.15]) {
        const capGeo = new THREE.SphereGeometry(0.042, 12, 12);
        const cap = new THREE.Mesh(capGeo, browMat);
        const angle = flip ? -0.25 : 0.25;
        cap.position.set(
          xPos + Math.cos(angle) * ex,
          0.68 + Math.sin(angle) * ex,
          0.74
        );
        headGroup.add(cap);
      }
    }
    makeBrow(-0.35, false);
    makeBrow(0.35, true);

    /* ── NOSE — cute button nose ── */
    const noseGeo = new THREE.SphereGeometry(0.1, 24, 24);
    const noseM = new THREE.Mesh(noseGeo, darkSkinMat);
    noseM.scale.set(1.1, 0.72, 1.1);
    noseM.position.set(0, 0.12, 0.96);
    headGroup.add(noseM);

    // Subtle nose bridge bump
    const bridgeGeo = new THREE.SphereGeometry(0.055, 16, 16);
    const bridge = new THREE.Mesh(bridgeGeo, skinMat);
    bridge.scale.set(0.8, 2.2, 0.7);
    bridge.position.set(0, 0.3, 0.86);
    headGroup.add(bridge);

    // Nostrils
    for (const sx of [-1, 1]) {
      const nostrilGeo = new THREE.SphereGeometry(0.048, 14, 14);
      const nostril = new THREE.Mesh(nostrilGeo, new THREE.MeshToonMaterial({ color: 0x220e05 }));
      nostril.scale.set(1, 0.65, 0.9);
      nostril.position.set(sx * 0.1, 0.08, 0.98);
      headGroup.add(nostril);
    }

    /* ── MOUTH — cartoon smile ── */
    // Upper lip (thinner)
    const ulipGeo = new THREE.TorusGeometry(0.2, 0.032, 10, 36, Math.PI);
    const upperLip = new THREE.Mesh(ulipGeo, lipTopMat);
    upperLip.rotation.x = 0.25;
    upperLip.rotation.z = Math.PI;
    upperLip.position.set(0, -0.14, 0.88);
    headGroup.add(upperLip);
    addOutline(upperLip, 0.45);

    // Lower lip (fuller)
    const llipGeo = new THREE.TorusGeometry(0.19, 0.044, 10, 36, Math.PI);
    const lowerLip = new THREE.Mesh(llipGeo, lipBotMat);
    lowerLip.rotation.x = -0.14;
    lowerLip.position.set(0, -0.19, 0.87);
    headGroup.add(lowerLip);
    addOutline(lowerLip, 0.35);

    // Teeth peek
    const teethGeo = new THREE.BoxGeometry(0.22, 0.06, 0.04);
    const teeth = new THREE.Mesh(teethGeo, teethMat);
    teeth.position.set(0, -0.165, 0.89);
    teeth.rotation.x = 0.15;
    headGroup.add(teeth);

    // Corner dimples
    for (const sx of [-1, 1]) {
      const dimpleGeo = new THREE.SphereGeometry(0.035, 12, 12);
      const dimple = new THREE.Mesh(dimpleGeo, darkSkinMat);
      dimple.scale.set(1, 0.6, 0.7);
      dimple.position.set(sx * 0.22, -0.16, 0.87);
      headGroup.add(dimple);
    }

    /* ── EARS ── */
    for (const side of [-1, 1]) {
      const earGeo = new THREE.SphereGeometry(0.18, 20, 20);
      const ear = new THREE.Mesh(earGeo, skinMat);
      ear.scale.set(0.52, 0.85, 0.45);
      ear.position.set(side * 1.05, 0.22, 0.01);
      headGroup.add(ear);
      const earOut = new THREE.Mesh(earGeo.clone(), outlineMat);
      earOut.scale.set(0.62, 0.98, 0.52);
      ear.add(earOut);
      // Inner ear
      const innerGeo = new THREE.SphereGeometry(0.1, 16, 16);
      const inner = new THREE.Mesh(innerGeo, darkSkinMat);
      inner.scale.set(0.5, 0.75, 0.4);
      inner.position.set(side * 0.045, 0, 0.05);
      ear.add(inner);
    }

    /* ════════════════════════
       HAIR — cartoon afro/low cut style
    ════════════════════════ */
    // Main hair cap
    const hairCapGeo = new THREE.SphereGeometry(1.08, 48, 48, 0, Math.PI * 2, 0, Math.PI * 0.55);
    const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
    hairCap.position.set(0, 0.18, -0.08);
    hairCap.scale.set(1.0, 0.82, 0.92);
    headGroup.add(hairCap);

    // Hairline bump row (cartoon bumps along hairline)
    for (let i = 0; i < 9; i++) {
      const angle = -Math.PI * 0.42 + (i / 8) * Math.PI * 0.84;
      const bumpGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const bump = new THREE.Mesh(bumpGeo, hairMat);
      bump.position.set(
        Math.sin(angle) * 1.05,
        0.18 + Math.cos(angle) * 0.82 * 0.3,
        Math.cos(angle) * 0.92 * 0.2 - 0.05
      );
      bump.scale.set(1, 0.85, 0.8);
      headGroup.add(bump);
    }

    // Hair outline
    const hairOutGeo = new THREE.SphereGeometry(1.08, 48, 48, 0, Math.PI * 2, 0, Math.PI * 0.55);
    const hairOut = new THREE.Mesh(hairOutGeo, outlineMat);
    hairOut.scale.set(1.06, 0.88, 0.98);
    hairOut.position.set(0, 0.18, -0.08);
    scene.add(hairOut);

    /* ── LIGHTING ── */
    // Cartoon lighting: strong key, soft fill, accent rim
    const keyLight = new THREE.DirectionalLight(0xfff5e0, 4.0);
    keyLight.position.set(-3, 5, 6);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x7c3aed, 3.2);
    rimLight.position.set(5, 2, -5);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0x3b82f6, 1.4);
    fillLight.position.set(-3, -2, 4);
    scene.add(fillLight);

    const ambLight = new THREE.AmbientLight(0x1a1030, 3.0);
    scene.add(ambLight);

    const topLight = new THREE.DirectionalLight(0xffeedd, 2.0);
    topLight.position.set(0, 8, 2);
    scene.add(topLight);

    /* ── ATMOSPHERIC PARTICLES ── */
    const pCount = 180;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    const pColors = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * 14;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 3;
      // Mix purple + blue particles
      const purp = Math.random() > 0.5;
      pColors[i * 3]     = purp ? 0.55 : 0.23;
      pColors[i * 3 + 1] = purp ? 0.22 : 0.51;
      pColors[i * 3 + 2] = purp ? 0.95 : 0.98;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.025,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    /* ── MOUSE TRACKING ── */
    const mouse = { x: 0, y: 0 };
    const targetRot = { x: 0, y: 0 };
    const currentRot = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    /* ── BLINK STATE ── */
    let blinkTimer = 0;
    let nextBlink = 2.0 + Math.random() * 2.5;
    let blinkPhase: 'idle' | 'closing' | 'opening' = 'idle';
    let blinkProgress = 0;

    const setLidClosed = (closed: number) => {
      [eyeL.lid, eyeR.lid].forEach(lid => {
        lid.scale.y = closed;
        lid.position.y = 0.19 - closed * 0.19;
      });
    };

    /* ── EYE TRACKING ── */
    const updateEyeTracking = (mx: number, my: number) => {
      const max = 0.055;
      [eyeL, eyeR].forEach(({ iris, pupil }) => {
        iris.position.x = mx * max;
        iris.position.y = my * max;
        pupil.position.x = mx * max;
        pupil.position.y = my * max;
      });
    };

    /* ── RESIZE ── */
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    /* ── ANIMATION LOOP ── */
    let lastTime = 0;
    let rafId: number;

    const animate = (time: number) => {
      rafId = requestAnimationFrame(animate);
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      /* Smooth head follow mouse */
      targetRot.y = mouse.x * 0.3;
      targetRot.x = mouse.y * 0.18;
      currentRot.x += (targetRot.x - currentRot.x) * 0.18;
      currentRot.y += (targetRot.y - currentRot.y) * 0.18;
      headGroup.rotation.y = currentRot.y;
      headGroup.rotation.x = currentRot.x;
      hairOut.rotation.y = currentRot.y;
      hairOut.rotation.x = currentRot.x;
      neck.rotation.y = currentRot.y * 0.5;

      /* Eye tracking */
      updateEyeTracking(mouse.x, mouse.y);

      /* Breathing float */
      const breathe = Math.sin(time * 0.00065) * 0.03;
      headGroup.position.y = 0.5 + breathe;
      neck.position.y = -1.22 + breathe * 0.4;

      /* Blink */
      blinkTimer += dt;
      if (blinkPhase === 'idle' && blinkTimer > nextBlink) {
        blinkPhase = 'closing';
        blinkProgress = 0;
        blinkTimer = 0;
      }
      if (blinkPhase === 'closing') {
        blinkProgress += dt * 9;
        if (blinkProgress >= 1) { blinkProgress = 1; blinkPhase = 'opening'; }
        setLidClosed(blinkProgress);
      }
      if (blinkPhase === 'opening') {
        blinkProgress -= dt * 7;
        if (blinkProgress <= 0) {
          blinkProgress = 0;
          blinkPhase = 'idle';
          nextBlink = 1.8 + Math.random() * 3.2;
        }
        setLidClosed(blinkProgress);
      }

      /* Particle drift */
      const posArr = pGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < pCount; i++) {
        let y = posArr.getY(i) + dt * 0.1;
        if (y > 6) y = -6;
        posArr.setY(i, y);
      }
      posArr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}
