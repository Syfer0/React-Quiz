import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./Header";
// !https://the-react-quiz-swart.vercel.app/ **DEMO

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});
function App() {
  <QueryClientProvider client={queryClient}>

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
      <Header />
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
          </QueryClientProvider>
}

export default App;
