let activeItem = 0;
const list = document.getElementById("list");

if (list) {
  const items = Array.from(list.children ?? []);

  onClickButton(activeItem, items);

  items.forEach((item, i) => {
    const button = item.getElementsByClassName("list-button")[0];
    button.addEventListener("click", () => {
      onClickButton(i, items);
    });
  });

  function onClickButton(index, items) {
    activeItem = index;

    items.forEach((item, i) => {
      if (activeItem === i) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
}
