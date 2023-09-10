<script>
	import fan from './fan.gif';

	async function canvasClick(event) {
		const element = event.target;
		element.requestPointerLock();
	}
</script>

<canvas on:click={canvasClick} />
<div class="container">
	<div class="image-container">
		<img src={fan} alt="" />
	</div>
	<div class="box" />
</div>

<style lang="scss">
	canvas {
		min-width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		max-height: 100vh;
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 999;
	}

	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		.box {
			width: 100vw;
			height: 400px;
			background-color: lightblue;

			--mask: radial-gradient(
						56.84px at 50% calc(100% + 43.5px),
						#0000 calc(99% - 8px),
						#000 calc(101% - 8px) 99%,
						#0000 101%
					)
					calc(50% - 60px) calc(50% - 19px + 0.5px) / 120px 38px,
				radial-gradient(
						56.84px at 50% -43.5px,
						#0000 calc(99% - 8px),
						#000 calc(101% - 8px) 99%,
						#0000 101%
					)
					50% calc(50% + 19px) / 120px 38px;
			-webkit-mask: var(--mask);
			mask: var(--mask);
		}

		.image-container {
			display: inline-block;
			z-index: 700;

			img {
				width: 200%;
				height: 200%;
				background-color: white;
			}
		}
	}
</style>
