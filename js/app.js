const developer = document.querySelector(".developer");
const attribution = document.querySelector(".attribution");

developer.addEventListener("click", () => {
    attribution.classList.toggle("attribution--active");
})