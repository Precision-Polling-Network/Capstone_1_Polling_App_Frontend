import { useState, useEffect } from "react";
import {useParams} from "react-router";


function Results() {
const pollObj = {};

  useEffect(() => {
    async function voteCount() {
      const [votes, setVotes] = useState(0);  
      
      const BACKEND_CONNECTION = "https://localhost:8080";  
      const response = await fetch(`${BACKEND_CONNECTION}/polls/:id`);
      let voteCount = pollObj.optionId.  
    }
    voteCount();
  }, []); 
  // Response.json should return an object: Poll: {title: "", description: "", options[{text, votes}]}
  // .map through the options, with the text annd the votes


  return (
    <div >{
    pollObj.map((poll) => {
        <div key={poll.id}>
            
        </div>
    })     }   
      {/* TODO (Part 3): render the quote's text and author */}
      {/* TODO (Part 3): a link back to the home page */}
    </div>
  );
}

export default Results;
