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
// モーダルを開く
// =========================

guestButtons.forEach(button => {
  button.addEventListener("click", () => {
    modalName.textContent = button.dataset.name || "";
    modalImg.src = button.dataset.img || "";
    modalText.textContent = button.dataset.text || "";

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // 背景スクロール防止
  });
});

// =========================
// モーダルを閉じる
// =========================

// ×ボタン
closeBtn.addEventListener("click", closeModal);

// 背景タップ
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

// =========================
// 画像がない場合の保険
// =========================

modalImg.addEventListener("error", () => {
  modalImg.style.display = "none";
});
