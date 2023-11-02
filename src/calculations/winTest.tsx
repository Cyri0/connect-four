const stripLine = (line: number[])=> {
    let newLine: number[] = []
    let click = false
    line.forEach(e => {
        if(e > 0) click = true
        if(click) newLine.push(e)
    })

    line = newLine
    newLine = []
    click = false
    line.reverse().forEach(e => {
        if(e > 0) click= true
        if(click) newLine.push(e)
    })
    
    return newLine
}

const rowTest = (line: number[]): boolean => {
    let counter: number = 0
    let sample: number = line.length > 0 ? line[0] : 0
    
    let strippedLine = stripLine(line).reverse()

    strippedLine.forEach(e => {
        if(e === sample && sample !== 0){
            counter++
        }else if(e !== sample && e !== 0){
            sample = e
            counter = 1
        }else{
            counter = 0
        }
    })

    if (counter >= 4)
        return true
    return false
}

const verticalTest = (m: number[][]): boolean => {
    let res = false
    m.forEach(line => {
        if (rowTest(line))
                res = true
    })
    return res
}

const horizontalTest = (m: number[][]): boolean => {
    for (let column = 0; column < 6; column++) {
        let line: number[] = []
        for (let row = 0; row < 7; row++) {

            if (m[row][column] === undefined) {
                line.push(0)
            }
            else {
                line.push(m[row][column])
            }
        }
        if (rowTest(line))
            return true
    }
    return false
}

const diagonalTest = (m: number[][]) => {

    let rowNum = 7
    let colNum = 6

    for (let row = 0; row <= rowNum - 4; row++) {
        for (let col = 0; col <= colNum - 4; col++) {
            if (
                m[row][col] === m[row + 1][col + 1] &&
                m[row][col] === m[row + 2][col + 2] &&
                m[row][col] === m[row + 3][col + 3] &&
                m[row][col] !== undefined
            ) {
                return true;
            }
        }
    }

    for (let row = rowNum - 1; row >= 3; row--) {
        for (let col = 0; col <= colNum - 4; col++) {
            if (
                m[row][col] === m[row - 1][col + 1] &&
                m[row][col] === m[row - 2][col + 2] &&
                m[row][col] === m[row - 3][col + 3] &&
                m[row][col] !== undefined
            ) {
                return true;
            }
        }
    }
    return false
}

const tieTest = (m:number[][]) => {
    let tie = 6 * 7
    let count = 0

    m.forEach(l => {
        count += l.length
    })

    return count === tie
}

export const winTest = (m: number[][]): boolean|null => {
    if(horizontalTest(m)) return true
    if(verticalTest(m)) return true
    if(diagonalTest(m)) return true
    if(tieTest(m)) return null

    return false
}