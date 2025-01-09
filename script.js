// Hide the initial page and start the timeline on clicking "View Portfolio"
document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("initial").style.display = "none";
    document.getElementById("timeline").style.display = "block";
    document.getElementById("timelineStart").style.display = "block"; // Show the first phase
});

// Proceed through each phase
document.getElementById("proceedBtn").addEventListener("click", function() {
    document.getElementById("timelineStart").style.display = "none";
    document.getElementById("timelineHighschool").style.display = "block";
});

document.getElementById("proceedBtn2").addEventListener("click", function() {
    document.getElementById("timelineHighschool").style.display = "none";
    document.getElementById("timelineWorldQuest").style.display = "block";
});

document.getElementById("proceedBtn3").addEventListener("click", function() {
    document.getElementById("timelineWorldQuest").style.display = "none";
    document.getElementById("timelineUniversity").style.display = "block";
});

document.getElementById("proceedBtn4").addEventListener("click", function() {
    document.getElementById("timelineUniversity").style.display = "none";
    document.getElementById("timelineFashioNab").style.display = "block";
});

document.getElementById("proceedBtn5").addEventListener("click", function() {
    document.getElementById("timelineFashioNab").style.display = "none";
    document.getElementById("end").style.display = "block";
});
