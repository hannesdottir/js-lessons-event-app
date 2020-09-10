import React from "react";
import "./App.css";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

function App() {
  function login() {
    console.log("login");
  }

  return (
    <div className="App">
      <h1>Lesson 10 - Event App</h1>
      <div>
        <div>
          <label>
            Email <input name="email" placeholder="john.doe@company.com" />
          </label>
        </div>
        <div>
          <label>
            Password <input name="password" type="password" />
          </label>
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
