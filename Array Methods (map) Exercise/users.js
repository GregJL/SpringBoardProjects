const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];
const fullUsers = users.map(function (user) {
	return {
		fullName: `${user.firstName} ${user.lastName}`,
		membershipStatus: user.points > 100 ? "Premium" : "Standard"
	};
});
console.log(fullUsers);
// Output:
// [
// 	{fullName: "Alice Johnson", membershipStatus: "Premium"},
// 	{fullName: "Bob Smith", membershipStatus: "Standard"},
// 	{fullName: "Charlie Brown", membershipStatus: "Premium"}
// ]