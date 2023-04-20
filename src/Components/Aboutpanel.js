import React from "react";
import "./Aboutpanel.css";

const Aboutpanel = () => {
  return (
    <>
      <h2 id="about" className="text-about">
        About
      </h2>
      <h4 className="text-about1">--Alcune informazioni su di me--</h4>
      <div className="container container-about">
        <div className="left">
          <h3>Ciao sono Antonio,</h3>
          <p>dai un'occhiata in giro...</p>
        </div>
        <div className="right">
          <p>
            Ragazzo dinamico e con costante voglia di imparare e migliorarsi.
            Archeologo ma da sempre appassionato al mondo Web, ho frequentato
            diversi corsi per poter entrare nel mondo del lavoro dello
            sviluppatore front-end. Grazie alle precedenti e differenti
            esperienze, sono capace di lavorare in diverse situazioni
            lavorative.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutpanel;
