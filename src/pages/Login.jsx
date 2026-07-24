import { useState, useEffect } from "react";
import { useNAvigate } from "react-router-dom";

export default function Login(){
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const API_URL = "http://localhost:8080";

async function handleSubmit(e){
   e.preventDefault();
   try{
      if(!(userName && email && password)){
      console.log("something is empty!!!");      
      }

   }

    return (
        <>
        
        </>
    )
}
