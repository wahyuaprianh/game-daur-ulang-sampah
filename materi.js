/*
  materi.js — Layar materi "Jenis-Jenis Sampah"
  Dipanggil lewat bukaMateri() (dari layar mulai atau layar kalah).
  Setelah selesai dibaca, tombol "MULAI PETUALANGAN" terbuka.
  Gaya visual mengikuti game: Quicksand, kartu putih berbingkai tebal,
  tombol "chunky" dengan sisi bawah, dan warna tong yang sama.
*/
(function () {
  "use strict";

  // Berapa lama status "sudah belajar" diingat:
  //   "tidak"     = terkunci lagi setiap halaman dibuka / di-refresh
  //   "sesi"      = diingat sampai tab ditutup (tetap terbuka saat refresh)
  //   "selamanya" = diingat terus di browser ini
  var INGAT = "selamanya";
  var KEY = "daur-ulang-learned";

  function store() {
    try {
      if (INGAT === "selamanya") return localStorage;
      if (INGAT === "sesi") return sessionStorage;
    } catch (e) { }
    return null;
  }

  /* Warna tiap topik
     c = warna utama (bingkai & tombol)   r = sisi bawah tombol
     d = warna judul/teks penting         bg = latar lembut
     t = warna teks tombol */
  var P = {
    intro: { c: "#039BE5", r: "#0277BD", d: "#01579B", bg: "#E1F5FE", t: "#fff" },
    organik: { c: "#4CAF50", r: "#2E7D32", d: "#2E7D32", bg: "#E8F5E9", t: "#fff", img: "assets/ORGANIK.png", name: "Organik" },
    anorganik: { c: "#FFC107", r: "#FFB300", d: "#946200", bg: "#FFF8E1", t: "#37474F", img: "assets/ANORGANIK.png", name: "Anorganik" },
    b3: { c: "#FF5252", r: "#D32F2F", d: "#C62828", bg: "#FFEBEE", t: "#fff", img: "assets/B3.png", name: "B3" },
    siap: { c: "#FF7043", r: "#E64A19", d: "#D84315", bg: "#FFF3E0", t: "#fff" }
  };

  var RINGKAS = {
    organik: "Dari makhluk hidup, mudah busuk",
    anorganik: "Buatan pabrik, sulit terurai",
    b3: "Mengandung bahan kimia berbahaya"
  };

  var SLIDES = [
    {
      p: "intro",
      hero: { emoji: "♻️" },
      title: "Kenali Jenis Sampah",
      lead: "Sampah adalah barang sisa yang sudah tidak dipakai. Kalau dibuang sembarangan, lingkungan jadi <b>kotor</b> dan tidak sehat.",
      bins: ["organik", "anorganik", "b3"],
      tip: "💡 Ada <b>3 jenis</b> sampah. Ayo kenali satu per satu!"
    },
    {
      p: "organik",
      hero: { img: P.organik.img, alt: "Tong sampah organik" },
      title: "Sampah Organik",
      lead: "Berasal dari makhluk hidup dan <b>mudah membusuk</b>. Bisa hancur dalam beberapa hari sampai beberapa bulan.",
      tiles: [["🍌", "Kulit pisang"], ["🍚", "Sisa nasi"], ["🥬", "Sisa sayur"], ["🍂", "Daun kering"], ["🐟", "Tulang ikan"]],
      tip: "💡 Bisa dijadikan <b>kompos</b> untuk menyuburkan tanaman. Tempat sampahnya berwarna <b>hijau</b>."
    },
    {
      p: "anorganik",
      hero: { img: P.anorganik.img, alt: "Tong sampah anorganik" },
      title: "Sampah Anorganik",
      lead: "Dibuat di pabrik dan <b>sulit membusuk</b>. Butuh puluhan sampai ratusan tahun untuk hilang dari alam.",
      tiles: [["🧴", "Botol plastik"], ["🥫", "Kaleng"], ["📰", "Koran"], ["🍾", "Botol kaca"], ["🛍️", "Kantong plastik"]],
      tip: "💡 Pilah lalu <b>daur ulang</b> atau pakai lagi. Tempat sampahnya berwarna <b>kuning</b>."
    },
    {
      p: "b3",
      hero: { img: P.b3.img, alt: "Tong sampah B3" },
      title: "Sampah B3",
      lead: "<b>B3</b> artinya <b>B</b>ahan <b>B</b>erbahaya dan <b>B</b>eracun. Bisa mencemari tanah dan air, juga berbahaya bagi tubuh.",
      tiles: [["🔋", "Baterai"], ["💡", "Lampu"], ["💊", "Obat kedaluwarsa"], ["🎨", "Cat"], ["📱", "Elektronik rusak"]],
      tip: "💡 Jangan dicampur sampah lain dan minta tolong orang dewasa. Tempat sampahnya berwarna <b>merah</b>."
    },
    {
      p: "siap",
      hero: { emoji: "🎮" },
      title: "Siap Bermain?",
      rows: ["organik", "anorganik", "b3"],
      tip: "🎯 Kumpulkan <b>{{TARGET}} poin</b> untuk menang. Salah memilah membuat nyawa berkurang. Selamat bermain!"
    }
  ];

  var CSS = `
#m-wrap{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;
  padding:calc(12px + env(safe-area-inset-top,0px)) calc(12px + env(safe-area-inset-right,0px)) calc(12px + env(safe-area-inset-bottom,0px)) calc(12px + env(safe-area-inset-left,0px));
  background:rgba(55,71,79,.7);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);
  font-family:'Quicksand',sans-serif;color:#37474F;outline:none}
#m-wrap *{box-sizing:border-box;font-family:inherit}

#m-card{position:relative;width:min(100%,480px);max-height:100%;overflow-y:auto;overscroll-behavior:contain;
  background:#fff;border:6px solid var(--c);border-radius:32px;box-shadow:0 12px 0 rgba(0,0,0,.2)}

/* Bagian atas: gambar besar di atas latar warna lembut */
.m-hero{position:relative;background:var(--bg);padding:18px 16px 14px;text-align:center;border-radius:0 0 28px 28px}
.m-hero img{display:block;margin:0 auto;height:clamp(84px,18vh,128px);width:auto;max-width:70%;object-fit:contain;
  filter:drop-shadow(0 6px 3px rgba(0,0,0,.12))}
.m-emoji{font-size:clamp(56px,12vh,84px);line-height:1.15}
.m-step{position:absolute;top:12px;left:14px;padding:2px 10px;background:#fff;border:2px solid var(--c);
  border-radius:9999px;font-size:13px;font-weight:800;color:var(--d)}
.m-x{position:absolute;top:8px;right:10px;width:40px;height:40px;padding:0;display:flex;align-items:center;justify-content:center;
  background:#fff;border:3px solid var(--c);border-radius:50%;color:var(--d);font-size:16px;font-weight:800;line-height:1;cursor:pointer}
.m-x:active{transform:translateY(2px)}

/* Isi */
.m-main{padding:16px 20px 6px;text-align:center}
.m-title{margin:0 0 8px;font-size:clamp(24px,6vw,30px);font-weight:800;line-height:1.15;color:var(--d)}
.m-lead{margin:0 0 14px;font-size:clamp(16px,4.2vw,18px);font-weight:600;line-height:1.5;color:#546E7A}
.m-lead b{color:var(--d);font-weight:800}

/* Contoh sampah: kartu kecil dengan emoji besar */
.m-tiles{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:0 0 14px}
.m-tile{flex:0 0 calc(33.333% - 6px);min-width:0;padding:8px 4px 7px;background:var(--bg);border:3px solid var(--c);
  border-radius:16px;font-size:clamp(11px,3vw,13px);font-weight:800;line-height:1.2;color:var(--d)}
.m-tile i{display:block;margin-bottom:3px;font-style:normal;font-size:clamp(26px,7vw,34px);line-height:1.2}
.m-tile img{display:block;margin:0 auto 4px;height:clamp(48px,10vh,64px);width:auto;max-width:100%;object-fit:contain}

/* Ringkasan di slide terakhir */
.m-rows{display:flex;flex-direction:column;gap:8px;margin:0 0 14px;text-align:left}
.m-row{display:flex;align-items:center;gap:12px;padding:8px 12px;background:var(--bg);border:3px solid var(--c);border-radius:16px;
  font-size:clamp(14px,3.8vw,16px);font-weight:600;line-height:1.3}
.m-row img{width:46px;height:46px;flex:none;object-fit:contain}
.m-row b{display:block;font-size:clamp(15px,4vw,17px);font-weight:800;color:var(--d)}

/* Kotak tips: sama seperti kotak "Fun Fact" di game */
.m-tip{margin:0 0 14px;padding:12px 14px;background:#FFF9E6;border:3px dashed #FFA000;border-radius:16px;
  text-align:left;font-size:clamp(14px,3.8vw,16px);font-weight:600;line-height:1.45;color:#37474F}
.m-tip b{color:var(--d);font-weight:800}

/* Bagian bawah: titik langkah + tombol (tetap terlihat saat layar pendek) */
.m-foot{position:sticky;bottom:0;padding:16px 20px 18px;background:linear-gradient(to bottom,rgba(255,255,255,0),#fff 14px)}
.m-dots{display:flex;justify-content:center;gap:8px;margin-bottom:12px}
.m-dots i{width:10px;height:10px;border-radius:9999px;background:#E0DACB;transition:width .25s,background .25s}
.m-dots i.on{width:28px;background:var(--c)}
.m-nav{display:flex;gap:10px}
.m-btn{min-height:52px;padding:10px 18px;border:none;border-bottom:6px solid var(--r);border-radius:9999px;
  background:var(--c);color:var(--t);font-size:clamp(17px,4.4vw,20px);font-weight:800;cursor:pointer;
  transition:transform .1s,border-width .1s}
.m-btn:active{transform:translateY(3px);border-bottom-width:3px}
.m-btn:focus-visible,.m-x:focus-visible{outline:3px solid var(--d);outline-offset:2px}
.m-next{flex:1.6}
.m-back{flex:1;background:#FFF9E6;color:#546E7A;border-bottom-color:#E5DFD0}

@keyframes mPop{from{transform:scale(.85);opacity:0}to{transform:none;opacity:1}}
@keyframes mIn{from{opacity:0;transform:translateX(14px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:no-preference){
  #m-card{animation:mPop .3s cubic-bezier(.175,.885,.32,1.275)}
  .m-fade{animation:mIn .25s ease-out}
}

/* HP landscape / layar pendek */
@media (max-height:560px){
  .m-hero{padding:10px 12px 8px}
  .m-hero img{height:64px}
  .m-emoji{font-size:44px}
  .m-main{padding:10px 18px 4px}
  .m-lead,.m-tiles,.m-rows,.m-tip{margin-bottom:8px}
  .m-tip{padding:8px 12px}
  .m-foot{padding:12px 18px 12px}
  .m-btn{min-height:46px}
}

/* Desktop / tablet / HP landscape: kartu lebar 2 kolom, tanpa scroll */
@media (min-width:700px) and (orientation:landscape){
  #m-card{width:min(100%,940px)}
  #m-content{display:grid;grid-template-columns:minmax(220px,32%) 1fr;align-items:stretch}
  .m-hero{position:static;display:flex;align-items:center;justify-content:center;
    padding:20px;border-radius:0 28px 28px 0}
  .m-hero img{height:clamp(110px,34vh,260px);max-width:90%}
  .m-emoji{font-size:clamp(72px,16vh,120px)}
  .m-step{position:absolute;top:14px;left:16px}
  .m-x{top:12px;right:14px}
  .m-main{display:flex;flex-direction:column;justify-content:center;padding:34px 30px 8px}
  .m-title{font-size:clamp(26px,3.4vw,34px)}
  .m-lead{font-size:clamp(16px,1.7vw,19px)}
  .m-tiles{flex-wrap:nowrap}
  .m-tile{flex:1 1 0;max-width:150px;font-size:clamp(12px,1.3vw,14px)}
  .m-tile i{font-size:clamp(28px,3.2vw,38px)}
  .m-tile img{height:clamp(52px,11vh,76px)}
  .m-tip{font-size:clamp(14px,1.4vw,16px)}
  .m-foot{padding:14px 30px 18px}
  .m-nav{max-width:520px;margin:0 auto}
}

/* Landscape yang tingginya pendek (HP landscape) */
@media (min-width:700px) and (orientation:landscape) and (max-height:560px){
  .m-hero{padding:10px}
  .m-hero img{height:clamp(70px,32vh,130px)}
  .m-emoji{font-size:56px}
  .m-main{padding:30px 24px 4px}
  .m-title{font-size:22px;margin-bottom:6px}
  .m-lead{font-size:14px;margin-bottom:8px}
  .m-tile{padding:5px 3px}
  .m-tile i{font-size:24px}
  .m-tile img{height:44px}
  .m-tip{font-size:13px;padding:7px 10px}
  .m-foot{padding:8px 24px 10px}
}
`;

  var wrap, card, content, dotsEl, back, next, idx = 0, opener = null;

  function target() {
    try { return typeof WIN_TARGET !== "undefined" ? WIN_TARGET : 150; } catch (e) { return 150; }
  }

  function heroHTML(s, i) {
    var h = s.hero, inner;
    if (h.img) {
      inner = '<img src="' + h.img + '" alt="' + h.alt + '" draggable="false" onerror="this.style.display=\'none\'">';
    } else {
      inner = '<div class="m-emoji" aria-hidden="true">' + h.emoji + '</div>';
    }
    return '<div class="m-hero">' +
      '<span class="m-step">' + (i + 1) + ' / ' + SLIDES.length + '</span>' +
      '<button type="button" class="m-x" aria-label="Tutup materi">✕</button>' +
      inner + '</div>';
  }

  function mainHTML(s) {
    var h = '<div class="m-main"><h2 class="m-title">' + s.title + '</h2>';
    if (s.lead) h += '<p class="m-lead">' + s.lead + '</p>';

    if (s.tiles) {
      h += '<div class="m-tiles">';
      s.tiles.forEach(function (t) {
        h += '<div class="m-tile"><i aria-hidden="true">' + t[0] + '</i>' + t[1] + '</div>';
      });
      h += '</div>';
    }

    if (s.bins) {
      h += '<div class="m-tiles">';
      s.bins.forEach(function (k) {
        var b = P[k];
        h += '<div class="m-tile" style="--c:' + b.c + ';--bg:' + b.bg + ';--d:' + b.d + '">' +
          '<img src="' + b.img + '" alt="" draggable="false">' + b.name + '</div>';
      });
      h += '</div>';
    }

    if (s.rows) {
      h += '<div class="m-rows">';
      s.rows.forEach(function (k) {
        var b = P[k];
        h += '<div class="m-row" style="--c:' + b.c + ';--bg:' + b.bg + ';--d:' + b.d + '">' +
          '<img src="' + b.img + '" alt="" draggable="false">' +
          '<div><b>' + b.name + '</b>' + RINGKAS[k] + '</div></div>';
      });
      h += '</div>';
    }

    if (s.tip) h += '<p class="m-tip">' + s.tip.replace("{{TARGET}}", target()) + '</p>';
    return h + '</div>';
  }

  function build() {
    opener = document.activeElement;

    var st = document.createElement("style");
    st.id = "m-css";
    st.textContent = CSS;
    document.head.appendChild(st);

    wrap = document.createElement("div");
    wrap.id = "m-wrap";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-modal", "true");
    wrap.setAttribute("aria-label", "Materi jenis-jenis sampah");
    wrap.setAttribute("tabindex", "-1");
    wrap.innerHTML =
      '<div id="m-card">' +
      '<div id="m-content"></div>' +
      '<div class="m-foot">' +
      '<div class="m-dots" id="m-dots"></div>' +
      '<div class="m-nav">' +
      '<button type="button" class="m-btn m-back" id="m-back">← Kembali</button>' +
      '<button type="button" class="m-btn m-next" id="m-next">Lanjut →</button>' +
      '</div>' +
      '</div>' +
      '</div>';

    card = wrap.querySelector("#m-card");
    content = wrap.querySelector("#m-content");
    dotsEl = wrap.querySelector("#m-dots");
    back = wrap.querySelector("#m-back");
    next = wrap.querySelector("#m-next");

    back.addEventListener("click", function () { go(-1); });
    next.addEventListener("click", function () { go(1); });

    // tombol ✕ (dibuat ulang tiap slide, jadi pakai event delegation)
    wrap.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest(".m-x")) close();
    });

    // geser kiri/kanan
    var sx = 0, sy = 0;
    wrap.addEventListener("touchstart", function (e) {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    }, { passive: true });
    wrap.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx;
      var dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    });

    // keyboard (Enter dibiarkan untuk tombol agar tidak lompat dua slide)
    wrap.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") close();
    });

    // muat gambar tong lebih dulu agar tidak berkedip
    ["organik", "anorganik", "b3"].forEach(function (k) { new Image().src = P[k].img; });

    document.body.appendChild(wrap);
    wrap.focus();
    render();
  }

  function render() {
    var s = SLIDES[idx];
    var pal = P[s.p];
    var last = idx === SLIDES.length - 1;

    card.style.setProperty("--c", pal.c);
    card.style.setProperty("--r", pal.r);
    card.style.setProperty("--d", pal.d);
    card.style.setProperty("--bg", pal.bg);
    card.style.setProperty("--t", pal.t);

    content.innerHTML = heroHTML(s, idx) + mainHTML(s);
    content.classList.remove("m-fade");
    void content.offsetWidth;
    content.classList.add("m-fade");
    card.scrollTop = 0;

    dotsEl.innerHTML = "";
    for (var n = 0; n < SLIDES.length; n++) {
      var d = document.createElement("i");
      if (n === idx) d.className = "on";
      dotsEl.appendChild(d);
    }

    back.style.display = idx === 0 ? "none" : "";
    next.textContent = last ? "Selesai ✓" : "Lanjut →";
  }

  function go(step) {
    if (!wrap) return;
    if (idx + step >= SLIDES.length) { finish(); return; }
    idx = Math.max(0, idx + step);
    render();
  }

  function finish() {
    close();
    unlockStart();
  }

  function close() {
    if (wrap && wrap.parentNode) wrap.parentNode.removeChild(wrap);
    wrap = null;
    var st = document.getElementById("m-css");
    if (st) st.remove();
    try { if (opener && opener.focus) opener.focus(); } catch (e) { }
    opener = null;
  }

  function unlockStart() {
    var btn = document.getElementById("start-btn");
    var hint = document.getElementById("lock-hint");
    if (btn) {
      btn.classList.remove("btn-locked");
      btn.disabled = false;
      btn.textContent = "MULAI PETUALANGAN!";
    }
    if (hint) hint.style.display = "none";

    // simpan status sudah belajar (sesuai pengaturan INGAT)
    var s = store();
    if (s) { try { s.setItem(KEY, "1"); } catch (e) { } }
  }

  // cek apakah sudah pernah belajar
  function checkLearned() {
    // buang penanda lama dari versi sebelumnya bila tidak lagi "selamanya"
    try { if (INGAT !== "selamanya") localStorage.removeItem(KEY); } catch (e) { }
    var s = store();
    try {
      if (s && s.getItem(KEY) === "1") unlockStart();
    } catch (e) { }
  }

  window.bukaMateri = function () {
    if (wrap) return;
    idx = 0;
    build();
  };

  // auto-check on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkLearned);
  } else {
    checkLearned();
  }
})();