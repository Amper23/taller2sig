var tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

var map = L.map('map').setView([-76.52086, 3.441675], 13);
L.tileLayer(tilesProvider, {
  maxZoom: 18,
}).addTo(map);

