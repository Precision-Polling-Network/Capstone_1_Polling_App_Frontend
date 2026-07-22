function PollCard({ Poll }) {
   console.log(Poll); 

    return (
        <div>
            <h2>{Poll.title}</h2>
        </div>
    );
}

export default PollCard;