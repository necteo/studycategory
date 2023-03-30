const Radio = ({ option, value, name }) => {
  return (
    <label>
      <input type="radio" name={name} value={value} />
      {option}
    </label>
  );
};

export default Radio;
