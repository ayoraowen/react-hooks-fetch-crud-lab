import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questionsData, setQuestionsData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(questions => setQuestionsData(questions))
  }, [])

  function handleDeleteQuestion(deletedQuestion) {
    console.log("In QuestionList", deletedQuestion)
    const updatedQuestions = questionsData.filter((eachQuestion) => eachQuestion.id!==deletedQuestion.id)
    setQuestionsData(updatedQuestions)

  }





  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsData.map(eachQuestion => <QuestionItem key={eachQuestion.id} question={eachQuestion} onDeleteQuestion={handleDeleteQuestion}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
