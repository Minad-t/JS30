class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.quantity = Number(quantity);
  }
}

const Products = [];

let chiSoSua = -1;

function themSanPham(event) {
  event.preventDefault();
  const maSP = document.getElementById("id").value.trim();
  const tenSP = document.getElementById("name").value.trim();
  const giaSP = document.getElementById("gia").value.trim();
  const soLuongSP = document.getElementById("soluong").value.trim();

  if (checkID(maSP) && chiSoSua === -1) {
    alert("ID đã tồn tại. Vui lòng chọn ID khác.");
    return;
  }

  if (!maSP || !tenSP || !giaSP || !soLuongSP) {
    alert("Vui lòng điền đầy đủ thông tin sản phẩm");
    return;
  }

  if (chiSoSua >= 0) {
    const tbody = document
      .getElementById("bang-sanpham")
      .getElementsByTagName("tbody")[0];
    const row = tbody.rows[chiSoSua];

    row.cells[0].innerText = maSP;
    row.cells[1].innerText = tenSP;
    row.cells[2].innerText = `${giaSP} VNĐ`;
    row.cells[3].innerText = soLuongSP;
    row.cells[4].innerText = `${giaSP * soLuongSP} VNĐ`;

    Products[chiSoSua] = new Product(maSP, tenSP, giaSP, soLuongSP);

    chiSoSua = -1;
  } else {
    luuSanPham(maSP, tenSP, giaSP, soLuongSP);
  }

  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gia").value = "";
  document.getElementById("soluong").value = "";

  capNhatThongKe();
}

function luuSanPham(maSP, tenSP, giaSP, soLuongSP) {
  const tbody = document
    .getElementById("bang-sanpham")
    .getElementsByTagName("tbody")[0];
  const dongMoi = tbody.insertRow();

  dongMoi.insertCell(0).innerText = maSP;
  dongMoi.insertCell(1).innerText = tenSP;
  dongMoi.insertCell(2).innerText = `${giaSP} VNĐ`;
  dongMoi.insertCell(3).innerText = soLuongSP;
  dongMoi.insertCell(4).innerText = `${giaSP * soLuongSP} VNĐ`;

  const hanhDong = dongMoi.insertCell(5);

  const nutSua = document.createElement("button");
  nutSua.innerText = "Sửa";
  nutSua.onclick = function () {
    suaSanPham(dongMoi.rowIndex - 1);
  };
  nutSua.style.background = "#ffc207";
  nutSua.style.border = "none";
  nutSua.style.padding = "5px 10px";
  nutSua.style.fontSize = "14px";
  nutSua.style.fontWeight = "400";
  nutSua.style.margin = "0 5px";

  const nutXoa = document.createElement("button");
  nutXoa.innerText = "Xóa";
  nutXoa.onclick = function () {
    xoaSanPham(dongMoi.rowIndex - 1);
  };
  nutXoa.style.background = "#dc3544";
  nutXoa.style.color = "#fff";
  nutXoa.style.border = "none";
  nutXoa.style.padding = "5px 10px";
  nutXoa.style.fontSize = "14px";
  nutXoa.style.fontWeight = "400";
  nutXoa.style.margin = "0 5px";

  hanhDong.appendChild(nutSua);
  hanhDong.appendChild(nutXoa);

  themSanPhamMoi(maSP, tenSP, giaSP, soLuongSP);
  capNhatThongKe();
}

function suaSanPham(index) {
  const tbody = document
    .getElementById("bang-sanpham")
    .getElementsByTagName("tbody")[0];
  const row = tbody.rows[index];

  document.getElementById("id").value = row.cells[0].innerText;
  document.getElementById("name").value = row.cells[1].innerText;
  document.getElementById("gia").value = row.cells[2].innerText.replace(
    " VNĐ",
    ""
  );
  document.getElementById("soluong").value = row.cells[3].innerText;

  chiSoSua = index;
}

function xoaSanPham(index) {
  const tbody = document
    .getElementById("bang-sanpham")
    .getElementsByTagName("tbody")[0];
  tbody.deleteRow(index);

  Products.splice(index, 1);

  if (chiSoSua === index) {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gia").value = "";
    document.getElementById("soluong").value = "";
    chiSoSua = -1;
  }

  capNhatThongKe();
}

function checkID(id) {
  const tbody = document
    .getElementById("bang-sanpham")
    .getElementsByTagName("tbody")[0];

  for (let i = 0; i < tbody.rows.length; i++) {
    const idCheck = tbody.rows[i].cells[0].innerText;
    if (idCheck === id) {
      return true;
    }
  }
  return false;
}

function themSanPhamMoi(id, name, price, quantity) {
  const newProduct = new Product(id, name, price, quantity);
  Products.push(newProduct);
}

function tongGiaTriHangTonKho() {
  let total = 0;
  for (let i = 0; i < Products.length; i++) {
    total += Products[i].quantity * Products[i].price;
  }
  return total;
}

function sanPhamCoGiaCaoNhat() {
  if (Products.length === 0) return null;

  let maxGia = Products[0];
  for (let i = 1; i < Products.length; i++) {
    if (maxGia.price < Products[i].price) {
      maxGia = Products[i];
    }
  }
  return maxGia;
}

function capNhatThongKe() {
  const tong = tongGiaTriHangTonKho();
  const spMax = sanPhamCoGiaCaoNhat();

  document.getElementById("tongGiaTri").innerText =
    "Tổng giá trị hàng tồn kho: " + tong + " VNĐ";

  if (spMax) {
    document.getElementById("sanPhamGiaCaoNhat").innerText =
      "Sản phẩm có giá cao nhất: " + spMax.name + " (" + spMax.price + " VNĐ)";
  } else {
    document.getElementById("sanPhamGiaCaoNhat").innerText =
      "Sản phẩm có giá cao nhất: Chưa có";
  }
}
