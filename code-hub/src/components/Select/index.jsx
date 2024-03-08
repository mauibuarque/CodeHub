const Select = ({ label, options }) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <select>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
