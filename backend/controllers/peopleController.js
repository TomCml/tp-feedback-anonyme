const fs =require("fs/promises");
const path = require('path');

const feedbackFilePath= path.join(__dirname, "../data/feedback.json");

exports.getFeedback= async (req, res) =>{
    try{
        const feedbackData = await fs.readFile(feedbackFilePath);
        const feedback = JSON.parse(feedbackData)
        res.status(200).json(feedback)
    }
    catch (error){
        res.status(500).json({"message":"Erreur lors de la récupération des données", "error": error.message})
    }
};

exports.writeFeedback = async (req, res) =>{
    try{
        const peopleData = await fs.readFile(feedbackFilePath);
        const feedback = JSON.parse(feedbackData)

        const newFeedback = req.body
        feddbacks.push(newFeedback);
        fs.writeFile(feedbackFilePath, JSON.stringify(feedbacks, null, 2))
        res.status(201).json({"message":"Feedback ajouté avec succès", "feedback": newFeedback})
    }
    catch (error){
        res.status(500).json({"message":"Erreur lors de l'ajout du feedback", "error": error.message})
    }
};


