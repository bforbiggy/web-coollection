<script>
	import qrcode from './qrcode.png';
	let image = qrcode;
	let base;

	// Whenever base changes, update all tiles
	let tiles = [];
	$: {
		if (base) {
			let width = base.width;
			let height = base.height;

			let tilesData = [];
			for (let x = 0; x < 3; x++) {
				for (let y = 0; y < 3; y++) {
					tilesData.push({
						width: width,
						height: height,
						x: x + 1,
						y: y + 1
					});
				}
			}

			tiles = tilesData;
		}
	}
</script>

<div class="container">
	<img id="base" src={image} alt="" bind:this={base} />

	<div class="grid">
		{#each tiles as data}
			<img style="grid-column-start: {data.x}; grid-row-start: {data.y};" src={image} alt="" />
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		min-width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		max-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		#base {
			display: none;
		}

		.grid {
			display: grid;
		}
	}
</style>
