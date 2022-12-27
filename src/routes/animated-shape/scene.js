import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
let scene, camera, renderer;
let shapes = {};

function resize() {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

async function addShapes() {
	// Donut loader
	let geometry = new THREE.TorusGeometry(10, 2, 16, 100);
	let material = new THREE.MeshToonMaterial({ color: 0xffd266 });
	let shape = new THREE.Mesh(geometry, material);
	shape.scale.set(0.02, 0.02, 0.02);
	shape.position.set(0, 0.35, 0);
	shape.rotation.set(Math.PI / 2, 0, 0);
	shapes.torus = shape;

	// Shiba loader
	let gltf = await loader.loadAsync('shiba/scene.gltf');
	shapes.shiba = gltf.scene;
	shapes.shiba.add(shapes.torus);

	// Add all shapes to scene
	for (const key in shapes)
		scene.add(shapes[key]);
	animate();
}

let x = 0;
function animate() {
	requestAnimationFrame(animate);
	const shiba = shapes.shiba;
	shiba.rotation.x = Math.sin(x) / 4;
	shiba.rotation.y += 0.01;
	x += 0.011;
	renderer.render(scene, camera);
};

async function init() {
	// Setup scene
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
	await addShapes();

	// Add lights to scene
	const light = new THREE.DirectionalLight(0xffffff);
	light.position.set(-1, 2, 4);
	scene.add(light);

	// Additional scene modifications
	camera.position.z = 5;
};

function run(canvas) {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
	window.addEventListener('resize', resize);
	resize();
};

export { init, run };