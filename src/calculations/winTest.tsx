const rowTest = (line: number[]): boolean => {
    let counter: number = 0
    let sample: number = -1

    line.forEach(e => {
        if (sample == -1 && e > 0) {
            sample = e
            counter++
        }
        else if (e == sample) {
            counter++
        }
        else {
            if(e > 0){
                sample = e
                counter = 1
            }
        }
    })

    // console.log(`${line} - (${counter})`);

    if (counter == 4)
        {
            console.log(`Player${sample} win`);
            
            return true
        }
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
        if (rowTest(line))
            {console.log(`YOU WIN! - (horizontal)`)
            console.log(`${column} - ${line}`)}
    }
}

const diagonalTest = (m:number[][]) => {
   
    let rowNum = 7
    let colNum = 6

    for (let row = 0; row <= rowNum - 4; row++) {
        for (let col = 0; col <= colNum - 4; col++) {
            // console.log('DIagonal test');
            
        //   console.log(`${m[row][col]},${m[row + 1][col + 1]},${m[row + 2][col + 2]},${m[row + 3][col + 3]}`);
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

export const winTest = (m: number[][]) => {
    verticalTest(m)
    horizontalTest(m)
    console.log(diagonalTest(m));
    
}