const thuMuc = "../Anh/Bai13/";
const haiCham = '<img src="' + thuMuc + 'haicham.gif" alt=":">';

function haiAnh(so) {
    const chuc = Math.floor(so / 10);
    const donVi = so % 10;
    return '<img src="' + thuMuc + '0' + chuc + '.gif" alt="' + chuc + '">' +
           '<img src="' + thuMuc + '0' + donVi + '.gif" alt="' + donVi + '">';
}

function loiChao(gio) {
    if (gio < 12) {
        return "Chào buổi sáng";
    }
    if (gio < 18) {
        return "Chào buổi chiều";
    }
    return "Chào buổi tối";
}

function chayDongHo() {
    const bay = new Date();
    const gio = bay.getHours();
    const phut = bay.getMinutes();
    const giay = bay.getSeconds();

    document.getElementById("dongho").innerHTML = haiAnh(gio) + haiCham + haiAnh(phut) + haiCham + haiAnh(giay);
    document.getElementById("loichao").textContent = loiChao(gio);
}

chayDongHo();
setInterval(chayDongHo, 1000);






























