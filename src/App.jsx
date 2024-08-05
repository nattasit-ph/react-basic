// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';
import About from './pages/abouts/About';
import Cart from './pages/carts/Cart';
import Counter from './pages/counters/Counter';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/counter' element={<Counter />} />
        {/* 404 Page Not Found */}
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </Router>
  );

}

// // Arror function
// const App = () => <h1>Hello ReactJS</h1>

export default App;
