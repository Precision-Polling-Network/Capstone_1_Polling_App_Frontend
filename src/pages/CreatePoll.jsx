import { useState, useEffect } from "react";
import PollCard from "../components/PollCard";
import { useNavigate } from "react-router-dom";

export default function CreatePoll() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState([{ text: "" }]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const API_URL = "http://localhost:8080";

  async function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    console.log("Submit form", title, description, options);
    try {
      if (title && description && options) {
        const response = await fetch(`${API_URL}/polls`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            options,
          }),
        });

        const poll = await response.json();
        console.log(response);
        console.log(poll);
        return navigate(`/poll/${poll.id}`);
      } else {
        console.log("something is empty!!!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTitle("");
      setDescription("");
      setOptions([""]);
    }
  }

  function changeOption(e, index) {
    const newOptions = [...options];
    newOptions[index].text = e.target.value;

    setOptions(newOptions);
  }

  function addOptionField() {
    setOptions([...options, { text: "" }]);
  }

  return (
    <div>
      <h1>Create a Poll</h1>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Add title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Add description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        {options.map((option, idx) => (
          <div key={idx}>
            <input
              type="text"
              placeholder="Create option"
              value={option.text}
              name={`option-${idx}`}
              onChange={(e) => changeOption(e, idx)}
            />
            <br />
          </div>
        ))}
        <br />
        <div>
          <input type="button" onClick={addOptionField} value="add option" />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!title || !description || !options}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
