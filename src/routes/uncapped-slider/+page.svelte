<script>
	import Ball from './Ball.svelte';
	let width = 0;
	let height = 0;

	let fallen = false;
	let percent = 0;

	let x = 0;
	let y = 0;

	let xPercent = 0;
	let yPercent = 0;
	$: {
		// Convert x,y to normalized ratios
		xPercent = x / width;
		xPercent *= 100;
		yPercent = y / height;
		yPercent *= 100;

		// Manually adjust for understandability
		xPercent -= 40;
		xPercent *= 5;
		yPercent -= 50;
		yPercent *= 3;
	}
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<div class="container">
	{#if !fallen}
		<p>{percent}%</p>
	{:else}
		<p>{xPercent.toFixed(0)}% {yPercent <= 0 ? '+' : '-'} {Math.abs(yPercent).toFixed(0)}i</p>
	{/if}

	<div class="slidecontainer">
		<p>🔊</p>

		{#if !fallen}
			<input
				type="range"
				min="0"
				max="100"
				class="slider"
				bind:value={percent}
				on:input={() => (fallen = fallen || percent >= 100)}
			/>
		{:else}
			<div class="slider" />
			<Ball bind:x bind:y {width} {height} />
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
