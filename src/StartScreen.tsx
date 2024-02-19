function StartScreen() {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3> questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => ({ type: "start" })}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;