const movies = [
	{title: "Inception", director: "Christopher Nolan", yearReleased: 2010},
	{title: "Interstellar", director: "Christopher Nolan", yearReleased: 2014},
	{title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", yearReleased: 1999},
	{title: "Blade Runner 2049", director: "Denis Villeneuve", yearReleased: 2017},
	{title: "The Martian", director: "Ridley Scott", yearReleased: 2015},
	{title: "Ex Machina", director: "Alex Garland", yearReleased: 2014},
	{title: "Arrival", director: "Denis Villeneuve", yearReleased: 2016},
	{title: "Eternal Sunshine of the Spotless Mind", director: "Michel Gondry", yearReleased: 2004},
	{title: "Minority Report", director: "Steven Spielberg", yearReleased: 2002},
	{title: "Ex Machina", director: "Alex Garland", yearReleased: 2014}
];

movies.forEach(function (movie)
			   {
	               console.log(`${movie.title} (${movie.yearReleased}) directed by ${movie.director}`);
			   });
// Output:
// Inception (2010) directed by Christopher Nolan
// Interstellar (2014) directed by Christopher Nolan
// The Matrix (1999) directed by Lana Wachowski, Lilly Wachowski
// Blade Runner 2049 (2017) directed by Denis Villeneuve
// The Martian (2015) directed by Ridley Scott
// Ex Machina (2014) directed by Alex Garland
// Arrival (2016) directed by Denis Villeneuve
// Eternal Sunshine of the Spotless Mind (2004) directed by Michel Gondry
// Minority Report (2002) directed by Steven Spielberg
// Ex Machina (2014) directed by Alex Garland