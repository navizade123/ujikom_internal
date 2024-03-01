import "./App.css";
import ProjectsPage from "./Components/ProjectsPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./Components/home/HomePage";
import AboutMe from "./Components/home/AboutMe";
import Contact from "./Components/home/Contact";


function App() {
  return (
    <BrowserRouter>
      <header className="navbars">
        <NavLink to='/' className="button rounded">
          <span className='icon-home'></span>
          Home
        </NavLink>

        <NavLink to='/payload' className="button rounded">
          Store
        </NavLink>

        {/* <NavLink to='/about' className="button rounded">
          About 
        </NavLink> */}

        <NavLink to='/contact' className="button rounded">
          Contact
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payload" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/.id" element={<ProjectsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
