document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password-input");
    const submitButton = document.getElementById("submit-button");
    const message = document.getElementById("message");

    if (!passwordInput || !submitButton || !message) {
        console.error("Один из элементов не найден!");
    } else {
        console.log("Все элементы найдены!");

        const correctPassword = "Алиса";

        submitButton.addEventListener("click", () => {
            const userInput = passwordInput.value;

            if (userInput === correctPassword) {
                message.style.display = "block";
            } else {
                alert("Неверный пароль! Попробуйте еще раз.");
            }
        });

        passwordInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                submitButton.click();
            }
        });
    }
});