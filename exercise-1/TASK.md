# 📌 Exercise 1: JavaScript Memory Game

## 🎯 Objective  
The goal of this exercise is to build a **basic Memory Game** using **JavaScript**, focusing solely on **direct DOM manipulation**.  
This means **no loops, event listeners, or functions** should be used—only **inline event handling**.

**Successful completion of this exercise earns 3 points.**  

---

## 🛠️ **Task Breakdown**  

### 1️⃣ **Static Card Setup**  
- Manually define a **set of cards** in the **HTML file**.  
- Each card must have a **matching pair** and display a **placeholder symbol ("?")** before being flipped.  

### 2️⃣ **OnClick Handling for Cards**  
- Use the `onclick` attribute directly in the **HTML file** to trigger actions when a card is clicked.  
- The `addEventListener()` method **should not** be used.  

### 3️⃣ **Card Flip Logic** _(1 Point)_  
- Clicking a card **reveals** its symbol (modify `textContent`).  
- A card **can only be clicked once per round**.  
- At most **two cards can be flipped at a time**.  

### 4️⃣ **Match Checking** _(1 Point)_  
- If two flipped cards **match**, they stay visible.  
- If they **don’t match**, they should be **hidden again after a short delay**.  

### 5️⃣ **Game Completion** _(1 Point)_  
- When all pairs are matched, display a **completion message**.  
- The game should allow the player to manually **reset and start a new round**.  

---

## ✅ **Completion Criteria**  
To successfully complete this exercise, you must:  
✔ Define the **card setup manually** in **HTML**.  
✔ Implement **onclick interactions** for flipping cards.  
✔ Ensure that only **two cards can be flipped at a time**.  
✔ Check for **matching pairs** and manage visibility accordingly.  
✔ Display a **win message** when all pairs are matched and allow a **manual reset**.  

🚀 **Bonus Challenge:** Try adding a **shuffle feature** to randomize card placement in future iterations!  
