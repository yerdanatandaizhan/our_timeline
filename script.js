// 1) Your post data array
const posts = [
  {
    id: 1,
    title: "Первый диалог!💬",
    description:
      "Как же мы не подозревали что нас ждет дальше...  P/S: кажется кто-то все таки сделал первый шаг?)",
    imageUrl: "images/01.jpeg",
    timestamp: "2024-07-14T14:34:00", // ISO format
  },
  {
    id: 2,
    title: '"Привет!👋"',
    description:
      'Наша первая встреча и легендарный "Привет!". (Кажется, кто-то немного нервничал)🫢)',
    imageUrl: "images/02.jpeg",
    timestamp: "2024-08-21T16:00:00",
  },
  {
    id: 3,
    title: "Мафия🕵️‍♂️",
    description: "Так все таки кривые пальцы или нет?",
    imageUrl: "images/03.jpg",
    timestamp: "2024-08-24T22:00:00",
  },
    {
    id: 99,
    title: "Первый казахский сбоор☕",
    description: "Первые признаки отдаления от снг?) P/S: эти сборы мне нравились больше, потому что кто-то чаще ходил на эти сборы)",
    imageUrl: "images/sbor.jpg",
    timestamp: "2024-08-29T22:42:00",
  },
  {
    id: 98,
    title: "Лувр🏛️",
    description: "Первый совместный аутинг и первый совместный поход в ресторан?) (Возможно кто-то не помнит но в хару мы тогда сидели рядом, да и ресторан выбрали один, как думаешь, совпадение или нет?))",
    imageUrl: "images/louvre.jpg",
    timestamp: "2024-09-02T20:48:00",
  },
  {
    id: 4,
    title: "Корнииш🌆",
    description:
      "Одно из первых воспоминаний, как же классно было просто гулять. Кстати, Астана или Абу Даби?)",
    imageUrl: "images/04.jpeg",
    timestamp: "2024-09-20T21:20:13",
  },
  {
    id: 5,
    title: "Первый Стади Рум📚",
    description:
      "В этот день мы впервые сели вместе в стади рум после глобал едукейшна. Фан факт: в тот же день кто-то вытащил наши вещи и занял наш стади рум:(",
    imageUrl: "images/05.jpg",
    timestamp: "2024-09-26T15:34:43",
  },
  {
    id: 97,
    title: "Картинг🏎️ ",
    description:
      "Как же я помню что проспал шаттл в молл утром, а в обед мне сказали что ты халас:( Но зато вечером встретились вдвоем к пути на шаттл, ахахах) Кажется, кто-то не очень любит картинг, но тот день я тоже хорошо запомнил)",
    imageUrl: "images/karting.jpeg",
    timestamp: "2024-09-28T22:12:27",
  },
  {
    id: 97,
    title: "Ferrari World🎢",
    description:
      "Помню как все пацаны старались чтобы мы сели рядом, ахахахах (дважды почти получилось, но эх) (все равно было очеень весело)",
    imageUrl: "images/ferrari.jpeg",
    timestamp: "2024-10-12T15:28:27",
  },
  {
    id: 6,
    title: "Дубай🛥️",
    description:
      "Как же было неловко, но все же какой же классный трип получился. Ноо, что было в Дубае, остается в Дубае, ведь так?)",
    imageUrl: "images/06.jpeg",
    timestamp: "2024-10-16T11:11:42",
  },
  {
    id: 65,
    title: "Яхта🍾",
    description:
      "Газолина от Ернура и тот самый чмок) (как же кто-то меня избегал после этого)",
    imageUrl: "images/yacht.jpg", 
    timestamp: "2024-11-01T23:58:12",
  },
  {
    id: 7,
    title: "Роон🐈",
    description:
      "В тот день мы в первый раз встретили рона и просидели на споте 4 часа, крэйзиии",
    imageUrl: "images/07.jpeg",
    timestamp: "2024-11-07T23:20:00",
  },
  {
    id: 8,
    title: "Рассвет на великах🌅",
    description: "Этот хайлайт я никогдаа не забуду))",
    imageUrl: "images/08.jpeg",
    timestamp: "2024-11-11T06:00:30",
  },
  {
    id: 9,
    title: "Арт выставка🏛️",
    description:
      "Как же мы потратили несколько часов на первых секциях чтоб потом перебежать остальные за полчаса. Первый unintentional date?)",
    imageUrl: "images/09.jpeg",
    timestamp: "2024-11-24T19:49:32",
  },
  {
    id: 10,
    title: "Галлерея молл иии?)",
    description:
      "Пожалуй, мой cамый любимый день) Как же классно мы обошли весь остров, гуляли по кинокунье, а вечерооом... грели друг другу руки?)",
    imageUrl: "images/10.jpeg",
    timestamp: "2024-11-30T23:59:59",
  },
  {
    id: 10.5,
    title: "UAE day🇦🇪",
    description: "Тоже очеень запоминающийся день, особенно салют🤩🤩",
    imageUrl: "images/10.5.jpeg",
    timestamp: "2024-12-02T21:14:42",
  },
  {
    id: 11,
    title: "оллнайтеры у спота🌙",
    description:
      "Как же мы сидели до 5-6 утра, а как-то раз даже до завтрака🥹. Нооо, ни о чем не жалеем, ведь так?)",
    imageUrl: "images/11.jpg",
    timestamp: "2024-12-03T07:30:28",
  },
  {
    id: 12,
    title: "День Рождение Аделии)",
    description:
      "Самый особенный день и дата) День Рождение Аделии, кофе на Мамше, и кое-что еще?🤔🫢",
    imageUrl: "images/12.jpg",
    timestamp: "2024-12-14T19:37:11",
  },
  {
    id: 13,
    title: "Второй семестр🎓",
    description:
      "Как же я ждал начало второго семестра, а в Лондоне каждый день считал дни до нашей встречи🥲. Никогда не забуду слова Николеты, 'думаешь она поймет от кого букет?)'",
    imageUrl: "images/13.jpg",
    timestamp: "2025-01-20T16:44:12",
  },
  {
    id: 14,
    title: "Просто прогулка по кампусу (или нет?))",
    description:
      "24 января, вроде обычный день, когда мы после лайбрари вышли погулять. Но почему то я очень хорошо запомнил тот день)",
    imageUrl: "images/14.jpg",
    timestamp: "2025-01-24T00:00:03",
  },
  {
    id: 15,
    title: "Первый триип🌴",
    description:
      "Первый совместный трип!! И, кстати, первая совместная фотка) Кажется кто-то очень хорошо запомнил то 'cмотри!'",
    imageUrl: "images/15.jpeg",
    timestamp: "2025-01-25T16:24:48",
  },
  {
    id: 16,
    title: "Твое День Рождение🎉",
    description:
      "Все еще помню как я чуть-чуть не рассчитал со временем и мы опоздали, как мы поели чизкейк и как гуляли возле трех башен)",
    imageUrl: "images/16.jpg",
    timestamp: "2025-02-11T00:00:00",
  },
  {
    id: 96,
    title: "8 марта💐",
    description:
      "как же кто-то не понимал подсказок с кахута, эх... такой клаасный день, впервые попробовали арабику вместе) но c того дня остались лишь фотки тех цветов",
    imageUrl: "images/8mar.jpg",
    timestamp: "2025-03-08T18:16:33",
  },
  {
    id: 96,
    title: "Наурыз🎉",
    description:
      "Наш первый совместный наурыз🥳 Согласись, казы был очень вкусный? (как же кто-то не ел)",
    imageUrl: "images/nauryz.jpg",
    timestamp: "2025-03-22T20:12:55",
  },
  {
    id: 16.5,
    title: "SeaWorld🐬",
    description:
      "Кто-то очеень давноо хотел туда сходить) Потрогать ската и увидеть дельфинов✅",
    imageUrl: "images/16.5.jpeg",
    timestamp: "2025-03-23T14:16:33",
  },
  {
    id: 17,
    title: "Seoul Tower ❤️🔒",
    description:
      "Мой самый любимый день за второй семестр: Йонсей, Роллинг Паста, Старфилд, Ганнам Стайл и Сеул Тауэр🤩",
    imageUrl: "images/17.jpeg",
    timestamp: "2025-03-31T23:11:00",
  },
  {
    id: 18,
    title: "Пусаан🦊🤴",
    description:
      "Тоже очеень интересный день) Стоять в очереди за фоном маленького принца, гулять по биффу и увидеть пьяную кореянку пока мы разбирались с отелем - хайлайт на всю жизнь) ",
    imageUrl: "images/18.jpg",
    timestamp: "2025-04-02T08:30:11",
  },
  {
    id: 19,
    title: "Дэйт у Хан Ривера🌉",
    description: "Крайний день в Корее тоже был очеень интересным)",
    imageUrl: "images/19.jpeg",
    timestamp: "2025-04-04T19:34:15",
  },
  {
    id: 95,
    title: "Қозы Көрпеш Баян Сұлу🌸",
    description: "Дэйт который ты организовала) Никогда не забуду, арт выставка, хэликоптер хэликоптер, мамша и живое исполнение I just called...",
    imageUrl: "images/kozy.jpg",
    timestamp: "2025-04-18T21:52:02",
  },
  {
    id: 20,
    title: "Концерт Артбата🎤🎸",
    description: "Cморти, жан, Эд Ширан!",
    imageUrl: "images/20.jpg",
    timestamp: "2025-04-26T23:16:38",
  },
  {
    id: 20,
    title: "Құдашаа💃🕺",
    description: "Наш первый совместный танец) Но как же я чуть не проспал из-за концерта, ахахах",
    imageUrl: "images/kudasha.jpg",
    timestamp: "2025-04-27T18:31:00",
  },
  {
    id: 21,
    title: "Последний день второго семестра :(",
    description:
      "Как же мне понравилось завершение второго семестра: Маркетплейс, Миск и Антонио, и два целых дня с тобой - самый лучший дистрэссер после файналов",
    imageUrl: "images/21.jpg",
    timestamp: "2025-05-17T18:00:00",
  },
  {
    id: 22,
    title: "Астанаа🇰🇿",
    description:
      "Ботанический, Экспо, Хан Шатыр и Колесо Обозрения, первый дождь и еще столько всего нас ждет за следующие 2 месяца.... ",
    imageUrl: "images/23.jpg",
    timestamp: "2025-06-01T21:00:00",
  },
  {
    id: 23,
    title: "Первый Футбольный Матч⚽",
    description:
      "Наш первый футбольный матч) Мне очень понравилось тебе все объяснять, и я был очень рад видеть что у кого-то был прям локин) ",
    imageUrl: "images/kzmac.jpg",
    timestamp: "2025-06-09T19:00:00",
  },
  {
    id: 24,
    title: "Мое день рождение🎉",
    description:
      "Такоой классный день, такой вкусныыый торт и такой клаассный подарок!! Спасибо большое жан за такой день рождение, никогда не забуду свое 19-летие) ",
    imageUrl: "images/dr.jpg",
    timestamp: "2025-06-17T00:00:00",
  },
  {
    id: 25,
    title: "Концерт M'Dee (или все же Мота?)",
    description:
      "Наш второй совместный концерт) И вправду было очень классно, весь концерт вайбовал смотря на тебя. (а еще не забуду как тот парень обрадовался песне, а его девушка начала его снимать, аахахахаах) ",
    imageUrl: "images/mdee.jpg",
    timestamp: "2025-06-22T20:00:00",
  },
];

// 2) Utility to compute "ago"
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

// 3) Render posts and start interval
function renderPosts() {
  const container = document.getElementById("posts-container");
  container.innerHTML = "";

  posts.forEach((post) => {
    const card = document.createElement("div");
    card.className = "post";
    card.innerHTML = `
        <div class="post-image">
          <img src="${post.imageUrl}" alt="${post.title}">
        </div>
        <div class="post-details">
          <div class="relative-time" data-ts="${post.timestamp}"></div>
          <h2 class="post-title">${post.title}</h2>
          <p class="description">${post.description}</p>

        </div>
      `;
    container.appendChild(card);
  });
  const infinityCard = document.createElement("div");
  infinityCard.className = "post";
  infinityCard.innerHTML = `
    <div class="post-image">
      <img src="images/next.jpg" alt="Coming soon...">
    </div>
    <div class="post-details">
      <div class="relative-time infinite">∞</div>
      <h2 class="post-title">Coming soon...</h2>
      <p class="description">А самое главное, еще столько всего нас ждет впереди... Этот сайт еще долгое время будет обновляться, наш архив)</p>
    </div>
  `;
  container.appendChild(infinityCard);
  updateRelativeTimes();
}

function updateRelativeTimes() {
  document.querySelectorAll(".relative-time[data-ts]").forEach((el) => {
    const ts = el.getAttribute("data-ts");
    el.textContent = getRelativeTime(ts) + " назад был...";
  });
}
// 1) Define your playlist:
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

// 2) Load a track by index
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

// 3) Format seconds → M:SS
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

// 4) Update progress bar & time
audio.addEventListener("timeupdate", () => {
  const pct = (audio.currentTime / audio.duration) * 100;
  progress.style.width = pct + "%";
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

// 5) Play / Pause toggle
btnToggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btnToggle.textContent = "❚❚";
  } else {
    audio.pause();
    btnToggle.textContent = "▶︎";
  }
});

// 6) Next track
btnNext.addEventListener("click", () => {
  current = (current + 1) % tracks.length;
  loadTrack(current);
  audio.play();
  btnToggle.textContent = "❚❚";
});

// 7) Kick things off
document.addEventListener("DOMContentLoaded", () => {
  loadTrack(current);

  // the autoplay attribute should trigger playback,
  // but let's also call play() in case:
  audio
    .play()
    .then(() => {
      btnToggle.textContent = "❚❚";
    })
    .catch((err) => {
      console.warn("Autoplay blocked by browser:", err);
    });

  // only init posts on the timeline page
  const container = document.getElementById("posts-container");
  if (container) {
    renderPosts();
    setInterval(updateRelativeTimes, 1000);
  }
});
// initial render
renderPosts();
// update every second
setInterval(updateRelativeTimes, 1000);
(function () {
  const container = document.getElementById("hearts-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";

    // random horizontal start
    heart.style.left = Math.random() * 100 + "vw";

    // random size between 12px–32px
    const size = Math.random() * 20 + 12;
    heart.style.fontSize = size + "px";

    // random fall duration between 3–6 seconds
    heart.style.animationDuration = Math.random() * 3 + 25 + "s";

    container.appendChild(heart);

    // remove from DOM once the animation is over
    setTimeout(
      () => container.removeChild(heart),
      parseFloat(heart.style.animationDuration) * 1000
    );
  }

  // spawn a new heart every 200ms (adjust rate to taste)
  setInterval(createHeart, 3500);
})();
