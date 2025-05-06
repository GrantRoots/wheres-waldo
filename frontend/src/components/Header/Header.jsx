import styles from "./Header.module.css";
import { useContext } from "react";
import { GameContext } from "../../App";

function Header() {
  const { gameStarted } = useContext(GameContext);

  return (
    <>
      {!gameStarted && (
        <header className={styles.header}>Welcome To Where’s Waldo!</header>
      )}
    </>
  );
}

export default Header;
