import "../styles/PollCard.css";
import "../styles/NavBar.css";

function PollCard({ Poll }) {
   console.log(Poll); 

    return (
        <div className = "poll-card">
            <div className = "poll-card-header">
            <h2>{Poll.title}</h2>
            </div>
        </div>
    );
}

export default PollCard;