/*
  مشروع عيد ميلاد روان — التخصيص كله هنا.
  غيّر النصوص والتواريخ والصور قبل ما تبعت الموقع.
*/

const storyMoments = [
  {
    chapter: "الفصل 01",
    title: "البداية",
    date: "  2017 ",
    text: "      كنت فاكر اني مراهق واني لما وقعت في حبك من ساعة ما شوفتك ان ديه حاجة بيعدي بيها اي شخص في الدنيا . مكنتش اعرف انك هتبقي كل حاجة في حياتي يا رورو"
  },
  {
    chapter: "الفصل 02",
    title: "كبرنا واتغيرنا",
    date: " فترة الثانوية",
    text: " عمري ما انسى يوم ما كنت بشوفك في الشارع صدفة , كانت كل حاجة بتتقلب ونفضل واقفين في الشارع لحد ما نلف لفة واتنين عشان نشوف بعض لمدة ثواني "
  },
  {
    chapter: "الفصل 03",
    title: "وقت ما احتجنا لبعض",
    date: " فترة الكلية ",
    text: " اعتقد مفيش حد عدى بنفس المواقف الصعبة اللي عدينا بيها وايام كتيرة اوي كانت علاقتنا صعبة وكنا ممكن في اي وقت منبقاش مع بعض , بس مسكنا في بعض وتقبلنا بعض على عيوبنا "
  },
  {
    chapter: "الفصل 04",
    title: "خطوة جديدة",
    date: " 2026 ",
    text: "كانت بداية الخطوبة نقلة كبيرة اوي في علاقتنا , عمري ما حسيت بالقرب دا ناحية حد بالطريقة ديه . فهمنا بعض اكتر وحبينا بعض اكتر وتقبلنا عيوب بعض اكتر واكتشفنا مزايا في بعض اكتر"
  },
  {
    chapter: "الفصل 05",
    title: " لسه مكملين",
    date: "12/11/2026",
    text: "لسه في ذكريات كتير مستنيانا، وأماكن هنروحها، وأيام حلوة لسه ما عشناهاش."
  }
];

const galleryMoments = [
  { file: "images/pic 5.jpeg", title: " يوم بحبه", caption: "  بداية شرارة الخطوبة كانت من اليوم دا" },
  { file: "images/pic 8.jpeg", title: "يوم مميز", caption: "  مكانتش صورة فيك . كنت ببصلك بكل حب" },
  { file: "images/pic 9.jpeg", title: " صورة بحبها", caption: " ملهاش وصف والله من حلاوتها" },
  { file: "images/pic 11.jpeg", title: "ضحكة من القلب", caption: " يوم ما الدنيا حنت علينا والله" },
  { file: "images/pic 2.jpeg", title: "لحظة غالية", caption: "  كان يوم مزعلك بس صوره حلوة معلش" },
  { file: "images/pic 4.jpeg", title: " كتكوتة ", caption: "    لسه هنعمل ذكريات كتيييير" }
];

// اكتب رسالتك الشخصية هنا. دي صيغة بداية قابلة للتعديل، مش قصة مفترضة عنكم.
const personalLetterText = `روان،

كل سنة وإنتِ طيبة، وكل سنة وإنتِ أقرب لكل حاجة نفسك فيها.
وعشان عيد ميلادك ، حبيت أعملك حاجة مختلفة شوية، حاجة تفضلي ترجعي لها وتبتسمي.

كل سنة وإنتِ أجمل حاجة حصلتلي يا روان، كل سنة وإنتِ حتة من قلبي وروحي، وكل سنة وإنتِ منورة الدنيا كلها بوجودك ❤️

أنا مش عارف أوصفلك إنتِ غالية عندي قد إيه، بس كل اللي أعرفه إن وجودك في حياتي فرق معايا بطريقة عمري ما كنت أتخيلها. إنتِ مش مجرد شخص بحبه، إنتِ الشخص اللي قلبي حبه بدون اي حاجة، واللي مهما حصل ومهما قابلت ناس، هتفضلي إنتِ ليكي مكان محدش يعرف يقرب منه.

 أنا مش بتمنالك سنة حلوة وبس، أنا بتمنالك عمرك كله وانتي طايرة من الفرحة ، وتقضي شوية من حياتك وانتي مرتاحة بقاو يبقى كله ضحك وراحة بال وتحقيق لكل حاجة نفسك فيها. نفسي أشوفك دايمًا مبسوطة، عينيكي بتضحك، وقلبك مطمن، ونفسي أكون دايمًا سبب في ابتسامتك.

عايزك تعرفي إنك بالنسبالي مش يوم حلو في السنة، إنتِ  كل يوم بالنسبالي بحس بشعور جديد، ومش مجرد أمنية اتحققت، إنتِ أحلى من كل الأمنيات.

كل سنة وإنتِ حبيبتي، وكل سنة وإنتِ أقرب واحدة لقلبي، وكل سنة وأنا بحبك أكتر من السنة اللي قبلها، ومهما كتبت ومهما قلت مش هقدر أوفيكي حتى جزء صغير من اللي جوايا.
أنا ممتن لكل لحظة حلوة شاركناها، ولكل مرة كنا فيها سند لبعض. أتمنى السنة الجديدة من عمرك تكون أهدى على قلبك، وأجمل من كل اللي فات، وتحققي فيها حاجات كتير بتتمنيها.

عيد ميلاد سعيد يا روان، يا أجمل صدفة وأحلى نصيب وأغلى إنسانة في قلبي. بحبك حب فظيع اقسم بالله ، ربنا يخليكي ليا وما يحرمنيش منك أبدًا. ❤️
أتمنى تفضلي دايمًا بخير، مطمنة، وفرحانة، وتلاقي في أيامك أسباب كتير تضحكي من قلبك.

عيد ميلاد سعيد يا روان. ♡

— حمزة `;

const timeline = document.getElementById("timeline");
const galleryGrid = document.getElementById("galleryGrid");
const letterModal = document.getElementById("letterModal");
const personalLetter = document.getElementById("personalLetter");
const envelope = document.getElementById("envelope");
const toast = document.getElementById("toast");
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicLabel = document.getElementById("musicLabel");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
let toastTimeout;

function renderTimeline() {
  timeline.innerHTML = storyMoments.map((moment, index) => `
    <article class="timeline-item reveal">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-card">
        <span class="chapter">${escapeHTML(moment.chapter)}</span>
        <h3>${escapeHTML(moment.title)}</h3>
        <p>${escapeHTML(moment.text)}</p>
      </div>
      <div class="timeline-date">${escapeHTML(moment.date)}</div>
    </article>
  `).join("");
}

function renderGallery() {
  galleryGrid.innerHTML = galleryMoments.map((moment, index) => `
    <button class="gallery-card reveal" type="button" data-index="${index}" aria-label="عرض ${escapeHTML(moment.title)}">
      <span class="gallery-photo is-placeholder">
        <img src="${escapeHTML(moment.file)}" alt="${escapeHTML(moment.title)}" loading="lazy">
        <span class="placeholder"><span>♡</span><b>${escapeHTML(moment.title)}</b><small>أضف صورة في مجلد الصور</small></span>
      </span>
      <span class="gallery-caption">${escapeHTML(moment.title)}<small>${escapeHTML(moment.caption)}</small></span>
    </button>
  `).join("");

  galleryGrid.querySelectorAll(".gallery-photo img").forEach((img) => {
    img.addEventListener("load", () => {
      img.parentElement.classList.remove("is-placeholder");
    });
    img.addEventListener("error", () => {
      img.parentElement.classList.add("is-placeholder");
    });
    if (img.complete && img.naturalWidth > 0) img.parentElement.classList.remove("is-placeholder");
  });

  galleryGrid.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => openGalleryImage(Number(card.dataset.index)));
  });
}

function openGalleryImage(index) {
  const item = galleryMoments[index];
  const img = new Image();
  img.src = item.file;
  img.onload = () => {
    const modal = document.createElement("div");
    modal.className = "modal is-open gallery-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML = `
      <div class="modal-backdrop" data-close="true"></div>
      <div class="modal-card" style="background:#21151d;color:#f5e9df;padding:18px;max-width:800px">
        <button class="modal-close" type="button" aria-label="إغلاق الصورة" data-close="true" style="color:#f5e9df">×</button>
        <img src="${escapeHTML(item.file)}" alt="${escapeHTML(item.title)}" style="width:100%;max-height:65vh;object-fit:contain;display:block">
        <h3 style="margin:14px 0 0">${escapeHTML(item.title)}</h3>
        <p style="color:#c5b0b7;margin:4px 0 0;font-size:13px">${escapeHTML(item.caption)}</p>
      </div>`;
    document.body.appendChild(modal);
    document.body.classList.add("modal-open");
    modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", () => {
      modal.remove();
      document.body.classList.remove("modal-open");
    }));
    document.addEventListener("keydown", function closeOnEscape(e) {
      if (e.key === "Escape") {
        modal.remove();
        document.body.classList.remove("modal-open");
        document.removeEventListener("keydown", closeOnEscape);
      }
    });
  };
  img.onerror = () => showToast("لسه مفيش صورة هنا — ضيف صورتك في مجلد assets/images.");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3200);
}

function openLetter() {
  personalLetter.textContent = personalLetterText;
  letterModal.classList.add("is-open");
  letterModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  envelope.classList.add("open");
  createHearts(9);
}

function closeLetter() {
  letterModal.classList.remove("is-open");
  letterModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function createHearts(amount = 18) {
  const layer = document.getElementById("heartLayer");
  const symbols = ["♡", "♥", "✧"];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.setProperty("--duration", `${3 + Math.random() * 3}s`);
    heart.style.fontSize = `${13 + Math.random() * 22}px`;
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 6500);
  }
}

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.getElementById("progressBar").style.width = `${progress}%`;
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach(el => observer.observe(el));
}

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.classList.add("is-playing");
      musicButton.setAttribute("aria-pressed", "true");
      musicLabel.textContent = "إيقاف الموسيقى";
    } catch {
      showToast("ضيف ملف موسيقى باسم music.mp3 داخل assets/audio، وبعدها جرّب تاني.");
    }
  } else {
    music.pause();
    musicButton.classList.remove("is-playing");
    musicButton.setAttribute("aria-pressed", "false");
    musicLabel.textContent = "شغّل الموسيقى";
  }
});

document.getElementById("openLetterButton").addEventListener("click", openLetter);
envelope.addEventListener("click", openLetter);
envelope.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openLetter();
  }
});
letterModal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeLetter));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && letterModal.classList.contains("is-open")) closeLetter();
});

document.getElementById("surpriseButton").addEventListener("click", () => {
  createHearts(48);
  showToast("كل سنة وإنتِ طيبة يا روان ♡ افتكري دايمًا إنك تستاهلي كل حاجة حلوة.");
});

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));

window.addEventListener("scroll", updateScrollProgress, { passive: true });

renderTimeline();
renderGallery();
setupRevealAnimations();
updateScrollProgress();
