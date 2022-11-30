<script>
	import eyeBackSVG from './eye-back.svg';

	$: irisStyle = { x: '-50', y: '-50' };
	$: pupilStyle = { x: '-50', y: '-50' };

	function handleMove(event) {
		console.log(`${event.clientX}, ${event.clientY}`);
		irisStyle = { x: '-75', y: '-75' };
	}
</script>

<div class="container" on:mousemove={handleMove}>
	<div class="eye">
		<img src={eyeBackSVG} alt="" />

		<div class="iris" style="transform: translate({irisStyle.x}%, {irisStyle.y}%);" />
		<div class="pupil" />
	</div>
</div>

<style lang="scss">
	$dorange: #ff5000;
	$black: #333;
	$white: azure;

	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
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

			height: 2.5rem;
			width: 2.5rem;
			background-color: teal;
			border-radius: 50%;
		}

		.pupil {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			height: 1rem;
			width: 1rem;
			background-color: aquamarine;
			border-radius: 50%;
		}
	}
</style>
