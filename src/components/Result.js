import { useLocation } from "react-router";
import "../css/Result.css";

const Result = () => {
  const location = useLocation();
  const score = location.state.score;
  const type = {
    positive: ["긍정적", "부정적"],
    systematic: ["계획적", "즉흥적"],
    holistic: ["거시적", "미시적"],
  };
  const maxScore = 40;

  // 결과 페이지
  return (
    <div>
      <h1>당신의 결과</h1>
      <div>
        <div>
          {/* 점수그래프 */}
          {Object.keys(score).map((key, id) => (
            <div className="score" key={id}>
              {type[key][0]}
              {((score[key] / maxScore) * 100).toFixed(0)}%
              <div
                className="score-graph"
                style={{ width: (score[key] / maxScore) * 100 }}
              />
              <div
                className="score-graph-another"
                style={{
                  width: ((maxScore - score[key]) / maxScore) * 100,
                }}
              />
              {(((maxScore - score[key]) / maxScore) * 100).toFixed(0)}%
              {type[key][1]}
            </div>
          ))}
        </div>
      </div>
      <div className="descriptions">
        이 유형은 어쩌구 저쩌구
        <br />
        이래서 어떻고 저래서 어떻다 등등
      </div>
    </div>
  );
};

export default Result;
