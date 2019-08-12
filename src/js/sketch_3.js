let segmentCount = 45
let radius = 180

const sketch = p5 => {
  // the `setup()` function sets the size of the display window and makes the cursor invisible
  p5.setup = () => {
    const width = 800
    const height = 400
    p5.createCanvas(width, height)
    p5.noStroke()
  }

  p5.draw = () => {
    // the ranges of values for saturation and brightness are adjusted in such a way
    // that mouse coordinates can be taken  as their values
    p5.colorMode(p5.HSB, 360, p5.width, p5.height)

    p5.background(360, 0, p5.height)

    let angleStep = 360 / segmentCount // the angle increment angleStep depends on how many segments are to be drawn

    p5.beginShape(p5.TRIANGLE_FAN)
    p5.vertex(p5.width / 2, p5.height / 2) // the first vertex point is in the middle of the drawing canvas

    for (let angle = 0; angle <= 360; angle += angleStep) {
      // for other vertices, angle has to be converted from degress (0 to 360) to radians (0 to 2Pi)
      // because the functions cos and sin require the angle be input this way.
      // This conversion is done by using radians()
      let vx = p5.width / 2 + p5.cos(p5.radians(angle)) * radius
      let vy = p5.height / 2 + p5.sin(p5.radians(angle)) * radius
      p5.vertex(vx, vy)
      // the fill color for the next segment is defined: the value of angle as hue, mouseX as saturation, mouseY as brightness
      p5.fill(angle, p5.mouseX, p5.mouseY)
    }

    p5.endShape()
  }

  p5.keyPressed = ({ key }) => {
    switch (key) {
      case '1':
        segmentCount = 360
        break
      case '2':
        segmentCount = 45
        break
      case '3':
        segmentCount = 24
        break
      case '4':
        segmentCount = 12
        break
      case '5':
        segmentCount = 6
        break
      default:
        segmentCount = 360
        break
    }
  }
}

export default sketch
