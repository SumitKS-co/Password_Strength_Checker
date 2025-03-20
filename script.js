let input = document.querySelector(".inp");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let progressBar = document.querySelector(".progress-bar");
let copy_btn = document.querySelector(".copy_btn"); // Fixed selector

input.addEventListener("input", function () {
    let data = input.value;
    let val = 0;
    let count = 0;

    // Check for at least one number
    if (/\d/.test(data)) {
        three.classList.add("green");
        val += 25;
        count++;
    } else {
        three.classList.remove("green");
    }

    // Check length requirement
    if (data.length >= 8) {
        one.classList.add("green");
        val += 25;
        count++;
    } else {
        one.classList.remove("green");
    }

    // Check for uppercase and lowercase letters
    if (/[A-Z]/.test(data) && /[a-z]/.test(data)) {
        two.classList.add("green");
        val += 25;
        count++;
    } else {
        two.classList.remove("green");
    }

    // Check for at least one special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(data)) {
        four.classList.add("green");
        val += 25;
        count++;
    } else {
        four.classList.remove("green");
    }

    progressBar.style.width = val + "%";
    progressBar.className = "progress-bar progress-bar-striped progress-bar-animated";

    if (val <= 25) {
        progressBar.classList.add("bg-danger");
    } else if (val <= 50) {
        progressBar.classList.add("bg-warning");
    } else if (val <= 75) {
        progressBar.classList.add("bg-warning");
    } else {
        progressBar.classList.add("bg-success");
    }

    // Show the copy button only when all conditions are met
    if (count === 4) {
        copy_btn.style.display = "inline-block";
    } else {
        copy_btn.style.display = "none";
    }
});

function copy() {
    
    navigator.clipboard.writeText(input.value);
    alert("Copied the password: " + input.value);

    // Reset input field
    input.value = "";

    // Reset progress bar
    progressBar.style.width = "0%";
    progressBar.className = "progress-bar progress-bar-striped progress-bar-animated bg-danger"; // Reset to default color

    // Remove green highlights from conditions
    one.classList.remove("green");
    two.classList.remove("green");
    three.classList.remove("green");
    four.classList.remove("green");

    // Hide copy button
    copy_btn.style.display = "none";
}
