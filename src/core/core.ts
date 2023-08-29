import { createCodesTable } from "./codes";
import { encode } from "./encode";
import { createFrequency } from "./frequency";
import { createTree } from "./tree";

export function core(input: string) {
  const frequencyMap = createFrequency(input);
  const tree = createTree(frequencyMap);
  const codes = createCodesTable(tree);
  const encodedData = encode(input, codes);
  return {
    frequencyMap,
    tree,
    codes,
    encodedData,
    input,
  };
}
