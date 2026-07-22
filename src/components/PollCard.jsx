function PollCard({ Poll }) {
   console.log(Poll); 

    return (
        <div>
            <h2>{Poll.title}</h2>
            {/* <p>{Poll.description}</p> */} 
        </div>
    );
}

export default PollCard;
//the issue with putting description here is that Home.jsx would turn it into a Link