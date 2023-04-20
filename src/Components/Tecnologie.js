import React from "react";
import "./Tecnologie.css";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { SiJavascript, SiReact, SiGithub, SiRedux } from "react-icons/si";

const Tecnologie = () => {
  return (
    <>
      <div className="tecnologie">
        <h2 className="text-about">Skills</h2>
        <h4 className="text-about1">--Queste sono le tecnologie che uso--</h4>
        <div className="container container-tecnologie">
          <div className="container-card">
            <h5 className="text-center text-work">HTML</h5>
            <h5 className="text-center">
              <ImHtmlFive size={50} color="#e0772b" />
            </h5>
          </div>
          <div className="container-card ">
            <h5 className="text-center text-work">CSS</h5>
            <h5 className="text-center">
              <ImCss3 size={50} color="#2b81cf" />
            </h5>
          </div>

          <div className=" container-card ">
            <h5 className="text-center text-work">JAVASCRIPT</h5>
            <h5 className="text-center">
              <SiJavascript size={50} color="#d1c237" />
            </h5>
          </div>
          <div className="container-card ">
            <h5 className=" text-center text-work">GITHUB</h5>
            <h5 className="text-center">
              <SiGithub size={50} color="black" />
            </h5>
          </div>
          <div className="container-card ">
            <h5 className=" text-center text-work">REACTJS</h5>
            <h5 className="text-center">
              <SiReact size={50} color="#37a9d1" />
            </h5>
          </div>
          <div className="container-card ">
            <h5 className=" text-center text-work">REDUX</h5>
            <h5 className="text-center">
              <SiRedux size={50} color="#7e26ac" />
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tecnologie;
