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

  const goToScroll = (id) => {
    // 클릭 시 다음 문항으로 이동
    const location =
      id % 4 !== 0
        ? (document.querySelector("#no" + (id + 1)).offsetTop -
            document.querySelector("#no" + id).offsetTop) *
          (id % 4)
        : document.querySelector("button").offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  return (
    <div className="test-questions">
      {statements.statements[pageNum - 1].map((statement) => (
        <Question
          id={statement.id}
          statement={statement}
          checkedNum={checkedNum}
          setCheckedNum={setCheckedNum}
          score={score}
          setScore={setScore}
          pageNum={pageNum}
          goToScroll={goToScroll}
          key={statement.id}
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
