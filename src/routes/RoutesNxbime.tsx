import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import ProjectsPage from "../pages/ProjectsPage";
import Home from "../pages/Home";
import "../.css/Body.css";




function AppRoutes() {
  return (

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />

      </Routes>

  );
}

export default AppRoutes;
