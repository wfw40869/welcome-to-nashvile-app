const genreInput = document.querySelector("#concertGenre"),
    genreSubmitButton = document.querySelector(".findConcertsButton"),
    resultsContainer = document.querySelector("#displayedResults")

console.log(genreInput)
console.log(genreSubmitButton)




genreSubmitButton.addEventListener("click", () => {
    //prevent default form behavior
    event.preventDefault()
    //store genre user inputted
    const genre = genreInput.value
    //if its empty alert the user

    //else fetch the concerts
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${genre}&dmaId=343&apikey=TNUGpAZlZGZaSl736abqTUVPBxKhgTvF`)
        .then(concerts => concerts.json())
        .then(parsedConcerts => {
            const concertResultsArray = parsedConcerts._embedded
            resultsContainer.innerHTML = ""
            // If the event isn't found or if the genre input is left blank
            if (concertResultsArray === undefined || genre === "") {
                resultsContainer.innerHTML = "No events found. Please try again"
            } else {
                // loop through the concertResults array
                concertResultsArray.events.forEach(concert => {
                    //add the concert to the results container
                    resultsContainer.innerHTML += renderResults(concert)
                })
                console.log(concertResultsArray.events)
            }
            saveEventToItinerary()
        })
})

const saveEventToItinerary = () => {
    const saveToItineraryButtons = document.querySelectorAll(".save__button")



    saveToItineraryButtons.forEach(saveButton => {
        saveButton.addEventListener("click", (e) => {
            const concertSpan = document.querySelector("#savedConcert__span"),
                concertName = e.target.parentElement.childNodes[1],
                concertLocation = e.target.parentElement.childNodes[5].children[0].textContent
            console.log(e)
            console.log(e.target.parentElement.childNodes[1])
            console.log(e.target.parentElement.childNodes[5].children)
            concertSpan.textContent = `${concertName.textContent} at ${concertLocation}`
        })
    })
}

