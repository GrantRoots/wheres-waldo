import background from "../../assets/background.jpeg";
import waldo from "../../assets/waldo.webp";
import wizard from "../../assets/wizard.png";
import wilma from "../../assets/wilma.png";
import odlaw from "../../assets/odlaw.png";
import woof from "../../assets/woof.png";
import { useContext } from "react";
import { GameContext } from "../../App";
import styles from "./GameBoard.module.css";

function GameBoard() {
  const { gameStarted } = useContext(GameContext);

  function handleClick(e) {
    const x = e.clientX;
    const y = e.clientY;
    //make box around click
    //allow like 10 px gap of error
    console.log("Click coordinates:", x, y);
  }

  return (
    <>
      {gameStarted && (
        <main onClick={handleClick}>
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
