import RadioGroup from "./radio/RadioGroup";
import Radio from "./radio/Radio";

const Question = ({ statement, score, setScore }) => {
  // 질문 하나
  const name = "decision";
  const option = {
    agree_max: ["매우 그렇다", 4],
    agree: ["그렇다", 3],
    normal: ["보통이다", 2],
    disagree: ["그렇지 않다", 1],
    disagree_max: ["매우 그렇지 않다", 0],
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
        {Object.keys(option).map((key) => (
          <Radio
            option={option[key][0]}
            value={option[key][1]}
            name={name}
            type={statement.type}
            score={score}
            setScore={setScore}
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
