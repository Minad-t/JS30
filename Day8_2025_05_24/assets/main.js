function calculate() {
    const display = document.getElementById('display');
    var phepTinh = display.value;
    phepTinh = phepTinh.replace(/x/g,"*");
    phepTinh = phepTinh.replace(/\+\+/g,"+ +");
    phepTinh = phepTinh.replace(/--/g,"- -");

    const dau = ['+','-','x','/'];

    if (/\/0(?![0-9])/g.test(phepTinh)) {
        display.value = "Lỗi phép tính!";
        return;
    }

    for (var i = 0; i < phepTinh.length; i++) {
        const a = phepTinh[i];
        const b = phepTinh[i + 1];
        if (dau.includes(a) && dau.includes(b)) {
            const canhNhau = a + b;
            if (!['+-','-+'].includes(canhNhau)) {
                display.value = "Lỗi phép tính!";
                return;
            }
        }
    }

    try {
        display.value = eval(phepTinh);
    }
    catch (e) {
        display.value = "Lỗi phép tính!";
    }
}