const CHALLENGES = [
  {
    id: "temperature",
    title: "1) Temperature Regulation",
    text: "Cold nights and wind increase heat loss. Your organism must keep internal temperature stable.",
    traits: [
      { id: "dense_fur", name: "Dense insulating fur", icon: "🧥", desc: "Traps warm air near the body.", effect: 3, tradeoff: "Better insulation can increase overheating risk." },
      { id: "countercurrent", name: "Countercurrent heat exchange", icon: "🩸", desc: "Warm and cool blood vessels exchange heat.", effect: 3, tradeoff: "Specialised circulation needs biological investment." },
      { id: "large_ears", name: "Large vascularised ears", icon: "👂", desc: "Releases heat through blood-rich ears.", effect: -1, tradeoff: "Good for cooling, but can increase heat loss in cold air." },
      { id: "thin_skin_loss", name: "Thin skin heat loss", icon: "💨", desc: "Thin skin lets heat leave quickly.", effect: -2, tradeoff: "Helps cooling but reduces cold tolerance." },
      { id: "fat_blubber", name: "Subcutaneous fat layer", icon: "🧈", desc: "Fat stores energy and insulates.", effect: 2, tradeoff: "Extra mass can reduce sprint speed." },
      { id: "small_body", name: "Very small body size", icon: "🐭", desc: "Loses heat quickly due to high surface area.", effect: -2, tradeoff: "Can hide easily in small spaces." },
      { id: "night_torpor", name: "Night-time torpor", icon: "🌙", desc: "Temporarily lowers energy and heat demand.", effect: 1, tradeoff: "Low responsiveness can increase danger if disturbed." },
      { id: "dark_absorb", name: "Dark heat-absorbing surface", icon: "⬛", desc: "Absorbs solar radiation during daylight.", effect: 1, tradeoff: "Can overheat under strong midday sun." }
    ]
  },
  {
    id: "oxygen",
    title: "2) Oxygen Acquisition",
    text: "Oxygen supply is limited. Your organism must keep tissues supplied during activity or low-oxygen periods.",
    traits: [
      { id: "oxygen_store", name: "Large oxygen stores", icon: "🫁", desc: "High myoglobin/blood stores hold extra oxygen.", effect: 3, tradeoff: "Maintaining these tissues uses resources." },
      { id: "dive_reflex", name: "Dive reflex", icon: "🌊", desc: "Slows heart rate to conserve oxygen.", effect: 2, tradeoff: "Lower circulation can reduce rapid movement capacity." },
      { id: "high_alt_eff", name: "High-altitude oxygen efficiency", icon: "🏔️", desc: "Blood captures oxygen effectively in thin air.", effect: 3, tradeoff: "Performance can vary under sea-level conditions." },
      { id: "enhanced_resp", name: "Enhanced respiration", icon: "🎈", desc: "Lungs/airflow increase gas-exchange efficiency.", effect: 2, tradeoff: "Complex respiratory structures are vulnerable to damage." },
      { id: "hypoxia_tol", name: "Hypoxia tolerance", icon: "🛡️", desc: "Cells continue functioning with less oxygen.", effect: 2, tradeoff: "Often linked to slower peak output." },
      { id: "low_metabolic", name: "Low metabolic demand", icon: "🐢", desc: "Uses oxygen slowly.", effect: 2, tradeoff: "Reduced high-speed performance." },
      { id: "tiny_lungs", name: "Small simple lungs", icon: "📦", desc: "Limited exchange area.", effect: -2, tradeoff: "Low maintenance cost, low oxygen throughput." },
      { id: "thick_shell", name: "Heavy armour shell", icon: "🛡", desc: "Protection but restricts efficient ventilation.", effect: -1, tradeoff: "Defence can conflict with oxygen delivery." }
    ]
  },
  {
    id: "predator",
    title: "3) Predator Avoidance",
    text: "Visual hunters are common. Your organism must reduce detection or escape attacks.",
    traits: [
      { id: "camouflage", name: "Camouflage", icon: "🟫", desc: "Body colours blend with habitat.", effect: 3, tradeoff: "Less effective if background changes." },
      { id: "pattern_disrupt", name: "Pattern disruption", icon: "🌀", desc: "Stripes/spots break body outline.", effect: 2, tradeoff: "Pattern that works in one habitat may fail in another." },
      { id: "vigilance", name: "Vigilance", icon: "👀", desc: "Frequent scanning detects threats early.", effect: 2, tradeoff: "Time spent scanning reduces feeding time." },
      { id: "rapid_escape", name: "Rapid escape", icon: "💨", desc: "Fast acceleration to flee.", effect: 2, tradeoff: "Requires high energy intake." },
      { id: "spines", name: "Spines", icon: "🌵", desc: "Makes handling by predators difficult.", effect: 2, tradeoff: "Spine growth carries energy cost." },
      { id: "curl_ball", name: "Curl into ball", icon: "⚪", desc: "Protects soft tissues behind armour/spines.", effect: 2, tradeoff: "Cannot run while curled." },
      { id: "bright_display", name: "Bright display colours", icon: "🌈", desc: "Conspicuous body pattern.", effect: -2, tradeoff: "Useful for signalling, but increases visibility." },
      { id: "noisy_move", name: "Noisy movement", icon: "🔔", desc: "Creates sound while moving.", effect: -2, tradeoff: "Social signalling benefit, high detection risk." }
    ]
  },
  {
    id: "competition",
    title: "4) Resource Competition",
    text: "Food is limited and many species feed nearby. Your organism must access resources efficiently.",
    traits: [
      { id: "seed_beak", name: "Seed crushing beak", icon: "🥜", desc: "Breaks hard seeds quickly.", effect: 2, tradeoff: "Less efficient at probing insects." },
      { id: "jaw_muscle", name: "Strong jaw muscle", icon: "💪", desc: "Increases bite force.", effect: 2, tradeoff: "Muscle maintenance increases energy demand." },
      { id: "insect_probe", name: "Insect probing", icon: "🪱", desc: "Accesses insects in bark/crevices.", effect: 2, tradeoff: "Less useful where insects are scarce." },
      { id: "slender_beak", name: "Slender beak", icon: "🪶", desc: "Precision feeding in narrow spaces.", effect: 2, tradeoff: "Weak force on hard food items." },
      { id: "generalist_diet", name: "Generalist digestion", icon: "🍽️", desc: "Uses many food types.", effect: 2, tradeoff: "Not the most efficient specialist." },
      { id: "food_cache", name: "Food caching", icon: "📦", desc: "Stores food for later shortages.", effect: 1, tradeoff: "Cached stores can be stolen." },
      { id: "huge_body", name: "Very high food demand", icon: "🦛", desc: "Large body requires heavy intake.", effect: -2, tradeoff: "Can outcompete others physically but is costly." },
      { id: "short_feed", name: "Short feeding window", icon: "⏰", desc: "Feeds for a limited daily period.", effect: -1, tradeoff: "May avoid crowding but loses opportunities." }
    ]
  }
];

// Curated mapping: extend by adding new pair keys under each challenge id.
// Key format: sorted trait ids joined by "|".
const MATCHES = {
  temperature: {
    "countercurrent|dense_fur": {
      name: "Arctic fox (Vulpes lagopus)",
      text: "Dense fur reduces heat loss, and heat exchange in blood vessels helps conserve core temperature in cold conditions."
    },
    "large_ears|thin_skin_loss": {
      name: "African elephant (Loxodonta africana)",
      text: "Large vascularised ears and thin heat-dissipating surfaces increase heat transfer away from the body."
    }
  },
  oxygen: {
    "dive_reflex|oxygen_store": {
      name: "Harbour seal (Phoca vitulina)",
      text: "Large oxygen reserves and a dive reflex support longer submersion with reduced oxygen use."
    },
    "enhanced_resp|high_alt_eff": {
      name: "Bar-headed goose (Anser indicus)",
      text: "High oxygen uptake efficiency and strong respiratory performance support activity in low-oxygen air."
    },
    "hypoxia_tol|low_metabolic": {
      name: "Naked mole-rat (Heterocephalus glaber)",
      text: "Tolerance of low oxygen plus low demand helps survival in poorly ventilated underground burrows."
    }
  },
  predator: {
    "camouflage|pattern_disrupt": {
      name: "Chameleon (Chamaeleonidae)",
      text: "Camouflage and body patterning can reduce visual detection by predators."
    },
    "rapid_escape|vigilance": {
      name: "Zebra (Equus quagga)",
      text: "Early detection and quick escape improve survival when predators approach."
    },
    "curl_ball|spines": {
      name: "European hedgehog (Erinaceus europaeus)",
      text: "Spines and curling behaviour create a defensive barrier that discourages attacks."
    }
  },
  competition: {
    "jaw_muscle|seed_beak": {
      name: "Large ground finch (Geospiza magnirostris)",
      text: "Robust beak structure and high bite force allow efficient cracking of hard seeds."
    },
    "insect_probe|slender_beak": {
      name: "Tree finch / woodpecker finch (Camarhynchus spp.)",
      text: "A slender probing beak helps extract insects from bark and narrow feeding sites."
    }
  }
};

const progressSteps = document.getElementById("progressSteps");
const progressFill = document.getElementById("progressFill");
const challengeScreen = document.getElementById("challengeScreen");
const feedbackScreen = document.getElementById("feedbackScreen");
const summaryScreen = document.getElementById("summaryScreen");
const challengeHeading = document.getElementById("challengeHeading");
const challengeText = document.getElementById("challengeText");
const selectionText = document.getElementById("selectionText");
const traitGrid = document.getElementById("traitGrid");
const evaluateBtn = document.getElementById("evaluateBtn");
const survivalBadge = document.getElementById("survivalBadge");
const feedbackBullets = document.getElementById("feedbackBullets");
const tradeoffText = document.getElementById("tradeoffText");
const matchName = document.getElementById("matchName");
const matchExplain = document.getElementById("matchExplain");
const retryBtn = document.getElementById("retryBtn");
const nextBtn = document.getElementById("nextBtn");
const summaryBody = document.getElementById("summaryBody");
const toolkitList = document.getElementById("toolkitList");
const creatureCanvas = document.getElementById("creatureCanvas");
const imagePrompt = document.getElementById("imagePrompt");
const emojiRow = document.getElementById("emojiRow");
const thanksText = document.getElementById("thanksText");
const restartBtn = document.getElementById("restartBtn");

let challengeIndex = 0;
let selected = [];
let results = [];

function pairKey(a, b) {
  return [a, b].sort().join("|");
}

function initProgress() {
  progressSteps.innerHTML = "";
  CHALLENGES.forEach((c, i) => {
    const li = document.createElement("li");
    li.textContent = c.title.replace(/^\d\) /, "");
    if (i === challengeIndex) li.classList.add("active");
    progressSteps.appendChild(li);
  });
}

function updateProgress() {
  const steps = [...progressSteps.children];
  steps.forEach((li, i) => {
    li.classList.toggle("done", i < challengeIndex);
    li.classList.toggle("active", i === challengeIndex);
  });
  const percent = ((challengeIndex + 1) / CHALLENGES.length) * 100;
  progressFill.style.width = `${percent}%`;
  progressFill.parentElement.setAttribute("aria-valuenow", String(challengeIndex + 1));
}

function renderChallenge() {
  challengeScreen.classList.remove("hidden");
  feedbackScreen.classList.add("hidden");
  summaryScreen.classList.add("hidden");
  selected = [];

  const current = CHALLENGES[challengeIndex];
  challengeHeading.textContent = current.title;
  challengeText.textContent = current.text;
  selectionText.textContent = "Select exactly 2 traits (0/2).";
  evaluateBtn.disabled = true;

  traitGrid.innerHTML = "";
  current.traits.forEach(trait => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "trait-btn";
    btn.setAttribute("aria-pressed", "false");
    btn.innerHTML = `<strong>${trait.icon} ${trait.name}</strong><span>${trait.desc}</span>`;
    btn.addEventListener("click", () => toggleTrait(trait.id, btn));
    traitGrid.appendChild(btn);
  });
  updateProgress();
}

function toggleTrait(traitId, button) {
  if (selected.includes(traitId)) {
    selected = selected.filter(s => s !== traitId);
  } else {
    if (selected.length >= 2) return;
    selected.push(traitId);
  }
  [...traitGrid.children].forEach((btn, idx) => {
    const id = CHALLENGES[challengeIndex].traits[idx].id;
    const on = selected.includes(id);
    btn.classList.toggle("selected", on);
    btn.setAttribute("aria-pressed", String(on));
  });
  selectionText.textContent = `Select exactly 2 traits (${selected.length}/2).`;
  evaluateBtn.disabled = selected.length !== 2;
}

function evaluate() {
  const current = CHALLENGES[challengeIndex];
  const chosenTraits = current.traits.filter(t => selected.includes(t.id));
  const scoreRaw = chosenTraits.reduce((s, t) => s + t.effect, 0);
  let scoreLabel = "Low";
  if (scoreRaw >= 4) scoreLabel = "High";
  else if (scoreRaw >= 1) scoreLabel = "Medium";

  const positive = chosenTraits.filter(t => t.effect > 0).map(t => t.name);
  const negative = chosenTraits.filter(t => t.effect < 0).map(t => t.name);
  const bullets = [];
  bullets.push(`Survival score: ${scoreLabel}.`);
  bullets.push(positive.length ? `Helpful inherited variation: ${positive.join(" + ")}.` : "This pair gives little direct benefit for this constraint.");
  bullets.push(negative.length ? `Limiting effects: ${negative.join(" + ")} can reduce success.` : "No major direct penalty in this pair; context still matters.");
  bullets.push("Natural selection can increase these variants if individuals with them leave more offspring.");

  const key = pairKey(chosenTraits[0].id, chosenTraits[1].id);
  const curated = MATCHES[current.id][key] || {
    name: "No close single-species match",
    text: "This combination resembles a mixed strategy seen across different lineages rather than one classic textbook example."
  };

  const outcome = {
    challengeId: current.id,
    challengeName: current.title.replace(/^\d\) /, ""),
    traitIds: selected.slice(),
    traitNames: chosenTraits.map(t => t.name),
    score: scoreLabel,
    tradeoff: `${chosenTraits[0].tradeoff} ${chosenTraits[1].tradeoff}`,
    bullets,
    match: curated
  };
  results[challengeIndex] = outcome;

  showFeedback(outcome);
}

function showFeedback(outcome) {
  challengeScreen.classList.add("hidden");
  feedbackScreen.classList.remove("hidden");
  survivalBadge.textContent = `Survival score: ${outcome.score}`;
  survivalBadge.className = "badge";
  survivalBadge.classList.add(outcome.score.toLowerCase());
  feedbackBullets.innerHTML = "";
  outcome.bullets.forEach(line => {
    const li = document.createElement("li");
    li.textContent = line;
    feedbackBullets.appendChild(li);
  });
  tradeoffText.textContent = `Trade-off: ${outcome.tradeoff}`;
  matchName.textContent = outcome.match.name;
  matchExplain.textContent = outcome.match.text;

  // Next button locked unless this challenge has a completed choice.
  nextBtn.disabled = !results[challengeIndex];
}

function toNext() {
  if (!results[challengeIndex]) return;
  if (challengeIndex < CHALLENGES.length - 1) {
    challengeIndex += 1;
    renderChallenge();
  } else {
    renderSummary();
  }
}

function renderSummary() {
  challengeScreen.classList.add("hidden");
  feedbackScreen.classList.add("hidden");
  summaryScreen.classList.remove("hidden");

  summaryBody.innerHTML = "";
  const allTraits = [];
  results.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${r.challengeName}</td><td>${r.traitNames.join(" + ")}</td>`;
    summaryBody.appendChild(tr);
    allTraits.push(...r.traitNames);
  });
  toolkitList.textContent = allTraits.join(", ");
  drawCreature(results.flatMap(r => r.traitIds));
  imagePrompt.value = buildImagePrompt(allTraits);
  initEmojiRow();
}

// Procedural creature renderer: extend by mapping additional trait ids to extra visuals.
function drawCreature(traitIds) {
  const ctx = creatureCanvas.getContext("2d");
  const W = creatureCanvas.width;
  const H = creatureCanvas.height;
  ctx.clearRect(0, 0, W, H);

  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "#e8f4ff");
  grad.addColorStop(1, "#f9fdff");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#d6e5cf";
  ctx.fillRect(0, H - 100, W, 100);

  // body
  ctx.save();
  ctx.translate(W / 2, H / 2 + 20);
  const bodyColor = traitIds.includes("camouflage") ? "#7a8b5f" : "#8c7a67";
  ctx.fillStyle = bodyColor;
  ctx.beginPath();
  ctx.ellipse(0, 0, 180, 95, 0, 0, Math.PI * 2);
  ctx.fill();

  // shading
  ctx.fillStyle = "rgba(0,0,0,.08)";
  ctx.beginPath();
  ctx.ellipse(20, 20, 140, 60, 0, 0, Math.PI * 2);
  ctx.fill();

  // head
  ctx.fillStyle = bodyColor;
  ctx.beginPath();
  ctx.ellipse(-165, -20, 65, 50, 0, 0, Math.PI * 2);
  ctx.fill();

  // ears
  const earScale = traitIds.includes("large_ears") ? 1.8 : 1;
  ctx.fillStyle = "#b9917a";
  ctx.beginPath(); ctx.ellipse(-195, -70, 20 * earScale, 35 * earScale, -0.2, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(-145, -75, 20 * earScale, 35 * earScale, 0.2, 0, Math.PI * 2); ctx.fill();

  // fur texture
  if (traitIds.includes("dense_fur")) {
    ctx.strokeStyle = "rgba(255,255,255,.26)";
    for (let i = -170; i < 160; i += 10) {
      ctx.beginPath();
      ctx.moveTo(i, -30);
      ctx.lineTo(i + 6, -42);
      ctx.stroke();
    }
  }

  // stripes/pattern
  if (traitIds.includes("pattern_disrupt")) {
    ctx.strokeStyle = "rgba(40,40,40,.35)";
    ctx.lineWidth = 6;
    for (let i = -120; i <= 120; i += 30) {
      ctx.beginPath();
      ctx.moveTo(i, -60);
      ctx.lineTo(i + 12, 60);
      ctx.stroke();
    }
    ctx.lineWidth = 1;
  }

  // spines
  if (traitIds.includes("spines")) {
    ctx.fillStyle = "#4a3c30";
    for (let i = -80; i <= 150; i += 14) {
      ctx.beginPath();
      ctx.moveTo(i, -80);
      ctx.lineTo(i + 6, -118);
      ctx.lineTo(i + 12, -80);
      ctx.fill();
    }
  }

  // beak variant
  if (traitIds.includes("seed_beak") || traitIds.includes("slender_beak")) {
    ctx.fillStyle = "#d5ad44";
    ctx.beginPath();
    const len = traitIds.includes("slender_beak") ? 35 : 24;
    ctx.moveTo(-220, -26);
    ctx.lineTo(-220 - len, -18);
    ctx.lineTo(-220, -10);
    ctx.closePath();
    ctx.fill();
  }

  // legs
  const legLen = traitIds.includes("rapid_escape") ? 85 : 62;
  ctx.strokeStyle = "#61493c";
  ctx.lineWidth = 8;
  [[-70, 70], [20, 70], [90, 60]].forEach(([x, y]) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + legLen);
    ctx.stroke();
  });

  // eye
  ctx.fillStyle = "#fff";
  ctx.beginPath(); ctx.arc(-180, -25, 9, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#111";
  ctx.beginPath(); ctx.arc(-181, -25, 4, 0, Math.PI * 2); ctx.fill();

  ctx.restore();
}

function buildImagePrompt(traits) {
  return `Photorealistic natural history museum illustration of a fictional vertebrate with the following inherited traits: ${traits.join(", ")}. Show realistic texture, soft directional lighting, neutral habitat background, side profile, full body visible, high detail biological features that clearly reflect each listed trait.`;
}

function initEmojiRow() {
  const emojis = ["😡", "😕", "😐", "🙂", "😄"];
  const stored = localStorage.getItem("wys_rating");
  emojiRow.innerHTML = "";
  emojis.forEach((emoji) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "emoji-btn";
    btn.textContent = emoji;
    btn.setAttribute("aria-label", `Rate ${emoji}`);
    if (stored === emoji) btn.classList.add("selected");
    btn.addEventListener("click", () => {
      localStorage.setItem("wys_rating", emoji);
      [...emojiRow.children].forEach(c => c.classList.remove("selected"));
      btn.classList.add("selected");
      thanksText.textContent = "Thanks!";
    });
    emojiRow.appendChild(btn);
  });
  if (stored) thanksText.textContent = "Thanks!";
}

function restartGame() {
  challengeIndex = 0;
  results = [];
  initProgress();
  renderChallenge();
}

evaluateBtn.addEventListener("click", evaluate);
retryBtn.addEventListener("click", renderChallenge);
nextBtn.addEventListener("click", toNext);
restartBtn.addEventListener("click", restartGame);

initProgress();
renderChallenge();
