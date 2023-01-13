import "./read.css";
import { useEffect, useState } from "react";
import digraphs from "../Info";
import reactStringReplace from "react-string-replace";
import { useNavigate } from "react-router-dom";
import settingImg from "../images/settings.svg";

const Read = ({
  textInfo,
  setTextInfo,
  settingMenu,
  setSettingMenu,
  checkedBox,
  list,
  setList,
}) => {
  const navigate = useNavigate();
  // Take the data from textInfo than change the color of the digraphs founded in the text.
let cleanText = textInfo



  useEffect(() => {
    const letters = () => {
      let text = cleanText;
      setTextInfo(text);
    };
    letters();
    if (textInfo.length === 0) {
      navigate("/");
    }
  }, []);



  useEffect(() => {
    const handleList = () => {
      setList(() => {
        let current;
        current = checkedBox.join(" ");
        current = current.split(" ");
        if( checkedBox.includes("all")){
          current = [ "bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "kn", "ld","ng", "nd", "nk", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "ss", "st", "sw", "th", "tr", "tw", "wh", "wr"]
        }

        let text = cleanText;
        for (let item of current) {
          text = reactStringReplace(text, `${item}`, (match, i) => (
            <span style={{ color: `${digraphs[item]}`, fontWeight: "bolder" }}>
              {match}
            </span>
          ));
        }

        return text;
      });




    };
    handleList();
  }, [checkedBox]);

  const handleSetting = () => {
    setSettingMenu(!settingMenu);
  };



  return (
    <div className="read">
    <nav>
    <div className="settingIcon" onClick={handleSetting}>
        <img src={settingImg} alt="" />
      </div>

    </nav>

      <div className="text-wrapper"><p className="textInfo">{list.length < 0? textInfo: list}</p></div>
      
    </div>
  );
};

export default Read;
