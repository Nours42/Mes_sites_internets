import './App.css';

import Header from './components/header'
import Home from './components/home'
import Contact from './components/contact'
import Footer from './components/footer'
import Products from './components/products'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;