import { Route, Routes } from "react-router-dom";

import { LoginPage, RegisterPage, HomePage, NotFoundPage } from "../../pages";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>

      <Route path="/register" element={<RegisterPage />}></Route>

      <Route path="/" element={<HomePage />}></Route>

      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};

export default RouterMain;
