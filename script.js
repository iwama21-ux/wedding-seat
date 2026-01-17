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

const tableButtons = document.querySelectorAll(".guest");
const guestButtons = document.querySelectorAll(".guest-in-seat");
const backBtn = document.querySelector(".back");

// =========================
// 表示切り替え
// =========================

function showSeatView() {
  seatView.classList.remove("is-hidden");
  guestView.classList.add("is-hidden");
}

function showGuestView(button) {
  modalName.textContent = button.dataset.name || "";

  // ★ 必ず表示状態をリセットする（重要）
  modalImg.style.display = "block";
  modalImg.src = button.dataset.img || "";

  modalText.innerHTML = button.dataset.text || "";

  seatView.classList.add("is-hidden");
  guestView.classList.remove("is-hidden");
}

// =========================
// モーダル制御
// =========================

function openModal() {
  showSeatView();
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

// =========================
// イベント設定
// =========================

// 席番号クリック（テーブルを開く）
tableButtons.forEach(btn => {
  btn.addEventListener("click", openModal);
});

// 席内の名前クリック（個人紹介）
guestButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    showGuestView(btn);
  });
});

// 「席に戻る」
backBtn.addEventListener("click", showSeatView);

// 閉じる（×）
closeBtn.addEventListener("click", closeModal);

// 背景クリックで閉じる
modal.addEventListener("click", e => {
  if (e.target === modal) {
    closeModal();
  }
});

// =========================
// 画像が読み込めなかった場合
// =========================

modalImg.addEventListener("error", () => {
  modalImg.style.display = "none";
});
