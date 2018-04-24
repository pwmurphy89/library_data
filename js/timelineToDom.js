//app to print timeline of history to the DOM
const printTimeline = () => {
    //obtain ref to output element
    const output = document.querySelector("#output")
    const fragment = document.createDocumentFragment()
    newItem = timeline.pop();

        const section = document.createElement("section")
        const text = document.createElement("p")
        text.textContent = `${newItem.who} ${newItem.what} on ${newItem.when}`
        section.appendChild(text)
        fragment.appendChild(section)

    output.appendChild(fragment)
}

