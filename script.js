// selecting elements (creates a Node list(array))
const panels = document.querySelectorAll(".panel");

// looping through the Node list using forEach method.
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// function removes active classes
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
