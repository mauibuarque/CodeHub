import { forwardRef } from "react";

const Select = forwardRef(({ label, options }, ref) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <select ref={ref}>
          {options.map((option) => (
            <option key={option.name} value={option}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
});

export default Select;
