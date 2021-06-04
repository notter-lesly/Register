import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Routes from './Routes'
import {BrowserRouter} from 'react-router-dom'

import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";

export default function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
        <Routes/>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
