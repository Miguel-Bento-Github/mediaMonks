import { getTilePosition } from "./helpers/getTilePosition.js";
import { playableArea } from "./helpers/tilePlacement.js";
import { moves } from "./movements.js";
import { puzzleTitle, puzzleCountTitle } from "./helpers/variables.js";

/**
 * Compares the current tile sequence with the initial one.
 * Casts both the current list and the initial one to a string.
 *
 * @param {nodeList} tiles
 */
export default function isPuzzleFinished(tiles) {
  const currentTiles = tiles.map(tile => getTilePosition(tile));
  const originalTiles = Object.keys(playableArea);

  if (JSON.stringify(currentTiles) === JSON.stringify(originalTiles)) {
    const movesDiv = document.getElementById("moves");
    const winSpan = `<span class="puzzle__win">Winner!</span>`;

    tiles.map(tile => (tile.disabled = true));

    puzzleCountTitle.classList += " display-none";
    movesDiv.innerHTML = `${winSpan} <br /> Game won in ${moves} moves. <br /> Click start to begin a new game`;
    puzzleTitle.innerHTML = "Congratulations!";
  }
}
