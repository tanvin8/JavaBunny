import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'

import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import IntroToJava from './pages/IntroToJava'
import Beginner from './pages/Beginner'
import Intermediate from './pages/Intermediate'
import Navbar from './components/Navbar.jsx'
import LessonPage from './pages/intro/LessonPage.jsx'
import BeginnerLessonPage from './pages/beginner/BeginnerLessonPage.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro-to-java" element={<IntroToJava />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/lesson/:lessonId" element={<BeginnerLessonPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
