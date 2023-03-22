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
    console.log(fetch);

    