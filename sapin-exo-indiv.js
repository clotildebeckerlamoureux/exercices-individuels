let star = ["&nbsp;&nbsp;","&nbsp;","+","&nbsp;","&nbsp;"]
let firstRow = ["&nbsp;&nbsp;","/","*","\\","&nbsp;"]
let secondRow = ["/","*","*","*","\\"]

function sapin1 (call) {
    call = prompt("Choisis un nombre entre 1 et 5")
    if (call == 1) {
        let sapin1_1 = [star.join(' ') + '<br />', firstRow.join(' ') + '<br />', secondRow.join(' ') + '<br />']
        document.write(sapin1_1.join(' '))
    }
}

sapin1()

