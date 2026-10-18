const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const HERO_DEMOS = {
  droid_4k: {
    source: "droid_demo/grid_ultra_4001f_set1.mp4",
    title: "Action-conditioned robot manipulation (DROID)",
    meta: "Nine 4,001-frame (~4.2 min) rollouts from a single real frame",
  },
  sekai_4k: {
    source: "camera_demo/grid_full_4001f.mp4",
    title: "Camera-controlled world exploration (Sekai)",
    meta: "Nine 4,001-frame (~4.2 min) rollouts from a single real frame",
  },
  droid_60s: {
    source: "droid_demo/grid_60s_set1.mp4",
    title: "Action-conditioned robot manipulation · 60s (DROID)",
    meta: "Nine 961-frame (60s) streaming rollouts across diverse tabletop tasks",
  },
  sekai_60s: {
    source: "camera_demo/grid_60s_set1.mp4",
    title: "Camera-controlled world exploration · 60s (Sekai)",
    meta: "Nine 961-frame (60s) streaming rollouts across diverse 3D scenes",
  },
};

const DROID_CLIPS = {
  droid_4k: [
    // Set 1
    { src: "droid_demo/clips/grid_ultra_4001f_set1/cell_00_ep55006.mp4", ep: 55006, horizon: "4,001 frames", task: "Remove the blue marker from the red mug" },
    { src: "droid_demo/clips/grid_ultra_4001f_set1/cell_01_ep55121.mp4", ep: 55121, horizon: "4,001 frames", task: "Put the white container in the sink" },
    { src: "droid_demo/clips/grid_ultra_4001f_set1/cell_02_ep55355.mp4", ep: 55355, horizon: "4,001 frames", task: "Take the silver lid from the table and put it on the silver container" },
    { src: "droid_demo/clips/grid_ultra_4001f_set1/cell_03_ep56057.mp4", ep: 56057, horizon: "4,001 frames", task: "Put the marker inside the blue cup" },
    { src: "droid_demo/clips/grid_ultra_4001f_set1/cell_04_ep56426.mp4", ep: 56426, horizon: "4,001 frames", task: "Move the spoon forwards" },
    { src: "droid_demo/clips/grid_ultra_4001f_set1/cell_05_ep56539.mp4", ep: 56539, horizon: "4,001 frames", task: "Put the yellow block on the table" },
    { src: "droid_demo/clips/grid_ultra_4001f_set1/cell_06_ep56588.mp4", ep: 56588, horizon: "4,001 frames", task: "Remove the lid from the glass bottle" },
    { src: "droid_demo/clips/grid_ultra_4001f_set1/cell_07_ep57482.mp4", ep: 57482, horizon: "4,001 frames", task: "Remove the teacup from the blue bowl and place it on the right side of the counter" },
    { src: "droid_demo/clips/grid_ultra_4001f_set1/cell_08_ep57090.mp4", ep: 57090, horizon: "4,001 frames", task: "Pick up the green, orange, and navy blue square blocks and stack them on the table" },
    // Set 2
    { src: "droid_demo/clips/grid_ultra_4001f_set2/cell_00_ep55140.mp4", ep: 55140, horizon: "4,001 frames", task: "Put the first right spoon on the first left spoon" },
    { src: "droid_demo/clips/grid_ultra_4001f_set2/cell_01_ep55227.mp4", ep: 55227, horizon: "4,001 frames", task: "Put the green sponge on the white sponge then place both in the clear container" },
    { src: "droid_demo/clips/grid_ultra_4001f_set2/cell_02_ep56744.mp4", ep: 56744, horizon: "4,001 frames", task: "Put the knife into the bowl" },
    { src: "droid_demo/clips/grid_ultra_4001f_set2/cell_03_ep56122.mp4", ep: 56122, horizon: "4,001 frames", task: "Pick up a slice of bread from the glass bowl and put it in the toaster" },
    { src: "droid_demo/clips/grid_ultra_4001f_set2/cell_04_ep55432.mp4", ep: 55432, horizon: "4,001 frames", task: "Pick up the silver object from the bottom of the coffee machine and put it on top" },
    { src: "droid_demo/clips/grid_ultra_4001f_set2/cell_05_ep56958.mp4", ep: 56958, horizon: "4,001 frames", task: "Unstack the bowls" },
    { src: "droid_demo/clips/grid_ultra_4001f_set2/cell_06_ep57279.mp4", ep: 57279, horizon: "4,001 frames", task: "Put the Fanta can inside the left part of the sink" },
    { src: "droid_demo/clips/grid_ultra_4001f_set2/cell_07_ep57343.mp4", ep: 57343, horizon: "4,001 frames", task: "Put the yellow plate on the windowsill" },
    { src: "droid_demo/clips/grid_ultra_4001f_set2/cell_08_ep56458.mp4", ep: 56458, horizon: "4,001 frames", task: "Place the tongs inside the cup" },
  ],
  droid_60s: [
    // Set 1
    { src: "droid_demo/clips/grid_60s_set1/cell_00_ep55105.mp4", ep: 55105, horizon: "961 frames · 60s", task: "Move the silver object to the left side of the first shelf" },
    { src: "droid_demo/clips/grid_60s_set1/cell_01_ep56382.mp4", ep: 56382, horizon: "961 frames · 60s", task: "Pick up the green and yellow blocks and stack them on the left, then move the blue block" },
    { src: "droid_demo/clips/grid_60s_set1/cell_02_ep57196.mp4", ep: 57196, horizon: "961 frames · 60s", task: "Move the black chess piece forwards on the chess board" },
    { src: "droid_demo/clips/grid_60s_set1/cell_03_ep56499.mp4", ep: 56499, horizon: "961 frames · 60s", task: "Place the two small books inside the black box" },
    { src: "droid_demo/clips/grid_60s_set1/cell_04_ep55941.mp4", ep: 55941, horizon: "961 frames · 60s", task: "Move the red and yellow blocks to the left" },
    { src: "droid_demo/clips/grid_60s_set1/cell_05_ep56190.mp4", ep: 56190, horizon: "961 frames · 60s", task: "Put the bird plush toy in the light green bowl" },
    { src: "droid_demo/clips/grid_60s_set1/cell_06_ep55667.mp4", ep: 55667, horizon: "961 frames · 60s", task: "Place the pink cup on the dish rack" },
    { src: "droid_demo/clips/grid_60s_set1/cell_07_ep56241.mp4", ep: 56241, horizon: "961 frames · 60s", task: "Put the objects to the right of the box in the box" },
    { src: "droid_demo/clips/grid_60s_set1/cell_08_ep55334.mp4", ep: 55334, horizon: "961 frames · 60s", task: "Move the blue cup backwards then place the green marker in the cup" },
    // Set 2
    { src: "droid_demo/clips/grid_60s_set2/cell_00_ep55859.mp4", ep: 55859, horizon: "961 frames · 60s", task: "Pick up the brown round object and put it in the green bowl" },
    { src: "droid_demo/clips/grid_60s_set2/cell_01_ep56218.mp4", ep: 56218, horizon: "961 frames · 60s", task: "Remove the screwdriver from the rack into the cup, then put the book in the box" },
    { src: "droid_demo/clips/grid_60s_set2/cell_02_ep56699.mp4", ep: 56699, horizon: "961 frames · 60s", task: "Put the ball in the top cupboard" },
    { src: "droid_demo/clips/grid_60s_set2/cell_03_ep55184.mp4", ep: 55184, horizon: "961 frames · 60s", task: "Stack up the wooden chips on the left" },
    { src: "droid_demo/clips/grid_60s_set2/cell_04_ep55456.mp4", ep: 55456, horizon: "961 frames · 60s", task: "Remove the glass lid from the pot and move the pot to the top right stove plate" },
    { src: "droid_demo/clips/grid_60s_set2/cell_05_ep56653.mp4", ep: 56653, horizon: "961 frames · 60s", task: "Pick up the pink cup and spoon and put them in the drying rack" },
    { src: "droid_demo/clips/grid_60s_set2/cell_06_ep57369.mp4", ep: 57369, horizon: "961 frames · 60s", task: "Pick up the pen from the table and put it in the blue cup" },
    { src: "droid_demo/clips/grid_60s_set2/cell_07_ep55748.mp4", ep: 55748, horizon: "961 frames · 60s", task: "Put the lid on the clear bowl" },
    { src: "droid_demo/clips/grid_60s_set2/cell_08_ep55997.mp4", ep: 55997, horizon: "961 frames · 60s", task: "Move the left tray forward" },
  ],
};

const SEKAI_CLIPS = {
  sekai_4k: [
    { src: "camera_demo/clips/grid_full_7min/cell_00_00800200001_0025919_0027719.mp4", stem: "00800200001_0025919", horizon: "4,001 frames", task: "Camera-controlled 3D exploration · Trajectory 01" },
    { src: "camera_demo/clips/grid_full_7min/cell_01_00400200002_0022866_0024666.mp4", stem: "00400200002_0022866", horizon: "4,001 frames", task: "Camera-controlled 3D exploration · Trajectory 02" },
    { src: "camera_demo/clips/grid_full_7min/cell_02_00800200002_0010319_0012119.mp4", stem: "00800200002_0010319", horizon: "4,001 frames", task: "Camera-controlled 3D exploration · Trajectory 03" },
    { src: "camera_demo/clips/grid_full_7min/cell_03_00400100001_0010050_0011850.mp4", stem: "00400100001_0010050", horizon: "4,001 frames", task: "Camera-controlled 3D exploration · Trajectory 04" },
    { src: "camera_demo/clips/grid_full_7min/cell_04_00800200001_0042119_0043919.mp4", stem: "00800200001_0042119", horizon: "4,001 frames", task: "Camera-controlled 3D exploration · Trajectory 05" },
    { src: "camera_demo/clips/grid_full_7min/cell_05_00900200001_0022650_0024450.mp4", stem: "00900200001_0022650", horizon: "4,001 frames", task: "Camera-controlled 3D exploration · Trajectory 06" },
    { src: "camera_demo/clips/grid_full_7min/cell_06_00500100002_0011850_0013650.mp4", stem: "00500100002_0011850", horizon: "4,001 frames", task: "Camera-controlled 3D exploration · Trajectory 07" },
    { src: "camera_demo/clips/grid_full_7min/cell_07_00800200002_0017519_0019319.mp4", stem: "00800200002_0017519", horizon: "4,001 frames", task: "Camera-controlled 3D exploration · Trajectory 08" },
    { src: "camera_demo/clips/grid_full_7min/cell_08_00800200003_0019058_0020858.mp4", stem: "00800200003_0019058", horizon: "4,001 frames", task: "Camera-controlled 3D exploration · Trajectory 09" },
  ],
  sekai_60s: [
    // Set 1
    { src: "camera_demo/clips/grid_60s_set1/cell_00_00100300002_0009435_0011235.mp4", stem: "00100300002_0009435", horizon: "961 frames · 60s", task: "Coastal beach & red rock formations · Set 1 #01" },
    { src: "camera_demo/clips/grid_60s_set1/cell_01_00200200003_0018203_0020003.mp4", stem: "00200200003_0018203", horizon: "961 frames · 60s", task: "Misty highland meadow exploration · Set 1 #02" },
    { src: "camera_demo/clips/grid_60s_set1/cell_02_00500100003_0001050_0002850.mp4", stem: "00500100003_0001050", horizon: "961 frames · 60s", task: "Snowy alpine lake & mountain peaks · Set 1 #03" },
    { src: "camera_demo/clips/grid_60s_set1/cell_03_00300200003_0015450_0017250.mp4", stem: "00300200003_0015450", horizon: "961 frames · 60s", task: "Forest pathway with torii gates · Set 1 #04" },
    { src: "camera_demo/clips/grid_60s_set1/cell_04_00700200003_0048481_0050281.mp4", stem: "00700200003_0048481", horizon: "961 frames · 60s", task: "Twilight rugged coastline & cliffs · Set 1 #05" },
    { src: "camera_demo/clips/grid_60s_set1/cell_05_00100100003_0005582_0007382.mp4", stem: "00100100003_0005582", horizon: "961 frames · 60s", task: "Tropical palm shoreline overlook · Set 1 #06" },
    { src: "camera_demo/clips/grid_60s_set1/cell_06_00600200001_0033450_0035250.mp4", stem: "00600200001_0033450", horizon: "961 frames · 60s", task: "Glacial valley & snow-dusted ridges · Set 1 #07" },
    { src: "camera_demo/clips/grid_60s_set1/cell_07_00400200002_0049877_0051677.mp4", stem: "00400200002_0049877", horizon: "961 frames · 60s", task: "Volcanic craggy hills under overcast sky · Set 1 #08" },
    { src: "camera_demo/clips/grid_60s_set1/cell_08_00100100003_0038287_0040087.mp4", stem: "00100100003_0038287", horizon: "961 frames · 60s", task: "Rocky coastal cliff & open ocean · Set 1 #09" },
    // Set 2
    { src: "camera_demo/clips/grid_60s_set2/cell_00_00100200001_0038401_0040201.mp4", stem: "00100200001_0038401", horizon: "961 frames · 60s", task: "Camera-controlled 3D exploration · Set 2 #01" },
    { src: "camera_demo/clips/grid_60s_set2/cell_01_00900100001_0017250_0019050.mp4", stem: "00900100001_0017250", horizon: "961 frames · 60s", task: "Camera-controlled 3D exploration · Set 2 #02" },
    { src: "camera_demo/clips/grid_60s_set2/cell_02_00700100001_0006450_0008250.mp4", stem: "00700100001_0006450", horizon: "961 frames · 60s", task: "Camera-controlled 3D exploration · Set 2 #03" },
    { src: "camera_demo/clips/grid_60s_set2/cell_03_00300200001_0002850_0004650.mp4", stem: "00300200001_0002850", horizon: "961 frames · 60s", task: "Camera-controlled 3D exploration · Set 2 #04" },
    { src: "camera_demo/clips/grid_60s_set2/cell_04_00500100001_0055050_0056850.mp4", stem: "00500100001_0055050", horizon: "961 frames · 60s", task: "Camera-controlled 3D exploration · Set 2 #05" },
    { src: "camera_demo/clips/grid_60s_set2/cell_05_00800200002_0003119_0004919.mp4", stem: "00800200002_0003119", horizon: "961 frames · 60s", task: "Camera-controlled 3D exploration · Set 2 #06" },
    { src: "camera_demo/clips/grid_60s_set2/cell_06_00400200003_0041028_0042828.mp4", stem: "00400200003_0041028", horizon: "961 frames · 60s", task: "Camera-controlled 3D exploration · Set 2 #07" },
    { src: "camera_demo/clips/grid_60s_set2/cell_07_00500200002_0029850_0031650.mp4", stem: "00500200002_0029850", horizon: "961 frames · 60s", task: "Camera-controlled 3D exploration · Set 2 #08" },
    { src: "camera_demo/clips/grid_60s_set2/cell_08_00100100001_0001050_0002850.mp4", stem: "00100100001_0001050", horizon: "961 frames · 60s", task: "Camera-controlled 3D exploration · Set 2 #09" },
  ],
};

const ALL_DATASETS = {
  ...DROID_CLIPS,
  ...SEKAI_CLIPS,
};

const GRID_VIDEOS = {
  droid_4k: [
    { src: "droid_demo/grid_ultra_4001f_set1.mp4", title: "DROID 4,001-frame Rollouts · Set 1", meta: "9 episodes · 250s @ 16fps playback" },
    { src: "droid_demo/grid_ultra_4001f_set2.mp4", title: "DROID 4,001-frame Rollouts · Set 2", meta: "9 episodes · 250s @ 16fps playback" },
  ],
  droid_60s: [
    { src: "droid_demo/grid_60s_set1.mp4", title: "DROID 60s (961-frame) Rollouts · Set 1", meta: "9 episodes · 60s @ 16fps playback" },
    { src: "droid_demo/grid_60s_set2.mp4", title: "DROID 60s (961-frame) Rollouts · Set 2", meta: "9 episodes · 60s @ 16fps playback" },
  ],
  sekai_4k: [
    { src: "camera_demo/grid_full_4001f.mp4", title: "Sekai 4,001-frame Camera Rollouts", meta: "9 scenes · 250s @ 16fps playback" },
  ],
  sekai_60s: [
    { src: "camera_demo/grid_60s_set1.mp4", title: "Sekai 60s (961-frame) Camera Rollouts · Set 1", meta: "9 scenes · 60s @ 16fps playback" },
    { src: "camera_demo/grid_60s_set2.mp4", title: "Sekai 60s (961-frame) Camera Rollouts · Set 2", meta: "9 scenes · 60s @ 16fps playback" },
  ],
};

const galleryState = {
  filter: "droid_4k",
  viewMode: "clips",
  visible: 9,
  order: Array.from({ length: 18 }, (_, i) => i),
  modalIndex: 0,
};

const bibtex = `@article{zhao2026frechetforcing,
  title   = {Fr{\\'e}chet Forcing: Training Long-Horizon Streaming World Models from Short Clips},
  author  = {Zhao, Yian and Yan, Yu and Guo, Hongcan and Zheng, Ruochong and Zhang, Jian and Chen, Jie},
  journal = {arXiv preprint},
  year    = {2026}
}`;

function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px" },
  );
  elements.forEach((el) => observer.observe(el));
}

function initHeader() {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = [...document.querySelectorAll(".site-header nav a")];
  const sections = [...document.querySelectorAll("main section[id]")];

  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 15);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileMenu.classList.toggle("open", open);
    mobileMenu.setAttribute("aria-hidden", String(!open));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("open");
      mobileMenu.setAttribute("aria-hidden", "true");
    });
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.hash === `#${visible.target.id}`);
      });
    },
    { threshold: [0.15, 0.45], rootMargin: "-20% 0px -55%" },
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

function initHeroDemo() {
  const video = document.querySelector("#hero-video");
  const frame = video.closest(".hero-video-frame");
  const title = document.querySelector("#hero-video-title");
  const meta = document.querySelector("#hero-video-meta");
  const buttons = document.querySelectorAll("[data-hero-demo]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("active")) return;
      const key = button.dataset.heroDemo;
      const item = HERO_DEMOS[key];
      buttons.forEach((candidate) =>
        candidate.classList.toggle("active", candidate === button),
      );
      frame.classList.add("switching");
      window.setTimeout(() => {
        video.src = item.source;
        title.textContent = item.title;
        meta.textContent = item.meta;
        video.play().catch(() => {});
        frame.classList.remove("switching");
      }, 180);
    });
  });
}

function createGalleryItem(sampleIndex, visualIndex) {
  const list = ALL_DATASETS[galleryState.filter];
  const clip = list[sampleIndex];
  const item = document.createElement("article");
  item.className = "gallery-item";
  item.tabIndex = 0;
  item.style.setProperty("--index", visualIndex);

  const badgeText = clip.ep ? `Episode ${clip.ep}` : `Scene ${String(sampleIndex + 1).padStart(2, "0")}`;
  item.setAttribute("aria-label", `${badgeText}: ${clip.task}`);

  const video = document.createElement("video");
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.src = clip.src;

  const badge = document.createElement("span");
  badge.className = "gallery-badge";
  badge.textContent = `${badgeText} · ${clip.horizon}`;

  const meta = document.createElement("div");
  meta.className = "gallery-item-meta";
  meta.innerHTML = `
    <div>
      <span>${clip.ep ? "DROID robot action" : "Sekai camera pose"}</span>
      <strong>${clip.task}</strong>
    </div>
    <i aria-hidden="true">↗</i>
  `;

  const play = () => video.play().catch(() => {});
  const pause = () => {
    video.pause();
  };

  item.addEventListener("mouseenter", play);
  item.addEventListener("mouseleave", pause);
  item.addEventListener("focus", play);
  item.addEventListener("blur", pause);
  item.addEventListener("click", () => openMediaModal(sampleIndex));
  item.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openMediaModal(sampleIndex);
  });

  item.append(video, badge, meta);
  return item;
}

function renderGallery() {
  const clipsContainer = document.querySelector("#clips-container");
  const gridsContainer = document.querySelector("#grids-container");
  const shuffleBtn = document.querySelector("[data-shuffle]");

  if (galleryState.viewMode === "grids") {
    clipsContainer.hidden = true;
    gridsContainer.hidden = false;
    shuffleBtn.hidden = true;
    renderGrids();
    return;
  }

  clipsContainer.hidden = false;
  gridsContainer.hidden = true;
  shuffleBtn.hidden = false;

  const list = ALL_DATASETS[galleryState.filter];
  const gallery = document.querySelector("#video-gallery");
  gallery.replaceChildren();

  const shownCount = Math.min(galleryState.visible, list.length);
  galleryState.order.slice(0, shownCount).forEach((sampleIndex, visualIndex) => {
    gallery.append(createGalleryItem(sampleIndex, visualIndex));
  });

  document.querySelector("#gallery-count").textContent = String(shownCount);
  document.querySelector("#gallery-total").textContent = String(list.length);
  document.querySelector("[data-load-more]").hidden = shownCount >= list.length;
}

function renderGrids() {
  const gridsList = document.querySelector("#grids-list");
  gridsList.replaceChildren();
  const grids = GRID_VIDEOS[galleryState.filter] || [];
  gridsList.classList.toggle("single-grid", grids.length === 1);

  grids.forEach((g) => {
    const card = document.createElement("article");
    card.className = "grid-card";
    card.innerHTML = `
      <video controls autoplay muted loop playsinline preload="metadata" src="${g.src}"></video>
      <div class="grid-card-meta">
        <strong>${g.title}</strong>
        <span>${g.meta}</span>
      </div>
    `;
    gridsList.append(card);
  });
}

function shuffled(values) {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function initGallery() {
  const filters = document.querySelectorAll("[data-filter]");
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const nextFilter = button.dataset.filter;
      if (galleryState.filter === nextFilter) return;
      galleryState.filter = nextFilter;
      const list = ALL_DATASETS[nextFilter];
      galleryState.visible = 9;
      galleryState.order = Array.from({ length: list.length }, (_, i) => i);
      filters.forEach((candidate) => {
        candidate.classList.toggle("active", candidate === button);
      });
      renderGallery();
    });
  });

  const viewButtons = document.querySelectorAll("[data-view-mode]");
  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.viewMode;
      if (galleryState.viewMode === mode) return;
      galleryState.viewMode = mode;
      viewButtons.forEach((candidate) =>
        candidate.classList.toggle("active", candidate === button),
      );
      renderGallery();
    });
  });

  document.querySelector("[data-shuffle]").addEventListener("click", () => {
    galleryState.order = shuffled(galleryState.order);
    renderGallery();
  });

  document.querySelector("[data-load-more]").addEventListener("click", () => {
    const list = ALL_DATASETS[galleryState.filter];
    galleryState.visible = Math.min(list.length, galleryState.visible + 9);
    renderGallery();
  });

  renderGallery();
}

function initMediaModal() {
  const modal = document.querySelector("#media-modal");
  modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
  modal.querySelector(".previous").addEventListener("click", () => changeModalVideo(-1));
  modal.querySelector(".next").addEventListener("click", () => changeModalVideo(1));

  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
  modal.addEventListener("close", () => {
    modal.querySelector("video").pause();
    document.body.classList.remove("modal-open");
  });

  document.addEventListener("keydown", (event) => {
    if (!modal.open) return;
    if (event.key === "ArrowLeft") changeModalVideo(-1);
    if (event.key === "ArrowRight") changeModalVideo(1);
  });
}

function openMediaModal(sampleIndex) {
  galleryState.modalIndex = galleryState.order.indexOf(sampleIndex);
  updateModalVideo();
  document.querySelector("#media-modal").showModal();
  document.body.classList.add("modal-open");
}

function changeModalVideo(direction) {
  galleryState.modalIndex =
    (galleryState.modalIndex + direction + galleryState.order.length) %
    galleryState.order.length;
  updateModalVideo();
}

function updateModalVideo() {
  const modal = document.querySelector("#media-modal");
  const sampleIndex = galleryState.order[galleryState.modalIndex];
  const list = ALL_DATASETS[galleryState.filter];
  const clip = list[sampleIndex];
  const video = modal.querySelector("video");
  video.src = clip.src;
  video.play().catch(() => {});

  const prefix = clip.ep ? `DROID Episode ${clip.ep}` : `Sekai Clip ${clip.stem}`;
  document.querySelector("#modal-subtitle").textContent = `${prefix} · ${clip.horizon}`;
  document.querySelector("#modal-title").textContent = clip.task;
}

function initResultTabs() {
  const buttons = document.querySelectorAll("[data-result-tab]");
  const panes = document.querySelectorAll("[data-pane]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.resultTab;
      buttons.forEach((candidate) =>
        candidate.classList.toggle("active", candidate === button),
      );
      panes.forEach((pane) => {
        const active = pane.dataset.pane === target;
        pane.classList.toggle("active", active);
        pane.hidden = !active;
      });
    });
  });
}

function initFigureModal() {
  const modal = document.querySelector("#figure-modal");
  const modalImg = document.querySelector("#figure-modal-img");

  document.querySelectorAll("[data-expand-src]").forEach((button) => {
    button.addEventListener("click", () => {
      modalImg.src = button.dataset.expandSrc;
      modalImg.alt = button.dataset.expandAlt || "Expanded figure";
      modal.showModal();
      document.body.classList.add("modal-open");
    });
  });

  modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
  modal.addEventListener("close", () => document.body.classList.remove("modal-open"));
}

function initCitationCopy() {
  const toast = document.querySelector(".toast");
  let timer;
  const fallback = () => {
    const textArea = document.createElement("textarea");
    textArea.value = bibtex;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  };

  document.querySelectorAll("[data-copy-citation]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(bibtex);
      } catch {
        fallback();
      }
      toast.classList.add("show");
      window.clearTimeout(timer);
      timer = window.setTimeout(() => toast.classList.remove("show"), 1600);
    });
  });
}

initRevealAnimations();
initHeader();
initHeroDemo();
initGallery();
initMediaModal();
initResultTabs();
initFigureModal();
initCitationCopy();
