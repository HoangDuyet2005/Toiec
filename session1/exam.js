// Reuse QUESTIONS from homework if possible, or define here
// For simplicity, we define the minimal needed data here
const QUESTIONS = Array.from({length: 20}, (_, i) => ({
  id: i + 1,
  image: `../anh20c/${i + 1}.png`,
  audio: `../Audio20c/part1_q${i + 1}.mp3`,
  // The correct answers corresponding to homework.js
  correct: ['A','B','D','D','C','C','D','A','D','C','D','C','D','C','C','D','B','C','A','B'][i]
}));

const STORAGE_KEY = 'toeic_b1_exam';
let userSelected = Array(20).fill(null);
let submitted = false;

// Audio Auto-play state
let isPlayingAll = false;
let currentPlayIdx = -1;
let audioInstance = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      userSelected = saved.selected || userSelected;
      submitted = saved.submitted || false;
    }
  } catch(e){}
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    selected: userSelected,
    submitted: submitted
  }));
}

function renderList() {
  const container = document.getElementById('examList');
  container.innerHTML = QUESTIONS.map((q, i) => `
    <div class="exam-card" id="card-${i}">
      <div class="exam-card-header">
        <span class="exam-q-num">Câu ${q.id}</span>
        <audio class="exam-audio" id="audio-${i}" src="${q.audio}" controls preload="none"></audio>
      </div>
      <div class="exam-card-body">
        <div class="exam-image">
          <img src="${q.image}" alt="Câu ${q.id}">
        </div>
        <div class="exam-options" id="opts-${i}">
          ${['A','B','C','D'].map(opt => `
            <div class="exam-bubble ${userSelected[i] === opt ? 'selected' : ''}" 
                 data-idx="${i}" data-opt="${opt}">
              ${opt}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Attach listeners
  document.querySelectorAll('.exam-bubble').forEach(b => {
    b.addEventListener('click', () => {
      if(submitted) return;
      const idx = parseInt(b.dataset.idx);
      const opt = b.dataset.opt;
      userSelected[idx] = opt;
      saveState();
      
      // Update UI for this question
      document.querySelectorAll(`.exam-bubble[data-idx="${idx}"]`).forEach(bub => {
        bub.classList.toggle('selected', bub.dataset.opt === opt);
      });
    });
  });

  if (submitted) showReviewHighlights();
}

function showReviewHighlights() {
  QUESTIONS.forEach((q, i) => {
    const sel = userSelected[i];
    document.querySelectorAll(`.exam-bubble[data-idx="${i}"]`).forEach(bub => {
      bub.classList.remove('selected', 'correct', 'wrong');
      const opt = bub.dataset.opt;
      if (opt === q.correct) {
        bub.classList.add('correct');
      } else if (opt === sel) {
        bub.classList.add('wrong');
      }
    });
  });
}

// Global Audio Logic
const playAllBtn = document.getElementById('playAllBtn');
const audioStatus = document.getElementById('audioStatus');

function playNextAudio() {
  if (!isPlayingAll) return;
  currentPlayIdx++;
  
  if (currentPlayIdx >= QUESTIONS.length) {
    stopPlayAll();
    audioStatus.textContent = "Đã phát xong toàn bộ";
    return;
  }
  
  // Scroll to current card
  const card = document.getElementById(`card-${currentPlayIdx}`);
  if(card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  audioStatus.textContent = `Đang phát câu ${currentPlayIdx + 1}...`;
  
  audioInstance = new Audio(QUESTIONS[currentPlayIdx].audio);
  audioInstance.play().catch(e => {
    console.error("Audio play failed", e);
    stopPlayAll();
    audioStatus.textContent = "Lỗi phát audio (cần tương tác với trang trước)";
  });
  
  audioInstance.onended = () => {
    if(isPlayingAll) {
      audioStatus.textContent = `Chờ câu tiếp theo...`;
      setTimeout(playNextAudio, 3000); // 3 seconds pause between questions
    }
  };
}

function stopPlayAll() {
  isPlayingAll = false;
  if(audioInstance) {
    audioInstance.pause();
    audioInstance = null;
  }
  playAllBtn.textContent = "▶ Phát Audio Liên Tục";
  playAllBtn.classList.remove('playing');
  audioStatus.textContent = "Đã dừng";
}

playAllBtn.addEventListener('click', () => {
  if (isPlayingAll) {
    stopPlayAll();
  } else {
    isPlayingAll = true;
    currentPlayIdx = -1;
    playAllBtn.textContent = "⏹ Dừng Phát";
    playAllBtn.classList.add('playing');
    playNextAudio();
  }
});

// Submit Logic
document.getElementById('submitBtn').addEventListener('click', () => {
  const doneCount = userSelected.filter(x => x !== null).length;
  if (doneCount < QUESTIONS.length) {
    if(!confirm(`Bạn mới làm ${doneCount}/${QUESTIONS.length} câu. Chắc chắn nộp?`)) return;
  }
  submitted = true;
  saveState();
  stopPlayAll();
  showResults();
});

function showResults() {
  let correctCount = 0;
  const breakdownHtml = QUESTIONS.map((q, i) => {
    const sel = userSelected[i];
    const isCorrect = sel === q.correct;
    if (isCorrect) correctCount++;
    
    let cls = 'empty';
    let text = '-';
    if (sel) {
      cls = isCorrect ? 'correct' : 'wrong';
      text = sel;
    }
    
    return `
      <div class="bd-item">
        <span class="bd-q">${q.id}</span>
        <span class="bd-ans ${cls}">${text}</span>
      </div>
    `;
  }).join('');
  
  document.getElementById('scoreNum').textContent = correctCount;
  document.getElementById('scoreLabel').textContent = correctCount >= 16 ? "Tuyệt vời!" : (correctCount >= 10 ? "Khá tốt!" : "Cần cố gắng thêm!");
  document.getElementById('examBreakdown').innerHTML = breakdownHtml;
  
  document.getElementById('resultOverlay').classList.add('active');
  showReviewHighlights();
}

document.getElementById('resultClose').addEventListener('click', () => {
  document.getElementById('resultOverlay').classList.remove('active');
});
document.getElementById('reviewBtn').addEventListener('click', () => {
  document.getElementById('resultOverlay').classList.remove('active');
});
document.getElementById('redoBtn').addEventListener('click', () => {
  if(!confirm('Làm lại từ đầu?')) return;
  userSelected = Array(20).fill(null);
  submitted = false;
  saveState();
  renderList();
  document.getElementById('resultOverlay').classList.remove('active');
  window.scrollTo(0,0);
});

// Init
loadState();
renderList();
if (submitted) {
  // Option: show modal immediately if already submitted
  // showResults(); 
}
