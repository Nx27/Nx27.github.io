import React from 'react';
import './App.css';
import  Header  from './statics/Header';
import AppRoutes from './routes/RoutesNxbime';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Link to="/App">Home</Link>
    
    </>
    
  );
}

export default App;
