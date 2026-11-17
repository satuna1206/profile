console.log

function greet() {
    const name = document.getElementById("guest-name").value;
    document.getElementById("reply").textContent = name + "さん、来てくれてありがとう！うれしいな～";
}

function answer() {
    const question = document.getElementById("question").value;
    let message ="";
    if (question === "趣味は？") {
        message = "ゲームと散歩です。";
    } else {
        message = "その質問には、まだ答えられません。";
    }
    document.getElementById("reply").textContent = message;
}

