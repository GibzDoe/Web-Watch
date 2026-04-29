const musics = [
    "./musics/text copy.txt",
    "./musics/text.txt"
]

function CreateList(name) {
    const aL = document.createElement("a")
    aL.innerText = name
    document.querySelector(".list").appendChild(aL)
}

musics.forEach(stuff => {
    console.log(stuff)
    CreateList(stuff)
})
