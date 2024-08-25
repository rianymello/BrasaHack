import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { EstoqueHome } from "./components/EstoqueHome";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { EstoqueUpload } from "./components/EstoqueUpload";
import { EstoqueResultado } from "./components/EstoqueResultado";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" Component={Home}/>
          <Route path="/options" Component={EstoqueHome}/>
          <Route path="/upload" Component={EstoqueUpload}/>
          <Route path="/result" Component={EstoqueResultado}/>
        </Routes>
      </BrowserRouter>
      <Home />
    </>
  );
}

export default App;
