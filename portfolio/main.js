const dynamicspan = document.querySelector("#dynamic-text")

const textArray = ["Developer"]
const text = textArray[0]
let content = ""
let index = 0

function handleDelete(c,text){
    if(index == -1){
        return
    }
    index--;
    c = c.substring(0,index -1)
    dynamicspan.textContent = c
    setTimeout(handleDelete,500,c,text)
}

function handlePrint(c,text){
    if(index == text.length){
        handleDelete(c,text)
        return
    }
    c += text[index]
    dynamicspan.textContent = c
    index++
    setTimeout(handlePrint,500,c,text)
}

handlePrint(content,text)

