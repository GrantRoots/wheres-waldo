import styles from "./Header.module.css";
import { useContext } from "react";
import { GameContext } from "../../App";
import waldoFace from "../../assets/waldoFace.png";

function Header() {
  const { gameStarted } = useContext(GameContext);

  return (
    <>
      {!gameStarted && (
        <header className={styles.header}>
          <h1>Welcome To Where’s Waldo!</h1>
          <h2>Click Start To Begin</h2>
          <img
            className={styles.waldoFace}
            src={waldoFace}
            alt="Waldo's Face"
          />
        </header>
      )}
    </>
  );
}

export default Header;
