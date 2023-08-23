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

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement );

camera.position.setZ(30);

const texture = new THREE.TextureLoader().load("./textures/Ocean_Mask.png");

const sphereGeo = new THREE.SphereGeometry(15, 30, 30);
const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(sphereGeo, sphereMaterial);

const light = new THREE.PointLight(0xffffff);
light.position.set(20, 20, 20);

scene.add(sphere);
scene.add(light);

//sphere.rotateX(5);

function render() {
    sphere.rotateY(0.0015);
    sphere.rotateX(0.0005);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();
