import React, { useState } from "react";
import PlayerCard from "./components/PlayerCard";
import "./App.css";

const App = () => {
  const players = [
    { id: 1, name: "Thor⚡", power: 95, ability: "God of Thunder", image: "https://m.media-amazon.com/images/M/MV5BMGM5ZWY2OTMtMTI1Ni00MDE2LWI3MDctZTU0ZmM3YTlhYjQxXkEyXkFqcGc@._V1_QL75_UY281_CR18,0,500,281_.jpg" },
    { id: 2, name: "Hulk👊", power: 88, ability: "Smash", image: "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/500747U/the-omega-hulk_marvel_feature.jpg" },
    { id: 3, name: "Iron Man💸", power: 92, ability: "Intellegence", image: "https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-iron-man-infinity-war.webp" },
    { id: 4, name: "Captain America💪🏻", power: 75, ability: "Super soldier", image: "https://media-assets.wired.it/photos/615eeaa41af5983e6c6e178e/master/w_1600%2Cc_limit/1441703066_-Captain-America-captain-america-38170925-1024-768.jpg" },
    { id: 5, name: "Doctor Strange ✌🏻", power: 60, ability: "Time travel", image: "https://cosmicbook.news/wp-content/uploads/2022/04/doctor-strange-multiverse-madness-posters-fan-contest.jpg" },
    { id: 6, name: "Loki ♾️", power: 78, ability: "God of Mischief", image: "https://64.media.tumblr.com/1c94c1c773194a5dd1ea753b667430c9/482537267fd9471b-7d/s250x400/7061565bf94d754585ee69cb27364e3f109b52a6.jpg" },
  ];

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [comparisonResult, setComparisonResult] = useState("");

  const togglePlayerSelection = (id) => {
    if (selectedPlayers.includes(id)) {
      setSelectedPlayers(selectedPlayers.filter((playerId) => playerId !== id));
    } else if (selectedPlayers.length < 2) {
      setSelectedPlayers([...selectedPlayers, id]);
    }
  };

  const compareSelectedPlayers = () => {
    if (selectedPlayers.length === 2) {
      const [player1, player2] = selectedPlayers.map((id) => players.find((p) => p.id === id));
      if (player1.power > player2.power) {
        setComparisonResult(`${player1.name} is more powerful than ${player2.name}.`);
      } else if (player1.power < player2.power) {
        setComparisonResult(`${player2.name} is more powerful than ${player1.name}.`);
      } else {
        setComparisonResult(`${player1.name} and ${player2.name} are equally powerful.`);
      }
    } else {
      setComparisonResult("Please select exactly two players to compare.");
    }
  };

  return (
    <div className="app">
      <h1>Avengers Cards </h1>
      <p>Select two players to compare their powers.</p>
      <div className="card-container">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            isSelected={selectedPlayers.includes(player.id)}
            onToggleSelect={() => togglePlayerSelection(player.id)}
          />
        ))}
      </div>
      <button className="compare-button" onClick={compareSelectedPlayers}>
        Compare Selected Players
      </button>
      {comparisonResult && <div className="comparison-result">{comparisonResult}</div>}
    </div>
  );
};

export default App;
