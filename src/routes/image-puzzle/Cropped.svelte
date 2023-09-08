<script>
	export let image;
	export let parentData;

	// Calculate style data for the image
	let x = parentData.x;
	let y = parentData.y;
	let cropWidth = parentData.width / parentData.xMax;
	let cropHeight = parentData.height / parentData.yMax;

	// Calculate cutoffs
	let yLowerCutoff = Math.max(0, y - 1) * cropHeight;
	let yUpperCutoff = (parentData.yMax - y) * cropHeight;
	let xLeftCutoff = Math.max(0, x - 1) * cropWidth;
	let xRightCutoff = (parentData.xMax - x) * cropWidth;

	// Convert style data to css style text
	let style = '';
	style += `grid-column-start: ${x};`;
	style += `grid-row-start: ${y};`;
	style += `clip-path: inset(${yLowerCutoff}px ${xRightCutoff}px ${yUpperCutoff}px ${xLeftCutoff}px);`;
	style += `margin: -${parentData.height - cropHeight}px -${parentData.width - cropWidth}px`;
</script>

<img {style} src={image} alt="" />
