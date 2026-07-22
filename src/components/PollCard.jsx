function PollCard({ Poll }) {
   console.log(Poll); 

    return (
        <div>
            <h2>{Poll.title}</h2>
            <h3>{Poll.description}</h3>
        </div>
    );
}

export default PollCard;