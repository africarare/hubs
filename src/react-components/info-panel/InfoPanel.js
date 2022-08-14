import React, { useEffect } from "react";
import "./InfoPanel.css";
import "./assets/font/AvantGarde/ITCAvantGardeStd-Md.otf";
import logo from "../../assets/logo.png";

const InfoPanel = ({
  isOpen,
  artworkURL,
  bidURL,
  sold,
  artist,
  title,
  year,
  canvas,
  size,
  auctionEnds,
}) => {
  useEffect(() => {
    let overlay = document.createElement("div");
    overlay.setAttribute("id", "info-panel-overlay");
    document.body.prepend(overlay);
  }, []);
  return (
    <div className="info-panel">
      <div className="info-panel__close-btn" onClick={hideInfoPanel}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ffffff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <img className="info-panel__artwork" src={artworkURL} alt="Artwork" />
      <p className="info-panel__artist">{artist}</p>
      <p className="info-panel__title">{title}</p>
      <p className="info-panel__year">{year}</p>
      <p className="info-panel__canvas">{canvas}</p>
      <p className="info-panel__size">{size}</p>
      <div className="info-panel__btn-wrapper">
        <img src={logo} alt="Logo" className="info-panel__logo" />
        {sold ? (
          <a
            className="info-panel__bid-btn sold-btn"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <p className="info-panel__bid-btn-title">SOLD</p>
          </a>
        ) : (
          <a
            className="info-panel__bid-btn"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <p className="info-panel__bid-btn-title">PLACE A BID</p>
            <p className="info-panel__bid-btn-date">
              Auction ends {auctionEnds}
            </p>
          </a>
        )}
      </div>
    </div>
  );
};

export const hideInfoPanel = () => {
  var x = document.getElementById("info-panel-overlay");
  x.style.display = "none";
  var panel = document.querySelector(".info-panel");
  panel.classList.remove("show");
};

export default InfoPanel;
