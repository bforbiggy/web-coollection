<script>
	export let image;
	export let parentData;

	const { x, y, cropX, cropY } = parentData;

	// Calculate style data for the image
	let cropWidth = base.width / parentData.xMax;
	let cropHeight = base.height / parentData.yMax;

	// Calculate cutoffs
	let yLowerCutoff = Math.max(0, cropY - 1) * cropHeight;
	let yUpperCutoff = (parentData.yMax - cropY) * cropHeight;
	let xLeftCutoff = Math.max(0, cropX - 1) * cropWidth;
	let xRightCutoff = (parentData.xMax - cropX) * cropWidth;

	// Convert style data to css style text
	let style = '';
	style += `grid-area: ${x} / ${y};`;
	style += `clip-path: inset(${yLowerCutoff}px ${xRightCutoff}px ${yUpperCutoff}px ${xLeftCutoff}px);`;
	// style += `margin: -${base.height - cropHeight}px -${base.width - cropWidth}px`;
</script>

<img {style} src={image} alt="" />
