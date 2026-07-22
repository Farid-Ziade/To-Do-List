function card() {
  let bar = document.createElement("div");
  let header = document.createElement("h1");
  project.forEach((btn) => {
    header.innerHTML = btn.name;
  });
  bar.appendChild(header);
  return bar;
}
export { card };
