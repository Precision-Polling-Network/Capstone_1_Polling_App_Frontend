import { useState, useEffect } from "react";
import { useParams } from "react-router";

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

  return (
    <div>
      <h1>{poll.title}</h1>
      <p>{poll.description}</p>

      {poll.options.map((option) => (
        <div key={option.id}>
          {option.text}: {option.votes.length} votes!
        </div>
      ))}
    </div>
  );
}
