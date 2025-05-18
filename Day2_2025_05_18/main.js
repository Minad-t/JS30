/*Bai1*/
function fibonacci(n) {
    var f0 = 0,
        f1 = 1;
    for (var i = 2; i <= n; i++) {
        var fi = f0 + f1;
        f0 = f1;
        f1 = fi;
    }
    if (n === 0) return 0;
    else return f1;
}

function fibonacci2(n) {
    var f0 = 0,
        f1 = 1;
    for (var i = 2; i <= n; i++) {
        var fi= f0 + f1;
        f0 = f1;
        f1 = fi;
    }
    return n === 0 ? 0 : f1;
} 

/*Bai2*/
function daoNguocChuoi(n) {
    var reserved = "";
    for ( var i = n.length - 1; i >= 0; i--) {
        reserved += n[i];
    }
    return reserved;
}

/*Bai3*/
function laNamNhuan(n) {
    if ((n % 4 === 0 &&  n % 100 !== 0) || n % 400 === 0)
        return true;
    return false;
}

function laNamNhuan2(n) {
    return (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0;
}

/*Bai4*/
function kiemTraMatKhau(matKhau) {
    const doDai = matKhau.length >= 0;
    const chuHoa = /[A-Z]/.test(matKhau);
    const chuThuong = /[a-z]/.test(matkhau);
    const so = /\d/.test(matKhau);
    return doDai && chuHoa && chuThuong && so;
}