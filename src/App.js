import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Read from "./components/Read";
import {  Route, Routes,} from "react-router-dom";

function App() {
  const [textInfo, setTextInfo] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home textInfo={textInfo} setTextInfo={setTextInfo} />}
      />
      <Route path="/read" element={<Read textInfo={textInfo}  setTextInfo={setTextInfo} />} />
    </Routes>
  );
}

export default App;
