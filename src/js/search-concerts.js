const genreInput = document.querySelector("#concertGenre"),
    genreSubmitButton = document.querySelector(".findConcertsButton"),
    resultsContainer = document.querySelector("#displayedResults")


getItinerary()

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
            }

        })
        .then(() => {
            //save the event to the Itinerary API
            saveEventToItinerary()
        })

})

const saveEventToItinerary = () => {
    const saveToItineraryButtons = document.querySelectorAll(".save__button")

    saveToItineraryButtons.forEach(saveButton => {
        saveButton.addEventListener("click", (e) => {
            // select span to display itinerary, the Name of the Concert and location
            const concertName = e.target.parentElement.childNodes[1].textContent,
                concertLocation = e.target.parentElement.childNodes[5].children[0].textContent,
                concertObject = {
                    id: 1,
                    concert: `${concertName} at ${concertLocation}`
                }
                
            // save event to itinerary API
            postOrPutItinerary("https://murmuring-hollows-75136.herokuapp.com/itinerary?id=1", concertObject)
        })
    })
}

