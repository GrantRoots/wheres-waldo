import { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import { useContext } from "react";
import { GameContext } from "../../App";

function Footer() {
  const [time, setTime] = useState(null);
  const { gameStarted, setGameStarted } = useContext(GameContext);

  function startGame() {
    setGameStarted(true);
    startTimer();
  }

  useEffect(() => {
    if (gameStarted) {
      setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  }, [gameStarted]);

  function startTimer() {}

  return (
    <>
      <footer className={styles.footer}>
        <div>Time: {time}</div>
        {!gameStarted && (
          <button onClick={startGame} className={styles.button}>
            Start
          </button>
        )}
      </footer>
    </>
  );
}

export default Footer;
