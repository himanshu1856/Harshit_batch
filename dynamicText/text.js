const text = "Developer"

let content = ""
let index = 0

function handleContent(c,text){
    if(index == text.length){
        console.log("Inside if")
        return
    }
    c += text[index]
    console.log(c)
    index++
    setTimeout(handleContent,1000,c,text)
}

handleContent(content,text,0)
/*
D
De
Dev
Devl
Devlo
Devlop
Devlope
Devloper
*/