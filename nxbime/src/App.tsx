import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/RoutesNxbime";
import { Link } from "react-router-dom";

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
