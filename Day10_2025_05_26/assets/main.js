const imagesList = [
    "./assets/images/anh1.jpg",
    "./assets/images/anh2.jpg",
    "./assets/images/anh3.jpg",
    "./assets/images/anh4.jpg",
    "./assets/images/anh5.jpg",
];
var chiSoHienTai = 0;

const imagesHienThi = document.getElementById("slide");

function hienThiAnh(index) {
    imagesHienThi.src = imagesList[index];
}

function anhTiepTheo() {
    chiSoHienTai = (chiSoHienTai + 1) % imagesList.length;
    hienThiAnh(chiSoHienTai);
}

function anhTruocDo() {
    if (chiSoHienTai <= 0) {
        chiSoHienTai = (imagesList.length - 1) % imagesList.length;
        hienThiAnh(chiSoHienTai);
    } else {
        chiSoHienTai = (chiSoHienTai - 1) % imagesList.length;
        hienThiAnh(chiSoHienTai);
    }
}