import './App.css';

import Header from './components/header'
import Home from './components/home'

import Album from './components/album'
import Contact from './components/contact'
import Footer from './components/footer'

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Album" element={<Album />}/>
          <Route exact path="/Contact" element={<Contact />}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
