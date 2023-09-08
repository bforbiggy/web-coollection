<script>
	export let image;
	export let parentData;

	// Calculate style data for the image
	let x = parentData.x;
	let y = parentData.y;
	let cropWidth = parentData.width / parentData.xMax;
	let cropHeight = parentData.height / parentData.yMax;
	let xOffset = x * cropWidth;
	let yOffset = y * cropHeight;

	// Convert style data to css style text
	let style = '';
	style += `grid-column-start: ${x};`;
	style += `grid-row-start: ${y};`;
	style += `clip-path: inset(${yOffset}px ${xOffset}px ${yOffset + cropHeight}px ${
		xOffset + cropWidth
	}px);`;
</script>

<img {style} src={image} alt="" />
