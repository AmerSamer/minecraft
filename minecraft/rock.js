export const SNAKE_SPEED = 1
const rockBody = [
    { x: 13, y: 3 }, { x: 13, y: 4 }, { x: 13, y: 5 }, { x: 13, y: 6 },
    { x: 12, y: 3 }, { x: 12, y: 4 }, { x: 12, y: 5 },
    { x: 11, y: 4 }
]


// rockBody.addEventListener("click", function(){ 
//     alert("Hello World!");
//  });

export function update(gameBoard) {
    // console.log('update snake');
    //     let rockUpdate = document.querySelector('.rock')
    // console.log(gameBoard);
    // gameBoard.addEventListener("click", function(){ 

    //     alert('he')
    //  });
    //  console.log(gameBoard.classList.addEventListener);
}

export function draw(gameBoard, arrayRemoves) {
    // console.log('draw snake');

    rockBody.forEach(segment => {
        const rockElement = document.createElement('div')
        rockElement.style.gridRowStart = segment.x
        rockElement.style.gridColumnStart = segment.y
        rockElement.classList.add('rock')
        gameBoard.appendChild(rockElement)

        let rockUpdate = rockElement
        // console.log(rockUpdate);
        rockUpdate.addEventListener('click', () => {
            arrayRemoves.push(rockUpdate)
            rockUpdate.remove()
            // console.log(arrayRemoves);
    })
    })
    
}



