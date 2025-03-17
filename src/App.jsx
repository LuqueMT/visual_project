import React from 'react'
import './App.css'
import Navbar from './components/Navbar/page.jsx';
import HCode from './components/HeroCode/page.jsx';
import Section_1 from './components/Section1/page.jsx';
import Section_2 from './components/Section2/page.jsx';
import Section_3 from './components/Section3/page.jsx';
import Features from './components/Features/page.jsx';
import Contacts from './components/Contact/page.jsx';
import Footer from './components/Footer/page.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <HCode/>
      <Section_1/>
      <Features/>
      <Section_2/>
      <Section_3/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
