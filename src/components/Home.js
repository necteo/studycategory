const Home = () => {
  return (
    <div>
      <label>
        이름: <input type="text" name="name" />
      </label>
      <button
        onClick={() => {
          document.location.href = "/test";
        }}
      >
        시작
      </button>
    </div>
  );
};

export default Home;
