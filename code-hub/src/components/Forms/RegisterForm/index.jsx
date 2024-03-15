import { useContext } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserContext } from "../../../providers/UserContext";

import { Button, Input, Select } from "../../index";

import registerFormSchema from "./registerForm.schema";

import moduleOptions from "./moduleOptions";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const { userRegister } = useContext(UserContext);

  const handleRegisterSubmit = (payload) => {
    console.log("entrou");
    userRegister(payload, reset);
  };

  return (
    <form onSubmit={handleSubmit(handleRegisterSubmit)}>
      <div>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
      </div>

      <Input
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        error={errors.name}
        {...register("name")}
      />

      <Input
        label="Email"
        type="text"
        placeholder="Digite aqui seu email"
        error={errors.email}
        {...register("email")}
      />

      <Input
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        error={errors.password}
        {...register("password")}
      />

      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Confirme sua senha"
        error={errors.confirmPassword}
        {...register("confirmPassword")}
      />

      <Input
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        error={errors.bio}
        {...register("bio")}
      />

      <Input
        label="Contato"
        type="text"
        placeholder="Opção de Contato"
        error={errors.contact}
        {...register("contact")}
      />

      <Select
        label="Selecionar módulo"
        options={moduleOptions}
        error={errors.module}
        {...register("module")}
      />

      <Button buttonValue="Cadastrar" />
    </form>
  );
};

export default RegisterForm;
