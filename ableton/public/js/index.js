(() => {
  const moreBtn = document.getElementById('more-btn');
  const moreContainer = document.getElementById('more-container');

  moreBtn.addEventListener(
    'click',
    (event) => {
      event.preventDefault();
      moreContainer.classList.toggle('visible');
    },
    true
  );
})();
