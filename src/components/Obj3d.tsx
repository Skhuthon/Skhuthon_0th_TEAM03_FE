import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const Obj3d = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [previousMouseX, setPreviousMouseX] = useState(0);
    const [previousMouseY, setPreviousMouseY] = useState(0);
    const [initialRotation, setInitialRotation] = useState<THREE.Euler | null>(
        null
    );
    const [initialZoom, setInitialZoom] = useState(5); // 초기 줌 값을 상태로 관리

    useEffect(() => {
        const mount = mountRef.current;

        // Scene, Camera, Renderer 생성
        const scene = new THREE.Scene();
        scene.background = null; // 배경을 투명하게 설정

        const camera = new THREE.PerspectiveCamera(
            70,
            mount!.clientWidth / mount!.clientHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha 속성을 true로 설정
        renderer.setSize(mount!.clientWidth, mount!.clientHeight);
        mount!.appendChild(renderer.domElement);

        // 조명
        const directionLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionLight.position.set(-0.7, 1, 5);
        scene.add(directionLight);

        // 큐브 생성 (색상 변경)
        const geometry = new THREE.IcosahedronGeometry(1.8, 0);
        const material = new THREE.MeshPhysicalMaterial({
            color: 0xff8bcb,
            metalness: 1,
            roughness: 0.5,
            transparent: true,
            opacity: 0.9,
            reflectivity: 0.9,
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = initialZoom; // 초기 줌 값 설정

        // 마우스 이벤트 리스너
        const onMouseDown = (event: MouseEvent) => {
            setIsDragging(true);
            setPreviousMouseX(event.clientX);
            setPreviousMouseY(event.clientY);
            setInitialRotation(cube.rotation.clone()); // 클릭 시점의 회전 상태 저장
            setInitialZoom(camera.position.z); // 클릭 시점의 줌 값 저장
        };

        const onMouseMove = (event: MouseEvent) => {
            if (isDragging) {
                const deltaX = event.clientX - previousMouseX;
                const deltaY = event.clientY - previousMouseY;

                if (initialRotation) {
                    cube.rotation.y = initialRotation.y + deltaX * 0.005;
                    cube.rotation.x = initialRotation.x + deltaY * 0.005;
                }

                setPreviousMouseX(event.clientX);
                setPreviousMouseY(event.clientY);
            }
        };

        const onMouseUp = () => {
            setIsDragging(false);
        };

        const onWheel = (event: WheelEvent) => {
            const delta = event.deltaY * 0.01;

            camera.position.z -= delta;

            // Limiting camera zoom
            if (camera.position.z < 4) {
                camera.position.z = 4;
            } else if (camera.position.z > 15) {
                camera.position.z = 15;
            }
        };

        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("wheel", onWheel);

        if (previousMouseX > 0 || previousMouseY > 0) {
            cube.rotation.x -= previousMouseX;
            cube.rotation.y -= previousMouseY;
        }

        // 반응형 처리
        const onWindowResize = () => {
            if (mount) {
                camera.aspect = mount.clientWidth / mount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(mount.clientWidth, mount.clientHeight);
            }
        };
        window.addEventListener("resize", onWindowResize);

        // 애니메이션 루프
        const animate = () => {
            requestAnimationFrame(animate);

            // 기본 회전
            if (!isDragging) {
                cube.rotation.x += 0.005;
                cube.rotation.y += 0.005;
            }

            renderer.render(scene, camera);
        };
        animate();

        // 클린업 함수
        return () => {
            mount!.removeChild(renderer.domElement);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("resize", onWindowResize);
        };
    }, [isDragging, initialRotation, initialZoom]);

    return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default Obj3d;
