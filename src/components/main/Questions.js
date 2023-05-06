import Question from "./Question";
import statements from "../../qt.json";
import Action from "./Action";
import { useState } from "react";
import "../../css/Questions.css";

const Questions = ({ checkedNum, setCheckedNum }) => {
  // 유형별 점수
  const [score, setScore] = useState({
    positive: 0,
    systematic: 0,
    holistic: 0,
  });
  // 전체 질문 컴포넌트
  const [pageNum, setPageNum] = useState(1); // 질문 페이지 번호

  return (
    <div className="test-questions">
      {statements.statements[pageNum - 1].map((statement, id) => (
        <Question
          statement={statement}
          checkedNum={checkedNum}
          setCheckedNum={setCheckedNum}
          score={score}
          setScore={setScore}
          pageNum={pageNum}
          key={id}
        />
      ))}
      <Action
        statements={statements.statements}
        checkedNum={checkedNum}
        pageNum={pageNum}
        setPageNum={setPageNum}
        score={score}
      />
    </div>
  );
};

export default Questions;
