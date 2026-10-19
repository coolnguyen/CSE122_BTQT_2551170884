const form = document.getElementById("form-them");
const oViec = document.getElementById("o-viec");
const ds = document.getElementById("ds");
const conLai = document.getElementById("con-lai");

function capNhat() {
    const tong = ds.children.length;
    const chuaXong = ds.querySelectorAll("input:not(:checked)").length;

    if (tong === 0) {
        conLai.textContent = "Chưa có việc nào, hãy thêm một việc mới";
    } else if (chuaXong === 0) {
        conLai.textContent = "Đã hoàn thành tất cả!";
    } else {
        conLai.textContent = "Còn " + chuaXong + " việc chưa hoàn thành";
    }
}

function themViec(noiDung) {
    const li = document.createElement("li");
    li.innerHTML = '<label><input type="checkbox"><span class="o"></span><span class="chu"></span></label>' +
                   '<button type="button" class="xoa">Xoá</button>';
    li.querySelector(".chu").textContent = noiDung;
    ds.appendChild(li);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const noiDung = oViec.value.trim();
    if (noiDung === "") {
        oViec.focus();
        return;
    }
    themViec(noiDung);
    oViec.value = "";
    oViec.focus();
    capNhat();
});

ds.addEventListener("click", function (e) {
    if (e.target.classList.contains("xoa")) {
        e.target.parentElement.remove();
        capNhat();
    }
});

ds.addEventListener("change", capNhat);

capNhat();