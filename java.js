var button = document.getElementById("story");

var inputs = document.querySelectorAll("input[type='text']");

var storyWords = document.querySelectorAll(".user-input");

var story = document.querySelector(".story");

button.addEventListener("click", showStory);

function showStory() {

    storyWords.forEach(function (word, index) {
        word.textContent = inputs[index].value;
    });

    story.style.display = "block";
}
