<script>
	export let image;
	export let parentData;

	// Calculate style data for the image
	let x = parentData.x;
	let y = parentData.y;
	let cropWidth = base.width / parentData.xMax;
	let cropHeight = base.height / parentData.yMax;

	// Calculate cutoffs
	let yLowerCutoff = Math.max(0, y - 1) * cropHeight;
	let yUpperCutoff = (parentData.yMax - y) * cropHeight;
	let xLeftCutoff = Math.max(0, x - 1) * cropWidth;
	let xRightCutoff = (parentData.xMax - x) * cropWidth;

	// Convert style data to css style text
	let style = '';
	style += `grid-area: ${x} / ${y};`;
	style += `clip-path: inset(${yLowerCutoff}px ${xRightCutoff}px ${yUpperCutoff}px ${xLeftCutoff}px);`;
	// style += `margin: -${base.height - cropHeight}px -${base.width - cropWidth}px`;
</script>

<img {style} src={image} alt="" />
