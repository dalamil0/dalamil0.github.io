const form = document.getElementById("name-form");
const greeting = document.getElementById("greeting");
const output = document.getElementById("output");

// Values are stored in variables so they can be changed easily.
const limit = 140;
const firstMultiple = 3;
const secondMultiple = 5;

const regularPhrase = "Digital Dreams";
const firstWord = "Design!";
const secondWord = "Data!";

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("first_name").value.trim();
    const middleInitial = document.getElementById("middle_initial").value.trim();
    const lastName = document.getElementById("last_name").value.trim();

    let fullName;

    if (middleInitial === "") {
        fullName = firstName + " " + lastName;
    } else {
        fullName = firstName + " " + middleInitial + ". " + lastName;
    }

    greeting.textContent = "Welcome to Diana Digital, " + fullName + "!";

    let list = "<ol>";

    for (let i = 1; i <= limit; i++) {
        let message = regularPhrase;

        if (i % firstMultiple === 0 && i % secondMultiple === 0) {
            message = firstWord + " " + secondWord;
        } else if (i % firstMultiple === 0) {
            message = firstWord;
        } else if (i % secondMultiple === 0) {
            message = secondWord;
        }

        list += "<li>" + message + "</li>";
    }

    list += "</ol>";

    output.innerHTML = list;
});
