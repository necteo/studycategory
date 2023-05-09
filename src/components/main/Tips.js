import "../../css/Tips.css";
import stopwatch from "../../assets/icon/stopwatch.png";
import honest from "../../assets/icon/honest.png";
import banned from "../../assets/icon/banned.png";

const Tips = () => {
  return (
    <section className="tips">
      <div className="tip-highlight first"></div>
      <div className="tip-highlight second"></div>
      <div className="tip-highlight third"></div>
      <div className="tip">
        <div className="background"></div>
        <img src={stopwatch} alt="12" />
        <div className="text">
          <div className="title">총 검사 시간은 5분 내외입니다.</div>
        </div>
      </div>
      <div className="tip">
        <img src={honest} alt="truely" />
        <div className="text">
          <div className="title">
            질문이 마음에 들지 않더라도 정직하게 답변해주세요.
          </div>
        </div>
      </div>
      <div className="tip last">
        <img src={banned} alt="mid" />
        <div className="text">
          <div className="title">되도록 답변 시 '중간'을 피해주세요.</div>
        </div>
      </div>
      <div className="shape"></div>
      <div className="shadow"></div>
    </section>
  );
};

export default Tips;
