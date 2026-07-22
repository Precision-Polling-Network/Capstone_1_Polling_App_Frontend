async function CreatePoll(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/polls`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title: name, description: description, options: options }),
      });
      const newPoll = await response.json();
      setPolls([...polls, newPoll]);
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setquestions("");
      setOptions("");
    }
  }
