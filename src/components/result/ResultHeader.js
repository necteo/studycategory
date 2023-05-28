import "../../css/ResultHeader.css";
import double_quotation_mark from "../../assets/icon/double_quotation_mark.png";
import result_type_psh from "../../assets/icon/result_type_psh.png";

const ResultHeader = ({ studyType, results }) => {
  return (
    <div className="header">
      <div className="top">
        <img src={double_quotation_mark} alt='"' />
      </div>
      <div className="result-type">
        <img className="result-type-img" src={result_type_psh} alt="type_psh" />
      </div>
      <div className="name">{results.types[studyType]?.name}</div>
      <div className="bottom">
        <img src={double_quotation_mark} alt='"' />
      </div>
    </div>
  );
};

export default ResultHeader;
