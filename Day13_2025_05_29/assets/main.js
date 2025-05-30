function themSinhVien() {
  event.preventDefault();
  const mSV = document.getElementById("msv").value.trim();
  const hoTen = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const sDT = document.getElementById("sdt").value.trim();

  const table = document
    .getElementById("bang-sinhvien")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
<td>${mSV}</td>
<td>${hoTen}</td>
<td>${email}</td>
<td>${sDT}</td>
`;
}