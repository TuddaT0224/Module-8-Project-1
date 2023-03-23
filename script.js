<<<<<<< HEAD
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '37319f6c92msh9c130a5b873f9ccp137b95jsn6a0c24e2a0c1',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    console.log(fetch)

    
$(document).ready(function () {
    
    $("#searchBtn").on("click", function () {

        var searchTerm = $("#movieNameSearch").val();

        $("movieNameSearch").val("");
        
        
    })
})
=======
const form = document.getElementById('book-search');
const searchTermInput = document.getElementById('search-term');
const searchResultsList = document.getElementById('search-results');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchTermInput.value;
  const apiUrl = `https://openlibrary.org/search.json?q=${searchTerm}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const bookListItems = data.docs.map(book => {
        const title = book.title || 'Unknown Title';
        const author = book.author_name ? book.author_name.join(', ') : 'Unknown Author';
        return `
          <li>
            <strong>${title}</strong> by ${author}
          </li>
        `;
      });
      searchResultsList.innerHTML = bookListItems.join('');
    })
    .catch(error => console.error(error));
});
>>>>>>> e8ffe2de4db0541d99b934671bc1e2b540b2119d
