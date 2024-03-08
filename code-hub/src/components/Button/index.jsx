const Button = ({ buttonValue, onClickFunction }) => {
  return (
    <>
      <button type="submit" onClick={() => onClickFunction()}>
        {buttonValue}
      </button>
    </>
  );
};

export default Button;
