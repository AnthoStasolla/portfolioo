import React from "react";
import "./Firstpanel.css";

const Firstpanel = () => {
  return (
    <>
      <div id="home" className="container container-panel">
        <p>Ciao, mi chiamo</p>
        <h3>Stasolla Antonio</h3>
        <h4>Sono un junior front-end developer</h4>
        <p>
          Sono un junior front-end developer specializzato in ReactJS.
          <br /> Ora mi sto concentrando sul perfezionamento di React e sullo
          studio del back-end.
        </p>
        <div>
          <a href="/#works" className="btn btn-outline-secondary btn-lg">
            Vai a Progetti
          </a>
        </div>
      </div>
    </>
  );
};

export default Firstpanel;
