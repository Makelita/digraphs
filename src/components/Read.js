import "./read.css"
import { useEffect } from "react"
import digraphs from "../Info"
import reactStringReplace from "react-string-replace"
import { useNavigate } from "react-router-dom";

const Read = ({textInfo, setTextInfo }) => {

    const navigate = useNavigate();
// Take the data from textInfo than change the color of the digraphs founded in the text.
    useEffect (() => {
        const letters = () => {
            let text = textInfo;
        
            for (let item in digraphs) {
                text = reactStringReplace(text, `${item}`, (match, i) => (
                  <span style={{ color: `${digraphs[item]}`, fontWeight:'bolder' }}>{match}</span>
                ));
              }
              setTextInfo(text)
        }

        letters()

        if(textInfo.length===0){
            navigate("/")
        }
    },[])





    return (
        <div className="read">
            <p className="textInfo">{textInfo}</p>
        </div>
    )

}

export default Read