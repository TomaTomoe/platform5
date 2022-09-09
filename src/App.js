import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Donation from "./components/pages/Donation";
import ThankYou from "./components/pages/ThankYou";
// import Project from "./components/pages/Project";
import NavBar from "./components/parts/NavBar";
import Footer from "./components/parts/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element = {<Home/>} path='/' exact />
        <Route element = {<Donation/>} path='/donation' exact />
        <Route element = {<ThankYou/>} path='/thank_you' exact />
        {/* <Route element = {<Project/>} path='/project' /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
