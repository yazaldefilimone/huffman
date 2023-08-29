import { CodesTableType, Maybe } from "types";
import { Node } from "./node";

export function createCodes(node: Maybe<Node>, currentCode: string, codesTable: CodesTableType) {
  if (node === null) {
    return;
  }
  if (node.symbol !== null) {
    codesTable.set(node.symbol, currentCode);
    return;
  }
  createCodes(node.left, currentCode + "0", codesTable);
  createCodes(node.right, currentCode + "1", codesTable);
}

export function createCodesTable(root: Node): CodesTableType {
  const codesTable: CodesTableType = new Map() as CodesTableType;
  createCodes(root, "", codesTable);
  return codesTable;
}
