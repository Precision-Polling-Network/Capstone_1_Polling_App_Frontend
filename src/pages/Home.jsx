import { useState, useEffect } from "react";
import { Link } from "react-router";
import PollCard from "../components/PollCard";

function Home() {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backEnd_Connection = "http://localhost:8080";

  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem("loginToken");
          console.log("TOKEN FROM LOCALSTORAGE:", localStorage.getItem("loginToken"));

        if (!token) {
          setError("No login token found");
          setLoading(false);
          return;
        }

        const response = await fetch(`${backEnd_Connection}/polls`, { headers: {"x-login-token": token}})

        if (!response.ok) {
          throw new Error("Failed to load Polls!");
        }

        console.log("RESPONSE STATUS:", response.status);
const data = await response.json();
console.log("DATA FROM BACKEND:", data);

        setPolls(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>Loading Polls...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {polls.map((poll) => (
        <div key={poll.id}>
          <Link to={`/polls/${poll.id}`}>
            <PollCard Poll={poll} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
