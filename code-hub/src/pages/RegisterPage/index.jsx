import { Header, RegisterForm } from "../../components";

import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <Header>
        <Link to="/login">Voltar</Link>
      </Header>

      <RegisterForm />
    </>
  );
};

export default RegisterPage;
