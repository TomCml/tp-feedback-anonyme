import './App.css';
import Display from './components/Displayer/Display';
import FeedbackForm from './components/Form/FeedbackForm';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <FeedbackForm />
      <Display />
    </div>
  );
}

export default App;
