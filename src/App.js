import { HashRouter, Routes,Route } from "react-router-dom";
import FinalPreview from "./preview";
import Basic from "./components/basic";
import Contact from "./components/contact";
import Education from "./components/education";
import Skill from "./components/skill";
import Project from "./components/project";
import Experience from "./components/experience";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/basic" element={<Basic/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/education" element={<Education/>}/>
        <Route exact path="/skill" element={<Skill/>}/>
        <Route exact path="/project" element={<Project/>}/>
        <Route exact path="/experience" element={<Experience/>}/>
        <Route exact path="/" element={ <FinalPreview/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
