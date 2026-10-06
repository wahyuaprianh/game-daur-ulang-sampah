const itemsData = [
    // Organik
    { type: 'organic', icon: '🍎', name: 'Apel' },
    { type: 'organic', icon: '🍌', name: 'Kulit Pisang' },
    { type: 'organic', icon: '🍂', name: 'Daun Kering' },
    { type: 'organic', icon: '🍉', name: 'Kulit Semangka' },
    { type: 'organic', icon: '🦴', name: 'Tulang Ikan' },
    { type: 'organic', icon: '🥚', name: 'Cangkang Telur' },
    
    // Anorganik
    { type: 'anorganic', icon: '🧴', name: 'Botol Plastik' },
    { type: 'anorganic', icon: '🥫', name: 'Kaleng' },
    { type: 'anorganic', icon: '🗞️', name: 'Kertas' },
    { type: 'anorganic', icon: '🥤', name: 'Gelas Plastik' },
    { type: 'anorganic', icon: '🛍️', name: 'Kantong Plastik' },
    { type: 'anorganic', icon: '📦', name: 'Kardus Bekas' },
    
    // B3
    { type: 'b3', icon: '🔋', name: 'Baterai' },
    { type: 'b3', icon: '💡', name: 'Bohlam' },
    { type: 'b3', icon: '📱', name: 'HP Rusak' },
    { type: 'b3', icon: '💊', name: 'Obat Kadaluarsa' },
    { type: 'b3', icon: '🖥️', name: 'Monitor Bekas' },
    { type: 'b3', icon: '🌡️', name: 'Termometer Rusak' }
];

const facts = [
    "Botol plastik butuh ratusan tahun untuk terurai di alam bebas!",
    "Sampah organik bisa dijadikan kompos untuk menyuburkan tanaman lho!",
    "Baterai bekas mengandung racun, buanglah di tempat khusus sampah B3!",
    "Kertas dibuat dari pohon. Mendaur ulang kertas berarti menyelamatkan hutan!",
    "Mendaur ulang 1 kaleng aluminium bisa menghemat energi untuk menyalakan TV selama 3 jam!"
];

const triviaQuestions = [
    { question: "Apakah sisa apel boleh dibuang ke tempat sampah organik?", answer: true },
    { question: "Apakah botol plastik air mineral termasuk sampah B3 (Berbahaya)?", answer: false },
    { question: "Apakah mendaur ulang kertas bisa menyelamatkan pohon?", answer: true },
    { question: "Baterai remote TV bekas boleh dibuang ke tong sampah organik?", answer: false },
    { question: "Apakah kaleng minuman aluminium bisa didaur ulang?", answer: true }
];

const WIN_TARGET = 150;

// Audio Context Generation (Simple synthesizers for SFX)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playSound(type) {
    if(audioCtx.state === 'suspended') audioCtx.resume();
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
    } else if (type === 'win') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.setValueAtTime(600, now + 0.1);
        osc.frequency.setValueAtTime(800, now + 0.2);
        gainNode.gain.setValueAtTime(0.5, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
    }
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
document.addEventListener('touchmove', onDragMove, {passive: false});
document.addEventListener('mouseup', onDragEnd);
document.addEventListener('touchend', onDragEnd);

function startGame() {
    playSound('pop');
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
    currentItemEl.addEventListener('touchstart', onDragStart, {passive: false});
    
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
    let newX = clientX - containerRect.left - dragOffsetX + (currentItemEl.clientWidth/2);
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
        playSound('win');
        winScoreEl.innerText = score;
        
        // Load random Fun Fact
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        winFactText.innerText = randomFact;
        
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
    currentTrivia = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
    triviaText.innerText = currentTrivia.question;
    triviaModal.classList.add('active');
}

function answerTrivia(playerAnswer) {
    triviaModal.classList.remove('active');
    
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
    floatEl.style.left = (rect.left - containerRect.left + (rect.width/2) - 20) + 'px';
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
        const startX = rect.left - containerRect.left + (rect.width/2);
        const startY = rect.top - containerRect.top + (rect.height/2);
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

// --- Environment (Time & Weather) ---
const timeCycle = ['morning', 'afternoon', 'evening', 'night'];
const weatherTypes = ['clear', 'rain', 'snow', 'autumn'];
let currentTimeIndex = 0;
let activeWeatherElements = [];

setInterval(() => {
    if(isPaused) return;
    
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
    
    for(let i=0; i<count; i++) {
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

