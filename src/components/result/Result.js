import { useLocation } from "react-router";
import ResultHeader from "./ResultHeader";
import Score from "./Score";
import Descriptions from "./Descriptions";
import "../../css/Result.css";
import results from "../../assets/strings/results.json";
import { useEffect, useMemo } from "react";
import { useState } from "react";

const Result = () => {
  const types = useMemo(() => {
    return {
      positive: ["긍정적 (Positive)", "부정적 (Negative)"],
      systematic: ["계획적 (Systematic)", "즉흥적 (Impromptu)"],
      active: ["능동적 (Active)", "수동적 (Passive)"],
      holistic: ["거시적 (Holistic)", "미시적 (Detailed)"],
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

  // 결과 페이지
  return (
    <div className="result">
      <ResultHeader studyType={studyType} results={results} />
      <Score score={score} types={types} maxScore={maxScore} />
      <Descriptions
        studyType={studyType}
        results={results}
        score={score}
        maxScore={maxScore}
      />
    </div>
  );
};

export default Result;
