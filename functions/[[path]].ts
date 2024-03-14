import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

import * as build from "../build/server";
import { getLoadContext } from "envs/load-context";

export const onRequest = createPagesFunctionHandler({
  build,
  getLoadContext,
});
