
public class SinhVien {
    private String MaSV;
    private String HoTen;
    private String Tuoi;
    private static int count = 0;

    public static int getCount() {
        return count;
    }

    public String display() {
        return "MSV: " + MaSV + ", Tên: " + HoTen + ", Tuoi: " + Tuoi;
    }

    public SinhVien(String MaSV, String HoTen, String Tuoi) {
        this.MaSV = MaSV;
        this.HoTen = HoTen;
        this.Tuoi = Tuoi;
        count++;
    }

    public static void main(String[] args) {
        SinhVien SV1 = new SinhVien("043", "Pham Xuan Cong", "19");
        SinhVien SV2 = new SinhVien("001", "abc", "20");
        System.out.println("Tong SV: " + SinhVien.getCount());
        System.out.println(SV1.display());
        System.out.println(SV2.display());
    }
}
