import { FrequencyMapType } from "types";
import { Node } from "./node";

export function createTree(frequencyMap: FrequencyMapType): Node {
  const priorityQueue = new Array<Node>();
  for (const [symbol, frequency] of frequencyMap.entries()) {
    priorityQueue.push(new Node(symbol, frequency));
  }

  while (priorityQueue.length > 1) {
    priorityQueue.sort((a, b) => a.frequency - b.frequency);
    const left = priorityQueue.shift();
    const right = priorityQueue.shift();
    if (!left || !right) {
      throw new Error("Something went wrong");
    }
    const parent = new Node(null, left.frequency + right.frequency);
    parent.left = left;
    parent.right = right;
    priorityQueue.push(parent);
  }
  return priorityQueue.shift() as Node;
}
