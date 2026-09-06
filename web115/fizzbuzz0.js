const form = document.getElementById("name-form");
const greeting = document.getElementById("greeting");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("first_name").value.trim();
    const middleInitial = document.getElementById("middle_initial").value.trim();
    const lastName = document.getElementById("last_name").value.trim();

    if (firstName === "") {
        greeting.textContent = "Please enter your first name.";
        output.innerHTML = "";
        return;
    }

    let fullName;

    if (middleInitial === "") {
        fullName = firstName + " " + lastName;
    } else {
        fullName = firstName + " " + middleInitial + ". " + lastName;
    }

    greeting.textContent = "Welcome to Diana Digital " + fullName + "!";

    let limit = prompt("How high do you want to count, " + firstName + "?");

    if (limit === null || limit.trim() === "" || isNaN(limit)) {
        output.innerHTML = "<p>Please enter a valid number.</p>";
        return;
    }

    limit = Number(limit);

    if (limit < 1) {
        output.innerHTML = "<p>Please enter a number greater than 0.</p>";
        return;
    }

    let list = "<ol>";

    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            list += "<li>Digital Dreams — the number is even</li>";
        } else {
            list += "<li>Digital Dreams — the number is odd</li>";
        }
    }

    list += "</ol>";

    output.innerHTML = list;
});
