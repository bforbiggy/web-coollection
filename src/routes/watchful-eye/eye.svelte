<script>
	import eyeBackSVG from './eye-back.svg';
	import clamp from 'clamp';

	let eye;

	$: irisStyle = { x: '-50', y: '-50' };
	$: pupilStyle = { x: '-50', y: '-50' };

	const pupilOffsetLimit = [-65, -35];
	const irisOffsetLimit = [-85, -15];

	function calcOffset(eyeXY, mouseXY) {
		let xOffset = (mouseXY.x - eyeXY.x) / window.innerWidth;
		let yOffset = (mouseXY.y - eyeXY.y) / window.innerHeight;
		return {
			x: (xOffset - 0.5) * 100,
			y: (yOffset - 0.5) * 100
		};
	}

	// Exports a handler that a parent should call
	export function handleMoveEye(event) {
		// Clamp and set relative position values
		const rect = eye.getBoundingClientRect();
		let offset = calcOffset({ x: rect.left, y: rect.top }, { x: event.clientX, y: event.clientY });

		// Clamp and set relative position values
		irisStyle = {
			x: clamp(offset.x, irisOffsetLimit[0], irisOffsetLimit[1]),
			y: clamp(offset.y, irisOffsetLimit[0], irisOffsetLimit[1])
		};
		pupilStyle = {
			x: clamp(offset.x, pupilOffsetLimit[0], pupilOffsetLimit[1]),
			y: clamp(offset.y, pupilOffsetLimit[0], pupilOffsetLimit[1])
		};
	}
</script>

<div class="eye" bind:this={eye}>
	<img src={eyeBackSVG} alt="" style="transform: translate(-50%, -50%);" />
	<div class="iris" style="transform: translate({irisStyle.x}%, {irisStyle.y}%);">
		<div class="pupil" style="transform: translate({pupilStyle.x}%, {pupilStyle.y}%);" />
	</div>
</div>

<style lang="scss">
	$dorange: #ff5000;
	$brown: #903811;
	$white: azure;

	.eye {
		position: relative;
		display: flex;
		align-self: center;
		justify-self: center;

		img {
			position: absolute;
		}

		.iris {
			position: absolute;
			top: 50%;
			left: 50%;

			height: 3rem;
			width: 3rem;
			background-color: $white;
			border-radius: 50%;
		}

		.pupil {
			position: absolute;
			top: 50%;
			left: 50%;

			height: 2rem;
			width: 2rem;
			background-color: $brown;
			border-radius: 50%;
		}
	}
</style>
