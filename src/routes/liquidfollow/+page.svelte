<script>
	let container;

	function handleMove(event) {
		// Generate bubble
		const bubble = document.createElement('div');
		bubble.className = 'bubble';
		bubble.style.left = `${event.clientX}px`;

		// Add bubble and set timeout
		container.appendChild(bubble);
		setTimeout(() => {
			container.removeChild(bubble);
		}, 2000);
	}
</script>

<div class="liquid" bind:this={container} on:mousemove={handleMove} />

<style lang="scss">
	@use '../../styles' as styles;

	.liquid {
		height: 100%;
		width: 100%;
		background: linear-gradient(styles.$slate 30%, styles.$ghost-white);

		position: fixed;
		overflow: hidden;
	}

	:global(.bubble) {
		position: absolute;
		left: 50%;
		top: 100%;

		height: max(300px, 30vw);
		width: max(300px, 30vw);

		background-color: styles.$eerie-black;
		border-radius: 100%;
		animation: wave 2s ease-in-out infinite;
	}

	@keyframes -global-wave {
		from,
		to {
			transform: translate(-50%, 0%);
		}

		50% {
			transform: translate(-50%, -20%);
		}
	}
</style>
