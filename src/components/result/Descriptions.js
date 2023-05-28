import "../../css/Descriptions.css";

const Descriptions = ({ studyType, results }) => {
  return (
    <div className="descriptions">
      <div>{studyType}</div>
      <div className="description">{results.types[studyType]?.description}</div>
      <div className="ps">{results.types[studyType]?.ps}</div>
    </div>
  );
};

export default Descriptions;
