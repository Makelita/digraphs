import React from "react";
import "./setting.css";
import { useState,} from "react";

const Setting = ({ settingMenu, checkedBox, setCheckedBox,}) => {

const [bl, setBl] = useState (false)
const [fl, setFl] = useState (false)
const [ng, setNg] = useState (false)
const [sc, setSc] = useState (false)
const [th, setTh] = useState (false)
const [all, setall] = useState (false)

const handelbl = (e) => {
  setCheckedBox( () => {
    if(checkedBox.includes(e.target.textContent)){
     return checkedBox.filter( item => item !== e.target.textContent)
    } else {
      return [...checkedBox, e.target.textContent]
    }
  })
  setBl(!bl)
}



const handelFl = (e) => {
  setCheckedBox( () => {
    if(checkedBox.includes(e.target.textContent)){
     return checkedBox.filter( item => item !== e.target.textContent)
    } else {
      return [...checkedBox, e.target.textContent]
    }
  })
  setFl(!fl)

}

const handelNg = (e) => {
  setCheckedBox( () => {
    if(checkedBox.includes(e.target.textContent)){
     return checkedBox.filter( item => item !== e.target.textContent)
    } else {
      return [...checkedBox, e.target.textContent]
    }
  })
  
  setNg(!ng)

}

const handelSc = (e) => {
  setCheckedBox( () => {
    if(checkedBox.includes(e.target.textContent)){
     return checkedBox.filter( item => item !== e.target.textContent)
    } else {
      return [...checkedBox, e.target.textContent]
    }
  })
  setSc(!sc)

}
const handelTh = (e) => {
  setCheckedBox( () => {
    if(checkedBox.includes(e.target.textContent)){
     return checkedBox.filter( item => item !== e.target.textContent)
    } else {
      return [...checkedBox, e.target.textContent]
    }
  })
  setTh(!th)

}

const handelAll = (e) => {
  setCheckedBox( () => {
    if(checkedBox.includes(e.target.textContent)){
     return checkedBox.filter( item => item !== e.target.textContent)
    } else {
      return [...checkedBox, e.target.textContent]
    }
  })
  setall(!all)

}


  return (
    <div className={ settingMenu ? " setting settingView" : "setting"}>
      <p onClick={handelbl} style={{color: bl ? "black" : "grey"}} >bl br ch ck cl cr dr</p>
      <p onClick={handelFl} style={{color: fl ? "black" : "grey"}}  >fl fr gh gl gr kn ld</p>
      <p onClick={handelNg} style={{color: ng ? "black" : "grey"}}   >ng nd nk ph pl pr qu</p>
      <p onClick={handelSc} style={{color: sc ? "black" : "grey"}}  >sc sh sk sl sm sn sp ss st sw</p>
      <p onClick={handelTh} style={{color: th ? "black" : "grey"}}  >th tr tw wh wr</p>
      <p onClick={handelAll} style={{color: all ? "black" : "grey"}}  >all</p>
    </div>
  );
};

export default Setting;
