const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

// Optional: save chat history in localStorage
const loadHistory = () => {
  const saved = localStorage.getItem("chatHistory");
  if (saved) {
    chatBox.innerHTML = saved;
    chatBox.scrollTop = chatBox.scrollHeight;
  }
};

const saveHistory = () => {
  localStorage.setItem("chatHistory", chatBox.innerHTML);
};

const appendMessage = (text, sender) => {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  saveHistory();
};

// Replace with your actual OpenAI API key or local backend
// const API_KEY = "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";
// const API_URL = "https://api.openai.com/v1/chat/completions";

// async function getBotResponse(prompt) {
//   try {
//     appendMessage("Typing...", "bot");
//     const typingMsg = chatBox.lastChild;

//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-4o-mini",
//         messages: [{ role: "user", content: prompt }],
//       }),
//     });

//     const data = await response.json();
//     typingMsg.remove();

//     const botText = data.choices?.[0]?.message?.content || "Error: No response";
//     appendMessage(botText, "bot");
//   } catch (err) {
//     appendMessage("⚠️ Error connecting to AI.", "bot");
//   }
// }

// chatForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const text = userInput.value.trim();
//   if (!text) return;

//   appendMessage(text, "user");
//   userInput.value = "";
//   getBotResponse(text);
// });

// loadHistory();
