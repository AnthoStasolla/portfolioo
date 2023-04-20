import React from "react";
import "./Workspanel.css";
import imgwork from "../assets/immagini/imgwork.jpg";
import imgworkport from "../assets/immagini/imgworkportfolio.jpg";
import imgworknat from "../assets/immagini/imgworknature.jpg";
import imgworkdog from "../assets/immagini/imgworkdog.jpg";
import imgworkfal from "../assets/immagini/imgworkfal.jpg";

const Workspanel = () => {
  return (
    <>
      <div id="works" className="container-works">
        <h2 className="text-about">Works</h2>
        <h4 className="text-about1">-Qui ci sono alcuni dei miei progetti-</h4>
        <div className="container container-works1">
          <div
            className="container-card-work"
            style={{
              background: `url(${imgworkport})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no repeat",
            }}
          >
            <h5 className="text-center text-work1">PORTFOLIO</h5>
            <a href="https://github.com/AnthoStasolla/portfolioo">
              Progetto 1 ...
            </a>
          </div>
          <div
            className="container-card-work"
            style={{
              background: `url(${imgwork})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no repeat",
            }}
          >
            <h5 className="text-center text-work1">PROGETTO VACANZE</h5>

            <a href="/">Progetto 2 ...</a>
          </div>

          <div
            className=" container-card-work"
            style={{
              background: `url(${imgworknat})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no repeat",
            }}
          >
            <h5 className="text-center text-work1">PROGETTO NATURA</h5>
            <a href="https://github.com/AnthoStasolla/progettonature">
              Progetto 3 ...
            </a>
          </div>
          <div
            className="container-card-work"
            style={{
              background: `url(${imgworkdog})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no repeat",
            }}
          >
            <h5 className=" text-center text-work1">PROGETTO CANI COMMUNITY</h5>
            <a href="https://github.com/AnthoStasolla/progettodogs">
              Progetto 4 ...
            </a>
          </div>
          <div
            className="container-card-work"
            style={{
              background: `url(${imgworkfal})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no repeat",
            }}
          >
            <h5 className=" text-center text-work1">PROGETTO FALEGNAMERIA</h5>
            <a
              href="https://github.com/AnthoStasolla/progettofalegnameria"
              className="text-project"
            >
              Progetto 5 ...
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workspanel;
