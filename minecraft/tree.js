export const SNAKE_SPEED = 1
const treeBody = [
    { x: 10 , y: 15},  { x: 11 , y: 15},
    { x: 9 , y: 16},  { x: 10 , y: 16},  { x: 11 , y: 16}, { x: 12 , y: 16}, 
    { x: 8 , y: 17},{ x: 9 , y: 17}, { x: 10 , y: 17}, { x: 11 , y: 17},
    { x: 9 , y: 18},  { x: 10 , y: 18},  { x: 11 , y: 18}, { x: 12 , y: 18}, 
    { x: 10 , y: 19},  { x: 11 , y: 19},
    /////////////////////
    { x: 10 , y: 8},  { x: 11 , y: 8},
    { x: 9 , y: 9},  { x: 10 , y: 9},  { x: 11 , y: 9}, { x: 12 , y: 9}, 
    { x: 8 , y: 10},{ x: 9 , y: 10}, { x: 10 , y: 10}, { x: 11 , y: 10},
    { x: 9 , y: 11},  { x: 10 , y: 11},  { x: 11 , y: 11}, { x: 12 , y: 11}, 
    { x: 10 , y: 12},  { x: 11 , y: 12},
    //////////////
    { x: 8 , y: 1},  { x: 7 , y: 1},{ x: 6 , y: 1},
    { x: 7 , y: 2},  { x: 6 , y: 2},  { x: 5 , y: 2}, 
    { x: 8 , y: 3},  { x: 7 , y: 3},{ x: 6 , y: 3},
    { x: 8 , y: 10},{ x: 9 , y: 10}, { x: 10 , y: 10}, { x: 11 , y: 10},
    { x: 9 , y: 11},  { x: 10 , y: 11},  { x: 11 , y: 11}, { x: 12 , y: 11}, 
    { x: 10 , y: 12},  { x: 11 , y: 12},
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