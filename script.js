const form = document.getElementById('book-search');
const searchTermInput = document.getElementById('search-term');
const searchResultsList = document.getElementById('search-results');
const categoryButtons = document.querySelectorAll('.category-button');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  searchBooks(searchTermInput.value);
});
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    searchBooks(category);
  });
});
function searchBooks(searchTerm) {
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
}