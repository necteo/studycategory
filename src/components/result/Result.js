import { useLocation, useNavigate } from "react-router";
import ResultHeader from "./ResultHeader";
import Score from "./Score";
import "../../css/Result.css";
import results from "../../assets/strings/results.json";
import { useEffect, useMemo } from "react";
import { useState } from "react";

const Result = () => {
  const types = useMemo(() => {
    return {
      positive: ["긍정적 (Positive)", "부정적 (Negative)", "본질, 동기부여"],
      systematic: [
        "계획적 (Systematic)",
        "즉흥적 (Impromptu)",
        "계획성, 전술적 접근",
      ],
      active: ["능동적 (Active)", "수동적 (Passive)", "실행력"],
      holistic: ["거시적 (Holistic)", "미시적 (Detailed)", "전략적 사고"],
    };
  }, []);
  const maxScore = useMemo(() => {
    return {
      positive: 0,
      systematic: 0,
      active: 0,
      holistic: 0,
    };
  }, []);

  const location = useLocation();
  const score = location.state.score;
  const [studyType, setStudyType] = useState("");

  useEffect(() => {
    Object.keys(types).map(
      (type) =>
        (maxScore[type] = score[type]["value"] + score[type]["anotherValue"])
    );
    var typeString = "";
    Object.keys(types).map(
      (type) =>
        (typeString =
          typeString +
          (score[type]["value"] >= score[type]["anotherValue"]
            ? types[type][0][5]
            : types[type][1][5]))
    );
    setStudyType(typeString);
    console.log(maxScore);
  }, [types, maxScore, score]);

  const navigate = useNavigate();

  const more = () => {
    navigate("/result/more", {
      state: {
        studyType: studyType,
        score: { ...score },
        maxScore: maxScore,
      },
    });
  };

  // 결과 페이지
  return (
    <div className="result">
      <ResultHeader studyType={studyType} results={results} />
      <Score score={score} types={types} maxScore={maxScore} />
      <div className="people-wrapper">
        <h4>유사 유형의 유명인</h4>
        <div className="people">
          {results.types[studyType]?.people.map((person) => (
            <div className="person">
              <div className="name">{person.name}</div>
              <div className="tag">{person.tag}</div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={more}>
        <span>'{studyType}' 유형인 나,</span>
        <span style={{ fontSize: "12px" }}>성적을 더 올리고 싶다면?</span>
      </button>
    </div>
  );
};

export default Result;
