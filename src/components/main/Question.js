import RadioGroup from "./radio/RadioGroup";
import Radio from "./radio/Radio";

const Question = ({ statement }) => {
  // 질문 하나
  const name = "decision";
  const value = {
    agree_max: 4,
    agree: 3,
    normal: 2,
    disagree: 1,
    disagree_max: 0,
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
        <Radio option={"매우 그렇다"} value={value["agree_max"]} name={name} />
        <Radio option={"그렇다"} value={value["agree"]} name={name} />
        <Radio option={"보통이다"} value={value["normal"]} name={name} />
        <Radio option={"그렇지 않다"} value={value["disagree"]} name={name} />
        <Radio
          option={"매우 그렇지 않다"}
          value={value["disagree_max"]}
          name={name}
        />
      </RadioGroup>
      <div>
        <div data-v-e858e9fa="" className="caption agree"></div>
        <div data-v-e858e9fa="" className="caption disagree"></div>
      </div>
    </div>
  );
};

export default Question;
