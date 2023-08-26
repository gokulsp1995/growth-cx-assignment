import './App.css';
// import { Container } from "./components/styles/Container.styled.js"
import React from 'react';
import Wrapper from "./components/Wrapper.js";
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <div className="App">
        <Header />
        <Body />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default App;
