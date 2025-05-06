import "./App.css";
import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Footer from "./components/Footer/Footer";
import { createContext, useState } from "react";

export const GameContext = createContext();

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <>
      <GameContext.Provider value={{ gameStarted, setGameStarted }}>
        <Header />
        <GameBoard />
        <Footer />
      </GameContext.Provider>
    </>
  );
}

export default App;
