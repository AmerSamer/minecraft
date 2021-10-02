import {update as updateGround , draw as drawGround} from './ground.js'
import {update as updateTree , draw as drawTree } from './tree.js'
import {update as updateTrunk , draw as drawTrunk } from './trunk.js'
import {update as updateRock , draw as drawRock } from './rock.js'
import {update as updateMoon , draw as drawMoon } from './moon.js'

// let lastRenderTime = 0
// const gameBoard = document.getElementById('game-board')
const gameBoard = document.querySelector('#game-board')
// const axe = document.querySelector('#axe')
let toolsArr = [{toolsName: 'axe' , bool: false},{toolsName: 'pickaxe' , bool: false},{toolsName: 'shovel' , bool: false}]

// console.log(resett);
let arrayRemoves = []
// const rockUpdate = document.querySelector('.rock')

// const divRock = document.querySelector('.rock')
// console.log(rockUpdate);

function main(currentTime){
    // window.requestAnimationFrame(main)
    // const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    // if (secondsSinceLastRender < 1 / SNAKE_SPEED) return 
    
    // lastRenderTime = currentTime
   
    update()
    draw()
}

window.requestAnimationFrame(main)


function update(){
    gameBoard.innerHTML = ''
    updateRock(gameBoard)
    // updateTree()
}

function draw(){
    gameBoard.innerHTML = ''
    drawGround(gameBoard, arrayRemoves, toolsArr)
    drawTree(gameBoard, arrayRemoves, toolsArr)
    drawTrunk(gameBoard, arrayRemoves, toolsArr)
    drawRock(gameBoard, arrayRemoves, toolsArr)
    drawMoon(gameBoard)
}
const resett = document.querySelector('input')
resett.addEventListener('click', () => {
    location.reload();
})