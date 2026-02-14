const toggleButton = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    toggleButton.textContent = "🌙 Dark Mode";
}

toggleButton.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙 Dark Mode";
    } else {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "🌤 Light Mode";
    }
});
