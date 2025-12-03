# Website Trình Chiếu: Sinh viên trên Mặt trận Văn hóa

Bài thuyết trình chuyên nghiệp về tư tưởng Hồ Chí Minh - Chương 6: Tư Tưởng Hồ Chí Minh Về Văn Hóa, Đạo Đức, Con Người

## Giới thiệu

Website trình chiếu đầy đủ tính năng với giao diện hiện đại, bố cục chuyên nghiệp, phù hợp cho bài thuyết trình về sản phẩm sáng tạo môn HCM202.

### Chủ đề
**"Sinh viên trên 'Mặt trận văn hóa' - Cuộc chiến chống 'Giặc nội xâm'"**
Theo tư tưởng Hồ Chí Minh

## Tính năng

### 🏠 Trang chủ (Landing Page)
- Hero section với gradient và ảnh nền chuyên nghiệp
- 3 card giới thiệu nội dung chính
- Trích dẫn nổi bật của Chủ tịch Hồ Chí Minh
- Call-to-action buttons

### 📊 Trình chiếu (Slide Viewer)
- 23 slide đầy đủ nội dung
- Điều hướng mượt mà (Previous/Next)
- Thanh tiến độ hiển thị vị trí hiện tại
- Chế độ toàn màn hình (Fullscreen)
- Điều khiển bằng phím mũi tên
- Responsive design

### 🔍 Tìm kiếm (Search)
- Tìm kiếm nhanh nội dung slide
- Hiển thị kết quả theo độ liên quan
- Nhảy trực tiếp đến slide được chọn

### 📑 Mục lục (Table of Contents)
- Sidebar hiển thị tất cả các slide
- Highlight slide hiện tại
- Click để nhảy đến slide bất kỳ
- Sticky position khi scroll

### 🎯 Quiz - Kiểm tra kiến thức
- 10 câu hỏi trắc nghiệm
- Hiển thị kết quả ngay lập tức
- Lưu điểm vào localStorage
- Thống kê chi tiết sau khi hoàn thành
- Có thể làm lại nhiều lần

### 📚 Tài liệu tham khảo
- Danh sách tài liệu chính
- Các trích dẫn quan trọng
- Kết luận tổng hợp

## Công nghệ sử dụng

- **React 18** - UI Library
- **TypeScript** - Type safety
- **Vite** - Build tool & Dev server
- **TailwindCSS** - Styling
- **Lucide React** - Icons

## Cài đặt

```bash
# Clone repository
git clone [repository-url]

# Di chuyển vào thư mục
cd project

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build
```

## Cấu trúc thư mục

```
project/
├── public/
│   └── hero.png (placeholder)
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── LandingPage.tsx
│   │   ├── Quiz.tsx
│   │   ├── References.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Slide.tsx
│   │   ├── SlideViewer.tsx
│   │   └── TableOfContents.tsx
│   ├── data/
│   │   └── slides.ts
│   ├── styles/
│   │   └── typography.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
└── package.json
```

## Theme & Design

### Màu sắc
- **Primary**: #1e40af (Xanh tri thức)
- **Accent**: #f7d774 (Vàng ánh sáng)
- **White**: #ffffff
- **Gray**: #e5e7eb

### Typography
- **Heading**: Merriweather (serif)
- **Body**: Inter (sans-serif)

### Logo
Logo tượng trưng với:
- Ngôi sao (tượng trưng cho lý tưởng)
- Sách mở (tri thức)
- Tia sáng (văn hóa soi đường)

## Nội dung

Bài trình chiếu gồm 5 phần chính:

1. **Dẫn nhập** - Từ bối cảnh lịch sử đến nhiệm vụ thời đại
2. **Nhận diện "Giặc nội xâm"** - 4 nhóm giặc nguy hiểm
3. **Vũ khí chiến đấu** - "Phò chính trừ tà" & Đời sống mới
4. **Vận dụng thực tiễn** - Hành động của sinh viên
5. **Kết luận** - Mỗi sinh viên là một chiến sĩ

## Tính năng nổi bật

### Responsive Design
- Tối ưu cho desktop, tablet, mobile
- Layout thích ứng theo kích thước màn hình
- Touch-friendly cho thiết bị di động

### User Experience
- Smooth transitions và animations
- Loading states
- Error handling
- Keyboard navigation support

### Performance
- Optimized images từ Pexels
- Lazy loading
- Code splitting
- Production build < 210KB

## Scripts

```bash
# Development
npm run dev          # Chạy dev server

# Production
npm run build        # Build production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Kiểm tra linting
npm run typecheck    # Kiểm tra TypeScript
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tác giả

Bài thuyết trình nhóm
- Thành Viên Nhóm 10 gồm:
  + Hồ Lê Bình
  + Nguyễn Văn Cường
  + Nguyễn Trần Gia Bảo
  + Phạm Minh Nhật
  + Nguyễn Hoàng Quân
  + Nguyễn Hoàng Minh
- Môn: Tư tưởng Hồ Chí Minh
- Chương 6: Tư Tưởng Hồ Chí Minh Về Văn Hóa, Đạo Đức, Con Người
- Học kỳ: Block3W Fall 2025
- Lớp: 3W_HCM202_04

## License

© 2025 - Bản quyền thuộc về Nhóm 10
