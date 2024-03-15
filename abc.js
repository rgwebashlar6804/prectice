function calculateIndividualPayments(totalCost, contributions) {
    const numFriends = contributions.length;

    // Calculate the total contribution
    const totalContribution = contributions.reduce((sum, amount) => sum + amount, 0);

    // Check if the contributions match the total cost
    if (totalContribution !== totalCost) {
        return "Total contributions do not match the total cost.";
    }

    // Calculate the equal share for each friend
    const equalShare = totalCost / numFriends;

    // Calculate individual payments or receivables
    const individualPayments = contributions.map(contribution => {
        const difference = contribution - equalShare;
        return difference >= 0 ? `Friend receives ${difference} rupees` : `Friend pays ${-difference} rupees`;
    });

    return individualPayments;
}

// Example usage
const totalCost = 500;
const friendContributions = [50, 150, 200, 100, 0];

console.log(calculateIndividualPayments(totalCost, friendContributions));


