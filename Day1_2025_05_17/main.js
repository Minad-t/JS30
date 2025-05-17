/*Bai1*/
function kiemtraChanLe(n) {
    if (n % 2 == 0) {
        return "Số chẵn";
    } else {
        return "Số lẻ"
    }
}

/*Bai2*/
function tinhGiaiThua(n) {
    if (n === 0) {
        return 1;
    }
    var giaithua = 1;
    for (var i = 1; i <= n; i++) {
        giaithua *= i;
    }
    return giaithua;
}

/*Bai3*/
function demSoChiaHet() {
    var count = 0;
    for (var i = 1; i <= 100; i++) {
        if((i % 3 === 0) && (i % 5 === 0)) {
            count ++;
        }
    }
    return count;
}

/*Bai4*/
function tongSoLe(n) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    }
    return sum;
}

/*Bai5*/
function bangCuuChuong(n) {
    if (n < 2 || n > 9) {
        return;
    }
    for (var i = 1; i <= 10; i++) {
        console.log('${n} x ${i} = ${n * i}');
    }
}

/*Bai6*/
function laSoNguyenTo(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

/*Bai7*/
function veTamGiac(n) {
    for (var i = 1; i <= n; i++) {
        document.writeln("*");
    }
}

/*Bai8*/
function xepLoai(diem) {
    if (diem >= 9) {
        return "Xuất sắc";
    } else if (diem >= 8) {
        return "Giỏi";
    } else if (diem >= 6.5) {
        return "Khá";
    } else if (diem >= 5) {
        return "Trung bình"
    } else if (diem < 5) {
        return "Yếu";
    }
}

/*Bai9*/
function tongChuSo(n) {
    var total = 0;
    while (n != 0) {
        var digit = n % 10;
        total += digit;
        n /= 10;
    }
    return total;
}