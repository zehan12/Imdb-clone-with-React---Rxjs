import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
