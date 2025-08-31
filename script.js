async function loadArchive() {
  const res = await fetch('data/archive.json');
  const data = await res.json();
  const container = document.getElementById('archive');

  data.forEach(item => {
    const div = document.createElement('div');
    div.className = 'entry';
    div.innerHTML = `<strong>${item.date}</strong><br>${item.text}`;
    container.appendChild(div);
  });
}
loadArchive();
