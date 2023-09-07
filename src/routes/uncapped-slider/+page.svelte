<script>
	import Ball from './Ball.svelte';
	let width = 0;
	let height = 0;

	let slider;
	let onSlider = true;

	let x = 0;
	let y = 0;

	let xPercent = 0;
	let yPercent = 0;
	$: {
		if (slider) {
			let rect = slider.getBoundingClientRect();

			xPercent = (x - rect.left + 12.5) / (rect.right - rect.left + 12.5);
			xPercent *= 100;
			xPercent += 4;

			yPercent = y / height;
			yPercent *= 100;
			yPercent -= 51;
		}
	}
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<div class="container">
	{#if onSlider}
		<p>{xPercent.toFixed(0) - 4}%</p>
	{:else}
		<p>{xPercent.toFixed(0)}% {yPercent <= 0 ? '+' : '-'} {Math.abs(yPercent).toFixed(0)}i</p>
	{/if}

	<div class="slidecontainer">
		<p>🔊</p>
		<div class="slider" bind:this={slider} />
		{#if slider}
			<Ball bind:x bind:y bind:onSlider bind:slider {xPercent} />
		{/if}
	</div>
</div>

<style lang="scss">
	.container {
		min-width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		max-height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		p {
			user-select: none;
		}

		.slidecontainer {
			display: flex;
			align-items: center;
			font-size: xx-large;
			gap: 1vw;
		}
	}

	.slider {
		-webkit-appearance: none;
		appearance: none;
		outline: none;
		background: #d3d3d3;

		height: 5px;
		width: 20vw;
		border-radius: 5px;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: black;
		cursor: pointer;
	}

	.slider::-moz-range-thumb {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: black;
		cursor: pointer;
	}

	:global(body) {
		overflow: hidden;
	}
</style>
