
function simulateDatabaseQuery(userId, callback) {
    setTimeout(function () {
        if (userId === 1) {
            callback(null, { id: 1, name: "Alice" });
        } else {
            callback("Error: User not found!", null);
        }
    }, 1500);
}


function fetchUser() {

    simulateDatabaseQuery(1, function (err, user) {
        if (err) {
            console.log("Failed: " + err);
        } else {
            console.log("Retrieved user: ", user);
        }
    });
}


fetchUser();
