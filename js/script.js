$("main").slideDown(500);

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onChildAdded,
  remove,
  onChildRemoved,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

// Your web app's Firebase configuration Firebaseからコピーして貼り付ける
const firebaseConfig = {
  apiKey: "AIzaSyAK_59gTcgHB0jqS9YvMeHmbGuj56oD0YQ",
  authDomain: "dev28-34b97.firebaseapp.com",
  projectId: "dev28-34b97",
  storageBucket: "dev28-34b97.firebasestorage.app",
  messagingSenderId: "941478211478",
  appId: "1:941478211478:web:ebcace4368cfe6fc24f7b7",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app); //RealtimeDBに接続
const dbRef = ref(db, "chat"); //RealtimeDB内の"chat"に格納する

//データ登録(Click)
$("#send").on("click", function () {
  const msg = {
    uname: $("#uname").val(),
    text: $("#text").val(),
  };
  const newPostRef = push(dbRef); //ユニークKEY（ここではnewPostRef)を生成
  set(newPostRef, msg); //"chat"にユニークKEYをつけてオブジェクトデータを登録
});

//データ登録(Enter)
$("#text").on("keydown", function (e) {
  console.log(e); //e変数の中身を確認！！
  if (e.keyCode == 13) {
    //EnterKey=13
    const msg = {
      uname: $("#uname").val(),
      text: $("#text").val(),
    };
    const newPostRef = push(dbRef); //ユニークKEYを生成
    set(newPostRef, msg); //"chat"にユニークKEYをつけてオブジェクトデータを登録
  }
});

//最初にデータ取得 ＆onSnapshotでリアルタイムにデータを取得
onChildAdded(dbRef, function (data) {
  const msg = data.val(); //オブジェクトデータを取得し、変数msgに代入
  const key = data.key; //データのユニークキー（削除や更新に使用可能）
  //表示用テキスト・HTMLを作成
  let h = "<p>";
  h += msg.uname;
  h += "<br>";
  h += msg.text;
  h += "</p>";
  $("#output").append(h); //#outputの最後に追加
});
