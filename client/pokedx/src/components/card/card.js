import React from "react";
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';

const Card = ({ pokemon }) => {
    const { name, height, weight, experience, abilities } = pokemon;

return (
    <IonCard>
    <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
        <IonCardSubtitle>Height: {height}</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>
        <p>Weight: {weight}</p>
        <p>Experience: {experience}</p>
        <p>Abilities: {abilities.join(", ")}</p>
    </IonCardContent>
</IonCard>
);
};

export default Card;
