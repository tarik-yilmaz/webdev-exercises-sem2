// Mapping to existing sound files using a const variable
const noteFiles = {
    "C": "C.mp3",
    "Csharp": "ASH4.mp3",  // Substitute for C#
    "D": "D.mp3",
    "Dsharp": "DSH4.mp3",
    "E": "E.mp3",
    "F": "F.mp3",
    "Fsharp": "F4.mp3",  // Substitute for F#
    "G": "G.mp3",
    "Gsharp": "G4.mp3",  // Substitute for G#
    "A": "A.mp3",
    "Asharp": "ASH4.mp3",
    "B": "B.mp3"
};

// Function for playing the sound
function playSound(note) {
    let fileName = noteFiles[note];  // Get correct filename from the list
    if (fileName) {
        let audio = new Audio(`sounds/${fileName}`);
        audio.play();
    } else {
        console.log("⚠️ No sound for:", note);
    }
}

// Event Listener for mouse-clicks on the keys
document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("click", function() {
        let note = this.id.replace("key", ""); // Change the ID to name of key (keyCsharp → Csharp)
        playSound(note);
    });
});

// Event Listener for keyboard inputs (Key Mapping)
document.addEventListener("keydown", function(event) {
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

    let note = keyMap[event.key]; // Get the keyname from map
    if (note) {
        playSound(note);
    }
});
