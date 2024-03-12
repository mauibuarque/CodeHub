import { createContext, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userLogin = () => {};

  const userRegister = () => {};

  const userLogout = () => {};

  return (
    <>
      <UserContext.Provider value={{ userLogin, userRegister, userLogout }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export { UserContext, UserProvider };
