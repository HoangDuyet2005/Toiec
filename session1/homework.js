/* ===================================================================
   TOEIC A – Buổi 1: Homework JS
   Audio: ../Audio20c/part1_q{n}.mp3
   Images: ../anh20c/{n}.png
=================================================================== */

// ===== QUESTION DATA =====
const QUESTIONS = [
  {
    id: 1,
    image: '../anh20c/1.png',
    audio: '../Audio20c/part1_q1.mp3',
    options: [
      { letter: 'A', parts: ["They're ", "sitting", " on a ", "bench", "."] },
      { letter: 'B', parts: ["They're ", "lying on", " the ", "grass", "."] },
      { letter: 'C', parts: ["They're ", "riding", " their ", "bicycles", "."] },
      { letter: 'D', parts: ["They're ", "swimming", " in the ", "water", "."] },
    ],
    correct: 'A',
    vocab: [
      { word: 'bench', pron: '/bentʃ/' },
      { word: 'grass', pron: '/ɡræs/' },
      { word: 'bicycle', pron: '/ˈbaɪsɪkl/' },
      { word: 'swim', pron: '/swɪm/' },
    ],
  },
  {
    id: 2,
    image: '../anh20c/2.png',
    audio: '../Audio20c/part1_q2.mp3',
    options: [
      { letter: 'A', parts: ["One of the men is ", "putting on", " a ", "tie", "."] },
      { letter: 'B', parts: ["One of the men is ", "standing", " at a ", "counter", "."] },
      { letter: 'C', parts: ["One of the men is ", "setting", " a ", "briefcase", " on the floor."] },
      { letter: 'D', parts: ["One of the men is ", "typing", " on a ", "computer", "."] },
    ],
    correct: 'B',
    vocab: [
      { word: 'tie', pron: '/taɪ/' },
      { word: 'counter', pron: '/ˈkaʊntər/' },
      { word: 'briefcase', pron: '/ˈbriːfkeɪs/' },
      { word: 'computer', pron: '/kəmˈpjuːtər/' },
    ],
  },
  {
    id: 3,
    image: '../anh20c/3.png',
    audio: '../Audio20c/part1_q3.mp3',
    options: [
      { letter: 'A', parts: ["Customers are ", "waiting", " to be ", "seated", "."] },
      { letter: 'B', parts: ["Cars are parked ", "along the street", "."] },
      { letter: 'C', parts: ["A restaurant worker is ", "sweeping", " the ", "sidewalk", "."] },
      { letter: 'D', parts: ["Diners are sitting in an ", "outdoor", " cafe."] },
    ],
    correct: 'D',
    vocab: [
      { word: 'customer', pron: '/ˈkʌstəmər/' },
      { word: 'along', pron: '/əˈlɔːŋ/' },
      { word: 'restaurant', pron: '/ˈrestrɑːnt/' },
      { word: 'cafe', pron: '/kæˈfeɪ/' },
    ],
  },
  {
    id: 4,
    image: '../anh20c/4.png',
    audio: '../Audio20c/part1_q4.mp3',
    options: [
      { letter: 'A', parts: ["The man is taking some paper ", "out", " of a ", "printer", "."] },
      { letter: 'B', parts: ["The man is putting a ", "file", " in a ", "drawer", "."] },
      { letter: 'C', parts: ["The woman is ", "signing", " her name."] },
      { letter: 'D', parts: ["The people are reviewing a ", "document", "."] },
    ],
    correct: 'D',
    vocab: [
      { word: 'take out of', pron: '' },
      { word: 'printer', pron: '/ˈprɪntər/' },
      { word: 'file', pron: '/faɪl/' },
      { word: 'drawer', pron: '/drɔːr/' },
      { word: 'sign', pron: '/saɪn/' },
      { word: 'review', pron: '/rɪˈvjuː/' },
    ],
  },
  {
    id: 5,
    image: '../anh20c/5.png',
    audio: '../Audio20c/part1_q5.mp3',
    options: [
      { letter: 'A', parts: ["A man is ", "unloading", " some ", "packages", "."] },
      { letter: 'B', parts: ["A man is ", "resting", " in a ", "shopping mall", "."] },
      { letter: 'C', parts: ["Boxes have been ", "piled", " onto some ", "carts", "."] },
      { letter: 'D', parts: ["Items are being ", "arranged", " in a ", "store", "."] },
    ],
    correct: 'C',
    vocab: [
      { word: 'unload', pron: '/ˌʌnˈləʊd/' },
      { word: 'package', pron: '/ˈpækɪdʒ/' },
      { word: 'rest', pron: '/rest/' },
      { word: 'item', pron: '/ˈaɪtəm/' },
      { word: 'arrange', pron: '/əˈreɪndʒ/' },
    ],
  },
  {
    id: 6,
    image: '../anh20c/6.png',
    audio: '../Audio20c/part1_q6.mp3',
    options: [
      { letter: 'A', parts: ["A sign is ", "hanging", " above some ", "artwork", "."] },
      { letter: 'B', parts: ["Plants are ", "arranged", " on a ", "stairway", "."] },
      { letter: 'C', parts: ["A round table is ", "surrounded", " by ", "chairs", "."] },
      { letter: 'D', parts: ["An area rug has been ", "rolled up", "."] },
    ],
    correct: 'C',
    vocab: [
      { word: 'artwork', pron: '/ˈɑːrtwɜːrk/' },
      { word: 'stairway', pron: '/ˈsterweɪ/' },
      { word: 'surround', pron: '/səˈraʊnd/' },
      { word: 'area rug', pron: '/ˈeriə rʌɡ/' },
    ],
  },
  {
    id: 7,
    image: '../anh20c/7.png',
    audio: '../Audio20c/part1_q7.mp3',
    options: [
      { letter: 'A', parts: ["A man is ", "placing", " a ", "basket", " on a ", "shelf", "."] },
      { letter: 'B', parts: ["Labels have been ", "attached", " to shelving ", "units", "."] },
      { letter: 'C', parts: ["A man is ", "opening", " the door of a ", "cabinet", "."] },
      { letter: 'D', parts: ["Some ", "newspapers", " have been ", "piled", " on the floor."] },
    ],
    correct: 'D',
    vocab: [
      { word: 'basket', pron: '/ˈbæskɪt/' },
      { word: 'shelf', pron: '/ʃelf/' },
      { word: 'label', pron: '/ˈleɪbl/' },
      { word: 'attach', pron: '/əˈtætʃ/' },
      { word: 'cabinet', pron: '/ˈkæbɪnət/' },
      { word: 'pile', pron: '/paɪl/' },
    ],
  },
  {
    id: 8,
    image: '../anh20c/8.png',
    audio: '../Audio20c/part1_q8.mp3',
    options: [
      { letter: 'A', parts: ["", "Lampposts", " are standing in a row."] },
      { letter: 'B', parts: ["A ", "crowd", " of people has gathered on a ", "beach", "."] },
      { letter: 'C', parts: ["A garden has been ", "planted", " on a ", "rooftop", "."] },
      { letter: 'D', parts: ["The roadway is ", "full of", " vehicles."] },
    ],
    correct: 'A',
    vocab: [
      { word: 'lamppost', pron: '/ˈlæmp pəʊst/' },
      { word: 'row', pron: '/rəʊ/' },
      { word: 'crowd', pron: '/kraʊd/' },
      { word: 'gather', pron: '/ˈɡæðər/' },
      { word: 'rooftop', pron: '/ˈruːftɑːp/' },
      { word: 'roadway', pron: '/ˈrəʊdweɪ/' },
      { word: 'vehicle', pron: '/ˈviːəkl/' },
    ],
  },
  {
    id: 9,
    image: '../anh20c/9.png',
    audio: '../Audio20c/part1_q9.mp3',
    options: [
      { letter: 'A', parts: ["An ", "employee", " is ", "organizing", " a shoe display."] },
      { letter: 'B', parts: ["Merchandise is being ", "put", " into a bag."] },
      { letter: 'C', parts: ["Some ", "footwear", " is being ", "scanned", " by a cashier."] },
      { letter: 'D', parts: ["A customer is ", "trying on", " a pair of shoes."] },
    ],
    correct: 'D',
    vocab: [
      { word: 'employee', pron: '/ɪmˈplɔɪiː/' },
      { word: 'organize', pron: '/ˈɔːrɡənaɪz/' },
      { word: 'merchandise', pron: '/ˈmɜːrtʃəndaɪs/' },
      { word: 'footwear', pron: '/ˈfʊtwer/' },
      { word: 'cashier', pron: '/kæˈʃɪr/' },
    ],
  },
  {
    id: 10,
    image: '../anh20c/10.png',
    audio: '../Audio20c/part1_q10.mp3',
    options: [
      { letter: 'A', parts: ["Trees are ", "growing", " under an ", "archway", "."] },
      { letter: 'B', parts: ["Passengers are ", "waiting", " to ", "board", " a train."] },
      { letter: 'C', parts: ["A high wall ", "runs", " alongside the train tracks."] },
      { letter: 'D', parts: ["A ", "train", " is about to go over a ", "bridge", "."] },
    ],
    correct: 'C',
    vocab: [
      { word: 'grow', pron: '/ɡrəʊ/' },
      { word: 'passenger', pron: '/ˈpæsɪndʒər/' },
      { word: 'alongside', pron: '/əˌlɔːŋˈsaɪd/' },
      { word: 'bridge', pron: '/brɪdʒ/' },
    ],
  },
  {
    id: 11,
    image: '../anh20c/11.png',
    audio: '../Audio20c/part1_q11.mp3',
    options: [
      { letter: 'A', parts: ["They're ", "shaking", " hands."] },
      { letter: 'B', parts: ["They're ", "waving", " to one another."] },
      { letter: 'C', parts: ["They're ", "walking", " around a tree."] },
      { letter: 'D', parts: ["They're ", "walking", " side by side."] },
    ],
    correct: 'D',
    vocab: [
      { word: 'shake hands', pron: '' },
      { word: 'wave', pron: '/weɪv/' },
      { word: 'one another', pron: '' },
      { word: 'around', pron: '/əˈraʊnd/' },
    ],
  },
  {
    id: 12,
    image: '../anh20c/12.png',
    audio: '../Audio20c/part1_q12.mp3',
    options: [
      { letter: 'A', parts: ["He's ", "riding", " a motorcycle."] },
      { letter: 'B', parts: ["He's ", "walking", " to the bike shop."] },
      { letter: 'C', parts: ["He's ", "working", " in a repair shop."] },
      { letter: 'D', parts: ["He's getting a ", "tool", " from a shelf."] },
    ],
    correct: 'C',
    vocab: [
      { word: 'motorcycle', pron: '/ˈməʊtərsaɪkl/' },
      { word: 'walk', pron: '/wɔːk/' },
      { word: 'work', pron: '/wɜːrk/' },
      { word: 'tool', pron: '/tuːl/' },
      { word: 'shelf', pron: '/ʃelf/' },
    ],
  },
  {
    id: 13,
    image: '../anh20c/13.png',
    audio: '../Audio20c/part1_q13.mp3',
    options: [
      { letter: 'A', parts: ["Customers are ", "lined up", " to pay for their books."] },
      { letter: 'B', parts: ["The people are ", "standing", " at a table."] },
      { letter: 'C', parts: ["There are boxes ", "stacked", " on the table."] },
      { letter: 'D', parts: ["Many books are ", "on display", "."] },
    ],
    correct: 'D',
    vocab: [
      { word: 'stack', pron: '/stæk/' },
      { word: 'display', pron: '/dɪˈspleɪ/' },
      { word: 'line up', pron: '' },
    ],
  },
  {
    id: 14,
    image: '../anh20c/14.png',
    audio: '../Audio20c/part1_q14.mp3',
    options: [
      { letter: 'A', parts: ["He's sorting ", "papers", " into a pile."] },
      { letter: 'B', parts: ["He's straightening his ", "tie", "."] },
      { letter: 'C', parts: ["He's ", "leaning", " over his desk."] },
      { letter: 'D', parts: ["He's ", "opening", " a folder in front of him."] },
    ],
    correct: 'C',
    vocab: [
      { word: 'straighten', pron: '/ˈstreɪtn/' },
      { word: 'lean', pron: '/liːn/' },
      { word: 'folder', pron: '/ˈfəʊldər/' },
    ],
  },
  {
    id: 15,
    image: '../anh20c/15.png',
    audio: '../Audio20c/part1_q15.mp3',
    options: [
      { letter: 'A', parts: ["The traffic is ", "moving", " through the city."] },
      { letter: 'B', parts: ["The vehicles are ", "entering", " the tunnel."] },
      { letter: 'C', parts: ["The buses are ", "parked", " in a row."] },
      { letter: 'D', parts: ["The buildings have no ", "windows", "."] },
    ],
    correct: 'C',
    vocab: [
      { word: 'traffic', pron: '/ˈtræfɪk/' },
      { word: 'tunnel', pron: '/ˈtʌnl/' },
      { word: 'row', pron: '/rəʊ/' },
    ],
  },
  {
    id: 16,
    image: '../anh20c/16.png',
    audio: '../Audio20c/part1_q16.mp3',
    options: [
      { letter: 'A', parts: ["They're ", "building", " a fence."] },
      { letter: 'B', parts: ["They're ", "setting up", " chairs."] },
      { letter: 'C', parts: ["They're ", "camping", " in tents."] },
      { letter: 'D', parts: ["They're ", "using", " umbrellas."] },
    ],
    correct: 'D',
    vocab: [
      { word: 'fence', pron: '/fens/' },
      { word: 'set up', pron: '' },
      { word: 'umbrella', pron: '/ʌmˈbrelə/' },
    ],
  },
  {
    id: 17,
    image: '../anh20c/17.png',
    audio: '../Audio20c/part1_q17.mp3',
    options: [
      { letter: 'A', parts: ["He's ", "fishing", " from a boat."] },
      { letter: 'B', parts: ["He's ", "looking at", " a pile of fish."] },
      { letter: 'C', parts: ["He's ", "eating", " from a dish."] },
      { letter: 'D', parts: ["He's ", "standing", " on a scale."] },
    ],
    correct: 'B',
    vocab: [
      { word: 'fish', pron: '/fɪʃ/' },
      { word: 'pile', pron: '/paɪl/' },
      { word: 'scale', pron: '/skeɪl/' },
    ],
  },
  {
    id: 18,
    image: '../anh20c/18.png',
    audio: '../Audio20c/part1_q18.mp3',
    options: [
      { letter: 'A', parts: ["The bed has not been ", "made", " today."] },
      { letter: 'B', parts: ["The ", "curtains", " have been ", "closed", "."] },
      { letter: 'C', parts: ["There's a ", "picture", " hanging on the wall."] },
      { letter: 'D', parts: ["There's a ", "lamp", " at the foot of the bed."] },
    ],
    correct: 'C',
    vocab: [
      { word: 'curtain', pron: '/ˈkɜːrtn/' },
      { word: 'picture', pron: '/ˈpɪktʃər/' },
    ],
  },
  {
    id: 19,
    image: '../anh20c/19.png',
    audio: '../Audio20c/part1_q19.mp3',
    options: [
      { letter: 'A', parts: ["People are ", "waiting", " next to the vehicle."] },
      { letter: 'B', parts: ["The vehicle is ", "pulling", " into a garage."] },
      { letter: 'C', parts: ["The vehicle's ", "windows", " are being cleaned."] },
      { letter: 'D', parts: ["People are ", "crossing", " the street."] },
    ],
    correct: 'A',
    vocab: [
      { word: 'vehicle', pron: '/ˈviːəkl/' },
      { word: 'garage', pron: '/ɡəˈrɑːʒ/' },
      { word: 'cross', pron: '/krɔːs/' },
    ],
  },
  {
    id: 20,
    image: '../anh20c/20.png',
    audio: '../Audio20c/part1_q20.mp3',
    options: [
      { letter: 'A', parts: ["The ", "tables", " in the ", "restaurant", " are round."] },
      { letter: 'B', parts: ["The ", "chairs", " have been ", "pushed", " in."] },
      { letter: 'C', parts: ["The restaurant is ", "full of", " diners."] },
      { letter: 'D', parts: ["There's a ", "window", " next to the ", "door", "."] },
    ],
    correct: 'B',
    vocab: [
      { word: 'restaurant', pron: '/ˈrestrɑːnt/' },
      { word: 'push in', pron: '/pʊʃ/' },
      { word: 'diner', pron: '/ˈdaɪnər/' },
    ],
  },
];

// ===== STATE =====
const STORAGE_KEY = 'toeic_b1_hw';
let currentIdx = 0;
let submitted   = false;
let reviewMode  = false;

// userInputs[qIdx][optLetter][blankIdx] = string
// userSelected[qIdx] = 'A'|'B'|'C'|'D'|null
let userInputs   = Array.from({ length: 20 }, () => ({}));
let userSelected = Array(20).fill(null);

// Load saved state
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved) {
      userInputs   = saved.inputs   || userInputs;
      userSelected = saved.selected || userSelected;
    }
  } catch (_) {}
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    inputs: userInputs, selected: userSelected,
  }));
}

// ===== HELPERS =====
function normalize(s) {
  return (s || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function isQuestionDone(idx) {
  const q = QUESTIONS[idx];
  if (!userSelected[idx]) return false;
  for (const opt of q.options) {
    if (!userInputs[idx][opt.letter]) return false;
    const blanks = opt.parts.filter((_, i) => i % 2 === 1);
    for (let b = 0; b < blanks.length; b++) {
      if (!userInputs[idx][opt.letter][b]) return false;
    }
  }
  return true;
}

function countDone() {
  return QUESTIONS.reduce((acc, _, i) => acc + (isQuestionDone(i) ? 1 : 0), 0);
}

// ===== RENDER =====
function renderQuestion(idx) {
  const q   = QUESTIONS[idx];
  const area = document.getElementById('questionArea');

  // Build options HTML
  const optionsHTML = q.options.map(opt => {
    const partsHTML = opt.parts.map((part, i) => {
      if (i % 2 === 0) {
        // Static text — escape HTML
        return part ? `<span>${escHtml(part)}</span>` : '';
      } else {
        // Blank
        const blankIdx = Math.floor(i / 2);
        const answer   = part;
        const saved    = (userInputs[idx][opt.letter] || {})[blankIdx] || '';
        const inputW   = Math.max(normalize(answer).length * 9 + 20, 64);
        return `<input
          class="blank-input"
          data-qidx="${idx}"
          data-opt="${opt.letter}"
          data-bidx="${blankIdx}"
          data-answer="${escHtml(answer)}"
          value="${escHtml(saved)}"
          style="width:${inputW}px"
          placeholder="..."
          autocomplete="off"
          spellcheck="false"
          ${submitted ? 'readonly' : ''}
        >`;
      }
    }).join('');

    const isSelected = userSelected[idx] === opt.letter;
    return `
      <div
        class="option-row${isSelected ? ' selected' : ''}"
        data-qidx="${idx}"
        data-opt="${opt.letter}"
        id="opt-${idx}-${opt.letter}"
        role="button"
        tabindex="0"
        title="Chọn đáp án ${opt.letter}"
      >
        <div class="option-letter" id="optletter-${idx}-${opt.letter}">${opt.letter}</div>
        <div class="option-sentence">${partsHTML}</div>
      </div>`;
  }).join('');
  
  // Build vocab HTML
  const vocabHTML = q.vocab.map(v => `
    <div class="vocab-item">
      <span class="vocab-word">${v.word}</span>
      ${v.pron ? `<span class="vocab-pron">${v.pron}</span>` : ''}
    </div>`).join('');

  area.innerHTML = `
    <div class="question-card" id="qcard-${idx}">
      <div class="question-card-header">
        <span class="q-number">Câu ${q.id}</span>
        <audio
          controls
          src="${q.audio}"
          class="audio-player"
          id="audio-${idx}"
          preload="metadata"
        ></audio>
      </div>
      <div class="question-card-body">
        <div class="question-image">
          <img
            src="${q.image}"
            alt="Ảnh câu ${q.id}"
            onerror="this.parentElement.innerHTML='<div class=\\'img-placeholder\\'><span>📷</span><p>Ảnh Câu ${q.id}</p></div>'"
          >
        </div>
        <div class="question-content-wrapper">
          <div class="question-options" id="qopts-${idx}">
            ${optionsHTML}
          </div>
          <div class="question-vocab">
            <div class="vocab-title">📚 Từ vựng / Ghi chú</div>
            <div class="vocab-list">${vocabHTML}</div>
          </div>
        </div>
      </div>
    </div>`;

  attachOptionListeners(idx);
  attachInputListeners(idx);

  // Apply submitted state if needed
  if (submitted) applyReviewHighlight(idx);
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function attachOptionListeners(idx) {
  document.querySelectorAll(`.option-row[data-qidx="${idx}"]`).forEach(row => {
    row.addEventListener('click', (e) => {
      if (submitted) return;
      // Don't intercept input clicks
      if (e.target.classList.contains('blank-input')) return;
      const opt = row.dataset.opt;
      userSelected[idx] = opt;
      saveState();
      // Update UI
      document.querySelectorAll(`.option-row[data-qidx="${idx}"]`).forEach(r => {
        const isThis = r.dataset.opt === opt;
        r.classList.toggle('selected', isThis);
        document.getElementById(`optletter-${idx}-${r.dataset.opt}`)
          .classList.toggle('selected', isThis);
      });
      updateProgress();
    });
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') row.click();
    });
  });
}

function attachInputListeners(idx) {
  document.querySelectorAll(`.blank-input[data-qidx="${idx}"]`).forEach(input => {
    input.addEventListener('input', () => {
      const opt   = input.dataset.opt;
      const bidx  = parseInt(input.dataset.bidx);
      if (!userInputs[idx][opt]) userInputs[idx][opt] = {};
      userInputs[idx][opt][bidx] = input.value;
      saveState();
      updateProgress();
    });
    // Stop click from propagating to option row
    input.addEventListener('click', e => e.stopPropagation());
  });
}

// ===== PROGRESS UPDATE =====
function updateProgress() {
  const done  = countDone();
  const total = QUESTIONS.length;
  document.getElementById('pmBar').style.width = `${Math.round(done / total * 100)}%`;
}

// ===== NAVIGATION =====
function goTo(idx) {
  currentIdx = idx;
  renderQuestion(idx);
  document.getElementById('qCounter').textContent = `Câu ${idx + 1} / ${QUESTIONS.length}`;
  document.getElementById('prevBtn').disabled = idx === 0;
  document.getElementById('nextBtn').disabled = idx === QUESTIONS.length - 1;
  document.getElementById('questionArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== SUBMIT =====
function handleSubmit() {
  // Check if at least one question is done
  const done = countDone();
  if (done === 0) {
    alert('Bạn chưa làm câu nào! Hãy nghe audio và điền từ vào chỗ trống.');
    return;
  }
  if (done < QUESTIONS.length) {
    const ok = confirm(`Bạn mới làm ${done}/${QUESTIONS.length} câu. Bạn có muốn nộp không?`);
    if (!ok) return;
  }
  submitted = true;
  showResults();
}

// ===== RESULTS =====
function showResults() {
  let correctCount = 0;
  let blankCorrect = 0;
  let blankTotal   = 0;

  const rows = QUESTIONS.map((q, idx) => {
    const sel      = userSelected[idx];
    const ansRight = sel === q.correct;
    if (ansRight) correctCount++;

    let blanksHtml = '';
    q.options.forEach(opt => {
      const blanks = opt.parts.filter((_, i) => i % 2 === 1);
      blanks.forEach((ans, bidx) => {
        blankTotal++;
        const val = normalize((userInputs[idx][opt.letter] || {})[bidx] || '');
        if (val === normalize(ans)) blankCorrect++;
      });
    });

    const icon = ansRight ? '✅' : '❌';
    return `
      <div class="breakdown-row">
        <span class="bd-q">Câu ${q.id}</span>
        <span class="bd-status">${icon}</span>
        <span class="bd-info">
          Chọn: <strong>${sel || '–'}</strong> · Đáp án: <strong>${q.correct}</strong>
        </span>
      </div>`;
  }).join('');

  const pct = Math.round(correctCount / QUESTIONS.length * 100);
  let grade = 'poor', gradeLabel = 'Cần cố gắng thêm! 💪';
  if (pct >= 80) { grade = 'great'; gradeLabel = 'Xuất sắc! 🎉'; }
  else if (pct >= 55) { grade = 'good'; gradeLabel = 'Khá tốt! 👍'; }

  document.getElementById('resultScore').innerHTML = `
    <div class="score-circle ${grade}">
      <span class="score-num">${correctCount}</span>
      <span class="score-deno">/ ${QUESTIONS.length}</span>
    </div>
    <div class="score-label">${gradeLabel}</div>
    <div class="score-sub">
      Chọn đáp án đúng: <strong>${correctCount}/${QUESTIONS.length}</strong> &nbsp;|&nbsp;
      Điền đúng ô trống: <strong>${blankCorrect}/${blankTotal}</strong>
    </div>`;

  document.getElementById('resultBreakdown').innerHTML = rows;
  document.getElementById('resultOverlay').classList.add('active');

  // Apply highlights in question view
  applyReviewHighlight(currentIdx);
}

function applyReviewHighlight(idx) {
  const q   = QUESTIONS[idx];
  const sel = userSelected[idx];

  // Highlight options
  q.options.forEach(opt => {
    const row = document.getElementById(`opt-${idx}-${opt.letter}`);
    if (!row) return;
    row.classList.remove('selected', 'correct', 'wrong',
      'review-correct', 'review-selected-wrong');
    if (opt.letter === q.correct) row.classList.add('review-correct');
    else if (opt.letter === sel)  row.classList.add('review-selected-wrong');
  });

  // Highlight blanks
  document.querySelectorAll(`.blank-input[data-qidx="${idx}"]`).forEach(input => {
    const ans  = input.dataset.answer;
    const val  = normalize(input.value);
    input.classList.remove('blank-correct', 'blank-wrong');
    input.readOnly = true;
    if (val === normalize(ans)) {
      input.classList.add('blank-correct');
    } else {
      input.classList.add('blank-wrong');
      // Show correct answer badge
      if (!input.nextElementSibling?.classList.contains('correct-word')) {
        const badge = document.createElement('span');
        badge.className = 'correct-word';
        badge.textContent = ans;
        input.insertAdjacentElement('afterend', badge);
      }
    }
  });
}

// ===== REDO =====
function resetAll() {
  userInputs   = Array.from({ length: 20 }, () => ({}));
  userSelected = Array(20).fill(null);
  submitted    = false;
  reviewMode   = false;
  localStorage.removeItem(STORAGE_KEY);
  document.getElementById('resultOverlay').classList.remove('active');
  goTo(0);
  updateProgress();
}

// ===== EVENT LISTENERS =====
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIdx > 0) goTo(currentIdx - 1);
});
document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIdx < QUESTIONS.length - 1) goTo(currentIdx + 1);
});
document.getElementById('submitBtn').addEventListener('click', handleSubmit);
document.getElementById('resultClose').addEventListener('click', () => {
  document.getElementById('resultOverlay').classList.remove('active');
  if (submitted) applyReviewHighlight(currentIdx);
});
document.getElementById('reviewBtn').addEventListener('click', () => {
  document.getElementById('resultOverlay').classList.remove('active');
  goTo(0);
});
document.getElementById('redoBtn').addEventListener('click', () => {
  if (confirm('Làm lại từ đầu? Tất cả câu trả lời sẽ bị xóa.')) resetAll();
});

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.target.classList.contains('blank-input')) return;
  if (e.key === 'ArrowLeft'  && currentIdx > 0)                    goTo(currentIdx - 1);
  if (e.key === 'ArrowRight' && currentIdx < QUESTIONS.length - 1) goTo(currentIdx + 1);
  if (['a','b','c','d'].includes(e.key.toLowerCase()) && !submitted) {
    const letter = e.key.toUpperCase();
    userSelected[currentIdx] = letter;
    saveState();
    renderQuestion(currentIdx);
    updateProgress();
  }
});

// ===== INIT =====
loadState();
goTo(0);
updateProgress();
