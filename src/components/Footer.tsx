export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">Thông tin môn học</h3>
            <p className="text-blue-100 text-sm">Môn: HCM202 - Tư Tưởng Hồ Chí Minh</p>
            <p className="text-blue-100 text-sm">Chương 6: Tư Tưởng Hồ Chí Minh Về Văn Hóa, Đạo Đức, Con Người</p>
            <p className="text-blue-100 text-sm">Học kỳ: Block3W - Fall 2025</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Thông tin về thành viên nhóm 10</h3>
            <p className="text-blue-100 text-sm">Nguyễn Trần Gia Bảo - Trưởng Nhóm</p>
            <p className="text-blue-100 text-sm">Nguyễn Văn Cường</p>
            <p className="text-blue-100 text-sm">Hồ Lê Bình</p>
            <p className="text-blue-100 text-sm">Phạm Minh Nhật</p>
            <p className="text-blue-100 text-sm">Nguyễn Hoàng Quân</p>
            <p className="text-blue-100 text-sm">Nguyễn Hoàng Minh</p>
            <p className="text-blue-100 text-sm">Sản phẩm sáng tạo của nhóm 10</p>
            <p className="text-blue-100 text-sm">Lớp: 3W_HCM202_04</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Liên hệ</h3>
            <p className="text-blue-100 text-sm">Email: quannhse184732@fpt.edu.vn</p>
            <p className="text-blue-100 text-sm">Website: tutuong-hochiminh.vercel.app</p>
            <p className="text-blue-100 text-sm mt-4">© 2025 - Bản quyền thuộc về Nhóm 10</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-blue-700 text-center">
          <p className="text-blue-200 text-sm">
            "Văn hoá soi đường cho quốc dân đi" - Hồ Chí Minh
          </p>
        </div>
      </div>
    </footer>
  );
}
