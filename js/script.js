// $("main").slideDown(500);

// ラジオボタンを取得
const radioButtons = document.querySelectorAll('input[type="radio"]');
const clickASound = document.getElementById("click-A-sound");
const clickBSound = document.getElementById("click-B-sound");

// 各ラジオボタンにイベントリスナーを追加
radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    // 音を再生
    if (clickASound) {
      clickASound.currentTime = 0; // 再生位置をリセット
      clickASound.play();
    } else if (clickBSound) {
      clickBSound.currentTime = 0; // 再生位置をリセット
      clickBSound.play();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const chatArea = document.getElementById("chat-area");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");
  const characterSelector = document.getElementsByName("character");
  const sendSound = document.getElementById("send-sound");

  sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message === "") return;

    const selectedCharacter = Array.from(characterSelector).find(
      (radio) => radio.checked
    ).value;
    // ラジオボタンAが選択されたら、左側にメッセージを表示する
    const isASelected = selectedCharacter === "A";
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

    // 最新メッセージへスクロール
    chatArea.scrollTop = chatArea.scrollHeight;
    messageInput.value = ""; // 入力欄をリセット

    sendSound.currentTime = 0; // 再生位置をリセット
    sendSound.play(); // 効果音を再生
  });
});
