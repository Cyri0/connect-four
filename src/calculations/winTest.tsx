const rowTest = (line: number[]): boolean => {
    let counter: number = 0
    let sample: number = 0

    line.forEach(e => {
        if (sample == 0) {
            sample = e
            counter++
        }
        else if (e == sample) {
            counter++
        }
        else {
            if(e != 0){
                sample = e
                counter = 1
            }
        }
    })
    if (counter == 4)
        return true
    return false
}

const verticalTest = (m: number[][]) => {
    m.forEach(line => {
        if (rowTest(line))
            console.log(`YOU WIN! - (vertical)`)
    })
}

const horizontalTest = (m: number[][]) => {
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
        // console.log(line);

        if (rowTest(line))
            console.log(`YOU WIN! - (horizontal)`)
    }
    console.log()
}



export const winTest = (m: number[][]) => {
    verticalTest(m)
    horizontalTest(m)
}