import React from "react";
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';

const Card = ({ pokemon }) => {

    //Verifico primero si pokemon tiene un valor
    if(!pokemon) {
        return null;
    }

    const { name, height, weight, experience, abilities } = pokemon;

return (
        <IonCard color="danger">
            <IonCardHeader>
                <IonCardTitle><h1>Pókemon</h1></IonCardTitle>
                <IonCardSubtitle>Height:{name}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>Experience: {experience}</p>
                <p>Abilities: {abilities.join(", ")}</p>
            </IonCardContent>
        </IonCard>
    );
};

export default Card;