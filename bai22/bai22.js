function doiCheDo() {
var nut = document.getElementById("nutChuyen");
var trangThai = document.getElementById("trangThai");
if (nut.checked) {
document.body.classList.add("toi");
trangThai.innerText = "Đây là giao diện ở chế độ TỐI (đang bật).";
} else {
document.body.classList.remove("toi");
trangThai.innerText = "Đây là giao diện ở chế độ SÁNG (đang tắt).";
}
}









