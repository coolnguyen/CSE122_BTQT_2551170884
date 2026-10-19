const thuTrongTuan = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];

function lay(id) {
    return document.getElementById(id);
}

function loiChao() {
    const gio = new Date().getHours();
    if (gio < 12) {
        return "Chào buổi sáng!";
    }
    if (gio < 18) {
        return "Chào buổi chiều!";
    }
    return "Chào buổi tối!";
}

function inLich() {
    const ngay = Number(lay("o-ngay").value);
    const thang = Number(lay("o-thang").value);
    const nam = Number(lay("o-nam").value);
    const d = new Date(nam, thang - 1, ngay);

    if (d.getDate() !== ngay || d.getMonth() !== thang - 1 || d.getFullYear() !== nam) {
        lay("lich").hidden = true;
        lay("loichao").textContent = "Ngày không hợp lệ, vui lòng nhập lại!";
        return;
    }

    lay("nam").textContent = d.getFullYear();
    lay("thang").textContent = "Tháng " + (d.getMonth() + 1);
    lay("ngay").textContent = d.getDate();
    lay("thu").textContent = thuTrongTuan[d.getDay()];
    lay("loichao").textContent = loiChao();
    lay("lich").hidden = false;
}

lay("nut").addEventListener("click", inLich);




































