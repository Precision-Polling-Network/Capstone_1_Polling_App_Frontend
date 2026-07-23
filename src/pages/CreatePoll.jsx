import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CreatePoll(event){
  event.preventDefault;
  
  const [poll, setPolls] = useState([]);
  const [description, setDescription] = useState([]);
  const [option, setOption] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:8080";
  useEffect(async ()=> {
   try {
      const response = await fetch(`${API_URL}/polls`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title: name, description: description}),
      });
      const newPoll = await response.json();
      setPoll([...poll, newPoll]);
    } 
      catch (error) {
      console.log(error);
    } 
      finally {
      setPoll("");
      setDescription("");
      setOption("");
    }
  },[])
  return (
    <div>
      <h1>Create a Poll</h1>

    </div>
  )
}