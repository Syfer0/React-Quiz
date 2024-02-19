import React, { useEffect, useState } from "react";

function UserList() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const FeatchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/questions");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("error in feaching data,", error);
      }
    };
    FeatchData();
  });
  return (
    <div className="app">
      <div>
        <h1>List of Questions</h1>
        <ul>
          {questions.map((question) => (
            <li key={question.id}>
              <h3>{question.question}</h3>
              <p>Options:</p>
              <ul>
                {question.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserList;
