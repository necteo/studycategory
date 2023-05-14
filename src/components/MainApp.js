import { useState } from "react";
import Progress from "./main/Progress";
import Questions from "./main/Questions";
import Tips from "./main/Tips";
import "../css/MainApp.css";

const MainApp = () => {
  // 응답완료된 문항 개수
  const [checkedNum, setCheckedNum] = useState(0);

  return (
    <div className="main-wrapper">
      <main className="q-pt">
        <div className="warning">
          <img src="https://i.imgur.com/CJwfj0W.png" alt="warning" />
          주의사항
        </div>
        <Tips />
        <div id="main-app">
          <div data-chunk="quiz-chunk">
            <Progress checkedNum={checkedNum} />
            <Questions checkedNum={checkedNum} setCheckedNum={setCheckedNum} />
          </div>
          <div className="scrollbar-measure"></div>
        </div>
      </main>
    </div>
  );
};

export default MainApp;
