export const SNAKE_SPEED = 1
const trunkBody = [
    { x: 5 , y: 8},  { x: 6 , y: 8}
]

export function update(){
    // console.log('update snake');
}

export function draw(gameBoard){
    // console.log('draw snake');

    trunkBody.forEach(segment => {
        const trunkElement = document.createElement('div')
        trunkElement.style.gridRowStart = segment.x
        trunkElement.style.gridColumnStart = segment.y
        trunkElement.classList.add('trunk')
        gameBoard.appendChild(trunkElement)
    
    })

}