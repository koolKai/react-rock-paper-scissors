import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Header = ({ score, setScore, setName }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const reset = () => {
    setScore(0);
    setName("Player");
  };
  return (
    <>
      <div className="header">
        <div className="text">
          <span>Rock</span>
          <span>Paper</span>
          <span>Scissors</span>
        </div>
        <div className="score-box">
          <span>Score</span>
          <div className="score-box__score">{score}</div>
        </div>
        <div>
          <div className="btns">
            <Link to="/">
              <button className="restart" onClick={reset}>
                Restart
              </button>
            </Link>
            <button className="rules" onClick={toggle}>
              Rules
            </button>
          </div>
        </div>
      </div>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Header;
