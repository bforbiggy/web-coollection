<script>
	export let image;
	export let parentData;

	let x;
	let y;

	function handleDragStart(event) {
		event.dataTransfer.setDragImage(new Image(), 0, 0);
	}

	function handleDrag(event) {
		event.dataTransfer.setDragImage(new Image(), 0, 0);
		if (event.screenX == 0 || event.screenY == 0) return;
		x = event.screenX;
		y = event.screenY;
	}

	const { posX, posY, cropX, cropY, xMax, yMax, width, height } = parentData;

	// Calculate style data for the image
	let cropWidth = width / xMax;
	let cropHeight = height / yMax;

	// Calculate cutoffs
	let yLowerCutoff = Math.max(0, cropY - 1) * cropHeight;
	let yUpperCutoff = (yMax - cropY) * cropHeight;
	let xLeftCutoff = Math.max(0, cropX - 1) * cropWidth;
	let xRightCutoff = (xMax - cropX) * cropWidth;

	// Convert style data to css style text
	let ivvy = '';
	let divvy = '';
	$: {
		divvy = '';
		divvy += `overflow: hidden;`;
		divvy += `width: ${cropWidth}px; height:${cropHeight}px;`;
		divvy += `grid-area: ${posX} / ${posY};`;
		// Determine positional data
		if (x && y) {
			divvy += `position: absolute;`;
			divvy += `top: ${y}px; left: ${x}px;`;
		}

		ivvy = '';
		ivvy += `margin: -${yLowerCutoff}px -${xRightCutoff}px -${yUpperCutoff}px -${xLeftCutoff}px;`;

		// temp += `clip-path: inset(${yLowerCutoff}px ${xRightCutoff}px ${yUpperCutoff}px ${xLeftCutoff}px);`;
		// style = temp;
	}
</script>

<div style={divvy} on:dragstart={handleDragStart} on:drag={handleDrag} draggable="true">
	<img style={ivvy} src={image} alt="" />
</div>

<style lang="scss">
</style>
