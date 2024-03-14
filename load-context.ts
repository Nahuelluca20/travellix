import { EnvSchema } from "envs/env";
import { type PlatformProxy } from "wrangler";
import { z } from "zod";

interface Env {}

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;
export type AppEnvs = z.infer<typeof EnvSchema>;
declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    cloudflare: Cloudflare;
  }
}

declare module "@remix-run/cloudflare" {
  interface LoaderFunctionArgs {
    context: {
      cloudflare: {
        env: AppEnvs;
      };
    };
  }
}
