const svg = document.getElementById("canvas");
const colorPicker = document.getElementById("colorPicker");
const shapeSelect = document.getElementById("shapeSelect");
const undoBtn = document.getElementById("undoBtn");
const countText = document.getElementById("count");

let shapes = [];
let drawing = false;
let currentShape = null;

svg.addEventListener("mousedown", (e) => {
    const point = getMousePosition(e);
    const color = colorPicker.value;
    const shape = shapeSelect.value;

    if (shape === "circle") {
        const circle = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );

        circle.setAttribute("cx", point.x);
        circle.setAttribute("cy", point.y);
        circle.setAttribute("r", 1.2);
        circle.setAttribute("fill", color);

        svg.appendChild(circle);
        shapes.push(circle);
        updateCount();
    }

    if (shape === "line") {
        drawing = true;

        currentShape = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );

        currentShape.setAttribute("x1", point.x);
        currentShape.setAttribute("y1", point.y);
        currentShape.setAttribute("x2", point.x);
        currentShape.setAttribute("y2", point.y);
        currentShape.setAttribute("stroke", color);
        currentShape.setAttribute("stroke-width", 0.5);

        svg.appendChild(currentShape);
        shapes.push(currentShape);
    }
});

svg.addEventListener("mousemove", (e) => {
    if (!drawing || !currentShape) return;

    const point = getMousePosition(e);
    currentShape.setAttribute("x2", point.x);
    currentShape.setAttribute("y2", point.y);
});

svg.addEventListener("mouseup", () => {
    if (drawing) {
        drawing = false;
        currentShape = null;
        updateCount();
    }
});

svg.addEventListener("mouseleave", () => {
    drawing = false;
    currentShape = null;
});

undoBtn.addEventListener("click", () => {
    if (shapes.length === 0) return;
    const last = shapes.pop();
    svg.removeChild(last);
    updateCount();
});

function updateCount() {
    countText.textContent = shapes.length;
}

function getMousePosition(event) {
    const rect = svg.getBoundingClientRect();
    return {
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 50
    };
}
