const displayElement = document.getElementById('display');
const startPageElement = document.getElementById('start-page');
const hackerTyperElement = document.getElementById('hacker-typer');
const messageContainer = document.getElementById('message-container');
const phoneContainer = document.getElementById('phone-container');
const credentialsElement = document.getElementById('credentials');
const restartButton = document.getElementById('restart-button');

const codeSnippets = {
    mobile: `
#include <stdio.h>

void hackMobile() {
    printf("Hacking mobile phone...\\n");
    // Simulated code for hacking a mobile phone
    printf("Accessing mobile data...\\n");
    printf("Retrieving contacts...\\n");
    printf("Downloading messages...\\n");
    printf("Breaching Joe Biden...\\n");
    printf("Hacking Joe Biden\\n");
    ©Ariel Saks, CEO & founder of Ariel Corporations;
}

int main() {
    hackMobile();
    return 0;
}
`.trim().split('\n'),

    computer: `
#include <stdio.h>

void hackComputer() {
    printf("Hacking computer...\\n");
    // Simulated code for hacking a computer
    printf("Bypassing firewall...\\n");
    printf("Accessing hard drive...\\n");
    printf("Retrieving files...\\n");
    printf("Breaching Joe Biden...\\n");
    printf("Hacking Joe Biden...\\n");
    ©Ariel Saks, CEO & founder of Ariel Corporations;
}

int main() {
    hackComputer();
    return 0;
}
`.trim().split('\n'),

    server: `
#include <stdio.h>

void hackServer() {
    printf("Hacking server...\\n");
    // Simulated code for hacking a server
    printf("Breaching security protocols...\\n");
    printf("Accessing server database...\\n");
    printf("Downloading sensitive data...\\n");
    printf("Breaching Joe Biden...\\n");
    printf("Hacking Joe Biden...\\n");
    ©Ariel Saks, CEO & founder of Ariel Corporations;
}

int main() {
    hackServer();
    return 0;
}
`.trim().split('\n')
};

let currentIndex = 0;
let selectedProject = '';
let linesTyped = 0;
const linesToDisplayMessage = 40;

document.addEventListener('keydown', () => {
    if (selectedProject) {
        if (currentIndex < codeSnippets[selectedProject].length) {
            const nextLine = codeSnippets[selectedProject][currentIndex] + '\n'; // Add newline character
            displayElement.textContent += nextLine;
            currentIndex++;
            linesTyped++;

            if (linesTyped >= linesToDisplayMessage) {
                displayMessageAndPhone();
            }
        } else {
            currentIndex = 0; // Loop the code for continuous effect
        }
    }
});

function startHack(project) {
    selectedProject = project;
    startPageElement.style.display = 'none';
    hackerTyperElement.style.display = 'block';
}

function displayMessageAndPhone() {
    messageContainer.style.display = 'block';
    phoneContainer.style.display = 'block';
    restartButton.style.display = 'block';
    generateCredentials();
}

function generateCredentials() {
    // Simulated credentials
    const credentials = `
Username: Joe_Biden
Password: joe158642`;

    credentialsElement.textContent = credentials;
}

function restartHack() {
    selectedProject = '';
    currentIndex = 0;
    linesTyped = 0;
    displayElement.textContent = '';
    messageContainer.style.display = 'none';
    phoneContainer.style.display = 'none';
    restartButton.style.display = 'none';
    startPageElement.style.display = 'block';
}
