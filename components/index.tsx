import React, { useEffect, useRef, useState } from "react";
import { Container, Header, BodyModel, Footer } from "./styles";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { animate, easeOut } from "framer-motion";

const LittleImage: React.FC = () => {
  const loadGLTFModel = new GLTFLoader();

  const refBody = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [camera, setCamera] = useState<THREE.OrthographicCamera | null>(null);
  const target = new THREE.Vector3(-0.5, 1.2, 0);
  const scene = new THREE.Scene();
  const controls = useRef<OrbitControls | null>(null);

  const initialCameraPosition = new THREE.Vector3(
    20 * Math.sin(0.2 * Math.PI),
    10,
    20 * Math.cos(0.2 * Math.PI)
  );

  useEffect(() => {
    const { current: container } = refBody;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const newRenderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      newRenderer.setPixelRatio(window.devicePixelRatio);
      newRenderer.setSize(scW, scH);
      newRenderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(newRenderer.domElement);
      setRenderer(newRenderer);

      const scale = scH * 0.08 + 4;
      const newCamera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale / 2,
        0.01,
        50
      );
      newCamera.position.copy(initialCameraPosition);
      newCamera.lookAt(target);
      setCamera(newCamera);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      const newControls = new OrbitControls(newCamera, newRenderer.domElement);
      newControls.autoRotate = true;
      newControls.target = target;
      controls.current = newControls;

      loadGLTFModel.load(
        "/character_jack.gltf",
        (gltf) => {
          scene.add(gltf.scene);
          setLoading(false);
          customAnimate();
        },
        undefined,
        (error) => {
          console.error("Error loading GLTF model: ", error);
          setLoading(false);
        }
      );
    }
    return () => {};
  }, []);

  const customAnimate = () => {
    let req: any = null;
    let frame = 0;

    const animate = () => {
      req = requestAnimationFrame(animate);
      frame = frame <= 100 ? frame + 1 : frame;

      if (frame <= 100) {
        const p = initialCameraPosition;
        const easeOutCirc = (t: any) => Math.sqrt(1 - Math.pow(t - 1, 2));
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

        // camera!.position.y = 10;
        // camera!.position.x =
        //   p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        // camera!.position.z =
        //   p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        // camera!.lookAt(target);
      } else {
        controls.current!.update();
      }
      // renderer!.render(scene, camera!);
    };

    animate();
  };

  return (
    <Container>
      <Header>
        <h1>
          🎃
          <span>HAPPY HALLOWEEN</span>
          🎃
        </h1>
      </Header>
      <BodyModel ref={refBody}>{loading && <p>loading...</p>}</BodyModel>
      <Footer>--Created in Next.js</Footer>
    </Container>
  );
};

export default LittleImage;
