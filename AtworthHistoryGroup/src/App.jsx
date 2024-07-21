import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import About from './Components/About'
import AtworthHistory from './Components/AtworthHistory'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'
import Events from './Components/Events'
import Publications from './Components/Publications'
import Museum from './Components/Museum'
import Image from './Components/Image'


function App() {

  return (
    <div id="whole_page">
    <Header/>
    <section id="mainBody">
      <div id="events">
        <Events/>
      </div>
      <div id="bulk">
    <div id="about"><About /></div>
    <div id= "history"><AtworthHistory/></div>
    <div id="museum"><Museum/></div>
    <div id="gallery"><Gallery/></div>
    <div id="publications"><Publications/></div>
    </div>
    </section>
    <Footer/>
</div>
  )
}

export default App
