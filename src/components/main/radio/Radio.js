const Radio = ({
  option,
  value,
  type,
  reverse,
  checkedNum,
  setCheckedNum,
  score,
  setScore,
  dupCheck,
  setDupCheck,
}) => {
  const onChangeHandler = (e) => {
    const v = parseInt(e.currentTarget.value);
    const newScore = { ...score };
    if (!dupCheck["isDup"]) {
      newScore[type] = newScore[type] + v;
      setCheckedNum(checkedNum + 1); // 체크된 문항 수 + 1
    } else {
      newScore[type] = newScore[type] - dupCheck["value"] + v; // 중복체크는 이미 더해진 값을 빼고 새로 더함
    }
    setScore({ ...newScore });
    setDupCheck({ isDup: true, value: v }); // 중복임을 저장
    console.log(score);
  };

  return (
    <label>
      {value === 4 ? option : null}
      <input
        type="radio"
        name="decision"
        value={reverse ? Math.abs(value - 4) : value} // 질문의 의도가 반대성향일 경우
        onChange={onChangeHandler}
      />
      {value === 4 ? null : option}
    </label>
  );
};

export default Radio;
