/**
 * Creates the puzzle tiles
 */
(function insertTiles() {
  const container = document.getElementById("puzzle");
  for (let index = 1; index <= 16; index += 1) {
    container.insertAdjacentHTML(
      "beforeend",
      `<button class="puzzle__piece puzzle__piece--${index}" disabled></button>`
    );
  }
})();
