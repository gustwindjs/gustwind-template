import md from "./transforms/markdown.ts";
import type { Routes } from "https://deno.land/x/gustwind@v0.39.4/types.ts";

function init({ routes }: { routes: Routes }) {
  function markdown(input: string) {
    return md(input).content;
  }

  return { markdown };
}

export { init };
