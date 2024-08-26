import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { EstoqueMenu } from "./components/EstoqueMenu";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { EstoqueUpload } from "./components/EstoqueUpload";
import { EstoqueResultado } from "./components/EstoqueResultado";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/home" Component={Home}/>
          <Route path="/options" Component={EstoqueMenu}/>
          <Route path="/upload" Component={EstoqueUpload}/>
          <Route path="/result" Component={EstoqueResultado}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
