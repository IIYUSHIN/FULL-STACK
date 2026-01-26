let balance = 1000;

const balanceText = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const message = document.getElementById("message");

document.getElementById("deposit").onclick = function () {
    const amount = Number(amountInput.value);

    if (amount <= 0) {
        message.textContent = "Invalid amount!";
        return;
    }

    balance += amount;
    balanceText.textContent = balance;
    message.textContent = "";
    amountInput.value = "";
};

document.getElementById("withdraw").onclick = function () {
    const amount = Number(amountInput.value);

    if (amount <= 0 || amount > balance) {
        message.textContent = "Invalid amount!";
        return;
    }

    balance -= amount;
    balanceText.textContent = balance;
    message.textContent = "";
    amountInput.value = "";
};
