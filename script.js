const correctPassword = "123";

// Элементы DOM
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-button");
const message = document.getElementById("message");

// Обработчик нажатия на кнопку
submitButton.addEventListener("click", () => {
    const userInput = passwordInput.value;

    if (userInput === correctPassword) {
        // Если пароль правильный, показываем сообщение
        passwordContainer.style.display = "none";
        message.style.display = "block";
    } else {
        // Если пароль неверный, показываем предупреждение
        alert("Неверный пароль! Попробуйте еще раз.");
    }
});

// Обработчик нажатия Enter в поле ввода
passwordInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        submitButton.click(); // Выполняем действие кнопки
    }
});