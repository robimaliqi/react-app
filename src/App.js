import "./App.css";
import React from "react";

const App = () => {
  const [name, setName] = React.useState();

  const [error, setError] = React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    setName(username);

    if (username === "") setError("Do not leave field empty");
  };

  console.log(name);

  return (
    <div className="App">
      Hello {name}
      <form onSubmit={handleSubmit}>
        <input name="username"></input>
        <button>Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
