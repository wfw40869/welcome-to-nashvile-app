const concertSpan = document.querySelector("#savedConcert__span")

fetch(`http://localhost:8088/itinerary`) 
    .then(itinerary => itinerary.json()) 
    .then(parsedItinerary => {
        console.log(parsedItinerary)
        concertSpan.innerHTML = parsedItinerary.concert
    })

