

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
  modalText.innerHTML = button.dataset.text || "";

  const imgSrc = button.dataset.img;

  // 画像リセット
  modalImg.onload = null;
  modalImg.onerror = null;
  modalImg.style.display = "none";
  modalImg.src = "";

  if (imgSrc) {
    modalImg.onload = () => {
      modalImg.style.display = "block";
    };
    modalImg.onerror = () => {
      modalImg.style.display = "none";
    };
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

tableButtons.forEach(btn => btn.addEventListener("click", openModal));
guestButtons.forEach(btn => btn.addEventListener("click", () => showGuestView(btn)));
backBtn.addEventListener("click", showSeatView);

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
