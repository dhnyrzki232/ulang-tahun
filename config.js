/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Ajeng",
  photo: "./img/Ajeng.jpg",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Halo Sayang,",
      subtitle: "Nama kamu selalu jadi favoritku!",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",               // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Selamat ulang tahun yang ke-24!! :D",
    },
    {
      type: "chatbox",
      message:
        "Selamat ulang tahun ya! Di tanggal 16 September ini, aku doakan semoga tahun ini membawa banyak kebahagiaan, cinta, dan semua hal baik yang kamu impikan!",
      buttonText: "Kirim",
    },
    {
      type: "ideas",
      lines: [
        "Awalnya aku mau ngucapin biasa aja.",
        "Tapi terus aku mikir lagi...",
        "Aku ingin bikin sesuatu yang <strong>spesial</strong> buat kamu.",
        "Karena,",
        "Kamu sangat berarti buat aku <span>:)</span>",
      ],
      bigLetters: "JADI",
    },
    {
      type: "quote",
      text: "Semakin kita bersyukur dan merayakan hidup, semakin banyak hal indah dalam hidup yang bisa dirayakan.",
      author: "Oprah Winfrey",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy 24th Birthday, Love!",
      wishText: "Semoga di usiamu yang ke-24 ini, hari-harimu makin bahagia dan penuh dengan senyuman! ❤️",
    },
    {
      type: "fireworks",
      count: 24, // Disesuaikan dengan usianya (24)
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Nah, sekarang kasih tahu aku ya kalau kamu suka kejutan kecil ini.",
      replayText: "Atau klik di sini kalau kamu mau lihat ulang lagi.",
    },
  ],
};
