import "./scss/style.scss"
// import '../public/index.js'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ScrollToTop from "./utils/scrollToTop"

import React from "react"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Contacts from "./pages/contacts/Contacts"
import Projects from "./pages/projects/Projects"
import Project from "./pages/project/Project"
import Service from "./pages/service/Service"
import Modal from "./components/modal/Modal"
import Burger from "./components/burger/Burger"
import FixedTgLink from "./components/fixed-tg-link/FixedTgLink"

import { useState } from "react"

import { useRef } from "react"
import emailjs from "@emailjs/browser"

import { questions } from "./helpers/questionsList"

function App(props) {
  //Modal
  const [modalActive, setModalActive] = useState(false)
  const [modalText, setModalText] = useState("")

  const openModal = (e) => {
    document.body.style.overflow = "hidden"
    setModalText(e.target.innerText)
    setModalActive(true)
    e.preventDefault()
  };

  const closeModal = () => {
    document.body.style.overflowX = "hidden"
    document.body.style.overflowY = "auto"
    setModalActive(false)
  };

  //Header Fixed
  const [headerFixed, setHeaderFixed] = useState(false)

  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset

    if (scrollTop >= 10) {
      setHeaderFixed(true)
    } else {
      setHeaderFixed(false)
    }
  });

  //Questions
  const [qustions, setQuestions] = useState(questions)

  const toggleQuestions = (index) => {
    setQuestions(
      questions.map((question, i) => {
        if (i === index) {
          question.open = !question.open
        } else {
          question.open = false
        }
        return question
      })
    );
  };

  // Burger
  const [navActive, setNavActive] = useState(false)

  const burgerOpen = () => {
    document.body.classList.toggle("_lock")
    setNavActive(!navActive)
  };

  // SendMailFunc(EmailJs)
  const form = useRef();

  const sendEmail = async () => {
    // e.preventDefault()

    return emailjs
      .sendForm(
        "service_nt87tb9",
        "template_l0is14t",
        form.current,
        "aV61bNlOdX3SXEzH-"
      )
  }

  return (
    <div className="App">
      <Router>
        <ScrollToTop />

        <Header
          active={modalActive}
          openModal={openModal}
          fixed={headerFixed}
          setNav={burgerOpen}
          nav={navActive}
        />

        <Burger nav={navActive} setNav={burgerOpen} />

        <FixedTgLink />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                active={modalActive}
                openModal={openModal} toggleQuestions={toggleQuestions}
              />
            }
          />
          <Route
            path="/contacts"
            element={<Contacts sendEmail={sendEmail} form={form} />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route
            path="/service/:id"
            element={<Service openModal={openModal} />}
          />
        </Routes>

        <Modal
          active={modalActive}
          closeModal={closeModal}
          titleText={modalText}
          sendEmail={sendEmail}
          form={form}
        />
        <Footer />
      </Router>
    </div>
  )
}

export default App
