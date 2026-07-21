import {Link} from "react-router-dom"

function PollCard({poll, toggleStartPoll, pollStarted}) {
   console.log(poll, startPoll); 
   
   const started = pollStarted(poll.id)

   function handleStart(e){
    e.preventDefault();
    startPoll(poll);
   }

    return (
        <Link to={`/polls/${poll.id}`} className="poll-card">
            <h3>{poll.name}</h3>
            <p>{poll.description}</p>
            <button onClick={startPoll} style={{margin: 8}}>
                {started ?  : }
            </button>
        </Link>
    )
}

export default PollCard;