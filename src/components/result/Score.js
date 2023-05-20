import "../../css/Score.css";

const Score = ({ score }) => {
  const type = {
    positive: ["긍정적 (Positive)", "부정적 (Negative)"],
    systematic: ["계획적 (Systematic)", "즉흥적 (Impromptu)"],
    holistic: ["거시적 (Holistic)", "미시적 (Detailed)"],
  };
  const maxScore = 40;

  return (
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
            <div className="type another">{type[key][1]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Score;
