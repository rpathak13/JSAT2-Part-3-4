//4.1
class Movie {
    constructor(id, title, year, rating) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
}
console.log(Movie);

//4.2
const defaultMovies = [
    { id: 6, title: "Inception", year: 2010, rating: 8 },
    { id: 8, title: "The Dark Knight", year: 2008, rating: 9 },
    { id: 3, title: "Interstellar", year: 2014, rating: 10 },
    { id: 4, title: "The Fast and the Furious: Tokyo Drift", year: 2006, rating: 9 },
    { id: 5, title: "Avengers: Endgame", year: 2019, rating: 9 },
    { id: 1, title: "Avengers: Infinity War", year: 2018, rating: 10 },
    { id: 7, title: "Demon Slayer: Infinity Casstle", year: 2025, rating: 9 },
    { id: 2, title: "The Hangover", year: 2009, rating: 10 },
    { id: 10, title: "The Dictator", year: 2012, rating: 8.5 },
    { id: 12, title: "Spider-Man: No Way Home", year: 2021, rating: 10 },
    { id: 9, title: "Dragon Ball Super: Broly", year: 2018, rating: 9 },
    { id: 11, title: "F1: The Movie", year: 2025, rating: 8 },
];
console.log(defaultMovies);

//4.3
defaultMovies.sort(function (a, b) {
    return a.id - b.id;
});
console.log("Movies sorted by id:");
console.log(defaultMovies);

//4.4
//Binary search function to find a movie by id
function binarySearch(movies, targetId) {
    let left = 0;
    let right = movies.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (movies[mid].id === targetId) {
            return movies[mid];
        } else if (movies[mid].id < targetId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return null; // Movie not found
}

//Test the binary search function
const targetId = 7;
const foundMovie = binarySearch(defaultMovies, targetId);
if (foundMovie) {
    console.log(`Movie with id ${targetId} found:`);
    console.log(foundMovie);
} else {
    console.log(`Movie with id ${targetId} not found.`);
    console.log('0');
}   