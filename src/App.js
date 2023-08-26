import './App.css';
// import { Container } from "./components/styles/Container.styled.js"
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Wrapper from "./components/Wrapper.js";
import Header from './components/Header';

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333"
  }
}

function App() {
  return (
    // <div className="App">
      
    // </div>
    <ThemeProvider theme= {theme}>
    <div className="App">
        <Header />
        <Wrapper>
          {/* <h1>Hello world</h1> */}
        </Wrapper>
        
    </div>
  </ThemeProvider>
  )
    
  
}

export default App;
