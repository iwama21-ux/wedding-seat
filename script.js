// =========================
// ゲストデータ（ここを編集）
// =========================

const tables = {};

const TABLE_NAMES = ["A","B","C","D","E","F","G","H","I"];

TABLE_NAMES.forEach(table => {
  tables[table] = Array.from({ length: 8 }, (_, i) => ({
    name: `ゲスト${i + 1}`,
    img: "",
    text: `${table}テーブルのゲスト${i + 1}です。`
  }));
});

// =========================
// 要素取得
// =========================

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const tableTitle = document.getElementById("table-title");
const guestList = document.getElementById("guest-list");

const seatView = document.querySelector(".seat-view");
const guestView = document.querySelector(".guest-view");

const modalName = document.getElementById("modal-name");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const backBtn = document.querySelector(".back");

// =========================
// 表示切り替え
// =========================

function showSeatView() {
  seatView.classList.remove("is-hidden");
  guestView.classList.add("is-hidden");
}

function showGuestView(guest) {
  modalName.textContent = guest.name;
  modalText.textContent = guest.text;

  modalImg.style.display = "none";
  modalImg.src = "";

  if (guest.img) {
    modalImg.onload = () => modalImg.style.display = "block";
    modalImg.src = guest.img;
  }

  seatView.classList.add("is-hidden");
  guestView.classList.remove("is-hidden");
}

// =========================
// モーダル制御
// =========================

function openTable(tableId) {
  tableTitle.textContent = `テーブル${tableId}`;
  guestList.innerHTML = "";

  tables[tableId].forEach(guest => {
    const btn = document.createElement("button");
    btn.textContent = guest.name;
    btn.addEventListener("click", () => showGuestView(guest));
    guestList.appendChild(btn);
  });

  showSeatView();
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

// =========================
// イベント
// =========================

document.querySelectorAll(".table").forEach(btn => {
  btn.addEventListener("click", () => {
    openTable(btn.dataset.table);
  });
});

backBtn.addEventListener("click", showSeatView);
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
