import { emptyTile, place } from "./helpers/variables.js";
import { getTilePosition } from "./helpers/getTilePosition.js";
import toggleTilesLock from "./toggleTilesLock.js";

/**
 *  Swaps the clicked tile with the empty one.
 *  Unlocks tiles
 *
 * @param {element} tile
 */
export default function swapTiles(tile) {
  const tileArea = getTilePosition(tile);
  const emptyTileArea = getTilePosition(emptyTile);

  emptyTile.style.setProperty(place, tileArea);
  tile.style.setProperty(place, emptyTileArea);

  toggleTilesLock(tileArea);
}
