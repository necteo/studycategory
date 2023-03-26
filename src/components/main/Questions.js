import Question from "./Question";
import statements from "../../qt.json";
import Action from "./Action";
import { useState } from "react";

const Questions = () => {
  const [pageNum, setPageNum] = useState(0);
  return (
    <div className="test-questions comp">
      {statements.statements[pageNum].map((statement, id) => (
        <Question statement={statement} key={id} />
      ))}
      <Action pageNum={pageNum} setPageNum={setPageNum} />
    </div>
  );
};

export default Questions;
