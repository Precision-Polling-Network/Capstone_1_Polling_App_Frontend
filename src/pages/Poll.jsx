// import { PollCard } from "../components/PollCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Poll() {
  const [poll, setPoll] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const backEnd_Connection = "http://localhost:8080";
  let params = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${backEnd_Connection}/polls/${params.id}`,
        );
        if (!response.ok) {
          throw new Error(`Failed to load Polls!`);
        }
        const data = await response.json();
        // console.log(data.options);
        setPoll(data);
        console.log(data.options);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const handleSelected = async (optionId) => {
    setSelectedOption(optionId);
    setIsSelected(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedOption) return "Please Select an Option!";
    debugger;

    try {
      const response = await fetch(
        `${backEnd_Connection}/polls/${params.id}/vote`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pollId: poll.id,
            selectedOption: selectedOption,
          }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Vote Successfully Saved!", data);
      }
    } catch (error) {}
  };
  // GET .polls/:id and POST /polls/:id/vote will be here

  console.log(poll.options);
  console.log(selectedOption);
  console.log(isSelected);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>{poll.title}</h1>
        <p>{poll.description}</p>
        <div>
          {poll.options &&
            poll.options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelected(option.id)}
              >
                <p>{option.text}</p>
              </button>
            ))}
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
