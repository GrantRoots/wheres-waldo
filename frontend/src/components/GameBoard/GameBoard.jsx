import background from "../../assets/background.jpeg";
import waldo from "../../assets/waldo.webp";
import wizard from "../../assets/wizard.png";
import wilma from "../../assets/wilma.png";
import odlaw from "../../assets/odlaw.png";
import woof from "../../assets/woof.png";
import { useContext, useState } from "react";
import { GameContext } from "../../App";
import styles from "./GameBoard.module.css";

function GameBoard() {
  const { gameStarted } = useContext(GameContext);
  const [clicked, setClicked] = useState(false);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  function handleClick(e) {
    clicked ? null : setClicked(true);
    setX(e.clientX);
    setY(e.clientY);
    checkCoordinates;
  }

  function checkCoordinates() {
    //check
    //add score if right
  }

  return (
    <>
      {gameStarted && (
        <main onClick={handleClick}>
          {clicked && (
            <div className={styles.checkBox} style={{ left: x, top: y }}></div>
          )}
          <div className={styles.container}>
            <img
              className={styles.background}
              src={background}
              alt="Wheres waldo background"
            />
            <img className={styles.waldo} src={waldo} alt="Waldo" />
            <img className={styles.wizard} src={wizard} alt="Wizard" />
            <img className={styles.wilma} src={wilma} alt="Wilma" />
            <img className={styles.odlaw} src={odlaw} alt="Odlaw" />
            <img className={styles.woof} src={woof} alt="Woof" />
          </div>
        </main>
      )}
    </>
  );
}

export default GameBoard;
