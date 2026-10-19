const phepTinh = document.getElementById("phep-tinh");
const ketQua = document.getElementById("ket-qua");
const cacPhep = ["+", "-", "x", "÷"];
let bieuThuc = "";
let daTinh = false;

function hienThi() {
    ketQua.textContent = bieuThuc || "0";
}

function dinhDang(chuoi) {
    return chuoi.replace(/([+−×÷])/g, " $1 ").trim();
}

function soCuoi() {
    return bieuThuc.split(/[+−×÷()%]/).pop();
}

function layNgoac() {
    const mo = bieuThuc.split("(").length - 1;
    const dong = bieuThuc.split(")").length - 1;
    const cuoi = bieuThuc.slice(-1);
    if (cuoi === "" || cuoi === "(" || cacPhep.includes(cuoi)) {
        return "(";
    }
    if (mo > dong) {
        return ")";
    }
    return "x(";
}

function nhap(phim) {
    const laPhep = cacPhep.includes(phim);
    const laSo = /\d/.test(phim);

    if (daTinh) {
        if (!laPhep && phim !== "%") {
            bieuThuc = "";
        }
        daTinh = false;
        phepTinh.textContent = "";
    }

    const cuoi = bieuThuc.slice(-1);

    if ((laSo || phim === ".") && (cuoi === ")" || cuoi === "%")) {
        return;
    }

    if (laSo) {
        if (soCuoi() === "0") {
            bieuThuc = bieuThuc.slice(0, -1);
        }
        bieuThuc += phim;
    } else if (phim === ".") {
        if (soCuoi().includes(".")) {
            return;
        }
        bieuThuc += soCuoi() === "" ? "0." : ".";
    } else if (laPhep) {
        if (cacPhep.includes(cuoi)) {
            bieuThuc = bieuThuc.slice(0, -1);
        }
        if (bieuThuc !== "" || phim === "-") {
            bieuThuc += phim;
        }
    } else if (phim === "%") {
        if (/[\d)]/.test(cuoi)) {
            bieuThuc += "%";
        }
    } else {
        bieuThuc += layNgoac();
    }

    hienThi();
}

function tinh() {
    if (bieuThuc === "" || daTinh) {
        return;
    }
    try {
        const mo = bieuThuc.split("(").length - 1;
        const dong = bieuThuc.split(")").length - 1;
        const chuoi = (bieuThuc + ")".repeat(mo - dong))
            .replace(/x/g, "*")
            .replace(/÷/g, "/")
            .replace(/-/g, "-")
            .replace(/%/g, "/100");
        const kq = Function("return " + chuoi)();
        if (!isFinite(kq)) {
            throw new Error("Không tính được");
        }
        phepTinh.textContent = dinhDang(bieuThuc);
        bieuThuc = String(Math.round(kq * 1e10) / 1e10).replace("-", "-");
        daTinh = true;
    } catch (loi) {
        phepTinh.textContent = dinhDang(bieuThuc);
        bieuThuc = "";
        ketQua.textContent = "Lỗi";
        return;
    }
    hienThi();
}

function xoaHet() {
    bieuThuc = "";
    daTinh = false;
    phepTinh.textContent = "";
    hienThi();
}

function bam(phim) {
    if (phim === "C") {
        xoaHet();
    } else if (phim === "=") {
        tinh();
    } else {
        nhap(phim);
    }
}

document.querySelectorAll(".phim").forEach(function (nut) {
    nut.addEventListener("click", function () {
        bam(nut.textContent);
    });
});





























































































































