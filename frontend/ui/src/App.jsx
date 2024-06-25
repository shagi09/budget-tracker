import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Statistics from './components/Statistics';
import Income from './components/Income';
import Expense from './components/Expense';
import Transaction from './components/Transaction';
import Home from './components/Home';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </Router>
  );
}

export default App;