export let moves = 0;

/**
 * Adds a movement to the count after the user clicks on a valid tile.
 *
 * @returns {number} Total amount of movements
 */
export function addMovementCount() {
  let total = (moves += 1);
  const movementsDisplay = document.getElementById("moves");
  movementsDisplay.innerHTML = total;
  return total;
}

// resets the movement count and updates the DOM accordingly.
export function resetMoves() {
  moves = 0;
  document.getElementById("moves").innerHTML = 0;
}
