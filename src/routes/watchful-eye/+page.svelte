<script>
	import eyeBackSVG from './eye-back.svg';
	import clamp from 'clamp';

	$: irisStyle = { x: '-50', y: '-50' };
	$: pupilStyle = { x: '-50', y: '-50' };

	function handleMove(event) {
		let x = event.clientX / window.innerWidth - 1;
		let y = event.clientY / window.innerHeight - 1;
		irisStyle = { x: clamp(x * 100, -90, -10), y: clamp(y * 100, -90, -10) };
		pupilStyle = { x: clamp(x * 100, -65, -25), y: clamp(y * 100, -65, -25) };
	}
</script>

<div class="container" on:mousemove={handleMove}>
	<div class="eye">
		<img src={eyeBackSVG} alt="" />
		<div class="iris" style="transform: translate({irisStyle.x}%, {irisStyle.y}%);">
			<div class="pupil" style="transform: translate({pupilStyle.x}%, {pupilStyle.y}%);" />
		</div>
	</div>
</div>

<style lang="scss">
	$dorange: #ff5000;
	$brown: #903811;
	$white: azure;

	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: radial-gradient(#0d1821, #344966);
	}

	.eye {
		position: relative;
		display: flex;
		align-self: center;
		justify-self: center;

		img {
			position: relative;
		}

		.iris {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			height: 3rem;
			width: 3rem;
			background-color: $white;
			border-radius: 50%;
		}

		.pupil {
			position: relative;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			height: 2rem;
			width: 2rem;
			background-color: $brown;
			border-radius: 50%;
		}
	}
</style>
