// api.js (ou dans un dossier functions/api par exemple)
import axios from 'axios';

// Base URL si nécessaire, sinon axios utilise le chemin tel quel
const API_BASE = 'http://localhost:3001'; // À adapter si besoin

// Get people
export const getPeople = async () => {
	try {
		const response = await axios.get(`${API_BASE}/people`);
		return response.data;
	} catch (error) {
		console.error('Erreur lors de la récupération des personnes :', error);
		throw error;
	}
};
