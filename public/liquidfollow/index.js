function generateBubble(liquid, x) {
	// Create bubble
	const bubble = document.createElement("div");
	bubble.className = "bubble";
	bubble.style.left = `${x}px`;

	// Add appropriate hooks
	liquid.appendChild(bubble);
	setTimeout(() => { liquid.removeChild(bubble) }, 2000);
}

window.onload = () => {
	let liquid = document.getElementById("liquid");
	window.addEventListener('mousemove', (event) => {
		generateBubble(liquid, event.clientX);
	});
}

