let prevElement;
const setVisibleElement = (id) => {
  if (prevElement) {
    prevElement.classList.remove("visible");
  }
  const element = document.getElementById(id);
  if (element) {
    prevElement = element;
  }
  element.classList.add("visible");
};

window.addEventListener("popstate", () => {
  const { hash } = location;
  const id = hash.replace("#", "");
  setVisibleElement(id);
});

setVisibleElement("issue6");
