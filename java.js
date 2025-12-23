var button = document.getElementById("story");

var inputs = document.querySelectorAll("input[type='text']");

var storyWords = document.querySelectorAll(".user-input");

var storySection = document.querySelector(".story");

button.addEventListener("click", generateStory);

function generateStory() {

    storyWords.forEach(function (word, index) {
        word.textContent = inputs[index].value;
    });
    
    storySection.style.display = "block";
}
