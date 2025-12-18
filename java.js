var button = document.getElementById('story');
button.addEventListener("click", getwords);
function getwords() {
    console.log(button);

    console.log(words);
}

var words = document.querySelectorAll("input[type=text]")

placeholders.forEach((placeholder, index)) 

placeholder.innerHTML = words[index].value;
