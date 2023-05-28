const Radio = ({
  id,
  option,
  value,
  type,
  reverse,
  ratio,
  checkedNum,
  setCheckedNum,
  score,
  setScore,
  dupCheck,
  setDupCheck,
  goToScroll,
}) => {
  // handler
  const onChangeHandler = (e) => {
    const v = parseInt(e.currentTarget.value) * ratio;
    const anotherV = (4 - parseInt(e.currentTarget.value)) * ratio;
    const newScore = { ...score };
    if (!dupCheck["isDup"]) {
      newScore[type]["value"] = newScore[type]["value"] + v;
      newScore[type]["anotherValue"] =
        newScore[type]["anotherValue"] + anotherV;
      setCheckedNum(checkedNum + 1); // 체크된 문항 수 + 1
    } else {
      newScore[type]["value"] = newScore[type]["value"] - dupCheck["value"] + v; // 중복체크는 이미 더해진 값을 빼고 새로 더함
      newScore[type]["anotherValue"] =
        newScore[type]["anotherValue"] - dupCheck["anotherValue"] + anotherV;
    }
    setScore({ ...newScore });
    setDupCheck({ isDup: true, value: v, anotherValue: anotherV }); // 중복임을 저장
    goToScroll(id);
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
