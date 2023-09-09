<script>
	export let image;
	export let parentData;

	let x;
	let y;
	function handleDragStart(event) {
		event.dataTransfer.setDragImage(new Image(), 0, 0);
	}

	function handleDrag(event) {
		if (event.screenX == 0 || event.screenY == 0) return;
		x = event.screenX;
		y = event.screenY;
	}

	let { posX, posY, cropX, cropY, xMax, yMax, cropWidth, cropHeight } = parentData;

	// Convert style data to css style text
	let ivvy = '';
	let divvy = '';
	$: {
		// Place div in grid and crop child image
		divvy = '';
		divvy += `width: ${cropWidth}px; height:${cropHeight}px;`;
		divvy += `grid-area: ${posY} / ${xMax - posX + 1};`;

		// Determine positional data
		if (x && y) {
			divvy += `position: absolute;`;
			divvy += `top: ${y}px; left: ${x}px;`;
			divvy += `transform: translate(-50%, -${cropHeight}px);`;
		}

		// Calculate image margins to center in div
		ivvy = `transform: translate(-${(xMax - cropX - 1) * cropWidth}px, -${cropY * cropHeight}px);`;
	}
</script>

<div style={divvy} on:dragstart={handleDragStart} on:drag={handleDrag} draggable="true">
	<img style={ivvy} src={image} alt="" draggable="false" />
</div>

<style lang="scss">
	div {
		overflow: hidden;
	}
</style>
