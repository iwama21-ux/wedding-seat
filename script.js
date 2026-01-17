// =========================
// 要素取得
// =========================
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

const seatView = document.querySelector(".seat-view");
const guestView = document.querySelector(".guest-view");

const modalName = document.getElementById("modal-name");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");

const guestButtonsContainer = document.querySelector(".guest-buttons");
const backBtn = document.querySelector(".back");

const seatMap = document.querySelector(".seat-map");
const seatMapImg = seatMap.querySelector("img");

// =========================
// テーブルデータ
// =========================
const tables = [
  { name: "テーブルA", guests: [
      { name: "田中 太郎", img: "images/tanaka.jpg", text: "新郎の大学時代の友人です。" },
      { name: "鈴木 花子", img: "images/test.png", text: "新婦の会社の先輩です。" }
    ]},
  ...Array.from({length: 9}, (_, i) => ({
    name: `テーブル${String.fromCharCode(66 + i)}`,
    guests: Array.from({length: 6}, (_, j) => ({
      name: `ゲスト${j+1}`,
      img: "",
      text: ""
    }))
  }))
];

const usedPositions = [];
let buttonsGenerated = false; // 重複生成防止

// =========================
// 座標生成（画像内ランダム）
function generatePosition() {
  let top, left, tries = 0;
  do {
    top = Math.random() * 0.5 + 0.25;   // 25%〜75%
    left = Math.random() * 0.6 + 0.2;   // 20%〜80%
    tries++;
    if (tries > 50) break;
  } while (usedPositions.some(p => Math.abs(p.top-top)<0.08 && Math.abs(p.left-left)<0.08));
  usedPositions.push({top, left});
  return {top, left};
}

// =========================
// テーブルボタン生成
function generateTableButtons() {
  // 既存のボタン削除
  seatMap.querySelectorAll(".guest").forEach(btn => btn.remove());
  usedPositions.length = 0;

  tables.forEach(table => {
    const btn = document.createElement("button");
    btn.classList
