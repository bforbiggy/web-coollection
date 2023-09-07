<script>
	import { onMount } from 'svelte';
	import clamp from 'clamp';
	let width, height;

	let isDragging = false;

	let startX = 0;
	let startY = 0;
	let xPos = 0; // Initial horizontal position
	let yPos = 0; // Initial vertical position
	let xVelocity = 0; // Initial horizontal velocity
	let yVelocity = 0; // Initial vertical velocity

	const gravity = 0.5; // Acceleration due to gravity
	const bounceFactor = -0.8; // Factor to simulate bounce
	const velocityLimit = 20;

	onMount(() => {
		const updateInterval = setInterval(updatePosition, 16);
		return () => clearInterval(updateInterval);
	});

	function updatePosition() {
		if (!isDragging) {
			// Perform y motion calculations
			yVelocity += gravity;
			yVelocity = clamp(-velocityLimit, yVelocity, velocityLimit);
			yPos += yVelocity;

			// When ground is hit, reset to ground and bounce
			if (yPos >= height - 25) {
				yPos = height - 25; // Reset the position to the ground
				yVelocity *= bounceFactor; // Apply vertical bounce
			}
			if (yPos <= 0) {
				yPos = 0; // Reset the position to the ground
				yVelocity *= bounceFactor; // Apply vertical bounce
			}

			// Perform x motion calculations
			xVelocity = clamp(-velocityLimit, xVelocity, velocityLimit);
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

	function handleDrag(event) {
		xPos = event.clientX - startX;
		yPos = event.clientY - startY;
	}

	function handleDragEnd(event) {
		isDragging = false;

		// Calculate the change in drag
		const deltaX = event.clientX - startX;
		const deltaY = event.clientY - startY;

		// Convert change in drag to velocity
		xVelocity = deltaX / 10;
		yVelocity = deltaY / 10;
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
		background-color: #3498db; /* Blue color */
		border-radius: 50%; /* Make it round */
		position: absolute;
		cursor: grab; /* Change cursor on hover for dragging */
	}
</style>
