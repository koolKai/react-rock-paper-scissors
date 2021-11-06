import React from "react";
import { Link } from "react-router-dom";
import Triangle from "../images/bg-triangle.svg";

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };
  return (
    <>
      <div className="play">
        <img src={Triangle} alt="" className="triangle" />
        <div className="items">
          <Link to="/play/game">
            <div
              data-id="paper"
              onClick={setChoice}
              className="icon icon--paper"
            ></div>
          </Link>

          <Link to="/play/game">
            <div
              data-id="rock"
              onClick={setChoice}
              className="icon icon--rock"
            ></div>
          </Link>

          <Link to="/play/game">
            <div
              data-id="scissors"
              onClick={setChoice}
              className="icon icon--scissors"
            ></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Play;
