import Question from "./Question";
import statements from "../../qt.json";
import Action from "./Action";
import { useState } from "react";

const Questions = ({ score, setScore }) => {
  // 전체 질문 컴포넌트
  const [pageNum, setPageNum] = useState(0); // 질문 페이지 번호

  return (
    <div className="test-questions comp">
      {statements.statements[pageNum].map((statement, id) => (
        <Question
          statement={statement}
          key={id}
          score={score}
          setScore={setScore}
        />
      ))}
      <Action pageNum={pageNum} setPageNum={setPageNum} score={score} />
    </div>
  );
};

export default Questions;
