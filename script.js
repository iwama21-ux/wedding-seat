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
      { name: "田中 太郎", img: "images/tanaka.jpg", text: "新郎の大学時代の友人です。テストテストテスト" },
      { name: "鈴木 花子", img: "images/test.png", text: "新婦の会社の先輩です。テストテストテスト" }
    ]},
  // 追加9テーブル B〜J は6人デフォルト
  ...Array.from({length: 9}, (_, i) => ({
    name: `テーブル${String.fromCharCode(66 + i)}`,
    guests: Array.from({length: 6}, (_, j) => ({
      name: `ゲスト${j+1}`,
      img: "",
      text: ""
    }))
  }))
];

// 配置済み座標保存（簡易衝突回避）
const usedPositions = [];

// =========================
// 座標生成（ランダム・画像内）
// =========================
function generatePosition() {
  let top, left;
  let tries = 0;
  do {
    top = Math.random() * 0.6 + 0.2;   // 20%〜80%
    left = Math.random() * 0.7 + 0.15; // 15%〜85%
    tries++;
    if(tries>50) break; // 無限ループ防止
  } while (usedPositions.some(p => Math.abs(p.top-top)<0.08 && Math.abs(p.left-left)<0.08));
  usedPositions.push({top,left});
  return {top, left};
}

// =========================
// テーブルボタン生成
// =========================
function generateTableButtons() {
  tables.forEach(table => {
    const btn = document.createElement("button");
    btn.classList.add("guest");
    btn.textContent = table.name;

    const pos = generatePosition();
    btn.style.top = `${pos.top*100}%`;
    btn.style.left = `${pos.left*100}%`;

    seatMap.appendChild(btn);

    // クリックでモーダル表示
    btn.addEventListener("click", () => openModal(table));
  });
}

// =========================
// モーダル表示
// =========================
function openModal(table) {
  // モーダル表示
  seatView.classList.remove("is-hidden");
  guestView.classList.add("is-hidden");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  // テーブル名更新
  seatView.querySelector("h2").textContent = table.name;

  // 既存ゲストボタンをクリア
  guestButtonsContainer.innerHTML = "";

  // ゲストボタン生成
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
// =========================
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

// =========================
// イベント設定
// =========================
closeBtn.addEventListener("click", closeModal);
backBtn.addEventListener("click", () => {
  seatView.classList.remove("is-hidden");
  guestView.classList.add("is-hidden");
});
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

// =========================
// 画像ロード後にテーブルボタン生成
// =========================
seatMapImg.addEventListener("load", generateTableButtons);

// 画像がキャッシュされていてloadが発火しない場合用
if (seatMapImg.complete) {
  generateTableButtons();
}
