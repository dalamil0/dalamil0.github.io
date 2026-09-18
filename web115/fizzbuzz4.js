document.getElementById("fizzbuzz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);
    const number3 = parseInt(document.getElementById("number3").value);

    const word1 = document.getElementById("word1").value;
    const word2 = document.getElementById("word2").value;
    const word3 = document.getElementById("word3").value;

    const total = parseInt(document.getElementById("total").value);

    const output = document.getElementById("output");

    output.innerHTML = "";

    for (let i = 1; i <= total; i++) {
        let words = [];

        if (i % number1 === 0 && word1 !== "") {
            words.push(word1);
        }

        if (i % number2 === 0 && word2 !== "") {
            words.push(word2);
        }

        if (i % number3 === 0 && word3 !== "") {
            words.push(word3);
        }

        let result = "";

        if (words.length > 0) {
            result = words.join(", ");
        }

        output.innerHTML += "<p>" + i + ". " + result + "</p>";
    }
});
