<script>
	import fan from './fan.gif';
	import cursor from './cursor.png';
	import { onMount } from 'svelte';

	let width, height;

	let x = 0;
	let y = 0;

	let cursorElement;
	let waveElement;

	// Create an infinite loop on component mount
	onMount(() => {
		const interval = setInterval(() => {
			// Keep mouse in bounds
			if (x < 0) x = 0;
			if (y < 0) y = 0;
			if (x > width) x = width;
			if (y > height) y = height;

			// Perform wind blowing
			const curRect = cursorElement.getBoundingClientRect();
			const waveRect = waveElement.getBoundingClientRect();
			const overlap = !(
				curRect.right < waveRect.left ||
				curRect.left > waveRect.right ||
				curRect.bottom < waveRect.top ||
				curRect.top > waveRect.bottom
			);
			if (overlap) {
				x += 10;
			}
		}, 10);
		return () => clearInterval(interval);
	});

	// Track user movement
	function mouseMove(event) {
		x += event.movementX;
		y += event.movementY;
	}

	// Allow the screen to be locked
	async function canvasClick(event) {
		const element = event.target;
		element.requestPointerLock();
	}
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<img
	class="pointer"
	bind:this={cursorElement}
	src={cursor}
	style="top: {y}px; left: {x}px;"
	alt=""
/>
<canvas on:click={canvasClick} on:mousemove={mouseMove} />
<div class="container">
	<div class="image-container">
		<img src={fan} alt="" />
	</div>
	<div bind:this={waveElement} class="wave" />
</div>

<style lang="scss">
	:global(body) {
		min-width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		max-height: 100vh;
		overflow: hidden;
		cursor: none;
	}

	canvas {
		width: 100%;
		height: 100%;

		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 999;
	}

	.pointer {
		position: absolute;
		width: 35px;
		height: 50px;
		z-index: 999;
	}

	.container {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		.wave {
			width: 100%;
			height: 400px;
			background-color: lightblue;

			--mask: radial-gradient(
						56.84px at 50% calc(100% + 43.5px),
						#0000 calc(99% - 8px),
						#000 calc(101% - 8px) 99%,
						#0000 101%
					)
					calc(50% - 60px) calc(50% - 19px + 0.5px) / 120px 38px,
				radial-gradient(
						56.84px at 50% -43.5px,
						#0000 calc(99% - 8px),
						#000 calc(101% - 8px) 99%,
						#0000 101%
					)
					50% calc(50% + 19px) / 120px 38px;
			-webkit-mask: var(--mask);
			mask: var(--mask);
		}

		.image-container {
			display: inline-block;
			z-index: 700;

			img {
				width: 200%;
				height: 200%;
				background-color: white;
			}
		}
	}
</style>
