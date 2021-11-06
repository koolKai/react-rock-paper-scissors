import "./App.css";
import "./styles.scss";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import Intro from "./components/Intro";

import { Switch, Route } from "react-router-dom";
import { React, useState } from "react";

const App = () => {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  const [playerName, setName] = useState("Player");
  const [chance, setChance] = useState(10);

  return (
    <>
      <div className="container-fluid">
        <Header
          score={score}
          setName={setName}
          setScore={setScore}
          chance={chance}
          setChance={setChance}
        />
        <Switch>
          <Route exact path="/">
            <Intro
              playerName={playerName}
              setName={setName}
              chance={chance}
              setChance={setChance}
            />
          </Route>
          <Route exact path="/play">
            <Play
              setMyChoice={setMyChoice}
              chance={chance}
              setChance={setChance}
            />
          </Route>
          <Route path="/play/game">
            <Game
              myChoice={myChoice}
              score={score}
              setScore={setScore}
              playerName={playerName}
              chance={chance}
              setChance={setChance}
            />{" "}
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
