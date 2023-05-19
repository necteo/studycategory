const RadioGroup = ({ children, id }) => {
  return <form id={"no" + id}>{children}</form>;
};

export default RadioGroup;
