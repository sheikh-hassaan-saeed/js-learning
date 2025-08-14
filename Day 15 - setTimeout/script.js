const showText = document.getElementById("text");
const startBtn = document.getElementById("startBtn");


startBtn.onclick = function () {
    const seconds = parseInt(document.getElementById("textInput").value);


    if (isNaN(seconds) || seconds < 0) {
        alert("Enter Valid Number")
        return;
    }

    showText.textContent = `Timer started for ${seconds} seconds...`;

    setTimeout(() => {
        showText.textContent = "Time's Up";
    }, seconds * 1000);

}
