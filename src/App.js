import React, { useRef } from "react";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

function App() {
  /* const emailInput = useRef(null);
  const passwordInput = useRef(null);
*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    /* const email = emailInput.current.value;
    const password = passwordInput.current.value;
*/
    fetch(LOGIN_URL);
  }

  return (
    <div className="App">
      <h1>Lesson 10 - Event App</h1>
      <div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            placeholder="john.doe@company.com"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
