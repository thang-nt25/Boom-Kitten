// Định nghĩa các loại thẻ bài trong trò chơi Mèo Nổ
// Cỗ bài tối ưu: 150 LÁ BÀI - Đầy đủ 13 loại thẻ, cân bằng hoàn hảo giữa Điểm, Phép, Bom và Bảo Bối

export const CARD_TYPES = {
  POINT: 'POINT',
  DOUBLE: 'DOUBLE',
  BOMB: 'BOMB',                 // Mèo Nổ Cảm Tử (To - nổ 100%)
  MINI_BOMB: 'MINI_BOMB',       // Tiểu Mèo Nổ (Bé - nổ 50%)
  DEFUSE: 'DEFUSE',             // Mèo Gỡ Bom (5 lá)
  THROW_BOMB: 'THROW_BOMB',     // Mèo Ném Bom (3 lá)
  INSURANCE: 'INSURANCE',       // Mèo Bảo Hiểm Rủi Ro (4 lá)
  REMOTE_BOMB: 'REMOTE_BOMB',   // Mèo Pháo Kích (5 lá - chia đôi đối thủ)
  SHIELD: 'SHIELD',             // Khiên Chắn (9 lá - đúng 6%)
  SWAP: 'SWAP',                 // Đổi Điểm Ngoại Giao (4 lá)
  PEEK: 'PEEK',                 // Thấu Thị Tiên Tri (6 lá)
  STEAL: 'STEAL',               // Cướp Điểm (8 lá)
  GIFT: 'GIFT',                 // Mèo Hào Hiệp Viện Trợ (6 lá)
  SAD_CAT: 'SAD_CAT'            // Lá Bài Ẩn Mèo Buồn (Phạt -30đ & mất lượt khi trả lời sai)
};

export const CARD_DEFINITIONS = [
  // 1. Thẻ Điểm Thường (71 lá - 47.3%)
  {
    type: CARD_TYPES.POINT,
    value: 10,
    title: "+10 Điểm",
    catName: "Mèo Bắt Cá Vàng",
    icon: "🐟😺🪙",
    subtitle: "Mèo con câu được chú cá vàng béo ú!",
    color: "#2563EB",
    countInDeck: 23
  },
  {
    type: CARD_TYPES.POINT,
    value: 20,
    title: "+20 Điểm",
    catName: "Mèo Móng Vuốt Kim Cương",
    icon: "💎😸✨",
    subtitle: "Mèo thợ mỏ đào trúng viên ngọc lấp lánh!",
    color: "#0891B2",
    countInDeck: 23
  },
  {
    type: CARD_TYPES.POINT,
    value: 30,
    title: "+30 Điểm",
    catName: "Mèo Thần Tài Vẫy Tay",
    icon: "🌟😻🛎️",
    subtitle: "Maneki Neko rung chuông vàng mang lộc tới!",
    color: "#D97706",
    countInDeck: 17
  },
  {
    type: CARD_TYPES.POINT,
    value: 50,
    title: "+50 Điểm",
    catName: "Mèo Hoàng Gia Jackpot",
    icon: "👑😼🏆",
    subtitle: "Vương thượng ban tặng rương vàng châu báu!",
    color: "#CA8A04",
    countInDeck: 8
  },

  // 2. Thẻ Nhân Đôi (8 lá - 5.3%)
  {
    type: CARD_TYPES.DOUBLE,
    title: "Nhân Đôi x2",
    catName: "Mèo Sấm Sét Lôi Thần",
    icon: "⚡🙀⚡",
    subtitle: "Lông mèo dựng đứng tích tụ nghìn vôn sét!",
    color: "#D97706",
    countInDeck: 8
  },

  // 3. Thẻ Phép: Thấu Thị / Phân Tích (6 lá - 4.0%)
  {
    type: CARD_TYPES.PEEK,
    title: "Thấu Thị Tiên Tri",
    catName: "Pháp Sư Mèo Mắt Thần",
    icon: "🔮😼👁️",
    subtitle: "Quả cầu pha lê soi tỏ 3 lá bài trên đầu cỗ!",
    color: "#7C3AED",
    countInDeck: 6
  },

  // 4. Thẻ Phép: Đổi Điểm Ngoại Giao (4 lá - 2.7%)
  {
    type: CARD_TYPES.SWAP,
    title: "Đổi Điểm Ngoại Giao",
    catName: "Song Sinh Mèo Ma Thuật",
    icon: "🌀😸🔮😽🌀",
    subtitle: "Hai chú mèo mở cổng không gian tráo đổi điểm!",
    color: "#DB2777",
    countInDeck: 4
  },

  // 5. Thẻ Phép: Cướp Điểm (8 lá - 5.3%)
  {
    type: CARD_TYPES.STEAL,
    value: 20,
    title: "Cướp 20 Điểm",
    catName: "Mèo Ninja Đột Kích",
    icon: "🥷😼💰",
    subtitle: "Mèo bịt mặt lẻn vào kho đối thủ vác bao tiền vàng!",
    color: "#9333EA",
    countInDeck: 8
  },

  // 6. Thẻ Phép Mới: Mèo Hào Hiệp - Viện Trợ Quốc Tế (6 lá - 4.0%)
  {
    type: CARD_TYPES.GIFT,
    value: 30,
    title: "Mèo Hào Hiệp",
    catName: "Đại Sứ Mèo Hữu Nghị",
    icon: "🎁😸🤝✨",
    subtitle: "Nhận +30 điểm vào Lượt và tặng mỗi nhóm khác +5 điểm!",
    color: "#16A34A",
    countInDeck: 6
  },

  // 7. Thẻ Phép Mới: Mèo Pháo Kích - Chia Đôi Đối Thủ (5 lá - 3.3%)
  {
    type: CARD_TYPES.REMOTE_BOMB,
    title: "Mèo Pháo Kích",
    catName: "Xạ Thủ Mèo Rocket",
    icon: "🚀😼🎯💥",
    subtitle: "Ngắm bắn rocket chia đôi 50% điểm 1 nhóm đối thủ!",
    color: "#EA580C",
    countInDeck: 5
  },

  // 8. Thẻ Phòng Thủ: Khiên Chắn (9 lá - 6.0%)
  {
    type: CARD_TYPES.SHIELD,
    title: "Khiên Phòng Thủ",
    catName: "Đại Hiệp Mèo Áo Choàng",
    icon: "🛡️😸✨",
    subtitle: "Chặn đòn Cướp, Đổi điểm & Bom Pháo Kích từ đối thủ!",
    color: "#059669",
    countInDeck: 9
  },

  // 9. Thẻ Bảo Bối Mới: Mèo Bảo Hiểm Rủi Ro (4 lá - 2.7%)
  {
    type: CARD_TYPES.INSURANCE,
    title: "Mèo Bảo Hiểm",
    catName: "Chuyên Viên Bảo Hộ Cứu Viện",
    icon: "🦺😼🚑",
    subtitle: "Giảm nửa sát thương khi dính Mèo Nổ (còn 50%) và Tiểu Bom (còn 25%)!",
    color: "#2563EB",
    countInDeck: 4
  },

  // 10. Thẻ Bảo Bối Mới: Mèo Ném Bom (3 lá - 2.0%)
  {
    type: CARD_TYPES.THROW_BOMB,
    title: "Mèo Ném Bom",
    catName: "Siêu Thủ Phản Kích",
    icon: "💣🔄😼💨",
    subtitle: "Khi rút trúng Bom, ném ngay sang đối thủ để bảo toàn mạng!",
    color: "#D97706",
    countInDeck: 3
  },

  // 11. Thẻ Bảo Bối: Mèo Gỡ Bom (5 lá - 3.3%)
  {
    type: CARD_TYPES.DEFUSE,
    title: "Mèo Gỡ Bom",
    catName: "Kỹ Sư Mèo Công Nghệ",
    icon: "🔧😼👓",
    subtitle: "Hóa giải Mèo Nổ hoặc Tiểu Bom, bảo toàn điểm và được đi tiếp!",
    color: "#0D9488",
    countInDeck: 5
  },

  // 12. Thẻ Nguy Hiểm: TIỂU MÈO NỔ (10 lá - 6.7%)
  {
    type: CARD_TYPES.MINI_BOMB,
    title: "💥 TIỂU MÈO NỔ 💥",
    catName: "Tiểu Mèo Bom Cắt Đôi",
    icon: "💣💥🙀⚡",
    subtitle: "Nổ chia đôi 50% điểm nhóm và hết lượt (Có Gỡ/Ném được đi tiếp)!",
    color: "#E11D48",
    countInDeck: 10
  },

  // 13. Thẻ Nguy Hiểm: MÈO NỔ CẢM TỬ (11 lá - 7.3%)
  {
    type: CARD_TYPES.BOMB,
    title: "💥 MÈO NỔ CẢM TỬ 💥",
    catName: "Mèo Bom Quá Khích",
    icon: "💣🙀💥",
    subtitle: "Mèo ôm trọn cây thuốc nổ - Nổ sạch 100% điểm về 0!",
    color: "#DC2626",
    countInDeck: 11
  }
];

// Hàm xáo trộn mảng ngẫu nhiên (Fisher-Yates Shuffle)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Tạo cỗ bài ngẫu nhiên 150 lá với ràng buộc vàng:
// Mèo Nổ Cảm Tử & Tiểu Mèo Nổ TUYỆT ĐỐI không bao giờ nằm sát nhau
// (Luôn cách nhau ít nhất 2 lá bài an toàn ở giữa: gap >= 2)
export function generateDeck() {
  const bombCards = [];
  const safeCards = [];
  let cardId = 1;

  CARD_DEFINITIONS.forEach(def => {
    const isBomb = def.type === CARD_TYPES.BOMB || def.type === CARD_TYPES.MINI_BOMB;
    for (let i = 0; i < def.countInDeck; i++) {
      const card = {
        id: `card_${cardId++}`,
        ...def
      };
      if (isBomb) {
        bombCards.push(card);
      } else {
        safeCards.push(card);
      }
    }
  });

  // Xáo trộn độc lập danh sách bom và danh sách bài an toàn
  shuffleArray(bombCards);
  shuffleArray(safeCards);

  const numBombs = bombCards.length; // 21 lá bom (11 Bom to + 10 Tiểu bom)
  const totalCards = bombCards.length + safeCards.length; // 150 lá
  const minGap = 2; // Khoảng cách tối thiểu giữa 2 lá bom là 2 lá bài an toàn

  // Thuật toán ánh xạ khoảng cách (Bijective Gap Distribution):
  // Giả sử các vị trí bom là p_0 < p_1 < ... < p_{numBombs-1}.
  // Ta cần điều kiện: p_{k+1} - p_k >= minGap + 1 = 3 (nghĩa là giữa 2 quả bom luôn có ít nhất 2 lá bài khác).
  // Đặt y_k = p_k - k * minGap.
  // Khi đó: y_{k+1} - y_k = (p_{k+1} - p_k) - minGap >= 3 - 2 = 1.
  // Vậy dãy y_k là tập hợp 21 số nguyên phân biệt được chọn ngẫu nhiên đều từ pool.
  // Đồng thời cho p_0 >= 2 để 2 lá bài đầu tiên của cỗ bài luôn an toàn khi bắt đầu chơi.
  const maxPool = (totalCards - 1) - (numBombs - 1) * minGap; // 149 - 20 * 2 = 109
  const pool = [];
  for (let i = 2; i <= maxPool; i++) {
    pool.push(i);
  }
  shuffleArray(pool);
  const y = pool.slice(0, numBombs).sort((a, b) => a - b);

  // Khôi phục lại các vị trí bom thực tế trên cỗ bài
  const bombPositions = y.map((val, k) => val + k * minGap);

  // Xếp bài vào cỗ bài 150 lá
  const deck = new Array(totalCards);
  bombPositions.forEach((pos, idx) => {
    deck[pos] = bombCards[idx];
  });

  // Điền 129 lá bài an toàn vào tất cả các vị trí còn lại
  let safeIdx = 0;
  for (let i = 0; i < totalCards; i++) {
    if (!deck[i]) {
      deck[i] = safeCards[safeIdx++];
    }
  }

  return deck;
}
