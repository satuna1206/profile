console.log

function greet() {
    const name = document.getElementById("guest-name").value;
    document.getElementById("reply").textContent = name + "さん、来てくれてありがとう！うれしいな～";
}

