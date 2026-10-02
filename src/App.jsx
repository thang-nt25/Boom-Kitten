import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy, Flame, Shield, Wrench, RefreshCw, Eye, Swords,
  Volume2, VolumeX, Maximize2, Minimize2, HelpCircle, RotateCcw,
  Play, CheckCircle2, XCircle, ArrowRight, Sparkles, Award, AlertTriangle, Bomb,
  Rocket, Gift, Crosshair, X
} from 'lucide-react';

import {
  FaCat, FaPaw, FaShieldCat, FaBomb, FaExplosion, FaWrench,
  FaScrewdriverWrench, FaBoltLightning, FaEye, FaArrowsRotate,
  FaMaskFace, FaFish, FaGem, FaCoins, FaCrown, FaFire, FaStar
} from 'react-icons/fa6';

import { QUESTIONS_DATA } from './data/questions';
import { CARD_TYPES, generateDeck } from './data/cards';
import { sound } from './utils/sound';
import CardIllustration, { CardBackIllustration } from './components/CardIllustrations';

// Dữ liệu 6 biệt đội MÈO NỔ siêu quậy: Mặc định chưa có bùa hộ mệnh
const INITIAL_TEAMS = [
  { id: 1, name: "Mèo Lửa Đỏ", color: "#E11D48", iconType: "FIRE", totalScore: 0, defuseCount: 0, shieldCount: 0, throwBombCount: 0, insuranceCount: 0 },
  { id: 2, name: "Mèo Thần Tài", color: "#D97706", iconType: "COIN", totalScore: 0, defuseCount: 0, shieldCount: 0, throwBombCount: 0, insuranceCount: 0 },
  { id: 3, name: "Mèo Ngọc Lục", color: "#059669", iconType: "SHIELD", totalScore: 0, defuseCount: 0, shieldCount: 0, throwBombCount: 0, insuranceCount: 0 },
  { id: 4, name: "Mèo Bão Sấm", color: "#0284C7", iconType: "BOLT", totalScore: 0, defuseCount: 0, shieldCount: 0, throwBombCount: 0, insuranceCount: 0 },
  { id: 5, name: "Mèo Hiệp Sĩ", color: "#4F46E5", iconType: "CROWN", totalScore: 0, defuseCount: 0, shieldCount: 0, throwBombCount: 0, insuranceCount: 0 },
  { id: 6, name: "Mèo Pháp Sư", color: "#9333EA", iconType: "MAGIC", totalScore: 0, defuseCount: 0, shieldCount: 0, throwBombCount: 0, insuranceCount: 0 }
];

// Component Avatar Đội Mèo kết hợp biểu tượng nguyên tố chuẩn
function TeamCatAvatar({ team, size = 22 }) {
  if (!team) return null;
  return (
    <div className="team-avatar-box" style={{ background: `${team.color}25`, borderColor: team.color }}>
      <FaCat size={size} color={team.color} />
      <span className="team-avatar-sub">
        {team.iconType === 'FIRE' && <FaFire size={11} color="#ef4444" />}
        {team.iconType === 'COIN' && <FaCoins size={11} color="#f59e0b" />}
        {team.iconType === 'SHIELD' && <FaShieldCat size={11} color="#10b981" />}
        {team.iconType === 'BOLT' && <FaBoltLightning size={11} color="#06b6d4" />}
        {team.iconType === 'CROWN' && <FaCrown size={11} color="#3b82f6" />}
        {team.iconType === 'MAGIC' && <FaStar size={11} color="#a855f7" />}
      </span>
    </div>
  );
}

// Component Thẻ Bài Mèo Nổ chính thống kết hợp chuẩn vector FontAwesome + Game elements
function CatCardBadge({ card, size = 56 }) {
  if (!card) return null;
  const t = card.type;
  const val = card.value;

  switch (t) {
    case CARD_TYPES.BOMB:
      return (
        <div className="cat-badge-container bomb-glow">
          <FaCat size={size} color="#dc2626" />
          <div className="cat-badge-sub sub-danger">
            <FaBomb size={size * 0.55} color="#ef4444" />
          </div>
          <FaExplosion className="cat-sparkle-1" size={size * 0.35} color="#d97706" />
        </div>
      );
    case CARD_TYPES.MINI_BOMB:
      return (
        <div className="cat-badge-container bomb-glow">
          <FaCat size={size} color="#e11d48" />
          <div className="cat-badge-sub sub-danger">
            <FaBomb size={size * 0.45} color="#f43f5e" />
          </div>
        </div>
      );
    case CARD_TYPES.DEFUSE:
      return (
        <div className="cat-badge-container defuse-glow">
          <FaCat size={size} color="#0d9488" />
          <div className="cat-badge-sub sub-teal">
            <FaScrewdriverWrench size={size * 0.55} color="#0f766e" />
          </div>
        </div>
      );
    case CARD_TYPES.THROW_BOMB:
      return (
        <div className="cat-badge-container double-glow">
          <FaCat size={size} color="#d97706" />
          <div className="cat-badge-sub sub-gold">
            <FaBomb size={size * 0.5} color="#b45309" />
          </div>
        </div>
      );
    case CARD_TYPES.INSURANCE:
      return (
        <div className="cat-badge-container point-glow">
          <FaCat size={size} color="#2563eb" />
          <div className="cat-badge-sub sub-blue">
            <Shield size={size * 0.55} color="#1d4ed8" />
          </div>
        </div>
      );
    case CARD_TYPES.REMOTE_BOMB:
      return (
        <div className="cat-badge-container bomb-glow">
          <FaCat size={size} color="#ea580c" />
          <div className="cat-badge-sub sub-danger">
            <Rocket size={size * 0.55} color="#c2410c" />
          </div>
        </div>
      );
    case CARD_TYPES.GIFT:
      return (
        <div className="cat-badge-container shield-glow">
          <FaCat size={size} color="#16a34a" />
          <div className="cat-badge-sub" style={{ background: '#dcfce7', borderColor: '#22c55e' }}>
            <Gift size={size * 0.55} color="#15803d" />
          </div>
        </div>
      );
    case CARD_TYPES.SHIELD:
      return (
        <div className="cat-badge-container shield-glow">
          <FaShieldCat size={size * 1.15} color="#059669" />
        </div>
      );
    case CARD_TYPES.STEAL:
      return (
        <div className="cat-badge-container steal-glow">
          <FaCat size={size} color="#7e22ce" />
          <div className="cat-badge-sub sub-purple">
            <FaMaskFace size={size * 0.55} color="#9333ea" />
          </div>
          <FaCoins className="cat-sparkle-1" size={size * 0.38} color="#d97706" />
        </div>
      );
    case CARD_TYPES.SWAP:
      return (
        <div className="cat-badge-container swap-glow">
          <FaCat size={size * 0.8} color="#db2777" />
          <FaArrowsRotate size={size * 0.65} color="#475569" style={{ margin: '0 6px' }} />
          <FaCat size={size * 0.8} color="#7c3aed" />
        </div>
      );
    case CARD_TYPES.DOUBLE:
      return (
        <div className="cat-badge-container double-glow">
          <FaCat size={size} color="#d97706" />
          <div className="cat-badge-sub sub-gold">
            <FaBoltLightning size={size * 0.6} color="#b45309" />
          </div>
        </div>
      );
    case CARD_TYPES.PEEK:
      return (
        <div className="cat-badge-container peek-glow">
          <FaCat size={size} color="#7c3aed" />
          <div className="cat-badge-sub sub-indigo">
            <FaEye size={size * 0.55} color="#4338ca" />
          </div>
        </div>
      );
    case CARD_TYPES.POINT:
    default:
      if (val === 50) {
        return (
          <div className="cat-badge-container point-glow">
            <FaCat size={size} color="#ca8a04" />
            <div className="cat-badge-sub sub-gold">
              <FaCrown size={size * 0.6} color="#a16207" />
            </div>
          </div>
        );
      }
      if (val === 30) {
        return (
          <div className="cat-badge-container point-glow">
            <FaCat size={size} color="#d97706" />
            <div className="cat-badge-sub sub-gold">
              <FaCoins size={size * 0.55} color="#b45309" />
            </div>
          </div>
        );
      }
      if (val === 20) {
        return (
          <div className="cat-badge-container point-glow">
            <FaCat size={size} color="#0891b2" />
            <div className="cat-badge-sub sub-cyan">
              <FaGem size={size * 0.55} color="#0284c7" />
            </div>
          </div>
        );
      }
      return (
        <div className="cat-badge-container point-glow">
          <FaCat size={size} color="#2563eb" />
          <div className="cat-badge-sub sub-blue">
            <FaFish size={size * 0.55} color="#1d4ed8" />
          </div>
        </div>
      );
  }
}

export default function App() {
  // Trạng thái tổng thể
  const [gameState, setGameState] = useState('LOBBY'); // LOBBY, SELECT_QUESTION, ANSWER_QUESTION, DRAW_CARDS, GAME_OVER
  const [teams, setTeams] = useState(INITIAL_TEAMS);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState([]);

  // Trạng thái cỗ bài & lượt rút
  const [deck, setDeck] = useState(generateDeck);
  const [currentCard, setCurrentCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [turnScore, setTurnScore] = useState(0);
  const [cardsDrawnThisTurn, setCardsDrawnThisTurn] = useState(0);
  const [turnMultiplier, setTurnMultiplier] = useState(1);

  // Trạng thái câu hỏi hiện tại
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Hiệu ứng & Âm thanh
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [screenShake, setScreenShake] = useState(false);
  const [showRedFlash, setShowRedFlash] = useState(false);
  const [isBombExploded, setIsBombExploded] = useState(false); // Modal nổ hoành tráng
  const [bombExplosionData, setBombExplosionData] = useState(null); // Chi tiết nổ bom & điểm số giữ lại
  const [drawNotification, setDrawNotification] = useState(null);

  // Modals
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [peekCards, setPeekCards] = useState(null); // Thẻ Thấu Thị
  const [showSwapModal, setShowSwapModal] = useState(false); // Thẻ Đổi Điểm
  const [showStealModal, setShowStealModal] = useState(false); // Thẻ Cướp Điểm
  const [showRemoteBombModal, setShowRemoteBombModal] = useState(false); // Thẻ Mèo Pháo Kích
  const [showThrowBombModal, setShowThrowBombModal] = useState(false); // Thẻ Mèo Ném Bom
  const [showBombDefenseChoiceModal, setShowBombDefenseChoiceModal] = useState(false); // Lựa chọn Gỡ hay Ném Bom
  const [activeBombType, setActiveBombType] = useState('BOMB'); // 'BOMB' hoặc 'MINI_BOMB'

  const currentTeam = teams[currentTeamIndex];

  // Khởi tạo game mới
  const startNewGame = () => {
    sound.click();
    setDeck(generateDeck());
    setTeams(INITIAL_TEAMS.map(t => ({ ...t, totalScore: 0, defuseCount: 0, shieldCount: 0, throwBombCount: 0, insuranceCount: 0 })));
    setAnsweredQuestionIds([]);
    setCurrentTeamIndex(0);
    setTurnScore(0);
    setCardsDrawnThisTurn(0);
    setTurnMultiplier(1);
    setCurrentCard(null);
    setIsFlipped(false);
    setIsBombExploded(false);
    setBombExplosionData(null);
    setGameState('SELECT_QUESTION');
  };

  // Toggle Mute
  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    sound.click();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => { });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => { });
      setIsFullscreen(false);
    }
  };

  // Pháo hoa
  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Chuyển sang lượt của nhóm kế tiếp
  const nextTurn = () => {
    setTurnScore(0);
    setCardsDrawnThisTurn(0);
    setTurnMultiplier(1);
    setCurrentCard(null);
    setIsFlipped(false);
    setIsDrawing(false);
    setIsBombExploded(false);
    setBombExplosionData(null);
    setDrawNotification(null);

    // Kiểm tra xem đã hết 18 câu hỏi chưa
    if (answeredQuestionIds.length >= QUESTIONS_DATA.length) {
      endGame();
      return;
    }

    setCurrentTeamIndex((prev) => (prev + 1) % teams.length);
    setGameState('SELECT_QUESTION');
  };

  // Kết thúc ván đấu
  const endGame = () => {
    sound.victory();
    setGameState('GAME_OVER');
    fireConfetti();
    setTimeout(fireConfetti, 1000);
    setTimeout(fireConfetti, 2000);
  };

  // Chọn câu hỏi từ bảng 18 câu
  const handleSelectQuestion = (q) => {
    sound.click();
    setActiveQuestion(q);
    setSelectedOption(null);
    setHasAnswered(false);
    setIsCorrect(false);
    setGameState('ANSWER_QUESTION');
  };

  // Trả lời câu hỏi
  const handleAnswer = (optionIdx) => {
    if (hasAnswered) return;
    setSelectedOption(optionIdx);
    setHasAnswered(true);

    const correct = optionIdx === activeQuestion.correctIndex;
    setIsCorrect(correct);

    if (correct) {
      sound.correct();
      fireConfetti();
    } else {
      sound.wrong();
      // KÍCH HOẠT LÁ BÀI ẨN MÈO BUỒN: Phạt trừ 30 điểm và mất lượt!
      setTeams((prev) => {
        const updated = [...prev];
        updated[currentTeamIndex] = {
          ...updated[currentTeamIndex],
          totalScore: updated[currentTeamIndex].totalScore - 30
        };
        return updated;
      });
    }

    setAnsweredQuestionIds((prev) => [...prev, activeQuestion.id]);
  };

  // Tiếp tục sau khi xem đáp án
  const handleContinueAfterQuestion = () => {
    sound.click();
    if (isCorrect) {
      // Đúng -> Vào vòng lật bài
      setTurnScore(0);
      setCardsDrawnThisTurn(0);
      setTurnMultiplier(1);
      setCurrentCard(null);
      setIsFlipped(false);
      setIsDrawing(false);
      setIsBombExploded(false);
      setDrawNotification(null);
      setGameState('DRAW_CARDS');
    } else {
      // Sai -> Mất lượt, chuyển nhóm kế tiếp
      nextTurn();
    }
  };

  // RÚT BÀI TỪ CỖ BÀI
  const handleDrawCard = () => {
    if (isDrawing || isBombExploded) return;
    setIsDrawing(true);

    // Nếu thẻ đang lật, úp lại nhanh rồi lật lá mới để người chơi cảm nhận rõ động tác rút
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        executeDraw();
      }, 250);
    } else {
      executeDraw();
    }
  };

  const executeDraw = () => {
    sound.cardFlip();

    // Đảm bảo cỗ bài luôn có lá bài để rút (tự động nạp cỗ mới nếu hết)
    let currentDeck = deck;
    if (!currentDeck || currentDeck.length === 0) {
      currentDeck = generateDeck();
    }

    const newDeck = [...currentDeck];
    let drawnCard = newDeck.shift();

    // Phòng ngừa trường hợp hy hữu
    if (!drawnCard) {
      const freshDeck = generateDeck();
      drawnCard = freshDeck.shift();
      newDeck.push(...freshDeck);
    }

    setDeck(newDeck);
    setCurrentCard(drawnCard);
    setIsFlipped(true);
    setCardsDrawnThisTurn((prev) => prev + 1);

    setTimeout(() => {
      processCardEffect(drawnCard, newDeck);
      setIsDrawing(false);
    }, 600);
  };

  // Xử lý hiệu ứng từng loại thẻ bài
  const processCardEffect = (card, remainingDeck) => {
    switch (card.type) {
      case CARD_TYPES.POINT: {
        sound.point();
        // Áp dụng hệ số nhân đôi (nếu có)
        const pointGain = card.value * turnMultiplier;
        setTurnScore((prev) => prev + pointGain);
        setDrawNotification({
          type: 'success',
          text: `Tuyệt vời! +${pointGain} điểm vào Điểm Lượt. Bạn muốn Rút tiếp hay Dừng lại?`
        });
        break;
      }

      case CARD_TYPES.DOUBLE: {
        sound.double();
        // Cập nhật hệ số nhân đôi cho toàn bộ lượt
        setTurnMultiplier((prevMult) => prevMult * 2);
        setTurnScore((prevScore) => {
          const newScore = prevScore > 0 ? prevScore * 2 : prevScore;
          setDrawNotification({
            type: 'gold',
            text: prevScore > 0
              ? `⚡ Sấm sét! Kích hoạt Nhân Đôi x2! Điểm lượt tăng thành ${newScore} đ và mọi lá bài rút tiếp theo trong lượt cũng được nhân đôi!`
              : `⚡ Sấm sét! Kích hoạt Nhân Đôi x2! (Chỉ áp dụng nhân đôi cho các điểm cộng tiếp theo trong lượt, không nhân đôi điểm âm)!`
          });
          return newScore;
        });
        break;
      }

      case CARD_TYPES.DEFUSE: {
        sound.defuse();
        setTeams((prevTeams) => {
          const updated = [...prevTeams];
          updated[currentTeamIndex] = {
            ...updated[currentTeamIndex],
            defuseCount: updated[currentTeamIndex].defuseCount + 1
          };
          return updated;
        });
        setDrawNotification({
          type: 'info',
          text: `Bảo bối xuất hiện! ${currentTeam.name} nhận được +1 Thẻ Gỡ Bom (Defuse)!`
        });
        break;
      }

      case CARD_TYPES.SHIELD: {
        sound.magic();
        setTeams((prevTeams) => {
          const updated = [...prevTeams];
          updated[currentTeamIndex] = {
            ...updated[currentTeamIndex],
            shieldCount: updated[currentTeamIndex].shieldCount + 1
          };
          return updated;
        });
        setDrawNotification({
          type: 'info',
          text: `Phòng thủ kiên cố! ${currentTeam.name} nhận được +1 Khiên Chắn (Shield) - Tự động chặn đòn Cướp/Đổi điểm từ đối thủ (Không chặn được Mèo Nổ)!`
        });
        break;
      }

      case CARD_TYPES.PEEK: {
        sound.magic();
        const currentRemaining = remainingDeck || deck;
        const nextThree = currentRemaining.slice(0, 3);
        setPeekCards(nextThree);
        setDrawNotification({
          type: 'info',
          text: `Thấu thị tương lai! Bạn đang nhìn trước 3 lá bài tiếp theo trên đầu cỗ bài.`
        });
        break;
      }

      case CARD_TYPES.SWAP: {
        sound.magic();
        setDrawNotification({
          type: 'info',
          text: `🌀 Đổi Điểm Ngoại Giao! Hãy chọn 1 nhóm đối thủ để tráo đổi toàn bộ điểm hoặc bấm Hủy bỏ.`
        });
        setShowSwapModal(true);
        break;
      }

      case CARD_TYPES.STEAL: {
        sound.magic();
        setDrawNotification({
          type: 'info',
          text: `🥷 Cướp Điểm! Hãy chọn 1 nhóm đối thủ để hút 20 điểm vào Điểm Lượt hoặc bấm Hủy bỏ.`
        });
        setShowStealModal(true);
        break;
      }

      // THẺ MỚI 1: MÈO HÀO HIỆP (GIFT) - Viện trợ quốc tế hữu nghị
      case CARD_TYPES.GIFT: {
        sound.bank();
        fireConfetti();
        const myGain = 30 * turnMultiplier;
        setTurnScore((prev) => prev + myGain);

        // Tặng tất cả các nhóm đối thủ mỗi nhóm +5 điểm hữu nghị vào totalScore
        setTeams((prev) =>
          prev.map((t, idx) => {
            if (idx === currentTeamIndex) return t;
            return { ...t, totalScore: t.totalScore + 5 };
          })
        );

        setDrawNotification({
          type: 'gold',
          text: `🤝 MÈO HÀO HIỆP XUẤT HIỆN! ${currentTeam.name} nhận +${myGain} điểm vào Điểm Lượt, đồng thời tặng mỗi nhóm đối thủ +5 điểm hữu nghị đoàn kết!`
        });
        break;
      }

      // THẺ MỚI 2: MÈO NÉM BOM (THROW BOMB) - Bảo bối phản đòn
      case CARD_TYPES.THROW_BOMB: {
        sound.magic();
        setTeams((prevTeams) => {
          const updated = [...prevTeams];
          updated[currentTeamIndex] = {
            ...updated[currentTeamIndex],
            throwBombCount: updated[currentTeamIndex].throwBombCount + 1
          };
          return updated;
        });
        setDrawNotification({
          type: 'gold',
          text: `💣🔄 BẢO BỐI PHẢN KÍCH! ${currentTeam.name} nhận được +1 Thẻ Ném Bom (Khi rút trúng bom, bạn có quyền ném sang đối thủ)!`
        });
        break;
      }

      // THẺ MỚI 3: MÈO BẢO HIỂM RỦI RO (INSURANCE) - Giảm nửa sát thương
      case CARD_TYPES.INSURANCE: {
        sound.magic();
        setTeams((prevTeams) => {
          const updated = [...prevTeams];
          updated[currentTeamIndex] = {
            ...updated[currentTeamIndex],
            insuranceCount: updated[currentTeamIndex].insuranceCount + 1
          };
          return updated;
        });
        setDrawNotification({
          type: 'info',
          text: `🦺 BẢO HIỂM AN TOÀN! ${currentTeam.name} nhận được +1 Thẻ Bảo Hiểm (Giảm 50% thiệt hại khi dính Mèo Nổ To, và chỉ mất 25% khi dính Tiểu Bom)!`
        });
        break;
      }

      // THẺ MỚI 4: MÈO PHÁO KÍCH (REMOTE BOMB) - Bắn chia đôi 1 nhóm đối thủ
      case CARD_TYPES.REMOTE_BOMB: {
        sound.magic();
        setDrawNotification({
          type: 'info',
          text: `🚀 Mèo Pháo Kích! Hãy chọn 1 nhóm đối thủ để bắn rocket chia đôi 50% điểm hoặc bấm Hủy bỏ.`
        });
        setShowRemoteBombModal(true);
        break;
      }

      // THẺ NGUY HIỂM: MÈO NỔ CẢM TỬ (BOMB) & TIỂU MÈO NỔ (MINI BOMB)
      case CARD_TYPES.BOMB:
      case CARD_TYPES.MINI_BOMB: {
        setActiveBombType(card.type);
        const hasDefuse = currentTeam.defuseCount > 0;
        const hasThrow = currentTeam.throwBombCount > 0;

        if (hasDefuse && hasThrow) {
          // Có CẢ Gỡ Bom LẪN Ném Bom -> Mở popup cho người chơi tự chọn!
          sound.defuse();
          setShowBombDefenseChoiceModal(true);
        } else if (hasThrow) {
          // Chỉ có Thẻ Ném Bom -> Mở bảng chọn đối thủ để ném bom sang!
          sound.defuse();
          setShowThrowBombModal(true);
        } else if (hasDefuse) {
          // Chỉ có Thẻ Gỡ Bom -> Tự động hóa giải bằng Thẻ Gỡ Bom!
          executeDefuseBomb(card.type);
        } else {
          // Không có Gỡ lẫn Ném -> Bom nổ tung trên bàn nhóm hiện tại!
          executeBombExplosion(card.type);
        }
        break;
      }

      default:
        break;
    }
  };

  // 1. Tự gỡ bom bằng Thẻ Gỡ Bom
  const executeDefuseBomb = (bombType) => {
    sound.defuse();
    setTeams((prevTeams) => {
      const updated = [...prevTeams];
      updated[currentTeamIndex] = {
        ...updated[currentTeamIndex],
        defuseCount: Math.max(0, updated[currentTeamIndex].defuseCount - 1)
      };
      return updated;
    });

    const isMini = bombType === CARD_TYPES.MINI_BOMB;
    setCurrentCard({
      type: 'DEFUSED',
      title: '🛠️ ĐÃ GỠ BOM THÀNH CÔNG! 🛠️',
      icon: '🛡️💣',
      subtitle: 'Thoát chết ngoạn mục!',
      description: `Thẻ Gỡ Bom đã vô hiệu hóa quả ${isMini ? 'Tiểu Mèo Nổ' : 'Mèo Nổ Cảm Tử'}! Toàn bộ điểm số được bảo toàn 100%. Bạn ĐƯỢC QUYỀN RÚT TIẾP hoặc DỪNG LẠI!`,
      color: '#14b8a6'
    });

    setDrawNotification({
      type: 'gold',
      text: `🛠️ THẺ GỠ BOM ĐÃ CỨU BẠN! Quả bom đã bị cắt ngòi nổ! Hãy bấm "👉 RÚT BÀI TIẾP" hoặc "🛑 DỪNG LẠI & BỎ TÚI"!`
    });
    setShowBombDefenseChoiceModal(false);
  };

  // 2. Ném bom sang nhóm đối thủ
  const executeThrowBomb = (targetTeamId) => {
    const targetIdx = teams.findIndex((t) => t.id === targetTeamId);
    const targetTeam = teams[targetIdx];
    if (!targetTeam) {
      setShowThrowBombModal(false);
      return;
    }

    sound.magic();
    const isBig = activeBombType === CARD_TYPES.BOMB;
    const targetHasDefuse = targetTeam.defuseCount > 0;
    const targetHasInsurance = targetTeam.insuranceCount > 0;
    const shouldConsumeTargetInsurance = targetHasInsurance && targetTeam.totalScore > 0;

    let notifType = 'gold';
    let notifText = '';
    let newTargetScore = targetTeam.totalScore;

    if (targetHasDefuse) {
      sound.defuse();
      notifType = 'gold';
      notifText = `💣🔄 ${currentTeam.name} đã ném quả bom sang ${targetTeam.name}! Nhưng ${targetTeam.name} đã dùng Thẻ Gỡ Bom hóa giải thành công!`;
    } else {
      sound.bomb();
      notifType = 'danger';
      if (isBig) {
        if (targetTeam.totalScore > 0) {
          if (shouldConsumeTargetInsurance) {
            newTargetScore = Math.floor(targetTeam.totalScore * 0.5);
            notifText = `💥 KABOOOOOM! Quả bom ném trúng ${targetTeam.name}! Nhờ có Bảo Hiểm, ${targetTeam.name} chỉ mất 50% điểm (${targetTeam.totalScore} đ ➔ còn ${newTargetScore} đ)!`;
          } else {
            newTargetScore = 0;
            notifText = `💥 KABOOOOOM! Quả bom ném trúng bàn ${targetTeam.name}! ${targetTeam.name} bị nổ trắng tay xóa sạch điểm về 0!`;
          }
        } else if (targetTeam.totalScore < 0) {
          newTargetScore = 0; // Reset âm về 0!
          notifText = `💥 KABOOOOOM! Quả bom ném trúng ${targetTeam.name}! Vụ nổ Mèo Nổ Cảm Tử cực mạnh đã xóa sạch nợ âm (${targetTeam.totalScore} đ ➔ 0 đ)!`;
        } else {
          newTargetScore = 0;
          notifText = `💥 KABOOOOOM! Quả bom ném trúng bàn ${targetTeam.name}! Nhưng ${targetTeam.name} đang có 0 điểm nên không bị mất điểm nào!`;
        }
      } else {
        // Tiểu Mèo Nổ
        if (targetTeam.totalScore > 0) {
          if (shouldConsumeTargetInsurance) {
            newTargetScore = Math.floor(targetTeam.totalScore * 0.75);
            notifText = `💥 KABOOOOOM! Quả Tiểu Bom ném trúng ${targetTeam.name}! Nhờ có Bảo Hiểm, ${targetTeam.name} chỉ mất 25% điểm (${targetTeam.totalScore} đ ➔ còn ${newTargetScore} đ)!`;
          } else {
            newTargetScore = Math.floor(targetTeam.totalScore * 0.5);
            notifText = `💥 KABOOOOOM! Quả Tiểu Bom ném trúng ${targetTeam.name}! ${targetTeam.name} bị nổ chia đôi 50% điểm (${targetTeam.totalScore} đ ➔ còn ${newTargetScore} đ)!`;
          }
        } else if (targetTeam.totalScore < 0) {
          newTargetScore = Math.trunc(targetTeam.totalScore / 2); // Chia đôi nợ âm (-20 -> -10, -30 -> -15)
          notifText = `💥 KABOOOOOM! Quả Tiểu Bom ném trúng ${targetTeam.name}! Điểm âm của ${targetTeam.name} được chia đôi (${targetTeam.totalScore} đ ➔ còn ${newTargetScore} đ)!`;
        } else {
          newTargetScore = 0;
          notifText = `💥 KABOOOOOM! Quả Tiểu Bom ném trúng bàn ${targetTeam.name}! Nhưng ${targetTeam.name} đang có 0 điểm nên không bị mất điểm nào!`;
        }
      }
    }

    // Cập nhật trạng thái thẻ của nhóm hiện tại: Đã ném thành công, điểm an toàn, ĐƯỢC RÚT TIẾP!
    setCurrentCard({
      type: 'DEFUSED',
      title: '💣🔄 ĐÃ NÉM BOM SANG ĐỐI THỦ! 💣🔄',
      icon: '💨💣',
      subtitle: `Quả ${isBig ? 'Mèo Nổ Cảm Tử' : 'Tiểu Mèo Nổ'} đã bay vèo sang bàn ${targetTeam.name}!`,
      description: `Bạn đã dùng 1 Thẻ Ném Bom phản đòn ngoạn mục! Điểm số của nhóm bạn an toàn 100%. Bạn ĐƯỢC QUYỀN RÚT TIẾP hoặc DỪNG LẠI!`,
      color: '#f59e0b'
    });

    setTeams((prev) => {
      const updated = [...prev];

      // 1. Nhóm hiện tại tiêu hao 1 Thẻ Ném Bom
      updated[currentTeamIndex] = {
        ...updated[currentTeamIndex],
        throwBombCount: Math.max(0, updated[currentTeamIndex].throwBombCount - 1)
      };

      // 2. Xử lý nhóm đối thủ nhận bom
      if (targetHasDefuse) {
        updated[targetIdx] = {
          ...updated[targetIdx],
          defuseCount: Math.max(0, updated[targetIdx].defuseCount - 1)
        };
      } else {
        updated[targetIdx] = {
          ...updated[targetIdx],
          totalScore: newTargetScore,
          insuranceCount: shouldConsumeTargetInsurance ? Math.max(0, updated[targetIdx].insuranceCount - 1) : updated[targetIdx].insuranceCount
        };
      }

      return updated;
    });

    setDrawNotification({ type: notifType, text: notifText });
    setShowThrowBombModal(false);
    setShowBombDefenseChoiceModal(false);
  };

  // 3. Bom nổ tung trên bàn nhóm hiện tại (Không có Gỡ lẫn Ném)
  const executeBombExplosion = (bombType) => {
    sound.bomb();
    setScreenShake(true);
    setShowRedFlash(true);

    const isBig = bombType === CARD_TYPES.BOMB;
    const hasInsurance = currentTeam.insuranceCount > 0;
    // TỔNG ĐIỂM THỰC TẾ ĐANG CÓ (gồm cả điểm đã tích lũy và điểm vừa rút trong lượt này)
    const actualTotal = currentTeam.totalScore + turnScore;
    const shouldConsumeInsurance = hasInsurance && actualTotal > 0;

    let survivingScore = 0;
    let notifText = '';

    if (isBig) {
      if (actualTotal > 0) {
        if (shouldConsumeInsurance) {
          survivingScore = Math.floor(actualTotal * 0.5);
          notifText = `💥 KABOOOM! MÈO NỔ CẢM TỬ! Nhờ có Thẻ Bảo Hiểm, ${currentTeam.name} chỉ bị mất 50% điểm (${actualTotal} đ ➔ còn ${survivingScore} đ)!`;
        } else {
          survivingScore = 0;
          notifText = `💥 KABOOOOOM! MÈO NỔ CẢM TỬ ĐÃ XÓA SẠCH TOÀN BỘ ĐIỂM CỦA ${currentTeam.name} VỀ 0! (Khiên không thể chặn Mèo Nổ)`;
        }
      } else if (actualTotal < 0) {
        survivingScore = 0; // Mèo Nổ xóa sạch nợ âm về 0!
        notifText = `💥 KABOOOOOM! MÈO NỔ CẢM TỬ ĐÃ XÓA SẠCH NỢ ÂM! Điểm số ${actualTotal} đ của ${currentTeam.name} được reset trở lại 0 đ!`;
      } else {
        survivingScore = 0;
        notifText = `💥 KABOOOOOM! MÈO NỔ CẢM TỬ! ${currentTeam.name} đang có 0 điểm nên không bị mất điểm nào!`;
      }
    } else {
      // Tiểu Mèo Nổ
      if (actualTotal > 0) {
        if (shouldConsumeInsurance) {
          survivingScore = Math.floor(actualTotal * 0.75);
          const lost = actualTotal - survivingScore;
          notifText = `💥 TIỂU MÈO NỔ PHÁT HỎA! Nhờ có Thẻ Bảo Hiểm giảm tiếp nửa sát thương, ${currentTeam.name} chỉ mất 25% điểm (${actualTotal} đ ➔ còn ${survivingScore} đ, chỉ mất -${lost} đ)!`;
        } else {
          survivingScore = Math.floor(actualTotal * 0.5);
          const lost = actualTotal - survivingScore;
          notifText = `💥 TIỂU MÈO NỔ PHÁT HỎA! ${currentTeam.name} bị chia đôi 50% điểm (${actualTotal} đ ➔ còn ${survivingScore} đ, mất -${lost} đ)!`;
        }
      } else if (actualTotal < 0) {
        survivingScore = Math.trunc(actualTotal / 2); // Chia đôi nợ âm (-20 -> -10, -30 -> -15)
        notifText = `💥 TIỂU MÈO NỔ PHÁT HỎA! Điểm âm của ${currentTeam.name} được chia đôi (${actualTotal} đ ➔ còn ${survivingScore} đ)!`;
      } else {
        survivingScore = 0;
        notifText = `💥 TIỂU MÈO NỔ PHÁT HỎA! ${currentTeam.name} đang có 0 điểm nên không bị mất điểm nào!`;
      }
    }

    setBombExplosionData({
      bombType,
      isBig,
      hasInsurance: shouldConsumeInsurance,
      actualTotal,
      lostScore: actualTotal - survivingScore,
      survivingScore
    });
    setIsBombExploded(true);

    setTeams((prevTeams) => {
      const updated = [...prevTeams];
      updated[currentTeamIndex] = {
        ...updated[currentTeamIndex],
        totalScore: survivingScore,
        insuranceCount: shouldConsumeInsurance ? Math.max(0, updated[currentTeamIndex].insuranceCount - 1) : updated[currentTeamIndex].insuranceCount
      };
      return updated;
    });

    setTurnScore(0);
    setTurnMultiplier(1);
    setDrawNotification({ type: 'danger', text: notifText });

    setTimeout(() => {
      setScreenShake(false);
      setShowRedFlash(false);
    }, 1000);

    setTimeout(() => {
      setIsBombExploded(false);
      setBombExplosionData(null);
      nextTurn();
    }, 3500);
  };

  // 4. Mèo Pháo Kích (Remote Bomb) - Nhắm bắn chia đôi 1 nhóm đối thủ
  const executeRemoteBomb = (targetTeamId) => {
    const targetIdx = teams.findIndex((t) => t.id === targetTeamId);
    const targetTeam = teams[targetIdx];
    if (!targetTeam) {
      setShowRemoteBombModal(false);
      return;
    }

    // Nếu đối thủ có Khiên -> Khiên đỡ được!
    if (targetTeam.shieldCount > 0) {
      sound.defuse();
      setTeams((prev) => {
        const updated = [...prev];
        updated[targetIdx] = {
          ...updated[targetIdx],
          shieldCount: Math.max(0, updated[targetIdx].shieldCount - 1)
        };
        return updated;
      });
      setDrawNotification({
        type: 'info',
        text: `🛡️ ${targetTeam.name} có Khiên Phòng Thủ! Khiên đã đỡ trọn quả Pháo Kích của bạn!`
      });
    } else {
      // Đối thủ không có khiên -> Bị chia đôi điểm!
      sound.bomb();
      const oldScore = targetTeam.totalScore;
      if (oldScore <= 0) {
        setDrawNotification({
          type: 'info',
          text: `🚀🎯 PHÁO KÍCH BẮN TRÚNG ${targetTeam.name}! Nhưng nhóm này đang có ${oldScore} điểm (không phải điểm dương) nên Pháo Kích không có hiệu lực giảm điểm!`
        });
      } else {
        const halvedScore = Math.floor(oldScore * 0.5);
        setTeams((prev) => {
          const updated = [...prev];
          updated[targetIdx] = {
            ...updated[targetIdx],
            totalScore: halvedScore
          };
          return updated;
        });

        setDrawNotification({
          type: 'gold',
          text: `🚀🎯 PHÁO KÍCH BẮN TRÚNG! ${targetTeam.name} bị nổ chia đôi 50% điểm (${oldScore} đ ➔ ${halvedScore} đ)!`
        });
      }
    }

    setShowRemoteBombModal(false);
  };

  // DỪNG LẠI & BỎ TÚI ĐIỂM (Bank Score)
  const handleBankScore = () => {
    sound.bank();
    fireConfetti();
    setTeams((prevTeams) => {
      const updated = [...prevTeams];
      updated[currentTeamIndex] = {
        ...updated[currentTeamIndex],
        totalScore: updated[currentTeamIndex].totalScore + turnScore
      };
      return updated;
    });

    setTurnMultiplier(1);
    nextTurn();
  };

  // Đổi điểm với nhóm khác (Swap)
  const executeSwap = (targetTeamId) => {
    sound.magic();
    const targetIdx = teams.findIndex((t) => t.id === targetTeamId);
    const targetTeam = teams[targetIdx];

    if (!targetTeam) {
      setShowSwapModal(false);
      return;
    }

    if (targetTeam.shieldCount > 0) {
      sound.defuse();
      setDrawNotification({
        type: 'info',
        text: `🛡️ ${targetTeam.name} đã dùng Khiên Bảo Vệ chặn đứng việc đổi điểm của bạn!`
      });
      setTeams((prev) => {
        const updated = [...prev];
        updated[targetIdx] = {
          ...updated[targetIdx],
          shieldCount: Math.max(0, updated[targetIdx].shieldCount - 1)
        };
        return updated;
      });
    } else {
      sound.bank();
      // Toàn bộ điểm thực tế của nhóm bạn (bao gồm cả điểm các lượt trước + điểm lượt hiện tại)
      const myFullScore = currentTeam.totalScore + turnScore;
      const targetScore = targetTeam.totalScore;

      // Điểm đối phương chuyển về cho nhóm bạn được đưa vào Điểm Lượt Này
      // Chú ý quy tắc: Nhân đôi chỉ nhân số DƯƠNG, không nhân số âm!
      const swappedTurnScore = targetScore > 0 ? targetScore * turnMultiplier : targetScore;

      // Cập nhật điểm: đối phương nhận trọn vẹn myFullScore (kể cả âm hay dương)
      // Nhóm bạn chuyển toàn bộ điểm nhận về vào Điểm Lượt Này
      setTeams((prev) => {
        const updated = [...prev];
        updated[targetIdx] = {
          ...updated[targetIdx],
          totalScore: myFullScore
        };
        updated[currentTeamIndex] = {
          ...updated[currentTeamIndex],
          totalScore: 0
        };
        return updated;
      });

      // QUAN TRỌNG: Toàn bộ điểm đối phương tính vào ĐIỂM LƯỢT NÀY (kèm nhân đôi nếu dương)
      setTurnScore(swappedTurnScore);

      if (targetScore === 0) {
        setDrawNotification({
          type: 'info',
          text: `🔄 Hoán đổi hoàn tất! ${targetTeam.name} nhận toàn bộ ${myFullScore} điểm của bạn. ${currentTeam.name} nhận 0 điểm của đối phương vào Điểm Lượt Này!`
        });
      } else {
        setDrawNotification({
          type: 'gold',
          text: `🔄 Hoán đổi thành công! ${targetTeam.name} nhận toàn bộ ${myFullScore} điểm. ${currentTeam.name} nhận ${targetScore} điểm vào Điểm Lượt Này${targetScore > 0 && turnMultiplier > 1 ? ` (nhân ${turnMultiplier} = +${swappedTurnScore} đ)` : ''}!`
        });
      }
    }

    setShowSwapModal(false);
  };

  // Cướp điểm (Steal)
  const executeSteal = (targetTeamId) => {
    const targetIdx = teams.findIndex((t) => t.id === targetTeamId);
    const targetTeam = teams[targetIdx];

    if (!targetTeam) {
      setShowStealModal(false);
      return;
    }

    if (targetTeam.shieldCount > 0) {
      sound.defuse();
      setDrawNotification({
        type: 'info',
        text: `🛡️ ${targetTeam.name} có Khiên Phòng Thủ! Khiên chặn đòn cướp điểm thành công!`
      });
      setTeams((prev) => {
        const updated = [...prev];
        updated[targetIdx] = {
          ...updated[targetIdx],
          shieldCount: Math.max(0, updated[targetIdx].shieldCount - 1)
        };
        return updated;
      });
    } else {
      sound.bank();
      // Điểm hút từ kho đối thủ: Luôn trừ 20 điểm (kể cả đưa họ vào điểm âm: e.g. 10 -> -10, 0 -> -20, -10 -> -30)
      const stolenAmount = 20;
      // Điểm thực tế nhóm nhận được vào Điểm Lượt Này (áp dụng nhân đôi nếu có)
      const actualGained = stolenAmount * turnMultiplier;

      setTeams((prev) => {
        const updated = [...prev];
        updated[targetIdx] = {
          ...updated[targetIdx],
          totalScore: updated[targetIdx].totalScore - stolenAmount
        };
        return updated;
      });

      // QUAN TRỌNG: TÍNH VÀO ĐIỂM LƯỢT NÀY (turnScore) chứ KHÔNG cộng thẳng vào totalScore!
      setTurnScore((prev) => prev + actualGained);

      setDrawNotification({
        type: 'gold',
        text: `🥷 Cướp thành công! ${currentTeam.name} đã rút 20 điểm từ ${targetTeam.name} (${targetTeam.totalScore} đ ➔ ${targetTeam.totalScore - stolenAmount} đ) vào Điểm Lượt Này${turnMultiplier > 1 ? ` (nhân ${turnMultiplier} = +${actualGained} đ)` : ''}!`
      });
    }

    setShowStealModal(false);
  };

  // Đổi tên nhóm ở màn hình Lobby
  const handleTeamNameChange = (idx, newName) => {
    setTeams((prev) => {
      const updated = [...prev];
      updated[idx].name = newName;
      return updated;
    });
  };

  const sortedTeams = [...teams].sort((a, b) => b.totalScore - a.totalScore);

  return (
    <div className={`app-container ${screenShake ? 'shake-screen' : ''}`}>
      {/* Red Flash Overlay when Bomb Explodes */}
      {showRedFlash && <div className="flash-overlay" />}

      {/* HEADER */}
      <header className="game-header">
        <div className="brand-section">
          <div className="brand-logo-icon">
            <FaCat size={22} color="#ea580c" />
          </div>
          <div className="brand-text-col">
            <h1 className="brand-title">
              Tư Tưởng Hồ Chí Minh
            </h1>
            <p className="brand-subtitle">Các nguyên tắc đoàn kết quốc tế</p>
          </div>
        </div>

        <div className="header-controls">
          <button
            className="btn btn-icon"
            onClick={() => setShowRulesModal(true)}
            title="Luật chơi"
          >
            <HelpCircle size={20} />
          </button>

          <button
            className="btn btn-icon"
            onClick={toggleSound}
            title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          <button
            className="btn btn-icon"
            onClick={toggleFullscreen}
            title="Toàn màn hình"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>

          {gameState !== 'LOBBY' && gameState !== 'GAME_OVER' && (
            <button
              className="btn btn-icon"
              onClick={endGame}
              title="Xem Bục Vinh Quang"
            >
              <Award size={20} />
            </button>
          )}

          {gameState !== 'LOBBY' && (
            <button
              className="btn btn-icon"
              onClick={startNewGame}
              title="Chơi lại từ đầu"
            >
              <RotateCcw size={20} />
            </button>
          )}
        </div>
      </header>

      {/* NẾU Ở MÀN HÌNH LOBBY: HIỂN THỊ TRANG CHỦ CÀI ĐẶT */}
      {gameState === 'LOBBY' && (
        <main className="lobby-container">
          <div className="lobby-hero-card">
            <div className="lobby-badge-row">
              <FaFire size={38} color="#ea580c" />
              <FaCat size={38} color="#dc2626" />
            </div>

            <h2 className="lobby-title">
              MÈO NỔ
            </h2>
            <p className="lobby-desc">
              Đấu trường trí tuệ & may rủi kịch tính về <strong>Nguyên tắc đoàn kết quốc tế</strong> theo Tư tưởng Hồ Chí Minh. Trả lời đúng để giành quyền lật bài. <strong>Cẩn thận cạm bẫy Mèo Nổ Cảm Tử & Tiểu Mèo Nổ!</strong>
            </p>

            <h3 className="lobby-section-heading">
              <FaCat size={18} color="#d97706" /> Cài đặt danh sách 6 Biệt Đội Mèo:
            </h3>

            <div className="lobby-teams-grid">
              {teams.map((t, idx) => (
                <div key={t.id} className={`lobby-team-slot lobby-team-${t.id}`} style={{ borderLeftColor: t.color }}>
                  <TeamCatAvatar team={t} size={24} />
                  <input
                    type="text"
                    value={t.name}
                    onChange={(e) => handleTeamNameChange(idx, e.target.value)}
                    className="lobby-team-input"
                  />
                  <span className="lobby-team-num" style={{ color: t.color }}>#{t.id}</span>
                </div>
              ))}
            </div>

            <div className="lobby-actions">
              <button className="btn btn-gold btn-lg btn-play-pulse" onClick={startNewGame}>
                <Play size={22} fill="#fff" /> BẮT ĐẦU VÁN ĐẤU
              </button>
              <button className="btn btn-primary btn-lg" onClick={() => setShowRulesModal(true)}>
                <HelpCircle size={20} /> Xem Luật Chơi
              </button>
            </div>
          </div>
        </main>
      )}

      {/* NẾU KẾT THÚC GAME: HIỂN THỊ BỤC VINH QUANG CHUNG CUỘC */}
      {gameState === 'GAME_OVER' && (
        <main className="lobby-container">
          <div className="glass-panel-elevated" style={{ padding: '2rem 2.5rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto', width: '100%' }}>
            <div style={{ display: 'inline-flex', padding: '0.85rem', background: '#fef3c7', borderRadius: '1.25rem', marginBottom: '0.75rem', border: '1px solid #fde68a' }}>
              <Trophy size={48} color="#d97706" />
            </div>

            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', marginBottom: '0.35rem' }}>
              BẢNG VINH DANH CHUNG CUỘC
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Chúc mừng các nhóm đã xuất sắc hoàn thành phần thi tìm hiểu Tư tưởng Hồ Chí Minh về các nguyên tắc đoàn kết quốc tế!
            </p>

            {/* Podium Top 3 */}
            <div className="podium-container">
              {/* Hạng 2 */}
              {sortedTeams[1] && (
                <div className="podium-place">
                  <div style={{ marginBottom: '0.35rem', display: 'flex', justifyContent: 'center' }}>
                    <TeamCatAvatar team={sortedTeams[1]} size={36} />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>{sortedTeams[1].name}</div>
                  <div className="podium-pillar podium-second">
                    <span>2</span>
                    <span style={{ fontSize: '1rem', fontWeight: 600 }}>{sortedTeams[1].totalScore} đ</span>
                  </div>
                </div>
              )}

              {/* Hạng 1 Quán Quân */}
              {sortedTeams[0] && (
                <div className="podium-place">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '1.8rem' }}>👑</span>
                    <TeamCatAvatar team={sortedTeams[0]} size={44} />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#d97706', marginBottom: '0.4rem' }}>
                    {sortedTeams[0].name}
                  </div>
                  <div className="podium-pillar podium-first">
                    <span>1</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>{sortedTeams[0].totalScore} đ</span>
                  </div>
                </div>
              )}

              {/* Hạng 3 */}
              {sortedTeams[2] && (
                <div className="podium-place">
                  <div style={{ marginBottom: '0.35rem', display: 'flex', justifyContent: 'center' }}>
                    <TeamCatAvatar team={sortedTeams[2]} size={36} />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>{sortedTeams[2].name}</div>
                  <div className="podium-pillar podium-third">
                    <span>3</span>
                    <span style={{ fontSize: '1rem', fontWeight: 600 }}>{sortedTeams[2].totalScore} đ</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bảng điểm các nhóm còn lại */}
            <div style={{ maxWidth: '480px', margin: '1rem auto 1.5rem auto', textAlign: 'left' }}>
              {sortedTeams.slice(3).map((t, idx) => (
                <div key={t.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.55rem 0.85rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.5rem', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong>#{idx + 4}</strong> <TeamCatAvatar team={t} size={18} /> {t.name}
                  </span>
                  <strong style={{ color: '#d97706' }}>{t.totalScore} điểm</strong>
                </div>
              ))}
            </div>

            <button className="btn btn-gold btn-lg" onClick={startNewGame}>
              <RotateCcw size={18} /> Bắt đầu ván đấu mới
            </button>
          </div>
        </main>
      )}

      {/* SPLIT LAYOUT: BÊN TRÁI LÀ NHÓM & BÙA, BÊN PHẢI LÀ CÂU HỎI & LẬT BÀI (100VH NO SCROLL) */}
      {gameState !== 'LOBBY' && gameState !== 'GAME_OVER' && (
        <div className="game-body-split">
          {/* SIDEBAR BÊN TRÁI: 6 NHÓM, ĐIỂM SỐ & BÙA HỘ MỆNH */}
          <aside className="sidebar-teams">
            <div className="sidebar-header-status">
              <span style={{ color: '#475569' }}>Đã mở: <strong style={{ color: '#0f172a' }}>{answeredQuestionIds.length}/18</strong> câu</span>
              <span style={{ color: '#b45309', fontWeight: 700 }}>Cỗ bài: <strong>{deck.length}</strong> lá</span>
            </div>

            {teams.map((t, idx) => {
              const isActive = idx === currentTeamIndex;
              return (
                <div
                  key={t.id}
                  className={`sidebar-team-card team-card-${t.id} ${isActive ? 'active' : ''}`}
                  style={{ borderLeftColor: t.color }}
                >
                  <div className="team-info-row">
                    <div className="team-identity">
                      <TeamCatAvatar team={t} size={24} />
                      <div className="team-name-col">
                        <span className="team-name-text">{t.name}</span>
                        <span className="team-idx-tag">Đội #{t.id}</span>
                      </div>
                    </div>

                    {/* Hộp điểm số có điểm nhấn huy hiệu rõ rệt */}
                    {(() => {
                      const displayScore = isActive ? t.totalScore + turnScore : t.totalScore;
                      return (
                        <div className={`team-score-capsule ${displayScore > 0 ? 'has-points' : ''} ${displayScore < 0 ? 'is-negative' : ''} ${isActive ? 'active-capsule' : ''}`}>
                          <FaCoins size={13} color={displayScore > 0 || (isActive && turnScore > 0) ? '#d97706' : displayScore < 0 ? '#dc2626' : '#64748b'} />
                          <span className="score-val">{displayScore}</span>
                          <span className="score-unit">đ</span>
                          {isActive && turnScore > 0 && (
                            <span className="score-bonus-pill">+{turnScore}</span>
                          )}
                        </div>
                      );
                    })()}
                  </div>

                  {/* Bùa / Túi đồ của nhóm */}
                  <div className="team-spells-row">
                    {t.defuseCount > 0 && (
                      <span className="spell-pill spell-defuse" title="Mèo gỡ bom: Cứu mạng khi gặp bom">
                        <FaWrench size={11} /> {t.defuseCount} Gỡ
                      </span>
                    )}
                    {t.throwBombCount > 0 && (
                      <span className="spell-pill spell-throw" title="Mèo ném bom: Ném bom sang đối thủ khi gặp bom">
                        <FaBomb size={11} /> {t.throwBombCount} Ném
                      </span>
                    )}
                    {t.insuranceCount > 0 && (
                      <span className="spell-pill spell-insurance" title="Mèo bảo hiểm: Giảm nửa sát thương khi dính bom">
                        <Shield size={11} /> {t.insuranceCount} Bảo Hiểm
                      </span>
                    )}
                    {t.shieldCount > 0 && (
                      <span className="spell-pill spell-shield" title="Khiên mèo thần: Chống đổi/cướp điểm & pháo kích">
                        <FaShieldCat size={12} /> {t.shieldCount} Khiên
                      </span>
                    )}
                    {t.defuseCount === 0 && t.throwBombCount === 0 && t.insuranceCount === 0 && t.shieldCount === 0 && (
                      <span className="spell-empty">
                        <FaPaw size={10} style={{ opacity: 0.5 }} /> Trống túi
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </aside>

          {/* MAIN ARENA BÊN PHẢI */}
          <section className="main-arena-split">
            {/* 1. MÀN HÌNH CHỌN CÂU HỎI: 18 CÂU VỪA KHÍT 1 MÀN HÌNH (NO SCROLL) */}
            {gameState === 'SELECT_QUESTION' && (
              <>
                <div className="arena-top-bar">
                  <div className="arena-title">
                    <span style={{ color: '#64748b' }}>Lượt chọn của:</span>
                    <div className="arena-active-team-pill" style={{ borderColor: currentTeam.color, background: `${currentTeam.color}15` }}>
                      <TeamCatAvatar team={currentTeam} size={20} />
                      <strong style={{ color: currentTeam.color }}>
                        {currentTeam.name}
                      </strong>
                    </div>
                    <span className="arena-hint-text">
                      — Bấm chọn 1 ô câu hỏi bất kỳ để bắt đầu!
                    </span>
                  </div>
                  <span className="turn-pill">🎯 Vòng Trắc Nghiệm</span>
                </div>

                <div className="question-grid-fit">
                  {QUESTIONS_DATA.map((q) => {
                    const isDone = answeredQuestionIds.includes(q.id);

                    return (
                      <button
                        key={q.id}
                        disabled={isDone}
                        onClick={() => handleSelectQuestion(q)}
                        className={`question-btn-fit ${isDone ? 'done' : ''}`}
                        title={isDone ? "Câu hỏi này đã hoàn thành" : `Câu số ${q.id}`}
                      >
                        <div className="q-card-top-bar">
                          <span className="q-tag-label">CÂU HỎI</span>
                          <span className="q-paw-decor">
                            <FaPaw size={11} />
                          </span>
                        </div>

                        {/* Điểm nhấn vòng tròn số câu hỏi rực rỡ & chuyên nghiệp */}
                        <div className="q-num-badge">
                          <span>{String(q.id).padStart(2, '0')}</span>
                        </div>

                        <div className="q-action-hint">
                          {isDone ? (
                            <span className="q-done-label"><CheckCircle2 size={13} /> Đã trả lời</span>
                          ) : (
                            <span className="q-open-label">Sẵn sàng</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {/* 2. VÒNG LẬT BÀI SINH TỬ (DRAW CARDS) BÊN PHẢI */}
            {gameState === 'DRAW_CARDS' && (
              <div className="draw-area-fit">
                {/* 4 Thẻ chỉ số sắc nét, có màu sắc & điểm nhấn riêng */}
                <div className="turn-stats-board-compact">
                  <div className="stat-card-fit stat-card-gold">
                    <span className="stat-card-icon">🏆</span>
                    <div className="stat-card-info">
                      <span className="stat-label-compact">Tổng Điểm Thực Tế</span>
                      <span className="stat-value-compact highlight-gold">{currentTeam.totalScore + turnScore} đ</span>
                    </div>
                  </div>

                  <div className="stat-card-fit stat-card-blue">
                    <span className="stat-card-icon">⚡</span>
                    <div className="stat-card-info">
                      <span className="stat-label-compact" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        Điểm Lượt Này
                        {turnMultiplier > 1 && (
                          <span style={{ color: '#b45309', background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '4px', padding: '1px 5px', fontSize: '0.72rem', fontWeight: 900 }}>
                            x{turnMultiplier}
                          </span>
                        )}
                      </span>
                      <span className="stat-value-compact" style={{ color: '#0284c7' }}>+{turnScore} đ</span>
                    </div>
                  </div>

                  <div className="stat-card-fit stat-card-slate">
                    <span className="stat-card-icon">💼</span>
                    <div className="stat-card-info">
                      <span className="stat-label-compact">Điểm Trước Lượt</span>
                      <span className="stat-value-compact" style={{ color: '#475569' }}>{currentTeam.totalScore} đ</span>
                    </div>
                  </div>

                  <div className="stat-card-fit stat-card-purple">
                    <span className="stat-card-icon">🃏</span>
                    <div className="stat-card-info">
                      <span className="stat-label-compact">Bài Trong Cỗ</span>
                      <span className="stat-value-compact" style={{ color: '#7c3aed' }}>{deck.length} lá</span>
                    </div>
                  </div>
                </div>

                {/* SÂN KHẤU BÀN ĐẤU BÀI (ARENA CARD MAT) - Thảm ngà champagne rộng rãi */}
                <div className="card-arena-mat">
                  {/* Sân khấu 3D Card Stage to ngang trọn khung */}
                  <div className="card-stage-fit">
                    <div className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}>
                      {/* Mặt úp cỗ bài - Họa tiết hoa văn thẻ bài sang trọng to ngang */}
                      <div className="card-face-front">
                        <div className="card-back-frame">
                          <div className="card-back-art-side">
                            <CardBackIllustration size={160} />
                          </div>
                          <div className="card-back-info-side">
                            <div className="card-back-title">CỖ BÀI BÍ ẨN</div>
                            <div className="card-back-badge">
                              <FaPaw size={13} color="#fbbf24" /> Cỗ bài Mèo Nổ Bí Ẩn
                            </div>
                            <div className="card-back-hint">
                              Bấm nút bên dưới để rút lá bài tiếp theo
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mặt ngửa lá bài khi lật: Thẻ to ngang, ảnh to nổi bật, thông tin chi tiết */}
                      <div
                        className={`card-face-back card-type-${currentCard?.type?.toLowerCase() || 'default'} ${currentCard?.type === 'POINT' ? `card-point-${currentCard?.value}` : ''}`}
                      >
                        {currentCard ? (
                          <div className="card-inner-art-frame">
                            <div className="card-illustration-wrap">
                              <CardIllustration card={currentCard} size={175} />
                            </div>
                            <div className="card-details-col">
                              <div className="card-title-big">
                                {currentCard.title}
                              </div>
                              {currentCard.catName && (
                                <div className="card-cat-name">
                                  🐾 {currentCard.catName}
                                </div>
                              )}
                              {currentCard.subtitle && (
                                <div className="card-subtitle-box">
                                  <span className="card-subtitle-text">{currentCard.subtitle}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800 }}>
                            Đang rút lá mới...
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nút hành động nổi khối tactile */}
                <div className="action-buttons-group">
                  <button
                    className="btn btn-draw-card"
                    onClick={handleDrawCard}
                    disabled={isDrawing || isBombExploded}
                  >
                    <Sparkles size={20} /> {isDrawing ? "ĐANG RÚT BÀI..." : "👉 RÚT BÀI TIẾP"}
                  </button>

                  <button
                    className="btn btn-bank-score"
                    onClick={handleBankScore}
                    disabled={isDrawing || isBombExploded || cardsDrawnThisTurn === 0}
                    title="Bảo toàn điểm vào Tổng Điểm và nhường lượt"
                  >
                    <Shield size={20} /> 🛑 DỪNG LẠI & BỎ TÚI {turnScore > 0 ? `(+${turnScore} đ)` : ''}
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {/* MODAL CÂU HỎI TRẮC NGHIỆM */}
      {gameState === 'ANSWER_QUESTION' && activeQuestion && (
        <div className="modal-overlay">
          <div className="modal-content modal-question-box">
            <div className="modal-header" style={{ marginBottom: hasAnswered ? '0.5rem' : '1rem', paddingBottom: '0.45rem' }}>
              <div>
                <span className="turn-pill" style={{ marginBottom: '0.35rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}>
                  📖 CÂU HỎI TRẮC NGHIỆM SỐ {activeQuestion.id} / 18
                </span>
                <h3 style={{ fontSize: hasAnswered ? '1.18rem' : '1.35rem', color: '#0f172a', lineHeight: 1.45, marginTop: '0.15rem', fontWeight: 800 }}>
                  {activeQuestion.question}
                </h3>
              </div>
            </div>

            <div className={`options-list ${hasAnswered ? 'answered-compact' : ''}`}>
              {activeQuestion.options.map((opt, idx) => {
                const letter = String.fromCharCode(65 + idx);
                let btnClass = 'option-btn';
                if (hasAnswered) {
                  if (idx === activeQuestion.correctIndex) btnClass += ' correct';
                  else if (idx === selectedOption) btnClass += ' wrong';
                }

                return (
                  <button
                    key={idx}
                    className={btnClass}
                    disabled={hasAnswered}
                    onClick={() => handleAnswer(idx)}
                  >
                    <span className="option-letter">{letter}</span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {hasAnswered && (
              <div style={{ animation: 'fadeIn 0.3s ease' }}>
                {!isCorrect && (
                  <div className="sad-cat-card">
                    <div className="sad-cat-icon">😿🥀</div>
                    <div className="sad-cat-body">
                      <div className="sad-cat-badge">LÁ BÀI ẨN KÍCH HOẠT</div>
                      <h4 className="sad-cat-title">MÈO BUỒN PHẠT ĐIỂM!</h4>
                      <p className="sad-cat-desc">
                        Trả lời sai đã kích hoạt lá bài ẩn <strong>Mèo Buồn</strong>: Nhóm <strong>{currentTeam.name}</strong> bị phạt trừ <strong>-30 ĐIỂM</strong> trực tiếp vào tổng điểm và mất quyền lật bài!
                      </p>
                    </div>
                    <div className="sad-cat-penalty-box">
                      <div className="penalty-label">HÌNH PHẠT</div>
                      <div className="penalty-value">-30 đ</div>
                    </div>
                  </div>
                )}

                <div className="explanation-box">
                  <strong>💡 Giải thích chi tiết: </strong>
                  {activeQuestion.explanation}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.75rem' }}>
                  {isCorrect ? (
                    <button className="btn btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '1rem', fontWeight: 800 }} onClick={handleContinueAfterQuestion}>
                      <Sparkles size={18} /> ĐƯỢC LẬT BÀI! TIẾP TỤC <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button className="btn btn-danger" style={{ padding: '0.65rem 1.4rem', fontSize: '1rem', fontWeight: 800 }} onClick={handleContinueAfterQuestion}>
                      TIẾP TỤC (MẤT LƯỢT & BỊ PHẠT -30Đ) <ArrowRight size={18} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL NỔ BÙM HOÀNH TRÁNG (BOMB EXPLOSION) */}
      {isBombExploded && bombExplosionData && (
        <div className="modal-overlay" style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(8px)', zIndex: 1200 }}>
          <div className="modal-content" style={{ borderColor: '#fca5a5', textAlign: 'center', background: '#fff5f5', padding: '2.5rem 2rem', maxWidth: '580px' }}>
            <div style={{ fontSize: '4.5rem', marginBottom: '0.75rem', animation: 'pulseGlow 1s infinite' }}>
              {bombExplosionData.isBig ? '💣💥🔥' : '💥⚡😾'}
            </div>
            <h2 style={{ fontSize: '2.4rem', color: '#dc2626', fontWeight: 900, marginBottom: '0.4rem', textTransform: 'uppercase' }}>
              {bombExplosionData.isBig ? 'KABOOOOOM!' : 'BÙÙÙM! TIỂU MÈO NỔ!'}
            </h2>
            <h3 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '1rem', fontWeight: 700 }}>
              {bombExplosionData.isBig ? 'MÈO NỔ CẢM TỬ ĐÃ KÍCH HOẠT!' : 'TIỂU MÈO NỔ PHÁT HỎA (CHIA ĐÔI ĐIỂM)!'}
            </h3>

            {/* Chi tiết điểm số giữ lại & trừ đi minh bạch 100% */}
            <div style={{ background: '#ffffff', border: '1.5px solid #fecaca', borderRadius: '1rem', padding: '1.1rem 1.25rem', margin: '1rem 0', boxShadow: '0 4px 12px rgba(220, 38, 38, 0.08)' }}>
              {bombExplosionData.isBig && !bombExplosionData.hasInsurance ? (
                bombExplosionData.actualTotal < 0 ? (
                  <div>
                    <div style={{ display: 'inline-block', background: '#dcfce7', color: '#15803d', padding: '3px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.6rem' }}>
                      ✨ ĐẶC QUYỀN MÈO NỔ: XÓA SẠCH NỢ ÂM VỀ 0!
                    </div>
                    <p style={{ fontSize: '1.15rem', color: '#15803d', lineHeight: 1.5, fontWeight: 800, margin: 0 }}>
                      Vụ nổ cực mạnh đã "xóa sạch nợ" <span style={{ color: '#dc2626' }}>{bombExplosionData.actualTotal} điểm</span> của <span style={{ color: '#ea580c' }}>{currentTeam.name}</span> và reset điểm về 0!
                    </p>
                  </div>
                ) : (
                  <div>
                    <p style={{ fontSize: '1.2rem', color: '#991b1b', lineHeight: 1.5, fontWeight: 800, margin: 0 }}>
                      Toàn bộ <span style={{ color: '#dc2626', textDecoration: 'underline' }}>{bombExplosionData.actualTotal} điểm</span> của <span style={{ color: '#ea580c' }}>{currentTeam.name}</span> đã bị NỔ SẠCH VỀ 0!
                    </p>
                    <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.5rem', marginBottom: 0 }}>
                      (Khiên chắn không thể phòng thủ trước uy lực của Mèo Nổ)
                    </p>
                  </div>
                )
              ) : bombExplosionData.isBig && bombExplosionData.hasInsurance ? (
                <div>
                  <div style={{ display: 'inline-block', background: '#dbeafe', color: '#1e40af', padding: '3px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.6rem' }}>
                    🦺 MÈO BẢO HIỂM ĐÃ GIẢM 50% THIỆT HẠI!
                  </div>
                  <p style={{ fontSize: '1.05rem', color: '#1e293b', lineHeight: 1.5, margin: 0 }}>
                    {currentTeam.name} chỉ mất 50%: <strong style={{ color: '#dc2626' }}>-{bombExplosionData.lostScore} đ</strong>
                  </p>
                  <div style={{ fontSize: '1.4rem', color: '#16a34a', fontWeight: 900, marginTop: '0.5rem' }}>
                    🛡️ BẢO TOÀN GIỮ LẠI: {bombExplosionData.survivingScore} ĐIỂM!
                  </div>
                </div>
              ) : !bombExplosionData.isBig && bombExplosionData.hasInsurance ? (
                <div>
                  <div style={{ display: 'inline-block', background: '#dbeafe', color: '#1e40af', padding: '3px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.6rem' }}>
                    🦺 MÈO BẢO HIỂM GIẢM SÁT THƯƠNG XUỐNG CÒN 25%!
                  </div>
                  <p style={{ fontSize: '1.05rem', color: '#1e293b', lineHeight: 1.5, margin: 0 }}>
                    {currentTeam.name} chỉ mất 25%: <strong style={{ color: '#dc2626' }}>-{bombExplosionData.lostScore} đ</strong>
                  </p>
                  <div style={{ fontSize: '1.4rem', color: '#16a34a', fontWeight: 900, marginTop: '0.5rem' }}>
                    🛡️ BẢO TOÀN GIỮ LẠI: {bombExplosionData.survivingScore} ĐIỂM (75%)!
                  </div>
                </div>
              ) : bombExplosionData.actualTotal < 0 ? (
                <div>
                  <div style={{ display: 'inline-block', background: '#dcfce7', color: '#15803d', padding: '3px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.6rem' }}>
                    ✨ TIỂU NỔ GIẢM MỘT NỬA ĐIỂM ÂM!
                  </div>
                  <p style={{ fontSize: '1.15rem', color: '#15803d', lineHeight: 1.5, margin: 0 }}>
                    Điểm âm của {currentTeam.name} được chia đôi: <span style={{ color: '#dc2626' }}>{bombExplosionData.actualTotal} đ</span> ➔ còn <span style={{ color: '#15803d', fontWeight: 900 }}>{bombExplosionData.survivingScore} đ</span>!
                  </p>
                </div>
              ) : (
                <div>
                  <div style={{ display: 'inline-block', background: '#fef3c7', color: '#b45309', padding: '3px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.6rem' }}>
                    💥 BỊ NỔ CHIA ĐÔI 50% ĐIỂM SỐ!
                  </div>
                  <p style={{ fontSize: '1.05rem', color: '#1e293b', lineHeight: 1.5, margin: 0 }}>
                    {currentTeam.name} mất 50%: <strong style={{ color: '#dc2626' }}>-{bombExplosionData.lostScore} đ</strong>
                  </p>
                  <div style={{ fontSize: '1.4rem', color: '#d97706', fontWeight: 900, marginTop: '0.5rem' }}>
                    🛡️ BẢO TOÀN GIỮ LẠI: {bombExplosionData.survivingScore} ĐIỂM (50%)!
                  </div>
                </div>
              )}
            </div>

            <div style={{ marginTop: '1.5rem', color: '#64748b', fontSize: '0.9rem' }}>
              Đang chuyển lượt sang nhóm tiếp theo...
            </div>
          </div>
        </div>
      )}

      {/* MODAL THẤU THỊ / PHÂN TÍCH (PEEK 3 CARDS) */}
      {peekCards && (
        <div className="modal-overlay" onClick={() => setPeekCards(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center', maxWidth: '700px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Eye size={28} color="#7c3aed" />
              <h3 style={{ fontSize: '1.5rem', color: '#0f172a' }}>THẤU THỊ / PHÂN TÍCH TƯƠNG LAI</h3>
            </div>
            <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Dưới đây là 3 lá bài tiếp theo nằm trên đầu cỗ bài (theo thứ tự từ trái sang phải):
            </p>

            <div className="peek-cards-row">
              {peekCards.map((c, idx) => (
                <div key={idx} className={`peek-single-card card-type-${c.type.toLowerCase()} ${c.type === 'POINT' ? `card-point-${c.value}` : ''}`}>
                  <div className="peek-inner-frame">
                    <span className="peek-card-order">Lá #{idx + 1}</span>
                    <div className="peek-badge-wrap">
                      <CardIllustration card={c} size={58} />
                    </div>
                    <strong className="peek-card-title">{c.title}</strong>
                    <span className="peek-card-sub">{c.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-primary" onClick={() => setPeekCards(null)}>
              Đã ghi nhớ & Tiếp tục
            </button>
          </div>
        </div>
      )}

      {/* MODAL ĐỔI ĐIỂM (SWAP) */}
      {showSwapModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '620px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <RefreshCw size={28} color="#4f46e5" />
              <h3 style={{ fontSize: '1.5rem', color: '#0f172a' }}>CHỌN NHÓM ĐỂ HOÁN ĐỔI ĐIỂM</h3>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.85rem', padding: '0.85rem 1rem', margin: '1rem 0' }}>
              <div style={{ fontSize: '0.85rem', color: '#475569' }}>Điểm thực tế của {currentTeam.name} lúc này:</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#d97706', marginTop: '0.25rem' }}>
                {currentTeam.totalScore + turnScore} điểm
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500, marginLeft: '0.5rem' }}>
                  ({currentTeam.totalScore} trước + {turnScore} lượt)
                </span>
              </div>
            </div>

            <p style={{ color: '#475569', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
              Chọn 1 nhóm đối thủ bên dưới để tráo đổi toàn bộ số điểm với họ (điểm đối phương chuyển về sẽ tính vào Điểm Lượt Này):
            </p>
            {turnMultiplier > 1 && (
              <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '0.65rem', padding: '0.45rem 0.85rem', color: '#92400e', fontWeight: 700, fontSize: '0.88rem', marginBottom: '1rem', textAlign: 'center' }}>
                ⚡ Đang kích hoạt Nhân Đôi x{turnMultiplier}! Điểm đối phương đổi về (nếu dương) sẽ được nhân {turnMultiplier} lần vào Điểm Lượt!
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {teams.filter((t, idx) => idx !== currentTeamIndex).map((t) => {
                const myFullScore = currentTeam.totalScore + turnScore;
                const diff = t.totalScore - myFullScore;
                return (
                  <button
                    key={t.id}
                    className="option-btn"
                    onClick={() => executeSwap(t.id)}
                    style={{ justifyContent: 'space-between' }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <TeamCatAvatar team={t} size={22} />
                      <strong>{t.name}</strong>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ color: t.totalScore < 0 ? '#ef4444' : '#d97706', fontWeight: 700 }}>
                        {t.totalScore} điểm
                      </span>
                      {diff > 0 && <span style={{ color: '#16a34a', fontSize: '0.8rem', fontWeight: 700 }}>+{diff} (Tăng)</span>}
                      {diff < 0 && <span style={{ color: '#dc2626', fontSize: '0.8rem', fontWeight: 700 }}>{diff} (Giảm)</span>}
                      {diff === 0 && <span style={{ color: '#64748b', fontSize: '0.8rem' }}>Bằng điểm</span>}
                      {t.shieldCount > 0 && (
                        <span style={{ fontSize: '0.8rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <FaShieldCat size={13} /> (Có khiên)
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              className="btn btn-secondary"
              onClick={() => {
                setShowSwapModal(false);
                setDrawNotification({
                  type: 'info',
                  text: 'Bạn đã giữ nguyên điểm (không đổi điểm). Bạn có thể Rút bài tiếp hoặc Dừng lại & Bỏ túi!'
                });
              }}
            >
              Hủy bỏ (Không đổi)
            </button>
          </div>
        </div>
      )}

      {/* MODAL CƯỚP ĐIỂM (STEAL) */}
      {showStealModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '600px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Swords size={28} color="#9333ea" />
              <h3 style={{ fontSize: '1.5rem', color: '#0f172a' }}>CHỌN NHÓM ĐỂ CƯỚP 20 ĐIỂM</h3>
            </div>
            <p style={{ color: '#475569', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
              Bạn vừa rút trúng Thẻ Cướp Điểm! Hãy chọn 1 nhóm đối thủ để hút 20 điểm về Điểm Lượt:
            </p>
            {turnMultiplier > 1 && (
              <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '0.65rem', padding: '0.45rem 0.85rem', color: '#92400e', fontWeight: 700, fontSize: '0.88rem', marginBottom: '1rem', textAlign: 'center' }}>
                ⚡ Đang kích hoạt Nhân Đôi x{turnMultiplier}! Cướp 20 điểm sẽ nhân thành +{20 * turnMultiplier} điểm vào Điểm Lượt!
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {teams.filter((t, idx) => idx !== currentTeamIndex).map((t) => (
                <button
                  key={t.id}
                  className="option-btn"
                  onClick={() => executeSteal(t.id)}
                  style={{ justifyContent: 'space-between' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <TeamCatAvatar team={t} size={22} />
                    <strong>{t.name}</strong>
                  </span>
                  <span style={{ color: t.totalScore < 0 ? '#ef4444' : '#d97706', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {t.totalScore} đ ➔ {t.totalScore - 20} đ (-20đ)
                    {t.shieldCount > 0 && (
                      <span style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <FaShieldCat size={13} /> (Có khiên)
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>

            <button
              className="btn btn-secondary"
              onClick={() => {
                setShowStealModal(false);
                setDrawNotification({
                  type: 'info',
                  text: 'Bạn đã hủy đòn cướp điểm. Bạn có thể Rút bài tiếp hoặc Dừng lại & Bỏ túi!'
                });
              }}
            >
              Hủy bỏ
            </button>
          </div>
        </div>
      )}

      {/* MODAL MÈO PHÁO KÍCH (REMOTE BOMB - CHIA ĐÔI ĐỐI THỦ) */}
      {showRemoteBombModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '620px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Rocket size={28} color="#ea580c" />
              <h3 style={{ fontSize: '1.45rem', color: '#0f172a' }}>CHỌN NHÓM ĐỂ PHÁO KÍCH CHIA ĐÔI ĐIỂM</h3>
            </div>
            <p style={{ color: '#475569', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
              Bạn vừa rút trúng <strong>Mèo Pháo Kích</strong>! Hãy chọn 1 nhóm đối thủ để kích nổ rocket làm <strong>chia đôi 50% số điểm</strong> của họ (chỉ áp dụng cho nhóm có điểm dương):
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {teams.filter((t, idx) => idx !== currentTeamIndex).map((t) => {
                const isPositive = t.totalScore > 0;
                const halved = isPositive ? Math.floor(t.totalScore * 0.5) : t.totalScore;
                const lost = isPositive ? t.totalScore - halved : 0;
                return (
                  <button
                    key={t.id}
                    className="option-btn"
                    disabled={!isPositive}
                    onClick={() => executeRemoteBomb(t.id)}
                    style={{ justifyContent: 'space-between', opacity: !isPositive ? 0.55 : 1, cursor: !isPositive ? 'not-allowed' : 'pointer' }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <TeamCatAvatar team={t} size={22} />
                      <strong>{t.name}</strong>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {isPositive ? (
                        <>
                          <span style={{ color: '#d97706', fontWeight: 700 }}>
                            {t.totalScore} đ ➔ {halved} đ
                          </span>
                          {lost > 0 && <span style={{ color: '#dc2626', fontSize: '0.8rem', fontWeight: 700 }}>(-{lost} đ)</span>}
                        </>
                      ) : (
                        <span style={{ color: '#64748b', fontSize: '0.85rem', fontStyle: 'italic' }}>
                          {t.totalScore} đ (Chỉ bắn nhóm điểm dương)
                        </span>
                      )}
                      {t.shieldCount > 0 && (
                        <span style={{ fontSize: '0.8rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <FaShieldCat size={13} /> (Có khiên đỡ)
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              className="btn btn-secondary"
              onClick={() => {
                setShowRemoteBombModal(false);
                setDrawNotification({
                  type: 'info',
                  text: 'Bạn đã không bắn pháo kích. Bạn có thể Rút bài tiếp hoặc Dừng lại & Bỏ túi!'
                });
              }}
            >
              Hủy bỏ (Không bắn)
            </button>
          </div>
        </div>
      )}

      {/* MODAL LỰA CHỌN CỨU MẠNG KHI CÓ CẢ GỠ VÀ NÉM BOM */}
      {showBombDefenseChoiceModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '600px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <AlertTriangle size={32} color="#dc2626" />
              <h3 style={{ fontSize: '1.5rem', color: '#dc2626' }}>
                💥 NGUY HIỂM: RÚT TRÚNG {activeBombType === CARD_TYPES.MINI_BOMB ? 'TIỂU MÈO NỔ' : 'MÈO NỔ CẢM TỬ'}!
              </h3>
            </div>
            <p style={{ color: '#475569', marginBottom: '1.25rem', fontSize: '1rem' }}>
              Bạn đang sở hữu CẢ <strong>Thẻ Gỡ Bom ({currentTeam.defuseCount})</strong> VÀ <strong>Thẻ Ném Bom ({currentTeam.throwBombCount})</strong>! Hãy chọn cách thoát thân:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <button
                className="btn btn-gold btn-lg"
                onClick={() => {
                  setShowBombDefenseChoiceModal(false);
                  setShowThrowBombModal(true);
                }}
                style={{ justifyContent: 'center', padding: '1rem', fontSize: '1.05rem', fontWeight: 800 }}
              >
                💣🔄 DÙNG THẺ NÉM BOM (Ném sang tiêu diệt đối thủ & Đi tiếp)
              </button>

              <button
                className="btn btn-primary btn-lg"
                onClick={() => executeDefuseBomb(activeBombType)}
                style={{ justifyContent: 'center', padding: '1rem', fontSize: '1.05rem', fontWeight: 800, background: '#0d9488', borderColor: '#0f766e' }}
              >
                🛠️ DÙNG THẺ GỠ BOM (Hóa giải ngòi nổ tại chỗ & Đi tiếp)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CHỌN ĐỐI THỦ ĐỂ NÉM BOM SANG */}
      {showThrowBombModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '620px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <FaBomb size={28} color="#d97706" />
              <h3 style={{ fontSize: '1.45rem', color: '#0f172a' }}>CHỌN NHÓM ĐỂ NÉM BOM SANG</h3>
            </div>
            <p style={{ color: '#475569', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
              Quả <strong>{activeBombType === CARD_TYPES.MINI_BOMB ? 'Tiểu Mèo Nổ (nổ 50%)' : 'Mèo Nổ Cảm Tử (nổ 100%)'}</strong> sẽ bay thẳng sang bàn của nhóm đối thủ được chọn:
            </p>
            <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '0.65rem', padding: '0.45rem 0.85rem', color: '#92400e', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem' }}>
              ⚠️ Lưu ý: Khiên đối thủ KHÔNG đỡ được bom! Chỉ Thẻ Gỡ Bom mới cứu được họ.
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              {teams.filter((t, idx) => idx !== currentTeamIndex).map((t) => (
                <button
                  key={t.id}
                  className="option-btn"
                  onClick={() => executeThrowBomb(t.id)}
                  style={{ justifyContent: 'space-between' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <TeamCatAvatar team={t} size={22} />
                    <strong>{t.name}</strong>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ color: '#d97706', fontWeight: 700 }}>
                      {t.totalScore} điểm
                    </span>
                    {t.defuseCount > 0 && (
                      <span style={{ fontSize: '0.8rem', color: '#0d9488', fontWeight: 700 }}>
                        (Có {t.defuseCount} Gỡ Bom)
                      </span>
                    )}
                    {t.insuranceCount > 0 && (
                      <span style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 700 }}>
                        (Có Bảo Hiểm)
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>

            {currentTeam.defuseCount > 0 && (
              <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowThrowBombModal(false);
                    setShowBombDefenseChoiceModal(true);
                  }}
                >
                  ↩️ Quay lại chọn Dùng Thẻ Gỡ Bom
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL HƯỚNG DẪN LUẬT CHƠI TOÀN DIỆN */}
      {showRulesModal && (
        <div className="modal-overlay" onClick={() => setShowRulesModal(false)}>
          <div className="modal-content rules-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="rules-modal-header">
              <div className="rules-title-group">
                <div className="rules-icon-badge">
                  <HelpCircle size={24} color="#d97706" />
                </div>
                <div>
                  <h3 className="rules-modal-title">LUẬT CHƠI MÈO NỔ (CỖ BÀI 150 LÁ)</h3>
                  <p className="rules-modal-subtitle">Tư tưởng Hồ Chí Minh về Đoàn kết quốc tế • 6 Biệt Đội Tranh Tài</p>
                </div>
              </div>
              <button className="rules-close-btn" onClick={() => setShowRulesModal(false)} title="Đóng">
                <X size={20} />
              </button>
            </div>

            <div className="rules-scroll-body">
              {/* Mục tiêu */}
              <div className="rules-goal-banner">
                <span className="rules-goal-icon">🎯</span>
                <div>
                  <strong>MỤC TIÊU CHIẾN THẮNG:</strong> Vượt qua 18 câu hỏi trắc nghiệm, tích lũy điểm số qua Vòng Lật Bài Sinh Tử và bảo toàn tài sản để giành ngôi Quán quân cho nhóm!
                </div>
              </div>

              {/* Phần 1: Trình tự lượt chơi */}
              <div className="rules-section">
                <div className="rules-section-title sec-blue">
                  <span>1</span> TRÌNH TỰ LƯỢT CHƠI & QUYỀN RÚT BÀI
                </div>
                <div className="rules-steps-grid">
                  <div className="rules-step-card">
                    <div className="step-num">BƯỚC 1</div>
                    <div className="step-content">
                      <strong>Chọn câu hỏi</strong> từ bảng 18 ô trên đấu trường. Cả nhóm cùng thảo luận và chốt đáp án.
                    </div>
                  </div>
                  <div className="rules-step-card step-success">
                    <div className="step-num" style={{ color: '#15803d' }}>BƯỚC 2A</div>
                    <div className="step-content">
                      <strong style={{ color: '#15803d' }}>Trả lời ĐÚNG:</strong> Mở khóa bước vào <strong>Vòng Lật Bài Sinh Tử</strong> để tích lũy điểm!
                    </div>
                  </div>
                  <div className="rules-step-card step-danger">
                    <div className="step-num" style={{ color: '#b91c1c' }}>BƯỚC 2B</div>
                    <div className="step-content">
                      <strong style={{ color: '#b91c1c' }}>Trả lời SAI:</strong> Kích hoạt <strong>Lá Bài Ẩn Mèo Buồn</strong>: Bị phạt trừ <strong>-30 ĐIỂM</strong> vào tổng điểm và mất lượt ngay lập tức!
                    </div>
                  </div>
                  <div className="rules-step-card step-warning">
                    <div className="step-num" style={{ color: '#b45309' }}>BƯỚC 3</div>
                    <div className="step-content">
                      <strong>Quyết định rút / dừng:</strong> Sau mỗi lá bài an toàn, nhóm có quyền <strong>Rút Tiếp</strong> (gom thêm điểm nhưng có nguy cơ gặp bom) hoặc <strong>Cất Điểm</strong> (chuyển điểm an toàn vào ngân hàng nhóm).
                    </div>
                  </div>
                </div>
              </div>

              {/* Phần 2: Các Loại Bom & Sinh Tồn */}
              <div className="rules-section">
                <div className="rules-section-title sec-red">
                  <span>2</span> CÁC LOẠI BOM & BÙA HỘ MỆNH SINH TỒN
                </div>

                <div className="rules-bombs-grid">
                  <div className="rules-bomb-item bomb-deadly">
                    <div className="rules-bomb-icon">💣</div>
                    <div className="rules-bomb-info">
                      <div className="rules-bomb-name">Mèo Nổ Cảm Tử <span className="rules-tag-count">11 lá</span></div>
                      <div className="rules-bomb-desc">Nổ xóa sạch <strong>toàn bộ điểm dương về 0</strong>. ĐẶC BIỆT: Nếu nhóm đang có điểm âm (nợ), Mèo Nổ sẽ <strong>"xóa nợ" reset âm về 0</strong>!</div>
                    </div>
                  </div>

                  <div className="rules-bomb-item bomb-mini">
                    <div className="rules-bomb-icon">💥</div>
                    <div className="rules-bomb-info">
                      <div className="rules-bomb-name">Tiểu Mèo Nổ <span className="rules-tag-count">10 lá</span></div>
                      <div className="rules-bomb-desc">Nổ <strong>chia đôi 50% số điểm dương</strong>. ĐẶC BIỆT: Nếu đang có điểm âm, Tiểu Nổ cũng <strong>chia đôi nợ âm</strong> (-20đ còn -10đ, -30đ còn -15đ)!</div>
                    </div>
                  </div>

                  <div className="rules-bomb-item bomb-defuse">
                    <div className="rules-bomb-icon">🛠️</div>
                    <div className="rules-bomb-info">
                      <div className="rules-bomb-name">Thẻ Gỡ Bom <span className="rules-tag-count">5 lá</span></div>
                      <div className="rules-bomb-desc">Hóa giải hoàn toàn quả bom ➔ <strong>Điểm an toàn & được quyền Rút Tiếp hoặc Cất Điểm!</strong></div>
                    </div>
                  </div>

                  <div className="rules-bomb-item bomb-throw">
                    <div className="rules-bomb-icon">💣🔄</div>
                    <div className="rules-bomb-info">
                      <div className="rules-bomb-name">Thẻ Ném Bom <span className="rules-tag-count">3 lá</span></div>
                      <div className="rules-bomb-desc">Ném quả bom sang 1 nhóm đối thủ bất kỳ ➔ <strong>Bảo toàn trọn vẹn điểm số nhóm mình!</strong></div>
                    </div>
                  </div>

                  <div className="rules-bomb-item bomb-insurance">
                    <div className="rules-bomb-icon">🦺</div>
                    <div className="rules-bomb-info">
                      <div className="rules-bomb-name">Thẻ Bảo Hiểm <span className="rules-tag-count">4 lá</span></div>
                      <div className="rules-bomb-desc">Tự động kích hoạt khi dính bom mà không có Gỡ/Ném: <strong>Bom To chỉ mất một nửa điểm, Tiểu Bom chỉ mất một phần tư điểm!</strong></div>
                    </div>
                  </div>
                </div>

                <div className="rules-alert-banner">
                  <span className="rules-alert-icon">⚠️</span>
                  <div><strong>Quy tắc điểm âm & bom:</strong> Trả lời sai bị phạt -30đ hoặc bị cướp điểm có thể đưa điểm số về âm. Mèo Nổ To xóa nợ âm về 0, Tiểu Nổ chia đôi nợ âm, x2 chỉ nhân điểm dương, và Khiên chỉ chống kỹ năng đối thủ (không chặn được Mèo Nổ)!</div>
                </div>
              </div>

              {/* Phần 3: Thẻ phép & Tương tác */}
              <div className="rules-section">
                <div className="rules-section-title sec-purple">
                  <span>3</span> CÁC THẺ PHÉP & TƯƠNG TÁC ĐỐI THỦ
                </div>

                <div className="rules-cards-grid">
                  <div className="rules-card-pill pill-double">
                    <span className="pill-icon">⚡</span>
                    <div>
                      <strong>Nhân Đôi x2 <span className="pill-qty">(8 lá)</span></strong>
                      <p>Nhân đôi điểm lượt dương hiện tại và các lá rút tiếp theo (không nhân đôi điểm âm).</p>
                    </div>
                  </div>

                  <div className="rules-card-pill pill-steal">
                    <span className="pill-icon">🥷</span>
                    <div>
                      <strong>Cướp Điểm <span className="pill-qty">(8 lá)</span></strong>
                      <p>Hút 20 điểm từ 1 đối thủ vào điểm lượt này (có thể khiến đối thủ bị âm điểm).</p>
                    </div>
                  </div>

                  <div className="rules-card-pill pill-swap">
                    <span className="pill-icon">🔄</span>
                    <div>
                      <strong>Đổi Điểm <span className="pill-qty">(4 lá)</span></strong>
                      <p>Tráo đổi điểm số với 1 nhóm đối thủ (tính vào điểm lượt này).</p>
                    </div>
                  </div>

                  <div className="rules-card-pill pill-rocket">
                    <span className="pill-icon">🚀</span>
                    <div>
                      <strong>Mèo Pháo Kích <span className="pill-qty">(5 lá)</span></strong>
                      <p>Bắn tên lửa chia đôi số điểm của 1 nhóm đối thủ bất kỳ.</p>
                    </div>
                  </div>

                  <div className="rules-card-pill pill-shield">
                    <span className="pill-icon">🛡️</span>
                    <div>
                      <strong>Khiên Chắn <span className="pill-qty">(9 lá)</span></strong>
                      <p>Tự động chặn 1 lần bị đối thủ Cướp, Đổi điểm hoặc Pháo Kích.</p>
                    </div>
                  </div>

                  <div className="rules-card-pill pill-gift">
                    <span className="pill-icon">🎁</span>
                    <div>
                      <strong>Mèo Hào Hiệp <span className="pill-qty">(6 lá)</span></strong>
                      <p>Nhận ngay +30 điểm và tặng mỗi nhóm khác +5 điểm hữu nghị đoàn kết.</p>
                    </div>
                  </div>

                  <div className="rules-card-pill pill-peek">
                    <span className="pill-icon">🔍</span>
                    <div>
                      <strong>Thấu Thị <span className="pill-qty">(6 lá)</span></strong>
                      <p>Nhìn trước 3 lá bài tiếp theo trên đỉnh cỗ bài để lên kế hoạch.</p>
                    </div>
                  </div>

                  <div className="rules-card-pill pill-points">
                    <span className="pill-icon">🪙</span>
                    <div>
                      <strong>Thẻ Điểm Số <span className="pill-qty">(71 lá)</span></strong>
                      <p>Các thẻ +10, +20, +30, +50 điểm dồi dào giúp tích lũy điểm số.</p>
                    </div>
                  </div>

                  <div className="rules-card-pill pill-sad-cat" style={{ borderLeft: '5px solid #e11d48' }}>
                    <span className="pill-icon">😿</span>
                    <div>
                      <strong style={{ color: '#e11d48' }}>Mèo Buồn (Lá Ẩn) <span className="pill-qty" style={{ color: '#e11d48' }}>(Kích hoạt khi sai)</span></strong>
                      <p>Tự động phạt trừ -30 điểm vào tổng điểm và tước quyền lật bài khi trả lời sai câu hỏi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rules-modal-footer">
              <button className="btn btn-primary btn-lg" onClick={() => setShowRulesModal(false)}>
                <CheckCircle2 size={18} /> Đã hiểu luật, sẵn sàng chiến!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
