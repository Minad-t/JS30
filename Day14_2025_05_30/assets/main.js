var chiSoSua = -1;
function themSinhVien(maSV, hoTen, email, sDT) {
  const table = document
    .getElementById("bang-sinhvien")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.insertCell(0).innerHTML = maSV;
  newRow.insertCell(1).innerHTML = hoTen;
  newRow.insertCell(2).innerHTML = email;
  newRow.insertCell(3).innerHTML = sDT;

  const noAction = newRow.insertCell(4);
  const nutSua = document.createElement("button");
  nutSua.innerText = "Sửa";
  nutSua.onclick = function () {
    suaSinhVien(newRow.rowIndex - 1);
  };
  noAction.appendChild(nutSua);
}

function suaSinhVien(index) {
  const table = document
    .getElementById("bang-sinhvien")
    .getElementsByTagName("tbody")[0];
  const dong = table.rows[index];

  document.getElementById("msv").value = dong.cells[0].innerText;
  document.getElementById("name").value = dong.cells[1].innerText;
  document.getElementById("email").value = dong.cells[2].innerText;
  document.getElementById("sdt").value = dong.cells[3].innerText;

  document.getElementById("nutluu").innerText = "Lưu";
  chiSoSua = index;
}

function luuThongTin() {
  const maSV = document.getElementById("msv").value;
  const hoTen = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const sDT = document.getElementById("sdt").value;

  if (chiSoSua === -1) {
    themSinhVien(maSV, hoTen, email, sDT);
  } else {
    const table = document.getElementById("bang-sinhvien");
    const dong = table.rows[chiSoSua + 1];

    dong.cells[0].innerText = maSV;
    dong.cells[1].innerText = hoTen;
    dong.cells[2].innerText = email;
    dong.cells[3].innerText = sDT;

    chiSoSua = -1;
    document.getElementById("nutluu").innerText = "Thêm";
  }
  document.querySelector("form").reset();
}