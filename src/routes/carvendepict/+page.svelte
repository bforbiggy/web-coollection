<script>
import { onMount } from "svelte";

let grid;
let width;
let height;
let pixelSize = 15;


// Generates a row
function createRow() {
	let row = document.createElement("div");
	row.className = "row";
	return row;
}

// Generates a pixel
function createPixel(w, h) {
	// Pixel data (class and position)
	let pixel = document.createElement("div");
	pixel.classList.add("pixel");
	pixel.classList.add("blank");
	pixel.w = w;
	pixel.h = h;

	// Set pixel size
	if (pixelSize > 0) {
		pixel.style.minWidth = `${pixelSize}px`;
		pixel.style.minHeight = `${pixelSize}px`;
	}

	pixel.addEventListener('mouseover', onMouseOver);
	return pixel;
}

// Generates a grid
function createGrid() {
	for (let h = 0; h < height; h++) {
		const row = createRow();
		for (let w = 0; w < width; w++)
			row.appendChild(createPixel(w, h));
		grid.appendChild(row);
	}
	return grid;
}

// Changes style when pixel is moused over
function onMouseOver(event) {
	let pixel = event.currentTarget;
	pixel.classList.add("marked");
}

onMount(() => {
	width = (window.innerWidth / pixelSize);
	height = (window.innerHeight / pixelSize);
	createGrid();
});
</script>

<div id="grid" class="grid" bind:this={grid}>
</div>

<style>
:global(.grid) {
	width: 100vw;
	height: 100vh;
}

:global(.row) {
	display: flex;
	flex-direction: row;
	flex-shrink: 0;
}

:global(.pixel) {
	box-sizing: border-box;
	min-width: 1vw;
	min-height: 1vw;
	border: 1px solid black;
}

:global(.blank) {
	background-color: white;
}

:global(.marked) {
	background-color: black;
}

:global(body) {
	margin: 0px;
	padding: 0px;
}
</style>