import { urlJoin } from "https://bundle.deno.dev/https://deno.land/x/url_join@1.0.0/mod.ts";
import type { Routes } from "https://deno.land/x/gustwind@v0.59.4/types.ts";

function init({ routes }: { routes: Routes }) {
  // Add your global page utilities here.
  // Alternatively they can be defined per component.
  return { urlJoin };
}

export { init };
