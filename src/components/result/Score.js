import "../../css/Score.css";

const Score = ({ score, types, maxScore }) => {
  return (
    <div className="score-wrapper">
      {/* 점수그래프 */}
      {Object.keys(score).map((type) => (
        <div className="score" key={type}>
          <div className="type-tag">{types[type][4]}</div>
          <div className="percentage-row">
            <div className="type-row">
              <div className="type">{types[type][0]}</div>
              <div className="type english">{types[type][1]}</div>
            </div>
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
                      : (score[type]["value"] / maxScore[type]) * 100 * 1.9,
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
                        1.9,
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
            <div className="type-row">
              <div className="type another">{types[type][2]}</div>
              <div className="type another english">{types[type][3]}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Score;
