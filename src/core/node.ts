import { Maybe, SymbolType, FrequencyType } from "types";

export class Node {
  symbol: SymbolType;
  frequency: FrequencyType;
  left: Maybe<Node>;
  right: Maybe<Node>;
  constructor(symbol: SymbolType, frequency: FrequencyType) {
    this.symbol = symbol;
    this.frequency = frequency;
    this.left = null;
    this.right = null;
  }
}
