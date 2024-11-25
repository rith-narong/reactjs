
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import CheckoutForm from './pages/CheckOut';
function App() {
  return (
   
    <BrowserRouter>

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutForm />} />


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
