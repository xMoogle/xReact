import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/Home";
import Footer from "./components/statics/footer/Footer";
import NavBar from './components/statics/navBar/NavBar';
import Login from "./pages/login/Login";
import { Box } from '@mui/material';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/Cadastro" element={<CadastroUsuario />} />

      </Routes>
      <Box marginTop={"570px"}><Footer/></Box>
      
    </Router>
  );
}

export default App;
