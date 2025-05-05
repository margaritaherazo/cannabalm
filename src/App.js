import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import Product from './pages/Product';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
