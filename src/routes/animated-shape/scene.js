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

function addShapes() {
	let geometry = new THREE.TorusGeometry(undefined, undefined, 16, 100);
	let material = new THREE.MeshToonMaterial({ color: 0xB49FCC });
	let shape = new THREE.Mesh(geometry, material);
	shape.scale.set(0.5, 0.5, 0.5);
	shape.rotation.setFromVector3(new THREE.Vector3(Math.PI / 2, 0, 0));
	shapes.torus = shape;
	scene.add(shapes.torus);

	loader.load('shiba/scene.gltf',
		(gltf) => {
			shapes.shiba = gltf.scene;
			shapes.shiba.add(shapes.torus);
			scene.add(shapes.shiba);
		},
		undefined,
		(error) => console.error(error)
	);
}

function animate() {
	requestAnimationFrame(animate);
	const shiba = shapes.shiba;
	shiba.rotation.x += 0.01;
	shiba.rotation.y += 0.01;
	renderer.render(scene, camera);
};

function init() {
	// Setup scene
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
	addShapes();

	// Add lights to scene
	const light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(-1, 2, 4);
	scene.add(light);

	// Additional scene modifications
	camera.position.z = 5;
};

function run(canvas) {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
	window.addEventListener('resize', resize);
	resize();
	animate();
};

export { init, run };