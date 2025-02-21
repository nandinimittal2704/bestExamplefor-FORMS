import React, { useState } from "react";

function App() {
  const [click, setCliked] = useState("");
  const [name, setName] = useState("");
  const [lname, setlName] = useState("");
  const [fullname, setfullname] = useState("");

  function handleClick(event) {
    event.preventDefault();
    setfullname(name + lname);
  }
  function onchangehandle(event) {
    setName(event.target.value);
  }
  function onchangehandle2(event) {
    setlName(event.target.value);
  }
  return (
    <div className="container">
      <h1>
        Hello {name} {lname}
      </h1>
      <form>
        <input
          onChange={onchangehandle}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={onchangehandle2}
          name="lName"
          placeholder="Last Name"
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
