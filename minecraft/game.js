import { draw as drawGround } from './ground.js'
import { draw as drawTree } from './tree.js'
import { draw as drawTrunk } from './trunk.js'
import { draw as drawRock } from './rock.js'
import { draw as drawSky } from './sky.js'

const gameBoard = document.querySelector('#game-board')
let toolsArr = [{ toolsName: 'axe', bool: false }, { toolsName: 'pickaxe', bool: false }, { toolsName: 'shovel', bool: false }, { toolsName: '', bool: false }]

let arrayRemoves = []


window.requestAnimationFrame(draw())

function draw() {
    gameBoard.innerHTML = ''
    drawGround(gameBoard, arrayRemoves, toolsArr)
    drawTree(gameBoard, arrayRemoves, toolsArr)
    drawTrunk(gameBoard, arrayRemoves, toolsArr)
    drawRock(gameBoard, arrayRemoves, toolsArr)
    drawSky(gameBoard, arrayRemoves, toolsArr)
}
const resett = document.querySelector('input')
resett.addEventListener('click', () => {
    location.reload();
})

