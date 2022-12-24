<script>
	import { onMount } from 'svelte';
	import { init, run } from './scene.js';

	let canvas;
	onMount(() => {
		init();
		run(canvas);
	});
</script>

<div>
	<canvas bind:this={canvas} />
</div>
