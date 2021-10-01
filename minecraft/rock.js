export const SNAKE_SPEED = 1
const rockBody = [
    { x: 5 , y: 2}, { x: 5 , y: 3}, { x: 5 , y: 4},
    { x: 6 , y: 2}, { x: 6 , y: 3}, { x: 6 , y: 4},
    { x: 4 , y: 3}
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