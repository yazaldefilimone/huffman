import { CodesTableType } from "types";

export function encode(data: string, codesTable: CodesTableType) {
  let encodedData = "";
  for (const symbol of data) {
    encodedData += codesTable.get(symbol);
  }
  return encodedData;
}
