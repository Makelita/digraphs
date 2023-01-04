import React from "react";
import "./setting.css";
import { useState,} from "react";

const Setting = ({ settingMenu, checkedBox, setCheckedBox }) => {


  const handelClick = (e) => {
  // console.log(e.target.textContent)


  setCheckedBox( () =>{
    if(!checkedBox.includes(e.target.textContent) ){
      let result = [...checkedBox, e.target.textContent]
      return result
    } else{
     let result = checkedBox.filter(str => str !== e.target.textContent)
     return result
    }
  })

  }

 const hello = checkedBox.join(" ")



  return (
    <div className={ settingMenu ? " setting settingView" : "setting"}>
      <p onClick={handelClick} style={{color:hello.includes("bl")? "black" : "grey"}} >bl br ch ck cl cr dr</p>
      <p onClick={handelClick} style={{color:hello.includes("fl")? "black" : "grey"}}  >fl fr gh gl gr kn ld</p>
      <p onClick={handelClick} style={{color:hello.includes("ng")? "black" : "grey"}}   >ng nd nk ph pl pr qu</p>
      <p onClick={handelClick} style={{color:hello.includes("sc")? "black" : "grey"}}  >sc sh sk sl sm sn sp ss st sw</p>
      <p onClick={handelClick} style={{color:hello.includes("th")? "black" : "grey"}}  >th tr tw wh wr</p>
      <p onClick={handelClick} style={{color:hello.includes("all")? "black" : "grey"}}  >all</p>
    </div>
  );
};

export default Setting;
