const itemsData = [
    // ===== ORGANIK (15 item) =====
    { type: 'organic', icon: '🍖', name: 'Sisa Makanan' },
    { type: 'organic', icon: '🍂', name: 'Daun' },
    { type: 'organic', icon: '🪵', name: 'Ranting' },
    { type: 'organic', icon: '🍎', name: 'Buah' },
    { type: 'organic', icon: '🥬', name: 'Sayur' },
    { type: 'organic', icon: '🍌', name: 'Kulit Buah' },
    { type: 'organic', icon: '🥒', name: 'Kulit Sayur' },
    { type: 'organic', icon: '🍚', name: 'Sisa Nasi' },
    { type: 'organic', icon: '🦴', name: 'Tulang' },
    { type: 'organic', icon: '🥚', name: 'Cangkang Telur' },
    { type: 'organic', icon: '☕', name: 'Ampas Kopi' },
    { type: 'organic', icon: '🍵', name: 'Ampas Teh' },
    { type: 'organic', icon: '🥀', name: 'Bunga Layu' },
    { type: 'organic', icon: '🌿', name: 'Rumput' },
    { type: 'organic', icon: '🪚', name: 'Serbuk Kayu' },

    // ===== NON-ORGANIK (15 item) =====
    { type: 'anorganic', icon: '🛍️', name: 'Plastik' },
    { type: 'anorganic', icon: '🥫', name: 'Kaleng' },
    { type: 'anorganic', icon: '🪟', name: 'Kaca' },
    { type: 'anorganic', icon: '📦', name: 'Styrofoam' },
    { type: 'anorganic', icon: '🩹', name: 'Karet' },
    { type: 'anorganic', icon: '🧴', name: 'Botol Plastik' },
    { type: 'anorganic', icon: '🥤', name: 'Sedotan Plastik' },
    { type: 'anorganic', icon: '📦', name: 'Kardus' },
    { type: 'anorganic', icon: '🗞️', name: 'Kertas' },
    { type: 'anorganic', icon: '🗃️', name: 'Karton' },
    { type: 'anorganic', icon: '🍱', name: 'Kemasan Makanan' },
    { type: 'anorganic', icon: '🍬', name: 'Bungkus Permen' },
    { type: 'anorganic', icon: '🧃', name: 'Sachet Minuman' },
    { type: 'anorganic', icon: '🍶', name: 'Botol Kaca' },
    { type: 'anorganic', icon: '🔩', name: 'Tutup Botol' },

    // ===== B3 - Bahan Berbahaya dan Beracun (14 item) =====
    { type: 'b3', icon: '🔋', name: 'Baterai' },
    { type: 'b3', icon: '💡', name: 'Lampu' },
    { type: 'b3', icon: '☠️', name: 'Racun' },
    { type: 'b3', icon: '💊', name: 'Obat' },
    { type: 'b3', icon: '🛢️', name: 'Oli' },
    { type: 'b3', icon: '🧪', name: 'Pestisida' },
    { type: 'b3', icon: '🎨', name: 'Cat' },
    { type: 'b3', icon: '🖨️', name: 'Tinta Printer' },
    { type: 'b3', icon: '🧹', name: 'Cairan Pembersih' },
    { type: 'b3', icon: '🔌', name: 'Aki' },
    { type: 'b3', icon: '🧯', name: 'Aerosol/Spray' },
    { type: 'b3', icon: '🧴', name: 'Pemutih' },
    { type: 'b3', icon: '🧫', name: 'Disinfektan' },
    { type: 'b3', icon: '🪤', name: 'Lem' }
];

const facts = [
    "Botol plastik butuh ratusan tahun untuk terurai di alam bebas!",
    "Sampah organik bisa dijadikan kompos untuk menyuburkan tanaman lho!",
    "Baterai bekas mengandung racun, buanglah di tempat khusus sampah B3!",
    "Kertas dibuat dari pohon. Mendaur ulang kertas berarti menyelamatkan hutan!",
    "Mendaur ulang 1 kaleng aluminium bisa menghemat energi untuk menyalakan TV selama 3 jam!",
    "Ampas kopi bisa digunakan sebagai pupuk alami untuk tanaman!",
    "Styrofoam butuh lebih dari 500 tahun untuk terurai!",
    "Cat bekas termasuk limbah B3 dan tidak boleh dibuang ke saluran air!",
    "Serbuk kayu bisa dijadikan kompos atau bahan bakar biomassa!",
    "Oli bekas sangat berbahaya bagi lingkungan dan harus didaur ulang dengan benar!",
    "Kulit buah dan sayur adalah sumber kompos terbaik untuk kebun rumah!",
    "Pestisida bekas harus dikumpulkan dan diserahkan ke pengolah limbah B3!",
    "Sedotan plastik adalah salah satu sampah terbanyak di lautan!",
    "Cangkang telur kaya kalsium dan sangat bagus untuk menyuburkan tanah!",
    "Lampu neon mengandung merkuri yang sangat berbahaya bagi kesehatan!"
];

const triviaQuestions = [
    { question: "Apakah sisa nasi termasuk sampah organik?", answer: true },
    { question: "Apakah botol plastik air mineral termasuk sampah B3 (Berbahaya)?", answer: false },
    { question: "Apakah mendaur ulang kertas bisa menyelamatkan pohon?", answer: true },
    { question: "Baterai remote TV bekas boleh dibuang ke tong sampah organik?", answer: false },
    { question: "Apakah kaleng minuman aluminium bisa didaur ulang?", answer: true },
    { question: "Apakah ampas kopi termasuk sampah organik?", answer: true },
    { question: "Apakah cat bekas boleh dibuang ke tempat sampah biasa?", answer: false },
    { question: "Apakah styrofoam termasuk sampah non-organik?", answer: true },
    { question: "Apakah oli bekas termasuk sampah B3?", answer: true },
    { question: "Apakah rumput hasil pangkasan termasuk sampah organik?", answer: true },
    { question: "Apakah pestisida boleh dibuang ke saluran air?", answer: false },
    { question: "Apakah kardus bekas bisa didaur ulang?", answer: true },
    { question: "Apakah pemutih pakaian termasuk sampah B3?", answer: true },
    { question: "Apakah tulang ayam termasuk sampah non-organik?", answer: false },
    { question: "Apakah sachet minuman termasuk sampah organik?", answer: false }
];


const WIN_TARGET = 150;

// --- Background Music & Mute ---
const BGM_VOLUME = 0.4;
const BGM_VOLUME_TRIVIA = 0.15;

const bgm = new Audio('assets/bgm.mp3');
bgm.loop = true;
bgm.volume = BGM_VOLUME;
bgm.preload = 'auto';

// Sound effect kalah
const loseSfx = new Audio('assets/kalah.m4a');
loseSfx.volume = 0.7;
loseSfx.preload = 'auto';

// Sound effect menang
const winSfx = new Audio('assets/win.mp3');
winSfx.volume = 0.8;
winSfx.preload = 'auto';

let isMuted = false;
let gameActive = false; // true selama permainan berlangsung (belum menang / kalah)

// Ingat pilihan mute pemain
try {
    isMuted = localStorage.getItem('daur-ulang-muted') === '1';
} catch (e) { /* abaikan jika storage tidak tersedia */ }
bgm.muted = isMuted;
loseSfx.muted = isMuted;
winSfx.muted = isMuted;

function playBGM() { bgm.play().catch(() => { }); }
function pauseBGM() { bgm.pause(); }
function restartBGM() { bgm.currentTime = 0; playBGM(); }

// Hentikan suara menang/kalah (dipakai saat mulai ulang permainan)
function stopResultSfx() {
    winSfx.pause();
    winSfx.currentTime = 0;
    loseSfx.pause();
    loseSfx.currentTime = 0;
}

// Musik berhenti saat tab disembunyikan, lanjut saat kembali
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        pauseBGM();
    } else if (gameActive) {
        playBGM();
    }
});

// Audio Context Generation (Simple synthesizers for SFX)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playSound(type) {
    if (isMuted) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
        gainNode.gain.setValueAtTime(0.5, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.2);
        gainNode.gain.setValueAtTime(0.5, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'pop') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(400, now);
        gainNode.gain.setValueAtTime(0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
    }
    // Catatan: suara menang sekarang memakai file assets/win.mp3 (winSfx)
}

let score = 0;
let lives = 3;
let streak = 0;
let currentItemEl = null;
let currentItemData = null;
let itemY = 0;
let itemX = 0;
let isPaused = false;
let fallSpeed = 2;
let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;
let currentTrivia = null;
let hasUsedRevive = false;

const gameContainer = document.getElementById('game-container');
const gameArea = document.getElementById('game-area');
const scoreEl = document.getElementById('score');
const comboEl = document.getElementById('combo-multiplier');
const hearts = document.querySelectorAll('.heart');
const bins = document.querySelectorAll('.bin');
const muteBtn = document.getElementById('mute-btn');

// Modals
const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const winScreen = document.getElementById('win-screen');
const triviaModal = document.getElementById('trivia-modal');

// Modal Elements
const finalScoreEl = document.getElementById('final-score');
const winScoreEl = document.getElementById('win-score');
const winFactText = document.getElementById('win-fact-text');
const triviaText = document.getElementById('trivia-text');

// Buttons
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('restart-btn').addEventListener('click', startGame);
document.getElementById('win-restart-btn').addEventListener('click', startGame);
document.getElementById('btn-yes').addEventListener('click', () => answerTrivia(true));
document.getElementById('btn-no').addEventListener('click', () => answerTrivia(false));

// Mute / Unmute
function updateMuteButton() {
    muteBtn.innerText = isMuted ? '🔇' : '🔊';
    muteBtn.classList.toggle('muted', isMuted);
    muteBtn.setAttribute('aria-label', isMuted ? 'Nyalakan suara' : 'Matikan suara');
}

function toggleMute() {
    isMuted = !isMuted;
    bgm.muted = isMuted;
    loseSfx.muted = isMuted;
    winSfx.muted = isMuted;
    try {
        localStorage.setItem('daur-ulang-muted', isMuted ? '1' : '0');
    } catch (e) { /* abaikan */ }
    updateMuteButton();

    // Jika suara dinyalakan saat permainan berjalan, pastikan musik ikut jalan
    if (!isMuted && gameActive && bgm.paused) playBGM();
}

muteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMute();
});
// Cegah tombol mute memicu drag item
muteBtn.addEventListener('mousedown', (e) => e.stopPropagation());
muteBtn.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
updateMuteButton();

// Bin Click Support
bins.forEach(bin => {
    bin.addEventListener('click', (e) => {
        if (!currentItemEl || isPaused || isDragging) return;
        const selectedType = bin.getAttribute('data-type');
        handleSortAttempt(selectedType, bin);
    });
});

// Drag and Drop Events bound to document
document.addEventListener('mousemove', onDragMove);
document.addEventListener('touchmove', onDragMove, { passive: false });
document.addEventListener('mouseup', onDragEnd);
document.addEventListener('touchend', onDragEnd);

function startGame() {
    playSound('pop');
    gameActive = true;
    stopResultSfx(); // hentikan suara menang/kalah dari ronde sebelumnya
    bgm.volume = BGM_VOLUME;
    restartBGM();
    score = 0;
    lives = 3;
    streak = 0;
    hasUsedRevive = false;
    fallSpeed = window.innerHeight < 700 ? 1.5 : 2;
    updateUI();

    startScreen.classList.remove('active');
    gameOverScreen.classList.remove('active');
    winScreen.classList.remove('active');
    triviaModal.classList.remove('active');
    gameArea.innerHTML = '';

    isPaused = false;
    spawnItem();
    requestAnimationFrame(gameLoop);
}

function updateUI() {
    scoreEl.innerText = score;
    hearts.forEach((heart, index) => {
        if (index < lives) {
            heart.classList.add('active');
        } else {
            heart.classList.remove('active');
        }
    });

    if (streak >= 3) {
        comboEl.innerText = 'x' + Math.min(streak, 5); // Max cap display to x5
        comboEl.classList.add('active');
    } else {
        comboEl.classList.remove('active');
    }
}

function spawnItem() {
    if (currentItemEl) {
        currentItemEl.remove();
    }

    const randomItem = itemsData[Math.floor(Math.random() * itemsData.length)];
    currentItemData = randomItem;

    currentItemEl = document.createElement('div');
    currentItemEl.classList.add('falling-item');

    // Add Label and Icon
    currentItemEl.innerHTML = `
        <div class="item-icon">${randomItem.icon}</div>
        <div class="item-name">${randomItem.name}</div>
    `;

    itemY = -100;
    const maxX = gameArea.clientWidth - 80;
    itemX = Math.max(40, Math.random() * maxX);

    currentItemEl.style.top = itemY + 'px';
    currentItemEl.style.left = itemX + 'px';

    currentItemEl.addEventListener('mousedown', onDragStart);
    currentItemEl.addEventListener('touchstart', onDragStart, { passive: false });

    gameArea.appendChild(currentItemEl);
}

function gameLoop() {
    if (!isPaused) {
        if (currentItemEl && !isDragging) {
            itemY += fallSpeed;
            currentItemEl.style.top = itemY + 'px';
            currentItemEl.style.left = itemX + 'px';

            // Missed
            if (itemY > gameArea.clientHeight + 20) {
                loseLife();
            }
        }
    }

    if (lives > 0 && score < WIN_TARGET && !isPaused) {
        requestAnimationFrame(gameLoop);
    }
}

// Drag & Drop
function onDragStart(e) {
    if (isPaused) return;
    isDragging = true;
    currentItemEl.style.animation = 'none';
    currentItemEl.style.transform = 'scale(1.2)';

    let clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    let clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

    const rect = currentItemEl.getBoundingClientRect();
    dragOffsetX = clientX - rect.left;
    dragOffsetY = clientY - rect.top;
}

function onDragMove(e) {
    if (!isDragging || !currentItemEl) return;
    e.preventDefault();

    let clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    let clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

    const containerRect = gameArea.getBoundingClientRect();
    let newX = clientX - containerRect.left - dragOffsetX + (currentItemEl.clientWidth / 2);
    let newY = clientY - containerRect.top - dragOffsetY;

    currentItemEl.style.left = newX + 'px';
    currentItemEl.style.top = newY + 'px';

    bins.forEach(bin => {
        const binRect = bin.getBoundingClientRect();
        if (clientX >= binRect.left && clientX <= binRect.right &&
            clientY >= binRect.top && clientY <= binRect.bottom) {
            bin.classList.add('drag-over');
        } else {
            bin.classList.remove('drag-over');
        }
    });
}

function onDragEnd(e) {
    if (!isDragging || !currentItemEl) return;
    isDragging = false;
    currentItemEl.style.transform = 'scale(1)';
    currentItemEl.style.animation = 'wobble 3s ease-in-out infinite';

    let clientX = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
    let clientY = e.type.includes('touch') ? e.changedTouches[0].clientY : e.clientY;

    let droppedBin = null;
    bins.forEach(bin => {
        bin.classList.remove('drag-over');
        const binRect = bin.getBoundingClientRect();
        if (clientX >= binRect.left && clientX <= binRect.right &&
            clientY >= binRect.top && clientY <= binRect.bottom) {
            droppedBin = bin;
        }
    });

    if (droppedBin) {
        handleSortAttempt(droppedBin.getAttribute('data-type'), droppedBin);
    } else {
        itemX = parseFloat(currentItemEl.style.left);
        itemY = parseFloat(currentItemEl.style.top);
    }
}

// Game Mechanics
function handleSortAttempt(binType, targetBin) {
    if (binType === currentItemData.type) {
        playSound('correct');
        const points = streak >= 3 ? 20 : 10;
        score += points;
        streak++;

        updateUI();

        createFloatingText(targetBin, `+${points}`);
        createParticles(targetBin);

        currentItemEl.style.transform = 'scale(0)';
        currentItemEl.style.opacity = '0';

        targetBin.style.transform = 'scale(1.1)';
        setTimeout(() => targetBin.style.transform = '', 200);

        const oldEl = currentItemEl;
        currentItemEl = null;

        setTimeout(() => {
            oldEl.remove();
            checkWinState();
        }, 300);

    } else {
        loseLife();
    }
}

function loseLife() {
    playSound('wrong');
    lives--;
    streak = 0;
    updateUI();

    gameContainer.classList.add('shake');
    setTimeout(() => gameContainer.classList.remove('shake'), 400);

    const originalBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#FFEBEE';
    setTimeout(() => { document.body.style.backgroundColor = originalBg; }, 200);

    if (currentItemEl) {
        currentItemEl.remove();
        currentItemEl = null;
    }

    if (lives <= 0) {
        handleGameOverSequence();
    } else {
        setTimeout(spawnItem, 500);
    }
}

function checkWinState() {
    if (score >= WIN_TARGET) {
        isPaused = true;
        gameActive = false;
        pauseBGM();

        // Suara menang (assets/win.mp3), ikut aturan mute
        if (!isMuted) {
            winSfx.currentTime = 0;
            winSfx.play().catch(() => { });
        }

        winScoreEl.innerText = score;

        // Load random Fun Fact
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        winFactText.innerText = randomFact;

        // 🎉 Confetti burst!
        launchConfetti();

        winScreen.classList.add('active');
    } else {
        spawnItem();
    }
}

function handleGameOverSequence() {
    isPaused = true;

    // Trigger trivia if they haven't used their revive yet
    if (!hasUsedRevive) {
        showTrivia();
    } else {
        endGame();
    }
}

function showTrivia() {
    playSound('pop');
    hasUsedRevive = true;
    bgm.volume = BGM_VOLUME_TRIVIA; // kecilkan musik agar fokus ke pertanyaan
    currentTrivia = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
    triviaText.innerText = currentTrivia.question;
    triviaModal.classList.add('active');
}

function answerTrivia(playerAnswer) {
    triviaModal.classList.remove('active');
    bgm.volume = BGM_VOLUME;

    if (playerAnswer === currentTrivia.answer) {
        // Correct - Revive
        playSound('correct');
        lives = 1;
        updateUI();
        isPaused = false;
        setTimeout(spawnItem, 500);
        requestAnimationFrame(gameLoop);
    } else {
        // Wrong - Game Over
        playSound('wrong');
        setTimeout(endGame, 300);
    }
}

function endGame() {
    isPaused = true;
    gameActive = false;
    pauseBGM();
    // Mainkan suara kalah
    if (!isMuted) {
        loseSfx.currentTime = 0;
        loseSfx.play().catch(() => { });
    }
    finalScoreEl.innerText = score;
    gameOverScreen.classList.add('active');
}

// Juicy Effects
function createFloatingText(targetBin, text) {
    const rect = targetBin.getBoundingClientRect();
    const containerRect = gameContainer.getBoundingClientRect();
    const floatEl = document.createElement('div');
    floatEl.classList.add('floating-text');
    floatEl.innerText = text;
    floatEl.style.left = (rect.left - containerRect.left + (rect.width / 2) - 20) + 'px';
    floatEl.style.top = (rect.top - containerRect.top - 20) + 'px';
    gameContainer.appendChild(floatEl);
    setTimeout(() => floatEl.remove(), 1000);
}

function createParticles(targetBin) {
    const rect = targetBin.getBoundingClientRect();
    const containerRect = gameContainer.getBoundingClientRect();
    const colors = ['#FFD54F', '#4CAF50', '#29B6F6', '#FF5252'];
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        const startX = rect.left - containerRect.left + (rect.width / 2);
        const startY = rect.top - containerRect.top + (rect.height / 2);
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        const angle = Math.random() * Math.PI * 2;
        const velocity = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity - 50;
        gameContainer.appendChild(particle);
        particle.animate([
            { transform: `translate(0, 0) scale(1)`, opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
            duration: 600 + Math.random() * 400,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        }).onfinish = () => particle.remove();
    }
}

// --- Confetti Effect saat Menang ---
function launchConfetti() {
    const containerRect = gameContainer.getBoundingClientRect();
    const colors = [
        '#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF',
        '#FF6FB7', '#C084FC', '#22D3EE', '#FB923C',
        '#FBBF24', '#34D399', '#F472B6', '#60A5FA'
    ];
    const emojis = ['🎉', '🎊', '✨', '🌟', '⭐', '🏆', '♻️', '🎈'];

    // Wave 1 - Confetti pieces
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: absolute;
                width: ${6 + Math.random() * 8}px;
                height: ${6 + Math.random() * 14}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                pointer-events: none;
                z-index: 9999;
                left: ${Math.random() * 100}%;
                top: 100%;
            `;
            gameContainer.appendChild(confetti);

            const tx = (Math.random() - 0.5) * 300;
            const ty = -(200 + Math.random() * 400);
            const rot = Math.random() * 720 - 360;

            confetti.animate([
                { transform: 'translateY(0) rotate(0deg) scale(1)', opacity: 1 },
                { transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(0.3)`, opacity: 0 }
            ], {
                duration: 2000 + Math.random() * 2000,
                easing: 'cubic-bezier(0, .8, .3, 1)'
            }).onfinish = () => confetti.remove();
        }, Math.random() * 600);
    }

    // Wave 2 - Emoji confetti
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `
                position: absolute;
                font-size: ${16 + Math.random() * 20}px;
                pointer-events: none;
                z-index: 9999;
                left: ${Math.random() * 100}%;
                top: 100%;
            `;
            gameContainer.appendChild(emoji);

            const tx = (Math.random() - 0.5) * 250;
            const ty = -(250 + Math.random() * 350);
            const rot = Math.random() * 360;

            emoji.animate([
                { transform: 'translateY(0) rotate(0deg) scale(1)', opacity: 1 },
                { transform: `translate(${tx}px, ${ty * 0.5}px) rotate(${rot}deg) scale(1.5)`, opacity: 1, offset: 0.4 },
                { transform: `translate(${tx * 1.5}px, ${ty * 0.2}px) rotate(${rot * 2}deg) scale(0)`, opacity: 0 }
            ], {
                duration: 2500 + Math.random() * 1500,
                easing: 'cubic-bezier(0, .9, .3, 1)'
            }).onfinish = () => emoji.remove();
        }, 200 + Math.random() * 800);
    }

    // Wave 3 - Delayed second burst
    setTimeout(() => {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: absolute;
                    width: ${4 + Math.random() * 6}px;
                    height: ${8 + Math.random() * 10}px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    border-radius: 2px;
                    pointer-events: none;
                    z-index: 9999;
                    left: ${Math.random() * 100}%;
                    top: -10px;
                `;
                gameContainer.appendChild(confetti);

                const tx = (Math.random() - 0.5) * 150;
                const ty = containerRect.height + 50;
                const rot = Math.random() * 1080;

                confetti.animate([
                    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                    { transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg)`, opacity: 0.3 }
                ], {
                    duration: 3000 + Math.random() * 2000,
                    easing: 'cubic-bezier(.2, .8, .3, 1)'
                }).onfinish = () => confetti.remove();
            }, Math.random() * 400);
        }
    }, 800);
}

// --- Environment (Time & Weather) ---
const timeCycle = ['morning', 'afternoon', 'evening', 'night'];
const weatherTypes = ['clear', 'rain', 'snow', 'autumn'];
let currentTimeIndex = 0;
let activeWeatherElements = [];

setInterval(() => {
    if (isPaused) return;

    // Rotate time of day
    currentTimeIndex = (currentTimeIndex + 1) % timeCycle.length;
    timeCycle.forEach(c => gameContainer.classList.remove(c));
    gameContainer.classList.add(timeCycle[currentTimeIndex]);

    // Random Weather
    stopWeather();
    const newWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    if (newWeather !== 'clear') {
        startWeather(newWeather);
    }
}, 20000); // Change environment every 20 seconds

function startWeather(type) {
    const scenery = document.querySelector('.scenery');
    const count = type === 'rain' ? 40 : (type === 'snow' ? 30 : 20);

    // Apply environmental changes (mendung/cloudy or winter)
    if (type === 'rain') {
        gameContainer.classList.add('weather-overcast');
    } else if (type === 'snow') {
        gameContainer.classList.add('weather-winter');
    }

    for (let i = 0; i < count; i++) {
        let el = document.createElement('div');
        el.classList.add('particle-weather');

        if (type === 'rain') {
            el.classList.add('weather-rain');
            const dur = 0.3 + Math.random() * 0.4;
            el.style.animation = `fallRain ${dur}s linear infinite`;
        } else if (type === 'snow') {
            el.classList.add('weather-snow');
            const size = 4 + Math.random() * 6;
            el.style.width = size + 'px';
            el.style.height = size + 'px';
            const durFall = 3 + Math.random() * 4;
            const durSway = 2 + Math.random() * 2;
            el.style.animation = `fallSnow ${durFall}s linear infinite, swaySnow ${durSway}s ease-in-out infinite alternate`;
        } else if (type === 'autumn') {
            el.classList.add('weather-leaf');
            el.innerText = '🍂';
            const durFall = 4 + Math.random() * 3;
            const durSway = 2 + Math.random() * 2;
            el.style.animation = `fallLeaf ${durFall}s linear infinite, swayLeaf ${durSway}s ease-in-out infinite alternate`;
        }

        el.style.left = (Math.random() * 120 - 10) + '%';
        el.style.animationDelay = (Math.random() * 3) + 's';

        scenery.appendChild(el);
        activeWeatherElements.push(el);
    }
}

function stopWeather() {
    // Fade out smoothly instead of abrupt removal
    activeWeatherElements.forEach(d => {
        d.classList.add('fade-out');
        setTimeout(() => d.remove(), 3000);
    });
    activeWeatherElements = [];

    // Remove weather sky overrides
    gameContainer.classList.remove('weather-overcast');
    gameContainer.classList.remove('weather-winter');
}