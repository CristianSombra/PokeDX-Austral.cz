import React,{useEffect} from "react";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Card from "../card/card.js";
import {useSelector, useDispatch} from "react-redux";
import {getPokemons} from "../redux/actions.js";

const CardsContainer = () => {
    const pokemons = useSelector((state) => state.pokemons)
    const dispatch = useDispatch();

useEffect(() => {
    dispatch(getPokemons());
}, [dispatch]);

return (
    <IonGrid>
        <IonRow>
            {pokemons.map((pokemon, index) => (
                <IonCol size="12" size-md="6" size-lg="4" key={index}>
                    <Card pokemon={pokemon} />
                </IonCol>
            ))}
        </IonRow>
    </IonGrid>
    );
}
export default CardsContainer;
