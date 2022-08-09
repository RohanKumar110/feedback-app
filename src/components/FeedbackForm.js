import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    const entertedText = e.target.value;
    if (entertedText === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (entertedText !== "" && entertedText.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(entertedText);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            type="text"
            name="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message} </div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
