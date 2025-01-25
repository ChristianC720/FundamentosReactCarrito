import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom"
import Header from './components/Header'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import About from "./pages/About"
import SoyElMapa from "./components/SoyElMapa"
function App() {
  return (
    <>
    <Header/>
    {/*Comentarios en React*/}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <SoyElMapa/>
    </>
  )
}

export default App
