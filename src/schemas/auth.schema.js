import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El Username es requerido",
  }),
  email: z.string({
    required_error: "El Email es requerido",
  }).email({
    message: "Email invalido",
  }),
  password: z.string({
    required_error: "La Contraseña es requerida",
  }).min(6, {
    message: "La contraseña debe tener al menos 6 caracteres",
  }),
});

export const loginSchema = z.object({
  email: z.string({
    required_error: "El Email es requerido",
  }).email({
    message: "Email invalido",
  }),
  password: z.string({
    required_error: "La Contraseña es requerida",
  }).min(6, {
    message: "La contraseña debe tener al menos 6 caracteres",
  }),
});
