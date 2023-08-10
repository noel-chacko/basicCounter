let clicks = 0

function increment(){
    clicks = clicks + 1
    document.getElementById("clicks").innerText = "You have clicked " + clicks + " times."
}