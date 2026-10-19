const form = document.getElementById("form-dang-ky");
const oHoTen = document.getElementById("ho-ten");
const oEmail = document.getElementById("email");
const oMatKhau = document.getElementById("mat-khau");
const oXacNhan = document.getElementById("xac-nhan");
const thanhCong = document.getElementById("thanh-cong");
const mauEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let daBam = false;
function loiHoTen() {
    if (oHoTen.value.trim() === "") {
        return "Họ tên không được để trống";
    }
    return "";
}
function loiEmail() {
    const email = oEmail.value.trim();
    if (email === "") {
        return "Email không được để trống";
    }
    if (mauEmail.test(email)) {
        return "";
    }
    if (!email.includes("@")) {
        return "Email không hợp lệ (thiếu dấu @)";
    }
    if (!email.split("@")[1].includes(".")) {
        return "Email không hợp lệ (thiếu tên miền)";
    }
    return "Email không hợp lệ";
}
function loiMatKhau() {
    if (oMatKhau.value.length < 6) {
        return "Mật khẩu phải có ít nhất 6 ký tự";
    }
    return "";
}
function loiXacNhan() {
    if (oXacNhan.value === "") {
        return "Vui lòng nhập lại mật khẩu";
    }
    if (oXacNhan.value !== oMatKhau.value) {
        return "Mật khẩu xác nhận không khớp";
    }
    return "";
}
function datKetQua(o, loi) {
    const thongBao = o.parentElement.querySelector(".thong-bao");
    const lop = loi === "" ? "dung" : "sai";
    o.className = lop;
    thongBao.className = "thong-bao " + lop;
    thongBao.textContent = loi === "" ? "✓ Hợp lệ" : "✗ " + loi;
    return loi === "";
}
function kiemTra() {
    const a = datKetQua(oHoTen, loiHoTen());
    const b = datKetQua(oEmail, loiEmail());
    const c = datKetQua(oMatKhau, loiMatKhau());
    const d = datKetQua(oXacNhan, loiXacNhan());
    return a && b && c && d;
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    daBam = true;
    if (kiemTra()) {
        thanhCong.textContent = "Đăng ký thành công! Chào " + oHoTen.value.trim() + ".";
        thanhCong.hidden = false;
    } else {
        thanhCong.hidden = true;
    }
});
form.addEventListener("input", function () {
    if (daBam) {
        kiemTra();
        thanhCong.hidden = true;
    }
});