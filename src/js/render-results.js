const renderResults = (concertObj) => {
    return `
        <li>
            <h3 class="concert__name">${concertObj.name}</h3>
            <p>Date: <span class="date__span">${concertObj.dates.start.localDate}</span></p>
            <p>Location: <span class="location__span">${concertObj._embedded.venues[0].name}</span></p>
            <a href="${concertObj.url}" class="tickets__button" target="_blank">Buy Tickets</a>
            <button class="save__button">Save to Itinerary</button>
        </li>
    `
}