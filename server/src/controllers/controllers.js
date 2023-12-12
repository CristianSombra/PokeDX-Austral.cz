const axios = require("axios");

const getAllCharacters = async () => {
    const apiUrl = "https://beta.pokeapi.co/graphql/v1beta";

    const query = `
    query {
        pokemon_v2_pokemon {
            name
            height
            weight
            base_experience
            abilities: pokemon_v2_pokemonabilities {
                ability: pokemon_v2_ability {
                    name
                }
            }
        }
    }
`;

    try {
        const response = await axios.post(apiUrl, {
            query,
        });

        console.log("Received response:", response.data);

        const responseData = response?.data?.data?.pokemon_v2_pokemon || [];
        return responseData.map(formattedData);
    } catch (error) {
        throw new Error(`Error fetching Pokemon data: ${error.message}`);
    }
};

const formattedData = (data) => {
    if (!data) {
        return null;
    }

    const abilities = data?.abilities?.map(abilityData => abilityData.ability.name) || [];

    return {
        name: data.name || "Unknown",
        height: data.height || 0,
        weight: data.weight || 0,
        experience: data.base_experience || 0,
        abilities: abilities
    };
};


module.exports = {getAllCharacters};
