// AI-related posts array
const aiPosts = [
  {
    id: 1,
    title: "Подарок на наш год❤️",
    description:
      "Один из твоих самых недавних подарков) До сих пор иногда перечитываю каждую записку❤️",
    imageUrl: "images/memory_01.jpg",
  },
  {
    id: 2,
    title: "Твой мини подарочек на год",
    description:
      "Хоть у меня и были файналы в тот период, мне было очень приятно получить такую записку и шоколадки, которые очень меня тогда выручили)",
    imageUrl: "images/memory_02.jpg",
  },
  {
    id: 3,
    title: "All your letters ",
    description:
      "And of course I am saving all your letters that you wrote to me and re-reading them from time to time) The one you gave me last May are my favorite ones)",
    imageUrl: "images/memory_03.jpg",
  },
  {
    id: 4,
    title: "Gift from Fiorenze",
    description:
      "Твой подарок из Флоренции, хоть и лемонсоду я выпил, но такую красивую упаковку и посткарту сохранил)",
    imageUrl: "images/memory_04.jpg",
  },
  {
    id: 5,
    title: "All our photooos",
    description:
      "And of course I have every single photo that we took together and will have even more in future)",
    imageUrl: "images/memory_05.jpg",
  },
  {
    id: 6,
    title: "Seoul Tower",
    description:
      "Помнишь наше сердечко на Сеул Тауэре? Как сувенир, я сохранил упаковку от него и маркер который мы использовали для написания имен)",
    imageUrl: "images/memory_06.jpg",
  },
  {
    id: 7,
    title: "Random letters from Study Room",
    description:
      "Someone was leaving me cute letters during our lock in sesions in study room, and I just couln't throw them away)",
    imageUrl: "images/memory_07.jpg",
  },
  {
    id: 8,
    title: "Intro to IM",
    description:
      "Твое первое задание на р5 для интро ту Айэм, кто то пытался нарисовать скетч себя на бумаге)",
    imageUrl: "images/memory_08.jpg",
  },
  {
    id: 9,
    title: "Первый букет из миска",
    description:
      "Когда я брал первый букет на твой день рождения из Миска, я на всякий случай взял дополнительную карточку для пожеланий, и она у меня тоже сохранилась)",
    imageUrl: "images/memory_09.jpg",
  },
  {
    id: 10,
    title: "CW",
    description:
      "Хоть и кандидейт викенда у нас не было, но я был рад что мы смогли вместе поволонтерить на кандидейт викенд фрэшменов) Зато поосекали кандидатов и вкусно поели без стресса)",
    imageUrl: "images/memory_10.jpg",
  },
  {
    id: 11,
    title: "Твой Веер",
    description:
      "Я сохранил веер который ты мне сделала пока мы ехали в такси из Картинга:) Мой у меня не получился, и кто-то решил мне тогда помочь)",
    imageUrl: "images/memory_11.jpg",
  },
  {
    id: 12,
    title: "концерт Artbat",
    description:
      "наш первый концерт, и сразу Artbat и Алабай!! Легендарный концерт, но вроде еще Эд Ширан и Уан Репаблик были?",
    imageUrl: "images/memory_12.jpg",
  },
  {
    id: 13,
    title: "M'dee",
    description: "браслет с концерта Мота (M'dee) у меня тоже сохранился)",
    imageUrl: "images/memory_13.jpg",
  },
  {
    id: 14,
    title: "Карточка из Артс Центра",
    description:
      "Помнишь ты мне дала карточку из Артс Центра где была твоя выставка по классу? Как видишь, я ее не потерял)",
    imageUrl: "images/memory_14.jpg",
  },
  {
    id: 15,
    title: "UAE Passport 🇦🇪",
    description:
      "Я хорошо помню те дни ситуэйшншипа ахаххаах, как мы вдвоем пошли на ивэнт и играли в ту игру где мы не знали ответа не на один вопрос ахахах",
    imageUrl: "images/memory_15.jpg",
  },
  {
    id: 16,
    title: "Ferrari World",
    description:
      "Наш совместный поход в Ferrari World и тот самый прайм сбор, и те самые билеты за один миллсвайп",
    imageUrl: "images/memory_16.jpg",
  },
  {
    id: 17,
    title: "Наш первый совместный рейс",
    description:
      "У меня даже сохранился билет с нашего перого рейса с Шанхая до Дубая😎, первый рейс и сразу 8 часовой, но кажется кто-то не очень и скучал))",
    imageUrl: "images/memory_17.jpg",
  },
  {
    id: 18,
    title: "Твое самое первое письмо",
    description:
      "Твое самое первое письмо на 14 февраля, которое ты так стеснялась мне подарить, хааххаха. Но как же было неожиданно и приятно его получить)",
    imageUrl: "images/memory_18.jpg",
  },
  {
    id: 19,
    title: "Наша первая фотобудка вдвоем",
    description:
      "Мы гуляли по Хендэ и сделали нашу первую совместную фотку, а потом нашли место получше, и сразу же сделали еще две)",
    imageUrl: "images/memory_19.jpg",
  },
  {
    id: 20,
    title: "Твое письмо на 4 месяца",
    description:
      "Помню как получал его как будто вчера, а прошло уже 9 месяцев с того дня, как же летит время",
    imageUrl: "images/memory_20.jpg",
  },
  {
    id: 21,
    title: "Кот из Пусана",
    description:
      "Помнишь как мы зашли в рандомный магазин в Пусане и купили стикеры похожие на Рона?) (твоя цитата)",
    imageUrl: "images/memory_21.jpg",
  },
  {
    id: 22,
    title: "Еще больше Рона (или все таки Налы?) из стади рума",
    description: "Кто то до сих пор не признает что рон мой а нала твоя, эх",
    imageUrl: "images/memory_22.jpg",
  },
  {
    id: 23,
    title: "Первое совместное фото из ивэнта📸",
    description:
      "Наша первая совместная фотография из мидтерм дистрэссера у А1C, тут прям прайм сбор, Аслия, Сезим и даже рандомный друг Ернура",
    imageUrl: "images/memory_23.jpg",
  },
  {
    id: 24,
    title: "Ron & Study Room :)",
    description:
      "and even some random drawings of Ron in study room from last spring (I am his favorite)",
    imageUrl: "images/memory_24.jpg",
  },
];

// Utility to compute "ago"
function getRelativeTime(ts) {
  const now = new Date();
  const then = new Date(ts);
  let delta = Math.floor((now - then) / 1000); // total seconds

  const days = Math.floor(delta / 86400);
  delta %= 86400;
  const hours = Math.floor(delta / 3600);
  delta %= 3600;
  const minutes = Math.floor(delta / 60);
  const seconds = delta % 60;

  const parts = [];
  if (days) parts.push(`${days} дней`);
  if (hours) parts.push(`${hours} часов`);
  if (minutes) parts.push(`${minutes} минут`);
  parts.push(`${seconds} секунд`);

  return parts.join(" ");
}

// Calculate bounding box for a rotated rectangle
function getRotatedBoundingBox(width, height, rotation) {
  const rad = (rotation * Math.PI) / 180;
  const cos = Math.abs(Math.cos(rad));
  const sin = Math.abs(Math.sin(rad));
  const newWidth = width * cos + height * sin;
  const newHeight = width * sin + height * cos;
  return { width: newWidth, height: newHeight };
}

// Helper function to check if two rectangles overlap (with strict constraints)
function checkOverlap(rect1, rect2, minSpacing = 40) {
  // Strict bounding box collision with spacing buffer - no overlap allowed
  // Apply spacing buffer to both rectangles for symmetric check
  const x1Min = rect1.x;
  const x1Max = rect1.x + rect1.width;
  const y1Min = rect1.y;
  const y1Max = rect1.y + rect1.height;

  const x2Min = rect2.x;
  const x2Max = rect2.x + rect2.width;
  const y2Min = rect2.y;
  const y2Max = rect2.y + rect2.height;

  // Check if rectangles overlap with minimum spacing between them
  // They overlap if the spacing between them is less than minSpacing
  const xOverlap = !(x1Max + minSpacing < x2Min || x2Max + minSpacing < x1Min);
  const yOverlap = !(y1Max + minSpacing < y2Min || y2Max + minSpacing < y1Min);

  return xOverlap && yOverlap;
}

// Find a non-overlapping position with improved algorithm
function findNonOverlappingPosition(
  boundingWidth,
  boundingHeight,
  rotation, // Not used anymore but kept for compatibility
  placedCards,
  containerWidth,
  containerHeight,
  margin,
  minSpacing = 40 // Minimum space between cards
) {
  // boundingWidth and boundingHeight are already measured from DOM
  const verticalSpacing = 80; // Extra vertical spacing preference
  const maxAttempts = 300; // More attempts to find non-overlapping position

  // Strategy 1: Try random positions with vertical spacing preference
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const x =
      margin + Math.random() * (containerWidth - boundingWidth - margin * 2);
    // Prefer positions that are more spread out vertically
    const verticalBias = (attempt % 10) / 10; // Cycle through vertical positions
    const rawY =
      margin +
      verticalBias * (containerHeight - boundingHeight - margin * 2) +
      (Math.random() - 0.5) * (containerHeight * 0.1);

    const y = Math.max(
      margin,
      Math.min(containerHeight - boundingHeight - margin, rawY)
    );

    const candidateRect = {
      x: x,
      y: y,
      width: boundingWidth,
      height: boundingHeight,
    };

    let hasOverlap = false;
    for (const placed of placedCards) {
      if (checkOverlap(candidateRect, placed, minSpacing)) {
        hasOverlap = true;
        break;
      }
    }

    if (!hasOverlap) {
      return { x, y, boundingWidth, boundingHeight };
    }
  }

  // Strategy 2: Systematic grid search with randomness (more vertical spacing)
  const gridSize = 100; // Larger grid cell size for more spacing
  const cols = Math.floor((containerWidth - margin * 2) / gridSize);
  const rows = Math.floor(
    (containerHeight - margin * 2) / (gridSize + verticalSpacing)
  );

  // Create array of all grid positions and shuffle it
  const positions = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      positions.push({ row, col });
    }
  }

  // Shuffle positions array
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  // Try each shuffled position
  for (const pos of positions) {
    const baseX = margin + pos.col * gridSize;
    const baseY = margin + pos.row * (gridSize + verticalSpacing);

    // Add small random offset within the cell (less vertical offset)
    const offsetX = (Math.random() - 0.5) * (gridSize * 0.4);
    const offsetY = (Math.random() - 0.5) * (gridSize * 0.3);

    const x = Math.max(
      margin,
      Math.min(containerWidth - boundingWidth - margin, baseX + offsetX)
    );
    const y = Math.max(
      margin,
      Math.min(containerHeight - boundingHeight - margin, baseY + offsetY)
    );

    const candidateRect = {
      x: x,
      y: y,
      width: boundingWidth,
      height: boundingHeight,
    };

    let hasOverlap = false;
    for (const placed of placedCards) {
      // Strict overlap check
      if (checkOverlap(candidateRect, placed, minSpacing)) {
        hasOverlap = true;
        break;
      }
    }

    if (!hasOverlap) {
      return { x, y, boundingWidth, boundingHeight };
    }
  }

  // Strategy 3: Force placement in least crowded area (with vertical preference)
  const sectorSize = 250;
  const sectorVerticalSpacing = 100; // Extra vertical spacing between sectors
  const sectorCols = Math.ceil(containerWidth / sectorSize);
  const sectorRows = Math.ceil(
    containerHeight / (sectorSize + sectorVerticalSpacing)
  );
  const sectorCounts = Array(sectorRows)
    .fill(null)
    .map(() => Array(sectorCols).fill(0));

  // Count cards in each sector
  for (const placed of placedCards) {
    const sectorCol = Math.floor((placed.x + placed.width / 2) / sectorSize);
    const sectorRow = Math.floor(
      (placed.y + placed.height / 2) / (sectorSize + sectorVerticalSpacing)
    );
    if (
      sectorRow >= 0 &&
      sectorRow < sectorRows &&
      sectorCol >= 0 &&
      sectorCol < sectorCols
    ) {
      sectorCounts[sectorRow][sectorCol]++;
    }
  }

  // Find least crowded sector
  let minCount = Infinity;
  let bestSector = { row: 0, col: 0 };
  for (let row = 0; row < sectorRows; row++) {
    for (let col = 0; col < sectorCols; col++) {
      if (sectorCounts[row][col] < minCount) {
        minCount = sectorCounts[row][col];
        bestSector = { row, col };
      }
    }
  }

  // Place in least crowded sector (with vertical spacing)
  const x =
    margin +
    bestSector.col * sectorSize +
    Math.random() * (sectorSize - boundingWidth - margin);
  const y =
    margin +
    bestSector.row * (sectorSize + sectorVerticalSpacing) +
    Math.random() * (sectorSize - boundingHeight - margin);

  // Final position - ensure it doesn't overlap with any placed cards
  const finalX = Math.max(
    margin,
    Math.min(containerWidth - boundingWidth - margin, x)
  );
  const finalY = Math.max(
    margin,
    Math.min(containerHeight - boundingHeight - margin, y)
  );

  const finalRect = {
    x: finalX,
    y: finalY,
    width: boundingWidth,
    height: boundingHeight,
  };

  // Double-check for overlaps even in fallback position
  for (const placed of placedCards) {
    if (checkOverlap(finalRect, placed, minSpacing)) {
      // If still overlapping, try to push it away from nearest card
      const centerX = finalX + boundingWidth / 2;
      const centerY = finalY + boundingHeight / 2;
      const placedCenterX = placed.x + placed.width / 2;
      const placedCenterY = placed.y + placed.height / 2;

      const dx = centerX - placedCenterX;
      const dy = centerY - placedCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0) {
        const pushDistance = (boundingWidth + placed.width) / 2 + minSpacing;
        const newX =
          placedCenterX + (dx / distance) * pushDistance - boundingWidth / 2;
        const newY =
          placedCenterY + (dy / distance) * pushDistance - boundingHeight / 2;

        return {
          x: Math.max(
            margin,
            Math.min(containerWidth - boundingWidth - margin, newX)
          ),
          y: Math.max(
            margin,
            Math.min(containerHeight - boundingHeight - margin, newY)
          ),
          boundingWidth,
          boundingHeight,
        };
      }
    }
  }

  return {
    x: finalX,
    y: finalY,
    boundingWidth,
    boundingHeight,
  };
}

// Render AI posts function with improved non-overlapping layout
async function renderAIPosts() {
  const container = document.getElementById("ai-posts-container");
  if (!container) return;

  container.innerHTML = "";
  container.style.position = "relative";

  // Get container dimensions - use clientWidth instead of window.innerWidth
  // Ensure container has width before measuring
  if (container.clientWidth === 0) {
    container.style.width = "100%";
  }
  const containerWidth = container.clientWidth || window.innerWidth;
  let containerHeight = Math.max(window.innerHeight * 1.5, 1500);
  container.style.minHeight = containerHeight + "px";

  const placedCards = [];
  const margin = 60;
  const minSpacing = 40; // Increased spacing to prevent overlaps

  for (const [index, post] of aiPosts.entries()) {
    const card = document.createElement("div");
    card.className = "memory-card";

    const rotation = (Math.random() - 0.5) * 30;
    const sizeMultiplier = 0.85 + Math.random() * 0.3;
    const cardWidth = 280 * sizeMultiplier;

    card.innerHTML = `
      <div class="memory-image">
        <img src="${post.imageUrl}" alt="${post.title || "Memory"}">
      </div>
      <div class="memory-details">
        ${post.title ? `<h2 class="memory-title">${post.title}</h2>` : ""}
        ${
          post.description
            ? `<p class="memory-description">${post.description}</p>`
            : ""
        }
      </div>
    `;

    // Attach hidden first
    card.style.position = "absolute";
    card.style.left = "0px";
    card.style.top = "0px";
    card.style.width = cardWidth + "px";
    card.style.transform = `rotate(${rotation}deg)`;
    card.style.visibility = "hidden";

    container.appendChild(card);

    // Wait for image to fully decode (prevents late resizing)
    const img = card.querySelector("img");
    if (img) {
      try {
        if (!img.complete) {
          await img.decode();
        }
        // Force layout recalculation after image loads
        void card.offsetHeight;
      } catch (_) {
        // if decode fails, still continue; size should be stable due to CSS aspect-ratio
      }
    }

    // Force layout recalculation to ensure accurate measurements
    void card.offsetHeight;

    // Small delay to ensure layout is stable
    await new Promise((resolve) => setTimeout(resolve, 10));

    // Measure real (rotated) bounding box
    const rect = card.getBoundingClientRect();
    let boundingWidth = rect.width;
    let boundingHeight = rect.height;

    // Ensure we have valid dimensions
    if (boundingWidth <= 0 || boundingHeight <= 0) {
      console.warn(
        `Card ${index} has invalid dimensions: ${boundingWidth}x${boundingHeight}`
      );
      // Use fallback dimensions
      const fallbackWidth = cardWidth * 1.2; // Account for rotation
      const fallbackHeight = cardWidth * 1.2;
      boundingWidth = fallbackWidth;
      boundingHeight = fallbackHeight;
    }

    // Find position using measured size; rotation already included in rect
    let position = findNonOverlappingPosition(
      boundingWidth,
      boundingHeight,
      0,
      placedCards,
      containerWidth,
      containerHeight,
      margin,
      minSpacing // Pass minSpacing explicitly
    );

    // If placement failed, increase container height and retry
    if (!position || (position.x === undefined && position.y === undefined)) {
      containerHeight += 500;
      container.style.minHeight = containerHeight + "px";
      // Retry with increased height
      position = findNonOverlappingPosition(
        boundingWidth,
        boundingHeight,
        0,
        placedCards,
        containerWidth,
        containerHeight,
        margin,
        minSpacing
      );
    }

    // Store for collision checks
    placedCards.push({
      x: position.x,
      y: position.y,
      width: boundingWidth,
      height: boundingHeight,
    });

    // Place it
    card.style.left = position.x + "px";
    card.style.top = position.y + "px";
    card.style.visibility = "visible";

    card.style.zIndex = Math.floor(Math.random() * 10) + 1;

    const shadowX = (Math.random() - 0.5) * 10;
    const shadowY = (Math.random() - 0.5) * 10;
    card.style.boxShadow = `${shadowX}px ${shadowY}px 15px rgba(0, 0, 0, 0.2)`;

    card.dataset.postIndex = index;
    card.addEventListener("click", () => openFullscreen(card, post));
  }
}

// Initialize - only once
let isInitialized = false;
document.addEventListener("DOMContentLoaded", () => {
  if (isInitialized) return;
  isInitialized = true;

  const container = document.getElementById("ai-posts-container");
  if (container) {
    renderAIPosts();

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        renderAIPosts();
      }, 300);
    });
  }
});
// Fullscreen modal functions
function openFullscreen(card, post) {
  const modal = document.getElementById("fullscreen-modal");
  const content = document.getElementById("fullscreen-content");

  // Get card's current position and size
  const rect = card.getBoundingClientRect();
  const cardClone = card.cloneNode(true);
  cardClone.style.position = "fixed";
  cardClone.style.left = rect.left + "px";
  cardClone.style.top = rect.top + "px";
  cardClone.style.width = rect.width + "px";
  cardClone.style.transform = window.getComputedStyle(card).transform;
  cardClone.style.margin = "0";
  cardClone.style.transition = "none";

  // Create fullscreen version
  content.innerHTML = `
    <div class="fullscreen-card">
      <div class="fullscreen-image">
        <img src="${post.imageUrl}" alt="${post.title || "Memory"}">
      </div>
      <div class="fullscreen-details">
        ${post.title ? `<h2 class="fullscreen-title">${post.title}</h2>` : ""}
        ${
          post.description
            ? `<p class="fullscreen-description">${post.description}</p>`
            : ""
        }
      </div>
    </div>
  `;

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeFullscreen() {
  const modal = document.getElementById("fullscreen-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Close modal on background click or ESC key
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("fullscreen-modal");
  const closeBtn = document.getElementById("close-modal");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeFullscreen);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeFullscreen();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeFullscreen();
    }
  });
});

// Music Player
const tracks = [
  {
    title: "Every breath you take",
    artist: "The Police",
    src: "music/everybreath.mp3",
    cover: "music/everybreath.jpeg",
  },
  {
    title: "I just called to say",
    artist: "Stevie Wonder",
    src: "music/Ijustcalled.mp3",
    cover: "music/Ijustcalled.jpg",
  },
  {
    title: "Thinking out Loud",
    artist: "Ed Sheeran",
    src: "music/thinking.mp3",
    cover: "music/thinking.jpeg",
  },
  {
    title: "Sunday Morning",
    artist: "Maroon 5",
    src: "music/sunday.mp3",
    cover: "music/sunday.jpeg",
  },
  {
    title: "Вахтерам",
    artist: "Бумбокс",
    src: "music/vahteram.mp3",
    cover: "music/vahteram.jpg",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    src: "music/perfect.mp3",
    cover: "music/perfect.jpeg",
  },
  {
    title: "La La Land Theme",
    artist: "Руканист",
    src: "music/lala.mp3",
    cover: "music/lala.jpg",
  },
  {
    title: "Photograph",
    artist: "Timothy",
    src: "music/photo.mp3",
    cover: "music/photo.jpeg",
  },
];

let current = 0;
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("track-title");
const artist = document.getElementById("track-artist");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const btnToggle = document.getElementById("toggle");
const btnNext = document.getElementById("next");

function loadTrack(i) {
  const t = tracks[i];
  audio.src = t.src;
  cover.src = t.cover;
  title.textContent = t.title;
  artist.textContent = t.artist;
  audio.load();
  audio.addEventListener("loadedmetadata", () => {
    const d = audio.duration;
    durationEl.textContent = formatTime(d);
  });
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

audio.addEventListener("timeupdate", () => {
  const pct = (audio.currentTime / audio.duration) * 100;
  progress.style.width = pct + "%";
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

btnToggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btnToggle.textContent = "❚❚";
  } else {
    audio.pause();
    btnToggle.textContent = "▶︎";
  }
});

btnNext.addEventListener("click", () => {
  current = (current + 1) % tracks.length;
  loadTrack(current);
  audio.play();
  btnToggle.textContent = "❚❚";
});

// Initialize music player
document.addEventListener("DOMContentLoaded", () => {
  loadTrack(current);

  audio
    .play()
    .then(() => {
      btnToggle.textContent = "❚❚";
    })
    .catch((err) => {
      console.warn("Autoplay blocked by browser:", err);
    });

  // renderAIPosts is already called in the initialization above
  // No need to call it again here
});

// Hearts animation
(function () {
  const container = document.getElementById("hearts-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    const size = Math.random() * 20 + 12;
    heart.style.fontSize = size + "px";

    heart.style.animationDuration = Math.random() * 3 + 25 + "s";

    container.appendChild(heart);

    setTimeout(
      () => container.removeChild(heart),
      parseFloat(heart.style.animationDuration) * 1000
    );
  }

  setInterval(createHeart, 3500);
})();
