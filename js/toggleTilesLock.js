import { tiles } from "./helpers/variables.js";
import { getTilePosition } from "./helpers/getTilePosition.js";
import { playableArea } from "./helpers/tilePlacement.js";

/**
 * Unlocks and locks tiles depending on its position.
 * Tiles close to the empty tile with space to move will be unlocked.
 *
 * @param {string} currentTilePlacement
 */
export default function toggleTilesLock(currentTilePlacement) {
  tiles.map(tile => {
    const tileArea = getTilePosition(tile);

    if (playableArea[currentTilePlacement].includes(tileArea)) {
      tile.disabled = false;
    } else {
      tile.disabled = true;
    }
  });
}
