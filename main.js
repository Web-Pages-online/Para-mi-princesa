onload = () => {
    document.body.classList.remove("container");


    // Volume Control
    const audio = document.querySelector('audio');
    const volumeControl = document.getElementById('volume');

    if (audio && volumeControl) {
        audio.volume = volumeControl.value; // Set initial volume
        volumeControl.addEventListener('input', (e) => {
            audio.volume = e.target.value;
        });
    }

    // Falling Hearts and Flowers Effect
    const createFallingElement = () => {
        const element = document.createElement('div');
        element.classList.add('falling-element');

        // Randomly decide between heart and flower
        const isHeart = Math.random() > 0.5;
        element.innerHTML = isHeart ? '❤️' : '';

        // Randomize properties
        element.style.left = Math.random() * 100 + 'vw';
        element.style.animationDuration = Math.random() * 3 + 4 + 's'; // 4-7 seconds
        element.style.fontSize = Math.random() * 20 + 20 + 'px'; // 20-40px
        element.style.opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8 opacity

        document.body.appendChild(element);

        // Remove after animation
        setTimeout(() => {
            element.remove();
        }, 7000);
    };

    setInterval(createFallingElement, 300); // Create new element every 300ms
};