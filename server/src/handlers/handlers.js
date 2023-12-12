const {getAllCharacters} = require("../controllers/controllers.js");

const getAllCharactersHandler = async (req, res) => {
    try {
        const data = await getAllCharacters();
        res.status(200).send(data)        
    } catch (error) {
        res.status(500).json({error:error.message, type:"Error del servidor"})
    }
}

module.exports = {getAllCharactersHandler};