import * as THREE from 'three';

let scene;
let camera;
let renderer;

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
		petals[i].scale.y = 0;

		scene.add(petals[i]);
	}
}

function play() {
	requestAnimationFrame(play);

	petals[0].scale.y += 0.001;
	petals[0].scale.y = Math.min(petals[0].scale.y, 1);

	renderer.render(scene, camera);
}

export { init }