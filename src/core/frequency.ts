import { FrequencyMapType } from "types";

export function createFrequency(data: string): FrequencyMapType {
  const frequencyMap: FrequencyMapType = new Map() as FrequencyMapType;
  for (const symbol of data) {
    if (frequencyMap.has(symbol)) {
      frequencyMap.set(symbol, frequencyMap.get(symbol)! + 1);
    } else {
      frequencyMap.set(symbol, 1);
    }
  }
  return frequencyMap;
}
