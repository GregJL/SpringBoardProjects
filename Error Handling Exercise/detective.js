function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}

}
const numOfOps = 20;
const daysForSuccess = 13;
const daysForFailure = 1;
const daysForAttendance = 3;
let daysEarned = 0;
for (let i = 0; i < numOfOps; i++)
{
	try
	{
		mysteryOperation();
		daysEarned += daysForSuccess;
	}
	catch (error)
	{
		daysEarned += daysForFailure;
	}
	finally
	{
		daysEarned += daysForAttendance;
	}
}
console.log(daysEarned);

