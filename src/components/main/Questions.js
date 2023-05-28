import Question from "./Question";
import Action from "./Action";
import { useState } from "react";
import "../../css/Questions.css";

const Questions = ({ statements, checkedNum, setCheckedNum }) => {
  // 유형별 점수
  const [score, setScore] = useState({
    positive: { value: 0, anotherValue: 0 },
    systematic: { value: 0, anotherValue: 0 },
    active: { value: 0, anotherValue: 0 },
    holistic: { value: 0, anotherValue: 0 },
  });
  // 전체 질문 컴포넌트
  const [pageNum, setPageNum] = useState(1); // 질문 페이지 번호
  const [location, setLocation] = useState(0);

  const goToScroll = (id) => {
    // 클릭 시 다음 문항으로 이동
    const newLocation =
      location +
      (id % 8 !== 0
        ? document.querySelector("#no" + (id + 1)).offsetTop -
          document.querySelector("#no" + id).offsetTop
        : document.querySelector("button").offsetTop);
    window.scrollTo({ top: newLocation, behavior: "smooth" });
    setLocation(newLocation);
  };

  return (
    <div className="test-questions">
      {Object.keys(statements).map((type) => (
        <div className="question-wrapper" key={type}>
          <Question
            statement={statements[type][(pageNum - 1) * 2]}
            type={type}
            checkedNum={checkedNum}
            setCheckedNum={setCheckedNum}
            score={score}
            setScore={setScore}
            pageNum={pageNum}
            goToScroll={goToScroll}
          />
          <div className="line" />
        </div>
      ))}
      {Object.keys(statements).map((type) => (
        <div className="question-wrapper" key={type}>
          <Question
            statement={statements[type][(pageNum - 1) * 2 + 1]}
            type={type}
            checkedNum={checkedNum}
            setCheckedNum={setCheckedNum}
            score={score}
            setScore={setScore}
            pageNum={pageNum}
            goToScroll={goToScroll}
          />
          <div className="line" />
        </div>
      ))}
      <Action
        statements={statements}
        checkedNum={checkedNum}
        pageNum={pageNum}
        setPageNum={setPageNum}
        score={score}
        setLocation={setLocation}
      />
    </div>
  );
};

export default Questions;
