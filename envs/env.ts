import { z } from "zod";

export const EnvSchema = z.object({
  MY_ENV: z.string().min(1),
});
