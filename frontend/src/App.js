import { useEffect, useState } from 'react';
import './App.css';
import Display from './components/Displayer/Display';
import FeedbackForm from './components/Form/FeedbackForm';
import Header from './components/Header/Header';
import { getFeedbacks } from './functions/getFeedbacks';
import { postFeedbacks } from './functions/postFeedbacks';

function App() {
	const [feedbacks, setFeedbacks] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getFeedbacks();
				setFeedbacks(result);
			} catch (err) {
				console.error('Erreur lors du fetch des feedbacks :', err);
			}
		};
		fetchData();
	}, []);

	const handleAddFeedback = async (newFeedback) => {
		try {
			const result = await postFeedbacks(newFeedback);
			if (result.feedbacks) {
				setFeedbacks(result.feedbacks);
			}
		} catch (err) {
			console.error("Erreur lors de l'ajout du feedback :", err);
		}
	};

	return (
		<div className='App'>
			<Header />
			<FeedbackForm onAddFeedback={handleAddFeedback} />
			<Display feedbacks={feedbacks} />
		</div>
	);
}

export default App;
