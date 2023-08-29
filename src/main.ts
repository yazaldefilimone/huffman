import { core } from "./core";

function main() {
  const input = `
        Hi there! I'm a polyglot Software Engineer

        Reflecting about the affect and aesthetics of computing.

        Just a young introvert who likes coding and books.

        Reach out at: yazaldefilimon@gmail.com

        website . linkedin . twitter
  `;
  const built = core(input);
  const inputBytes = Buffer.from(built.input, "utf-8");
  const builtBytes = Buffer.from(built.encodedData, "binary");
  console.log({
    inputBytes: inputBytes.length,
    builtBytes: builtBytes.length,
    ratio: Math.round((builtBytes.length / inputBytes.length) * 100) + "%",
  });
}
main();
