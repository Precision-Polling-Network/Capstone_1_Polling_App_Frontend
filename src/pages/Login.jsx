import { useState, useEffect } from "react";
import { useNAvigate } from "react-router-dom";

export default function Login(){
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [accountInformation, setAccountInformation] = useState({});

const API_URL = "http://localhost:8080";

async function handleSubmit(e){
   e.preventDefault();
   try{
      if(!(userName && email && password)){
      console.log("something is empty!!!");      
      }
       const response = await fetch(
        `${backEnd_Connection}/polls/${params.id}/vote`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            accountInformationId: accountInformation.id,
            userName: userName,
            email: email,
            password: password,
          }),  
        })
    } catch(error){
        console.log(error)
    } finally{
        setUserName(userName);
        setEmail(email);
        setPassword(password);
        setAccountInformation({userName: userName, email: email, password: password});
    }
    }

    return (
        <div>

        <h1>Welcome To the Precision Polling Network</h1>
        <h2>Where we handle all of your polling needs</h2>
      <form>
        <input
           type="text"
           name="userName"
           placeholder="Add Username"
           value={userName}
           onChange={(event) => setUserName(event.target.value)}
           />
        <br />
        <input
           type="text"
           name="email"
           placeholder="Add email"
           value={email}
           onChange={(event) => setEmail(event.target.value)}
           />
        <br />
        <input
           type="text"
              placeholder="Create Password"
              value={password.text}
              name={password}
              onChange={(event) => changePassword(event.target.value)}
            />
            <br />
        <br />
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!userName || !email || !password}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
