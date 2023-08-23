import "../style.css";
import * as THREE from 'three';
import {PointLight} from "three";

//scene == container for everything
//camera == how we will view the scene
//renderer how three will add stuff to our scene

const scene = new THREE.Scene();

//fov, aspect ratio, view frustrum (close and then far)
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement );

camera.position.setZ(30);

//const sphereGeo = new THREE.SphereGeometry(15, 20, 20);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xE53936, wireframe: true });
const torus = new THREE.TorusGeometry(10, 3, 16, 100);

const sphere = new THREE.Mesh(torus, sphereMaterial);

const light = new THREE.PointLight(0xffffff);

light.position.set(20, 20, 20);

scene.add(light);
scene.add(sphere);

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();
