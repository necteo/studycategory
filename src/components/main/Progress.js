import { useState, useEffect } from "react";
import "../../css/Progress.css";

const Progress = ({ statements, checkedNum }) => {
  const [maxStmtNum, setMaxStmtNum] = useState(0);
  const percentage = ((checkedNum / maxStmtNum) * 100).toFixed(0);

  useEffect(() => {
    const maxStmtNumArr = Object.keys(statements).map((type) => {
      return statements[type].length;
    });
    let sum = 0;
    for (let i = 0; i < maxStmtNumArr.length; i++) {
      sum = sum + maxStmtNumArr[i];
    }
    setMaxStmtNum(sum);
  }, [statements]);

  return (
    <div id="progress-wrapper" className="progress-wrapper">
      <div className="percentage">{percentage}%</div>
      <div className="progress-bar-border">
        <div className="progress-bar" style={{ width: percentage + "%" }}></div>
      </div>
    </div>
  );
};

export default Progress;
