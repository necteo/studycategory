const Radio = ({ option, value, name, type, score, setScore }) => {
  const onChangeHandler = (e) => {
    const newScore = { ...score };
    newScore[type] = newScore[type] + value;
    setScore({ ...newScore });
    console.log(score);
  };

  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
      {option}
    </label>
  );
};

export default Radio;
