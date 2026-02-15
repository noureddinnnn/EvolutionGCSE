const CHALLENGES = [
  {
    id: "temperature",
    title: "1) Temperature Regulation",
    text: "Cold nights and wind increase heat loss. Your organism must keep internal temperature stable.",
    traits: [
      { id: "dense_fur", name: "Dense insulating fur", icon: "🧥", desc: "Traps warm air close to the skin.", effect: 3, tradeoff: "Better insulation can increase overheating risk." },
      { id: "countercurrent", name: "Countercurrent heat exchange", icon: "🩸", desc: "Heat is transferred between blood vessels.", effect: 3, tradeoff: "Specialised blood vessel arrangements require developmental cost." },
      { id: "large_ears", name: "Large vascularised ears", icon: "👂", desc: "Large blood-rich ears release heat rapidly.", effect: -1, tradeoff: "Useful for cooling, but increases heat loss in the cold." },
      { id: "thin_skin_loss", name: "Thin skin heat loss", icon: "💨", desc: "Thin tissue increases heat transfer to air.", effect: -2, tradeoff: "Cooling improves, but cold tolerance drops." },
      { id: "fat_blubber", name: "Subcutaneous fat layer", icon: "🧈", desc: "Insulates and stores energy.", effect: 2, tradeoff: "Extra mass can reduce acceleration." },
      { id: "small_body", name: "Very small body size", icon: "🐭", desc: "High surface area speeds heat loss.", effect: -2, tradeoff: "Can move through tiny shelters." },
      { id: "night_torpor", name: "Night-time torpor", icon: "🌙", desc: "Temporarily lowers energy and heat demand.", effect: 1, tradeoff: "Responses are slower during torpor." },
      { id: "dark_absorb", name: "Dark heat-absorbing surface", icon: "⬛", desc: "Absorbs more solar energy in daylight.", effect: 1, tradeoff: "May increase daytime overheating." }
    ]
  },
  {
    id: "oxygen",
    title: "2) Oxygen Acquisition",
    text: "Oxygen is limited. Your organism must keep tissues supplied during activity or low-oxygen periods.",
    traits: [
      { id: "oxygen_store", name: "Large oxygen stores", icon: "🫁", desc: "Blood and muscle tissues hold extra oxygen.", effect: 3, tradeoff: "Maintaining these tissues costs energy." },
      { id: "dive_reflex", name: "Dive reflex", icon: "🌊", desc: "Heart rate slows to conserve oxygen.", effect: 2, tradeoff: "Reduced circulation can limit peak movement." },
      { id: "high_alt_eff", name: "High-altitude oxygen efficiency", icon: "🏔️", desc: "Blood captures oxygen efficiently in thin air.", effect: 3, tradeoff: "Performance can differ across oxygen conditions." },
      { id: "enhanced_resp", name: "Enhanced respiration", icon: "🎈", desc: "Respiratory surfaces improve gas exchange.", effect: 2, tradeoff: "More complex anatomy can be vulnerable to damage." },
      { id: "hypoxia_tol", name: "Hypoxia tolerance", icon: "🛡️", desc: "Cells function for longer with low oxygen.", effect: 2, tradeoff: "Peak power output is often lower." },
      { id: "low_metabolic", name: "Low metabolic demand", icon: "🐢", desc: "Uses oxygen more slowly.", effect: 2, tradeoff: "Rapid movements become harder to sustain." },
      { id: "tiny_lungs", name: "Small simple lungs", icon: "📦", desc: "Limited area for gas exchange.", effect: -2, tradeoff: "Low maintenance cost but poor oxygen throughput." },
      { id: "thick_shell", name: "Heavy armour shell", icon: "🛡", desc: "Protection can restrict efficient ventilation.", effect: -1, tradeoff: "Defence can conflict with oxygen delivery." }
    ]
  },
  {
    id: "predator",
    title: "3) Predator Avoidance",
    text: "Visual hunters are common. Your organism must lower detection or escape attacks quickly.",
    traits: [
      { id: "camouflage", name: "Camouflage", icon: "🟫", desc: "Body colours blend with background.", effect: 3, tradeoff: "Works less well if habitat changes." },
      { id: "pattern_disrupt", name: "Pattern disruption", icon: "🌀", desc: "Patterns break up body outline.", effect: 2, tradeoff: "Pattern advantage depends on habitat patterning." },
      { id: "vigilance", name: "Vigilance", icon: "👀", desc: "Frequent scanning detects threats early.", effect: 2, tradeoff: "Time spent watching can reduce feeding." },
      { id: "rapid_escape", name: "Rapid escape", icon: "💨", desc: "High acceleration improves escape chance.", effect: 2, tradeoff: "Fast muscle fibres increase energy demand." },
      { id: "spines", name: "Spines", icon: "🌵", desc: "Harder for predators to grip.", effect: 2, tradeoff: "Spine growth and maintenance need resources." },
      { id: "curl_ball", name: "Curl into ball", icon: "⚪", desc: "Protects vulnerable body surfaces.", effect: 2, tradeoff: "Cannot run while curled." },
      { id: "bright_display", name: "Bright display colours", icon: "🌈", desc: "Conspicuous visual signal.", effect: -2, tradeoff: "Can help social signalling but increase detection." },
      { id: "noisy_move", name: "Noisy movement", icon: "🔔", desc: "Movement produces easily detected sound.", effect: -2, tradeoff: "Can aid group communication while raising risk." }
    ]
  },
  {
    id: "competition",
    title: "4) Resource Competition",
    text: "Food is limited. Your organism must access resources efficiently when other species are present.",
    traits: [
      { id: "seed_beak", name: "Seed crushing beak", icon: "🥜", desc: "Breaks hard seeds quickly.", effect: 2, tradeoff: "Less effective for probing insects." },
      { id: "jaw_muscle", name: "Strong jaw muscle", icon: "💪", desc: "Increases bite force for hard food.", effect: 2, tradeoff: "Muscle maintenance raises energy needs." },
      { id: "insect_probe", name: "Insect probing", icon: "🪱", desc: "Accesses hidden insects in bark or crevices.", effect: 2, tradeoff: "Less useful where insect density is low." },
      { id: "slender_beak", name: "Slender beak", icon: "🪶", desc: "Precise feeding in narrow spaces.", effect: 2, tradeoff: "Low force on hard food items." },
      { id: "generalist_diet", name: "Generalist digestion", icon: "🍽️", desc: "Uses wider food range.", effect: 2, tradeoff: "Not a top specialist at any one food type." },
      { id: "food_cache", name: "Food caching", icon: "📦", desc: "Stores food for later scarcity.", effect: 1, tradeoff: "Stored food can be stolen." },
      { id: "huge_body", name: "Very high food demand", icon: "🦛", desc: "Large body requires heavy intake.", effect: -2, tradeoff: "Potential dominance advantage but expensive to sustain." },
      { id: "short_feed", name: "Short feeding window", icon: "⏰", desc: "Limited feeding time each day.", effect: -1, tradeoff: "May avoid crowding but misses opportunities." }
    ]
  }
];

// Match-card colour themes are set here by challenge id.
const MATCH_THEME_CLASS = {
  temperature: "theme-temperature",
  oxygen: "theme-oxygen",
  predator: "theme-predator",
  competition: "theme-competition"
};

const MATCHES = {
  temperature: {
    "countercurrent|dense_fur": {
      common: "Arctic fox",
      scientific: "Vulpes lagopus",
      explanation: "Dense fur reduces heat loss and countercurrent blood flow helps keep core heat inside the body.",
      fact: "Fun fact: Arctic fox paws are furred, which helps insulation against snow and ice.",
      silhouette: "fox"
    },
    "large_ears|thin_skin_loss": {
      common: "African elephant",
      scientific: "Loxodonta africana",
      explanation: "Large blood-rich ears and thin heat-dissipating surfaces release heat effectively in hot conditions.",
      fact: "Fun fact: Ear flapping increases airflow, speeding heat transfer.",
      silhouette: "elephant"
    }
  },
  oxygen: {
    "dive_reflex|oxygen_store": {
      common: "Harbour seal",
      scientific: "Phoca vitulina",
      explanation: "Large oxygen reserves and the dive reflex support longer dives while oxygen use is reduced.",
      fact: "Fun fact: Seals can redirect blood flow to protect oxygen for key organs.",
      silhouette: "seal"
    },
    "enhanced_resp|high_alt_eff": {
      common: "Bar-headed goose",
      scientific: "Anser indicus",
      explanation: "Efficient oxygen capture and strong respiratory function support flight in thin high-altitude air.",
      fact: "Fun fact: This goose can migrate over the Himalayas.",
      silhouette: "bird"
    },
    "hypoxia_tol|low_metabolic": {
      common: "Naked mole-rat",
      scientific: "Heterocephalus glaber",
      explanation: "Low oxygen tolerance and reduced oxygen demand support survival in poorly ventilated burrows.",
      fact: "Fun fact: Naked mole-rats live in underground colonies with low oxygen levels.",
      silhouette: "molerat"
    }
  },
  predator: {
    "camouflage|pattern_disrupt": {
      common: "Chameleon",
      scientific: "Chamaeleonidae",
      explanation: "Camouflage and patterning can reduce visual detection by predators in complex habitats.",
      fact: "Fun fact: Chameleon skin cells can shift appearance by changing nanostructure spacing.",
      silhouette: "lizard"
    },
    "rapid_escape|vigilance": {
      common: "Zebra",
      scientific: "Equus quagga",
      explanation: "Early detection plus fast escape improves survival when predators approach.",
      fact: "Fun fact: Zebra groups often use collective vigilance while grazing.",
      silhouette: "zebra"
    },
    "curl_ball|spines": {
      common: "European hedgehog",
      scientific: "Erinaceus europaeus",
      explanation: "Spines and curling behaviour combine to protect soft body surfaces from attack.",
      fact: "Fun fact: Hedgehogs contract strong back muscles to tighten the protective ball shape.",
      silhouette: "hedgehog"
    }
  },
  competition: {
    "jaw_muscle|seed_beak": {
      common: "Large ground finch",
      scientific: "Geospiza magnirostris",
      explanation: "A robust beak and strong jaw muscles increase success when cracking tough seeds.",
      fact: "Fun fact: Finch beak shapes vary across islands and food types.",
      silhouette: "bird"
    },
    "insect_probe|slender_beak": {
      common: "Tree finch / woodpecker finch",
      scientific: "Camarhynchus spp.",
      explanation: "Slender probing beaks help reach insects inside bark and narrow feeding sites.",
      fact: "Fun fact: Some finches even use twigs as tools to extract prey.",
      silhouette: "bird"
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
const matchCard = document.getElementById("matchCard");
const matchName = document.getElementById("matchName");
const matchExplain = document.getElementById("matchExplain");
const matchFact = document.getElementById("matchFact");
const matchThumb = document.getElementById("matchThumb");
const retryBtn = document.getElementById("retryBtn");
const nextBtn = document.getElementById("nextBtn");
const summaryBody = document.getElementById("summaryBody");
const toolkitList = document.getElementById("toolkitList");
const creatureCanvas = document.getElementById("creatureCanvas");
const imagePrompt = document.getElementById("imagePrompt");
const downloadBtn = document.getElementById("downloadBtn");
const emojiRow = document.getElementById("emojiRow");
const commentsBox = document.getElementById("commentsBox");
const saveFeedbackBtn = document.getElementById("saveFeedbackBtn");
const thanksText = document.getElementById("thanksText");
const savedLocal = document.getElementById("savedLocal");
const restartBtn = document.getElementById("restartBtn");
const soundToggle = document.getElementById("soundToggle");

let challengeIndex = 0;
let selected = [];
let results = [];
let selectedEmoji = localStorage.getItem("wys_rating") || "";
let soundEnabled = localStorage.getItem("wys_sound") !== "off";
soundToggle.checked = soundEnabled;

function pairKey(a, b) {
  return [a, b].sort().join("|");
}

function initProgress() {
  progressSteps.innerHTML = "";
  CHALLENGES.forEach((challenge, index) => {
    const li = document.createElement("li");
    li.textContent = challenge.title.replace(/^\d\) /, "");
    if (index === challengeIndex) li.classList.add("active");
    progressSteps.appendChild(li);
  });
}

function updateProgress() {
  [...progressSteps.children].forEach((li, index) => {
    li.classList.toggle("done", index < challengeIndex);
    li.classList.toggle("active", index === challengeIndex);
  });
  progressFill.style.width = `${((challengeIndex + 1) / CHALLENGES.length) * 100}%`;
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

  current.traits.forEach((trait) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "trait-btn";
    btn.setAttribute("aria-pressed", "false");
    btn.innerHTML = `<strong>${trait.icon} ${trait.name}</strong><span>${trait.desc}</span>`;
    btn.addEventListener("click", () => toggleTrait(trait.id));
    traitGrid.appendChild(btn);
  });
  updateProgress();
}

function toggleTrait(traitId) {
  if (selected.includes(traitId)) selected = selected.filter((item) => item !== traitId);
  else if (selected.length < 2) selected.push(traitId);

  [...traitGrid.children].forEach((button, index) => {
    const trait = CHALLENGES[challengeIndex].traits[index];
    const isActive = selected.includes(trait.id);
    button.classList.toggle("selected", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  selectionText.textContent = `Select exactly 2 traits (${selected.length}/2).`;
  evaluateBtn.disabled = selected.length !== 2;
}

function evaluateSelection() {
  const current = CHALLENGES[challengeIndex];
  const chosenTraits = current.traits.filter((trait) => selected.includes(trait.id));
  const scoreRaw = chosenTraits.reduce((total, trait) => total + trait.effect, 0);
  const score = scoreRaw >= 4 ? "High" : scoreRaw >= 1 ? "Medium" : "Low";

  const bullets = [
    `Survival score: ${score}.`,
    chosenTraits.some((t) => t.effect > 0)
      ? `Helpful inherited variation: ${chosenTraits.filter((t) => t.effect > 0).map((t) => t.name).join(" + ")}.`
      : "These selected variants provide little direct benefit for this challenge.",
    chosenTraits.some((t) => t.effect < 0)
      ? `Limiting effects: ${chosenTraits.filter((t) => t.effect < 0).map((t) => t.name).join(" + ")} reduce likely success.`
      : "No strong direct penalty appears in this pair, but context still matters.",
    "If individuals carrying this combination leave more offspring, these variants can become more common over generations."
  ];

  const key = pairKey(chosenTraits[0].id, chosenTraits[1].id);
  const fallback = {
    common: "Mixed strategy example",
    scientific: "multiple lineages",
    explanation: "This pair resembles solutions seen across different groups rather than one single species.",
    fact: "Fun fact: Similar functional traits can appear in unrelated lineages through different evolutionary paths.",
    silhouette: "generic"
  };
  const match = MATCHES[current.id][key] || fallback;

  results[challengeIndex] = {
    challengeId: current.id,
    challengeName: current.title.replace(/^\d\) /, ""),
    traitIds: [...selected],
    traitNames: chosenTraits.map((trait) => trait.name),
    score,
    tradeoff: `${chosenTraits[0].tradeoff} ${chosenTraits[1].tradeoff}`,
    bullets,
    match
  };

  playOutcomeSound(score);
  showFeedback(results[challengeIndex]);
}

function showFeedback(outcome) {
  challengeScreen.classList.add("hidden");
  feedbackScreen.classList.remove("hidden");

  survivalBadge.className = `badge ${outcome.score.toLowerCase()}`;
  survivalBadge.textContent = `Survival score: ${outcome.score}`;

  feedbackBullets.innerHTML = "";
  outcome.bullets.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    feedbackBullets.appendChild(li);
  });
  tradeoffText.textContent = `Trade-off: ${outcome.tradeoff}`;

  matchCard.className = `match-card ${MATCH_THEME_CLASS[outcome.challengeId]}`;
  matchName.textContent = `${outcome.match.common} (${outcome.match.scientific})`;
  matchExplain.textContent = outcome.match.explanation;
  matchFact.textContent = outcome.match.fact;
  renderSilhouette(outcome.match.silhouette, matchThumb);

  nextBtn.disabled = !results[challengeIndex];
}

function goNext() {
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

  const allTraits = [];
  summaryBody.innerHTML = "";
  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${result.challengeName}</td><td>${result.traitNames.join(" + ")}</td>`;
    summaryBody.appendChild(row);
    allTraits.push(...result.traitNames);
  });
  toolkitList.textContent = allTraits.join(", ");
  drawCreaturePortrait(results.flatMap((item) => item.traitIds));
  imagePrompt.value = buildImagePrompt(allTraits);

  initEmojiRow();
  commentsBox.value = localStorage.getItem("wys_comments") || "";
}

function initEmojiRow() {
  const emojis = ["😡", "😕", "😐", "🙂", "😄"];
  emojiRow.innerHTML = "";
  emojis.forEach((emoji) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "emoji-btn";
    if (selectedEmoji === emoji) btn.classList.add("selected");
    btn.setAttribute("aria-label", `Rate experience ${emoji}`);
    btn.textContent = emoji;
    btn.addEventListener("click", () => {
      selectedEmoji = emoji;
      localStorage.setItem("wys_rating", emoji);
      [...emojiRow.children].forEach((node) => node.classList.remove("selected"));
      btn.classList.add("selected");
    });
    emojiRow.appendChild(btn);
  });
}

function saveFeedback() {
  localStorage.setItem("wys_comments", commentsBox.value.trim());
  if (selectedEmoji) localStorage.setItem("wys_rating", selectedEmoji);
  thanksText.textContent = "Thanks — your feedback helps improve the exhibit.";
  savedLocal.textContent = "Saved locally.";
}

// Trait→visual mappings live in this object. Add new trait ids and set the visual flags you want to trigger.
const TRAIT_VISUALS = {
  dense_fur: { fur: true, thickBody: true },
  large_ears: { largeEars: true },
  spines: { spines: true },
  rapid_escape: { longLegs: true },
  camouflage: { camouflage: true },
  pattern_disrupt: { stripes: true },
  seed_beak: { beak: "short" },
  slender_beak: { beak: "long" },
  fat_blubber: { thickBody: true }
};

// To add new trait components: map trait id above, then read that flag in drawCreaturePortrait() for a new visual layer.
function getVisualState(traitIds) {
  const state = { fur: false, thickBody: false, largeEars: false, spines: false, longLegs: false, camouflage: false, stripes: false, beak: "none" };
  traitIds.forEach((traitId) => {
    const config = TRAIT_VISUALS[traitId];
    if (!config) return;
    Object.keys(config).forEach((key) => { state[key] = config[key]; });
  });
  return state;
}

function drawCreaturePortrait(traitIds) {
  const ctx = creatureCanvas.getContext("2d");
  const W = creatureCanvas.width;
  const H = creatureCanvas.height;
  const v = getVisualState(traitIds);

  ctx.clearRect(0, 0, W, H);

  const sky = ctx.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, "#dbefff");
  sky.addColorStop(0.55, "#edf7ff");
  sky.addColorStop(1, "#f8fcff");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, W, H);

  const shadowGrad = ctx.createRadialGradient(W / 2, H * 0.74, 10, W / 2, H * 0.74, 220);
  shadowGrad.addColorStop(0, "rgba(0,0,0,0.22)");
  shadowGrad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = shadowGrad;
  ctx.fillRect(W / 2 - 260, H * 0.62, 520, 180);

  const bodyWidth = v.thickBody ? 410 : 360;
  const bodyHeight = v.thickBody ? 215 : 190;
  const bodyX = W * 0.56;
  const bodyY = H * 0.52;

  ctx.save();
  ctx.translate(bodyX, bodyY);

  const bodyFill = ctx.createLinearGradient(-180, -80, 180, 120);
  bodyFill.addColorStop(0, v.camouflage ? "#7d8e60" : "#887563");
  bodyFill.addColorStop(1, v.camouflage ? "#556f45" : "#6f5c4c");
  ctx.fillStyle = bodyFill;
  ctx.beginPath();
  ctx.ellipse(0, 0, bodyWidth / 2, bodyHeight / 2, 0, 0, Math.PI * 2);
  ctx.fill();

  const rim = ctx.createLinearGradient(-200, -120, 200, 120);
  rim.addColorStop(0, "rgba(255,255,255,.34)");
  rim.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = rim;
  ctx.beginPath();
  ctx.ellipse(-35, -30, bodyWidth / 2 - 15, bodyHeight / 2 - 18, 0, 0, Math.PI * 2);
  ctx.fill();

  // Procedural noise texture for realistic-ish coat.
  const texture = makeNoisePattern(ctx);
  ctx.globalAlpha = 0.16;
  ctx.fillStyle = texture;
  ctx.beginPath();
  ctx.ellipse(0, 0, bodyWidth / 2, bodyHeight / 2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  if (v.fur) drawFur(ctx, bodyWidth, bodyHeight);
  if (v.stripes) drawStripes(ctx, bodyWidth, bodyHeight);
  if (v.spines) drawSpines(ctx, bodyWidth);

  drawHead(ctx, v);
  drawLegs(ctx, v);
  drawTail(ctx);
  ctx.restore();
}

function drawHead(ctx, visual) {
  const earScale = visual.largeEars ? 1.85 : 1;
  ctx.fillStyle = "#806a57";
  ctx.beginPath();
  ctx.ellipse(-230, -36, 88, 68, -0.08, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#9f7d66";
  ctx.beginPath(); ctx.ellipse(-267, -118, 24 * earScale, 46 * earScale, -0.2, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(-198, -123, 24 * earScale, 46 * earScale, 0.2, 0, Math.PI * 2); ctx.fill();
  if (visual.largeEars) {
    ctx.fillStyle = "rgba(180,60,60,.35)";
    ctx.beginPath(); ctx.ellipse(-267, -118, 15 * earScale, 27 * earScale, -0.2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(-198, -123, 15 * earScale, 27 * earScale, 0.2, 0, Math.PI * 2); ctx.fill();
  }

  if (visual.beak !== "none") {
    const len = visual.beak === "long" ? 62 : 34;
    ctx.fillStyle = "#d9af56";
    ctx.beginPath();
    ctx.moveTo(-316, -37);
    ctx.lineTo(-316 - len, -28);
    ctx.lineTo(-316, -18);
    ctx.closePath();
    ctx.fill();
  }

  ctx.fillStyle = "#fff";
  ctx.beginPath(); ctx.arc(-245, -46, 12, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#111";
  ctx.beginPath(); ctx.arc(-246, -46, 5, 0, Math.PI * 2); ctx.fill();
}

function drawLegs(ctx, visual) {
  const legLen = visual.longLegs ? 175 : 132;
  ctx.strokeStyle = "#574235";
  ctx.lineWidth = 18;
  [[-95, 80], [10, 86], [110, 78]].forEach(([x, y]) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 6, y + legLen);
    ctx.stroke();
  });
}

function drawTail(ctx) {
  ctx.strokeStyle = "#6b5345";
  ctx.lineWidth = 22;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(190, -15);
  ctx.quadraticCurveTo(275, -60, 325, -26);
  ctx.stroke();
  ctx.lineCap = "butt";
}

function drawFur(ctx, width, height) {
  ctx.strokeStyle = "rgba(255,255,255,.28)";
  for (let i = -width / 2 + 8; i < width / 2 - 8; i += 8) {
    ctx.beginPath();
    ctx.moveTo(i, -height / 3);
    ctx.lineTo(i + 4, -height / 2 + 10);
    ctx.stroke();
  }
}

function drawStripes(ctx, width, height) {
  ctx.strokeStyle = "rgba(33,33,33,.26)";
  ctx.lineWidth = 9;
  for (let i = -width / 3; i < width / 3; i += 34) {
    ctx.beginPath();
    ctx.moveTo(i, -height / 2 + 10);
    ctx.lineTo(i + 22, height / 2 - 22);
    ctx.stroke();
  }
  ctx.lineWidth = 1;
}

function drawSpines(ctx, width) {
  for (let i = -width / 3; i <= width / 2 - 20; i += 18) {
    ctx.fillStyle = "#4b3d33";
    ctx.beginPath();
    ctx.moveTo(i, -108);
    ctx.lineTo(i + 8, -168);
    ctx.lineTo(i + 17, -108);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,.2)";
    ctx.fillRect(i + 7, -154, 2, 40);
  }
}

function makeNoisePattern(ctx) {
  const noiseCanvas = document.createElement("canvas");
  noiseCanvas.width = 100;
  noiseCanvas.height = 100;
  const nctx = noiseCanvas.getContext("2d");
  const image = nctx.createImageData(100, 100);
  for (let i = 0; i < image.data.length; i += 4) {
    const value = 150 + Math.floor(Math.random() * 70);
    image.data[i] = value;
    image.data[i + 1] = value;
    image.data[i + 2] = value;
    image.data[i + 3] = 55;
  }
  nctx.putImageData(image, 0, 0);
  return ctx.createPattern(noiseCanvas, "repeat");
}

function buildImagePrompt(traits) {
  return [
    "Photorealistic wildlife photography of a single fictional organism in a natural history exhibit style.",
    "Inherited trait profile:",
    ...traits.map((trait) => `- ${trait}`),
    "Lighting: soft top-left directional light, subtle rim light, natural shadows.",
    "Style: high-detail fur/skin texture, realistic anatomy, sharp focus, 85mm lens look, museum-quality documentary tone."
  ].join("\n");
}

function downloadCreatureImage() {
  const link = document.createElement("a");
  link.href = creatureCanvas.toDataURL("image/png");
  link.download = "would-you-survive-creature.png";
  link.click();
}

function restartGame() {
  challengeIndex = 0;
  results = [];
  savedLocal.textContent = "";
  thanksText.textContent = "";
  initProgress();
  renderChallenge();
}

function renderSilhouette(type, container) {
  const silhouettes = {
    fox: "M8 56 Q28 34 58 38 Q76 40 92 52 Q86 43 92 34 Q86 36 81 44 Q70 30 52 29 Q30 30 8 56 Z",
    elephant: "M8 56 Q18 34 44 32 Q72 28 88 44 Q96 52 86 66 Q74 62 68 70 Q58 62 46 62 Q28 64 16 60 Q12 72 6 70 Q6 62 8 56 Z",
    seal: "M8 58 Q28 40 54 42 Q70 44 92 54 Q78 62 58 62 Q34 64 8 58 Z",
    bird: "M8 56 Q24 40 48 42 Q72 44 90 34 Q78 48 90 62 Q66 56 54 56 Q32 56 8 56 Z",
    hedgehog: "M8 60 Q24 36 56 36 Q80 36 92 58 Q84 62 78 68 Q74 52 60 52 Q34 52 8 60 Z",
    zebra: "M8 56 Q30 34 58 38 Q78 42 92 56 Q70 58 62 72 Q40 66 18 66 Q8 64 8 56 Z",
    lizard: "M8 58 Q28 40 52 42 Q78 44 92 54 Q72 52 70 66 Q50 62 28 64 Q12 62 8 58 Z",
    molerat: "M8 60 Q24 42 50 42 Q76 42 92 56 Q70 62 52 64 Q26 66 8 60 Z",
    generic: "M8 58 Q28 38 58 38 Q82 40 92 56 Q70 60 52 64 Q30 66 8 58 Z"
  };
  const path = silhouettes[type] || silhouettes.generic;
  container.innerHTML = `<svg viewBox="0 0 100 100" width="76" height="76" role="img" aria-label="organism silhouette"><path d="${path}" fill="#1f4d67"></path></svg>`;
}

// Sound feedback uses Web Audio API oscillator tones (no audio files).
// High = rising notes, Medium = single tone, Low = descending tone.
function playOutcomeSound(outcome) {
  if (!soundEnabled) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  const audio = new AudioCtx();
  const now = audio.currentTime;
  const notes = outcome === "High" ? [380, 470, 590] : outcome === "Low" ? [220, 170] : [340];

  notes.forEach((freq, idx) => {
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = outcome === "Low" ? "triangle" : "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, now + idx * 0.12);
    gain.gain.exponentialRampToValueAtTime(0.06, now + idx * 0.12 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.12 + 0.19);
    osc.connect(gain).connect(audio.destination);
    osc.start(now + idx * 0.12);
    osc.stop(now + idx * 0.2 + 0.2);
  });
  setTimeout(() => audio.close(), 900);
}

function initBackground() {
  const canvas = document.getElementById("bgCanvas");
  const ctx = canvas.getContext("2d");
  const particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function seed() {
    particles.length = 0;
    for (let i = 0; i < 56; i += 1) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.2 + 0.6,
        vy: -(Math.random() * 0.24 + 0.06),
        vx: (Math.random() - 0.5) * 0.12
      });
    }
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }

  resize();
  seed();
  tick();
  window.addEventListener("resize", () => {
    resize();
    seed();
  });
}

soundToggle.addEventListener("change", () => {
  soundEnabled = soundToggle.checked;
  localStorage.setItem("wys_sound", soundEnabled ? "on" : "off");
});

evaluateBtn.addEventListener("click", evaluateSelection);
retryBtn.addEventListener("click", renderChallenge);
nextBtn.addEventListener("click", goNext);
downloadBtn.addEventListener("click", downloadCreatureImage);
saveFeedbackBtn.addEventListener("click", saveFeedback);
restartBtn.addEventListener("click", restartGame);

initProgress();
renderChallenge();
initBackground();
