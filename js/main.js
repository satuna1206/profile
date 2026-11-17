const hobbyWords = ["趣味", "好きなこと", "休みの日"];
const foodWords = ["食べ物", "ごはん"];
const hometownWords = ["出身", "どこから"];

console.log("main.js を読み込みました");

function greet() {
    const name = document.getElementById("guest-name").value;
    document.getElementById("reply").textContent = name + "さん、来てくれてありがとう！うれしいな～";
}

function hasWord(question, words) {
    for (const word of words) {
        if (question.includes(word)) {
            return true;
        }
    }
    return false;
}

function answer() {
    const question = document.getElementById("question").value;
    let message ="";
     if (hasWord(question, hobbyWords)) {
        message = "ゲームと散歩です。";
    } else if (hasWord (question,foodWords)("食べ物") && question.includes("嫌い")) {message = "ピーマンが苦手です。";
    } else if (hasWord(question,foodWords)) {
        message = "カレーです。";
    } else if (hasWord (question,hometownWords)("出身")) {
        message = "名古屋です。";
    } else if (question.includes("好き")) {
        message = "ねこが好きです。";
    } else {
        message = "その質問には、まだ答えられません。";
    }
    document.getElementById("reply").textContent = message;
}

