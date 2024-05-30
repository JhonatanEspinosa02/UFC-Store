import Categories from "./components/Categories"
import Header from "./components/Header"
import PopularProducts from "./components/PopularProducts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Helmet from "./components/Helmet"
import Short from "./components/Short"
import Glove from "./components/Glove"
import Accessories from "./components/Accessories"


function App() {


  return (
    <>
    <Header/>
      <Router>
          <Categories/>
        <Routes>
          <Route path="/helmet" element={<Helmet/>}/>
          <Route path="/short" element={<Short/>}/>
          <Route path="/glove" element={<Glove/>}/>
          <Route path="/accessorie" element={<Accessories/>}/>
        </Routes>
      </Router>

    <PopularProducts/>
    </>
  )
}

export default App
