import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { useContext } from "react";
import { GameContext } from "../../App";

function Footer() {
  const [displayRules, setDisplayRules] = useState("none");
  const API_URL = import.meta.env.VITE_API_URL;

  const {
    gameStarted,
    setGameStarted,
    notFoundMessage,
    setNotFoundMessage,
    x,
    y,
    found,
    setFound,
    setWaldoCheck,
    setWizardCheck,
    setWilmaCheck,
    setOdlawCheck,
    setWoofCheck,
    setWinner,
    time,
    setTime,
  } = useContext(GameContext);

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

  async function checkSubmit() {
    const coords = {
      x: x,
      y: y,
    };

    try {
      const response = await fetch(`${API_URL}/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coords),
      });

      const data = await response.json();
      if (data === false) {
        setNotFoundMessage("Sorry thats not a the right character :(");
        return;
      }
      if (found.includes(data)) {
        setNotFoundMessage("Character has already been found.");
        return;
      } else {
        switch (data) {
          case "waldo":
            setWaldoCheck(true);
            break;
          case "wizard":
            setWizardCheck(true);
            break;
          case "wilma":
            setWilmaCheck(true);
            break;
          case "odlaw":
            setOdlawCheck(true);
            break;
          case "woof":
            setWoofCheck(true);
            break;
        }
        setFound([...found, data]);
        setNotFoundMessage("Correct, Nice Job!");
        if (found.length + 1 === 5) {
          //game over get the time and ask them for their name
          setWinner(true);
        }
      }
    } catch (error) {
      console.error("Network or server error:", error);
    }
  }

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.time}>
          <b>Time: {time} Seconds</b>
        </div>
        {!gameStarted && (
          <button onClick={startGame} className={styles.startSubmit}>
            Start
          </button>
        )}
        {gameStarted && (
          <button onClick={checkSubmit} className={styles.startSubmit}>
            Submit
          </button>
        )}
        <div className={styles.notFound}>{notFoundMessage}</div>
        <button
          className={styles.rulesButton}
          onClick={() => {
            displayRules === "none"
              ? setDisplayRules("block")
              : setDisplayRules("none");
          }}
        >
          Rules
        </button>
      </footer>
      <div className={styles.rules} style={{ display: `${displayRules}` }}>
        <h2>Rules</h2>
        <p>Try to find each character!</p>
        <p>There's waldo, wilma, odlaw, the wizard, and the dog name woof</p>
        <p>When you find them click on them then press submit</p>
        <p>If its not working refresh and it should work :)</p>
        <button
          onClick={() => {
            setDisplayRules("none");
          }}
        >
          Close
        </button>
      </div>
    </>
  );
}

export default Footer;
