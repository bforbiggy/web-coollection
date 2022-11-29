<script>
	import eyeBackSVG from './eye-back.svg';
</script>

<div class="container">
	<div class="eye">
		<img src={eyeBackSVG} alt="" />

		<div class="ball">
			<div class="iris" />
			<div class="pupil" />
		</div>
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
		display: flex;
		align-self: center;
		justify-self: center;

		img {
			position: relative;
		}

		.ball {
			position: relative;


			.iris {
				height: 2.5rem;
				width: 2.5rem;
				background-color: teal;
				border-radius: 50%;
			}

			.pupil {
				height: 1rem;
				width: 1rem;
				background-color: aquamarine;
				border-radius: 50%;
			}
		}
	}
</style>
