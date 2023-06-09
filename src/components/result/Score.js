import "../../css/Score.css";

const Score = ({ score, types, maxScore }) => {
  return (
    <div className="score-wrapper">
      {/* 점수그래프 */}
      {Object.keys(score).map((type) => (
        <div className="score" key={type}>
          <div className="percentage-row">
            <div className="percentage">
              {maxScore[type] === 0
                ? null
                : ((score[type]["value"] / maxScore[type]) * 100).toFixed(0)}
              %
            </div>
            <div className="graph">
              <div
                className="score-graph"
                style={{
                  width:
                    maxScore[type] === 0
                      ? null
                      : (score[type]["value"] / maxScore[type]) * 100 * 1.7,
                }}
              />
              <div
                className="score-graph another"
                style={{
                  width:
                    maxScore[type] === 0
                      ? null
                      : (score[type]["anotherValue"] / maxScore[type]) *
                        100 *
                        1.7,
                }}
              />
            </div>
            <div className="percentage another">
              {maxScore[type] === 0
                ? null
                : (
                    (score[type]["anotherValue"] / maxScore[type]) *
                    100
                  ).toFixed(0)}
              %
            </div>
          </div>
          <div className="type-row">
            <div className="type">{types[type][0]}</div>
            <div className="type another">{types[type][1]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Score;
