import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Statistics from './components/Statistics';
import Income from './components/Income';
import Expense from './components/Expense';
import Transaction from './components/Transaction';
import Home from './components/Home';
import Layout from './components/LayOut';
import UserProfile from './components/UserProfile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/income" element={<Layout><Income /></Layout>} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;