//your JS code here. If required.
document.getElementById("age-validation-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission reload

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();

    // Validation: Check if fields are empty
    if (!name || !age) {
        alert("Please enter valid details.");
        return;
    }

    // Create a promise to validate age
    const ageCheck = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (parseInt(age) > 18) {
                resolve(Welcome, ${name}. You can vote.);
            } else {
                reject(Oh sorry ${name}. You aren't old enough.);
            }
        }, 4000); // 4-second delay
    });

    // Handle promise resolution and rejection
    ageCheck
        .then(message => alert(message))
        .catch(error => alert(error));
});