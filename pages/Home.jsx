import { useState, useEffect } from "react";
// import PollCard from "../components/PollCard";

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
        //    const response = await fetch(`${backEnd_Connection}/polls`);
        setPolls(props.pollList);
        //    if(!response){
        //     setPolls(props.pollList)
        //     // throw new Error(`Failed to load Polls!`);
        //    }
        //    const data = await response.json();
        //    setPolls(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadPollTitles();

    console.log(polls);
  }, []);

  async function createPoll(event) {
    e
    vent.preventDefault();
    try {
      const response = await fetch(`${API_URL}/polls`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title: name, description: description, options: options }),
      });
      const newPoll = await response.json();
      setPolls([...polls, newPoll]);
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setquestions("");
      setOptions("");
    }
  }


  //   if (loading){
  //     return <p style={{padding: 16}}>Loading Polls...</p>;
  //   }

  //   if (error){
  //     return <p style= {{padding: 16}}>Error: {error}</p>;
  //   }

  // <PollDetails key={poll.id}></PollDetail>
  return (
    <div>
      <h1>Poll App</h1>
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
