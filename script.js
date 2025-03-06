document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password-input");
    const submitButton = document.getElementById("submit-button");
    const message = document.getElementById("message");
    const passwordContainer = document.getElementById("password-container");

    if (!passwordInput || !submitButton || !message || !passwordContainer) {
        console.error("Один из элементов не найден!");
    } else {
        console.log("Все элементы найдены!");

        const correctPassword = "123";

        submitButton.addEventListener("click", () => {
            const userInput = passwordInput.value;

            if (userInput === correctPassword) {
                passwordContainer.style.display = "none";
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