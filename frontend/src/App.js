import { useState } from 'react';
import './App.css';
import Display from './components/Displayer/Display';
import FeedbackForm from './components/Form/FeedbackForm';
import Header from './components/Header/Header';

function App() {
	const [feedbacks, setFeedbacks] = useState([]);

	const handleAddFeedback = (newFeedback) => {
		setFeedbacks((prev) => [...prev, newFeedback]);
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
