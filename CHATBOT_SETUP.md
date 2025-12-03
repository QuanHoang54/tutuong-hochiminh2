# 🤖 Hướng dẫn chạy Chatbot

## 🚀 CÁCH CHẠY NHANH (1 LỆNH DUY NHẤT!)

### **MacOS / Linux:**

Mở Terminal tại thư mục dự án và chạy:

```bash
./INSTALL_CHATBOT.sh
```

### **Windows:**

Double-click file `start-chatbot.bat` hoặc mở Command Prompt tại thư mục dự án và chạy:

```bash
start-chatbot.bat
```

✅ **Thành công khi thấy:**
```
🤖 Chatbot Backend đang chạy tại http://localhost:3000
📊 Health check: http://localhost:3000/health
```

⚠️ **QUAN TRỌNG:** Giữ terminal/command prompt này chạy, ĐỪNG đóng!

---

## 📝 CÁCH CHẠY THỦ CÔNG (NẾU CẦN)

### Bước 1: Cài đặt dependencies cho Backend

Mở **Terminal mới** và chạy:

```bash
cd server
npm install
```

### Bước 2: Chạy Backend Server

```bash
node chatbot.js
```

✅ **Thành công khi thấy:**
```
🤖 Chatbot Backend đang chạy tại http://localhost:3000
📊 Health check: http://localhost:3000/health
```

⚠️ **QUAN TRỌNG:** Giữ terminal này chạy, ĐỪNG đóng!

---

### Bước 3: Website của bạn đã sẵn sàng!

Website chính của bạn đã tự động có chatbot widget!

**Chatbot sẽ xuất hiện:**
- Nút tròn màu xanh ở góc dưới bên phải màn hình
- Click vào để mở chatbot
- Có thể chat ngay lập tức!

---

## 📍 VỊ TRÍ CÁC FILE

```
project/
├── server/                  ← Backend chatbot
│   ├── chatbot.js          ← Server code
│   ├── package.json
│   └── node_modules/
│
├── src/
│   └── components/
│       └── ChatbotWidget.tsx  ← Widget hiển thị trên website
│
└── .env                    ← Config (đã setup sẵn)
```

---

## 🧪 KIỂM TRA BACKEND HOẠT ĐỘNG

Mở trình duyệt hoặc terminal mới, chạy:

```bash
curl http://localhost:3000/health
```

Kết quả đúng:
```json
{
  "status": "ok",
  "timestamp": "2025-12-02T..."
}
```

---

## ❓ XỬ LÝ LỖI

### Lỗi: "Port 3000 đã được sử dụng"

Đổi port trong file `server/chatbot.js`:
```javascript
const PORT = process.env.PORT || 3001; // Đổi từ 3000 sang 3001
```

Và cập nhật `.env`:
```
VITE_API_URL=http://localhost:3001
```

### Lỗi: "Cannot find module 'express'"

```bash
cd server
npm install
```

### Chatbot không kết nối được backend

1. Kiểm tra backend có đang chạy không (terminal có log không?)
2. Mở DevTools (F12) → Console → xem có lỗi gì
3. Thử truy cập: http://localhost:3000/health

---

## 🎯 TÓM TẮT

1. **Mở terminal** → `cd server` → `npm install` → `npm start`
2. **Website đã tự động có chatbot** (nút tròn góc dưới phải)
3. **Hoàn tất!**

---

## 💡 GỢI Ý CÂU HỎI CHO CHATBOT

- "Giới thiệu về SCF"
- "Các hoạt động"
- "Đăng ký tham gia"
- "Thông tin liên hệ"
