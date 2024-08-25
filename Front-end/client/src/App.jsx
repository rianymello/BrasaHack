import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { EstoqueHome } from "./components/EstoqueHome";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" Component={Home}/>
          <Route path="/options" Component={EstoqueHome}/>
        </Routes>
      </BrowserRouter>
      <Home />
    </>
  );
}

export default App;
