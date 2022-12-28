import './scss/style.scss'
// import '../public/index.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ScrollToTop from './utils/scrollToTop'

import React from 'react'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Contacts from './pages/contacts/Contacts'
import Projects from './pages/projects/Projects'
import Project from './pages/project/Project'
import Service from './pages/service/Service'
import Modal from './components/modal/Modal'

import { useState } from 'react'


function App(props) {
  const [modalActive, setModalActive] = useState(false)
  const [modalText, setModalText] = useState('')


  const openModal = (e) => {
    document.body.style.overflow= 'hidden'
    setModalText(e.target.innerText)
    setModalActive(true)
    e.preventDefault()
  }


  const closeModal = () => {
    document.body.style.overflowX = 'hidden'
    document.body.style.overflowY = 'auto'
    setModalActive(false)
  }


  return (
    <div className="App">

      <Router>

        <ScrollToTop />

        <Header active={modalActive} openModal={openModal} />

        <Routes>
          <Route path='/' element={<Home active={modalActive} openModal={openModal}  />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/service/:id' element={<Service />} />
        </Routes>

        <Modal active={modalActive} openModal={openModal} closeModal={closeModal} titleText={modalText} />

        <Footer />

      </Router>


    </div>
  )
}

export default App
