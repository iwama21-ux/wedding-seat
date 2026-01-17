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

// ★ 安定版 個人表示
function showGuestView(button) {
  modalName.textContent = button.dataset.name || "";
  modalText.innerHTML = button.dataset.text || "";

  // ① いったん画像をリセット
  modalImg.style.display = "none";
  modalImg.src = "";

  const imgSrc = button.dataset.img;

  if (imgSrc) {
    // ② 読み込み成功時
    modalImg.onload = () => {
      modalImg.style.display = "block";
    };

    // ③ 読み込み失敗時
    modalImg.onerror = () => {
      modalImg.style.display = "none";
    };

    // ④ src を最後にセット（重要）
    modalImg.src = imgSrc;
  }

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

// テーブルクリック
tableButtons.forEach(btn => {
  btn.addEventListener("click", openModal);
});

// 名前クリック
guestButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    showGuestView(btn);
  });
});

// 戻る
backBtn.addEventListener("click", showSeatView);

// 閉じる
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) {
    closeModal();
  }
});
