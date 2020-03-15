import './style.css'

const appDiv = document.getElementById('app')

let canvas = document.createElement('div')
canvas.id = 'gameBoard'

appDiv.appendChild(canvas)

class DivObject {
  constructor(id) {
    this.element = document.createElement('div')
    this.element.id = 'player'
    this.dx = 0.0
    this.dy = 0.0
  }
  setPosition = (x,y) => {
    this.x = x-25
    this.y = y-25
    this.redraw()
  }
  redraw = () => {
    this.element.style.left = `${this.x}px`
    this.element.style.top = `${this.y}px`
  }
  computeMove = () => {
    this.x += this.dx
    this.y += this.dy
    this.dx *= 0.95
    this.dy *= 0.95
  }
  setParent = (parent) => {
    parent.appendChild(this.element)
  }
  moveUp = () => {
    this.dy -= 1
  } 
  moveDown = () => {
    this.dy += 1
  } 
  moveLeft = () => {
    this.dx -= 1
  } 
  moveRight = () => {
    this.dx += 1
  } 
}

const player = new DivObject('player')
player.setParent(gameBoard)
player.setPosition(100,100)

var up = false
var down = false
var left = false
var right = false

document.addEventListener('keydown',e=>{
  switch(e.code) {
    case 'ArrowUp':
      up = true
      break
    case 'ArrowDown':
      down = true
      break
    case 'ArrowLeft':
      left = true
      break
    case 'ArrowRight':
      right = true
      break
  }
})

document.addEventListener('keyup',e=>{
  console.log(e.keyCode)
  switch(e.code) {
    case 'ArrowUp':
      up = false
      break
    case 'ArrowDown':
      down = false
      break
    case 'ArrowLeft':
      left = false
      break
    case 'ArrowRight':
      right = false
      break
  }
})

function oneCycleDrawing() {
  if(up) player.moveUp()
  if(down) player.moveDown()
  if(left) player.moveLeft()
  if(right) player.moveRight()
  player.redraw()
  player.computeMove()
  window.requestAnimationFrame(oneCycleDrawing)
}

window.requestAnimationFrame(oneCycleDrawing)
  

