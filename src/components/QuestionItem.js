import React from "react";

function QuestionItem({ question, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteQuestion() {
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => onDeleteQuestion(question) )
  }

  function handleSelectedAnswer(e) {
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        "correctIndex": e.target.value
      })
    })
    .then(r => r.json())
    .then((updatedQuestion => console.log(updatedQuestion)))

  }




  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleSelectedAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
