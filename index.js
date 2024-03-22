let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
    console.log(count)
    console.log(countEl)
}

function decrement(){
    count = count - 1
    countEl.innerText = count
    console.log(countEl)
    console.log(count)
}

function reset(){
    count = count - count
    countEl.innerText = count
    console.log(count)
    console.log(countEl)
}

let saveEl = document.getElementById("save-el")



function save(){
    //entries which are saves has to rendered to page as previous entries -- 1-4-5
    // console.log(count)
    saveEl.textContent = saveEl.innerText + " - " +count
}


