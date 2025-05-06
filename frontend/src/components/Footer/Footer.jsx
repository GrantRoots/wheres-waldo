import { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import { useContext } from "react";
import { GameContext } from "../../App";

function Footer() {
  const [time, setTime] = useState(0);
  const { gameStarted, setGameStarted } = useContext(GameContext);

  function startGame() {
    setGameStarted(true);
  }

  useEffect(() => {
    if (gameStarted) {
      setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  }, [gameStarted]);

  return (
    <>
      <footer className={styles.footer}>
        <div>Time: {time} Seconds</div>
        {!gameStarted && (
          <button onClick={startGame} className={styles.button}>
            Start
          </button>
        )}
        <button className={styles.rules}>Rules</button>
      </footer>
    </>
  );
}

export default Footer;
