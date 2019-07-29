const genreInput = document.querySelector("#concertGenre")
const genreSubmitButton = document.querySelector(".findConcertsButton")

console.log(genreInput)
console.log(genreSubmitButton)




genreSubmitButton.addEventListener("click", () => {
    event.preventDefault()
    const genre = genreInput.value
    if (genre === "") {
        alert("Please enter a genre to search for")
    }

    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${genre}&dmaId=343&apikey=TNUGpAZlZGZaSl736abqTUVPBxKhgTvF`)
        .then(concerts => concerts.json())
        .then(parsedConcerts => {
            console.log(parsedConcerts._embedded.events)
        })
})

