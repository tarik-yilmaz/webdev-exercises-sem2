const pianoDiv = document.getElementById("piano");
const resetBtn = document.getElementById("reset-btn");

const keyMap = {
    "a": "C",
    "w": "Csharp",
    "s": "D",
    "e": "Dsharp",
    "d": "E",
    "f": "F",
    "t": "Fsharp",
    "g": "G",
    "y": "Gsharp",
    "h": "A",
    "u": "Asharp",
    "j": "B"
};

function playNote(sound) {
    const audio = new Audio(sound);
    audio.play();
}

// Function to reset the piano
function resetPiano() {
    const allKeys = document.querySelectorAll(".key");
    allKeys.forEach(key => {
        key.classList.remove("pressed");
    });
}

// Function to create a key button
function createKeyButton(key) {
    const button = document.createElement("button");
    button.textContent = key.note;
    button.classList.add("key", key.note.includes("sharp") ? "black" : "white");
    button.id = `key${key.note}`;
    button.addEventListener("click", () => {
        playNote(key.sound);
        button.classList.add("pressed");
        setTimeout(() => button.classList.remove("pressed"), 100);
    });
    pianoDiv.appendChild(button);
}

fetch("notes.json")
    .then(response => response.json())
    .then(pianoKeys => {
        // Log the loaded notes to confirm they come from notes.json
        console.log("Loaded notes from notes.json:", pianoKeys);

        // Render all keys
        pianoKeys.forEach(key => createKeyButton(key));

        // Handle keyboard input
        document.addEventListener("keydown", (event) => {
            const note = keyMap[event.key.toLowerCase()];
            if (note) {
                const keyElement = document.getElementById(`key${note}`);
                if (keyElement) {
                    keyElement.click(); // Trigger the click event
                }
            }
        });

        // Reset button 
        resetBtn.addEventListener("click", resetPiano);
    })
    .catch(error => console.error("Error! Can't load JSON:", error));