import React from "react";
import img from "../../assets/pokemon.jpg";
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';

const Card = ({ pokemon }) => {

    //Verifico primero si pokemon tiene un valor
    if(!pokemon) {
        return null;
    }

    const { name, height, weight, experience, abilities } = pokemon;

return (
        <IonCard color="tertiary">
            <img alt="Quien es éste pokemon?" src={img} />
            <IonCardHeader>
                <IonCardTitle><h1>Nombre: {name}</h1></IonCardTitle>
                <IonCardSubtitle><h2>Características</h2></IonCardSubtitle>
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