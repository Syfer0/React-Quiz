import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchQuestions = async () => {
  const response = await axios.get("http://localhost:5000/questions");
  return response.data; // Assuming the API response contains a "questions" property
};

const DisplayPosts = () => {
  const { data, error, isLoading } = useQuery("quizQuestions", fetchQuestions);

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  // Handle potential missing "questions" property:
  if (!data || !data.question) {
    return <div>No questions found.</div>;
  }

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {data.questions.map((question) => (
          <li key={question.id}>
            <h3>{question.question}</h3>
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayPosts;
