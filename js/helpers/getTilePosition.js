import { place } from "./variables.js";

/**
 * Gets a tile position by getting a css property value.
 *
 * @param {HTMLElement} tile
 * @returns {string} Tile position.
 */
export function getTilePosition(tile) {
  return tile.style.getPropertyValue(place);
}
