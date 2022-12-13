const dynamicspan = document.querySelector("#dynamic-text")

const textArray = ["Developer"]
const text = textArray[0]
let content = ""
let index = 0
function handleContent(c,text){
    if(index == text.length){
        return
    }
    c += text[index]
    dynamicspan.textContent = c
    index++
    setTimeout(handleContent,500,c,text)
}

handleContent(content,text)

