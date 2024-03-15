import { createContext, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userLogin = () => {};

  const userRegister = (payload, reset) => {
    console.log(payload);
    reset();
  };

  const userLogout = () => {};

  return (
    <>
      <UserContext.Provider
        value={{ user, userLogin, userRegister, userLogout }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export { UserContext, UserProvider };
