<script>
	export let image;
	export let parentData;

	// Calculate style data for the image
	let x = parentData.x;
	let y = parentData.y;
	let cropWidth = 1 / parentData.xMax;
	let cropHeight = 1 / parentData.yMax;

	// Convert style data to css style text
	let style = '';
	style += `grid-column-start: ${x};`;
	style += `grid-row-start: ${y};`;
	style += `clip-path: inset(30px 30px 30px 30px);`;
</script>

<img {style} src={image} alt="" />
