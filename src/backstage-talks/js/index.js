let prevElement;
let prevListItem;
let prevId;
const setVisibleElement = (id) => {
  if (prevListItem) {
    prevListItem.classList.remove('selected');
  }

  if (prevElement) {
    prevElement.classList.remove('visible');
    document.body.classList.remove(prevId);
  }

  const listItem = document.querySelector(`[href='#${id}']`);
  if (listItem) {
    listItem.classList.add('selected');
    prevListItem = listItem;
  }

  const element = document.getElementById(id);
  if (element) {
    prevElement = element;
    prevId = id;
    document.body.classList.add(id);
    element.classList.add('visible');
  }
};

window.addEventListener('popstate', () => {
  const { hash } = location;
  const id = hash.replace('#', '');
  setVisibleElement(id);
});

setVisibleElement('issue6');
