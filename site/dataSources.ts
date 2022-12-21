import markdown from "./transforms/markdown.ts";

async function processMarkdown(filename: string) {
  // Drop title from the first line
  // This is not cleanest solution since sometimes you have something else there!
  // TODO: It would be better to check for the existence of # before removing the line
  return markdown(
    (await Deno.readTextFile(filename)).split("\n").slice(1).join("\n"),
  );
}

export { processMarkdown };
