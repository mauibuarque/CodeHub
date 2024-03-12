import { Button, Input } from "../../index";

import { Link } from "react-router-dom";

const LoginForm = () => {
  const handleLogin = () => {};

  return (
    <form>
      <h2>Login</h2>

      <Input label="Email" type="text" placeholder="Digite aqui seu email" />

      <Input
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
      />

      <Button buttonValue="Entrar" onClickFunction={handleLogin} />

      <div>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </form>
  );
};

export default LoginForm;
