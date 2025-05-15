// DARK MODE TOGGLE
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-dark");
  const body = document.body;

  // Load trạng thái từ localStorage
  const darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "enabled") {
    body.classList.add("dark-mode");
  }

  // Bắt sự kiện nút
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
      } else {
        localStorage.setItem("dark-mode", "disabled");
      }
    });
  }

  // Xử lý ngày nếu có input kiểu date
  const dateInput = document.querySelector('input[type="date"]');
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }
});
