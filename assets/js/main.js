// Step 1: Wait for document to be ready and jQuery to be loaded
$(document).ready(function () {
  console.log("Document ready, loading categories...");

  // Step 2: Call the loadCategories function to populate the dropdown
  // This function is defined in getCategory/script.js
  if (typeof loadCategories === "function") {
    loadCategories();
  } else {
    console.error("loadCategories function not found!");
  }
});

$(document).ready(function(){
  $("search-button").click(function(){
    console.log("doing something")
    getMovies()
  });
});