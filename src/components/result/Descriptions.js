import "../../css/Descriptions.css";

const Descriptions = ({ studyType, score, maxScore }) => {
  return (
    <div className="descriptions">
      {results.types[studyType]?.people.map((person) => (
        <div className="people" key={person}>
          {person}
        </div>
      ))}
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
