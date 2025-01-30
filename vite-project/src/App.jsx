import { useEffect, useState } from "react";
import "./App.css";
import FileList from "./components/FileList";
import Notebook from "./components/Notebook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Notebook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
