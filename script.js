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
  tables.forEach(table => {
    const btn = document.createElement("button");
    btn.classList.add("guest");
    btn.textContent = table.name;

    const pos = generatePosition();
    btn.style.top = `${pos.top*100}%`;
    btn.style.left = `${pos.left*100}%`;

    seatMap.appendChild(btn);
    btn.addEventListener("click", () => openModal(table));
  });
}

// =========================
// モーダル表示
function openModal(table) {
  seatView.classList.remove("is-hidden");
  guestView.classList.add("is-hidden");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  seatView.querySelector("h2").textContent = table.name;
  guestButtonsContainer.innerHTML = "";

  table.guests.forEach(guest => {
    const gBtn = document.createElement("button");
    gBtn.classList.add("guest-in-seat");
    gBtn.textContent = guest.name;
    gBtn.dataset.name = guest.name;
    gBtn.dataset.img = guest.img || "";
    gBtn.dataset.text = guest.text || "";
    gBtn.addEventListener("click", () => showGuestView(gBtn));
    guestButtonsContainer.appendChild(gBtn);
  });
}

// =========================
// 個人紹介表示
function showGuestView(button) {
  modalName.textContent = button.dataset.name || "";
  modalText.innerHTML = button.dataset.text || "";

  const imgSrc = button.dataset.img;
  modalImg.onload = null;
  modalImg.onerror = null;
  modalImg.style.display = "none";
  modalImg.src = "";

  if (imgSrc) {
    modalImg.onload = () => modalImg.style.display = "block";
    modalImg.onerror = () => modalImg.style.display = "none";
    modalImg.src = imgSrc;
  }

  seatView.classList.add("is-hidden");
  guestView.classList.remove("is-hidden");
}

// =========================
// モーダル制御
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
});
backBtn.addEventListener("click", () => {
  seatView.classList.remove("is-hidden");
  guestView.classList.add("is-hidden");
});
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
});

// =========================
// 画像ロード完了後にテーブル生成（スマホ対応）
function initSeatButtons() {
  function generateButtonsSafe() {
    if (!seatMapImg.complete || seatMapImg.naturalHeight === 0) {
      setTimeout(generateButtonsSafe, 50);
      return;
    }
    generateTableButtons();
  }
  generateButtonsSafe();
}

document.addEventListener("DOMContentLoaded", initSeatButtons);
