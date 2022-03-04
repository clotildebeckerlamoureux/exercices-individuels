let star = ["&nbsp;&nbsp;","&nbsp;","+","&nbsp;","&nbsp;"]
let firstRow = ["&nbsp;&nbsp;","/","*","\\","&nbsp;"]
let secondRow = ["/","*","*","*","\\"]
let sapin1_1 = [star.join(' ') + '<br />', firstRow.join(' ') + '<br />', secondRow.join(' ') + '<br />']

function sapin1 () {
    for (var i = 0; i < sapin1_1[star.length]; i++) { 
        document.write(sapin1_1[star[i]])
    }
    
    for (var i = 0; i < sapin1_1[firstRow.length]; i++) { 
        document.write(sapin1_1[firstRow[i]])
    }
    
    for (var i = 0; i < sapin1_1[secondRow.length]; i++) { 
        document.write(sapin1_1[secondRow[i]])
    }
}

//sapin1()

document.write(sapin1_1.join(' '))