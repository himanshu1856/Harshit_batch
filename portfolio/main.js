document.addEventListener('DOMContentLoaded', () => {

    function handleDelete() {
        if (index == -1) {
            index = 0
            arrayIdx++;
            iterateOverArray()
            console.log("Inside if")
            return
        }
        index--;
        content = content.substring(0, index - 1)
        dynamicspan.textContent = content
        setTimeout(handleDelete, 200)
    }

    function handlePrint(text) {
        if (index == text.length) {
            handleDelete(text)
            return
        }
        content += text[index]
        dynamicspan.textContent = content
        index++
        setTimeout(handlePrint, 200, text)
    }

    function iterateOverArray() {
        if (arrayIdx == phrases.length) {
            arrayIdx = 0
        }
        let text = phrases[arrayIdx]
        handlePrint(text)
    }

    const dynamicspan = document.querySelector("#dynamic-text")

    const phrases = ["I am a Web Developer...", "I am pursuing B.Tech..."]
    let content = ""
    let index = 0
    let arrayIdx = 0

    iterateOverArray()

})




