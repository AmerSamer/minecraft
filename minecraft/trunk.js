export const SNAKE_SPEED = 1
const trunkBody = [
    { x: 12 , y: 17},{ x: 13 , y: 17}, { x: 14 , y: 17}, { x: 15 , y: 17},  { x: 16 , y: 17},
    ////////////////////
    { x: 12 , y: 10},{ x: 13 , y: 10}, { x: 14 , y: 10}, { x: 15 , y: 10},  { x: 16 , y: 10},
    /////////////
    { x: 11 , y: 2},{ x: 10 , y: 2}, { x: 9 , y: 2}, { x: 8 , y: 2},
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