import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const API_URL = "http://localhost:8080";
  const navigate = useNavigate();

  async function handleCreateUser(e){
    e.preventDefault();
    if(!userName || !email || !password){                                // Check if any fields are not there
        console.log("All fields are necessary to create a new user!!!"); // If this is true log message
        return;                                                          // and return to the            
    }
    try {
        const response = await fetch(`${API_URL}/auth/signup`, {
            method: "POST",
            headers: {"Content-type": "application/json",
            },
            body: JSON.stringify({userName, email, password}),
        });
        
        const data = await response.json();
        if(!response.ok){
            setMessage(data);
            return;
        }

        setMessage("User created successfully!!!", data);
        setMessage("Now use the submit button log in!!!");
    }catch(error){
        setMessage("Network Error", error);
    }
  

}

 const handleLogin = async (e) => {
  e.preventDefault();

  if (loginInProgress) return;
  setLoginInProgress(true);

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json",
    },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    localStorage.setItem("loginToken", data.loginToken);

    if (!response.ok) {
        setMessage(data);
        return;
      }
      setIsLoggedIn(true); //after user is logged in change isLoggedIn to true 
      navigate("/home");

    setMessage("Login successful!");
    navigate("/home");
    } catch (err) {
    console.error(err);
    setMessage("Login failed");
  }

  // ⭐ Allow future logins
  setLoginInProgress(false);
};


  return (
    <div>
  <h1 style={
    {"color": "#ee7f09"}
  }>Welcome To POLLar Opposites</h1>
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

  <button onClick={(e) => handleCreateUser(e)}>Create New User</button>
  {message && <p>{message}</p>}

  <button onClick={(e) => handleLogin(e)}>Submit</button>
</div>

  );
}

export default Login;