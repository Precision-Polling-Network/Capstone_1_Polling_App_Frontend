import { useState, useEffect } from "react";
import {Link} from "react-router"
import PollCard from "../components/PollCard";


function Home(props) {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState("");  
  const [options, setOptions] = useState("");

  const backEnd_Connection = "https://localhost:8080";
  useEffect(() => {
    async function loadPollTitles() {
      try {
            const response = await fetch(`${backEnd_Connection}/polls`);
        
            if(!response){
             setPolls(props.pollCard)
             throw new Error(`Failed to load Polls!`);
           }
            const data = await response.json();
            setPolls(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadPollTitles();

    console.log(params.polls);
  }, []);


     if (loading){
       return <p style={{padding: 16}}>Loading Polls...</p>;
     }

     if (error){
       return <p style= {{padding: 16}}>Error: {error}</p>;
     }

   
  return (
    <div>
      <h1 div={polls.id}></h1>
      <div>
        {polls.map((poll) => (
          <div key={poll.id}>
            {poll.title}
            <div key={poll.id}>{poll.description}</div> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
