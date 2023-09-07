<script>
	import { onMount } from 'svelte';
	let width, height;

	let xPos = 0; // Initial horizontal position
	let yPos = 0; // Initial vertical position
	let xVelocity = 0; // Initial horizontal velocity
	let yVelocity = 0; // Initial vertical velocity
	let isDragging = false;
	let startX = 0;
	let startY = 0;

	const gravity = 0.5; // Acceleration due to gravity
	const bounceFactor = -0.5; // Factor to simulate bounce

	onMount(() => {
		const updateInterval = setInterval(updatePosition, 16);
		return () => clearInterval(updateInterval);
	});

	function updatePosition() {
		if (!isDragging) {
			// Apply gravity to vertical velocity
			yVelocity += gravity;
			yPos += yVelocity;

			// When ground is hit, reset to ground and bounce
			if (yPos >= height - 25) {
				yPos = height - 25; // Reset the position to the ground
				yVelocity *= bounceFactor; // Apply vertical bounce
			}

			// Apply horizontal velocity and friction
			xPos += xVelocity;
			xVelocity *= 0.99;

			// When walls are hit, reset to boundaries and bounce
			if (xPos < 0) {
				xPos = 0;
				xVelocity *= bounceFactor;
			}
			if (xPos > window.innerWidth - 25) {
				xPos = window.innerWidth - 25;
				xVelocity *= bounceFactor;
			}
		}
	}

	function handleDragStart(event) {
		isDragging = true;
		startX = event.clientX - xPos;
		startY = event.clientY - yPos;
	}

	function handleDragEnd(event) {
		isDragging = false;
		xPos = event.clientX - startX;
		yPos = event.clientY - startY;
	}

	function handleDrag(event) {
		if (isDragging) {
			xPos = event.clientX - startX;
			yPos = event.clientY - startY;
		}
	}
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<div class="balling">
	<div
		class="ball"
		on:dragstart={handleDragStart}
		on:dragend={handleDragEnd}
		on:drag={handleDrag}
		style={`top: ${yPos}px; left: ${xPos}px`}
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
		background-color: #3498db;
		border-radius: 50%;
		position: absolute;
		cursor: grab;
	}
</style>
