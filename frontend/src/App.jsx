import "./App.css";
import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Footer from "./components/Footer/Footer";
import { createContext, useState } from "react";

export const GameContext = createContext();

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [notFoundMessage, setNotFoundMessage] = useState(null);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [found, setFound] = useState([]);
  const [waldoCheck, setWaldoCheck] = useState(false);
  const [wizardCheck, setWizardCheck] = useState(false);
  const [wilmaCheck, setWilmaCheck] = useState(false);
  const [odlawCheck, setOdlawCheck] = useState(false);
  const [woofCheck, setWoofCheck] = useState(false);
  const [winner, setWinner] = useState(false);
  const [time, setTime] = useState(0);

  return (
    <>
      <GameContext.Provider
        value={{
          gameStarted,
          setGameStarted,
          notFoundMessage,
          setNotFoundMessage,
          x,
          setX,
          y,
          setY,
          found,
          setFound,
          waldoCheck,
          setWaldoCheck,
          wizardCheck,
          setWizardCheck,
          wilmaCheck,
          setWilmaCheck,
          odlawCheck,
          setOdlawCheck,
          woofCheck,
          setWoofCheck,
          winner,
          setWinner,
          time,
          setTime,
        }}
      >
        <Header />
        <GameBoard />
        <Footer />
      </GameContext.Provider>
    </>
  );
}

export default App;
