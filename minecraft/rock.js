export const SNAKE_SPEED = 1
const rockBody = [
    { x: 13 , y: 3}, { x: 13 , y: 4},{ x: 13 , y: 5}, { x: 13 , y: 6}, 
    { x: 12 , y: 3}, { x: 12 , y: 4}, { x: 12 , y: 5},
    { x: 11 , y: 4}
]

export function update(){
    // console.log('update snake');
}

export function draw(gameBoard){
    // console.log('draw snake');

    rockBody.forEach(segment => {
        const rockElement = document.createElement('div')
        rockElement.style.gridRowStart = segment.x
        rockElement.style.gridColumnStart = segment.y
        rockElement.classList.add('rock')
        gameBoard.appendChild(rockElement)
    
    })

}