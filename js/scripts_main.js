function loadPage(page) {
  let iframe = document.getElementById("content-frame");
  switch (page) {
    case "home":
      iframe.src = "home.html";
      break;
    case "gioi-thieu":
      iframe.src = "gioi-thieu.html";
      break;
    case "co-cau-to-chuc":
      iframe.src = "co-cau-to-chuc.html";
      break;
    case "ke-hoach-giao-duc":
      iframe.src = "ke-hoach-giao-duc.html";
      break;
    case "van-ban-cong-van":
      iframe.src = "van-ban-cong-van.html";
      break;
    case "tin-tuc":
      iframe.src = "tin-tuc.html";
      break;
    case "lien-he":
      iframe.src = "lien-he.html";
      break;
    default:
      iframe.src = "home.html";
  }
}

function updateTime() {
  const now = new Date();
  const dayNames = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
  ];
  const dayName = dayNames[now.getDay()];
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById(
    "current-time"
  ).textContent = `${dayName}, Ngày ${date}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();
