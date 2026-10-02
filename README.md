# 💣 GAME MÈO NỔ 5.2.3 - TƯ TƯỞNG HỒ CHÍ MINH
## Đề Tài: Các Nguyên Tắc Đoàn Kết Quốc Tế (Mục 5.2.3)

Một ứng dụng web minigame tương tác dành cho 6 nhóm sinh viên trong các buổi thuyết trình và thảo luận môn học **Tư tưởng Hồ Chí Minh**, kết hợp giữa hình thức **trắc nghiệm kiến thức** và cơ chế **lật bài may rủi gay cấn kiểu Mèo Nổ (Exploding Kittens)**.

---

## ✨ Điểm Nổi Bật Của Game
- 🎯 **18 Câu hỏi trắc nghiệm 4 lựa chọn (A, B, C, D)** chuẩn hóa 100% bám sát giáo trình và slide mục 5.2.3 (Nguyên tắc 1: Có lý có tình; Nguyên tắc 2: Độc lập tự chủ; và Vận dụng thực tiễn Ngoại giao Cây tre).
- 😿 **Cơ Chế Phạt "Mèo Buồn":** Khi trả lời sai câu hỏi trắc nghiệm, nhóm sẽ bị kích hoạt thẻ Mèo Buồn và bị trừ ngay **30 điểm** (chống chiến thuật cố tình trả lời sai khi thấy bom).
- 🃏 **Vòng lật bài sinh tử (Press Your Luck):** Trả lời đúng sẽ được quyền rút bài. Bạn có thể chọn dừng lại bất kỳ lúc nào để cất điểm an toàn, hoặc rút tiếp để kiếm thêm điểm nhưng đối mặt với nguy cơ nổ bom!
- 💣 **Thẻ Mèo Nổ (Exploding Kitten):** Nếu không có Thẻ Gỡ Bom, điểm tích lũy trong lượt sẽ nổ tung! Nếu nhóm đang có tổng điểm âm, Mèo Nổ sẽ "cứu nguy" reset âm thành 0 điểm!
- 🧨 **Thẻ Mèo Nổ Nhỏ (Mini Bomb):** Nổ một nửa — chia đôi điểm lượt (hoặc chia đôi điểm âm, ví dụ: -20 thành -10).
- ⚡ **Hệ thống thẻ phép đặc biệt & Điểm Âm:**
  - 🛠️ **Thẻ Gỡ Bom (Defuse):** Hóa giải 1 quả Mèo Nổ.
  - 🔄 **Đổi Điểm (Swap):** Tráo đổi toàn bộ Tổng Điểm với nhóm đối thủ (bao gồm cả điểm âm).
  - 🔍 **Thấu Thị (Peek):** Nhìn lén 3 lá bài tiếp theo trên đầu cỗ bài.
  - 🥷 **Cướp Điểm (Steal):** Hút 20 điểm từ 1 nhóm khác (có thể khiến đối thủ bị âm điểm).
  - 🛡️ **Khiên Bảo Vệ (Shield):** Tự động chặn đòn đổi điểm hoặc cướp điểm.
  - ⚡ **Nhân Đôi x2:** Nhân đôi toàn bộ điểm lượt tích lũy (chỉ áp dụng điểm dương, không nhân đôi âm).
- 🔊 **Âm thanh Arcade sống động (Web Audio API):** Tự động tổng hợp âm thanh chân thực (tiếng nổ bom, lật bài, ting ting, còi hú, nhạc chiến thắng) hoạt động 100% offline không cần kết nối mạng.
- 🏆 **Bục Vinh Quang (Podium Top 3):** Trao cúp vàng, cúp bạc, cúp đồng kèm hiệu ứng pháo hoa Confetti rực rỡ khi kết thúc.

---

## 🚀 Hướng Dẫn Chạy Tại Local

1. Mở Terminal / PowerShell tại thư mục dự án:
   ```bash
   npm install
   npm run dev
   ```
2. Truy cập trình duyệt tại địa chỉ:
   ```
   http://localhost:5173
   ```
3. Nhấn phím `F11` trên bàn phím hoặc click nút **Toàn màn hình** ở góc phải màn hình để trình chiếu lên máy chiếu giảng đường cực đẹp!

---

## 🌐 Hướng Dẫn Deploy Lên Vercel (Miễn Phí Siêu Tốc)

Dự án được xây dựng chuẩn trên nền tảng **React 19 + Vite**, hỗ trợ Deploy lên Vercel với 0 bước cấu hình phức tạp:

### Cách 1: Đẩy lên GitHub rồi kết nối Vercel (Khuyến nghị)
1. Đẩy mã nguồn dự án lên GitHub cá nhân của bạn.
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub.
3. Nhấn **"Add New..."** -> **"Project"**.
4. Chọn repository vừa tạo. Vercel sẽ tự động nhận diện:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Nhấn **"Deploy"**. Trong vòng ~30 giây, bạn sẽ nhận được đường link web trực tiếp (ví dụ: `https://meo-no-hcm-523.vercel.app`) để mở trên bất kỳ máy tính hay điện thoại nào!

### Cách 2: Deploy trực tiếp bằng Vercel CLI
Nếu bạn có cài đặt `vercel` trên máy:
```bash
npx vercel
```
Làm theo các bước xác nhận mặc định trên terminal là hoàn tất.

---

## 📂 Cấu Trúc Thư Mục
- `src/data/questions.js`: Ngân hàng 18 câu hỏi trắc nghiệm, đáp án và giải thích chi tiết mục 5.2.3.
- `src/data/cards.js`: Định nghĩa các loại thẻ bài, thẻ phép và thuật toán xáo bài Fisher-Yates.
- `src/utils/sound.js`: Bộ phát âm thanh Web Audio API tổng hợp trực tiếp không phụ thuộc tệp âm thanh ngoài.
- `src/index.css`: Toàn bộ hệ thống giao diện Glassmorphism, 3D card flips và hiệu ứng rung lắc màn hình khi nổ.
- `src/App.jsx`: Component trung tâm điều phối trạng thái lượt chơi, bảng xếp hạng và các modal tương tác.
