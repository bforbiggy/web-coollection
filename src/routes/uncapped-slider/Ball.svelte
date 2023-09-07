<script>
	import { onMount } from 'svelte';
	import clamp from 'clamp';

	let isDragging = false;
	let xVel = 0; // Initial horizontal velocity
	let yVel = 0; // Initial vertical velocity

	const gravity = 0.5; // Acceleration due to gravity
	const bounceFactor = -0.9; // Factor to simulate bounce
	const velocityLimit = 30;

	onMount(() => {
		x = width / 2 + width / 10;
		y = height / 2;
		const updateInterval = setInterval(updatePosition, 16);
		return () => clearInterval(updateInterval);
	});

	function updatePosition() {
		if (!isDragging) {
			// Perform y motion calculations
			yVel += gravity;
			yVel *= 0.99;
			yVel = clamp(yVel, -velocityLimit, velocityLimit);
			y += yVel;

			// When ground is hit, reset to ground and bounce
			if (y < 0) {
				y = 0; // Reset the position to the ground
				yVel *= bounceFactor; // Apply vertical bounce
			}
			if (y >= height - 25) {
				y = height - 25; // Reset the position to the ground
				yVel *= bounceFactor; // Apply vertical bounce
			}

			// Perform x motion calculations
			xVel = clamp(xVel, -velocityLimit, velocityLimit);
			x += xVel;
			xVel *= 0.99;

			// When walls are hit, reset to boundaries and bounce
			if (x < 0) {
				x = 0;
				xVel *= bounceFactor;
			}
			if (x > width - 25) {
				x = width - 25;
				xVel *= bounceFactor;
			}
		}
	}

	let startEvent;
	function handleDragStart(event) {
		isDragging = true;
		startEvent = event;
	}

	function handleDrag(event) {
		if (event.screenX === 0 || event.screenY === 0) return;
		x = event.clientX;
		y = event.clientY;
	}

	function handleDragEnd(event) {
		isDragging = false;

		// Calculate the change in drag
		const deltaX = event.clientX - startEvent.clientX;
		const deltaY = event.clientY - startEvent.clientY;

		// Convert change in drag to velocity
		xVel = deltaX / 3;
		yVel = deltaY / 3;
	}

	export let x;
	export let y;
	export let width;
	export let height;
</script>

<div class="balling">
	<div
		class="ball"
		on:dragstart={handleDragStart}
		on:drag={handleDrag}
		on:dragend={handleDragEnd}
		style={`top: ${y}px; left: ${x}px`}
		draggable="true"
	/>
</div>

<style>
	.balling {
		min-width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		max-height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
	}

	.ball {
		width: 25px;
		height: 25px;
		background-color: black;
		border-radius: 50%;
		position: absolute;
		cursor: grab;
	}
</style>
