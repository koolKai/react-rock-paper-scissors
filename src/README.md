REACT ROCK PAPER SCISSORS

Run cmd:npm install react-router-dom node-sass

##########################################
////
App component
-Add browser as route
-Put App component in Router element so that we can use router functionality in our game.
-Make some componets(Header,Play, Game...) for various functionality of our app.
-import them to app.js
-Import Switch & Route to app component
-use Switch and Route to naviagte through one component to other component of app by specific path destination.
-now create two states by using useState hook,and import them to app component.
-one for store player choice and another for score.
-assign score prop to header.
-assign setMyChoice state functin as prop to play camponent.

///
Intro Component

-SetPlayerName
-Start game on click
-Restart game on click
-Rules modal popup on click
-FootNote

///
Header Component

-Title: ROCK PAPER SCISSORS
-Scoreboard
-Restart button
-Rules button
-to set modal pop up use Modal & setModal State with initial state 'false' and using toggle function setModal state to true on clicking Rules button.

///
Play Component

-In play componet deconstruct props(setMyChoice).
-player select a choice among "rock paper & scissors" on clicking respective icon and by using Link route navigated to game component.
-in paly component create 3 divs with each choice and attach onClick method on each choice using setChoice function. setChoice function return selected choice id.

///
Game Component

-In game componet we will get myChoice = selected choice.
-here we set random house choice and after camparing the choices, we will get results, & according to result score will update.
-on clicking shake again, it will resatrt the shuffle and clear the previous house choice.
