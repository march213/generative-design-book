const sketch = p5 => {
  const canvasWidth = p5.windowWidth
  const canvasHeight = p5.windowHeight - 5

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight)
    p5.noFill()
  }

  p5.draw = () => {
    p5.ellipse(p5.mouseX, p5.mouseY, 40, 40)
  }
}

export default sketch
