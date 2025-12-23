var button = document.getElementById("story");

var words = document.querySelectorAll("input[type='text']");

var placeholders = document.querySelectorAll(".user-input");

var storySection = document.querySelector(".story");

button.addEventListener("click", getWords);

function getWords() {
    placeholders.forEach(function (placeholder, index) {
        placeholder.textContent = words[index].value;
    });
    storySection.style.display = "block";
}
