// Step 1: Define the API key and endpoint
const apiKey = "a07c71098c0a43b58d09f2fbf8af3602";
const apiUrl = "https://api.themoviedb.org/3/genre/movie/list";

// Step 2: Create function to load categories using jQuery
function loadCategories() {
  // Get jQuery from global scope (window object)
  const $ = window.jQuery || window.$;

  // Check if jQuery is available
  if (!$) {
    console.error("jQuery ($) is not available in loadCategories");
    return;
  }

  // Get the category dropdown element using jQuery
  const $categoryBox = $("#category-box");

  // Check if element exists
  if ($categoryBox.length === 0) {
    console.error("Category box element not found!");
    return;
  }

  console.log("Starting to load categories from API...");

  // Step 3: Make AJAX request to fetch genres
  $.ajax({
    url: apiUrl,
    method: "GET",
    data: {
      api_key: apiKey,
      language: "en-US",
    },
    success: function (data) {
      // Check if we received valid data
      if (!data || !data.genres) {
        console.error("No genres data received");
        return;
      }

      // Step 4: Clear existing options (keep the default option)
      $categoryBox.html('<option value=""> Select category </option>');

      // Step 5: Sort genres alphabetically (A to Z)
      const sortedGenres = data.genres.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      // Step 6: Add each genre as an option to the dropdown
      $.each(sortedGenres, function (index, genre) {
        $categoryBox.append(
          `<option value="${genre.id}">${genre.name}</option>`
        );
      });

      console.log(`Successfully loaded ${sortedGenres.length} categories`);
    },
    error: function (xhr, status, error) {
      console.error("Error loading categories:", status, error);
    },
  });
}

// Step 7: Make the function available globally (no export needed for regular scripts)
// The function is already defined and can be called from main.js

//=======Carousel=======
M.Carousel.init(document.querySelector('.carousel'), {
    indicators: true,
    duration: 200,
    padding: 10,
});



