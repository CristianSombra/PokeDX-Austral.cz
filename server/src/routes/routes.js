const {Router} = require('express');
const {getAllCharactersHandler} = require("../handlers/handlers.js");

const routes = Router();

routes.get("/", getAllCharactersHandler);

module.exports = routes;