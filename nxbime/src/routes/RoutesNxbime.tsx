import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import ProjectsPage from "../sub/ProjectsPage";




function AppRoutes() {
  return (

      <Routes>
        <Route path="/" element={<h1>smtn about a mainpage</h1>} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />

      </Routes>

  );
}

export default AppRoutes;
