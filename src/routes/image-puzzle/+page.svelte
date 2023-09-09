<script>
	import randomInteger from 'random-int';
	import Cropped from './Cropped.svelte';
	import qrcode from './qrcode.png';
	import { onMount } from 'svelte';
	let image = qrcode;

	let base;

	// Shuffle the positional x/y values
	function shuffleXY(tiles) {
		for (let tile of tiles) {
			let other = tiles[randomInteger(tiles.length - 1)];
			[tile.posX, tile.posY, other.posX, other.posY] = [
				other.posX,
				other.posY,
				tile.posX,
				tile.posY
			];
		}
	}

	// Whenever base changes, update all tiles
	$: tilesData = baseChanged(base);
	function baseChanged(base) {
		let tiles = [];
		if (!base || base.width == 0 || base.height == 0) return tiles;

		const xMax = 4;
		const yMax = 4;

		for (let x = 0; x < xMax; x++) {
			for (let y = 0; y < yMax; y++) {
				const data = {
					posX: x + 1,
					posY: y + 1,
					cropX: x + 1,
					cropY: y + 1,
					xMax: xMax,
					yMax: yMax,
					width: base.width,
					height: base.height
				};
				tiles.push(data);
			}
		}

		shuffleXY(tiles);
		return tiles;
	}
</script>

<div class="container">
	<img id="base" src={image} alt="" bind:this={base} on:load={() => (base = base)} />

	<div class="grid">
		{#each tilesData as parentData}
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
			grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
			grid-template-rows: repeat(4, 1fr); /* 4 equal rows */
		}
	}
</style>
