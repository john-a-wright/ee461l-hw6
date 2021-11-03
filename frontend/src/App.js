import "./App.css";
import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [output, setOutput] = React.useState("");

  const handleSubmit = () => {
    const url = "/" + name;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((jsondata) => setOutput(jsondata["message"]))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Please enter first name</p>
        <input onChange={(event) => setName(event.target.value)} />
        <button type="button" onClick={handleSubmit}>
          Find last name
        </button>
        <p>{output}</p>
      </header>
    </div>
  );
}

export default App;
