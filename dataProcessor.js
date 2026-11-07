
var transactions = [
    { id: 1, amount: 100, status: "completed" },
    { id: 2, amount: 50, status: "pending" },
    { id: 3, amount: 200, status: "completed" },
    { id: 4, amount: 80, status: "failed" }
];

var total = transactions
    .filter(function (txn) {
        return txn.status === "completed";
    })
    .map(function (txn) {
        return txn.amount;
    })
    .reduce(function (sum, amount) {
        return sum + amount;
    }, 0);


console.log("Total revenue: $" + total);
