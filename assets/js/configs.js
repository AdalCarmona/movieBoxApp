const headersTMDB = {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWU1NGVkNzE4NjhjYjc0MDA0MzI3NTQzYjIxMGQwMSIsIm5iZiI6MTc2NDIxNzQ2OC41NTYsInN1YiI6IjY5MjdkMjdjOGIyYjcxNjM2YTI2YzNjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UgchnsOZCjs8BNIRvGCS2sWfbGnajTpTyE7taGyKDzo",
                "accept": "application/json"
            }

const URLTMDB = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

export default {
    headersTMDB,
    URLTMDB
}