import { useState } from "react";
import GameCard from "./components/GameCard";
import BanList from "./components/BanList";

const API_KEY = "3f296dbb199f47b68a129a2983ee378a";

function App() {
  const [game, setGame] = useState(null);
  const [banList, setBanList] = useState([]);

  const fetchGame = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`
      );

      const data = await response.json();

      let randomGame = null;

      // keep picking random until one isn't banned
      while (!randomGame) {
        const candidate =
          data.results[Math.floor(Math.random() * data.results.length)];

        const genre = candidate.genres[0]?.name || "Unknown";
        const platform = candidate.platforms[0]?.platform.name || "Unknown";

        if (!banList.includes(genre) && !banList.includes(platform)) {
          randomGame = candidate;
        }
      }

      setGame(randomGame);
    } catch (error) {
      console.error("Error fetching game:", error);
    }
  };

  const addToBanList = (value) => {
    if (!banList.includes(value)) {
      setBanList([...banList, value]);
    }
  };

  const removeFromBanList = (value) => {
    setBanList(banList.filter((item) => item !== value));
  };

  return (
    <div className="app">
      <h1>Game Explorer 🎮</h1>

      <button onClick={fetchGame}>Discover Game</button>

      {game && <GameCard game={game} addToBanList={addToBanList} />}

      <BanList banList={banList} removeFromBanList={removeFromBanList} />
    </div>
  );
}

export default App;