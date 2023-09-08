<script>
	import Cropped from './Cropped.svelte';
	import qrcode from './qrcode.png';
	let image = qrcode;

	let base;
	$: tiles = baseChanged(base);

	// Whenever base changes, update all tiles
	function baseChanged() {
		if (!base) return [];

		let tiles = [];
		for (let x = 0; x < 4; x++) {
			for (let y = 0; y < 4; y++) {
				const data = {
					x: x + 1,
					y: y + 1,
					width: base.width,
					height: base.height
				};
				tiles.push(data);
			}
		}
		return tiles;
	}
</script>

<div class="container">
	<img id="base" src={image} alt="" bind:this={base} />

	<div class="grid">
		{#each tiles as parentData}
			<Cropped {image} {parentData} />
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
