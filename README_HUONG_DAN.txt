DEV_ZHENGZHIN V33 — GAMING / MOBILE FIRST

CHẠY VÀ TRIỂN KHAI
Website HTML/CSS/JavaScript tĩnh, không cần npm hoặc bước build.
Giải nén ZIP và tải toàn bộ nội dung lên thư mục gốc GitHub Pages hoặc Netlify.
index.html phải nằm tại thư mục gốc. Giữ nguyên thư mục assets.
Chạy thử trên máy tính: python3 -m http.server 8000
Mở http://localhost:8000. Mở iphone-preview.html để xem bố cục 390 x 844.
Có thể thêm ?width=320&height=568 vào iphone-preview.html để xem màn hình nhỏ.

HÌNH ẢNH
assets/cover-zhengzhin.webp: ảnh bìa Zhengzhin bạn cung cấp.
assets/profile-bmw-cat.webp: ảnh đại diện mèo trước xe BMW bạn cung cấp.
Ảnh được thu nhỏ và nén WebP cho web. Ảnh bìa giữ trọn tỷ lệ.
Font WOFF lưu nội bộ để không phụ thuộc dịch vụ font bên ngoài.

CHỨC NĂNG
Màn hình chào: chọn vào có nhạc hoặc không nhạc.
Nhạc chỉ phát sau thao tác người dùng; có tạm dừng, phát tiếp và trạng thái tải.
Nhạc tự tạm dừng khi trang bị ẩn. Khi quay lại, nhấn Bật nhạc để nghe tiếp.
Tìm kiếm hỗ trợ tiếng Việt có dấu và không dấu; lọc danh mục, sắp xếp A–Z/mới nhất.
Lưu ứng dụng trong trình duyệt hiện tại; xóa dữ liệu trình duyệt sẽ xóa mục đã lưu.
Menu, thanh điều hướng điện thoại và các hộp hướng dẫn hoạt động độc lập.
Nút hiệu ứng lưu tùy chọn, đồng thời tôn trọng prefers-reduced-motion của thiết bị.

DỮ LIỆU THẬT
apps.js được giữ theo mã nguồn hiện có: danh sách hiện đang trống.
Không có IPA hoặc liên kết tải giả. Thêm ứng dụng thật trong window.IPA_APPS.
Mỗi ứng dụng nên có id duy nhất, name, category, version, description, icon, url và date.
category: IPA Apps, Games hoặc Tools. date: YYYY-MM-DD; url: liên kết tải hợp lệ.
Liên kết cộng đồng giữ nguyên từ mã nguồn: https://t.me/zhengzhin.

CẤU TRÚC
index.html: nội dung. style.css: bố cục, kiểu chữ và thành phần.
gaming.css: ảnh bìa, đại diện, màu gaming và màn hình chào.
app.js: tìm kiếm, lọc, lưu, hộp thoại, menu, âm thanh và chuyển động.
gaming.js: màn hình chào và quản lý focus.

KIỂM CHỨNG V33
Đã kiểm tra trong Chrome: rộng 320, 390 px và desktop; không tràn ngang.
Đã kiểm tra màn hình chào có/không nhạc, phát/tạm dừng, tìm không dấu, lọc,
xóa bộ lọc, sắp xếp, chi tiết chưa có link, lưu/bỏ lưu và lưu sau khi tải lại.
Kiểm tra dữ liệu mẫu được làm riêng và đã gỡ trước khi bàn giao.
Đã kiểm tra cú pháp JavaScript và tệp tài nguyên cục bộ.
Chưa kiểm thử trực tiếp Safari/iPhone vật lý. Không công bố điểm hiệu năng chưa đo.
Nguồn zhengzhin.io không truy cập được trong phiên làm việc; dùng mã nguồn Site V32 hiện có.
