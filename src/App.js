import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
// import Project from "./components/pages/Project";
import NavBar from "./components/parts/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element = {<Home/>} path='/' exact />
        {/* <Route element = {<Project/>} path='/project' /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
