const form = document.getElementById("name-form");
const greeting = document.getElementById("greeting");
const output = document.getElementById("output");

// Values are stored in variables so they can be changed easily.
const limit = 140;

const rules = [
    { divisor: 3, word: "Design!" },
    { divisor: 5, word: "Data!" },
    { divisor: 7, word: "BANG!" }
];

const regularPhrase = "Digital Dreams";

function checkDivision(number, divisor) {
    return number % divisor === 0;
}

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
    let words = [];

    for (const rule of rules) {
        if (checkDivision(i, rule.divisor)) {
            words.push(rule.word);
        }
    }

    let message = regularPhrase;

    if (words.length > 0) {
        message = words.join(" ");
    }

    list += "<li>" + message + "</li>";
}

        list += "<li>" + message + "</li>";
    }

    list += "</ol>";

    output.innerHTML = list;
});
