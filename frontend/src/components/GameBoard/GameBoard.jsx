import background from "../../assets/background.jpeg";
import waldoImg from "../../assets/waldo.webp";
import wizardImg from "../../assets/wizard.png";
import wilmaImg from "../../assets/wilma.png";
import odlawImg from "../../assets/odlaw.png";
import woofImg from "../../assets/woof.png";
import checkmark from "../../assets/checkmark.png";
import { useContext, useState, useRef, useEffect } from "react";
import { GameContext } from "../../App";
import styles from "./GameBoard.module.css";

function GameBoard() {
  const {
    gameStarted,
    setNotFoundMessage,
    setX,
    setY,
    waldoCheck,
    wizardCheck,
    wilmaCheck,
    odlawCheck,
    woofCheck,
    x,
    y,
    winner,
    time,
  } = useContext(GameContext);

  const [clicked, setClicked] = useState(false);
  const [submittedWin, setSubmittedWin] = useState(false);

  const waldoRef = useRef(null);
  const wizardRef = useRef(null);
  const wilmaRef = useRef(null);
  const odlawRef = useRef(null);
  const woofRef = useRef(null);

  useEffect(() => {
    if (gameStarted) getAndPostCoordinates();
  }, [gameStarted]);

  async function getAndPostCoordinates() {
    const waldoRect = waldoRef.current.getBoundingClientRect();
    const wizardRect = wizardRef.current.getBoundingClientRect();
    const wilmaRect = wilmaRef.current.getBoundingClientRect();
    const odlawRect = odlawRef.current.getBoundingClientRect();
    const woofRect = woofRef.current.getBoundingClientRect();

    const coords = {
      waldo: {
        top: waldoRect.top,
        bottom: waldoRect.bottom,
        left: waldoRect.left,
        right: waldoRect.right,
      },
      wizard: {
        top: wizardRect.top,
        bottom: wizardRect.bottom,
        left: wizardRect.left,
        right: wizardRect.right,
      },
      wilma: {
        top: wilmaRect.top,
        bottom: wilmaRect.bottom,
        left: wilmaRect.left,
        right: wilmaRect.right,
      },
      odlaw: {
        top: odlawRect.top,
        bottom: odlawRect.bottom,
        left: odlawRect.left,
        right: odlawRect.right,
      },
      woof: {
        top: woofRect.top,
        bottom: woofRect.bottom,
        left: woofRect.left,
        right: woofRect.right,
      },
    };

    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coords),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Network or server error:", error);
    }
  }

  function handleClick(e) {
    if (!winner) {
      if (!clicked) setClicked(true);
      setNotFoundMessage(null);
      setX(e.clientX);
      setY(e.clientY);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:3000/check/win", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const successfulSubmit = await response.json();
      if (successfulSubmit) {
        setSubmittedWin(true);
      }
    } catch (err) {
      console.error("Network or server error:", err);
    }
  }

  return (
    <>
      {gameStarted && (
        <main onClick={handleClick}>
          {clicked && !winner && (
            <div className={styles.checkBox} style={{ left: x, top: y }}></div>
          )}
          <div className={styles.container}>
            <img
              className={styles.background}
              src={background}
              alt="Wheres waldo background"
            />
            <img
              ref={waldoRef}
              className={styles.waldo}
              src={waldoImg}
              alt="Waldo"
            />
            {waldoCheck && (
              <img className={styles.waldo} src={checkmark} alt="Checkmark" />
            )}
            <img
              ref={wizardRef}
              className={styles.wizard}
              src={wizardImg}
              alt="Wizard"
            />
            {wizardCheck && (
              <img className={styles.wizard} src={checkmark} alt="Checkmark" />
            )}
            <img
              ref={wilmaRef}
              className={styles.wilma}
              src={wilmaImg}
              alt="Wilma"
            />
            {wilmaCheck && (
              <img className={styles.wilma} src={checkmark} alt="Checkmark" />
            )}
            <img
              ref={odlawRef}
              className={styles.odlaw}
              src={odlawImg}
              alt="Odlaw"
            />
            {odlawCheck && (
              <img className={styles.odlaw} src={checkmark} alt="Checkmark" />
            )}
            <img
              ref={woofRef}
              className={styles.woof}
              src={woofImg}
              alt="Woof"
            />
            {woofCheck && (
              <img className={styles.woof} src={checkmark} alt="Checkmark" />
            )}
          </div>
          {winner && (
            <div className={styles.form}>
              {!submittedWin && (
                <div>
                  <h1>Congratulations You Won!!!</h1>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Name: </label>
                    <input type="text" name="name" />
                    <input type="hidden" name="time" value={time} />
                    <button type="submit">Submit Your Time!</button>
                  </form>
                </div>
              )}
              {submittedWin && <h1>Thank you your time has been submitted!</h1>}
            </div>
          )}
        </main>
      )}
    </>
  );
}

export default GameBoard;
