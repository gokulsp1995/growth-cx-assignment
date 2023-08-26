import './App.css';
// import { Container } from "./components/styles/Container.styled.js"
import React from 'react';
import Wrapper from "./components/Wrapper.js";
import Header from './components/Header';
import Footer from './components/Footer';

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333"
  }
}

function App() {
  return (
    <div className="App">
        <Header />

        <Wrapper>
          {/* <h1>Hello world</h1> */}
        </Wrapper>

        <Footer />
    </div>
  )
}

export default App;
