const userInput = () => {
  const list = document.querySelector(".list");
  const str = prompt("Введите строку", "");

  if (str === "exit" || str === null) {
    return;
  }

  if (str === "del") {
    const removeLastChild = list.lastChild;
    if (removeLastChild) {
      removeLastChild.remove();
    } else {
      alert("Нет элементов для удаления");
    }
  } else if (str === "clear") {
    list.innerHTML = "";
  } else {
    const listItem = document.createElement("li");
    const listItemText = document.createTextNode(str);

    listItem.append(listItemText);
    list.append(listItem);

    alert("Вы ввели: " + str);
  }

  return userInput();
};

userInput();
