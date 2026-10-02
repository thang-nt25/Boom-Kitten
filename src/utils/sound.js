// Web Audio API Sound Synthesizer - 100% Offline & Reliable
class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  playTone(freq, type = 'sine', duration = 0.2, gainValue = 0.1, delay = 0) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const startTime = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(gainValue, startTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  // Click UI
  click() {
    this.playTone(600, 'triangle', 0.05, 0.08);
  }

  // Lật bài
  cardFlip() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.12);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  }

  // Trả lời đúng
  correct() {
    this.playTone(523.25, 'triangle', 0.15, 0.12, 0);     // C5
    this.playTone(659.25, 'triangle', 0.15, 0.12, 0.1);   // E5
    this.playTone(783.99, 'triangle', 0.2, 0.15, 0.2);    // G5
    this.playTone(1046.50, 'triangle', 0.35, 0.18, 0.3);  // C6
  }

  // Trả lời sai
  wrong() {
    this.playTone(220, 'sawtooth', 0.25, 0.15, 0);
    this.playTone(164.81, 'sawtooth', 0.4, 0.18, 0.2);
  }

  // Nhặt thẻ điểm thường
  point() {
    this.playTone(784, 'sine', 0.12, 0.1, 0);
    this.playTone(1174, 'sine', 0.22, 0.12, 0.08);
  }

  // Nhặt thẻ nhân đôi
  double() {
    this.playTone(440, 'triangle', 0.1, 0.12, 0);
    this.playTone(554.37, 'triangle', 0.1, 0.12, 0.08);
    this.playTone(659.25, 'triangle', 0.1, 0.12, 0.16);
    this.playTone(880, 'triangle', 0.25, 0.15, 0.24);
  }

  // BÙM - Nổ Bom
  bomb() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Low rumble
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.8);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.8);

    // Noise burst
    const bufferSize = this.ctx.sampleRate * 0.6;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, now);
    filter.frequency.exponentialRampToValueAtTime(100, now + 0.6);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);
    noise.start(now);
  }

  // Thẻ gỡ bom (Defuse)
  defuse() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.4);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.4);

    this.playTone(880, 'triangle', 0.2, 0.12, 0.3);
    this.playTone(1320, 'triangle', 0.3, 0.15, 0.45);
  }

  // Thẻ phép đặc biệt (Swap, Peek, Steal, Shield)
  magic() {
    const notes = [587.33, 739.99, 880.00, 1174.66, 1479.98];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'sine', 0.18, 0.1, idx * 0.08);
    });
  }

  // Cất điểm vào két (Bank Score)
  bank() {
    this.playTone(987.77, 'triangle', 0.1, 0.12, 0);       // B5
    this.playTone(1318.51, 'triangle', 0.25, 0.15, 0.08);  // E6
  }

  // Fanfare chiến thắng
  victory() {
    const notes = [
      { f: 523.25, d: 0.15, t: 0 },
      { f: 523.25, d: 0.15, t: 0.15 },
      { f: 523.25, d: 0.15, t: 0.3 },
      { f: 659.25, d: 0.35, t: 0.45 },
      { f: 587.33, d: 0.2, t: 0.8 },
      { f: 659.25, d: 0.2, t: 1.0 },
      { f: 783.99, d: 0.6, t: 1.2 }
    ];
    notes.forEach(n => {
      this.playTone(n.f, 'triangle', n.d, 0.18, n.t);
    });
  }
}

export const sound = new SoundSystem();
