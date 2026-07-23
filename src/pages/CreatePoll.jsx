import { useState, useEffect } from "react";
import PollCard from "../components/PollCard";
import { useNavigate } from "react-router-dom";

export default function CreatePoll() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState([{text: "", id: 1}]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const API_URL = "http://localhost:8080";
  // useEffect(async ()=> {
  //  try {
  //     const response = await fetch(`${API_URL}/polls`, {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify({ title, description, options }),
  //     });
  //     console.log(response)
  //     const newPoll = await response.json();
  //     setPoll([...poll, newPoll]);
  //   }
  //     catch (error) {
  //     console.log(error);
  //   }
  //     finally {
  //     setTitle("");
  //     setDescription("");
  //     setOptions("");
  //   }
  // },[])
  async function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    console.log("Submit form", title, description, options);
    try {
      if(title,description,options){
      const response = await fetch(`${API_URL}/polls`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, description, options: [{text:options}] }),
      });

      const poll = await response.json();
      console.log(response);
      console.log(poll);
    }
    else{
      console.log("something is empty!!!")
    }
      // return navigate(`/poll/${poll.id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setTitle("");
      setDescription("");
      setOptions([{text:""}]);
    }
  }

  function addOption(e){
    e.preventDefault()
    setOptions([...options, {text:"", id: options[options.length-1].id+1}])
    console.log(options)
  }

  function updateOptionText(optionId, text){
    let found = options.findIndex((option) => option.id === optionId )
    console.log(found)
  }
  return (
    <div>
      <h1>Create a Poll</h1>
      <form >
        <input
          type="Title"
          placeholder="Add title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <input
          type="Description"
          placeholder="Add description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        {options.map((option) => 
        <div key={option.id}>
          <input
            type="Option"
            placeholder="Create option"
            value={option.text}
            onChange={(event) => updateOptionText(option.id, event.target.value)}
          />
          <br />
          </ div>
        )}
        <br />
        <button onClick={addOption}>Add option</button>

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
