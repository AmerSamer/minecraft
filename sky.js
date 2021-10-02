const skyBody = [
    { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 },
    { x: 1, y: 5 }, { x: 1, y: 6 }, { x: 1, y: 7 }, { x: 1, y: 8 },
    { x: 1, y: 9 }, { x: 1, y: 10 }, { x: 1, y: 11 }, { x: 1, y: 12 },
    { x: 1, y: 13 }, { x: 1, y: 14 }, { x: 1, y: 15 }, { x: 1, y: 16 },
    { x: 1, y: 17 }, { x: 1, y: 18 }, { x: 1, y: 19 }, { x: 1, y: 20 },
    ///////
    { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 },
    { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 2, y: 7 }, { x: 2, y: 8 },
    { x: 2, y: 9 }, { x: 2, y: 10 }, { x: 2, y: 11 }, { x: 2, y: 12 },
    { x: 2, y: 13 }, { x: 2, y: 14 }, { x: 2, y: 15 }, { x: 2, y: 16 },
    { x: 2, y: 17 }, { x: 2, y: 18 }, { x: 2, y: 19 }, { x: 2, y: 20 },
    ///////
    { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 },
    { x: 3, y: 5 }, { x: 3, y: 6 }, { x: 3, y: 7 }, { x: 3, y: 8 },
    { x: 3, y: 9 }, { x: 3, y: 10 }, { x: 3, y: 11 }, { x: 3, y: 12 },
    { x: 3, y: 13 }, { x: 3, y: 14 }, { x: 3, y: 15 }, { x: 3, y: 16 },
    { x: 3, y: 17 }, { x: 3, y: 18 }, { x: 3, y: 19 }, { x: 3, y: 20 },
    /////////
    { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 },
    { x: 4, y: 5 }, { x: 4, y: 6 }, { x: 4, y: 7 }, { x: 4, y: 8 },
    { x: 4, y: 9 }, { x: 4, y: 10 }, { x: 4, y: 11 }, { x: 4, y: 12 },
    { x: 4, y: 13 }, { x: 4, y: 14 }, { x: 4, y: 15 }, { x: 4, y: 16 },
    { x: 4, y: 17 }, { x: 4, y: 18 }, { x: 4, y: 19 }, { x: 4, y: 20 },
    ///////////
    { x: 5, y: 1 }, { x: 5, y: 3 }, { x: 5, y: 4 },
    { x: 5, y: 5 }, { x: 5, y: 6 }, { x: 5, y: 7 }, { x: 5, y: 8 },
    { x: 5, y: 9 }, { x: 5, y: 10 }, { x: 5, y: 11 }, { x: 5, y: 12 },
    { x: 5, y: 13 }, { x: 5, y: 14 }, { x: 5, y: 15 }, { x: 5, y: 16 },
    { x: 5, y: 17 }, { x: 5, y: 18 }, { x: 5, y: 19 }, { x: 5, y: 20 },
    ///////////
    { x: 6, y: 4 },
    { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 6, y: 7 }, { x: 6, y: 8 },
    { x: 6, y: 9 }, { x: 6, y: 10 }, { x: 6, y: 11 }, { x: 6, y: 12 },
    { x: 6, y: 13 }, { x: 6, y: 14 }, { x: 6, y: 15 }, { x: 6, y: 16 },
    { x: 6, y: 17 }, { x: 6, y: 18 }, { x: 6, y: 19 }, { x: 6, y: 20 },
    ///////////
    { x: 7, y: 4 },
    { x: 7, y: 5 }, { x: 7, y: 6 }, { x: 7, y: 7 }, { x: 7, y: 8 },
    { x: 7, y: 9 }, { x: 7, y: 10 }, { x: 7, y: 11 }, { x: 7, y: 12 },
    { x: 7, y: 13 }, { x: 7, y: 14 }, { x: 7, y: 15 }, { x: 7, y: 16 },
    { x: 7, y: 17 }, { x: 7, y: 18 }, { x: 7, y: 19 }, { x: 7, y: 20 },
    ///////////
    { x: 8, y: 4 },
    { x: 8, y: 5 }, { x: 8, y: 6 }, { x: 8, y: 7 }, { x: 8, y: 8 },
    { x: 8, y: 9 }, { x: 8, y: 11 }, { x: 8, y: 12 },
    { x: 8, y: 13 }, { x: 8, y: 14 }, { x: 8, y: 15 }, { x: 8, y: 16 },
    { x: 8, y: 18 }, { x: 8, y: 19 }, { x: 8, y: 20 },
    ///////////
    { x: 9, y: 4 }, { x: 9, y: 3 }, { x: 9, y: 1 },
    { x: 9, y: 5 }, { x: 9, y: 6 }, { x: 9, y: 7 }, { x: 9, y: 8 },
    { x: 9, y: 12 },
    { x: 9, y: 13 }, { x: 9, y: 14 }, { x: 9, y: 15 },
    { x: 9, y: 19 }, { x: 9, y: 20 },
    ///////////
    { x: 10, y: 4 }, { x: 10, y: 3 }, { x: 10, y: 1 },
    { x: 10, y: 5 }, { x: 10, y: 6 }, { x: 10, y: 7 },
    { x: 10, y: 13 }, { x: 10, y: 14 }, { x: 10, y: 20 },
    ///////////
    { x: 11, y: 3 }, { x: 11, y: 1 },
    { x: 11, y: 5 }, { x: 11, y: 6 }, { x: 11, y: 7 },
    { x: 11, y: 13 }, { x: 11, y: 14 }, { x: 11, y: 20 },
    ///////////
    { x: 12, y: 6 }, { x: 12, y: 7 }, { x: 12, y: 8 }, { x: 12, y: 12 }, { x: 12, y: 15 },
    { x: 12, y: 13 }, { x: 12, y: 14 }, { x: 12, y: 19 }, { x: 12, y: 20 },
    ///////////
    { x: 13, y: 7 }, { x: 13, y: 8 }, { x: 13, y: 9 }, { x: 14, y: 7 }, { x: 14, y: 8 },
    { x: 14, y: 9 }, { x: 15, y: 7 }, { x: 15, y: 8 }, { x: 15, y: 9 }, , { x: 16, y: 8 }, { x: 16, y: 9 },
    ///////////
    { x: 13, y: 20 }, { x: 13, y: 18 }, { x: 13, y: 19 }, { x: 14, y: 20 }, { x: 14, y: 18 },
    { x: 14, y: 19 }, { x: 15, y: 20 }, { x: 15, y: 18 }, { x: 15, y: 19 },
    { x: 16, y: 20 }, { x: 16, y: 18 }, { x: 16, y: 19 },
    ///////////
    { x: 13, y: 11 }, { x: 13, y: 12 }, { x: 13, y: 13 }, { x: 14, y: 14 }, { x: 14, y: 15 },
    { x: 14, y: 16 }, { x: 15, y: 11 }, { x: 15, y: 12 }, { x: 15, y: 13 },
    { x: 16, y: 14 }, { x: 16, y: 15 }, { x: 16, y: 16 },
    { x: 13, y: 14 }, { x: 13, y: 15 }, { x: 13, y: 16 }, { x: 14, y: 11 }, { x: 14, y: 12 },
    { x: 14, y: 13 }, { x: 15, y: 14 }, { x: 15, y: 15 }, { x: 15, y: 16 },
    { x: 16, y: 11 }, { x: 16, y: 12 }, { x: 16, y: 13 },
]

export function draw(gameBoard, arrayRemoves, toolsArr) {
    let phh = document.querySelector('#store')
    phh.addEventListener('click', () => {
        toolsArr[0].bool = false
        toolsArr[1].bool = false
        toolsArr[2].bool = false
        toolsArr[3].bool = true
    })
    console.log(arrayRemoves);
    skyBody.forEach(segment => {
        const skyElement = document.createElement('div')
        skyElement.style.gridRowStart = segment.x
        skyElement.style.gridColumnStart = segment.y
        skyElement.classList.add('sky')
        gameBoard.appendChild(skyElement)

        let skyUpdate = skyElement
        let skyUpdateX = skyElement.style.gridRowStart
        let skyUpdateY = skyElement.style.gridColumnStart
        skyUpdate.addEventListener('click', () => {
            if (toolsArr[3].bool && arrayRemoves[0] != null) {
                skyUpdate.remove()
                const sa = document.createElement('div')
                sa.style.gridRowStart = skyUpdateX
                sa.style.gridColumnStart = skyUpdateY
                sa.classList.add(`${arrayRemoves[0]}`)
                gameBoard.appendChild(sa)
                console.log(arrayRemoves[0]);
            }
            arrayRemoves[0] = null
        })
    })
}
