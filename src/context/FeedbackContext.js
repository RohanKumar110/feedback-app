import React, { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const BASE_URL = "http://localhost:5000";

  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
    setIsLoading(false);
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`${BASE_URL}/feedback?sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = 4;
    setFeedback([newFeedback, ...feedback]);
  };

  const updateFeedback = (id, updatedItem) => {
    const updatedFeedback = feedback.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    );
    setFeedback(updatedFeedback);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(newFeedback);
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        addFeedback,
        updateFeedback,
        deleteFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
