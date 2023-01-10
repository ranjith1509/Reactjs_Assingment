import React, { useState } from "react";
import "./App.css";
const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
function App() {
  const [text, setText] = useState(" ");
  const [input, userInput] = useState(text);
  const [list, setList] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    userInput(text);
  };

  const handleUserList = () => {
    let check = user_list.map((e) => <p>{e}</p>);
    setList(check);
  };

  return (
    <div className="app">
      <h1>{input}</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="enter your text"
      />
      <button onClick={handleClick}>Send</button>
      <button onClick={handleUserList}>@</button>
      {list}
    </div>
  );
}

export default App;
