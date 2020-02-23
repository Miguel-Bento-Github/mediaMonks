import { tiles } from "./helpers/variables.js";
import { addMovementCount } from "./movements.js";
import swapTiles from "./swapTiles.js";
import isPuzzleFinished from "./isPuzzleFinished.js";
import shuffleTiles from "./shuffleTiles.js";

tiles.map(tile => {
  tile.addEventListener("click", () => {
    swapTiles(tile);
    addMovementCount();
    isPuzzleFinished(tiles);
  });
});

document.getElementById("start").onclick = shuffleTiles;
