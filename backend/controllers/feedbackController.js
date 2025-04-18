const db = require('../db/mongo');

exports.getFeedback = async (req, res) => {
    try {
        const feedback = await db.getFeedbacks();
        res.status(200).json(feedback);
    }
    catch (error) {
        res.status(500).json({"message":"Erreur lors de la récupération des données", "error": error.message});
    }
};

exports.writeFeedback = async (req, res) => {
    try {
        const newFeedback = await db.createFeedback(req.body);
        res.status(201).json({"message":"Feedback ajouté avec succès", "feedback": newFeedback});
    }
    catch (error) {
        res.status(500).json({"message":"Erreur lors de l'ajout du feedback", "error": error.message});
    }
};
