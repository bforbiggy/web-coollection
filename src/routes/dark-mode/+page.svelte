<script>
	import { onMount } from 'svelte';

	onMount(() => {
		document.addEventListener('mousemove', handleMouseMove);
	});

	let x = 0;
	let y = 0;
	function handleMouseMove(event) {
		x = event.screenX;
		y = event.screenY;
	}
</script>

<div class="text">
	<h1>The Real Dark Mode</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus erat quis mauris viverra,
		pulvinar sollicitudin enim porta. Phasellus sed urna tempor, rhoncus mi ut, iaculis ligula.
		Nullam non accumsan risus. Praesent eu pharetra massa. Donec porttitor tincidunt elit quis
		pretium. Integer finibus quam eget dui auctor accumsan. Vivamus faucibus dictum dui, eget
		hendrerit erat accumsan ac. Aliquam congue suscipit ex, in tincidunt leo sodales sed. Mauris
		iaculis cursus quam, et dignissim mi varius non. Proin tincidunt odio leo, nec suscipit sem
		luctus vel. Nullam lectus elit, sodales nec nisi in, hendrerit sagittis dolor. Sed tempor ligula
		nec libero scelerisque, sit amet viverra erat imperdiet. Sed et fermentum ante. Quisque sed
		mauris at ex dapibus pellentesque at nec diam. Cras et ultricies augue. Nullam et tortor
		sagittis, feugiat neque sed, vulputate purus. Donec fermentum nunc ligula, vestibulum posuere mi
		iaculis id. In ut sapien eget neque mattis mattis sodales ac dolor. Aliquam fringilla nulla
		nunc, sed lobortis massa sodales vitae. Fusce imperdiet porttitor nisi sit amet pellentesque.
		Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi
		arcu nunc, tincidunt eu dolor in, vulputate egestas purus. Cras pellentesque commodo interdum.
		Mauris ut facilisis neque. Donec id vestibulum augue, et posuere dui. Maecenas lobortis aliquam
		risus, eget dapibus tellus efficitur ac. Maecenas fringilla, nunc in vestibulum blandit, quam
		lacus auctor risus, id vulputate mauris nisl ut lectus. Duis vestibulum justo ac nibh dapibus
		molestie. Suspendisse scelerisque faucibus pellentesque. Ut dolor nibh, tincidunt non
		sollicitudin ac, tristique ac felis. Suspendisse non felis sed odio faucibus imperdiet ut eget
		magna. Donec dapibus justo nulla, hendrerit dapibus velit venenatis id. Vestibulum ante ipsum
		primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce rhoncus eros tortor, at
		finibus augue posuere eget. Maecenas a felis vitae dui ornare sollicitudin sit amet vitae velit.
		Nullam non metus rutrum nibh consequat elementum sit amet mattis elit. Proin sollicitudin, magna
		in maximus pellentesque, justo lacus ultrices orci, vitae sodales nulla lorem et mi. Aliquam
		pulvinar eget odio ac blandit. Quisque eu purus mollis, mollis est at, scelerisque ante. Quisque
		sollicitudin ex odio, id ullamcorper libero fringilla at. Donec vel nisi quis tortor aliquet
		laoreet. Etiam feugiat suscipit nulla sit amet auctor. Vestibulum id mauris porttitor, luctus
		ipsum in, aliquet nunc. Aenean aliquam, quam feugiat suscipit luctus, odio purus scelerisque
		lectus, vel rhoncus enim orci vel justo. Nullam aliquet suscipit nibh vitae dapibus. Integer
		molestie bibendum tempus. Pellentesque vitae blandit enim. Phasellus feugiat varius lorem, ac
		tincidunt massa ornare cursus. Quisque pellentesque id erat in facilisis. Sed sed vehicula eros.
		Vestibulum nec ligula at mi placerat rhoncus. Nulla congue ultrices tincidunt. Mauris faucibus
		vitae massa et mattis. Morbi at luctus mi, at vulputate magna.
	</p>
</div>

<div class="blackout" style="top: {y}px; left: {x}px;" />

<style lang="scss">
	.text {
		min-width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		max-height: 100vh;
		text-wrap: balance;
		margin: 5vw;

		h1 {
			font-size: xx-large;
		}

		p {
			max-width: 90vw;
			min-height: 50vh;
			font-size: large;
		}
	}

	.blackout {
		position: absolute;
		width: 300px;
		height: 300px;
		border-radius: 50%;
		box-shadow: 0 0 0 9999px rgba(0, 0, 0, 1);
		transform: translate(-50%, -50%);
		filter: blur(5rem);
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	:global(::-webkit-scrollbar) {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	:global(*) {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
