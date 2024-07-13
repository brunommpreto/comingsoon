
       const bubblesContainer = document.createElement('div');
        bubblesContainer.className = 'bubbles';
        document.getElementById('coming-soon').appendChild(bubblesContainer);
            const bubbleCount = 100;
let i = 0;

while (i < 100) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 40 + 20;
    bubble.style.width = "20px";
    bubble.style.height = "\$20px";
    const isLeft = Math.random() < 0.5;
    bubble.style.left = isLeft ? "${Math.random() * 20}%" : "${80 + Math.random() * 20}%";
    bubble.style.top = "${Math.random() * 100}%";
    bubble.style.animationDuration = "${Math.random() * 2 + 3}s";
    bubble.style.animationDelay = "${Math.random() * 2}s";
    bubblesContainer.appendChild(bubble);
    console.log("Bubble ${i + 1} created");
    i++;
}
