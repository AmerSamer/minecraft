export const SNAKE_SPEED = 1
const groundBody = [

    { x: 20 , y: 1},{ x: 20 , y: 2},{ x: 20 , y: 3},{ x: 20 , y: 4},{ x: 20 , y: 5},
    { x: 20 , y: 6},{ x: 20 , y: 7},{ x: 20 , y: 8},{ x: 20 , y: 9},{ x: 20 , y: 10},
    { x: 20 , y: 11},{ x: 20 , y: 12},{ x: 20 , y: 13},{ x: 20 , y: 14},{ x: 20 , y: 15},
    { x: 20 , y: 16},{ x: 20 , y: 17},{ x: 20 , y: 18},{ x: 20 , y: 19},{ x: 20 , y: 20},
    /////
    { x: 19 , y: 1},{ x: 19 , y: 2},{ x: 19 , y: 3},{ x: 19 , y: 4},{ x: 19 , y: 5},
    { x: 19 , y: 6},{ x: 19 , y: 7},{ x: 19 , y: 8},{ x: 19 , y: 9},{ x: 19 , y: 10},
    { x: 19 , y: 11},{ x: 19 , y: 12},{ x: 19 , y: 13},{ x: 19 , y: 14},{ x: 19 , y: 15},
    { x: 19 , y: 16},{ x: 19 , y: 17},{ x: 19 , y: 18},{ x: 19 , y: 19},{ x: 19 , y: 20},
    ////
    { x: 18 , y: 1},{ x: 18 , y: 2},{ x: 18 , y: 3},{ x: 18 , y: 4},{ x: 18 , y: 5},
    { x: 18 , y: 6},{ x: 18 , y: 7},{ x: 18 , y: 8},{ x: 18 , y: 9},{ x: 18 , y: 10},
    { x: 18 , y: 11},{ x: 18 , y: 12},{ x: 18 , y: 13},{ x: 18 , y: 14},{ x: 18 , y: 15},
    { x: 18 , y: 16},{ x: 18 , y: 17},{ x: 18 , y: 18},{ x: 18 , y: 19},{ x: 18 , y: 20},
    ///////
    { x: 17 , y: 1},{ x: 17 , y: 2},{ x: 17 , y: 3},{ x: 17 , y: 4},{ x: 17 , y: 5},
    { x: 17 , y: 6},{ x: 17 , y: 7},{ x: 17 , y: 8},{ x: 17 , y: 9},{ x: 17 , y: 10},
    { x: 17 , y: 11},{ x: 17 , y: 12},{ x: 17 , y: 13},{ x: 17 , y: 14},{ x: 17 , y: 15},
    { x: 17 , y: 16},{ x: 17 , y: 17},{ x: 17 , y: 18},{ x: 17 , y: 19},{ x: 17 , y: 20},
    ///////
    { x: 16 , y: 1},{ x: 16 , y: 2},{ x: 16 , y: 3},{ x: 16 , y: 4},{ x: 16 , y: 5},
    { x: 16 , y: 6},{ x: 16 , y: 7},
    //////////
    { x: 15 , y: 1},{ x: 14 , y: 1},{ x: 13 , y: 1},{ x: 12 , y: 1},
    { x: 15 , y: 2},{ x: 14 , y: 2},{ x: 13 , y: 2},{ x: 12 , y: 2},
    ////////////
    { x: 15 , y: 3},{ x: 15 , y: 4},{ x: 15 , y: 5},{ x: 15 , y: 6},
    { x: 14 , y: 3},{ x: 14 , y: 4},{ x: 14 , y: 5},{ x: 14 , y: 6},
    // ,{ x: 16 , y: 8},{ x: 16 , y: 9},{ x: 16 , y: 10},
    // { x: 16 , y: 11},{ x: 16 , y: 12},{ x: 16 , y: 13},{ x: 16 , y: 14},{ x: 16 , y: 15},
    // { x: 16 , y: 16},{ x: 16 , y: 17},{ x: 16 , y: 18},{ x: 16 , y: 19},{ x: 16 , y: 20},
]

export function update(){
    // console.log('update snake');
}

export function draw(gameBoard, arrayRemoves,toolsArr){
    // console.log('draw snake');
    let shovel = document.querySelector('#shovel')
    shovel.addEventListener('click', ()=> {
    if(toolsArr[2].toolsName == shovel.getAttribute('id'))
        toolsArr[0].bool= false
        toolsArr[1].bool= false
        toolsArr[2].bool= true
    })
// console.log(toolsArr[0].bool);
    // let ground = false
    groundBody.forEach(segment => {
        const groundElement = document.createElement('div')
        groundElement.style.gridRowStart = segment.x
        groundElement.style.gridColumnStart = segment.y
        groundElement.classList.add('ground')
        gameBoard.appendChild(groundElement)
    
        let groundUpdate = groundElement
        groundUpdate.addEventListener('click', () => {
            if(toolsArr[2].bool){
                arrayRemoves.push(groundUpdate)
                groundUpdate.remove()
            }
        })
    })

}