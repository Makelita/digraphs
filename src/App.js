import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Read from "./components/Read";
import Setting from "./components/Setting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [textInfo, setTextInfo] = useState([]);
  const [settingMenu, setSettingMenu] = useState(false);
  const [checkedBox, setCheckedBox] = useState([ ])
  const [list, setList] = useState(["all"])
 
 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home textInfo={textInfo} setTextInfo={setTextInfo} />}
          />
          <Route
            path="/read"
            element={<Read textInfo={textInfo} setTextInfo={setTextInfo} settingMenu={settingMenu} setSettingMenu={setSettingMenu} checkedBox={checkedBox} list={list} setList={setList} />}
          />
        </Routes>
        <Setting settingMenu={settingMenu} checkedBox={checkedBox} setCheckedBox={setCheckedBox}/>
      </Router>
    </div>
  );
}

export default App;
