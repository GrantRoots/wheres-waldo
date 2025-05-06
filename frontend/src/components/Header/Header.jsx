import styles from "./Header.module.css";
import { useContext } from "react";
import { GameContext } from "../../App";

function Header() {
  const { gameStarted } = useContext(GameContext);

  return (
    <>
      {!gameStarted && (
        <header className={styles.header}>
          <h1>Welcome To Where’s Waldo!</h1>
          <h2>Click Start To Begin</h2>
          <img src="" alt="Waldo Head" />
        </header>
      )}
    </>
  );
}

export default Header;
