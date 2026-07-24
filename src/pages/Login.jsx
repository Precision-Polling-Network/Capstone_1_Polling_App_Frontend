import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = "http://localhost:8080";
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userName || !email || !password) {
      console.log("Something is empty!!!");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log("Login response:", data);

      // navigate("/dashboard");  // optional redirect
    } catch (error) {
      console.log("Login error:", error);
    }
  }

  return (
    <div>
      <h1>Welcome To the Precision Polling Network</h1>
      <h2>Where we handle all of your polling needs</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Add Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Add Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit" disabled={!userName || !email || !password}>
          Submit
        </button>
      </form>
    </div>
  );
}
