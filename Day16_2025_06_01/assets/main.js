let chiSoSua = -1;

document.getElementById('product-form').addEventListener('submit', themSanPham);

function themSanPham(event) {
  event.preventDefault();

  const maSP = document.getElementById("id").value;
  const tenSP = document.getElementById("name").value;
  const giaSP = parseFloat(document.getElementById("gia").value);
  const soLuongSP = parseInt(document.getElementById("soluong").value);

  if (chiSoSua === -1 && kiemTraID(maSP)) {
    alert("ID đã tồn tại. Vui lòng chọn ID khác.");
    return;
  }

  if (chiSoSua >= 0) {
    const tbody = document.getElementById("bang-sanpham").getElementsByTagName("tbody")[0];
    const row = tbody.rows[chiSoSua];

    row.cells[0].innerText = maSP;
    row.cells[1].innerText = tenSP;
    row.cells[2].innerText = giaSP + " VNĐ";
    row.cells[3].innerText = soLuongSP;
    row.cells[4].innerText = giaSP * soLuongSP + " VNĐ";

    chiSoSua = -1;
  } else {
    luuSanPham(maSP, tenSP, giaSP, soLuongSP);
  }

  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gia").value = "";
  document.getElementById("soluong").value = "";
}

function luuSanPham(maSP, tenSP, giaSP, soLuongSP) {
  const tableBody = document.getElementById("bang-sanpham").getElementsByTagName("tbody")[0];
  const dongMoi = tableBody.insertRow();

  dongMoi.insertCell(0).innerText = maSP;
  dongMoi.insertCell(1).innerText = tenSP;
  dongMoi.insertCell(2).innerText = giaSP + " VNĐ";
  dongMoi.insertCell(3).innerText = soLuongSP;
  dongMoi.insertCell(4).innerText = giaSP * soLuongSP + " VNĐ";

  const cellHanhDong = dongMoi.insertCell(5);

  const nutSua = document.createElement("button");
  nutSua.innerText = "Sửa";
  nutSua.onclick = function () {
    suaSanPham(dongMoi.rowIndex - 1);
  };

  const nutXoa = document.createElement("button");
  nutXoa.innerText = "Xóa";
  nutXoa.onclick = function () {
    xoaSanPham(dongMoi.rowIndex - 1);
  };

  cellHanhDong.appendChild(nutSua);
  cellHanhDong.appendChild(nutXoa);
}

function suaSanPham(index) {
  const tbody = document.getElementById("bang-sanpham").getElementsByTagName("tbody")[0];
  const dong = tbody.rows[index];

  document.getElementById("id").value = dong.cells[0].innerText;
  document.getElementById("name").value = dong.cells[1].innerText;
  document.getElementById("gia").value = dong.cells[2].innerText.replace(" VNĐ", "");
  document.getElementById("soluong").value = dong.cells[3].innerText;

  chiSoSua = index;
}

function xoaSanPham(index) {
  const tbody = document.getElementById("bang-sanpham").getElementsByTagName("tbody")[0];
  tbody.deleteRow(index);
  if (chiSoSua === index) {
    chiSoSua = -1;
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gia").value = "";
    document.getElementById("soluong").value = "";
  }
}

function kiemTraID(id) {
  const tbody = document.getElementById("bang-sanpham").getElementsByTagName("tbody")[0];
  for (let i = 0; i < tbody.rows.length; i++) {
    const iDCell = tbody.rows[i].cells[0].innerText;
    if (iDCell === id) {
      return true;
    }
  }
  return false;
}