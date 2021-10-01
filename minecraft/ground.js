export const SNAKE_SPEED = 1
const groundBody = [
    { x: 7 , y: 1},{ x: 7 , y: 2},{ x: 7 , y: 3},{ x: 7 , y: 4},{ x: 7 , y: 5},
    { x: 7 , y: 6},{ x: 7 , y: 7},{ x: 7 , y: 8},{ x: 7 , y: 9},{ x: 7 , y: 10},
    { x: 8 , y: 1},{ x: 8 , y: 2},{ x: 8 , y: 3},{ x: 8 , y: 4},{ x: 8 , y: 5},
    { x: 8 , y: 6},{ x: 8 , y: 7},{ x: 8 , y: 8},{ x: 8 , y: 9},{ x: 8 , y: 10},
    { x: 9 , y: 1},{ x: 9 , y: 2},{ x: 9 , y: 3},{ x: 9 , y: 4},{ x: 9 , y: 5},
    { x: 9 , y: 6},{ x: 9 , y: 7},{ x: 9 , y: 8},{ x: 9 , y: 9},{ x: 9 , y: 10},
    { x: 10 , y: 1},{ x: 10 , y: 2},{ x: 10 , y: 3},{ x: 10 , y: 4},{ x: 10 , y: 5},
    { x: 10 , y: 6},{ x: 10 , y: 7},{ x: 10 , y: 8},{ x: 10 , y: 9},{ x: 10 , y: 10}
]

export function update(){
    // console.log('update snake');
}

export function draw(gameBoard){
    // console.log('draw snake');

    groundBody.forEach(segment => {
        const groundElement = document.createElement('div')
        groundElement.style.gridRowStart = segment.x
        groundElement.style.gridColumnStart = segment.y
        groundElement.classList.add('ground')
        gameBoard.appendChild(groundElement)
    
    })

}