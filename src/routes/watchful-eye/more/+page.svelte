<script>
	import eyeBackSVG from '../eye-back.svg';
	import clamp from 'clamp';

	const eyeCount = 25;

	let eyes = Array(eyeCount);
	$: irisStyles = Array(eyeCount).fill({ x: '-50', y: '-50' });
	$: pupilStyles = Array(eyeCount).fill({ x: '-50', y: '-50' });

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

	function handleMove(event) {
		for (let i = 0; i < eyeCount; i++) {
			// Calculate relative position change for iris in eye
			const rect = eyes[i].getBoundingClientRect();
			let offset = calcOffset(
				{ x: rect.left, y: rect.top },
				{ x: event.clientX, y: event.clientY }
			);

			// Clamp and set relative position values
			irisStyles[i] = {
				x: clamp(offset.x, irisOffsetLimit[0], irisOffsetLimit[1]),
				y: clamp(offset.y, irisOffsetLimit[0], irisOffsetLimit[1])
			};
			pupilStyles[i] = {
				x: clamp(offset.x, pupilOffsetLimit[0], pupilOffsetLimit[1]),
				y: clamp(offset.y, pupilOffsetLimit[0], pupilOffsetLimit[1])
			};
		}
	}
</script>

<div class="container" on:mousemove={handleMove}>
	{#each [...Array(eyeCount).keys()] as i}
		<div class="eye" bind:this={eyes[i]}>
			<img src={eyeBackSVG} alt="" style="transform: translate(-50%, -50%);" />
			<div class="iris" style="transform: translate({irisStyles[i].x}%, {irisStyles[i].y}%);">
				<div
					class="pupil"
					style="transform: translate({pupilStyles[i].x}%, {pupilStyles[i].y}%);"
				/>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	$dorange: #ff5000;
	$brown: #903811;
	$white: azure;

	.container {
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
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
