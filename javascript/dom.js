const input = document.getElementById("nameInput");
const button = document.getElementById("saveBtn");
const greeting = document.getElementById("greeting");

// Use saved name when the page is loaded
const savedName = localStorage.getItem("user_name");

if (savedName) {
  greeting.textContent = `こんにちは、${savedName}さん！`;
}

// Save name when the button is clicked
button.addEventListener("click", () => {
  const newName = input.value;

  if (newName) {
    localStorage.setItem("user_name", newName);
    greeting.textContent = `こんにちは、${newName}さん！`;
    input.value = "";
  }
});
