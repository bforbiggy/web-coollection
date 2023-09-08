<script>
	export let image;
	export let parentData;

	// Calculate style data for the image
	let x = parentData.x;
	let y = parentData.y;

	// Convert style data to css style text
	let style = '';
	style += `grid-column-start: ${x};`;
	style += `grid-row-start: ${y};`;
</script>

<img {style} src={image} alt="" />
