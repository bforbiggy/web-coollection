<script>
	let fallen = false;

	let percent = 0;
	let x = 0;
	let y = 0;
</script>

<div class="container">
	<p>{percent}%</p>
	<input type="range" min="0" max="100" class="slider" bind:value={percent} />
</div>

<style lang="scss">
	.container {
		min-width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		max-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.slider {
		-webkit-appearance: none;
		appearance: none;
		outline: none;
		background: #d3d3d3;

		height: 5px;
		width: 20%;
		border-radius: 5px;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #04aa6d;
		cursor: pointer;
	}

	.slider::-moz-range-thumb {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #04aa6d;
		cursor: pointer;
	}
</style>
