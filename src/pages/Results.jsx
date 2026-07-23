import { useState, useEffect } from "react";
import {useParams} from "react-router";


function Results() {
const [votes, setVotes] = useState(0);
  useEffect(() => {
    async function voteCount() {
        
      
      const BACKEND_CONNECTION = "https://localhost:8080";  
      const response = await fetch(`${BACKEND_CONNECTION}/polls/:id`);
      console.log(response); 
      // response = { title, description, options[{}] : {text, votes}}
      setVotes(response.json);
    }
    voteCount();
  }, []); 
  // Response.json should return an object: Poll: {title: "", description: "", options[{text, votes}]}
  // .map through the options, with the text and the votes

  return (
    <div >{
    votes.map((poll) => {
        <div key={poll.id}>
          {poll.votes}
        </div>
    })     }   
      {/* TODO (Part 3): render the quote's text and author */}
      {/* TODO (Part 3): a link back to the home page */}
    </div>
  );
}

export default Results;
