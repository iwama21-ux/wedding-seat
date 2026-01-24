// =========================
// ゲストデータ（A〜Hテーブル・歴代総理大臣仮データ）
// =========================

const tables = {
  "A": [
    { name: "伊藤 博文", relation: "歴代総理", img: "", description: "日本初代総理大臣です。" },
    { name: "黒田 清隆", relation: "歴代総理", img: "", description: "明治時代の総理です。" },
    { name: "山縣 有朋", relation: "歴代総理", img: "", description: "明治期の政治家です。" }
  ],
  "B": [
    { name: "松方 正義", relation: "歴代総理", img: "", description: "明治期の総理です。" },
    { name: "大隈 重信", relation: "歴代総理", img: "", description: "大正期の総理です。" },
    { name: "西園寺 公望", relation: "歴代総理", img: "", description: "明治から大正にかけての総理です。" },
    { name: "桂 太郎", relation: "歴代総理", img: "", description: "日露戦争期の総理です。" }
  ],
  "C": [
    { name: "山本 権兵衛", relation: "歴代総理", img: "", description: "第一次世界大戦期の総理です。" },
    { name: "寺内 正毅", relation: "歴代総理", img: "", description: "大正期の軍人総理です。" }
  ],
  "D": [
    { name: "原 敬", relation: "歴代総理", img: "", description: "政党内閣を築いた総理です。" },
    { name: "田中 義一", relation: "歴代総理", img: "", description: "昭和初期の総理です。" },
    { name: "濱口 雄幸", relation: "歴代総理", img: "", description: "昭和初期の内閣総理大臣です。" }
  ],
  "E": [
    { name: "若槻 禮次郎", relation: "歴代総理", img: "", description: "昭和期の総理です。" },
    { name: "犬養 毅", relation: "歴代総理", img: "", description: "昭和初期の総理で暗殺されました。" },
    { name: "斎藤 実", relation: "歴代総理", img: "", description: "昭和初期の総理です。" },
    { name: "岡田 啓介", relation: "歴代総理", img: "", description: "昭和初期の総理です。" },
    { name: "広田 弘毅", relation: "歴代総理", img: "", description: "昭和初期の総理です。" }
  ],
  "F": [
    { name: "林 銑十郎", relation: "歴代総理", img: "", description: "昭和初期の総理です。" },
    { name: "近衛 文麿", relation: "歴代総理", img: "", description: "昭和期の総理です。" }
  ],
  "G": [
    { name: "東久邇宮 稔彦王", relation: "歴代総理", img: "", description: "昭和20年の短期総理です。" },
    { name: "幣原 喜重郎", relation: "歴代総理", img: "", description: "戦後初期の総理です。" },
    { name: "吉田 茂", relation: "歴代総理", img: "", description: "戦後の総理として有名です。" }
  ],
  "H": [
    { name: "鳩山 一郎", relation: "歴代総理", img: "", description: "戦後の総理です。" },
    { name: "岸 信介", relation: "歴代総理", img: "", description: "昭和後期の総理です。" },
    { name: "池田 勇人", relation: "歴代総理", img: "", description: "高度経済成長期の総理です。" },
    { name: "佐藤 栄作", relation: "歴代総理", img: "", description: "昭和後期の総理です。" },
    { name: "田中 角栄", relation: "歴代総理", img: "", description: "昭和期の総理です。" }
  ]
};

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

  // 全てのゲストボタンを再表示
  document.querySelectorAll('#guest-list button').forEach(btn => {
    btn.style.display = 'inline-block';
  });
}

function showGuestView(guest) {
  modalName.textContent = guest.name;
  modalText.innerHTML = `
    <p><strong>関係性:</strong> ${guest.relation}</p>
    <p>${guest.description}</p>
  `;

  modalImg.style.display = "none";
  modalImg.src = "";

  if (guest.img) {
    modalImg.onload = () => modalImg.style.display = "block";
    modalImg.src = guest.img;
  }

  // 他のゲストボタンを非表示
  document.querySelectorAll('#guest-list button').forEach(btn => {
    if (btn.textContent !== guest.name) {
      btn.style.display = 'none';
    }
  });

  seatView.classList.add("is-hidden");
  guestView.classList.remove("is-hidden");
}

// =========================
// モーダル制御
// =========================

function openTable(tableId) {
  tableTitle.textContent = `テーブル${tableId}`;
  guestList.innerHTML = "";

  const guests = tables[tableId] || [];

  guests.forEach(guest => {
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
// イベント登録
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
