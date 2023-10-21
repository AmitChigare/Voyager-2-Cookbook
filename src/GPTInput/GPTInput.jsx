import React, { useState } from "react";

function GPTInput({ onAskGPT }) {
  const [inputObjective, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputObjective}
        onChange={handleInputChange}
        id="inputField"
        placeholder="Enter some text"
      />
      <button
        id="actionButton"
        onClick={() => {
          onAskGPT(inputObjective);
        }}
        className="my-btn"
      >
        Ask GPT
      </button>
    </div>
  );
}

export default GPTInput;
