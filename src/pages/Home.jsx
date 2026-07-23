import { useState, useEffect } from "react";
import { Link } from "react-router";
import PollCard from "../components/PollCard";

function Home() {
  const [polls, setPolls] = useState([]);
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backEnd_Connection = "http://localhost:8080";
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${backEnd_Connection}/polls`);
        if (!response.ok) {
          throw new Error(`Failed to load Polls!`);
        }
        const data = await response.json();
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
      {/* <h1>{polls.title}</h1> */}
      <div>
        {polls.map((poll) => {
          return (
            <div key={poll.id}>
              <Link to={`/poll/${poll.id}`}>
                <PollCard key={poll.id} Poll={poll}/>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
