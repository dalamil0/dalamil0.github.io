const form = document.getElementById("introForm");
const coursesContainer = document.getElementById("courses");
const addCourseButton = document.getElementById("addCourse");
const removeCourseButton = document.getElementById("removeCourse");
const results = document.getElementById("results");

let courseCount = document.querySelectorAll(".course").length;


/* ========================================
   ADD A COURSE
======================================== */

addCourseButton.addEventListener("click", function () {
    courseCount++;

    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course");

    const label = document.createElement("label");
    label.setAttribute("for", "course" + courseCount);
    label.textContent = "Course " + courseCount + ":";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "course" + courseCount;
    input.required = true;

    courseDiv.appendChild(label);
    courseDiv.appendChild(input);

    coursesContainer.appendChild(courseDiv);
});


/* ========================================
   REMOVE A COURSE
======================================== */

removeCourseButton.addEventListener("click", function () {
    const courses = document.querySelectorAll(".course");

    if (courses.length > 1) {
        courses[courses.length - 1].remove();
        courseCount--;
    }
});


/* ========================================
   SUBMIT INTRODUCTION
======================================== */

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const caption = document.getElementById("caption").value;

    const intro = document.getElementById("intro").value;
    const personal = document.getElementById("personal").value;
    const professional = document.getElementById("professional").value;
    const academic = document.getElementById("academic").value;
    const computer = document.getElementById("computer").value;

    const funny = document.getElementById("funny").value;
    const quote = document.getElementById("quote").value;
    const quoteAuthor = document.getElementById("quoteAuthor").value;

    const courseInputs = document.querySelectorAll(".course input");

    let courseList = "";

    courseInputs.forEach(function (course) {
        courseList += `<li>${course.value}</li>`;
    });


    /* ========================================
       DISPLAY THE INTRODUCTION
    ========================================= */

    results.innerHTML = `
        <h2>Introduction</h2>

        <figure>
            <img src="${image}" alt="${name}">
            <figcaption>${caption}</figcaption>
        </figure>

        <p>${intro}</p>

        <ul>
            <li>
                <strong>Personal Background:</strong>
                ${personal}
            </li>

            <li>
                <strong>Professional Background:</strong>
                ${professional}
            </li>

            <li>
                <strong>Academic Background:</strong>
                ${academic}
            </li>

            <li>
                <strong>Primary Computer:</strong>
                ${computer}
            </li>

            <li>
                <strong>Courses I'm Taking, &amp; Why:</strong>

                <ol>
                    ${courseList}
                </ol>
            </li>

            <li>
                <strong>
                    Funny/Interesting Item to Remember Me By:
                </strong>
                ${funny}
            </li>
        </ul>

        <p><strong>Quote:</strong></p>

        <p>“${quote}”</p>

        <p><em>— ${quoteAuthor}</em></p>
    `;

    form.style.display = "none";
});
