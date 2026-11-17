console.log

function greet() {
    const name = document.getElementById("guest-name").value;
    document.getElementById("reply").textContent = name + "さん、来てくれてありがとう！うれしいな～";
}

function answer() {
    const question = document.getElementById("question").value;
    let message ="";
      if (question.includes("趣味")) {
        message = "ゲームと散歩です。";
    } else if (question.includes("食べ物")) {
        message = "カレーです。";
    } else if (question.includes("出身")) {
        message = "名古屋です。";
     } else if (question.includes("好き")) {
        message = "ねこが好きです。";
    } else {
        message = "その質問には、まだ答えられません。";
    }
    document.getElementById("reply").textContent = message;
}

