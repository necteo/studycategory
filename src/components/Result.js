import { useLocation } from "react-router";
import { useCookies } from "react-cookie";
import "../css/Result.css";

const Result = () => {
  const location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);

  const name = cookies.name;
  removeCookie("name");
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
      <h1>{name}님의 결과</h1>
      <div>
        <div>
          {/* 점수그래프 */}
          {Object.keys(score).map((key) => (
            <div className="score" key={key}>
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
      <div className="descriptions">
        이 유형은 어쩌구 저쩌구
        <br />
        이래서 어떻고 저래서 어떻다 등등
      </div>
    </div>
  );
};

export default Result;
