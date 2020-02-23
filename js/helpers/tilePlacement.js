// This is the playable area.
// It represents the possible movements.
export const playableArea = {
  A: ["B", "E"],
  B: ["A", "C", "F"],
  C: ["B", "D", "G"],
  D: ["C", "H"],
  E: ["A", "F", "I"],
  F: ["E", "B", "G", "J"],
  G: ["C", "H", "K", "F"],
  H: ["G", "D", "L"],
  I: ["E", "J", "M"],
  J: ["I", "F", "K", "N"],
  K: ["J", "G", "L", "O"],
  L: ["K", "H", "P"],
  M: ["I", "N"],
  N: ["M", "J", "O"],
  O: ["N", "K", "P"],
  P: ["O", "L"]
};
