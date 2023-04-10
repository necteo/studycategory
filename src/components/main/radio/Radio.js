const Radio = ({
  option,
  value,
  name,
  type,
  checkedNum,
  setCheckedNum,
  score,
  setScore,
  dupCheck,
  setDupCheck,
}) => {
  const onChangeHandler = (e) => {
    const newScore = { ...score };
    if (!dupCheck["isDup"]) {
      newScore[type] = newScore[type] + value;
      setCheckedNum(checkedNum + 1);
    } else {
      newScore[type] = newScore[type] - dupCheck["value"] + value;
    }
    setScore({ ...newScore });
    setDupCheck({ isDup: true, value: value });
  };

  return (
    <label>
      {value === 4 ? option : null}
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
      {value === 4 ? null : option}
    </label>
  );
};

export default Radio;
