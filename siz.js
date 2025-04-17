// Thông tin tài khoản đúng
const correctUsername = "123";
const correctPassword = "Lenguyenhoanglong";

const loginButton = document.getElementById("click");
const usernameInput = document.getElementById("tk");
const passwordInput = document.getElementById("mk");
const messageDiv = document.getElementById("message");

// Xử lý sự kiện click
loginButton.addEventListener("click", () => {
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();
    
    // Ẩn thông báo lỗi cũ
    messageDiv.style.display = "none";
    
    // Kiểm tra thông tin đăng nhập
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        alert("Đăng nhập thành công!");
        // Chuyển hướng hoặc thực hiện hành động sau khi đăng nhập thành công
    } else {
        messageDiv.style.display = "block";
    }
});
