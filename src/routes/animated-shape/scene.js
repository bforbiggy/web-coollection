import * as THREE from 'three';

let scene, camera, renderer;
let geometry, material, shape;

function resize() {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

function init() {
	// Setup scene
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	// Add shapes to scene
	geometry = new THREE.TorusKnotGeometry();
	material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	shape = new THREE.Mesh(geometry, material);
	scene.add(shape);

	// Modify  scene
	camera.position.z = 5;
};

function animate() {
	requestAnimationFrame(animate);
	shape.rotation.x += 0.01;
	shape.rotation.y += 0.01;
	renderer.render(scene, camera);
};

function run(canvas) {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
	window.addEventListener('resize', resize);
	resize();
	animate();
};

export { init, run };