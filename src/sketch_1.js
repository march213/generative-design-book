const sketch = p5 => {
  // the `setup()` function sets the size of the display window and makes the cursor invisible
  p5.setup = () => {
    p5.createCanvas(720, 720)
    p5.noCursor()

    p5.colorMode(p5.HSB, 360, 100, 100) // The colors should pass through the hue spectrum in this program.
    p5.rectMode(p5.CENTER)
    p5.noStroke()
  }

  p5.draw = () => {
    const yPosition = p5.mouseY / 2 // The y-value if the mouse position is divided by 2 to get value from 0 to 360 on the color wheel (that's wwhy the size of the canvas is 720)
    const xPosition = p5.mouseX + 1 // The size of the color field changes relative to the x-value of the mouse position, with a side length between 1 and 720 pixels

    p5.background(yPosition, 100, 100)

    p5.fill(360 - yPosition, 100, 100) // The halved y-value of the mouse position is substracted from 360, creating value from 360 to 0
    p5.rect(360, 360, xPosition, xPosition)
  }
}

export default sketch
