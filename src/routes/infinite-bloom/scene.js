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


let petalLoader;
let petalTexture;
function setup() {
	// Scene setup
	camera.position.z = 5;

	// Load petal texture
	petalLoader = new THREE.TextureLoader();
	petalTexture = petalLoader.load("src/routes/infinite-bloom/petal.png");

	// Generate petals
	for (let i = 0; i < 1; i++) {
		summonPetal();
	}
}

function summonPetal() {
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshBasicMaterial({
		map: petalTexture,
		transparent: true,
	});
	const petal = new THREE.Mesh(geometry, material);
	petal.scale.x = 0;
	petal.scale.y = 0;
	petal.rotation.z = 45;
	scene.add(petal);
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