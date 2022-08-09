import React, { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
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

FeedbackForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default FeedbackForm;
