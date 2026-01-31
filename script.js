// =========================
// ゲストデータ（A〜Hテーブル・歴代総理大臣仮データ）
// =========================

const tables = {
  "A": [
    { name: "小野 光太郎", relation: "高専時代友人", img: "images/test.png", description: "日本初代総理大臣です。テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト" },
    { name: "北向 拓人", relation: "高専時代友人", img: "images/test.png", description: "明治時代の総理です。" },
    { name: "南舘 克哉", relation: "高専時代友人", img: "images/test.png", description: "明治期の政治家です。" },
    { name: "日登 広大", relation: "高専時代友人", img: "images/test.png", description: "明治時代の総理です。" },
    { name: "西野 崇行", relation: "高専時代友人", img: "images/test.png", description: "明治期の政治家です。" },
    { name: "町屋 秀幸", relation: "高専時代友人", img: "images/test.png", description: "明治時代の総理です。" },
    { name: "大島 悠太", relation: "高専時代友人", img: "images/test.png", description: "明治期の政治家です。" },
    { name: "杉沢 直樹", relation: "後輩", img: "images/test.png", description: "明治期の政治家です。" }
  ],
  "B": [
    { name: "菅原 博人", relation: "team.NaCoTe", img: "images/test.png", description: "明治期の総理です。" },
    { name: "堀 夏樹", relation: "team.NaCoTe", img: "images/test.png", description: "大正期の総理です。" },
    { name: "福本 義久", relation: "team.NaCoTe", img: "images/test.png", description: "明治から大正にかけての総理です。" },
    { name: "野村 野村", relation: "team.NaCoTe", img: "images/test.png", description: "日露戦争期の総理です。" },
    { name: "青木 大地", relation: "team.NaCoTe", img: "images/test.png", description: "明治期の政治家です。" },
    { name: "及川 大志", relation: "team.NaCoTe", img: "images/test.png", description: "明治時代の総理です。" },
    { name: "小澤 萌", relation: "team.NaCoTe", img: "images/test.png", description: "明治期の政治家です。" },
    { name: "坂本 千咲", relation: "team.NaCoTe", img: "images/test.png", description: "明治期の政治家です。" }
  ],
  "C": [
    { name: "泉 雛花", relation: "大学時代友人", img: "images/test.png", description: "第一次世界大戦期の総理です。" },
    { name: "濱口 朝日", relation: "大学時代友人", img: "images/test.png", description: "大正期の軍人総理です。" },
    { name: "松井 千春", relation: "大学時代友人", img: "images/test.png", description: "明治時代の総理です。" },
    { name: "藤田 沙帆", relation: "大学時代友人", img: "images/test.png", description: "明治期の政治家です。" },
    { name: "深沢 弥生", relation: "大学時代友人", img: "images/test.png", description: "明治期の政治家です。" }
  ],
  "D": [
    { name: "坂巻 なつき", relation: "元同僚", img: "images/test.png", description: "政党内閣を築いた総理です。" },
    { name: "明珍 結佳", relation: "元同僚", img: "images/test.png", description: "昭和初期の総理です。" }
  ],
  "E": [
    { name: "浜野 竜太朗", relation: "元同僚", img: "images/test.png", description: "昭和期の総理です。" },
    { name: "宮田 隆平", relation: "元同僚", img: "images/test.png", description: "昭和初期の総理で暗殺されました。" },
    { name: "手塚 手塚", relation: "元同僚", img: "images/test.png", description: "昭和初期の総理です。" },
    { name: "羽賀 拓人", relation: "元同僚", img: "images/test.png", description: "昭和初期の総理です。" },
    { name: "寺島 隆太", relation: "元同僚", img: "images/test.png", description: "昭和初期の総理です。" },
    { name: "齋藤 ゆり", relation: "元同僚", img: "images/test.png", description: "政党内閣を築いた総理です。" },
    { name: "吉永 亜鐘", relation: "元同僚", img: "images/test.png", description: "昭和初期の総理です。" }
  ],
  "F": [
    { name: "田村 梨緒", relation: "team.NaCoTe", img: "images/test.png", description: "昭和初期の総理です。" },
    { name: "高橋 楓", relation: "team.NaCoTe", img: "images/test.png", description: "昭和期の総理です。" },
    { name: "田村 理子", relation: "team.NaCoTe", img: "images/test.png", description: "昭和初期の総理です。" },
    { name: "松崎　麻友", relation: "team.NaCoTe", img: "images/test.png", description: "昭和初期の総理です。" },
    { name: "南舘 菜七", relation: "team.NaCoTe", img: "images/test.png", description: "昭和初期の総理です。" },
    { name: "南舘 小春", relation: "友人娘", img: "images/test.png", description: "政党内閣を築いた総理です。" },
    { name: "南舘 日和", relation: "友人娘", img: "images/test.png", description: "昭和初期の総理です。" }
  ],
  "G": [
    { name: "山口 咲", relation: "高校時代友人", img: "images/test.png", description: "昭和20年の短期総理です。" },
    { name: "飯田 美喜", relation: "高校時代友人", img: "images/test.png", description: "戦後初期の総理です。" },
    { name: "秋吉 瑞季", relation: "高校時代友人", img: "images/test.png", description: "戦後の総理として有名です。" }
  ],
  "H": [
    { name: "水口 ゆりな", relation: "親戚", img: "images/test.png", description: "戦後の総理です。" },
    { name: "藤田 ありさ", relation: "親戚", img: "images/test.png", description: "昭和後期の総理です。" },
    { name: "多田 まりや", relation: "親戚", img: "images/test.png", description: "高度経済成長期の総理です。" },
    { name: "中島 凛音", relation: "親戚", img: "images/test.png", description: "昭和後期の総理です。" },
    { name: "中島 辰徳", relation: "親戚", img: "images/test.png", description: "昭和期の総理です。" },
    { name: "森 明美", relation: "親戚", img: "images/test.png", description: "昭和期の総理です。" }
  ],
  "I": [
    { name: "岩間 サヨ", relation: "新郎祖母", img: "images/test.png", description: "昭和20年の短期総理です。" },
    { name: "岩間 頌太朗", relation: "新郎兄", img: "images/test.png", description: "戦後初期の総理です。" },
    { name: "岩間 智美", relation: "新郎義姉", img: "images/test.png", description: "戦後の総理として有名です。" },
    { name: "岩間 朱里", relation: "新郎姪", img: "images/test.png", description: "高度経済成長期の総理です。" },
    { name: "岩間 蒼斗", relation: "新郎甥", img: "images/test.png", description: "昭和後期の総理です。" },
    { name: "岩間 孝雄", relation: "新郎父", img: "images/test.png", description: "昭和期の総理です。" },
    { name: "岩間 圭子", relation: "新郎母", img: "images/test.png", description: "昭和期の総理です。" }
  ],
  "J": [
    { name: "大矢 そら", relation: "親戚", img: "images/test.png", description: "戦後の総理です。" },
    { name: "大矢 彩生", relation: "親戚", img: "images/test.png", description: "昭和後期の総理です。" },
    { name: "大矢 聡子", relation: "新婦叔母", img: "images/test.png", description: "高度経済成長期の総理です。" },
    { name: "大矢 ともかず", relation: "新婦叔父", img: "images/test.png", description: "昭和後期の総理です。" },
    { name: "中山 タヅ", relation: "新婦祖母", img: "images/test.png", description: "昭和期の総理です。" },
    { name: "中島 広稀", relation: "新婦弟", img: "images/test.png", description: "昭和後期の総理です。" },
    { name: "中島 妙子", relation: "新婦母", img: "images/test.png", description: "昭和期の総理です。" },
    { name: "中島 静", relation: "新婦父", img: "images/test.png", description: "昭和期の総理です。" }
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
