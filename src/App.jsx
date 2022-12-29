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

import { questions } from './helpers/questionsList'


function App(props) {

  //Modal
  const [modalActive, setModalActive] = useState(false)
  const [modalText, setModalText] = useState('')


  const openModal = (e) => {
    document.body.style.overflow = 'hidden'
    setModalText(e.target.innerText)
    setModalActive(true)
    e.preventDefault()
  }


  const closeModal = () => {
    document.body.style.overflowX = 'hidden'
    document.body.style.overflowY = 'auto'
    setModalActive(false)
  }


  //Header Fixed
  const [headerFixed, setHeaderFixed] = useState(false)

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset

    if (scrollTop >= 10) {

      setHeaderFixed(true)

    } else {
      setHeaderFixed(false)
    }
  })


  //Questions
  const [qustions, setQuestions] = useState(questions)

  const toggleQuestions = index => {
    setQuestions(questions.map((question, i)=>{
      if(i === index) {
        question.open = !question.open
      } else {
        question.open = false
      }

      return question
    }))
  }


  return (
    <div className="App">

      <Router>

        <ScrollToTop />

        <Header active={modalActive} openModal={openModal} fixed={headerFixed} />

        <Routes>
          <Route path='/' element={<Home active={modalActive} openModal={openModal} toggleQuestions={toggleQuestions} />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/service/:id' element={<Service />} />
        </Routes>

        <Modal active={modalActive} closeModal={closeModal} titleText={modalText} />

        <Footer />

      </Router>


    </div>
  )
}

export default App
