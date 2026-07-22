// import { PollCard } from "../components/PollCard";
import {useState, useEffect} from "react";
import {useParams} from "react-router";

export default function Poll() {
const [poll, setPoll] = useState({})

const backEnd_Connection = "http://localhost:8080";
let params = useParams()
  useEffect(() => {
    const getData = async () => {
        
      try {
        const response = await fetch(`${backEnd_Connection}/polls/${params.id}`);
        if (!response.ok) {
          throw new Error(`Failed to load Polls!`);
        }
        const data = await response.json();
        console.log(data);
        setPoll(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);


async function castVote() {  
 }
// GET .polls/:id and POST /polls/:id/vote will be here

console.log(poll.options)
return (
    <div>
        <h1>{poll.title}</h1>
        <p>{poll.description}</p>
        <p>{poll.options.map((option) =>{
            <p>{option}</p>
        })}</p>
    </div>
)

}

