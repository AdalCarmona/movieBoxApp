var apiKey = "d7767b590a17c198fed002bd785a1fbb";

var inputQuery = document.getElementById("search-box");
var categoryBox = document.getElementById('category-box');
var searchButton = document.getElementById("search-button");
var movieDescription = document.getElementById("movie-description");

// Construcción genre url
var genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + apiKey;

console.log(genreURL);

// Generar html dinamico del carousel y peticion fetch(queryURL)
var carousel = document.querySelector('.carousel');

searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  var queryMovie = inputQuery.value;
  console.log(queryMovie);

  // Construcción query url
  var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + encodeURIComponent(queryMovie);

  fetch(queryURL)
    .then(function(response) {
      return response.json();
    })
    .then (function(data) { 
      console.log(data.results); // revisar que imprime ?!

      carousel.innerHTML = '';    // Limpiar carousel

      data.results.forEach(function(movie) {
        if (!movie.poster_path) return; // Evitar posters vacíos
        var posterURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

        // Se crea carousel dinamico
        var item = document.createElement('a');
        item.classList.add('carousel-item');
        item.href = '#';
        item.dataset.movieId = movie.id;
        item.innerHTML = `
                <div class="carousel-content">
                    <img src="${posterURL}">
                    <h3 class="caption">${movie.title}</h3>
                </div>
              `;
              carousel.appendChild(item);
      });
      // Reinicializar carousel
      M.Carousel.init(carousel, {
        indicators: true,
        duration: 200,
        padding: 10,
      });
    })
      .catch(function(error) {
        console.error(error);
      
      });
});

// Petición fetch() para desplegar generos
fetch(genreURL)
    .then(function(response) {
        return response.json(); // Convertir respuesta a JSON
    })
    .then(function(data) {
        // console.log(data);

        data.genres.forEach(function(genre) {
          var option = document.createElement('option');
          option.value = genre.id;
          option.textContent = genre.name;
          categoryBox.appendChild(option);
      });
})
.catch(function(error) {
    console.error('Error:', error);
    });

// Petición fetch() despues de seleccionar algun genero 
categoryBox.addEventListener('change', function(event) {

  event.preventDefault();

  var selectedGenre = categoryBox.value;
  var selectedGenreURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&with_genres=" + selectedGenre;

  fetch(selectedGenreURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data.results);

      carousel.innerHTML= '';

      data.results.forEach(function(movie) {
        console.log(movie.title);
        if (!movie.poster_path) return; // Evitar posters vacíos
        var posterURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

        // Se crea carousel dinamico
        var item = document.createElement('a');
        item.classList.add('carousel-item');
        item.href = '#';
        item.dataset.movieId = movie.id;
        item.innerHTML = `
                <div class="carousel-content">
                    <img src="${posterURL}">
                    <h3 class="caption">${movie.title}</h3>
                </div>
              `;
              carousel.appendChild(item);
          });
      // Reinicializar carousel
          M.Carousel.init(carousel, {
            indicators: true,
            duration: 200,
            padding: 10,
          });
      })
        .catch(function(error) {
          console.error(error);
      });
  });

// Fetch and display movie details when a carousel item is clicked.
carousel.addEventListener('click', async function(event) {
  var item = event.target.closest('.carousel-item');
  if (!item) return;

  event.preventDefault();
  movieDescription.textContent = 'Cargando descripción...';

  try {
    var detailsURL = `https://api.themoviedb.org/3/movie/${item.dataset.movieId}?api_key=${apiKey}&language=en-US`;
    var response = await fetch(detailsURL);

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}`);
    }

    var movie = await response.json();
    movieDescription.textContent = movie.overview || 'No hay descripción disponible.';
  } catch (error) {
    console.error('Error al cargar la descripción:', error);
    movieDescription.textContent = 'No se pudo cargar la descripción.';
  }
});

