import { z } from "zod";

const loginFormSchema = z.object({
  email: z
    .string()
    .email("Forneça um e-mail válido")
    .min(1, "Este campo é obrigatório."),
  password: z.string().min(1, "Este campo é obrigatório."),
});

export default loginFormSchema;
