# MovieBox - Movie Discovery App

A modern web application for discovering and browsing movies using The Movie Database (TMDB) API. MovieBox provides an intuitive interface to search for movies, filter by genre, and browse through popular films in an interactive carousel.

## Features

- 🔍 **Movie Search**: Search for movies by title
- 🎬 **Genre Filtering**: Filter movies by genre/category
- 🎠 **Interactive Carousel**: Browse through movie posters with smooth navigation
- 📱 **Responsive Design**: Clean and modern UI with hover effects
- 🎨 **Modern Styling**: Beautiful card-based layout with smooth transitions

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with flexbox and transitions
- **JavaScript (ES6+)**: Modern JavaScript with modules
- **jQuery**: DOM manipulation and AJAX requests
- **The Movie Database (TMDB) API**: Movie data and genre information

## Project Structure

```
movieBoxApp/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Stylesheet
│   └── js/
│       ├── main.js         # Main application logic
│       ├── configs.js      # API configuration
│       ├── getMovies.js    # Movie fetching functionality
│       ├── Movie.js        # Movie class definition
│       ├── getCategory/
│       │   └── script.js   # Category/genre loading
│       ├── getCategoryIds.js
│       ├── Requests.js
│       └── temp.js
└── README.md
```

## Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)
- TMDB API key (if you want to use your own)

### Installation

1. Clone or download this repository
2. Open the project folder in your code editor
3. If using a local server, start it in the project root directory

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (http-server)
   npx http-server
   ```

4. Open `index.html` in your web browser or navigate to `http://localhost:8000`

### API Configuration

The project uses The Movie Database (TMDB) API. The API configuration is stored in `assets/js/configs.js`.

**Note**: The current configuration includes API credentials. For production use, consider:

- Moving API keys to environment variables
- Using a backend proxy to hide API keys
- Implementing proper API key management

## Usage

1. **Search for Movies**:

   - Enter a movie title in the search box
   - Click the "Search" button

2. **Filter by Genre**:

   - Select a genre from the category dropdown
   - The dropdown is automatically populated with available genres from TMDB

3. **Browse Movies**:
   - Use the left/right arrow buttons to navigate through the movie carousel
   - Hover over movie posters for visual feedback

## Features in Development

- Movie details display
- Movie recommendations
- User favorites/bookmarks
- Advanced search filters

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a class project. Contributions and improvements are welcome!

## License

This project is for educational purposes.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie API
- jQuery team for the JavaScript library

---

© 2025 MovieBox
