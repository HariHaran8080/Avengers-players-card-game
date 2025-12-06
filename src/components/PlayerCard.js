import React from "react";
import "./PlayerCard.css";

const PlayerCard = ({ player, isSelected, onToggleSelect }) => {
  return (
    <div
      className={`player-card ${isSelected ? "selected" : ""}`}
      onClick={onToggleSelect}
    >
      <div className="card-header">
        <img src={player.image} alt={`${player.name}`} className="player-image" />
      </div>
      <div className="card-body">
        <h3 className="player-name">{player.name}</h3>
        <p className="player-power">Power: {player.power}</p>
        <p className="player-ability">Ability: {player.ability}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
