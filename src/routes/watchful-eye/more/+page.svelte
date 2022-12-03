<script>
	import Eye from '../eye.svelte';

	let eyeHandlers = Array(25);
	function handleMove(event) {
		for (let i = 0; i < eyeHandlers.length; i++) {
			eyeHandlers[i](event);
		}
	}
</script>

<div class="container" on:mousemove={handleMove}>
	{#each [...eyeHandlers.keys()] as i}
		<Eye bind:handleMoveEye={eyeHandlers[i]} />
	{/each}
</div>

<style lang="scss">
	.container {
		min-width: 100vw;
		width: fit-content;
		min-height: 100vh;
		height: fit-content;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		align-items: center;
		justify-content: center;
		background: radial-gradient(#0d1821, #344966);
	}
</style>
