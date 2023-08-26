import './App.css';
// import { Container } from "./components/styles/Container.styled.js"
import React from 'react';
import Wrapper from "./components/Wrapper.js";
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Testimonials from './components/Testimonials';
import testimonialsData from './components/TestimonialsData';

function App() {
  return (
    <div className="App">
        <Header />
        <Body />
      <div className="testimonials-container">
            {testimonialsData.map(data =>(
              <Testimonials 
                  key = {data.id}
                  logo= {data.logo}
                  name= {data.name}
                  position = {data.position}
                  image= {data.image}
                  content= {data.content}
                  service= {data.services}
                  idValue= {data.id % 2 === 1} // Passing an odd prop based on ID
              />
            ))
            }
      </div>
        <Footer />
    </div>
  )
}

export default App;
