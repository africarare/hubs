//const showInfoPanel = (
window.showInfoPanel = (
  _artworkURL,
  _artist,
  _year,
  _title,
  _canvas,
  _size,
  _bidURL,
  _bidEnd,
  _isSold
) => {
  let overlay = document.getElementById("info-panel-overlay");
  let panel = document.querySelector(".info-panel");
  let artwork = document.querySelector(".info-panel__artwork");
  let artist = document.querySelector(".info-panel__artist");
  let year = document.querySelector(".info-panel__year");
  let title = document.querySelector(".info-panel__title");
  let canvas = document.querySelector(".info-panel__canvas");
  let size = document.querySelector(".info-panel__size");
  let bid_btn = document.querySelector(".info-panel__bid-btn");
  let bid_btn_title = document.querySelector(".info-panel__bid-btn-title");
  let bid_btn_date = document.querySelector(".info-panel__bid-btn-date");

  overlay.style.display = "block";
  panel.classList.add("show");

  artwork.src = _artworkURL;
  artist.innerHTML = _artist;
  year.innerHTML = _year;
  title.innerHTML = _title;
  canvas.innerHTML = _canvas;
  size.innerHTML = _size;
  bid_btn.href = _bidURL;
  bid_btn_date.innerHTML = `Auction ends ${_bidEnd}`;

  if (_isSold) {
    bid_btn.classList.add("sold-btn");
    bid_btn_date.style.display = "none";
    bid_btn_title.innerHTML = "SOLD";
  }
};

//const hideInfoPanel = () => {
window.hideInfoPanel = () => {
  var overlay = document.getElementById("info-panel-overlay");
  overlay.style.display = "none";
  var panel = document.querySelector(".info-panel");
  panel.classList.remove("show");
};
