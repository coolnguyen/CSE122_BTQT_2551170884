var danhSachBaiTap = [
    { ma: "BT-19", ten: "Trang giới thiệu địa danh Mũi Né", chuong: "CSS3", han: "20/10/2026", nop: "96/128", trangthai: "Đang mở" },
    { ma: "BT-20", ten: "Hiệu ứng ảnh với CSS Filter", chuong: "CSS3", han: "22/10/2026", nop: "85/128", trangthai: "Đang mở" },
    { ma: "BT-22", ten: "Chế độ Sáng / Tối (CSS Variables)", chuong: "JavaScript", han: "24/10/2026", nop: "72/128", trangthai: "Đang mở" },
    { ma: "BT-26", ten: "Form đăng ký với Bootstrap", chuong: "Bootstrap 5", han: "15/10/2026", nop: "120/128", trangthai: "Đã đóng" }
];
var boLocHienTai = "tatca";
function hienThiBaiTap(danhSach) {
    var tbody = document.getElementById("bangBaiTap");
    if (!tbody) return;
    tbody.innerHTML = "";
    for (var i = 0; i < danhSach.length; i++) {
        var bt = danhSach[i];
        var badge = bt.trangthai === "Đang mở" ? "<span class='badge bg-success'>Đang mở</span>" : "<span class='badge bg-secondary'>Đã đóng</span>";
        var nutDoi = bt.trangthai === "Đang mở" ? "<button class='btn btn-outline-warning btn-sm' onclick='doiTrangThai(" + i + ")'>Khóa nộp</button>" : "<button class='btn btn-outline-info btn-sm' onclick='doiTrangThai(" + i + ")'>Mở nộp</button>";
        tbody.innerHTML += "<tr><td class='fw-bold'>" + bt.ma + "</td><td>" + bt.ten + "</td><td><span class='badge bg-light text-dark border'>" + bt.chuong + "</span></td><td>" + bt.han + "</td><td>" + bt.nop + "</td><td>" + badge + "</td><td><div class='btn-group btn-group-sm'><button class='btn btn-outline-primary btn-sm' onclick='chamBai(\"" + bt.ma + "\")'>Chấm</button>" + nutDoi + "<button class='btn btn-outline-danger btn-sm' onclick='xoaBaiTap(" + i + ")'>Xóa</button></div></td></tr>";
    }
}
function luuBaiTapMoi() {
    var ma = document.getElementById("nhapMaBT").value.trim();
    var ten = document.getElementById("nhapTenBT").value.trim();
    var chuong = document.getElementById("nhapChuongBT").value;
    var han = document.getElementById("nhapHanBT").value;
    var trangthai = document.getElementById("nhapTrangThaiBT").value;
    if (!ma || !ten || !han) {
        alert("Vui lòng nhập đầy đủ Mã bài, Tên bài và Hạn nộp!");
        return;
    }
    var parts = han.split("-");
    var hanFormatted = parts[2] + "/" + parts[1] + "/" + parts[0];
    danhSachBaiTap.unshift({
        ma: ma,
        ten: ten,
        chuong: chuong,
        han: hanFormatted,
        nop: "0/128",
        trangthai: trangthai
    });
    locBaiTap(boLocHienTai);
    var modalEl = document.getElementById("modalThemBaiTap");
    var modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) {
        modalInstance.hide();
    }
    document.getElementById("formThemBaiTap").reset();
    alert("Thêm bài tập mới thành công!");
}
function doiTrangThai(index) {
    danhSachBaiTap[index].trangthai = danhSachBaiTap[index].trangthai === "Đang mở" ? "Đã đóng" : "Đang mở";
    locBaiTap(boLocHienTai);
}
function xoaBaiTap(index) {
    if (confirm("Bạn có chắc chắn muốn xóa bài tập " + danhSachBaiTap[index].ma + " không?")) {
        danhSachBaiTap.splice(index, 1);
        locBaiTap(boLocHienTai);
    }
}
function chamBai(ma) {
    alert("Đang mở bảng chấm điểm cho bài tập: " + ma);
}
function locBaiTap(trangThai, btn) {
    boLocHienTai = trangThai;
    if (btn) {
        var btns = btn.parentElement.querySelectorAll(".btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");
        }
        btn.classList.add("active");
    }
    if (trangThai === "tatca") {
        hienThiBaiTap(danhSachBaiTap);
    } else {
        var ketQua = [];
        for (var j = 0; j < danhSachBaiTap.length; j++) {
            if (danhSachBaiTap[j].trangthai === trangThai) {
                ketQua.push(danhSachBaiTap[j]);
            }
        }
        hienThiBaiTap(ketQua);
    }
}
function timBaiTap(input) {
    var filter = input.value.toLowerCase();
    var ketQua = [];
    for (var i = 0; i < danhSachBaiTap.length; i++) {
        var bt = danhSachBaiTap[i];
        if (bt.ma.toLowerCase().indexOf(filter) > -1 || bt.ten.toLowerCase().indexOf(filter) > -1 || bt.chuong.toLowerCase().indexOf(filter) > -1) {
            ketQua.push(bt);
        }
    }
    hienThiBaiTap(ketQua);
}
function chuyenTrang(element, viewId) {
    var items = document.querySelectorAll(".menu-item");
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
    }
    element.classList.add("active");
    var views = document.querySelectorAll(".content-view");
    for (var j = 0; j < views.length; j++) {
        views[j].classList.add("d-none");
    }
    var targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.remove("d-none");
    }
    if (viewId === "view-dashboard") {
        kichHoatTienDo();
    }
    if (viewId === "view-baitap") {
        locBaiTap(boLocHienTai);
    }
}
function kichHoatTienDo() {
    var progressBars = document.querySelectorAll(".progress-bar");
    for (var i = 0; i < progressBars.length; i++) {
        var targetWidth = progressBars[i].style.width;
        progressBars[i].style.width = "0%";
        (function (bar, width) {
            setTimeout(function () {
                bar.style.width = width;
            }, 100);
        })(progressBars[i], targetWidth);
    }
}
function xuatBaoCao() {
    alert("Đã xuất báo cáo tổng hợp tiến độ sinh viên thành công!");
}
function xuatExcel() {
    alert("Đang chuẩn bị và xuất file Excel bảng điểm...");
}
function timSinhVien(input) {
    var filter = input.value.toLowerCase();
    var rows = document.querySelectorAll("#bangSinhVien tbody tr");
    for (var i = 0; i < rows.length; i++) {
        var text = rows[i].textContent.toLowerCase();
        if (text.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
window.onload = function () {
    kichHoatTienDo();
    locBaiTap("tatca");
};