import {useState, useEffect} from 'react'

// import MovieCard from "../components/MovieCard";



function Home(){
const [polls, setPolls] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const backEnd_Connection = "https://localhost:8080"
 useEffect(() => {
  async function loadPollTitles(){
    try{
       const response = await fetch(`${backEnd_Connection}/polls`);
       
       if(!response){
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
    loadPolls()
  }, []);

  if (loading){
    return <p style={{padding: 16}}>Loading Polls...</p>;
  }

  if (error){
    return <p style= {{padding: 16}}>Error: {error}</p>;
  }

  return 
  (
        <div>
            <h1>Poll App</h1>
            <div>
                {
                    polls.map((poll) => {
                        <PollDetails key={poll.id}></PollDetails>
                    })
                }
            </div>
        </div>

    )
}

export default Home;

