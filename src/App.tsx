import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./.css/App.css";
import AppRoutes from "./routes/RoutesNxbime";
import { Link } from "react-router-dom";
import "./.css/Body.css";
import "./.css/Header.css";

function App() {
  return (
    <>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/ProjectsPage">Projects</Link>
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
