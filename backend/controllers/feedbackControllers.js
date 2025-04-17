const fs =require("fs/promises");
const path = require('path');

const peopleFilePath= path.join(__dirname, "../data/people.json")

exports.getPeople= async (req, res) =>{
    try{
        const peopleData = await fs.readFile(peopleFilePath);
        const people = JSON.parse(peopleData)
        res.status(200).json(people)
    }
    catch (error){
        res.status(500).json({"message":"Erreur lors de la récupération des données", "error": error.message})
    }
}


