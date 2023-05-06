import "../../css/Progress.css";

const Progress = ({ checkedNum }) => {
  const maxStmtNum = 24;
  const percentage = ((checkedNum / maxStmtNum) * 100).toFixed(0);

  return (
    <div id="progress-wrapper" className="progress-wrapper">
      <div className="percentage">{percentage}%</div>
      <div className="progress-bar" style={{ width: percentage + "%" }}></div>
    </div>
  );
};

export default Progress;
