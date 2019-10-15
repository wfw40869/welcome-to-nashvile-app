const concertSpan = document.querySelector("#savedConcert__span")
const url = `https://murmuring-hollows-75136.herokuapp.com`

const getItinerary = () => {
    fetch(`${url}/itinerary`)
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






