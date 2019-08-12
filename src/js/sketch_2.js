let stepX
let stepY

const sketch = p5 => {
  // the `setup()` function sets the size of the display window and makes the cursor invisible
  p5.setup = () => {
    const width = 800
    const height = 400
    p5.createCanvas(width, height)
    p5.noStroke()
    // The colors should pass through the hue spectrum in this program.
    // Hue is no longer defined as a number between 0 and 360 but ratheras one between 0 and 800;
    p5.colorMode(p5.HSB, p5.width, p5.height, 100)
  }

  p5.draw = () => {
    // the addition of 2 prevents stepX and stepY from being too small, which would lead to longer display times
    stepX = p5.mouseX + 2
    stepY = p5.mouseY + 2

    // with the help of two nested loops, all the positions in the grid will now be processed.
    // The y-position of the rectangle to be drawn is defined by gridY in the outer loop.
    // The value increases only when the inner loop has been processed (i.e. once a complete row of rectangles has been drawn)
    // The variables gridX and gridY are used not only to position the tile but also to define the fill color.
    // The saturation value decreased proportionally to increases in the value gridY.
    for (let gridY = 0; gridY <= p5.height; gridY += stepY) {
      for (let gridX = 0; gridX <= p5.width; gridX += stepX) {
        p5.fill(gridX, p5.height - gridY, 100)
        p5.rect(gridX, gridY, stepX, stepY)
      }
    }
  }
}

export default sketch
