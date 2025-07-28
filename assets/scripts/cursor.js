document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector(".cursor");

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (e) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });

    const interactiveElements = document.querySelectorAll(".text-container");
    interactiveElements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            cursor.classList.add('hoveredCursor');
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove('hoveredCursor');
        });
    });
});