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

// $(document).ready(function () {
//   //search button feature 
//   $("#searchBtn").on("click", function () {
//     //get value in input search-value.
//     var moviesearchTerm = $("#movieNameSearch").val();
//     //empty input field.
//     $("#movieNameSearch").val("");
//     movieTitle(moviesearchTerm);
//     movieId(moviesearchTerm);
//   }); 
// });

  // // enter in the key code
  // $("#searchBtn").keypress(function (event) {
  //   var keycode = (event.keyCode ? event.keyCode : event.which);
  //   if (keycode === 13) {
  //     movieTitle(moviesearchTerm);
  //     movieId(moviesearchTerm);
  //   }
  // });

// Movie IMDB API Fetch command
fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '37319f6c92msh9c130a5b873f9ccp137b95jsn6a0c24e2a0c1',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
})

	.then(response => response.json())
	.then(data => {
    const list = data;

    list.map((element) => {
      const name = element.title;
      const poster = element.image;
      const genre = element.genre;
      const rank = element.rank;
      const movie = `<li><img src="${poster}"> <h2>${rank}</h2> <h2>${name}</h2> <h3>${genre}</h3></li> `
      document.querySelector('.movies').innerHTML += movie;
    
    })
  })
  .catch(error => console.error(error));





