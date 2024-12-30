document.body.addEventListener("click", (event) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.textContent = '❤️'; // Heart symbol

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x - 25}px`;
    circle.style.top = `${y - 25}px`;

    const colors = [
        "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF2",
        "#F3FF33", "#FF8C33", "#8C33FF", "#33FF8C", "#FF3333",
        "#FF333F", "#5733FF", "#57FF33", "#FF3357", "#33A1FF",
        "#F233FF", "#A1FF33", "#33FFF2", "#FFC833", "#33FFB5"
    ];
    circle.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 5000);
});
