const form = document.querySelector("form");
const input = document.querySelector("#item-name");
const list = document.querySelector(".list-field");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemValue = input.value.trim();

  if (itemValue === "") {
    return;
  }

  const item = document.createElement("li");
  const itemName = document.createElement("span");
  const check = document.createElement("img");
  const bin = document.createElement("img");

  item.classList.add("item");

  itemName.textContent = itemValue;

  check.classList.add("check");
  check.src = "./assets/icons/checkbox-default.svg";
  check.alt = "Selecionar item";
  check.draggable = false;

  bin.classList.add("bin");
  bin.src = "./assets/icons/bin.svg";
  bin.alt = "Remover item";
  bin.draggable = false;

  item.append(check, itemName, bin);

  list.append(item);

  input.value = "";
  input.focus();
});
