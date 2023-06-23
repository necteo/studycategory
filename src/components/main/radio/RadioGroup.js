const RadioGroup = ({ children, id }) => {
  return (
    <form className="radio-group" id={"no" + id}>
      {children}
    </form>
  );
};

export default RadioGroup;
