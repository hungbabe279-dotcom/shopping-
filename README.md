# CD List - Trang ví dụ

Files created:

- `index.html` — trang tĩnh liệt kê CD giống ảnh mẫu
- `styles.css` — stylesheet cho trang

Mở trang cục bộ

1. Mở `index.html` trực tiếp trong trình duyệt (double-click) hoặc chạy một web server đơn giản:

```powershell
# nếu có Python
python -m http.server 8000
# rồi mở http://localhost:8000
```

Hướng dẫn đẩy (push) lên GitHub

1) Khởi tạo repository cục bộ và commit:

```powershell
cd "C:\Users\damin\OneDrive\Documents\bt7"
git init
git add .
git commit -m "Add CD list static site"
git branch -M main
```

2) Tạo repository trên GitHub và liên kết remote:

- Nếu bạn dùng GitHub web: tạo repo mới (ví dụ `cd-list`) trên github.com, sau đó chạy:

```powershell
git remote add origin https://github.com/<your-username>/cd-list.git
git push -u origin main
```

- Nếu bạn có `gh` (GitHub CLI) cài sẵn, bạn có thể tạo và push tự động:

```powershell
gh repo create cd-list --public --source=. --remote=origin --push
```

Thay `--public` bằng `--private` nếu bạn muốn private repo.

Gợi ý: Nếu bị lỗi xác thực khi `git push`, bạn có thể cần tạo Personal Access Token hoặc đăng nhập bằng credential manager. Xem tài liệu GitHub để cấu hình credential cho Windows.
