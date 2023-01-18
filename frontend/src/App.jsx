// Import libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import widgets
import Footer from "./components/widgets/Footer"
import Header from "./components/widgets/Header"

// Import layouts
import Index from "./components/layouts/Index"
import Home from "./components/layouts/Home"
import Info from "./components/layouts/Info"
import Detail from "./components/layouts/Detail"

function App() {

  return (
    <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route path='/' exact element={<Index />} />
          <Route path='/home' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </div>

      <Footer />
    </Router>
    
  )
}

export default App
