import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import ProjectsPage from "../pages/ProjectsPage";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import SiepieAndTakkie from "../pages/projects/SiepieAndTakkie";
import ColorTD from "../pages/projects/ColorTD";
import TheJourney from "../pages/projects/TheJourney";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProjectsPage" element={<ProjectsPage />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/SiepieAndTakkie" element={<SiepieAndTakkie />} />
      <Route path="/ColorTD" element={<ColorTD />} />
      <Route path="/TheJourney" element={<TheJourney />} />
      <Route path="*" element={<img src="https://http.cat/404" alt="404" />}/>
    </Routes>
  );
}

export default AppRoutes;
