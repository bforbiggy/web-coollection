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
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: radial-gradient(#0d1821, #344966);
	}
</style>
