import image1 from "../../assets/image1.jpeg";
import { useContext } from "react";
import { GameContext } from "../../App";
import styles from "./GameBoard.module.css";

function GameBoard() {
  const { gameStarted } = useContext(GameContext);

  return (
    <>
      {gameStarted && (
        <main>
          <img
            className={styles.img}
            src={image1}
            alt="Wheres waldo background"
          />
        </main>
      )}
    </>
  );
}

export default GameBoard;
