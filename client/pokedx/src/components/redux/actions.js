import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";

const urlServer = 'http://localhost:3001/';

export const getPokemons = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(urlServer);
            const pokemons = apiData.data
            dispatch({type: GET_POKEMONS, payload: pokemons})
        } catch (error) {
            console.error("Error al buscar el personaje", error);
        }
    };
};