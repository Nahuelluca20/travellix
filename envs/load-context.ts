import { type AppLoadContext } from "@remix-run/cloudflare";
import { type PlatformProxy } from "wrangler";
import { EnvSchema } from "envs/env";
import { z } from "zod";

interface Env {}

export type AppEnvs = z.infer<typeof EnvSchema>;

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

declare module "@remix-run/cloudflare" {
  interface LoaderFunctionArgs {
    context: {
      cloudflare: {
        env: AppEnvs;
      };
    };
  }
}

type GetLoadContext = (args: {
  request: Request;
  context: { cloudflare: Cloudflare }; // load context _before_ augmentation
}) => AppLoadContext;

// Shared implementation compatible with Vite, Wrangler, and Cloudflare Pages
export const getLoadContext: GetLoadContext = ({ context }) => {
  return {
    ...context,
  };
};
