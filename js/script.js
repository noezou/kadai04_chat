// $("main").slideDown(500);
document.addEventListener("DOMContentLoaded", () => {
  const chatArea = document.getElementById("chat-area");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");
  const toggle = document.getElementById("toggle");

  sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message === "") return;

    const isASelected = !toggle.checked;
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(
      "message",
      isASelected ? "message-left" : "message-right"
    );

    const bubbleDiv = document.createElement("div");
    bubbleDiv.classList.add("message-bubble");
    bubbleDiv.textContent = message;

    messageDiv.appendChild(bubbleDiv);
    chatArea.appendChild(messageDiv);

    chatArea.scrollTop = chatArea.scrollHeight; // 最新メッセージへスクロール
    messageInput.value = ""; // 入力欄をリセット
  });
});
