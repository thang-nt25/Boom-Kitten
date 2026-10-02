import React from 'react';

// =============================================================================
// BỘ HÌNH MINH HỌA THẺ BÀI ĐỘC BẢN - PHONG CÁCH CARTOON COMIC ĐƠN GIẢN
// Thiết kế 100% Vector SVG: Nét vẽ vui nhộn, không bị rối, không mang nét AI
// Tối ưu hiển thị sắc nét trên mọi độ phân giải & màn hình máy chiếu
// =============================================================================

// 1. THẺ MÈO NỔ CẢM TỬ (BOMB)
export function BombIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Vòng hào quang cảnh báo */}
      <circle cx="80" cy="80" r="74" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2.5" strokeDasharray="4 4" />
      
      {/* Tia nổ & Tia lửa tia khói */}
      <path d="M125 35L138 25M138 42L150 40M130 52L142 58" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
      <path d="M120 40Q135 30 145 35Q135 48 126 44" fill="#FBBF24" />
      <circle cx="132" cy="38" r="4" fill="#EF4444" />
      
      {/* Ngòi nổ cong */}
      <path d="M96 68C98 52 112 48 122 42" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
      <rect x="91" y="66" width="10" height="7" rx="2" fill="#64748B" stroke="#0F172A" strokeWidth="2" />
      
      {/* Quả bom tròn to màu đen */}
      <circle cx="82" cy="100" r="42" fill="#1E293B" stroke="#0F172A" strokeWidth="3.5" />
      {/* Vệt bóng phản chiếu trên quả bom */}
      <path d="M54 84A30 30 0 0 1 76 68" stroke="#94A3B8" strokeWidth="3.5" strokeLinecap="round" />
      
      {/* Nhãn cảnh báo sọ mèo hoặc chữ DANGER */}
      <rect x="62" y="94" width="40" height="18" rx="4" fill="#EF4444" stroke="#0F172A" strokeWidth="2" />
      <text x="82" y="107" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">BOOM!</text>
      
      {/* Chú mèo cam ôm trọn quả bom, mặt ngơ ngác hốt hoảng */}
      {/* Tai mèo */}
      <polygon points="46,38 34,60 56,58" fill="#F97316" stroke="#0F172A" strokeWidth="3" />
      <polygon points="45,43 38,58 53,56" fill="#FCA5A5" />
      <polygon points="88,38 78,58 100,60" fill="#F97316" stroke="#0F172A" strokeWidth="3" />
      <polygon points="87,43 81,56 96,58" fill="#FCA5A5" />
      
      {/* Đầu mèo */}
      <ellipse cx="66" cy="56" rx="26" ry="22" fill="#FB923C" stroke="#0F172A" strokeWidth="3" />
      
      {/* Mắt mèo to tròn hoảng hốt (Googly eyes) */}
      <circle cx="56" cy="52" r="8.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
      <circle cx="58" cy="52" r="4" fill="#0F172A" />
      <circle cx="59.5" cy="50.5" r="1.5" fill="#FFFFFF" />
      
      <circle cx="76" cy="52" r="8.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
      <circle cx="74" cy="52" r="4" fill="#0F172A" />
      <circle cx="75.5" cy="50.5" r="1.5" fill="#FFFFFF" />
      
      {/* Mũi & Miệng há hốc */}
      <polygon points="66,59 63,63 69,63" fill="#E11D48" />
      <ellipse cx="66" cy="69" rx="5" ry="4" fill="#991B1B" stroke="#0F172A" strokeWidth="1.5" />
      <path d="M64 69Q66 67 68 69" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
      
      {/* Râu mèo */}
      <path d="M42 58L28 56M42 63L26 64M90 58L104 56M90 63L106 64" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
      
      {/* Đôi chân mèo bám chặt quả bom */}
      <ellipse cx="48" cy="98" rx="8" ry="7" fill="#FB923C" stroke="#0F172A" strokeWidth="2.5" />
      <ellipse cx="116" cy="98" rx="8" ry="7" fill="#FB923C" stroke="#0F172A" strokeWidth="2.5" />
      
      {/* Giọt mồ hôi lo lắng */}
      <path d="M36 46Q34 52 38 52Q42 52 40 46Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
    </svg>
  );
}

// 2. THẺ MÈO GỠ BOM (DEFUSE)
export function DefuseIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#F0FDFA" stroke="#99F6E4" strokeWidth="2.5" strokeDasharray="4 4" />
      
      {/* Bảng mạch bom với dây điện */}
      <rect x="35" y="105" width="90" height="38" rx="6" fill="#334155" stroke="#0F172A" strokeWidth="3" />
      <rect x="42" y="113" width="30" height="14" rx="2" fill="#0F172A" />
      <text x="57" y="124" fill="#22C55E" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="monospace">00:01</text>
      
      {/* Đèn báo tín hiệu xanh - an toàn */}
      <circle cx="82" cy="120" r="4" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
      <circle cx="94" cy="120" r="4" fill="#CBD5E1" />
      
      {/* Dây điện uốn lượn bị cắt đứt */}
      <path d="M48 105C48 95 62 90 62 82" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
      <path d="M68 76C72 70 82 82 82 105" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
      <path d="M102 105C102 96 112 94 112 85" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
      
      {/* Chú mèo kỹ sư ngầu đeo kính bảo hộ */}
      {/* Tai mèo */}
      <polygon points="56,26 45,46 66,45" fill="#F59E0B" stroke="#0F172A" strokeWidth="3" />
      <polygon points="56,31 50,44 63,43" fill="#FDE68A" />
      <polygon points="98,26 88,45 109,46" fill="#F59E0B" stroke="#0F172A" strokeWidth="3" />
      <polygon points="98,31 92,43 105,44" fill="#FDE68A" />
      
      {/* Đầu mèo */}
      <circle cx="77" cy="52" r="26" fill="#FBBF24" stroke="#0F172A" strokeWidth="3" />
      
      {/* Kính bảo hộ thợ cơ khí màu cam rực rỡ */}
      <rect x="52" y="42" width="50" height="17" rx="7" fill="#0284C7" stroke="#0F172A" strokeWidth="2.5" />
      <rect x="56" y="45" width="18" height="11" rx="4" fill="#38BDF8" />
      <rect x="78" y="45" width="18" height="11" rx="4" fill="#38BDF8" />
      <path d="M59 47L64 47M81 47L86 47" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 49L46 51M104 49L108 51" stroke="#0F172A" strokeWidth="2" />
      
      {/* Mũi & Nụ cười tự tin nhếch mép */}
      <polygon points="77,63 74,66 80,66" fill="#E11D48" />
      <path d="M72 69C75 72 79 72 82 69" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
      
      {/* Kìm cắt dây sắc bén trong tay mèo */}
      <rect x="58" y="70" width="16" height="7" rx="3" fill="#FBBF24" stroke="#0F172A" strokeWidth="2" />
      {/* Đầu kìm kim loại */}
      <path d="M64 74L60 83L66 85L68 76" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
      <path d="M68 74L72 83L66 85" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
      
      {/* Tia cắt xoẹt sáng */}
      <path d="M63 80L58 78M68 83L72 87M61 86L57 89" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 3. THẺ KHIÊN PHÒNG THỦ (SHIELD)
export function ShieldIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#F0FDF4" stroke="#A7F3D0" strokeWidth="2.5" strokeDasharray="4 4" />
      
      {/* Hào quang khiên phát sáng */}
      <circle cx="82" cy="88" r="48" fill="#DCFCE7" opacity="0.6" />
      <path d="M30 40L35 48M130 40L125 48M25 80L33 80M135 80L127 80" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Chú mèo dũng sĩ mặc giáp */}
      {/* Mũ hiệp sĩ trên đầu */}
      <polygon points="64,22 55,42 74,40" fill="#94A3B8" stroke="#0F172A" strokeWidth="2.5" />
      <polygon points="96,22 86,40 105,42" fill="#94A3B8" stroke="#0F172A" strokeWidth="2.5" />
      <ellipse cx="80" cy="46" rx="24" ry="20" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />
      {/* Mắt dũng mãnh */}
      <circle cx="72" cy="45" r="4" fill="#0F172A" />
      <circle cx="88" cy="45" r="4" fill="#0F172A" />
      <polygon points="80,51 77,54 83,54" fill="#F43F5E" />
      <path d="M77 56C79 58 81 58 83 56" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* TẤM KHIÊN VÀNG CHÍNH GIỮA SIÊU TO */}
      <path d="M80 62C106 62 118 70 118 96C118 122 80 138 80 138C80 138 42 122 42 96C42 70 54 62 80 62Z" 
            fill="url(#shieldGold)" stroke="#78350F" strokeWidth="3.5" />
      
      {/* Viền trang trí trong khiên */}
      <path d="M80 69C100 69 110 76 110 96C110 116 80 129 80 129C80 129 50 116 50 96C50 76 60 69 80 69Z" 
            fill="#16A34A" stroke="#FEF08A" strokeWidth="2" />
      
      {/* Dấu chân mèo hoàng kim nổi giữa khiên */}
      <ellipse cx="80" cy="100" rx="9" ry="8" fill="#FEF08A" stroke="#78350F" strokeWidth="1.5" />
      <circle cx="71" cy="90" r="3.5" fill="#FEF08A" stroke="#78350F" strokeWidth="1" />
      <circle cx="79" cy="86" r="3.5" fill="#FEF08A" stroke="#78350F" strokeWidth="1" />
      <circle cx="89" cy="90" r="3.5" fill="#FEF08A" stroke="#78350F" strokeWidth="1" />
      
      {/* Ngôi sao lấp lánh bảo vệ */}
      <path d="M120 70L123 75L128 77L123 79L120 84L117 79L112 77L117 75Z" fill="#FACC15" />
      <path d="M38 90L40 93L44 94L40 96L38 100L36 96L32 94L36 93Z" fill="#FACC15" />
      
      <defs>
        <linearGradient id="shieldGold" x1="42" y1="62" x2="118" y2="138" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE047" />
          <stop offset="0.5" stopColor="#EAB308" />
          <stop offset="1" stopColor="#CA8A04" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 4. THẺ NHÂN ĐÔI X2 (DOUBLE)
export function DoubleIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#FEFCE8" stroke="#FDE047" strokeWidth="2.5" strokeDasharray="4 4" />
      
      {/* Các tia sấm sét điện quang vàng rực xung quanh */}
      <path d="M26 44L44 38L36 56L54 50" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M134 44L116 38L124 56L106 50" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Chú mèo điện quang với lông dựng ngược xù bông */}
      <path d="M50 48L40 32L58 38L66 22L76 36L84 20L94 36L104 22L112 38L128 32L118 48C126 56 128 72 120 84C112 96 98 100 80 100C62 100 48 96 40 84C32 72 34 56 50 48Z" 
            fill="#FBBF24" stroke="#0F172A" strokeWidth="3.5" strokeLinejoin="round" />
      
      {/* Mắt mèo phóng điện hình tia sét */}
      <circle cx="66" cy="62" r="9" fill="#FEF08A" stroke="#0F172A" strokeWidth="2.5" />
      <path d="M64 56L68 62L64 63L68 68" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      
      <circle cx="94" cy="62" r="9" fill="#FEF08A" stroke="#0F172A" strokeWidth="2.5" />
      <path d="M92 56L96 62L92 63L96 68" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Miệng mèo ngậm tia sét cười sung sướng */}
      <path d="M72 74C76 80 84 80 88 74" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="#DC2626" />
      
      {/* HUY HIỆU VÀNG X2 KHỔNG LỒ NỔI TRƯỚC NGỰC */}
      <circle cx="80" cy="116" r="30" fill="#EAB308" stroke="#78350F" strokeWidth="3.5" />
      <circle cx="80" cy="116" r="25" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
      <text x="80" y="126" fill="#78350F" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">2X</text>
      
      {/* Tia sét nhỏ dưới huy hiệu */}
      <path d="M52 118L44 126L52 128L46 136" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M108 118L116 126L108 128L114 136" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 5. THẺ THẤU THỊ TIÊN TRI (PEEK)
export function PeekIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#FAF5FF" stroke="#E9D5FF" strokeWidth="2.5" strokeDasharray="4 4" />
      
      {/* Nón phù thủy tím đính sao */}
      <path d="M52 50L80 14L108 50Z" fill="#7C3AED" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="80" cy="50" rx="36" ry="9" fill="#6D28D9" stroke="#0F172A" strokeWidth="3" />
      <path d="M78 28L80 32L84 33L80 35L79 39L77 35L73 33L77 32Z" fill="#FACC15" />
      
      {/* Đầu chú mèo phù thủy */}
      <ellipse cx="80" cy="68" rx="26" ry="20" fill="#E2E8F0" stroke="#0F172A" strokeWidth="3" />
      <polygon points="56,42 46,60 64,58" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2" />
      <polygon points="104,42 96,58 114,60" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2" />
      
      {/* Mắt mèo ma thuật màu ngọc bích */}
      <circle cx="70" cy="66" r="6" fill="#10B981" stroke="#0F172A" strokeWidth="2" />
      <circle cx="70" cy="66" r="2.5" fill="#0F172A" />
      <circle cx="90" cy="66" r="6" fill="#10B981" stroke="#0F172A" strokeWidth="2" />
      <circle cx="90" cy="66" r="2.5" fill="#0F172A" />
      <polygon points="80,72 77,75 83,75" fill="#F43F5E" />
      
      {/* QUẢ CẦU PHA LÊ HUYỀN BÍ */}
      {/* Chân đế quả cầu */}
      <path d="M64 140H96L92 130H68L64 140Z" fill="#B45309" stroke="#0F172A" strokeWidth="2.5" />
      
      {/* Quả cầu pha lê thấu thị */}
      <circle cx="80" cy="106" r="28" fill="url(#crystalBall)" stroke="#4C1D95" strokeWidth="3" />
      {/* Vệt phản quang mặt kính */}
      <path d="M64 94A20 20 0 0 1 88 88" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      
      {/* 3 Lá bài tí hon bay lơ lửng bên trong quả cầu */}
      <rect x="68" y="98" width="9" height="13" rx="1.5" fill="#FFFFFF" stroke="#6D28D9" strokeWidth="1" transform="rotate(-15 68 98)" />
      <rect x="76" y="96" width="9" height="13" rx="1.5" fill="#FEF08A" stroke="#B45309" strokeWidth="1" />
      <rect x="85" y="100" width="9" height="13" rx="1.5" fill="#FECDD3" stroke="#E11D48" strokeWidth="1" transform="rotate(15 85 100)" />
      
      {/* Ngôi sao lấp lánh xung quanh quả cầu */}
      <path d="M116 98L118 101L122 102L118 104L117 108L115 104L111 102L115 101Z" fill="#C084FC" />
      <path d="M44 110L46 113L50 114L46 116L45 120L43 116L39 114L43 113Z" fill="#C084FC" />
      
      <defs>
        <radialGradient id="crystalBall" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(74 98) scale(34)">
          <stop stopColor="#E9D5FF" />
          <stop offset="0.6" stopColor="#A855F7" />
          <stop offset="1" stopColor="#581C87" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// 6. THẺ HOÁN ĐỔI ĐIỂM (SWAP)
export function SwapIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#FDF2F8" stroke="#FBCFE8" strokeWidth="2.5" strokeDasharray="4 4" />
      
      {/* Vòng xoáy tráo đổi 2 chiều uốn lượn */}
      <path d="M48 60C56 36 104 36 112 60" stroke="#DB2777" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 4" />
      <polygon points="114,64 122,54 110,54" fill="#DB2777" />
      
      <path d="M112 100C104 124 56 124 48 100" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 4" />
      <polygon points="46,96 38,106 50,106" fill="#7C3AED" />
      
      {/* Mèo 1 (Bên trái - màu hồng cam) */}
      <circle cx="52" cy="78" r="22" fill="#FB923C" stroke="#0F172A" strokeWidth="2.5" />
      <polygon points="38,60 32,74 46,72" fill="#F97316" stroke="#0F172A" strokeWidth="2" />
      <polygon points="58,58 52,72 66,74" fill="#F97316" stroke="#0F172A" strokeWidth="2" />
      <circle cx="46" cy="76" r="3.5" fill="#0F172A" />
      <circle cx="58" cy="76" r="3.5" fill="#0F172A" />
      
      {/* Mèo 2 (Bên phải - màu tím xám) */}
      <circle cx="108" cy="82" r="22" fill="#A78BFA" stroke="#0F172A" strokeWidth="2.5" />
      <polygon points="94,64 88,78 102,76" fill="#8B5CF6" stroke="#0F172A" strokeWidth="2" />
      <polygon points="114,62 108,76 122,78" fill="#8B5CF6" stroke="#0F172A" strokeWidth="2" />
      <circle cx="102" cy="80" r="3.5" fill="#0F172A" />
      <circle cx="114" cy="80" r="3.5" fill="#0F172A" />
      
      {/* 2 Lá bài đang bay tráo đổi giữa 2 chú mèo */}
      <rect x="68" y="58" width="13" height="19" rx="2" fill="#FEF08A" stroke="#B45309" strokeWidth="1.5" transform="rotate(15 68 58)" />
      <rect x="78" y="86" width="13" height="19" rx="2" fill="#BAE6FD" stroke="#0369A1" strokeWidth="1.5" transform="rotate(-15 78 86)" />
    </svg>
  );
}

// 7. THẺ CƯỚP ĐIỂM NINJA (STEAL)
export function StealIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#F5F3FF" stroke="#DDD6FE" strokeWidth="2.5" strokeDasharray="4 4" />
      
      {/* Bao tải tiền vàng to đùng trên lưng */}
      <path d="M40 76C40 60 70 56 86 68C100 80 96 112 80 118C60 122 36 104 40 76Z" 
            fill="#B45309" stroke="#0F172A" strokeWidth="3" />
      {/* Dây buộc miệng bao */}
      <ellipse cx="44" cy="68" rx="8" ry="5" fill="#78350F" stroke="#0F172A" strokeWidth="2" />
      <circle cx="56" cy="62" r="5" fill="#FACC15" stroke="#78350F" strokeWidth="1.5" />
      <circle cx="65" cy="58" r="4.5" fill="#FACC15" stroke="#78350F" strokeWidth="1.5" />
      <text x="64" y="98" fill="#FEF08A" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">$</text>
      
      {/* Chú mèo Ninja đen nhón gót tẩu thoát */}
      {/* Tai mèo đen */}
      <polygon points="90,32 80,48 100,50" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
      <polygon points="120,34 110,50 128,52" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
      
      {/* Đầu mèo & Khăn bịt mặt Ninja màu tím sẫm */}
      <circle cx="106" cy="58" r="22" fill="#334155" stroke="#0F172A" strokeWidth="3" />
      <path d="M86 52H126V68C126 76 118 80 106 80C94 80 86 76 86 68V52Z" fill="#6B21A8" stroke="#0F172A" strokeWidth="2" />
      <path d="M86 52H126" stroke="#FACC15" strokeWidth="2.5" />
      
      {/* Mắt mèo ninja hí ranh mãnh nháy mắt */}
      <circle cx="98" cy="58" r="4.5" fill="#FEF08A" stroke="#0F172A" strokeWidth="1.5" />
      <circle cx="99" cy="58" r="2" fill="#0F172A" />
      {/* Mắt nháy */}
      <path d="M110 58L116 58" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Chân nhón gót tẩu thoát */}
      <ellipse cx="94" cy="126" rx="6" ry="4" fill="#334155" stroke="#0F172A" strokeWidth="2" />
      <ellipse cx="114" cy="122" rx="6" ry="4" fill="#334155" stroke="#0F172A" strokeWidth="2" />
      
      {/* Bụi chân chạy nhanh */}
      <circle cx="126" cy="128" r="3" fill="#CBD5E1" />
      <circle cx="132" cy="125" r="4" fill="#CBD5E1" />
    </svg>
  );
}

// 8. THẺ +10 ĐIỂM: MÈO BẮT CÁ VÀNG (FISH)
export function FishIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="2.5" strokeDasharray="4 4" />
      
      {/* Bong bóng nước bồng bềnh */}
      <circle cx="40" cy="46" r="6" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
      <circle cx="34" cy="36" r="3" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1" />
      <circle cx="124" cy="52" r="5" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
      
      {/* Đầu chú mèo trắng ôm cá hạnh phúc */}
      <polygon points="52,32 42,52 64,50" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
      <polygon points="51,37 46,50 59,48" fill="#FCA5A5" />
      <polygon points="98,32 86,50 108,52" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
      <polygon points="97,37 91,48 104,50" fill="#FCA5A5" />
      
      <circle cx="76" cy="58" r="26" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
      
      {/* Mắt mèo híp cười tít (hình chữ ^ ^) */}
      <path d="M62 56Q68 50 72 56" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M82 56Q88 50 92 56" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <polygon points="77,63 74,66 80,66" fill="#F43F5E" />
      <path d="M72 69C75 72 79 72 82 69" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
      
      {/* CHÚ CÁ VÀNG BÉO TRÒN LẤP LÁNH */}
      {/* Đuôi cá */}
      <path d="M124 100L138 88C134 100 134 104 138 116L124 104Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
      {/* Thân cá vàng béo */}
      <ellipse cx="86" cy="102" rx="38" ry="22" fill="#FBBF24" stroke="#0F172A" strokeWidth="3" />
      <path d="M68 94A14 14 0 0 1 82 86" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      {/* Mắt cá tròn xoe ngơ ngác */}
      <circle cx="62" cy="100" r="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
      <circle cx="61" cy="100" r="2.5" fill="#0F172A" />
      {/* Vảy cá vàng óng */}
      <path d="M88 96C92 98 92 104 88 106M98 96C102 98 102 104 98 106" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
      
      {/* Hai tay mèo ôm chặt lấy chú cá */}
      <ellipse cx="64" cy="116" rx="8" ry="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
      <ellipse cx="106" cy="116" rx="8" ry="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
      
      {/* Đồng xu +10 đính kèm */}
      <circle cx="36" cy="112" r="14" fill="#F59E0B" stroke="#78350F" strokeWidth="2" />
      <text x="36" y="117" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">+10</text>
    </svg>
  );
}

// 9. THẺ +20 ĐIỂM: MÈO MÓNG VUỐT KIM CƯƠNG (GEM)
export function GemIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#ECFEFF" stroke="#A5F3FC" strokeWidth="2.5" strokeDasharray="4 4" />
      
      {/* Mũ bảo hộ thợ mỏ màu vàng có đèn pin */}
      <path d="M50 48C50 32 64 24 80 24C96 24 110 32 110 48H50Z" fill="#FACC15" stroke="#0F172A" strokeWidth="3" />
      <rect x="46" y="46" width="68" height="7" rx="3" fill="#EAB308" stroke="#0F172A" strokeWidth="2" />
      {/* Đèn pin trên mũ chiếu sáng */}
      <circle cx="80" cy="34" r="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
      <path d="M80 34L110 14M80 34L118 24M80 34L122 36" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
      
      {/* Mặt mèo thợ mỏ */}
      <circle cx="80" cy="64" r="24" fill="#FB923C" stroke="#0F172A" strokeWidth="3" />
      <circle cx="71" cy="62" r="4" fill="#0F172A" />
      <circle cx="89" cy="62" r="4" fill="#0F172A" />
      <polygon points="80,69 77,72 83,72" fill="#E11D48" />
      <path d="M76 75C78 77 82 77 84 75" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
      
      {/* VIÊN KIM CƯƠNG XANH LAM KHỔNG LỒ LẤP LÁNH */}
      <path d="M60 96L80 82L100 96L80 134L60 96Z" fill="#06B6D4" stroke="#083344" strokeWidth="3" />
      <polygon points="80,82 60,96 100,96" fill="#38BDF8" />
      <polygon points="80,82 72,96 88,96" fill="#E0F2FE" />
      <polygon points="80,134 72,96 88,96" fill="#0891B2" />
      <polygon points="80,134 60,96 72,96" fill="#0E7490" />
      <polygon points="80,134 100,96 88,96" fill="#155E75" />
      
      {/* Tia sao lấp lánh 4 cánh quanh kim cương */}
      <path d="M42 90L45 96L51 98L45 100L42 106L39 100L33 98L39 96Z" fill="#38BDF8" />
      <path d="M118 104L120 108L124 109L120 111L118 115L116 111L112 109L116 108Z" fill="#38BDF8" />
      
      {/* Huy hiệu +20 */}
      <circle cx="38" cy="126" r="14" fill="#0284C7" stroke="#075985" strokeWidth="2" />
      <text x="38" y="131" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">+20</text>
    </svg>
  );
}

// 10. THẺ +30 ĐIỂM: MÈO THẦN TÀI MANEKI NEKO (COIN)
export function CoinIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="2.5" strokeDasharray="4 4" />
      
      {/* Mèo Thần Tài Maneki Neko may mắn truyền thống */}
      {/* Tai mèo đỏ vàng */}
      <polygon points="50,28 38,50 60,48" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
      <polygon points="49,34 43,47 56,45" fill="#EF4444" />
      <polygon points="98,28 86,48 108,50" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
      <polygon points="97,34 91,45 104,47" fill="#EF4444" />
      
      {/* Đầu mèo trắng phúc hậu */}
      <circle cx="74" cy="56" r="26" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
      {/* Nốt đốm cam may mắn trên đầu */}
      <path d="M78 32C84 32 88 38 88 44C80 44 76 38 78 32Z" fill="#F97316" />
      
      {/* Mắt cười tít hạnh phúc & Lúm đồng tiền đỏ */}
      <path d="M58 54Q64 48 70 54" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M78 54Q84 48 90 54" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="56" cy="62" r="4" fill="#FECDD3" />
      <circle cx="92" cy="62" r="4" fill="#FECDD3" />
      
      {/* Vòng cổ đỏ & Chuông vàng kêu leng keng */}
      <path d="M52 74C64 80 84 80 96 74" stroke="#DC2626" strokeWidth="6" strokeLinecap="round" />
      <circle cx="74" cy="82" r="7" fill="#FACC15" stroke="#78350F" strokeWidth="2" />
      <line x1="70" y1="82" x2="78" y2="82" stroke="#78350F" strokeWidth="1.5" />
      
      {/* Tay phải vẫy gọi lộc tới (Neko Paw Wave) */}
      <path d="M42 70C34 52 46 44 54 52L50 72Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
      <ellipse cx="48" cy="48" rx="6" ry="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
      <ellipse cx="48" cy="48" rx="3" ry="2.5" fill="#FECDD3" />
      
      {/* ĐỒNG TIỀN VÀNG KOBAN KHỔNG LỒ ÔM TRƯỚC NGỰC */}
      <ellipse cx="94" cy="106" rx="24" ry="34" fill="#F59E0B" stroke="#78350F" strokeWidth="3" transform="rotate(-10 94 106)" />
      <ellipse cx="94" cy="106" rx="19" ry="28" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" transform="rotate(-10 94 106)" />
      {/* Chữ Hán "Vạn Lượng Vàng" đơn giản hoá */}
      <text x="94" y="104" fill="#78350F" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">千万</text>
      <text x="94" y="118" fill="#78350F" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">両</text>
      
      {/* Huy hiệu +30 */}
      <circle cx="38" cy="126" r="14" fill="#D97706" stroke="#78350F" strokeWidth="2" />
      <text x="38" y="131" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">+30</text>
    </svg>
  );
}

// 11. THẺ +50 ĐIỂM: MÈO HOÀNG GIA JACKPOT (CROWN)
export function CrownIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#FEFCE8" stroke="#FACC15" strokeWidth="2.5" strokeDasharray="4 4" />
      
      {/* Hào quang vương miện lấp lánh */}
      <path d="M40 25L46 32M120 25L114 32M80 12L80 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      
      {/* Vương miện vàng đính ngọc ruby rực rỡ */}
      <path d="M54 36L64 20L80 32L96 20L106 36Z" fill="#FACC15" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
      <rect x="52" y="34" width="56" height="8" rx="2" fill="#EAB308" stroke="#0F172A" strokeWidth="2" />
      <circle cx="64" cy="22" r="2.5" fill="#EF4444" />
      <circle cx="80" cy="33" r="3" fill="#3B82F6" />
      <circle cx="96" cy="22" r="2.5" fill="#EF4444" />
      
      {/* Đầu mèo vua béo quý phái */}
      <circle cx="80" cy="62" r="26" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />
      {/* Mắt lim dim cao sang */}
      <path d="M66 60Q72 56 76 60" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M84 60Q88 56 94 60" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <polygon points="80,67 77,70 83,70" fill="#F43F5E" />
      
      {/* Áo choàng hoàng gia nhung đỏ viền lông chồn */}
      <path d="M46 82C46 76 60 76 80 76C100 76 114 76 114 82L124 136H36L46 82Z" 
            fill="#DC2626" stroke="#0F172A" strokeWidth="3" />
      <path d="M72 76H88V136H72V76Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" strokeDasharray="3 3" />
      
      {/* RƯƠNG CHÂU BÁU VÀNG JACKPOT MỞ RỘNG */}
      <rect x="48" y="104" width="64" height="34" rx="5" fill="#78350F" stroke="#0F172A" strokeWidth="3" />
      <path d="M46 104H114V110H46V104Z" fill="#CA8A04" stroke="#0F172A" strokeWidth="2" />
      {/* Vàng tràn ra khỏi rương */}
      <circle cx="62" cy="100" r="5" fill="#FACC15" stroke="#78350F" strokeWidth="1.5" />
      <circle cx="72" cy="97" r="6" fill="#FACC15" stroke="#78350F" strokeWidth="1.5" />
      <circle cx="82" cy="98" r="5.5" fill="#FACC15" stroke="#78350F" strokeWidth="1.5" />
      <circle cx="92" cy="96" r="6" fill="#FACC15" stroke="#78350F" strokeWidth="1.5" />
      <circle cx="98" cy="101" r="5" fill="#FACC15" stroke="#78350F" strokeWidth="1.5" />
      
      {/* Huy hiệu +50 */}
      <circle cx="36" cy="126" r="14" fill="#EAB308" stroke="#78350F" strokeWidth="2" />
      <text x="36" y="131" fill="#78350F" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">+50</text>
    </svg>
  );
}

// 12. MẶT ÚP CỖ BÀI BÍ ẨN (CARD BACK EMBLEM)
export function CardBackIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Họa tiết phù hiệu hoàng gia cỗ bài */}
      <circle cx="80" cy="80" r="70" fill="#0F172A" stroke="#D97706" strokeWidth="3" />
      <circle cx="80" cy="80" r="64" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 3" />
      
      {/* Ngọn lửa bùng cháy trên đỉnh đầu mèo */}
      <path d="M80 32C74 42 68 46 68 54C68 62 74 66 80 66C86 66 92 62 92 54C92 46 86 42 80 32Z" 
            fill="#EF4444" stroke="#DC2626" strokeWidth="1.5" />
      <path d="M80 42C77 47 74 49 74 54C74 58 77 60 80 60C83 60 86 58 86 54C86 49 83 47 80 42Z" 
            fill="#FBBF24" />
      
      {/* Đầu mèo bí ẩn màu vàng đồng */}
      <polygon points="56,60 46,78 68,76" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
      <polygon points="104,60 92,76 114,78" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
      
      <circle cx="80" cy="84" r="28" fill="#F59E0B" stroke="#B45309" strokeWidth="2.5" />
      {/* Mắt mèo nheo sáng bí hiểm */}
      <polygon points="70,80 64,84 72,84" fill="#0F172A" />
      <polygon points="90,80 88,84 96,84" fill="#0F172A" />
      <polygon points="80,89 77,92 83,92" fill="#78350F" />
      
      {/* Hai chân mèo bắt chéo xương kiểu hải tặc vui nhộn */}
      <path d="M50 126L110 106M110 126L50 106" stroke="#FDE68A" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="126" r="4" fill="#F59E0B" />
      <circle cx="110" cy="106" r="4" fill="#F59E0B" />
      <circle cx="110" cy="126" r="4" fill="#F59E0B" />
      <circle cx="50" cy="106" r="4" fill="#F59E0B" />
      
      {/* Chữ MÈO NỔ vòng cung cách điệu */}
      <text x="80" y="142" fill="#FEF08A" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="0.1em" fontFamily="sans-serif">MÈO NỔ</text>
    </svg>
  );
}

// 13. TIỂU MÈO NỔ (MINI BOMB - NỔ CHIA ĐÔI 50%)
export function MiniBombIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="2.5" strokeDasharray="4 4" />
      {/* Tia nổ mini */}
      <path d="M120 40L132 30M132 45L144 43M125 55L137 60" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="128" cy="40" r="3.5" fill="#F59E0B" />
      {/* Ngòi nổ */}
      <path d="M96 72C98 58 108 54 118 48" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" />
      <rect x="92" y="70" width="8" height="6" rx="2" fill="#64748B" />
      {/* Quả bom mini màu đỏ hồng */}
      <circle cx="84" cy="98" r="36" fill="#BE123C" stroke="#0F172A" strokeWidth="3" />
      <path d="M60 84A24 24 0 0 1 78 72" stroke="#FDA4AF" strokeWidth="3" strokeLinecap="round" />
      {/* Huy hiệu 1/2 cắt đôi */}
      <rect x="66" y="90" width="36" height="18" rx="4" fill="#FFE4E6" stroke="#881337" strokeWidth="2" />
      <text x="84" y="103" fill="#BE123C" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">½ NỔ</text>
      {/* Mèo con giật mình */}
      <polygon points="52,42 42,60 62,58" fill="#FB923C" stroke="#0F172A" strokeWidth="2.5" />
      <polygon points="86,42 76,58 96,60" fill="#FB923C" stroke="#0F172A" strokeWidth="2.5" />
      <circle cx="68" cy="58" r="20" fill="#FDBA74" stroke="#0F172A" strokeWidth="2.5" />
      <circle cx="60" cy="55" r="3.5" fill="#0F172A" />
      <circle cx="76" cy="55" r="3.5" fill="#0F172A" />
      <polygon points="68,61 65,64 71,64" fill="#E11D48" />
      <path d="M65 67Q68 70 71 67" stroke="#0F172A" strokeWidth="1.5" fill="none" />
      <path d="M46 58L34 57M90 58L102 57" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 14. MÈO PHÁO KÍCH (REMOTE BOMB - CHIA ĐÔI ĐỐI THỦ)
export function RemoteBombIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="2.5" strokeDasharray="4 4" />
      {/* Radar hồng ngoại nhắm mục tiêu */}
      <circle cx="80" cy="80" r="52" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="80" cy="80" r="30" stroke="#EA580C" strokeWidth="1.5" opacity="0.8" />
      <path d="M80 20V40M80 120V140M20 80H40M120 80H140" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" />
      {/* Tên lửa / Pháo kích bay xé gió */}
      <g transform="translate(10, -10)">
        {/* Lửa phản lực */}
        <polygon points="45,105 30,118 48,110 38,128 55,115" fill="#F59E0B" />
        <polygon points="46,106 36,115 50,112" fill="#EF4444" />
        {/* Thân tên lửa */}
        <rect x="52" y="82" width="48" height="20" rx="6" transform="rotate(-35 52 82)" fill="#EA580C" stroke="#0F172A" strokeWidth="2.5" />
        <polygon points="98,50 115,38 106,62" fill="#C2410C" stroke="#0F172A" strokeWidth="2" />
        {/* Cánh đuôi */}
        <polygon points="46,86 36,78 44,96" fill="#7C2D12" stroke="#0F172A" strokeWidth="2" />
        <polygon points="62,110 54,118 72,118" fill="#7C2D12" stroke="#0F172A" strokeWidth="2" />
      </g>
      {/* Chú mèo xạ thủ đeo kính ngắm */}
      <polygon points="36,48 30,66 48,64" fill="#EA580C" stroke="#0F172A" strokeWidth="2" />
      <polygon points="66,48 56,64 74,66" fill="#EA580C" stroke="#0F172A" strokeWidth="2" />
      <circle cx="51" cy="64" r="18" fill="#FB923C" stroke="#0F172A" strokeWidth="2.5" />
      <circle cx="58" cy="62" r="7" fill="#0284C7" stroke="#0F172A" strokeWidth="2" />
      <circle cx="58" cy="62" r="3" fill="#38BDF8" />
      <circle cx="45" cy="62" r="3" fill="#0F172A" />
      <text x="80" y="142" fill="#C2410C" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">PHÁO KÍCH</text>
    </svg>
  );
}

// 15. MÈO NÉM BOM (THROW BOMB - NÉM SANG ĐỐI THỦ)
export function ThrowBombIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#FEFCE8" stroke="#FDE047" strokeWidth="2.5" strokeDasharray="4 4" />
      {/* Đường vòng cung quỹ đạo ném bom */}
      <path d="M50 110C50 60 110 50 125 75" stroke="#EAB308" strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />
      <polygon points="128,78 128,70 120,74" fill="#CA8A04" />
      {/* Quả bom đang bay trên không */}
      <g transform="translate(100, 60)">
        <circle cx="16" cy="16" r="14" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
        <path d="M10 10A10 10 0 0 1 18 6" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 6L28 2" stroke="#78350F" strokeWidth="2" />
        <circle cx="29" cy="2" r="2.5" fill="#EF4444" />
        {/* Vệt gió lướt */}
        <path d="M-8 16H-2M-12 11H-4M-10 21H-3" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Mèo lực sĩ vung tay ném cực mạnh */}
      <polygon points="34,42 25,60 45,58" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.5" />
      <polygon points="68,42 58,58 78,60" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.5" />
      <ellipse cx="51" cy="62" rx="20" ry="18" fill="#FBBF24" stroke="#0F172A" strokeWidth="2.5" />
      {/* Mắt mèo nheo cười đắc thắng */}
      <path d="M42 59Q46 56 50 59" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M54 59Q58 56 62 59" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <polygon points="52,65 49,68 55,68" fill="#E11D48" />
      <path d="M48 70C51 73 54 73 57 70" stroke="#0F172A" strokeWidth="1.5" fill="none" />
      {/* Cánh tay vung ra phía trước */}
      <path d="M55 76Q75 70 85 85" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" />
      <circle cx="85" cy="85" r="6" fill="#FDE68A" stroke="#0F172A" strokeWidth="2" />
      <text x="80" y="142" fill="#B45309" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">NÉM BOM</text>
    </svg>
  );
}

// 16. MÈO BẢO HIỂM RỦI RO (INSURANCE - CỨU 50% ĐIỂM)
export function InsuranceIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="2.5" strokeDasharray="4 4" />
      {/* Hào quang an toàn */}
      <circle cx="80" cy="85" r="48" fill="#DBEAFE" opacity="0.6" />
      {/* Khiên chữ thập bảo hiểm y tế cứu hộ */}
      <path d="M80 62C102 62 112 68 112 92C112 116 80 130 80 130C80 130 48 116 48 92C48 68 58 62 80 62Z" 
            fill="#2563EB" stroke="#1E40AF" strokeWidth="3" />
      {/* Chữ thập trắng bảo hộ */}
      <rect x="74" y="76" width="12" height="32" rx="2" fill="#FFFFFF" />
      <rect x="64" y="86" width="32" height="12" rx="2" fill="#FFFFFF" />
      <text x="80" y="122" fill="#FEF08A" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">BẢO HIỂM</text>
      {/* Chú mèo đeo mũ bảo hộ & áo phản quang */}
      <polygon points="62,24 54,42 72,40" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
      <polygon points="98,24 90,40 108,42" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
      <ellipse cx="80" cy="46" rx="22" ry="18" fill="#FDE047" stroke="#0F172A" strokeWidth="2.5" />
      {/* Mũ bảo hộ xanh dương */}
      <path d="M60 42C60 30 100 30 100 42Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
      <circle cx="73" cy="48" r="3" fill="#0F172A" />
      <circle cx="87" cy="48" r="3" fill="#0F172A" />
      <polygon points="80,53 77,56 83,56" fill="#E11D48" />
      <path d="M76 58Q80 61 84 58" stroke="#0F172A" strokeWidth="1.5" fill="none" />
      {/* Ngôi sao an tâm */}
      <circle cx="120" cy="65" r="4" fill="#60A5FA" />
      <circle cx="40" cy="65" r="4" fill="#60A5FA" />
    </svg>
  );
}

// 17. MÈO HÀO HIỆP (GIFT - VIỆN TRỢ QUỐC TẾ)
export function GiftIllustration({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="74" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="2.5" strokeDasharray="4 4" />
      {/* Trái tim hòa bình tỏa sáng */}
      <path d="M125 35C125 30 120 26 115 28C110 30 110 36 125 46C140 36 140 30 135 28C130 26 125 30 125 35Z" fill="#F43F5E" />
      <path d="M35 35C35 30 30 26 25 28C20 30 20 36 35 46C50 36 50 30 45 28C40 26 35 30 35 35Z" fill="#F43F5E" />
      {/* Hộp quà to đẹp thắt nơ vàng kim */}
      <rect x="50" y="86" width="60" height="48" rx="6" fill="#16A34A" stroke="#0F172A" strokeWidth="3" />
      {/* Nắp hộp quà */}
      <rect x="45" y="78" width="70" height="12" rx="3" fill="#22C55E" stroke="#0F172A" strokeWidth="2.5" />
      {/* Ruy băng vàng */}
      <rect x="74" y="78" width="12" height="56" fill="#FACC15" />
      <rect x="45" y="100" width="70" height="10" fill="#FACC15" />
      {/* Nơ quà to đẹp */}
      <ellipse cx="72" cy="74" rx="8" ry="6" transform="rotate(-30 72 74)" fill="#EAB308" stroke="#78350F" strokeWidth="1.5" />
      <ellipse cx="88" cy="74" rx="8" ry="6" transform="rotate(30 88 74)" fill="#EAB308" stroke="#78350F" strokeWidth="1.5" />
      <circle cx="80" cy="75" r="4.5" fill="#CA8A04" />
      {/* Chú mèo hiền lành hạnh phúc */}
      <polygon points="62,32 54,50 72,48" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
      <polygon points="98,32 90,48 108,50" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
      <ellipse cx="80" cy="54" rx="22" ry="18" fill="#FBBF24" stroke="#0F172A" strokeWidth="2.5" />
      {/* Mắt mèo híp cười tít hạnh phúc */}
      <path d="M70 52Q74 48 78 52" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M82 52Q86 48 90 52" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <polygon points="80,57 77,60 83,60" fill="#E11D48" />
      <path d="M76 62Q80 66 84 62" stroke="#0F172A" strokeWidth="1.5" fill="none" />
      {/* Má hồng */}
      <circle cx="68" cy="58" r="4" fill="#FDA4AF" />
      <circle cx="92" cy="58" r="4" fill="#FDA4AF" />
      <text x="80" y="146" fill="#15803D" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">VIỆN TRỢ +30</text>
    </svg>
  );
}

// =============================================================================
// COMPONENT CHÍNH ĐIỀU PHỐI HÌNH ẢNH THEO LOẠI THẺ
// =============================================================================
export default function CardIllustration({ card, size = 110 }) {
  if (!card) return null;
  const t = card.type;
  const val = card.value;

  switch (t) {
    case 'BOMB':
      return <BombIllustration size={size} />;
    case 'MINI_BOMB':
      return <MiniBombIllustration size={size} />;
    case 'REMOTE_BOMB':
      return <RemoteBombIllustration size={size} />;
    case 'THROW_BOMB':
      return <ThrowBombIllustration size={size} />;
    case 'INSURANCE':
      return <InsuranceIllustration size={size} />;
    case 'DEFUSE':
      return <DefuseIllustration size={size} />;
    case 'SHIELD':
      return <ShieldIllustration size={size} />;
    case 'GIFT':
      return <GiftIllustration size={size} />;
    case 'DOUBLE':
      return <DoubleIllustration size={size} />;
    case 'PEEK':
      return <PeekIllustration size={size} />;
    case 'SWAP':
      return <SwapIllustration size={size} />;
    case 'STEAL':
      return <StealIllustration size={size} />;
    case 'DEFUSED':
      if (card.title && card.title.includes('NÉM BOM')) {
        return <ThrowBombIllustration size={size} />;
      }
      return <DefuseIllustration size={size} />;
    case 'POINT':
    default:
      if (val === 50) return <CrownIllustration size={size} />;
      if (val === 30) return <CoinIllustration size={size} />;
      if (val === 20) return <GemIllustration size={size} />;
      return <FishIllustration size={size} />;
  }
}

