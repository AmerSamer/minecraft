const trunkBody = [
    { x: 12, y: 17 }, { x: 13, y: 17 }, { x: 14, y: 17 }, { x: 15, y: 17 }, { x: 16, y: 17 },
    ////////////////////
    { x: 12, y: 10 }, { x: 13, y: 10 }, { x: 14, y: 10 }, { x: 15, y: 10 }, { x: 16, y: 10 },
    /////////////
    { x: 11, y: 2 }, { x: 10, y: 2 }, { x: 9, y: 2 }, { x: 8, y: 2 },
]

export function draw(gameBoard, arrayRemoves, toolsArr) {
    let pickaxe = document.querySelector('#pickaxe')
    pickaxe.addEventListener('click', () => {
        if (toolsArr[1].toolsName == pickaxe.getAttribute('id'))
            toolsArr[0].bool = false
        toolsArr[1].bool = true
        toolsArr[2].bool = false
        toolsArr[3].bool = false
    })
    trunkBody.forEach(segment => {
        const trunkElement = document.createElement('div')
        trunkElement.style.gridRowStart = segment.x
        trunkElement.style.gridColumnStart = segment.y
        trunkElement.classList.add('trunk')
        gameBoard.appendChild(trunkElement)

        let trunkUpdate = trunkElement
        trunkUpdate.addEventListener('click', () => {
            if (toolsArr[1].bool) {
                arrayRemoves.unshift(trunkUpdate.getAttribute('class'))
                trunkUpdate.remove()
                if (arrayRemoves[0] == trunkUpdate.getAttribute('class')) {
                    let store = document.querySelector('#store')
                    store.setAttribute('class', 'trunk')
                }
            }
        })
    })
}