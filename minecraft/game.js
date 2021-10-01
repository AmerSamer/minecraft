import {update as updateGround , draw as drawGround} from './ground.js'
import {update as updateTree , draw as drawTree } from './tree.js'
import {update as updateTrunk , draw as drawTrunk } from './trunk.js'
import {update as updateRock , draw as drawRock } from './rock.js'
import {update as updateMoon , draw as drawMoon } from './moon.js'

// let lastRenderTime = 0
// const gameBoard = document.getElementById('game-board')
const gameBoard = document.querySelector('#game-board')


function main(currentTime){
    window.requestAnimationFrame(main)
    // const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    // if (secondsSinceLastRender < 1 / SNAKE_SPEED) return 
    
    // lastRenderTime = currentTime
   
    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    // updateGround()
    // updateTree()
}

function draw(){
    gameBoard.innerHTML = ''
    drawGround(gameBoard)
    drawTree(gameBoard)
    drawTrunk(gameBoard)
    drawRock(gameBoard)
    drawMoon(gameBoard)
}