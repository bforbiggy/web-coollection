<script>
	import fan from './fan.gif';
</script>

<div class="container">
	<div class="image-container">
		<img src={fan} alt="" />
	</div>
	<div class="box" />
</div>

<style lang="scss">
	.container {
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
			z-index: 999;

			img {
				width: 200%;
				height: 200%;
				background-color: white;
			}
		}
	}
</style>
