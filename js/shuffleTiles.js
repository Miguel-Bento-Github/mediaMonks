import { resetMoves } from "./movements.js";
import shuffle from "./helpers/shuffle.js";
import { playableArea } from "./helpers/tilePlacement.js";
import {
  tiles,
  emptyTile,
  place,
  puzzleTitle,
  puzzleCountTitle
} from "./helpers/variables.js";
import toggleTilesLock from "./toggleTilesLock.js";
import { getTilePosition } from "./helpers/getTilePosition.js";

/**
 * Resets the movement counter to 0.
 * Randomizes the tiles positions.
 * Updates the subtitle text.
 * Unlocks the necessary tiles to play.
 */
export default function shuffleTiles() {
  resetMoves();
  const startingAreas = shuffle(Object.keys(playableArea));

  tiles.map((tile, index) => {
    tile.style.setProperty(place, startingAreas[index]);
  });

  puzzleTitle.innerHTML = "Good luck!";
  puzzleCountTitle.classList.remove("display-none");
  toggleTilesLock(getTilePosition(emptyTile));
}
