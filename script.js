// =========================
// DOM読み込み後に実行
// =========================
document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // 要素取得
  // =========================
  const seatMap = document.querySelector(".seat-map");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  const seatView = document.querySelector(".seat-view");
  const guestView = document.querySelector(".guest-view");
  const modalName = document.getElementById("modal-name");
  const modalImg = document.getElementById("modal-img");
  const modalText = document.getElementById("modal-text");
  const guestButtonsContainer = document.querySelector(".guest-buttons");
  const backBtn = document.querySelector(".back");

  // =========================
  // テーブルデータ
  // =========================
  const tables = [
    {
      name: "テーブルA",
      guests: [
        {name:"田中 太郎", img:"images/tanaka.jpg", text:"新郎の大学時代の友人です。テストテストテスト"},
        {name:"鈴木 花子", img:"images/test.png", text:"新婦の会社の先輩です。テストテストテスト"}
      ]
    }
  ];

  // 追加9テーブルを生成（6名デフォルト）
  for(let i=2;i<=10;i++){
    const guests = [];
    for(let j=1;j<=6;j++){
      guests.push({name:`ゲスト${j}`, img:"", text:""});
    }
    tables.push({name:`テーブル${String.fromCharCode(64+i)}`, guests});
  }

  // =========================
  // 座標生成（画像上に散らす）
  // =========================
  const usedPositions = [];
  function generatePosition() {
    let top, left;
    let tries = 0;
    do {
      top = Math.random() * 60 + 20;  // 20〜80%
      left = Math.random() * 80 + 10; // 10〜90%
      tries++;
      if(tries>50) break; // 無限ループ防止
    } while(usedPositions.some(p=>Math.abs(p.top-top)<8 && Math.abs(p.left-left)<8));
    usedPositions.push({top,left});
    return {top,left};
  }

  // =========================
  // テーブルボタン生成
  // =========================
  tables.forEach(table => {
    const btn = document.createElement("button");
    btn.classList.add("guest");
    btn.textContent = table.name;

    const pos = generatePosition();
    btn.style.top = pos.top + "%";
    btn.style.left = pos.left + "%";

    seatMap.appendChild(btn);

    btn.addEventListener("click", () => {
      showSeatView(table);
      openModal();
    });
  });

  // =========================
  // モーダル内の席表示
  // =========================
  function showSeatView(table){
    seatView.querySelector("h2").textContent = table.name;
    guestButtonsContainer.innerHTML = "";

    table.guests.forEach(g => {
      const btn = document.createElement("button");
      btn.classList.add("guest-in-seat");
      btn.textContent = g.name;
      btn.dataset.name = g.name;
      btn.dataset.img = g.img;
      btn.dataset.text = g.text;

      btn.addEventListener("click", () => showGuestView(btn));

      guestButtonsContainer.appendChild(btn);
    });

    seatView.classList.remove("is-hidden");
    guestView.classList.add("is-hidden");
  }

  // =========================
  // 個人紹介表示
  // =========================
  function showGuestView(button){
    modalName.textContent = button.dataset.name || "";
    modalText.innerHTML = button.dataset.text || "";

    const imgSrc = button.dataset.img;

    modalImg.onload = null;
    modalImg.onerror = null;
    modalImg.style.display = "none";
    modalImg.src = "";

    if(imgSrc){
      modalImg.onload = () => { modalImg.style.display = "block"; };
      modalImg.onerror = () => { modalImg.style.display = "none"; };
      modalImg.src = imgSrc;
    }

    seatView.classList.add("is-hidden");
    guestView.classList.remove("is-hidden");
  }

  // =========================
  // モーダル制御
  // =========================
  function openModal(){
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeModal(){
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", e => {
    if(e.target === modal) closeModal();
  });

  backBtn.addEventListener("click", () => {
    seatView.classList.remove("is-hidden");
    guestView.classList.add("is-hidden");
  });

});
