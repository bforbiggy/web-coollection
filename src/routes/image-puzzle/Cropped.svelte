<script>
	export let image;
	export let parentData;

	let x;
	let y;
	function handleDrag(event) {
		if (event.screenX == 0 || event.screenY == 0) return;
		event.dataTransfer.setDragImage(new Image(), 0, 0);
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
	let style = '';
	$: {
		let temp = '';
		temp += `grid-area: ${posX} / ${posY};`;
		temp += `clip-path: inset(${yLowerCutoff}px ${xRightCutoff}px ${yUpperCutoff}px ${xLeftCutoff}px);`;
		temp += `margin: -${yLowerCutoff}px -${xRightCutoff}px -${yUpperCutoff}px -${xLeftCutoff}px;`;

		// Determine positional data
		if (x && y) {
			temp += `position: absolute;`;
			temp += `top: ${y}px; left: ${x}px;`;
		}
		style = temp;
	}
</script>

<img {style} src={image} alt="" draggable="true" on:drag={handleDrag} />
