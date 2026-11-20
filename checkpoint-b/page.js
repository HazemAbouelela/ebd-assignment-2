import { items } from "./items.js";

export function renderItems(list) {
  const listEl = document.querySelector("#list");
  listEl.innerHTML = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.className = "stock-line";
    li.textContent = `${item.name} (${item.category})`;
    listEl.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.category === "stationery");
}

export function start() {
  renderItems(items);

  const showSomeBtn = document.querySelector("#show-some");
  showSomeBtn?.addEventListener("click", () => {
    renderItems(matching());
  });
}