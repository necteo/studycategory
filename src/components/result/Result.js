import { useLocation, useNavigate } from "react-router";
import ResultHeader from "./ResultHeader";
import Score from "./Score";
import "../../css/Result.css";
import results from "../../assets/strings/results.json";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import NIAD1 from "../../assets/icon/people/NIAD1.png";
import NIAD2 from "../../assets/icon/people/NIAD2.png";
import NIAH1 from "../../assets/icon/people/NIAH1.png";
import NIAH2 from "../../assets/icon/people/NIAH2.png";
import NIPD1 from "../../assets/icon/people/NIPD1.png";
import NIPD2 from "../../assets/icon/people/NIPD2.png";
import NIPH1 from "../../assets/icon/people/NIPH1.png";
import NIPH2 from "../../assets/icon/people/NIPH2.png";
import NSAD1 from "../../assets/icon/people/NSAD1.png";
import NSAD2 from "../../assets/icon/people/NSAD2.png";
import NSAH1 from "../../assets/icon/people/NSAH1.png";
import NSAH2 from "../../assets/icon/people/NSAH2.png";
import NSPD1 from "../../assets/icon/people/NSPD1.png";
import NSPD2 from "../../assets/icon/people/NSPD2.png";
import NSPH1 from "../../assets/icon/people/NSPH1.png";
import NSPH2 from "../../assets/icon/people/NSPH2.png";
import PIAD1 from "../../assets/icon/people/PIAD1.png";
import PIAD2 from "../../assets/icon/people/PIAD2.png";
import PIAH1 from "../../assets/icon/people/PIAH1.png";
import PIAH2 from "../../assets/icon/people/PIAH2.png";
import PIPD1 from "../../assets/icon/people/PIPD1.png";
import PIPD2 from "../../assets/icon/people/PIPD2.png";
import PIPH1 from "../../assets/icon/people/PIPH1.png";
import PIPH2 from "../../assets/icon/people/PIPH2.png";
import PSAD1 from "../../assets/icon/people/PSAD1.png";
import PSAD2 from "../../assets/icon/people/PSAD2.png";
import PSAH1 from "../../assets/icon/people/PSAH1.png";
import PSAH2 from "../../assets/icon/people/PSAH2.png";
import PSPD1 from "../../assets/icon/people/PSPD1.png";
import PSPD2 from "../../assets/icon/people/PSPD2.png";
import PSPH1 from "../../assets/icon/people/PSPH1.png";
import PSPH2 from "../../assets/icon/people/PSPH2.png";

const Result = () => {
  const types = useMemo(() => {
    return {
      positive: ["긍정적", "Positive", "부정적", "Negative", "본질, 동기부여"],
      systematic: [
        "계획적",
        "Systematic",
        "즉흥적",
        "Impromptu",
        "계획성, 전술적 접근",
      ],
      active: ["능동적", "Active", "수동적", "Passive", "실행력"],
      holistic: ["거시적", "Holistic", "미시적", "Detailed", "전략적 사고"],
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
            ? types[type][1][0]
            : types[type][3][0]))
    );
    setStudyType(typeString);
  }, [types, maxScore, score]);

  const navigate = useNavigate();

  const more = () => {
    window.scrollTo({ top: 0 });
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
        <h4>유사 유형의 유명인/캐릭터</h4>
        <div className="people">
          {results.types[studyType]?.people.map((person, id) => (
            <div className="person" key={person.name}>
              <div className="face">
                <img
                  className="result-person"
                  src={
                    id % 2 === 0
                      ? studyType === "NIAD"
                        ? NIAD1
                        : studyType === "NIAH"
                        ? NIAH1
                        : studyType === "NIPD"
                        ? NIPD1
                        : studyType === "NIPH"
                        ? NIPH1
                        : studyType === "NSAD"
                        ? NSAD1
                        : studyType === "NSAH"
                        ? NSAH1
                        : studyType === "NSPD"
                        ? NSPD1
                        : studyType === "NSPH"
                        ? NSPH1
                        : studyType === "PIAD"
                        ? PIAD1
                        : studyType === "PIAH"
                        ? PIAH1
                        : studyType === "PIPD"
                        ? PIPD1
                        : studyType === "PIPH"
                        ? PIPH1
                        : studyType === "PSAD"
                        ? PSAD1
                        : studyType === "PSAH"
                        ? PSAH1
                        : studyType === "PSPD"
                        ? PSPD1
                        : PSPH1
                      : studyType === "NIAD"
                      ? NIAD2
                      : studyType === "NIAH"
                      ? NIAH2
                      : studyType === "NIPD"
                      ? NIPD2
                      : studyType === "NIPH"
                      ? NIPH2
                      : studyType === "NSAD"
                      ? NSAD2
                      : studyType === "NSAH"
                      ? NSAH2
                      : studyType === "NSPD"
                      ? NSPD2
                      : studyType === "NSPH"
                      ? NSPH2
                      : studyType === "PIAD"
                      ? PIAD2
                      : studyType === "PIAH"
                      ? PIAH2
                      : studyType === "PIPD"
                      ? PIPD2
                      : studyType === "PIPH"
                      ? PIPH2
                      : studyType === "PSAD"
                      ? PSAD2
                      : studyType === "PSAH"
                      ? PSAH2
                      : studyType === "PSPD"
                      ? PSPD2
                      : PSPH2
                  }
                  alt="type_psad"
                  loading="lazy"
                ></img>
              </div>
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
