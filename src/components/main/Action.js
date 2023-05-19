import { useNavigate } from "react-router";
import "../../css/Action.css";
import arrow_right from "../../assets/icon/arrow-right.png";

const Action = ({ statements, checkedNum, pageNum, setPageNum, score }) => {
  const navigate = useNavigate();

  const onClickNext = () => {
    if (checkedNum === pageNum * 4) {
      // 해당 페이지 문항에 전부 응답하면
      if (pageNum < statements.length) {
        // 마지막 페이지가 아닐 때
        window.scrollTo({ top: 0, behavior: "smooth" }); // 맨 위로 스크롤
        setPageNum(pageNum + 1);
        const radios = document.querySelectorAll("input");
        radios.forEach((radio) => (radio.checked = false)); // 모든 라디오 버튼의 체크 해제
        return;
      } else if (pageNum === statements.length) {
        // 마지막 페이지일 떄
        navigate("/result", { state: { score: { ...score } } }); // 결과 페이지로
        return;
      }
    }
    alert("응답하지 않은 문항이 있습니다.");
  };

  return (
    <div className="action">
      <button type="button" onClick={onClickNext}>
        {pageNum < statements.length ? (
          <span className="icon-arrow">
            <img src={arrow_right} alt="arrow_right" />
          </span>
        ) : (
          "결과확인"
        )}
      </button>
    </div>
  );
};

export default Action;
