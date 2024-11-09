import { BrowserRouter as Router, Routes, Route}  from "react-router-dom"
import Experts from "./Experts"
import Events from "./Events"
import Formulaire from "./Formulaire"
import Navbar from "./Navbar"


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Events/>}/>
          <Route path="/expert" element={<Experts/>}/>
          <Route path="/formulaire" element={<Formulaire/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
