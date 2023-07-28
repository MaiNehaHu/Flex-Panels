let image = document.querySelectorAll(".panel");

/**for image flex on click */
function Open() {
  this.classList.toggle("open"); /**adds and removes */
}
/**for text transition on click */
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
image.forEach((panel) => panel.addEventListener("click", Open));
image.forEach((panel) => panel.addEventListener("transitionend", toggleActive));
