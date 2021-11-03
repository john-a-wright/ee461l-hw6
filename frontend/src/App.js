import "./App.css";
import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [output, setOutput] = React.useState("");

  const handleSubmit = () => {
    const url = "http://127.0.0.1:5000/" + name;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          setOutput(res);
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Enter first name</p>
        <input onChange={(event) => setName(event.target.value)} />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <p>{output}</p>
      </header>
    </div>
  );
}

export default App;