import React, {useState} from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles';
import {SliderData} from './data/SliderData'
import Dropdown from './components/Dropdown';


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
 </>
  );
}

export default App;
