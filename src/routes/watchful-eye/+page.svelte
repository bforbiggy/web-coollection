<script>
	import eyeBackSVG from './eye-back.svg';
	import clamp from 'clamp';

	$: irisStyle = { x: '-50', y: '-50' };
	$: pupilStyle = { x: '-50', y: '-50' };

	const pupilOffsetLimit = [-65, -35];
	const irisOffsetLimit = [-85, -15];

	function handleMove(event) {
		// Calculate relative position from cursor location and screen size
		let xOffset = (event.clientX / window.innerWidth - 1) * 100;
		let yOffset = (event.clientY / window.innerHeight - 1) * 100;

		// Clamp and set relative position values
		irisStyle = {
			x: clamp(xOffset, irisOffsetLimit[0], irisOffsetLimit[1]),
			y: clamp(yOffset, irisOffsetLimit[0], irisOffsetLimit[1])
		};
		pupilStyle = {
			x: clamp(xOffset, pupilOffsetLimit[0], pupilOffsetLimit[1]),
			y: clamp(yOffset, pupilOffsetLimit[0], pupilOffsetLimit[1])
		};
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
			transform: translate(-50%, -50%); // Default is centered

			height: 3rem;
			width: 3rem;
			background-color: $white;
			border-radius: 50%;
		}

		.pupil {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%); // Default is centered

			height: 2rem;
			width: 2rem;
			background-color: $brown;
			border-radius: 50%;
		}
	}
</style>
