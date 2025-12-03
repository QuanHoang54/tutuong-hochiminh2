# 📦 Tổng hợp Files Chatbot

## 📂 CẤU TRÚC THƯ MỤC

```
project/
├── 🚀 INSTALL_CHATBOT.sh      ← Script tự động cài đặt (Mac/Linux)
├── 🚀 start-chatbot.bat       ← Script tự động cài đặt (Windows)
├── 📖 CHATBOT_SETUP.md        ← Hướng dẫn chi tiết
├── 📖 CHATBOT_ALL_FILES.md    ← File này
│
├── server/                    ← Backend chatbot
│   ├── chatbot.js            ← Server code (Node.js + Express)
│   ├── package.json          ← Dependencies
│   └── node_modules/         ← (tự động tạo sau npm install)
│
├── src/
│   ├── App.tsx               ← Đã tích hợp ChatbotWidget
│   └── components/
│       └── ChatbotWidget.tsx ← Component chatbot widget
│
└── .env                       ← Config VITE_API_URL
```

## 🎯 GIẢI PHÁP CHO LỖI CỦA BẠN

### ❌ Lỗi trước đó: "Xin lỗi, tôi đang gặp sự cố kỹ thuật"

**NGUYÊN NHÂN:** Backend server chưa được chạy!

**GIẢI PHÁP:** Chạy backend server trước khi sử dụng chatbot

---

## ✅ CÁCH CHẠY ĐÚNG (QUAN TRỌNG!)

### **Bước 1: Chạy Backend Server**

**Windows:**
```bash
start-chatbot.bat
```

**Mac/Linux:**
```bash
./INSTALL_CHATBOT.sh
```

**Hoặc thủ công:**
```bash
cd server
npm install
node chatbot.js
```

### **Bước 2: Kiểm tra backend đã chạy**

Mở trình duyệt: http://localhost:3000/health

Kết quả đúng:
```json
{"status":"ok","timestamp":"..."}
```

### **Bước 3: Sử dụng chatbot**

1. Website của bạn (http://localhost:5173) đã tự động có chatbot
2. Tìm nút tròn màu xanh ở góc dưới phải
3. Click vào để mở chatbot
4. Gõ câu hỏi và chat!

---

## 🧪 TEST NHANH

```bash
# Terminal 1: Chạy backend
cd server && npm install && node chatbot.js

# Terminal 2: Test API
curl http://localhost:3000/health
```

---

## 💡 GỢI Ý CÂU HỎI

- "Giới thiệu về SCF"
- "Các hoạt động"
- "Đăng ký tham gia"
- "Thông tin liên hệ"
- "Chào bot"

---

## ❓ XỬ LÝ LỖI

### Nếu vẫn thấy lỗi "sự cố kỹ thuật":

1. ✅ Kiểm tra backend có đang chạy không (terminal có log không?)
2. ✅ Kiểm tra: http://localhost:3000/health
3. ✅ Mở DevTools (F12) → Console → xem lỗi gì
4. ✅ Restart backend: Ctrl+C → chạy lại `node chatbot.js`

### Port 3000 bị chiếm:

Sửa file `server/chatbot.js`:
```javascript
const PORT = process.env.PORT || 3001; // Đổi sang 3001
```

Cập nhật `.env`:
```
VITE_API_URL=http://localhost:3001
```

---

## 🎉 KẾT LUẬN

✅ Backend đã sửa xong
✅ Frontend đã tích hợp sẵn
✅ Scripts tự động đã tạo
✅ Chỉ cần chạy 1 lệnh là xong!

**Lưu ý:** PHẢI chạy backend server trước khi dùng chatbot!
