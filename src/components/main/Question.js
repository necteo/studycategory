import RadioGroup from "./radio/RadioGroup";
import Radio from "./radio/Radio";
import "../../css/Question.css";
import { useState } from "react";
import { useEffect } from "react";

const Question = ({
  statement,
  checkedNum,
  setCheckedNum,
  score,
  setScore,
  pageNum,
}) => {
  // 중복 응답 확인
  const [dupCheck, setDupCheck] = useState({ isDup: false, value: 0 });
  // 질문페이지 넘어가면 초기화
  useEffect(() => {
    setDupCheck({ isDup: false, value: 0 });
  }, [pageNum]);
  // 질문 하나
  const name = "decision";
  // const option = {
  //   agree_max: ["매우 그렇다", 4],
  //   agree: ["그렇다", 3],
  //   normal: ["보통이다", 2],
  //   disagree: ["그렇지 않다", 1],
  //   disagree_max: ["매우 그렇지 않다", 0],
  // };
  const options = {
    agree_max: ["그렇다", 4],
    agree: ["", 3],
    normal: ["", 2],
    disagree: ["", 1],
    disagree_max: ["아니다", 0],
  };

  return (
    <div data-v-e858e9fa="" className="question">
      {/* 질문 */}
      <div data-v-e858e9fa="" className="statement">
        <span data-v-e858e9fa="" id="stmt_fwp45lcsuw">
          {statement.statement}
        </span>
      </div>
      {/* 라디오 버튼 */}
      <RadioGroup>
        {Object.keys(options).map((key) => (
          <Radio
            option={options[key][0]}
            value={options[key][1]}
            name={name}
            type={statement.type}
            checkedNum={checkedNum}
            setCheckedNum={setCheckedNum}
            score={score}
            setScore={setScore}
            dupCheck={dupCheck}
            setDupCheck={setDupCheck}
            key={key}
          />
        ))}
      </RadioGroup>
      <div>
        <div data-v-e858e9fa="" className="caption agree"></div>
        <div data-v-e858e9fa="" className="caption disagree"></div>
      </div>
    </div>
  );
};

export default Question;
