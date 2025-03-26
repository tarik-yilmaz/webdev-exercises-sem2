// Define the structure of each piano key as expected from notes.json
interface PianoKey {
    note: string;
    sound: string;
}

// Get references to HTML elements and ensure they are not null
const pianoDiv = document.getElementById("piano") as HTMLElement;
const resetBtn = document.getElementById("reset-btn") as HTMLButtonElement;

// Define a mapping between keyboard keys and note names
const keyMap: Record<string, string> = {
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

// Play a given sound file using the Audio API
function playNote(sound: string): void {
    const audio = new Audio(sound);
    audio.play();
}

// Remove the 'pressed' class from all key buttons
function resetPiano(): void {
    const allKeys = document.querySelectorAll(".key") as NodeListOf<HTMLButtonElement>;
    allKeys.forEach(key => {
        key.classList.remove("pressed");
    });
}

// Create a piano key button and add it to the DOM
function createKeyButton(key: PianoKey): void {
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

// Load notes from notes.json and initialize the piano
fetch("notes.json")
    .then((response: Response) => response.json())
    .then((pianoKeys: PianoKey[]) => {
        console.log("Loaded notes from notes.json:", pianoKeys);

        // Render all keys based on the loaded data
        pianoKeys.forEach((key: PianoKey) => createKeyButton(key));

        // Add support for playing notes using the keyboard
        document.addEventListener("keydown", (event: KeyboardEvent) => {
            const note = keyMap[event.key.toLowerCase()];
            if (note) {
                const keyElement = document.getElementById(`key${note}`) as HTMLButtonElement | null;
                if (keyElement) {
                    keyElement.click();
                }
            }
        });

        // Attach reset button listener
        resetBtn.addEventListener("click", resetPiano);
    })
    .catch((error: Error) => console.error("Error! Can't load JSON:", error));
