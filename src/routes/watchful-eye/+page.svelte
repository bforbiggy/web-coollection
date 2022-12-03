<script>
	import Eye from './eye.svelte';

	let eyeHandler;

	// Pass event data to child handler
	function handleMove(event) {
		eyeHandler(event);
	}
</script>

<div class="container" on:mousemove={handleMove}>
	<a href="watchful-eye/more">
		<Eye bind:handleMoveEye={eyeHandler} />
	</a>
</div>

<style lang="scss">
	.container {
		min-width: 100vw;
		width: fit-content;
		min-height: 100vh;
		height: fit-content;
		display: flex;
		align-items: center;
		justify-content: center;
		background: radial-gradient(#0d1821, #344966);
	}
</style>
