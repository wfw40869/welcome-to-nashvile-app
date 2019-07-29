const concertSpan = document.querySelector("#savedConcert__span")

const getItinerary = () => {
    fetch(`http://localhost:8088/itinerary`)
        .then(itinerary => itinerary.json())
        .then(parsedItinerary => {
            concertSpan.innerHTML = parsedItinerary.concert
        })
}

const postOrPutItinerary = (url, data) =>
    fetch(url)
        .then(itinerary => itinerary.json())
        .then(parsedItinerary => {
            // IF the data doesn't exist then POST it
            if (!parsedItinerary.hasOwnProperty("id")) {
                return fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify(data),
                })
                    .then(response => response.json()) // parses JSON response into native JavaScript objects 
            } else {
                // ELSE use PUT Method to update the itinerary
                return fetch(url, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify(data),
                })
                    .then(response => response.json()) // parses JSON response into native JavaScript objects 
            }
        })
        .then(() => {
            getItinerary()
        })






