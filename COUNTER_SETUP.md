# Đếm lượt xem thật (không tạo số ảo)

Bản V23 hiển thị **0** mặc định. Trang HTML tĩnh không thể tự đếm chính xác tổng lượt xem trên nhiều thiết bị.

Để bật đếm thực trên Cloudflare: tạo Worker, tạo KV namespace tên VIEW_KV, gắn binding VIEW_KV vào Worker, dán mã trong `worker-counter.js`, triển khai Worker. Trong `index.html` sửa `const VIEW_COUNTER_API='';` thành URL Worker.

Worker tăng 1 lần cho mỗi trình duyệt/ngày (dựa trên cookie ký danh ngẫu nhiên và KV), không tăng mỗi lần reload liên tục. Cấu hình ALLOWED_ORIGIN là tên miền website thật (ví dụ https://example.pages.dev). Dữ liệu ban đầu 0.

Nếu chưa cài Worker, số 0 được giữ nguyên, không giả vờ có người xem.

Lưu ý: Cookie bên thứ ba có thể bị Safari chặn, KV không đảm bảo tăng nguyên tử khi nhiều lượt truy cập đồng thời. Để thống kê chính xác hơn, nên dùng Cloudflare Analytics hoặc Durable Object.
