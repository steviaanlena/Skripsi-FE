import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Demo from './pages/Demo'
import Stemmer from './pages/Stemmer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stemmer" element={<Stemmer />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
