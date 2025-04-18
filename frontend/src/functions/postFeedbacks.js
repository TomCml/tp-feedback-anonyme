import axios from 'axios';

const API_BASE = 'http://localhost:3001';

export const postFeedbacks = async (data) => {
	try {
		const response = await axios.post(`${API_BASE}/feedbacks`, {
			people: {
				name: data.name,
				category: data.category,
			},
			feedback: data.text,
		});
		return response.data;
	} catch (error) {
		console.error("Erreur lors de l'envoi du feedback :", error);
		throw error;
	}
};
