<script>
	// Text generator
	const options = 'abcdefghijklmnopqrstuvwxyz';
	const letterGenerator = (function* () {
		while (true) {
			const byteArray = new Uint8Array(1);
			crypto.getRandomValues(byteArray);
			yield options[byteArray[0] % options.length];
		}
	})();

	let text = '';
	const MAX_SIZE = 10000;
	setInterval(() => {
		while (text.length < MAX_SIZE) text += letterGenerator.next().value;
		text = text.substring(text.length - MAX_SIZE);
	}, 1000);
</script>

<div class="container">
	<p>
		{text}
	</p>
</div>

<style lang="scss">
	.container {
		min-width: 100vw;
		min-height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;

		p {
			max-width: min(800px, 50vw);
			max-height: min(800px, 50vh);
			overflow: hidden;

			word-break: break-all;
			font-size: large;
			text-wrap: pretty;
		}
	}
</style>
