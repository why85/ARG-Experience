document.getElementById("aiTrigger").addEventListener("click", function() {
    let messages = [
        "The answer lies within the code...",
        "You are not alone. They are watching.",
        "Seek the numbers: 4, 8, 15, 16, 23, 42",
        "Did you check the source code?",
        "The glitch is real. Run before it's too late."
    ];

    let response = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("aiResponse").innerText = response;
});
