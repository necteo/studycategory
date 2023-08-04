import { useLocation } from "react-router";
import results from "../../assets/strings/results.json";
import "../../css/Descriptions.css";
import { useState } from "react";

const Descriptions = () => {
  const [more, setMore] = useState({
    positive: false,
    systematic: false,
    active: false,
    holistic: false,
  });

  const location = useLocation();
  const studyType = location.state.studyType;
  const score = location.state.score;
  const maxScore = location.state.maxScore;

  const setMoreOnClick = (type) => {
    const newMore = { ...more };
    newMore[type] = !more[type];
    setMore(newMore);
  };

  return (
    <div className="descriptions">
      <div className="advice">
        <div>
          <span
            style={{ fontSize: "26px", color: results.types[studyType]?.color }}
          >
            {results.types[studyType]?.name}
          </span>{" "}
          유형은
        </div>
        {studyType === "PSAH" ? (
          <div>
            <div>이미 우수한 성적을 보일 가능성이 높은 유형입니다.</div>
            <div>
              현재의 사고와 태도를 유지한다면, 지속적으로 우수한 성적을 기대할
              수 있습니다.
            </div>
          </div>
        ) : (
          <div>
            <div>
              {studyType[0] === "N" ? (
                <span style={{ fontSize: "19px", color: "#2d40a2" }}>
                  긍정적인 사고
                </span>
              ) : null}
              {studyType[0] === "N" && studyType[1] === "I" ? ", " : null}
              {studyType[1] === "I" ? (
                <span style={{ fontSize: "19px", color: "#d94723" }}>
                  계획성
                </span>
              ) : null}
              {studyType[0] === "N" ||
              (studyType[1] === "I" && studyType[2] === "P")
                ? ", "
                : null}
              {studyType[2] === "P" ? (
                <span style={{ fontSize: "19px", color: "#ce9d00" }}>
                  주도적인 태도
                </span>
              ) : null}
              {studyType[0] === "N" ||
              studyType[1] === "I" ||
              (studyType[2] === "P" && studyType[3] === "D")
                ? ", "
                : null}
              {studyType[3] === "D" ? (
                <span style={{ fontSize: "19px", color: "#007b6b" }}>
                  거시적인 시야
                </span>
              ) : null}
              까지
            </div>
            <div>갖춘다면, 더욱 우수한 성적을 기대할 수 있습니다.</div>
          </div>
        )}
      </div>
      {Object.keys(results.descriptions).map((type) => (
        <div className="description" key={type}>
          {score[type]["value"] === maxScore[type]
            ? results.descriptions[type]["main"][4]
            : results.descriptions[type]["main"][
                parseInt(
                  ((score[type]["value"] / maxScore[type]) * 100).toFixed(0) /
                    20
                )
              ]}
          <h2></h2>
          {more[type] === true
            ? score[type]["value"] === maxScore[type]
              ? results.descriptions[type]["details"][4].map((sentence) => (
                  <div>
                    <div>{sentence}</div>
                    <h2></h2>
                  </div>
                ))
              : results.descriptions[type]["details"][
                  parseInt(
                    ((score[type]["value"] / maxScore[type]) * 100).toFixed(0) /
                      20
                  )
                ].map((sentence) => (
                  <div>
                    <div>{sentence}</div>
                    <h2></h2>
                  </div>
                ))
            : null}
          <button onClick={() => setMoreOnClick(type)}>
            {more[type] === false ? "더보기" : "접기"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Descriptions;
