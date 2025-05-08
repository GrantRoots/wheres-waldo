import { useEffect } from "react";
import styles from "./Footer.module.css";
import { useContext } from "react";
import { GameContext } from "../../App";

function Footer() {
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

  // function showRules() {}

  async function checkSubmit() {
    const coords = {
      x: x,
      y: y,
    };

    try {
      const response = await fetch("http://localhost:3000/check", {
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
        <div className={styles.time}>Time: {time} Seconds</div>
        {!gameStarted && (
          <button onClick={startGame} className={styles.button}>
            Start
          </button>
        )}
        {gameStarted && <button onClick={checkSubmit}>Submit</button>}
        <div className={styles.notFound}>{notFoundMessage}</div>
        <button className={styles.rules}>Rules</button>
      </footer>
    </>
  );
}

export default Footer;
