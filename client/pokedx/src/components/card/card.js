import React from "react";

const Card = ({ pokemon }) => {
    const { name, height, weight, experience, abilities } = pokemon;

return (
    <div className="card">
        <h3>{name}</h3>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Experience: {experience}</p>
        <p>Abilities: {abilities.join(", ")}</p>
    </div>
    );
};

export default Card;
