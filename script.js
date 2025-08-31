var map = L.map('map').setView([33.5, 44], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 10,
  attribution: '© OpenStreetMap'
}).addTo(map);
fetch('data/archive.json')
  .then(res => res.json())
  .then(data => {
    const ul = document.getElementById('entries');
    data.forEach(entry => {
      let li = document.createElement('li');
      li.innerHTML = `<b>${entry.date}</b>: ${entry.quotes.join(" / ")}`;
      ul.appendChild(li);
    });
  });