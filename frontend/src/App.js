import { useEffect, useState } from 'react';
import './App.css';
import Display from './components/Displayer/Display';
import FeedbackForm from './components/Form/FeedbackForm';
import Header from './components/Header/Header';
import { getFeedbacks } from './functions/getFeedbacks';

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

	const handleAddFeedback = (newFeedback) => {
		setFeedbacks((prev) => [newFeedback, ...prev]);
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
