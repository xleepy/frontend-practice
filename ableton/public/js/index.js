(() => {
  const moreBtn = document.getElementById("more-btn");
  const moreContainer = document.getElementById("more-container");
  const secondaryNav = document.getElementById("secondary-nav");

  document.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 200) {
        secondaryNav.classList.add("hide");
      } else if (secondaryNav.classList.contains("hide")) {
        secondaryNav.classList.remove("hide");
      }
    },
    true
  );

  moreBtn.addEventListener("click", (event) => {
    event.preventDefault();
    moreBtn.classList.toggle("opened");
    moreContainer.classList.toggle("visible");
  });
})();
