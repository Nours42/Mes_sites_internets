import './App.css';

import Header from './components/header'
import Home from './components/home'
import Restaurant from './components/restaurant';
import Auberge from './components/auberge'
import Contact from './components/contact'
import Footer from './components/footer'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/restaurant" element={<Restaurant />} />
          <Route exact path="/auberge" element={<Auberge />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path='/privacy-policy' component={() => {
            window.location.href = 'https://www.facebook.com/Auberge-de-Py-2022-112257288142368/';
            return null;
          }} />
          <Route path='/privacy-policy' component={() => {
            window.location.href = 'mailto:aubergedepy66360@gmail.com';
            return null;
          }}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;