const planets = [
	{name: "Mercury", temperature: 440, distance: 0.39},
	{name: "Venus", temperature: 737, distance: 0.72},
	{name: "Earth", temperature: 288, distance: 1},
	{name: "Mars", temperature: 253, distance: 1.5},
	{name: "Jupiter", temperature: 163, distance: 5.2},
	{name: "Saturn", temperature: 133, distance: 9.58},
	{name: "Uranus", temperature: 78, distance: 19.22},
	{name: "Neptune", temperature: 73, distance: 30.05}
];

const inhabitablePlanets = planets.filter(
	function (planet)
	{
		return planet.temperature >= 253 && planet.temperature <= 323 &&
		       planet.distance >= 0.75 && planet.distance <= 1.5;
	}
);
console.log(inhabitablePlanets);

// The filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, 
// the inhabitablePlanets array contains only the planets that meet the specified temperature and distance criteria. 
// The console.log() statement outputs the following array:
// [
//   { name: 'Earth', temperature: 288, distance: 1 },
//   { name: 'Mars', temperature: 253, distance: 1.5 }
// ]
// This array includes the Earth and Mars objects, which are the planets that meet the criteria for being inhabitable.

