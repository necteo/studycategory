import "../../css/Descriptions.css";

const Descriptions = ({ results }) => {
  return (
    <div className="descriptions">
      <div className="description">{results.types.PSH.description}</div>
      <div className="ps">{results.types.PSH.ps}</div>
    </div>
  );
};

export default Descriptions;
