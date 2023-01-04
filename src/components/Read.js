import "./read.css";
import { useEffect, useState } from "react";
import digraphs from "../Info";
import reactStringReplace from "react-string-replace";
import { useNavigate } from "react-router-dom";
import Setting from "./Setting";
import settingImg from "../images/settings.svg";

const Read = ({ textInfo, setTextInfo, settingMenu, setSettingMenu, checkedBox}) => {
 

  const navigate = useNavigate();
  // Take the data from textInfo than change the color of the digraphs founded in the text.

  let reading = checkedBox.join(" ")
  


  useEffect(() => {

    const letters = () => {
      let text = textInfo;

      if(reading.includes("all") ){ 
        for (let item in digraphs) {
            text = reactStringReplace(text, `${item}`, (match, i) => (
              <span style={{ color: `${digraphs[item]}`, fontWeight: "bolder" }}>
                {match}
              </span>
            ));
          }
      } 

      setTextInfo(text);
    };

    letters();

    if (textInfo.length === 0) {
      navigate("/");
    }
  },[checkedBox]);




  const handleSetting = ( ) => {
    setSettingMenu(!settingMenu)
    
  }
  



  return (
    <div className="read">
      <div className="settingIcon" onClick={handleSetting}>
        <img src={settingImg} alt="" />
      </div>
      <p className="textInfo">{textInfo}</p>
    </div>
  );
};

export default Read;
