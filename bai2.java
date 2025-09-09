import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

class TaiKhoan {
    private String soTK;
    private String chuTK;
    private double soDu;
    private static double laiSuat = 0.05; 

    public TaiKhoan(String soTK, String chuTK, double soDu) {
        this.soTK = soTK;
        this.chuTK = chuTK;
        this.soDu = soDu;
    }

    public void napTien(double soTien) {
        if (soTien > 0) {
            soDu += soTien;
            System.out.println("Nạp thành công " + soTien + " vào tài khoản " + soTK);
        } else {
            System.out.println("Số tiền nạp phải > 0");
        }
    }

    public void rutTien(double soTien) {
        if (soTien > 0 && soTien <= soDu) {
            soDu -= soTien;
            System.out.println("Rút thành công " + soTien + " từ tài khoản " + soTK);
        } else {
            System.out.println("Rút thất bại. Số dư không đủ!");
        }
    }

    public void tinhLaiThang() {
        double laiThang = soDu * (laiSuat / 12);
        soDu += laiThang;
    }

    public void hienThi() {
        System.out.printf("STK: %s | Chủ TK: %s | Số dư: %.2f\n", soTK, chuTK, soDu);
    }

    public double getSoDu() {
        return soDu;
    }

    public String getSoTK() {
        return soTK;
    }

    public static void setLaiSuat(double ls) {
        if (ls > 0) {
            laiSuat = ls;
        }
    }

    public static double getLaiSuat() {
        return laiSuat;
    }
}

public class QuanLyTaiKhoan {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<TaiKhoan> danhSach = new ArrayList<>();

        danhSach.add(new TaiKhoan("1001", "Nguyen Van A", 5000));
        danhSach.add(new TaiKhoan("1002", "Tran Thi B", 10000));
        danhSach.add(new TaiKhoan("1003", "Le Van C", 2000));

        danhSach.get(0).napTien(2000);
        danhSach.get(1).rutTien(3000);

        for (TaiKhoan tk : danhSach) {
            tk.tinhLaiThang();
        }

        System.out.println("\nDanh sách tài khoản sau giao dịch:");
        for (TaiKhoan tk : danhSach) {
            tk.hienThi();
        }

        System.out.print("\nNhập số tài khoản cần tìm: ");
        String stkTim = sc.nextLine();
        boolean found = false;
        for (TaiKhoan tk : danhSach) {
            if (tk.getSoTK().equals(stkTim)) {
                System.out.println("Đã tìm thấy:");
                tk.hienThi();
                found = true;
                break;
            }
        }
        if (!found) {
            System.out.println("Không tìm thấy tài khoản có STK " + stkTim);
        }

        Collections.sort(danhSach, Comparator.comparingDouble(TaiKhoan::getSoDu).reversed());

        System.out.println("\nDanh sách tài khoản sắp xếp theo số dư giảm dần:");
        for (TaiKhoan tk : danhSach) {
            tk.hienThi();
        }

        sc.close();
    }
}
