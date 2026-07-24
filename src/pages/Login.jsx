import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = "http://localhost:8080";
  const navigate = useNavigate();

  async function handleCreateUser(){
    if(!userName || !email || !password){                                // Check if any fields are not there
        console.log("All fields are necessary to create a new user!!!"); // If this is true log message
        return;                                                          // and return to the            
    }
    try {
        const response = await fetch(`${API_URL}/auth/signup`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({userName, email, password}),
        });
        const data = await response.json();

        if(!response.ok){
            console.log("There was a Signup error!!!");
            return;
        }

        console.log("User created successfully!!!", data);
        console.log("Now use the same information to log in with!!!");
    }catch(error){
        console.log("Network Error", error);
    }
  

}

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        return;
      }

      navigate("/home");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
  <h1>Welcome To the Precision Polling Network</h1>
  <h2>Where we handle all of your polling needs</h2>

  <input
    type="text"
    placeholder="Add Username"
    value={userName}
    onChange={(e) => setUserName(e.target.value)}
  />

  <input
    type="email"
    placeholder="Add Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    type="password"
    placeholder="Create Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <button onClick={handleCreateUser}>Create New User</button>

  <button onClick={handleLogin}>Submit</button>
</div>

  );
}