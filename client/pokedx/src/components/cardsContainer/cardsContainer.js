import React,{useEffect} from "react";
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
    <div>
        {pokemons.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} />
        ))}
    </div>
    );
}
export default CardsContainer;
