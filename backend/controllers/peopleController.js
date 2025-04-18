const fs = require("fs/promises");
const path = require('path');

const db = require('../db/mongo');


exports.getPeople = async (req, res) => {
    try {
        const people = await db.getPeople();
        res.status(200).json(people);
    }
    catch (error) {
        res.status(500).json({"message":"Erreur lors de la récupération des personnes", "error": error.message});
    }
};


