import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const start = (e) => {
    e.preventDefault();
    navigate("/test");
  };

  return (
    <div>
      <h1>학습 유형 검사</h1>
      <label>
        이름:{" "}
        <input type="text" placeholder="이름을 입력해주세요" name="name" />
      </label>
      <button onClick={start}>시작</button>
    </div>
  );
};

export default Home;
