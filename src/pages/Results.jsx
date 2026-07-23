import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./Results.css"

export default function Results() {
  const [poll, setPoll] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function voteCount() {
      const BACKEND_CONNECTION = "http://localhost:8080";

      const response = await fetch(`${BACKEND_CONNECTION}/polls/${params.id}`);
      const data = await response.json();
      console.log(data);
      setPoll(data);
    }
    voteCount();
  }, []);
  // Response.json should return an object: Poll: {title: "", description: "", options[{text, votes}]}
  // .map through the options, with the text and the votes
  // If there is no poll yet render loading
  if (!poll) return <div>Loading...</div>;

  // const maxVotes = Math.max(...poll.options.map(o => o.votes));
  const maxVotes = poll.options.reduce(
    (sum, option) => option.votes.length + sum,
    0,
  );

  return (
    <div style={
      {backgroundColor: "blue",}
    }>
      <h1>{poll.title}</h1>
      <p>{poll.description}</p>

      {poll.options.map((option) => {
        const percentage = (option.votes.length / maxVotes) * 100;
        console.log(percentage);
        return (
          <div style={{
            justifyItems: "center",
          }} key={option.id} classNAme="voteTally">
            {option.text}: <div
              style={{
                backgroundColor: "#dcdcdc",
                justifyItems: "left",
                width: "50%",
              }}
            >
              <div
                style={{
                  backgroundColor: "green",
                  justifyContent: "left",
                  color: "white",
                  width: `${percentage}%`,
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
