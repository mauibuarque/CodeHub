const Select = ({ label, options }) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <select>
          {options.map((option) => (
            <option key={option.name} value={option}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
