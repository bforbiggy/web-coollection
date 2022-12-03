<script>
	import Eye from '../eye.svelte';

	const eyeCount = 25;

	let eyeHandlers = Array(eyeCount);
	function handleMove(event) {
		for (let i = 0; i < eyeCount; i++) {
			eyeHandlers[i](event);
		}
	}
</script>

<div class="container" on:mousemove={handleMove}>
	{#each [...Array(eyeCount).keys()] as i}
		<Eye bind:handleMoveEye={eyeHandlers[i]} />
	{/each}
</div>

<style lang="scss">
	.container {
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		align-items: center;
		justify-content: center;
		background: radial-gradient(#0d1821, #344966);
	}
</style>
