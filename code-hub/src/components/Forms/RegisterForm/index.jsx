import { Button, Input, Select } from "../../index";

import moduleOptions from "./moduleOptions";

const RegisterForm = () => {
  const handleRegister = () => {};

  return (
    <form>
      <div>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
      </div>

      <Input label="Nome" type="text" placeholder="Digite aqui seu nome" />

      <Input label="Email" type="text" placeholder="Digite aqui seu email" />

      <Input
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
      />

      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Confirme sua senha"
      />

      <Input label="Bio" type="text" placeholder="Fale sobre você" />

      <Input label="Contato" type="text" placeholder="Opção de Contato" />

      <Select label="Selecionar módulo" options={moduleOptions} />

      <Button buttonValue="Cadastrar" onClickFunction={handleRegister} />
    </form>
  );
};

export default RegisterForm;
