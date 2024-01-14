import * as THREE from 'three';

let scene;
let camera;
let renderer;

const clock = new THREE.Clock();

function init() {
	// Initialize scene/camera/renderer
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	renderer = new THREE.WebGLRenderer();

	// Configure renderer
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(new THREE.Color("rgb(0, 0, 0)"));
	document.body.appendChild(renderer.domElement);
	renderer.render(scene, camera);

	// Play scene
	setup();
	play();
}

let petals = [];
function setup() {
	// Scene setup
	camera.position.z = 5;

	// Load petal texture
	const loader = new THREE.TextureLoader();
	const texture = loader.load("src/routes/infinite-bloom/petal.png");

	// Generate petals
	for (let i = 0; i < 1; i++) {
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({
			map: texture,
			transparent: true,
		});
		petals[i] = new THREE.Mesh(geometry, material);
		petals[i].scale.x = 0;
		petals[i].scale.y = 0;
		petals[i].rotation.z = 45;

		scene.add(petals[i]);
	}
}

function play() {
	requestAnimationFrame(play);
	const deltaTime = clock.getDelta();

	for (const petal of petals) {
		petal.scale.x += 0.6 * deltaTime;
		petal.scale.x = Math.min(petal.scale.x, 1);
		petal.scale.y += 0.3 * deltaTime;
		petal.scale.y = Math.min(petal.scale.y, 1);
	}

	renderer.render(scene, camera);
}

export { init }