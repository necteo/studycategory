import RadioGroup from "./radio/RadioGroup";
import Radio from "./radio/Radio";
import "../../css/Question.css";
import { useState } from "react";
import { useEffect } from "react";

const Question = ({
  statement,
  type,
  checkedNum,
  setCheckedNum,
  score,
  setScore,
  pageNum,
  goToScroll,
}) => {
  const options = {
    agree_max: 4,
    agree: 3,
    normal: 2,
    disagree: 1,
    disagree_max: 0,
  };

  // 중복 응답 확인
  const [dupCheck, setDupCheck] = useState({
    isDup: false,
    value: 0,
    anotherValue: 0,
  });

  // 질문페이지 넘어가면 초기화
  useEffect(() => {
    setDupCheck({ isDup: false, value: 0, anotherValue: 0 });
  }, [pageNum]);

  return (
    <div data-v-e858e9fa="" className="question">
      {/* 질문 */}
      <div data-v-e858e9fa="" className="statement">
        <span data-v-e858e9fa="" id="stmt_fwp45lcsuw">
          {statement.statement}
        </span>
      </div>
      {/* 라디오 버튼 */}
      <RadioGroup id={statement.id}>
        <span className="agree">그렇다</span>
        {Object.keys(options).map((option) => (
          <Radio
            id={statement.id}
            value={options[option]}
            type={type}
            reverse={statement.reverse}
            ratio={statement.ratio}
            checkedNum={checkedNum}
            setCheckedNum={setCheckedNum}
            score={score}
            setScore={setScore}
            dupCheck={dupCheck}
            setDupCheck={setDupCheck}
            goToScroll={goToScroll}
            key={option}
          />
        ))}
        <span className="disagree">아니다</span>
      </RadioGroup>
    </div>
  );
};

export default Question;
