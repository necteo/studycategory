import "../../css/ResultHeader.css";
import result_type_psh from "../../assets/icon/result_type_psh.png";

const ResultHeader = ({ studyType, results }) => {
  return (
    <div className="header">
      <div className="result-type">
        <img
          className="result-type-img"
          src={result_type_psh}
          alt="type_psh"
          loading="lazy"
        />
      </div>
      <div className="tag" style={{ color: results.types[studyType]?.color }}>
        {results.types[studyType]?.tag}
      </div>
      <div className="name" style={{ color: results.types[studyType]?.color }}>
        {results.types[studyType]?.name}
      </div>
      <div className="summary">{results.types[studyType]?.summary}</div>
    </div>
  );
};

export default ResultHeader;
