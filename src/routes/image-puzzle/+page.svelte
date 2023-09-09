<script>
	import Cropped from './Cropped.svelte';
	import qrcode from './qrcode.png';
	let image = qrcode;

	let base;
	$: tilesData = baseChanged(base);

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	// Shuffle the positional x/y values
	function shuffleXY(tiles) {
		for (let tile of tiles) {
			let other = tiles[getRandomInt(tiles.length)];
			[tile.x, tile.y, other.x, other.y] = [other.x, other.y, tile.x, tile.y];
		}
	}

	// Whenever base changes, update all tiles
	function baseChanged() {
		if (!base) return [];
		const xMax = 4;
		const yMax = 4;

		let tiles = [];
		for (let x = 0; x < xMax; x++) {
			for (let y = 0; y < yMax; y++) {
				const data = {
					x: x + 1,
					y: y + 1,
					cropX: x + 1,
					cropY: y + 1,
					xMax: xMax,
					yMax: yMax
				};
				tiles.push(data);
			}
		}

		shuffleXY(tiles);
		return tiles;
	}
</script>

<div class="container">
	<img id="base" src={image} alt="" bind:this={base} />

	<div class="grid">
		{#each tilesData as parentData}
			<Cropped {image} {parentData} {base} />
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
