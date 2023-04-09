import "../../css/Tips.css";

const Tips = () => {
  return (
    <section className="tips">
      <div className="tip-highlight first"></div>
      <div className="tip-highlight second"></div>
      <div className="tip-highlight third"></div>
      <div className="tip">
        <div className="background"></div>
        <img
          // src="https://www.16personalities.com/static/images/test-header-1.svg"
          alt="12"
        />
        <div className="text">
          <div className="title">총 검사 시간은 12분 내외입니다.</div>
        </div>
      </div>
      <div className="tip">
        <img
          // src="https://www.16personalities.com/static/images/test-header-2.svg"
          alt="truely"
        />
        <div className="text">
          <div className="title">
            혹 질문이 마음에 들지 않더라도 정직하게 답변하십시오.
          </div>
        </div>
      </div>
      <div className="tip last">
        <img
          // src="https://www.16personalities.com/static/images/test-header-3.svg"
          alt="mid"
        />
        <div className="text">
          <div className="title">
            가능하면 답변 시 '보통이다'를 선택하지 마십시오.
          </div>
        </div>
      </div>
      <div className="shape"></div>
      <div className="shadow"></div>
    </section>
  );
};

export default Tips;
