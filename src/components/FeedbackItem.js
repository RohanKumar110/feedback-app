import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ item, handleDelete }) {
  const handleDeleteClick = (id) => {
    handleDelete(id);
  };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDeleteClick(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text} </div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default FeedbackItem;
