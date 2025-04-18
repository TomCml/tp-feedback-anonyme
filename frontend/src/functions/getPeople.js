import axios from 'axios';

const API_BASE = 'http://localhost:3001/api';

// Get people
export const getPeople = async () => {
	try {
		const response = await axios.get(`${API_BASE}/peoples`);
		return response.data;
	} catch (error) {
		console.error('Erreur lors de la récupération des personnes :', error);
		throw error;
	}
};
