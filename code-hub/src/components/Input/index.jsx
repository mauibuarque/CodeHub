import { forwardRef } from "react";

const Input = forwardRef(({ label, type, placeholder, error }, ref) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} ref={ref} />
        {error ? <p>{error.message}</p> : null}
      </div>
    </>
  );
});

export default Input;
