// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );

}

// // Arror function
// const App = () => <h1>Hello ReactJS</h1>

export default App;
