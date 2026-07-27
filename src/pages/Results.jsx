import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../styles/Results.css"

export default function Results() {
  const [poll, setPoll] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function voteCount() {
      const BACKEND_CONNECTION = "http://localhost:8080";

      const response = await fetch(`${BACKEND_CONNECTION}/polls/${params.id}`,{
        headers: {
          "Content-Type": "application/json",
          "x-login-token": localStorage.getItem("loginToken")
        }
      }
      );
      const data = await response.json();
      console.log(data);
      setPoll(data);
    }
    voteCount();
  }, []);
  // Response.json should return an object: Poll: {title: "", description: "", options[{text, votes}]}
  // .map through the options, with the text and the votes
  
  // Assign a class to the body of the results page only when the page is open and removes the class when the page is closed.  
  useEffect(() => {
    document.body.classList.add("results-mode");
    return () => {
      document.body.classList.remove("results-mode");
    };
  }, []);
  
  // If there is no poll yet render loading
  if (!poll) return <div>Loading...</div>;


  // const maxVotes = Math.max(...poll.options.map(o => o.votes));
  const maxVotes = poll.options.reduce((sum, option) => option.votes.length + sum,0,);

  return (
    <div className= "full-page">
      <h1>{poll.title}</h1>
      <p>{poll.description}</p>

      {poll.options.map((option) => {
        const percentage = (option.votes.length / maxVotes) * 100;
        console.log(percentage);
        return (
          <div key={option.id} className="results-page">
            {option.text}: <div
              style={{
                backgroundColor: "#dcdcdc",
                width: "50%",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  backgroundColor: "green",
                  color: "white",
                  width: `${percentage}%`,
                  maxWidth: "100%",
                }}
              >
                
                  {option.votes.length} of {maxVotes} votes!</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
