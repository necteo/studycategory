import "../css/Home.css";
import homeGirl from "../assets/icon/home_girl.png";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const start = (e) => {
    e.preventDefault();
    navigate("/test");
  };

  return (
    <div className="home">
      <div className="description">
        <img src={homeGirl} alt="homeGirl" />
        <div className="mlti">
          <span className="short-name">MLTI</span>
          <span className="full-name">(My Learning Type Indicator)</span>
        </div>
      </div>
      <div className="title">나의</div>
      <div className="title">학습 유형은?</div>
      <div className="sub-title">무료로 알아보는 나만의 학습 유형 검사</div>
      <button onClick={start}>시작하기</button>
    </div>
  );
};

export default Home;
