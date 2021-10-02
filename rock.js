export const SNAKE_SPEED = 1
const rockBody = [
    { x: 13, y: 3 }, { x: 13, y: 4 }, { x: 13, y: 5 }, { x: 13, y: 6 },
    { x: 12, y: 3 }, { x: 12, y: 4 }, { x: 12, y: 5 },
    { x: 11, y: 4 }
]

export function draw(gameBoard, arrayRemoves, toolsArr) {
    let axe = document.querySelector('#axe')
    axe.addEventListener('click', () => {
        if (toolsArr[0].toolsName == axe.getAttribute('id'))
            console.log('ff');
        toolsArr[0].bool = true
        toolsArr[1].bool = false
        toolsArr[2].bool = false
        toolsArr[3].bool = false
    })
    rockBody.forEach(segment => {
        const rockElement = document.createElement('div')
        rockElement.style.gridRowStart = segment.x
        rockElement.style.gridColumnStart = segment.y
        rockElement.classList.add('rock')
        gameBoard.appendChild(rockElement)

        let rockUpdate = rockElement

        rockUpdate.addEventListener('click', () => {
            if (toolsArr[0].bool) {
                arrayRemoves.unshift(rockUpdate.getAttribute('class'))
                rockUpdate.remove()
                let store = document.querySelector('#store')
                if (arrayRemoves[0] == rockUpdate.getAttribute('class')) {
                    store.setAttribute('class', 'rock')
                }
            }
        })
    })
}



