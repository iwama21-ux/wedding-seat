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

let buttonsGenerated = false;

// =========================
// テーブルボタン生成（固定2列配置）
// =========================
function generateTableButtons() {
  // 既存ボタン削除
  seatMap.querySelectorAll(".guest").forEach(btn => btn.remove());

  const cols = 2;
  const rows = Math.ceil(tables.length / cols);
  const leftPositions = ["30%", "70%"];
  const topGap = 80 / (rows + 1); // 上下余白10%ずつ

  tables.forEach((table, index) => {
    const btn = document.createElement("button");
    btn.classList.add("guest");
    btn.textContent = table.name;

    const col = index % cols;
    const row = Math.floor(index / cols);

    btn.style.left = leftPositions[col];
    btn.style.top = `${10 + topGap * (row + 1)}%`;

    seatMap.appendChild(btn);
    btn.addEventListener("click", () => openModal(table));
  });
}

// =========================
// モーダル表示
// =========================
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
// =========================
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
// 初期化
// =========================
function initSeatButtons() {
  if (buttonsGenerated) return;
  generateTableButtons();
  buttonsGenerated = true;
}

// 画像ロードを待たずに生成（スマホでも表示される）
initSeatButtons();
