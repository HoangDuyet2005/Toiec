// ===== DATA =====
// Sessions data — deadline dates spaced 2-3 days apart from session 1
const TOTAL_SESSIONS = 24;

const sessionData = (() => {
  const sessions = [];
  const baseDate = new Date('2026-04-11');
  for (let i = 1; i <= TOTAL_SESSIONS; i++) {
    const d = new Date(baseDate);
    d.setDate(baseDate.getDate() + (i - 1) * 2);
    const day   = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year  = d.getFullYear();
    sessions.push({
      id: i,
      title: `TOEIC A – Buổi ${i}`,
      deadline: `23:00  ${day}/${month}/${year}`,
      completed: false,
    });
  }
  return sessions;
})();

// ===== STATE =====
let completedSessions = JSON.parse(localStorage.getItem('toeic_completed') || '[]');

// ===== ICONS (inline SVG strings) =====
const icons = {
  homework: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>`,
  video: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>`,
  audio: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`,
  vocab: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>`,
  chevron: `<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>`,
};

// ===== ROWS CONFIG =====
const ROWS = [
  { key: 'homework', label: 'Làm bài tập về nhà', iconClass: 'homework', btnClass: 'btn-start', btnText: 'Bắt đầu', action: 'homework' },
  { key: 'video',    label: 'VIDEOS buổi học',   iconClass: 'video',    btnClass: 'btn-view',  btnText: 'Xem',      action: 'video'    },
  { key: 'audio',    label: 'Các audio trong buổi học', iconClass: 'audio', btnClass: 'btn-view', btnText: 'Xem', action: 'audio' },
  { key: 'vocab',    label: 'Từ vựng phải học',  iconClass: 'vocab',   btnClass: 'btn-view',  btnText: 'Xem',      action: 'vocab'    },
];

// ===== RENDER =====
function renderSessions() {
  const container = document.getElementById('sessionList');
  container.innerHTML = '';

  // Render in reverse order (24 → 1) like the original
  const reversed = [...sessionData].reverse();

  reversed.forEach((session, idx) => {
    const item = document.createElement('div');
    item.className = 'session-item';
    item.id = `session-${session.id}`;
    item.style.animationDelay = `${idx * 0.03}s`;

    const isDone = completedSessions.includes(session.id);
    const statusClass = isDone ? 'status-done' : 'status-pending';
    const statusTitle = isDone ? 'Đã hoàn thành' : 'Đang học';

    item.innerHTML = `
      <div class="session-header" data-id="${session.id}">
        <div class="session-header-left">
          <div class="session-number">${session.id}</div>
          <div class="session-title-wrap">
            <div class="session-title">${session.title}</div>
            <div class="session-meta">
              <span class="status-dot ${statusClass}" title="${statusTitle}"></span>
              <span>${statusTitle}</span>
            </div>
          </div>
        </div>
        <div class="session-header-right">
          <span class="deadline-badge">⏰ ${session.deadline}</span>
          ${icons.chevron}
        </div>
      </div>
      <div class="session-body">
        <div class="session-body-inner">
          ${ROWS.map(row => `
            <div class="session-row">
              <div class="session-row-left">
                <div class="row-icon ${row.iconClass}">${icons[row.iconClass]}</div>
                <span class="row-label">${row.label}</span>
              </div>
              <button
                class="btn-action ${row.btnClass}"
                data-session="${session.id}"
                data-action="${row.action}"
                id="btn-${row.action}-${session.id}"
              >${row.btnText}</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.appendChild(item);
  });

  // Attach header click events
  document.querySelectorAll('.session-header').forEach(header => {
    header.addEventListener('click', () => toggleSession(header.dataset.id));
  });

  // Attach button click events
  document.querySelectorAll('.btn-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleAction(parseInt(btn.dataset.session), btn.dataset.action);
    });
  });

  updateProgress();
}

function toggleSession(id) {
  const item = document.getElementById(`session-${id}`);
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.session-item.open').forEach(el => el.classList.remove('open'));

  // Open clicked (if it was closed)
  if (!isOpen) item.classList.add('open');
}

// ===== ACTIONS =====
function handleAction(sessionId, action) {
  const session = sessionData.find(s => s.id === sessionId);
  if (!session) return;

  // For session 1, navigate to its page; for others show coming soon
  if (sessionId === 1 && action === 'homework') {
    window.location.href = `session1/homework.html`;
    return;
  }

  openModal(session, action);
}

function openModal(session, action) {
  const overlay = document.getElementById('modalOverlay');
  const label   = document.getElementById('modalLabel');
  const title   = document.getElementById('modalTitle');
  const body    = document.getElementById('modalBody');

  label.textContent = session.title;

  const actionMap = {
    homework: { title: 'Bài tập về nhà',        emoji: '📝' },
    video:    { title: 'Videos buổi học',        emoji: '🎬' },
    audio:    { title: 'Audio buổi học',         emoji: '🎧' },
    vocab:    { title: 'Từ vựng phải học',       emoji: '📚' },
  };
  const info = actionMap[action] || { title: 'Nội dung', emoji: '📋' };
  title.textContent = info.title;

  body.innerHTML = `
    <div class="modal-coming-soon">
      <div class="icon-big">${info.emoji}</div>
      <strong>${info.title} – ${session.title}</strong>
      <p style="margin-top:8px">Nội dung sẽ được cập nhật sớm.</p>
      <p style="margin-top:4px; font-size:12px; color:#475569;">Deadline: ${session.deadline}</p>
    </div>
  `;

  overlay.classList.add('active');
}

// ===== MODAL CLOSE =====
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

// ===== EXPAND / COLLAPSE ALL =====
document.getElementById('expandAll').addEventListener('click', () => {
  document.querySelectorAll('.session-item').forEach(el => el.classList.add('open'));
});
document.getElementById('collapseAll').addEventListener('click', () => {
  document.querySelectorAll('.session-item').forEach(el => el.classList.remove('open'));
});

// ===== PROGRESS =====
function updateProgress() {
  const done  = completedSessions.length;
  const total = TOTAL_SESSIONS;
  const pct   = Math.round((done / total) * 100);
  document.getElementById('progressText').textContent = `${done} / ${total} buổi`;
  document.getElementById('progressBar').style.width  = `${pct}%`;
}

// ===== INIT =====
renderSessions();

// Auto-open session 1 if first visit
if (!localStorage.getItem('toeic_visited')) {
  localStorage.setItem('toeic_visited', '1');
  setTimeout(() => {
    const first = document.getElementById('session-1');
    if (first) {
      first.classList.add('open');
      first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 600);
}
