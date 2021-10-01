export const SNAKE_SPEED = 1
const treeBody = [
    { x: 4 , y: 8},  { x: 2 , y: 7},  { x: 2 , y: 8}, { x: 2 , y: 9}, 
    { x: 4 , y: 7}, { x: 3 , y: 7}, { x: 3 , y: 8},
    { x: 4 , y: 9}, { x: 3 , y: 9}
]

export function update(){
    // console.log('update snake');
}

export function draw(gameBoard){
    // console.log('draw snake');

    treeBody.forEach(segment => {
        const treeElement = document.createElement('div')
        treeElement.style.gridRowStart = segment.x
        treeElement.style.gridColumnStart = segment.y
        treeElement.classList.add('tree')
        gameBoard.appendChild(treeElement)
    
    })

}