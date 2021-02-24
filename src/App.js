import React, {useState} from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles';
import {SliderData} from './data/SliderData'
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>   
    <Hero slides={SliderData} isOpen={isOpen} toggle={toggle}/>
    <Footer/>
 </>
  );
}

export default App;
