import React, {useState} from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dropdown from './components/Dropdown';
import { SliderData } from './data/SliderData';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import FooterInfo from './components/FooterInfo';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <FooterInfo />
    </>
  );
}

export default App;
