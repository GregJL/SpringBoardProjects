/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. 
// This function should accept an arbitrary number of animal names.
const trackAnimalSightings = (...animals) => {
	console.log("Animal Sightings:");
	animals.forEach((animal) => console.log(animal));
};
trackAnimalSightings("Lion", "Elephant", "Giraffe", "Zebra");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas 
// within the sanctuary.
const protectedHabitats = [...forestHabitats, ...savannahHabitats];
console.log("Protected Habitats:", protectedHabitats);


/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, 
// such as an increase in population or a change in habitat.
const updatedRhinoStatus = {
	...rhinoStatus,
	population: 600,
	habitat: "Grasslands"
};
console.log("Updated Rhino Status:", updatedRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion",
	genetics: {
		dna: "AAGTCG",
		traits: ["Mane", "Strength"]
	}
};
const lionProfileCopy = {
	...lionProfile
};
lionProfileCopy.genetics.dna = "TTGCAA";
console.log("Original Lion Profile:", lionProfile);
console.log("Copied Lion Profile:", lionProfileCopy);
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. 
// Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 * When we create a shallow copy of the lionProfile object,
 * the genetics property is still a reference to the same object in memory.
 * Therefore, when we modify the dna property in the copied object,
 * it also affects the original object.
 * To avoid this, we should create a deep copy of the genetics property.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
const ecosystemHealthCopy = {
	...ecosystemHealth
};
ecosystemHealthCopy.foodSupply.herbivores = "Scarce";
console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Copied Ecosystem Health:", ecosystemHealthCopy);
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. 
// Perform a shallow copy and modify a nested property. 
// Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 * When we create a shallow copy of the ecosystemHealth object,
 * the foodSupply property is still a reference to the same object in memory.
 * Therefore, when we modify the herbivores property in the copied object,
 * it also affects the original object.
 * To avoid this, we should create a deep copy of the foodSupply property. There are libraries that can help with deep cloning.
 */
