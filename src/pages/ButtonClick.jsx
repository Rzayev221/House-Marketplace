import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const [displayed, setDisplayed] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setDisplayed(text);
  };

  return (
    <div>
      <input onChange={handleChange} />

      <h2>Updated: {displayed}</h2>

      <button onClick={handleClick}>Update</button>
    </div>
  );
}
