import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Donation from "./components/pages/Donation";
import ThankYou from "./components/pages/ThankYou";
import Project from "./components/pages/Project";
import Projects from "./components/pages/Projects";
import NotFound from "./components/pages/NotFound";
import NavBar from "./components/parts/NavBar";
import Footer from "./components/parts/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element = {<Home/>} path='/' exact />
        <Route element = {<Donation/>} path='/donation'/>
        <Route element = {<ThankYou/>} path='/thank_you'/>
        <Route element = {<Project/>} path='/project/:slug'/>
        <Route element = {<Projects/>} path='/project/*'/>
        <Route element = {<Projects/>} path='/projects'/>
        <Route element = {<NotFound/>} path='/404'/>
        <Route element = {<NotFound/>} path='*'/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
