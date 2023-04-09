import { useLocation } from "react-router";
import "../css/Result.css";

const Result = () => {
  const location = useLocation();
  const score = location.state.score;
  const maxScore = {
    interest: 40,
    positive: 44,
    organized: 36,
    macroscopic: 32,
  };
  const type = {
    interest: ["흥미", "무관심"],
    positive: ["긍정적", "부정적"],
    organized: ["계획적", "즉흥적"],
    macroscopic: ["거시적", "미시적"],
  };

  // 결과 페이지
  return (
    <div>
      <h1>결과</h1>
      <div>
        <div>
          {/* 점수그래프 */}
          {Object.keys(score).map((key) => (
            <div className="score">
              {type[key][0]}
              {((score[key] / maxScore[key]) * 100).toFixed(0)}%
              <div
                className="score-graph"
                style={{ width: (score[key] / maxScore[key]) * 100 }}
              />
              <div
                className="score-graph-another"
                style={{
                  width: ((maxScore[key] - score[key]) / maxScore[key]) * 100,
                }}
              />
              {(((maxScore[key] - score[key]) / maxScore[key]) * 100).toFixed(
                0
              )}
              %{type[key][1]}
            </div>
          ))}
        </div>
      </div>
      <div>sentences</div>
    </div>
  );
};

export default Result;
