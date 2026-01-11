// =========================
// 要素取得
// =========================

const modal = document.getElementById("modal");
const modalName = document.getElementById("modal-name");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");
const guestButtons = document.querySelectorAll(".guest");

// =========================
// モーダルを開く関数
// =========================

function openModal(button) {
  modalName.textContent = button.dataset.name || "";
  modalImg.src = button.dataset.img || "";
  modalText.textContent = button.dataset.text || "";

  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // 背景スクロール防止
}

// =========================
// モーダルを閉じる関数
// =========================

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

// =========================
// ゲストボタンのクリック
// =========================

guestButtons.forEach(button => {
  button.addEventListener("click", () => {
    openModal(button);
  });
});

// =========================
// 閉じるイベント
// =========================

// ×ボタン
closeBtn.addEventListener("click", closeModal);

// 背景タップ（モーダル外のエリア）
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// =========================
// 画像がない場合の保険
// =========================

modalImg.addEventListener("error", () => {
  modalImg.style.display = "none";
});
