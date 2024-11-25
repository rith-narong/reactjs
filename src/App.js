
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import CheckoutForm from './pages/CheckOut';
function App() {
  return (
   
    <BrowserRouter>

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutForm />} />


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
