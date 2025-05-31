/*Bai1*/
class Student {
  constructor(id, name, email, age) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }
  displayInfo() {
    document.writeln(
      `Mã Sinh viên: ${this.id}  <br> Tên: ${this.name} <br> Email: ${this.email} <br> Tuổi: ${this.age} <br> <br>`
    );
  }
}

minhTrang = new Student("B24DCCC265", "Đinh Minh Trang", "beyourluve2910@gmail.com", 18);
minhTrang.displayInfo();

tienTuan = new Student("B23DCCC173", "Nguyễn Tiến Tuấn", "tuannt.d23cc173@stu.ptit.edu.vn", 20);
tienTuan.displayInfo();

/*Bai2*/
class Employee {
  constructor(name, position, baseSalary, workingDays) {
    this.name = name;
    this.position = position;
    this.baseSalary = baseSalary;
    this.workingDays = workingDays;
  }
  calculateSalary() {
    return this.baseSalary * this.workingDays;
  }
  show() {
    document.writeln(
      `<br>Lương của nhân viên ${this.name} vị trí ${
        this.position
      } là: ${this.calculateSalary()} vnđ <br>`
    );
  }
}

minhTrang = new Employee("Đinh Minh Trang", "Thực tập BA", 200000, 30);
minhTrang.show();

/*Bai3*/
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  inDanhSachSanPham() {
    document.writeln(
      `Mã sản phẩm: ${this.id} Tên sản phẩm: ${this.name} Giá: ${this.price} vnđ Số lượng: ${this.quantity} <br>`
    );
  }
}

let Products = [];

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
  let maxGia = Products[0];
  for (let i = 0; i < Products.length; i++) {
    if (maxGia.price < Products[i].price) {
      maxGia = Products[i];
    }
  }
  return maxGia;
}

themSanPhamMoi(1, "Chuột", 100000, 10);
themSanPhamMoi(2, "Bàn Phím", 400000, 10);
themSanPhamMoi(3, "Laptop", 17000000, 10);

document.writeln(`<h2> Danh sách sản phẩm:  </h2>`);
Products.forEach((p) => {
  p.inDanhSachSanPham();
});

document.writeln(
  `<h2> <br> Tổng giá trị hàng tồn kho là: ${tongGiaTriHangTonKho()} vnđ </h2>`
);

document.writeln(`<h2> <br> Sản phẩm có giá cao nhất </h2>`);
sanPhamCoGiaCaoNhat().inDanhSachSanPham();