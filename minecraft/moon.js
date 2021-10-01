export const SNAKE_SPEED = 1
const moonBody = [
    { x: 2 , y: 17},{ x: 3 , y: 17}, { x: 2 , y: 18}, { x: 3 , y: 18}
]

export function update(){
    // console.log('update snake');
}

export function draw(gameBoard){
    // console.log('draw snake');

    moonBody.forEach(segment => {
        const moonElement = document.createElement('div')
        moonElement.style.gridRowStart = segment.x
        moonElement.style.gridColumnStart = segment.y
        moonElement.classList.add('moon')
        gameBoard.appendChild(moonElement)
    
    })

}