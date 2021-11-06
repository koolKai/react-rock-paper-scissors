import React, { useState } from "react";
import { Link } from "react-router-dom";
import rules from "../images/image-rules.svg";

const Intro = ({ playerName, setName, chance, setChance }) => {
  // const [playerName, setName] = useState("Player");
  // function handleName(event) {
  //   setName={event.value};
  // }

  const setMyName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div className="intro">
        <div className="input">
          <h2>PLAYER NAME:</h2>
          <input type="text" value={playerName} onChange={setMyName} />
        </div>
        <Link to="/play">
          <div>
            <button className="btn" onClick={() => setChance(chance - 1)}>
              Start
            </button>
          </div>
        </Link>
      </div>
      <footer className="footer">
        <span>Thank You for Playing</span>
        <span>
          My GitHubLink :
          <a href="https://github.com/koolKai">https://github.com/koolKai</a>
        </span>
        <span>Give me Feedback & do Comment</span>
      </footer>
    </>
  );
};

export default Intro;
