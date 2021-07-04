import moviesCollection from './movies.json'

import './main.scss'

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.getElementById('cards')
    console.log(moviesCollection);
    const moviesdata = moviesCollection;
    moviesdata.forEach(movie => {
        let cardDOM = buildCardDOM(movie)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })
})


function buildCardDOM(movie) {

    const icon = {
        bad: "https://staticv2-4.rottentomatoes.com/static/images/icons/splat-16.png",
        good: "https://staticv2-4.rottentomatoes.com/static/images/icons/fresh-16.png",
        verygood: "https://staticv2-4.rottentomatoes.com/static/images/icons/CF_16x16.png"
    };
    let i = movie.tomatoScore;
    let icons
    if (i <= 60) {
        icons = `<img class="icon" src="${icon.bad}" alt="#">`
    }
    else if (i <= 80) {
        icons = `<img class="icon" src="${icon.good}" alt="#">`
    }
    else {
        icons = `<img class="icon" src="${icon.verygood}" alt="#">`
    }

    return (
        `<div class="card">
        <img src="${movie.posters.primary}" alt="#">
        <div class="movie-info">
            <div class="Title">${movie.title}</div>
            <div class="tomatoScore">${icons}${movie.tomatoScore}%</div>
            <div class="dvdReleaseDate">Available ${movie.dvdReleaseDate}</div>
        </div>
       </div>`
    )
}



