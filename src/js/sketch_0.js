const sketch = p5 => {
  const canvasWidth = p5.windowWidth
  const canvasHeight = p5.windowHeight - 5

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight)
    p5.noFill()
    p5.frameRate(60)
  }

  p5.draw = () => {
    // default frame rate in p5.js is 60 per second.
    // console.log(p5.frameCount)

    // p5.ellipse(p5.mouseX, p5.mouseY, 40, 40)
    // p5.translate(40, 20)
    // p5.rotate(0.5)
    // p5.scale(1.5)
    p5.rect(p5.mouseX, p5.mouseY, 40, 40)

    // console.log(`mouse position: ${p5.mouseX}.${p5.mouseY}`)
    // console.log(`mousekey presed: ${p5.mouseIsPressed}`)
    // console.log(`key pressed: ${p5.keyIsPressed}`)
    // console.log(`last pressed key: ${p5.key}`)
  }

  p5.mouseReleased = () => {
    console.log('the mouse key was released')
  }
}

export default sketch
