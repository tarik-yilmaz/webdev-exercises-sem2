# 🎹 Exercise 4: Enhancing the Virtual Piano Game with JavaScript Objects and AJAX

## 🎯 Objective  
The goal of this exercise is to extend the **Virtual Piano Game** by integrating **JavaScript objects** and **AJAX (Fetch API)**. The piano will dynamically load musical notes from a JSON file, process them as objects, and allow interaction via **mouse clicks** and **keyboard inputs**. This builds on the initial setup from Exercise 2, enhancing functionality and interactivity.

---

## 🛠️ **Task Breakdown**  

### 1️⃣ **Piano Key Representation**  
- Define piano keys as **JavaScript objects** with properties like `note` (e.g., "C", "Csharp") and `sound` (path to `.mp3` files).  
- Use a JSON file (`notes.json`) to store and load these objects dynamically.  
- Assign unique IDs to each key (e.g., `keyC`, `keyCsharp`) for styling and interaction.

### 2️⃣ **Dynamic Note Loading**  
- Use the **Fetch API** to retrieve note data from `notes.json`.  
- Process the loaded JSON data to generate piano keys dynamically in the DOM.  
- Ensure white and black keys are separated and rendered in the correct order.

### 3️⃣ **User Interaction**  
- Enable **mouse clicks** on piano keys to play their corresponding sounds.  
- Implement **keyboard input** using a key mapping (e.g., "A" for "C", "W" for "Csharp") to trigger notes.  
- Verify that both interaction methods play the correct `.mp3` files from the `/sounds/` folder.

### 4️⃣ **Reset Functionality**
- Add a reset button to the interface.
- Implement a `resetPiano` function to remove the `.pressed` class from all keys.
- Ensure the piano is ready for a new session after resetting.
---

## ✅ **Achievement Criteria**  
To successfully complete this exercise:  
- Load note sequences dynamically from `notes.json` instead of hardcoding them.  
- Represent piano keys as objects and process them efficiently using JavaScript.  
- Enable user interaction via **keyboard input** and **mouse clicks** to play notes.  
- Implement a reset function to clear active states and restart the game seamlessly.

---

## 🚀 **Optional Enhancements**  
- 🎵 **Multiple Songs**: Add support for selecting different JSON files with various note sequences.  
- 🎨 **Visual Feedback**: Highlight pressed keys briefly (e.g., using the `.pressed` class) for a realistic effect.  
- 🔄 **Sustained Notes**: Allow notes to play as long as keys are held down (requires `keydown`/`keyup` event handling).  
- 🎼 **Extended Range**: Expand the piano with additional keys and notes.  
- 🔊 **Custom Sounds**: Introduce alternative instrument sounds for variety.

---

## 📂 **Project Structure**  
- **`my_piano.html`**: Contains the basic structure, key mapping display, and piano container.  
- **`style.css`**: Styles the piano keys (white and black) with responsive positioning and effects.  
- **`my_piano.js`**: Handles JSON fetching, key rendering, and user interaction logic.  
- **`notes.json`**: Stores piano key data (note names and sound file paths).  
- **`/sounds/`**: Folder with `.mp3` files for each note (e.g., `C.mp3`, `Ash4.mp3`).

---

## 🏁 **How to Run**  
1. Place all files in the same directory, with sound files in a `/sounds/` subfolder.  
2. Ensure `notes.json` contains the correct note data and sound file paths.  
3. Open `my_piano.html` in a browser using a local server (e.g., VS Code Live Server) to avoid CORS issues with Fetch.  
4. Click the keys or press the mapped keyboard keys (e.g., "A", "W") to play notes.

---

## 📝 **Notes**  
- The current implementation fully meets the requirements for dynamic loading, object representation, and user interaction.  
- Black key positioning (`top: 63px`) was fine-tuned via trial and error for visual alignment.
- Added z-index = 1, so the black keys stays on top. Maybe there is a better way to solve this problem.