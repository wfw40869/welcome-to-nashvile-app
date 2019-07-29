const renderResults = (concertObj) => {
    return `
        <li>
            <p class="concert__name">${concertObj.name}</p>
            <p>Date: ${concertObj.dates.start.localDate}</p>
            <p>Location: <span class="concert__location">${concertObj._embedded.venues[0].name}</span></p>
            <a href="${concertObj.url}" class="tickets__button" target="_blank">But Tickets</a>
            <button class="save__button">Save to Itinerary</button>
        </li>
    `
}