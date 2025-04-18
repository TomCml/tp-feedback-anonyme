import axios from 'axios';

const API_BASE = 'http://localhost:3001';

export const getFeedbacks = async () => {
	try {
		const response = await axios.get(`${API_BASE}/feedbacks`);
		return response.data;
	} catch (error) {
		console.error('Erreur lors de la récupération des feedbacks :', error);
		throw error;
	}
};
