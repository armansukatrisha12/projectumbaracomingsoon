const text = [
    "Initializing system...",
    "Accessing Umbra Network...",
    "Decrypting data...",
    "ACCESS GRANTED",
    "Welcome to Project Umbra"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const terminal = document.getElementById("terminal-text");

    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        }

        terminal.innerHTML = currentText;

        if (j === text[i].length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

        if (isDeleting && j > 0) {
            currentText = text[i].substring(0, j--);
            terminal.innerHTML = currentText;
        }

        if (j === 0) {
            isDeleting = false;
            i++;
        }
    }

    setTimeout(typeEffect, 50);
}

typeEffect();