const svg = document.getElementById("canvas");
const colorPicker = document.getElementById("colorPicker");
const undoBtn = document.getElementById("undoBtn");

let drawing = false;
let currentPath = null;
let paths = [];

svg.addEventListener("mousedown", (e) => {
    drawing = true;

    currentPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
    );

    currentPath.setAttribute("fill", "none");
    currentPath.setAttribute("stroke", colorPicker.value);
    currentPath.setAttribute("stroke-width", "3");
    currentPath.setAttribute("stroke-linecap", "round");
    currentPath.setAttribute("stroke-linejoin", "round");

    const point = getMousePosition(e);
    currentPath.setAttribute("d", `M ${point.x} ${point.y}`);

    svg.appendChild(currentPath);
    paths.push(currentPath);
});

svg.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    const point = getMousePosition(e);
    const d = currentPath.getAttribute("d");
    currentPath.setAttribute("d", `${d} L ${point.x} ${point.y}`);
});

svg.addEventListener("mouseup", () => {
    drawing = false;
});

svg.addEventListener("mouseleave", () => {
    drawing = false;
});

undoBtn.addEventListener("click", () => {
    if (paths.length === 0) return;
    const lastPath = paths.pop();
    svg.removeChild(lastPath);
});

function getMousePosition(event) {
    const rect = svg.getBoundingClientRect();
    return {
        x: ((event.clientX - rect.left) / rect.width) * 1000,
        y: ((event.clientY - rect.top) / rect.height) * 500
    };
}
