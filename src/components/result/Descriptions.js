import { useLocation } from "react-router";
import double_quotation_mark from "../../assets/icon/double_quotation_mark.png";
import results from "../../assets/strings/results.json";
import "../../css/Descriptions.css";

const Descriptions = () => {
  const location = useLocation();
  const studyType = location.state.studyType;
  const score = location.state.score;
  const maxScore = location.state.maxScore;

  return (
    <div className="descriptions">
      <div className="top">
        <img src={double_quotation_mark} alt='"' loading="lazy" />
      </div>
      <div className="advice">
        {results.types[studyType]?.name +
          " " +
          results.types[studyType]?.advice}
      </div>
      <div className="bottom">
        <img src={double_quotation_mark} alt='"' loading="lazy" />
      </div>
      {Object.keys(results.descriptions).map((type) => (
        <div className="description" key={type}>
          {score[type]["value"] === maxScore[type]
            ? results.descriptions[type][4]
            : results.descriptions[type][
                parseInt(
                  ((score[type]["value"] / maxScore[type]) * 100).toFixed(0) /
                    20
                )
              ]}
        </div>
      ))}
    </div>
  );
};

export default Descriptions;
