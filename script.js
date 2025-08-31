async function loadArchive() {
  const res = await fetch("data/archive.json");
  const data = await res.json();

  const container = document.getElementById("entries");
  container.innerHTML = "";

  data.forEach(entry => {
    const div = document.createElement("div");
    div.classList.add("entry");

    div.innerHTML = `
      <h3>${entry.date}</h3>
      <ul>
        ${entry.quotes.map(q => `<li>${q}</li>`).join("")}
      </ul>
    `;
    container.appendChild(div);
  });
}

loadArchive();
