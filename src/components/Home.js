import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = ({ textInfo, setTextInfo }) => {
  const [capture, setCapture] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Reads the users input text, trim and replace each new line with space, than capture result.
  const handleChange = (e) => {
    let text = e.target.value.trim();
    text = text.replace(/(\r\n|\n|\r)/gm, " ");
    setCapture(text);
  };

  // When submitted if the user had an input text, save captured text to textInfo, then navigate
  const handleSubmit = (e) => {
    setTextInfo(() => {
      if (capture.length > 0) {
        navigate("/read");
        setError(false);
        return capture;
      } else {
        setError(true);
        return;
      }
    });
    e.preventDefault();
  };

  return (
    <div className="home">
        <h1>Digraphs</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="past text here."
          onChange={handleChange}
        ></textarea>
        <div className="submitDiv">
          {/* {error ? (
            <p style={{ color: "#BB5942", fontStyle: "italic" }}>
              {" "}
              Please enter some text
            </p>
          ) : <p></p>} */}
          <p style={{visibility: error ? null: 'hidden', color: "#BB5942", fontStyle: "italic" }}>Please enter some text</p>
          <button  type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
