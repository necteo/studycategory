import { useLocation } from "react-router";
import ResultHeader from "./ResultHeader";
import Score from "./Score";
import Descriptions from "./Descriptions";
import "../../css/Result.css";
import results from "../../assets/strings/results.json";

const Result = () => {
  const location = useLocation();

  // 결과 페이지
  return (
    <div className="result">
      <ResultHeader results={results} />
      <Score score={location.state.score} />
      <Descriptions results={results} />
    </div>
  );
};

export default Result;
