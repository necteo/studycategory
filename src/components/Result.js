import { useLocation } from "react-router";
import "../css/Result.css";
import results from "../assets/strings/results.json";
import double_quotation_mark from "../assets/icon/double_quotation_mark.png";
import result_type_psh from "../assets/icon/result_type_psh.png";

const Result = () => {
  const location = useLocation();
  const score = location.state.score;
  const type = {
    positive: ["긍정적 (Positive)", "부정적 (Negative)"],
    systematic: ["계획적 (Systematic)", "즉흥적 (Impromptu)"],
    holistic: ["거시적 (Holistic)", "미시적 (Detailed)"],
  };
  const maxScore = 40;

  // 결과 페이지
  return (
    <div className="result">
      <section className="header">
        <div className="top">
          <img src={double_quotation_mark} alt='"' />
          <img className="result-type" src={result_type_psh} alt="type_psh" />
        </div>
        <div className="name">{results.types.PSH.name}</div>
        <div className="bottom">
          <img src={double_quotation_mark} alt='"' />
        </div>
      </section>
      <div className="score-wrapper">
        {/* 점수그래프 */}
        {Object.keys(score).map((key) => (
          <div className="score" key={key}>
            <div className="percentage-row">
              <div className="percentage">
                {((score[key] / maxScore) * 100).toFixed(0)}%
              </div>
              <div className="graph">
                <div
                  className="score-graph"
                  style={{ width: (score[key] / maxScore) * 100 * 1.7 }}
                />
                <div
                  className="score-graph another"
                  style={{
                    width: ((maxScore - score[key]) / maxScore) * 100 * 1.7,
                  }}
                />
              </div>
              <div className="percentage another">
                {(((maxScore - score[key]) / maxScore) * 100).toFixed(0)}%
              </div>
            </div>
            <div className="type-row">
              <div className="type">{type[key][0]}</div>
              <div className="type">{type[key][1]}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="descriptions">
        <div className="description">{results.types.PSH.description}</div>
        <div className="ps">{results.types.PSH.ps}</div>
      </div>
    </div>
  );
};

export default Result;
