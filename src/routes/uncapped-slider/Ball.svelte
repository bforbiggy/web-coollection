<script>
	let xPos = 0; // Initial horizontal position
	let yPos = 0; // Initial vertical position
	let xVelocity = 0; // Initial horizontal velocity
	let yVelocity = 0; // Initial vertical velocity
	let isDragging = false;
	let startX = 0;
	let startY = 0;

	const gravity = 0.5; // Acceleration due to gravity
	const bounceFactor = -0.7; // Factor to simulate bounce

	function updatePosition() {
		if (!isDragging) {
			// Apply gravity to vertical velocity
			yVelocity += gravity;
			yPos += yVelocity;

			// Check if the ball has hit the ground (you can adjust the ground position)
			if (yPos >= 200) {
				yPos = 200; // Reset the position to the ground
				yVelocity *= bounceFactor; // Apply vertical bounce
			}

			// Apply horizontal velocity
			xPos += xVelocity;

			// Add horizontal friction to slow down horizontal movement
			xVelocity *= 0.99;

			// Boundaries to keep the ball within the screen (you can adjust as needed)
			if (xPos < 0) {
				xPos = 0;
				xVelocity *= bounceFactor; // Apply horizontal bounce
			}
			if (xPos > window.innerWidth - 50) {
				xPos = window.innerWidth - 50;
				xVelocity *= bounceFactor; // Apply horizontal bounce
			}
		}
	}

	function startFalling() {
		const fallInterval = setInterval(() => {
			updatePosition();
			if (yPos >= 200) {
				clearInterval(fallInterval); // Stop falling when the ball reaches the ground
			}
		}, 16); // Update roughly every frame (60 FPS)
	}

	function handleDragStart(event) {
		isDragging = true;
		startX = event.clientX - xPos;
		startY = event.clientY - yPos;
	}

	function handleDragEnd() {
		isDragging = false;
	}

	function handleDrag(event) {
		if (isDragging) {
			xPos = event.clientX - startX;
			yPos = event.clientY - startY;
		}
	}
</script>

<div
	class="ball"
	on:mousedown={handleDragStart}
	on:mouseup={handleDragEnd}
	on:mouseleave={handleDragEnd}
	on:mousemove={handleDrag}
	on:click={startFalling}
	style={`top: ${yPos}px; left: ${xPos}px`}
/>

<style>
	.ball {
		width: 25px;
		height: 25px;
		background-color: #3498db; /* Blue color */
		border-radius: 50%; /* Make it round */
		position: absolute;
		cursor: grab; /* Change cursor on hover for dragging */
	}
</style>
