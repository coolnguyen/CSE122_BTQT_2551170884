var danhSach = [
    { stt: 1, masv: "2251060001", hoten: "Nguyễn Văn An", lop: "67CNTT1", diem: "8.5", trangthai: "Đạt" },
    { stt: 2, masv: "2251060002", hoten: "Trần Thị Bình", lop: "67CNTT1", diem: "7.0", trangthai: "Đạt" },
    { stt: 3, masv: "2251060003", hoten: "Lê Minh Cường", lop: "67CNTT2", diem: "5.5", trangthai: "Thi lại" },
    { stt: 4, masv: "2251060004", hoten: "Phạm Thu Dung", lop: "67KTPM1", diem: "9.0", trangthai: "Đạt" },
    { stt: 5, masv: "2251060005", hoten: "Hoàng Gia Hân", lop: "67KTPM1", diem: "6.5", trangthai: "Đạt" },
    { stt: 6, masv: "2251060006", hoten: "Vũ Tuấn Kiệt", lop: "67CNTT1", diem: "7.5", trangthai: "Đạt" },
    { stt: 7, masv: "2251060007", hoten: "Đặng Mỹ Linh", lop: "67CNTT2", diem: "8.0", trangthai: "Đạt" },
    { stt: 8, masv: "2251060008", hoten: "Ngô Văn Nam", lop: "67KTPM1", diem: "4.5", trangthai: "Thi lại" },
    { stt: 9, masv: "2251060009", hoten: "Bùi Thảo Nhi", lop: "67CNTT1", diem: "9.5", trangthai: "Đạt" },
    { stt: 10, masv: "2251060010", hoten: "Phan Hữu Phúc", lop: "67KTPM2", diem: "6.0", trangthai: "Đạt" },
    { stt: 11, masv: "2251060011", hoten: "Trịnh Kim Oanh", lop: "67CNTT2", diem: "8.0", trangthai: "Đạt" },
    { stt: 12, masv: "2251060012", hoten: "Đỗ Minh Quân", lop: "67KTPM1", diem: "5.0", trangthai: "Thi lại" },
    { stt: 13, masv: "2251060013", hoten: "Hà Thanh Sơn", lop: "67CNTT1", diem: "7.0", trangthai: "Đạt" },
    { stt: 14, masv: "2251060014", hoten: "Lê Thu Trang", lop: "67CNTT2", diem: "8.5", trangthai: "Đạt" },
    { stt: 15, masv: "2251060015", hoten: "Nguyễn Đức Việt", lop: "67KTPM2", diem: "9.0", trangthai: "Đạt" }
];
var trangHienTai = 1;
var soDongMoiTrang = 5;
function hienThiTrang(trang) {
    if (trang < 1 || trang > 3) return;
    trangHienTai = trang;
    var tbody = document.getElementById("bangDuLieu");
    tbody.innerHTML = "";
    var batDau = (trang - 1) * soDongMoiTrang;
    var ketThuc = batDau + soDongMoiTrang;
    for (var i = batDau; i < ketThuc && i < danhSach.length; i++) {
        var sv = danhSach[i];
        var badgeClass = sv.trangthai === "Đạt" ? "bg-success" : "bg-warning text-dark";
        tbody.innerHTML += "<tr><th scope='row'>" + sv.stt + "</th><td>" + sv.masv + "</td><td>" + sv.hoten + "</td><td>" + sv.lop + "</td><td class='text-center'>" + sv.diem + "</td><td class='text-center'><span class='badge " + badgeClass + "'>" + sv.trangthai + "</span></td></tr>";
    }
    var items = document.querySelectorAll(".page-num");
    for (var j = 0; j < items.length; j++) {
        items[j].classList.remove("active");
        if (j + 1 === trang) {
            items[j].classList.add("active");
        }
    }
}