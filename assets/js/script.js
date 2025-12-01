import callingAPI from "./Requests.js"

//const PATH = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
const PATH2 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

const headers = {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWU1NGVkNzE4NjhjYjc0MDA0MzI3NTQzYjIxMGQwMSIsIm5iZiI6MTc2NDIxNzQ2OC41NTYsInN1YiI6IjY5MjdkMjdjOGIyYjcxNjM2YTI2YzNjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UgchnsOZCjs8BNIRvGCS2sWfbGnajTpTyE7taGyKDzo",
                "accept": "application/json"
            }

const id = 'High'
const PATH = 'https://imdb.iamidiotareyoutoo.com/search?q=' + id + "&tt=&lsn=1&v=1"

callingAPI(PATH)
callingAPI(PATH2,headers)
//console.log(callingAPI(PATH2))

// CAROUSEL Control 

const track = document.querySelector ('.row-cards');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');

let index = 0;
const maxIndex = 2;

nextBtn.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        moveCarousel();
    } 
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        moveCarousel();
    } 
});

function moveCarousel() {
    const width = document.querySelector('.window-track').clientWidth;
    track.style.transform = `translateX(${-width * index}px)`;
}