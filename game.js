const el = {
  money: document.getElementById("moneyValue"),
  cashRate: document.getElementById("cashRateValue"),
  level: document.getElementById("levelValue"),
  rep: document.getElementById("repValue"),
  heat: document.getElementById("heatValue"),
  vibeText: document.getElementById("vibeText"),
  vibeBar: document.getElementById("vibeBar"),
  munchiesText: document.getElementById("munchiesText"),
  munchiesBar: document.getElementById("munchiesBar"),
  favorText: document.getElementById("favorText"),
  favorBar: document.getElementById("favorBar"),
  plantGrid: document.getElementById("plantGrid"),
  scene: document.getElementById("scene"),
  upgradeList: document.getElementById("upgradeList"),
  animatedLayer: document.getElementById("animatedLayer"),
  floatingLayer: document.getElementById("floatingLayer"),
  stockBadge: document.getElementById("stockBadge"),
  growRoomLevel: document.getElementById("growRoomLevel"),
  storeRoomLevel: document.getElementById("storeRoomLevel"),
  questTitle: document.getElementById("questTitle"),
  questDescription: document.getElementById("questDescription"),
  questObjectives: document.getElementById("questObjectives"),
  questActionButton: document.getElementById("questActionButton"),
  storyLog: document.getElementById("storyLog"),
  chapterName: document.getElementById("chapterName"),
  sceneMood: document.getElementById("sceneMood"),
  legalLight: document.getElementById("legalLight"),
  crewGrid: document.getElementById("crewGrid"),
  crewCount: document.getElementById("crewCount"),
  ownerAvatarPreview: document.getElementById("ownerAvatarPreview"),
  avatarNameInput: document.getElementById("avatarNameInput"),
  avatarTitle: document.getElementById("avatarTitle"),
  avatarBonus: document.getElementById("avatarBonus"),
  avatarSkinSelect: document.getElementById("avatarSkinSelect"),
  avatarHairSelect: document.getElementById("avatarHairSelect"),
  avatarOutfitSelect: document.getElementById("avatarOutfitSelect"),
  avatarAccessorySelect: document.getElementById("avatarAccessorySelect"),
  avatarPersonalitySelect: document.getElementById("avatarPersonalitySelect"),
  avatarRandomButton: document.getElementById("avatarRandomButton"),
  closetGrid: document.getElementById("closetGrid"),
  closetCount: document.getElementById("closetCount"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  modalSpeaker: document.getElementById("modalSpeaker"),
  modalTitle: document.getElementById("modalTitle"),
  modalText: document.getElementById("modalText"),
  modalPrimary: document.getElementById("modalPrimary"),
  modalSecondary: document.getElementById("modalSecondary"),
  plantButton: document.getElementById("plantButton"),
  harvestButton: document.getElementById("harvestButton"),
  stockButton: document.getElementById("stockButton"),
  snackButton: document.getElementById("snackButton"),
  eventButton: document.getElementById("eventButton"),
  hireButton: document.getElementById("hireButton"),
  storyButton: document.getElementById("storyButton"),
  tutorialButton: document.getElementById("tutorialButton"),
  tutorialTitle: document.getElementById("tutorialTitle"),
  tutorialText: document.getElementById("tutorialText"),
  tutorialSteps: document.getElementById("tutorialSteps"),
  townDistrictGrid: document.getElementById("townDistrictGrid"),
  townFocusName: document.getElementById("townFocusName"),
  townFocusSummary: document.getElementById("townFocusSummary"),
  townPrimaryButton: document.getElementById("townPrimaryButton"),
  townSceneButton: document.getElementById("townSceneButton"),
  seedSelect: document.getElementById("seedSelect"),
  seedInfoButton: document.getElementById("seedInfoButton"),
  seedSummary: document.getElementById("seedSummary"),
  seedCollection: document.getElementById("seedCollection"),
  seedUnlockCount: document.getElementById("seedUnlockCount"),
  castGrid: document.getElementById("castGrid"),
  castSceneButton: document.getElementById("castSceneButton"),
  roomDetailList: document.getElementById("roomDetailList"),
  roomDetailCount: document.getElementById("roomDetailCount"),
  cutsceneBackdrop: document.getElementById("cutsceneBackdrop"),
  cutsceneTitle: document.getElementById("cutsceneTitle"),
  cutsceneSceneLabel: document.getElementById("cutsceneSceneLabel"),
  cutsceneStage: document.getElementById("cutsceneStage"),
  cutsceneLeft: document.getElementById("cutsceneLeft"),
  cutsceneRight: document.getElementById("cutsceneRight"),
  cutsceneSpeaker: document.getElementById("cutsceneSpeaker"),
  cutsceneBeatTitle: document.getElementById("cutsceneBeatTitle"),
  cutsceneLine: document.getElementById("cutsceneLine"),
  cutsceneNext: document.getElementById("cutsceneNext"),
  cutsceneSkip: document.getElementById("cutsceneSkip")
};

const SAVE_KEY = "havenHighSocietyPrototype";
const SAVE_VERSION = 7;

const upgradeDefs = {
  growLights: {
    label: "Grow Lights",
    baseCost: 38,
    costGrowth: 1.34,
    effect: "Faster plant timers and stronger harvest quality.",
    zone: "Grow Side",
    npc: "Mira Watts"
  },
  plantRows: {
    label: "Plant Rows",
    baseCost: 48,
    costGrowth: 1.38,
    effect: "Adds more plant slots and makes the room busier.",
    zone: "Grow Side",
    npc: "Uncle Darnell"
  },
  counter: {
    label: "Customer Counter",
    baseCost: 42,
    costGrowth: 1.35,
    effect: "Speeds check-in and increases sales per customer.",
    zone: "Haven Side",
    npc: "Sav Cruz"
  },
  lounge: {
    label: "Lounge Seating",
    baseCost: 52,
    costGrowth: 1.36,
    effect: "Raises Vibe and keeps customers around longer.",
    zone: "Haven Side",
    npc: "Velma Vibe"
  },
  snackBar: {
    label: "Snack Bar",
    baseCost: 58,
    costGrowth: 1.36,
    effect: "Turns Munchies into extra snack money.",
    zone: "Haven Side",
    npc: "Nova Sweets"
  },
  stage: {
    label: "Stage Gear",
    baseCost: 70,
    costGrowth: 1.36,
    effect: "Unlocks events, crowds, and reputation spikes.",
    zone: "Haven Side",
    npc: "Rico Reyes"
  },
  security: {
    label: "Security Desk",
    baseCost: 62,
    costGrowth: 1.33,
    effect: "Lowers heat and improves inspection readiness.",
    zone: "Haven Side",
    npc: "Jules Park"
  }
};

const characterDefs = [
  {
    key: "mascot",
    name: "Haven Mascot",
    title: "Brand Guide",
    role: "Tutorial voice, quest helper, and panic translator.",
    unlock: "starter",
    skin: "#ffffff",
    hair: "#41c879",
    shirt: "#3dc9d4",
    accent: "#8d52ff",
    hairClass: "leaf",
    expression: "grin",
    catchphrase: "Keep the plants happy, the customers happier, and the heat off the front door."
  },
  {
    key: "mira",
    name: "Mira Watts",
    title: "Grow Tech",
    role: "Upgrades lights, fans, power flow, and grow-room machinery.",
    unlock: "Grow Lights Level 5",
    skin: "#b87355",
    hair: "#26324d",
    shirt: "#4fd59b",
    accent: "#f5b84b",
    hairClass: "bob",
    expression: "focused",
    catchphrase: "If the wall buzzes, the budget buzzes louder."
  },
  {
    key: "darnell",
    name: "Uncle Darnell",
    title: "Neighborhood Grow Mentor",
    role: "Expands plant rows and keeps the grow side respectful.",
    unlock: "Plant Rows Level 5",
    skin: "#8f5a48",
    hair: "#f5f0e8",
    shirt: "#238b57",
    accent: "#b98462",
    hairClass: "cap",
    expression: "steady",
    catchphrase: "Plants do better when the room has respect."
  },
  {
    key: "sav",
    name: "Sav Cruz",
    title: "Counter Designer",
    role: "Reworks checkout flow, menus, shelves, and customer patience.",
    unlock: "Counter Level 5",
    skin: "#d99d74",
    hair: "#172033",
    shirt: "#3dc9d4",
    accent: "#ff5e93",
    hairClass: "fade",
    expression: "sharp",
    catchphrase: "Cute counter. Also slow. We can fix one of those today."
  },
  {
    key: "velma",
    name: "Velma Vibe",
    title: "Lounge Curator",
    role: "Turns seating, lighting, and decor into customer loyalty.",
    unlock: "Lounge Level 5",
    skin: "#c9876a",
    hair: "#8d52ff",
    shirt: "#ff5e93",
    accent: "#f5b84b",
    hairClass: "curls",
    expression: "warm",
    catchphrase: "A chair is furniture. A couch is a promise."
  },
  {
    key: "nova",
    name: "Nova Sweets",
    title: "Snack Bar Strategist",
    role: "Builds munchies revenue with coolers, shelves, and rushes.",
    unlock: "Snack Bar Level 5",
    skin: "#f0bf8f",
    hair: "#ff785e",
    shirt: "#f5b84b",
    accent: "#3dc9d4",
    hairClass: "puffs",
    expression: "excited",
    catchphrase: "Crunch, fizz, and questionable confidence."
  },
  {
    key: "rico",
    name: "Rico Reyes",
    title: "Stage Booker",
    role: "Books events and upgrades the stage from corner mic to crowd magnet.",
    unlock: "Stage Level 5",
    skin: "#bf7b55",
    hair: "#1d2033",
    shirt: "#8d52ff",
    accent: "#3dc9d4",
    hairClass: "pompadour",
    expression: "showtime",
    catchphrase: "Every legendary night begins with someone saying the mic is probably fine."
  },
  {
    key: "jules",
    name: "Jules Park",
    title: "Security Lead",
    role: "Keeps the room calm, the door checked, and the paperwork boring.",
    unlock: "Security Level 5",
    skin: "#d6a07c",
    hair: "#243042",
    shirt: "#26324d",
    accent: "#4fd59b",
    hairClass: "buzz",
    expression: "calm",
    catchphrase: "The law is less scary when your paperwork is boring."
  },
  {
    key: "vale",
    name: "Officer Vale",
    title: "Local Officer",
    role: "Represents warning-light pressure, visits, and inspection tension.",
    unlock: "Heat on the Block",
    skin: "#c9876a",
    hair: "#343b4d",
    shirt: "#48587c",
    accent: "#f5b84b",
    hairClass: "cap",
    expression: "skeptical",
    catchphrase: "I like quiet nights. Make this one easy."
  },
  {
    key: "imani",
    name: "Council Member Imani",
    title: "City Hall Ally",
    role: "Connects community reputation, political favor, and expansion approval.",
    unlock: "Future City Hall chapter",
    skin: "#8f5a48",
    hair: "#2f241f",
    shirt: "#ffffff",
    accent: "#8d52ff",
    hairClass: "locs",
    expression: "composed",
    catchphrase: "Neighborhood trust is the strongest permit you can earn."
  },
  {
    key: "rival",
    name: "Blaze Baxter",
    title: "Rival Shop Owner",
    role: "Stirs up rumors, price wars, and event challenges.",
    unlock: "Future Rival chapter",
    skin: "#e0aa7b",
    hair: "#ff5e93",
    shirt: "#172033",
    accent: "#f5b84b",
    hairClass: "spikes",
    expression: "smirk",
    catchphrase: "Nice little shop. Be a shame if everyone heard about mine."
  }
];

const roomDetailDefs = [
  { key: "starterPots", room: "Grow Side", upgrade: "plantRows", level: 1, label: "Starter Pots", detail: "Basic rows make the grow side readable and easy to expand." },
  { key: "brightLights", room: "Grow Side", upgrade: "growLights", level: 2, label: "Brighter Light Rig", detail: "Plants glow stronger and grow timers feel more active." },
  { key: "irrigation", room: "Grow Side", upgrade: "plantRows", level: 3, label: "Irrigation Line", detail: "A visible water line hints that growers can automate care later." },
  { key: "genetics", room: "Grow Side", upgrade: "growLights", level: 5, label: "Genetics Bench", detail: "Story-gated equipment supports rare seeds and signature strains." },
  { key: "harvestCrates", room: "Grow Side", upgrade: "plantRows", level: 5, label: "Harvest Crates", detail: "Crates show the room becoming a production engine." },
  { key: "menuBoard", room: "Haven Side", upgrade: "counter", level: 2, label: "Digital Menu", detail: "Customers can see the strain mix before checkout." },
  { key: "neonLounge", room: "Haven Side", upgrade: "lounge", level: 1, label: "Neon Lounge Sign", detail: "The lounge starts feeling like a place to stay, not just pass through." },
  { key: "arcadeCorner", room: "Haven Side", upgrade: "lounge", level: 3, label: "Arcade Corner", detail: "Customers linger longer, building Vibe and Munchies." },
  { key: "snackCooler", room: "Haven Side", upgrade: "snackBar", level: 2, label: "Drink Cooler", detail: "Snack Rushes look and pay better once the cooler appears." },
  { key: "stageLights", room: "Haven Side", upgrade: "stage", level: 2, label: "Stage Lights", detail: "Events become visually obvious and pull more traffic." },
  { key: "cameraNode", room: "Haven Side", upgrade: "security", level: 1, label: "Security Camera", detail: "The legal warning light feels tied to visible compliance tools." },
  { key: "vipCorner", room: "Haven Side", upgrade: "stage", level: 5, label: "VIP Corner", detail: "A late-stage expansion area for High Society nights." }
];

const townDistrictDefs = [
  {
    key: "haven",
    label: "Haven Bar",
    short: "Serve",
    actionLabel: "Run Bar Promo",
    cost: 36,
    spark: [72, 30],
    detail: "The social heart of The Haven: shelves stocked, bar stools full, and customers drifting toward the lounge."
  },
  {
    key: "grow",
    label: "Grow Warehouse",
    short: "Grow",
    actionLabel: "Tend Rows",
    cost: 24,
    spark: [25, 28],
    detail: "The production lot. Quick tending pushes planted rows forward and makes the grow side feel active."
  },
  {
    key: "square",
    label: "Town Square",
    short: "Crowd",
    actionLabel: "Host Pop-Up",
    cost: 48,
    spark: [50, 68],
    detail: "A public gathering spot for friendly neighborhood buzz, small events, and a little reputation."
  },
  {
    key: "cityHall",
    label: "City Hall",
    short: "Favor",
    actionLabel: "File Paperwork",
    cost: 62,
    spark: [13, 88],
    detail: "The official side of town. Paperwork is boring, which is exactly why it lowers heat."
  },
  {
    key: "park",
    label: "Community Park",
    short: "Trust",
    actionLabel: "Cleanup Day",
    cost: 42,
    spark: [31, 88],
    detail: "Neighborhood goodwill lives here. Keep the block happy and the warning light less dramatic."
  },
  {
    key: "delivery",
    label: "Delivery Yard",
    short: "Supplies",
    actionLabel: "Supply Run",
    cost: 74,
    spark: [66, 88],
    detail: "A back-lot supply route for snacks, spare parts, and the occasional suspiciously useful box."
  },
  {
    key: "mural",
    label: "Mural Wall",
    short: "Style",
    actionLabel: "Paint Fresh Mural",
    cost: 58,
    spark: [86, 88],
    detail: "Street art, brand energy, and a reminder that High Society should feel like a place."
  }
];

const strainDefs = [
  { key: "blueDream", name: "Blue Dream", type: "Hybrid", rarity: "common", unlock: { type: "starter" }, grow: 1, yield: 1, price: 1, vibe: 2, munchies: 1, color: "#4aa7ff", flavor: "berry haze" },
  { key: "ogKush", name: "OG Kush", type: "Hybrid", rarity: "common", unlock: { type: "starter" }, grow: 0, yield: 2, price: 1, vibe: 1, munchies: 2, color: "#4fd59b", flavor: "pine fuel" },
  { key: "sourDiesel", name: "Sour Diesel", type: "Sativa", rarity: "common", unlock: { type: "starter" }, grow: 2, yield: 0, price: 1, vibe: 2, munchies: 0, color: "#c8ec58", flavor: "bright citrus" },
  { key: "northernLights", name: "Northern Lights", type: "Indica", rarity: "common", unlock: { type: "level", value: 2 }, grow: 0, yield: 2, price: 1, vibe: 1, munchies: 3, color: "#65d97b", flavor: "sweet pine" },
  { key: "greenCrack", name: "Green Crack", type: "Sativa", rarity: "common", unlock: { type: "level", value: 2 }, grow: 3, yield: 0, price: 1, vibe: 2, munchies: 0, color: "#a9ef52", flavor: "mango snap" },
  { key: "girlScoutCookies", name: "Girl Scout Cookies", type: "Hybrid", rarity: "uncommon", unlock: { type: "level", value: 2 }, grow: 0, yield: 1, price: 3, vibe: 2, munchies: 3, color: "#8d52ff", flavor: "sweet dough" },
  { key: "pineappleExpress", name: "Pineapple Express", type: "Hybrid", rarity: "uncommon", unlock: { type: "level", value: 3 }, grow: 2, yield: 1, price: 2, vibe: 3, munchies: 1, color: "#f5d64b", flavor: "pineapple" },
  { key: "jackHerer", name: "Jack Herer", type: "Sativa", rarity: "uncommon", unlock: { type: "level", value: 3 }, grow: 2, yield: 1, price: 2, vibe: 3, munchies: 0, color: "#57d88f", flavor: "pepper citrus" },
  { key: "granddaddyPurple", name: "Granddaddy Purple", type: "Indica", rarity: "uncommon", unlock: { type: "level", value: 3 }, grow: -1, yield: 2, price: 3, vibe: 2, munchies: 4, color: "#8a5cf6", flavor: "grape candy" },
  { key: "whiteWidow", name: "White Widow", type: "Hybrid", rarity: "uncommon", unlock: { type: "level", value: 4 }, grow: 1, yield: 2, price: 2, vibe: 2, munchies: 1, color: "#dff8ef", flavor: "frosted herb" },
  { key: "gorillaGlue4", name: "Gorilla Glue #4", type: "Hybrid", rarity: "rare", unlock: { type: "level", value: 4 }, grow: -1, yield: 4, price: 3, vibe: 2, munchies: 3, color: "#547c54", flavor: "earth cocoa" },
  { key: "gelato", name: "Gelato", type: "Hybrid", rarity: "rare", unlock: { type: "reputation", value: 18 }, grow: 0, yield: 1, price: 5, vibe: 4, munchies: 3, color: "#ff7fc8", flavor: "dessert cream" },
  { key: "weddingCake", name: "Wedding Cake", type: "Hybrid", rarity: "rare", unlock: { type: "reputation", value: 22 }, grow: -1, yield: 3, price: 5, vibe: 3, munchies: 4, color: "#f6e6a8", flavor: "vanilla spice" },
  { key: "purplePunch", name: "Purple Punch", type: "Indica", rarity: "rare", unlock: { type: "story", value: "build_the_vibe" }, grow: -1, yield: 2, price: 4, vibe: 4, munchies: 5, color: "#9b5cff", flavor: "grape soda" },
  { key: "durbanPoison", name: "Durban Poison", type: "Sativa", rarity: "rare", unlock: { type: "events", value: 1 }, grow: 3, yield: 1, price: 4, vibe: 5, munchies: 0, color: "#f5b84b", flavor: "anise citrus" },
  { key: "superLemonHaze", name: "Super Lemon Haze", type: "Sativa", rarity: "rare", unlock: { type: "level", value: 5 }, grow: 3, yield: 1, price: 4, vibe: 5, munchies: 1, color: "#f7f35c", flavor: "lemon fizz" },
  { key: "cherryPie", name: "Cherry Pie", type: "Hybrid", rarity: "rare", unlock: { type: "story", value: "munchies_make_money" }, grow: 1, yield: 2, price: 4, vibe: 3, munchies: 5, color: "#ff5e93", flavor: "cherry tart" },
  { key: "strawberryCough", name: "Strawberry Cough", type: "Sativa", rarity: "rare", unlock: { type: "story", value: "munchies_make_money" }, grow: 2, yield: 1, price: 4, vibe: 5, munchies: 2, color: "#ff6680", flavor: "strawberry" },
  { key: "mauiWowie", name: "Maui Wowie", type: "Sativa", rarity: "rare", unlock: { type: "events", value: 2 }, grow: 3, yield: 2, price: 4, vibe: 5, munchies: 1, color: "#ffbd4a", flavor: "tropical" },
  { key: "tangie", name: "Tangie", type: "Sativa", rarity: "rare", unlock: { type: "level", value: 6 }, grow: 2, yield: 2, price: 4, vibe: 4, munchies: 2, color: "#ff8f32", flavor: "tangerine" },
  { key: "zkittlez", name: "Zkittlez", type: "Hybrid", rarity: "rare", unlock: { type: "story", value: "munchies_make_money" }, grow: 0, yield: 2, price: 5, vibe: 4, munchies: 5, color: "#d25cff", flavor: "fruit candy" },
  { key: "doSiDos", name: "Do-Si-Dos", type: "Hybrid", rarity: "rare", unlock: { type: "level", value: 7 }, grow: -1, yield: 3, price: 5, vibe: 3, munchies: 4, color: "#7b4bc4", flavor: "cookie mint" },
  { key: "bruceBanner", name: "Bruce Banner", type: "Hybrid", rarity: "rare", unlock: { type: "story", value: "the_stage_is_set" }, grow: 1, yield: 3, price: 5, vibe: 5, munchies: 2, color: "#4fd59b", flavor: "berry diesel" },
  { key: "biscotti", name: "Biscotti", type: "Hybrid", rarity: "exotic", unlock: { type: "level", value: 8 }, grow: -1, yield: 2, price: 6, vibe: 4, munchies: 4, color: "#b98462", flavor: "spiced cookie" },
  { key: "runtz", name: "Runtz", type: "Hybrid", rarity: "exotic", unlock: { type: "reputation", value: 36 }, grow: 0, yield: 2, price: 7, vibe: 5, munchies: 5, color: "#ff6edb", flavor: "rainbow candy" },
  { key: "gmoCookies", name: "GMO Cookies", type: "Hybrid", rarity: "exotic", unlock: { type: "level", value: 9 }, grow: -2, yield: 5, price: 6, vibe: 2, munchies: 5, color: "#716346", flavor: "savory funk" },
  { key: "cerealMilk", name: "Cereal Milk", type: "Hybrid", rarity: "exotic", unlock: { type: "reputation", value: 42 }, grow: 0, yield: 2, price: 7, vibe: 5, munchies: 5, color: "#f4f1d4", flavor: "sweet milk" },
  { key: "acapulcoGold", name: "Acapulco Gold", type: "Sativa", rarity: "exotic", unlock: { type: "gate", value: "growLights:5" }, grow: 2, yield: 3, price: 7, vibe: 6, munchies: 1, color: "#d99a22", flavor: "golden spice" },
  { key: "trainwreck", name: "Trainwreck", type: "Hybrid", rarity: "rare", unlock: { type: "level", value: 10 }, grow: 2, yield: 3, price: 5, vibe: 5, munchies: 2, color: "#83cf6f", flavor: "pine lemon" },
  { key: "chemdawg", name: "Chemdawg", type: "Hybrid", rarity: "rare", unlock: { type: "level", value: 10 }, grow: 0, yield: 3, price: 5, vibe: 3, munchies: 3, color: "#879d6d", flavor: "diesel bite" },
  { key: "bubbaKush", name: "Bubba Kush", type: "Indica", rarity: "rare", unlock: { type: "level", value: 11 }, grow: -1, yield: 4, price: 5, vibe: 2, munchies: 5, color: "#54714a", flavor: "coffee earth" },
  { key: "skywalkerOg", name: "Skywalker OG", type: "Hybrid", rarity: "rare", unlock: { type: "level", value: 11 }, grow: -1, yield: 3, price: 5, vibe: 3, munchies: 4, color: "#4266a8", flavor: "spicy pine" },
  { key: "kosherKush", name: "Kosher Kush", type: "Indica", rarity: "rare", unlock: { type: "level", value: 11 }, grow: -2, yield: 4, price: 6, vibe: 2, munchies: 5, color: "#355c44", flavor: "earth spice" },
  { key: "lemonCherryGelato", name: "Lemon Cherry Gelato", type: "Hybrid", rarity: "exotic", unlock: { type: "reputation", value: 50 }, grow: 0, yield: 3, price: 8, vibe: 6, munchies: 4, color: "#ff576f", flavor: "lemon cherry" },
  { key: "appleFritter", name: "Apple Fritter", type: "Hybrid", rarity: "exotic", unlock: { type: "level", value: 12 }, grow: -1, yield: 3, price: 7, vibe: 4, munchies: 5, color: "#c9d35f", flavor: "apple pastry" },
  { key: "mac", name: "MAC", type: "Hybrid", rarity: "exotic", unlock: { type: "level", value: 12 }, grow: 0, yield: 3, price: 7, vibe: 5, munchies: 3, color: "#d8e0f0", flavor: "citrus cream" },
  { key: "garyPayton", name: "Gary Payton", type: "Hybrid", rarity: "exotic", unlock: { type: "reputation", value: 58 }, grow: 0, yield: 3, price: 8, vibe: 5, munchies: 3, color: "#7e6bf2", flavor: "pepper cookies" },
  { key: "iceCreamCake", name: "Ice Cream Cake", type: "Indica", rarity: "exotic", unlock: { type: "level", value: 13 }, grow: -2, yield: 4, price: 7, vibe: 3, munchies: 6, color: "#f5d6ff", flavor: "vanilla cake" },
  { key: "mimosa", name: "Mimosa", type: "Hybrid", rarity: "exotic", unlock: { type: "level", value: 13 }, grow: 2, yield: 2, price: 7, vibe: 6, munchies: 2, color: "#ffb24d", flavor: "orange brunch" },
  { key: "sunsetSherbet", name: "Sunset Sherbet", type: "Hybrid", rarity: "exotic", unlock: { type: "reputation", value: 64 }, grow: 0, yield: 2, price: 8, vibe: 6, munchies: 5, color: "#ff7e5f", flavor: "berry sherbet" },
  { key: "harlequin", name: "Harlequin", type: "Hybrid", rarity: "rare", unlock: { type: "story", value: "heat_on_the_block" }, grow: 1, yield: 2, price: 4, vibe: 2, munchies: 1, color: "#8edbb0", flavor: "mild mango" },
  { key: "cannatonic", name: "Cannatonic", type: "Hybrid", rarity: "rare", unlock: { type: "story", value: "heat_on_the_block" }, grow: 1, yield: 2, price: 4, vibe: 2, munchies: 1, color: "#9ad4c0", flavor: "citrus herb" },
  { key: "acdc", name: "ACDC", type: "Hybrid", rarity: "rare", unlock: { type: "story", value: "heat_on_the_block" }, grow: 1, yield: 1, price: 4, vibe: 2, munchies: 0, color: "#b4e5b5", flavor: "fresh lemongrass" },
  { key: "laughingBuddha", name: "Laughing Buddha", type: "Sativa", rarity: "rare", unlock: { type: "events", value: 4 }, grow: 2, yield: 2, price: 5, vibe: 7, munchies: 1, color: "#f7d84a", flavor: "sweet spice" },
  { key: "amnesiaHaze", name: "Amnesia Haze", type: "Sativa", rarity: "exotic", unlock: { type: "level", value: 14 }, grow: 3, yield: 2, price: 7, vibe: 7, munchies: 1, color: "#d3ef58", flavor: "lime haze" },
  { key: "afghanKush", name: "Afghan Kush", type: "Indica", rarity: "rare", unlock: { type: "level", value: 14 }, grow: -1, yield: 5, price: 5, vibe: 2, munchies: 6, color: "#4d6b42", flavor: "earth resin" },
  { key: "hinduKush", name: "Hindu Kush", type: "Indica", rarity: "rare", unlock: { type: "level", value: 15 }, grow: -1, yield: 4, price: 6, vibe: 2, munchies: 5, color: "#65804f", flavor: "sandalwood" },
  { key: "larryOg", name: "Larry OG", type: "Hybrid", rarity: "rare", unlock: { type: "level", value: 15 }, grow: 0, yield: 3, price: 6, vibe: 3, munchies: 4, color: "#7ab45f", flavor: "lemon pine" },
  { key: "tahoeOg", name: "Tahoe OG", type: "Hybrid", rarity: "rare", unlock: { type: "level", value: 15 }, grow: -1, yield: 3, price: 6, vibe: 3, munchies: 4, color: "#658c64", flavor: "forest diesel" },
  { key: "masterKush", name: "Master Kush", type: "Indica", rarity: "rare", unlock: { type: "level", value: 16 }, grow: -1, yield: 4, price: 6, vibe: 2, munchies: 5, color: "#527c55", flavor: "herbal earth" },
  { key: "platinumKush", name: "Platinum Kush", type: "Indica", rarity: "exotic", unlock: { type: "level", value: 16 }, grow: -2, yield: 4, price: 7, vibe: 3, munchies: 6, color: "#ccd8dd", flavor: "frost pine" },
  { key: "bananaKush", name: "Banana Kush", type: "Hybrid", rarity: "rare", unlock: { type: "level", value: 16 }, grow: 0, yield: 3, price: 6, vibe: 4, munchies: 5, color: "#f5cf56", flavor: "banana cream" },
  { key: "blueberry", name: "Blueberry", type: "Indica", rarity: "rare", unlock: { type: "level", value: 17 }, grow: -1, yield: 3, price: 6, vibe: 3, munchies: 5, color: "#5870d9", flavor: "blueberry" },
  { key: "sourTangie", name: "Sour Tangie", type: "Sativa", rarity: "rare", unlock: { type: "level", value: 17 }, grow: 3, yield: 2, price: 6, vibe: 6, munchies: 1, color: "#ff9c2f", flavor: "sour orange" },
  { key: "agentOrange", name: "Agent Orange", type: "Hybrid", rarity: "rare", unlock: { type: "level", value: 17 }, grow: 2, yield: 3, price: 6, vibe: 5, munchies: 2, color: "#ff784a", flavor: "orange zest" },
  { key: "superSilverHaze", name: "Super Silver Haze", type: "Sativa", rarity: "exotic", unlock: { type: "level", value: 18 }, grow: 3, yield: 3, price: 7, vibe: 7, munchies: 1, color: "#c7d7d8", flavor: "silver lemon" },
  { key: "alaskanThunder", name: "Alaskan Thunder", type: "Sativa", rarity: "exotic", unlock: { type: "level", value: 18 }, grow: 2, yield: 3, price: 7, vibe: 7, munchies: 1, color: "#9bd4ff", flavor: "icy pine" },
  { key: "blackberryKush", name: "Blackberry Kush", type: "Indica", rarity: "exotic", unlock: { type: "level", value: 19 }, grow: -2, yield: 4, price: 7, vibe: 3, munchies: 6, color: "#56316f", flavor: "blackberry" },
  { key: "chocolope", name: "Chocolope", type: "Sativa", rarity: "exotic", unlock: { type: "level", value: 19 }, grow: 3, yield: 2, price: 7, vibe: 7, munchies: 2, color: "#9d6a3a", flavor: "cocoa coffee" },
  { key: "papaya", name: "Papaya", type: "Hybrid", rarity: "exotic", unlock: { type: "level", value: 20 }, grow: 1, yield: 3, price: 7, vibe: 5, munchies: 6, color: "#ff9d3a", flavor: "papaya" },
  { key: "cinderella99", name: "Cinderella 99", type: "Sativa", rarity: "exotic", unlock: { type: "level", value: 20 }, grow: 3, yield: 2, price: 7, vibe: 7, munchies: 1, color: "#ffd84f", flavor: "pineapple candy" },
  { key: "havenHouseBlend", name: "Haven House Blend", type: "Signature", rarity: "signature", unlock: { type: "allStory" }, grow: 2, yield: 4, price: 9, vibe: 8, munchies: 5, color: "#3dc9d4", flavor: "neon berry" },
  { key: "highSocietyReserve", name: "High Society Reserve", type: "Signature", rarity: "signature", unlock: { type: "level", value: 22 }, grow: 1, yield: 5, price: 10, vibe: 9, munchies: 6, color: "#b05cff", flavor: "velvet citrus" }
];

const avatarOptions = {
  skins: [
    { key: "warm", label: "Warm", value: "#d99d74" },
    { key: "deep", label: "Deep", value: "#8f5a48" },
    { key: "gold", label: "Gold", value: "#c9876a" },
    { key: "fair", label: "Fair", value: "#f0bf8f" },
    { key: "olive", label: "Olive", value: "#b87355" }
  ],
  hair: [
    { key: "fade", label: "Fade", value: "#243042" },
    { key: "buzz", label: "Buzz", value: "#172033" },
    { key: "curls", label: "Curls", value: "#4b2c25" },
    { key: "loc", label: "Locs", value: "#2f241f" },
    { key: "bright", label: "Cyan Pop", value: "#3dc9d4" },
    { key: "neon", label: "Neon Streak", value: "#b05cff" }
  ],
  outfits: [
    { key: "lounge", label: "Lounge", shirt: "#8d52ff", accent: "#3dc9d4" },
    { key: "street", label: "Street", shirt: "#172033", accent: "#ff5e93" },
    { key: "grow", label: "Grow Pro", shirt: "#238b57", accent: "#4fd59b" },
    { key: "stage", label: "Stage", shirt: "#f5b84b", accent: "#ff785e" },
    { key: "vip", label: "VIP Velvet", shirt: "#2a124f", accent: "#3dc9d4" },
    { key: "comedy", label: "Comedy Jacket", shirt: "#ffffff", accent: "#ff5e93" },
    { key: "paperwork", label: "Paperwork Blazer", shirt: "#26324d", accent: "#f5b84b" }
  ],
  accessories: [
    { key: "none", label: "None" },
    { key: "glasses", label: "Glasses" },
    { key: "cap", label: "Cap" },
    { key: "chain", label: "Chain" },
    { key: "shades", label: "VIP Shades" },
    { key: "mic", label: "Mic Charm" },
    { key: "permitPin", label: "Permit Pin" }
  ],
  personalities: [
    { key: "charmer", label: "Neighborhood Charmer", bonus: "+Vibe from friendly service" },
    { key: "operator", label: "Smooth Operator", bonus: "+Checkout patience" },
    { key: "grower", label: "Plant Whisperer", bonus: "+Grow speed" },
    { key: "host", label: "Stage Host", bonus: "+Event Vibe" },
    { key: "compliance", label: "Paperwork Hero", bonus: "Slower Heat gain" }
  ]
};

const avatarRewardDefs = [
  {
    id: "neon_hair",
    group: "hair",
    key: "neon",
    title: "Neon Streak",
    requirement: "Complete Grow Lights Level 5",
    line: "Mira called it a voltage-safe glow-up, then made everyone promise not to say glow-up again."
  },
  {
    id: "vip_velvet",
    group: "outfits",
    key: "vip",
    title: "VIP Velvet",
    requirement: "Complete Build the Vibe",
    line: "Velma says the fit has enough lounge confidence to negotiate with a couch."
  },
  {
    id: "comedy_jacket",
    group: "outfits",
    key: "comedy",
    title: "Comedy Jacket",
    requirement: "Run your first event",
    line: "Rico found it backstage and swears it once opened for a headliner."
  },
  {
    id: "paperwork_blazer",
    group: "outfits",
    key: "paperwork",
    title: "Paperwork Blazer",
    requirement: "Unlock the Security Desk",
    line: "Jules says it gives responsible folder energy. The mascot says that is somehow fashion."
  },
  {
    id: "vip_shades",
    group: "accessories",
    key: "shades",
    title: "VIP Shades",
    requirement: "Reach 30 reputation",
    line: "The shades make every customer ask if they are on a list. There is no list yet. Powerful."
  },
  {
    id: "mic_charm",
    group: "accessories",
    key: "mic",
    title: "Mic Charm",
    requirement: "Complete The Stage Is Set",
    line: "Tiny microphone, huge confidence. Rico says it improves stage presence by at least two finger snaps."
  },
  {
    id: "permit_pin",
    group: "accessories",
    key: "permitPin",
    title: "Permit Pin",
    requirement: "Handle a Secret Shopper",
    line: "The pin says everything is fine, which is exactly what a fine thing would say."
  }
];

const customerTypes = [
  { name: "Casual", className: "", patience: 15, spend: 1, snack: 0.4, vibe: 0.35, skin: "#d99d74", shirt: "#3dc9d4" },
  { name: "Regular", className: "", patience: 20, spend: 1.18, snack: 0.58, vibe: 0.55, skin: "#bf7b55", shirt: "#4fd59b" },
  { name: "Snack Lover", className: "", patience: 17, spend: 1.05, snack: 0.86, vibe: 0.45, skin: "#f0bf8f", shirt: "#f5b84b" },
  { name: "Music Fan", className: "", patience: 18, spend: 1.08, snack: 0.48, vibe: 0.82, skin: "#8f5a48", shirt: "#8d52ff" },
  { name: "VIP", className: "vip", patience: 24, spend: 1.9, snack: 0.62, vibe: 0.78, skin: "#c9876a", shirt: "#8d52ff" },
  { name: "Impatient", className: "impatient", patience: 10, spend: 0.9, snack: 0.28, vibe: 0.2, skin: "#e0aa7b", shirt: "#ff785e" },
  { name: "Secret Shopper", className: "spy", patience: 16, spend: 0.72, snack: 0.18, vibe: 0.15, skin: "#d9b28a", shirt: "#20263b", spy: true }
];

const crewDefs = [
  { key: "grower", label: "Grower", trait: "Fast Worker", unlock: "always" },
  { key: "cashier", label: "Cashier", trait: "Great Seller", unlock: "always" },
  { key: "host", label: "Lounge Host", trait: "Chill Host", unlock: "lounge" },
  { key: "snackWorker", label: "Snack Worker", trait: "Snack Expert", unlock: "snackBar" },
  { key: "security", label: "Security", trait: "Security Pro", unlock: "security" }
];

const storyQuests = [
  {
    id: "grand_opening",
    chapter: "Chapter 1",
    title: "Grand Opening",
    description: "Plant seeds, harvest product, stock the counter, and serve your first customers.",
    startLine: "Welcome to The Haven, boss. First rule of High Society: keep the plants happy, the customers happier, and the heat off the front door.",
    completeLine: "That is a real first day. We grew, stocked, sold, and only mildly panicked.",
    rewards: { money: 120, reputation: 4, vibe: 5 },
    objectives: [
      { type: "metric", key: "planted", target: 3, label: "Plant starter seeds" },
      { type: "metric", key: "harvested", target: 1, label: "Harvest first crop" },
      { type: "metric", key: "stocked", target: 2, label: "Stock the counter" },
      { type: "metric", key: "served", target: 3, label: "Serve customers" }
    ]
  },
  {
    id: "build_the_vibe",
    chapter: "Chapter 2",
    title: "Build the Vibe",
    description: "Upgrade the lounge, get customers to hang out, and turn the shop into a destination.",
    startLine: "People can buy and leave anywhere. At The Haven, they should want to stay.",
    completeLine: "The room finally feels like a place, not just a counter with ambition.",
    rewards: { money: 140, reputation: 5, vibe: 10 },
    objectives: [
      { type: "upgrade", key: "lounge", target: 1, label: "Unlock lounge seating" },
      { type: "meter", key: "vibe", target: 30, label: "Raise Vibe" },
      { type: "metric", key: "served", target: 8, label: "Serve more customers" }
    ]
  },
  {
    id: "munchies_make_money",
    chapter: "Chapter 3",
    title: "Munchies Make Money",
    description: "Open the snack bar and prove that snacks are not side income. They are strategy.",
    startLine: "Boss, hungry customers are not a problem. They are a menu opportunity.",
    completeLine: "Snack revenue is real. Nova Sweets would like a dramatic entrance soon.",
    rewards: { money: 170, reputation: 4, munchies: 14 },
    objectives: [
      { type: "upgrade", key: "snackBar", target: 1, label: "Unlock snack bar" },
      { type: "metric", key: "snackRushes", target: 1, label: "Start a snack rush" },
      { type: "metric", key: "snacksSold", target: 5, label: "Serve snack customers" }
    ]
  },
  {
    id: "the_stage_is_set",
    chapter: "Chapter 4",
    title: "The Stage Is Set",
    description: "Bring entertainment in. Build the stage, run an event, and keep the room happy.",
    startLine: "A good shop sells product. A great Haven gives people a story to tell.",
    completeLine: "Open mic survived. Nobody tripped over the speaker cable. High art.",
    rewards: { money: 220, reputation: 7, vibe: 12 },
    objectives: [
      { type: "upgrade", key: "stage", target: 1, label: "Unlock stage gear" },
      { type: "metric", key: "events", target: 1, label: "Run an event" },
      { type: "metric", key: "served", target: 12, label: "Serve the event crowd" }
    ]
  },
  {
    id: "heat_on_the_block",
    chapter: "Chapter 5",
    title: "Heat on the Block",
    description: "The Haven is getting noticed. Add security, keep things orderly, and lower inspection risk.",
    startLine: "Congratulations. The city noticed us. That is either fame or paperwork. Usually both.",
    completeLine: "Clean lines, calm room, paperwork handled. Jules Park may have smiled for half a second.",
    rewards: { money: 260, reputation: 8, favor: 10 },
    objectives: [
      { type: "upgrade", key: "security", target: 1, label: "Unlock security desk" },
      { type: "meterMax", key: "heat", target: 38, label: "Keep Heat under control" },
      { type: "metric", key: "served", target: 14, label: "Serve orderly customers" }
    ]
  }
];

const endlessQuestTemplates = [
  {
    id: "daily_flow",
    chapter: "Daily Loop",
    title: "Keep The Haven Moving",
    description: "Run a clean daily cycle: grow, stock the counter, and keep customers leaving happy.",
    startLine: "The empire does not sleep, boss. It just refreshes the checklist.",
    completeLine: "Another smooth day at The Haven. The mascot has upgraded from nervous to only mildly alert.",
    rewards: { money: 190, reputation: 3, vibe: 4 },
    objectives: [
      { type: "metric", key: "harvested", target: 3, label: "Harvest plants" },
      { type: "metric", key: "stocked", target: 6, label: "Stock the counter" },
      { type: "metric", key: "served", target: 10, label: "Serve customers" }
    ]
  },
  {
    id: "seed_chase",
    chapter: "Daily Loop",
    title: "Seed Vault Chase",
    description: "Use the seed system to keep the grow side varied and profitable.",
    startLine: "The Seed Vault wants attention. It gets dramatic when ignored.",
    completeLine: "New batches, better shelves, happier regulars. The vault is purring.",
    rewards: { money: 210, reputation: 4, munchies: 4 },
    objectives: [
      { type: "metric", key: "planted", target: 6, label: "Plant selected seeds" },
      { type: "metric", key: "harvested", target: 4, label: "Harvest batches" },
      { type: "metric", key: "served", target: 8, label: "Sell the counter mix" }
    ]
  },
  {
    id: "clean_night",
    chapter: "Daily Loop",
    title: "Clean Night, Good Vibes",
    description: "Bring in customers without letting the warning light steal the show.",
    startLine: "Tonight's theme is fun, calm, and nobody giving the front door a reason to blink red.",
    completeLine: "The room stayed loose, the line moved, and the legal light behaved itself.",
    rewards: { money: 240, reputation: 5, favor: 3 },
    objectives: [
      { type: "metric", key: "served", target: 12, label: "Serve calm customers" },
      { type: "meterMax", key: "heat", target: 45, label: "Keep Heat below 45" },
      { type: "metric", key: "snacksSold", target: 4, label: "Sell snacks" }
    ]
  },
  {
    id: "show_and_sell",
    chapter: "Daily Loop",
    title: "Show and Sell",
    description: "Use entertainment to move product, snacks, and reputation.",
    startLine: "Rico says every event is either promotion or evidence. Tonight we aim for promotion.",
    completeLine: "The crowd had fun, the counter stayed busy, and the speaker cable survived.",
    rewards: { money: 275, reputation: 6, vibe: 6 },
    objectives: [
      { type: "metric", key: "events", target: 1, label: "Run an event" },
      { type: "metric", key: "served", target: 14, label: "Serve the crowd" },
      { type: "metric", key: "snacksSold", target: 6, label: "Feed the crowd" }
    ]
  }
];

const storyFeatureUnlocks = {
  grand_opening: { key: "lounge", level: 1, label: "Lounge Area" },
  build_the_vibe: { key: "snackBar", level: 1, label: "Snack Bar" },
  munchies_make_money: { key: "stage", level: 1, label: "Stage" },
  the_stage_is_set: { key: "security", level: 1, label: "Security Desk" }
};

const defaultState = {
  version: SAVE_VERSION,
  money: 180,
  level: 1,
  xp: 0,
  reputation: 8,
  heat: 8,
  vibe: 18,
  munchies: 12,
  favor: 0,
  avatar: {
    name: "Boss",
    skin: "warm",
    hair: "fade",
    outfit: "lounge",
    accessory: "none",
    personality: "charmer"
  },
  unlockedAvatar: {
    skins: ["warm", "deep", "gold", "fair", "olive"],
    hair: ["fade", "buzz", "curls", "loc", "bright"],
    outfits: ["lounge", "street", "grow", "stage"],
    accessories: ["none", "glasses", "cap", "chain"]
  },
  selectedStrain: "blueDream",
  unlockedStrains: ["blueDream", "ogKush", "sourDiesel"],
  harvestedStrains: {},
  inventory: {
    rawFlower: 0,
    shelfStock: 0,
    snacks: 36,
    flowerByStrain: {},
    counterByStrain: {}
  },
  upgrades: {
    growLights: 1,
    plantRows: 1,
    counter: 1,
    lounge: 0,
    snackBar: 0,
    stage: 0,
    security: 0
  },
  staff: {
    grower: 0,
    cashier: 0,
    host: 0,
    snackWorker: 0,
    security: 0
  },
  plants: [],
  customers: [],
  tutorialSeen: false,
  storyQuestIndex: 0,
  dailyQuestIndex: 0,
  dailyQuestRound: 1,
  activeGateQuest: null,
  completedGates: {},
  completedStory: {},
  townFocus: "haven",
  metrics: {
    planted: 0,
    harvested: 0,
    stocked: 0,
    served: 0,
    snacksSold: 0,
    snackRushes: 0,
    strainUnlocks: 3,
    events: 0,
    hires: 0,
    partsFound: 0,
    spiesHandled: 0,
    townActions: 0
  },
  storyLog: [],
  activeEventSeconds: 0,
  spyCooldown: 22,
  lastLegalStatus: "green",
  recentMoney: [],
  lastSavedAt: Date.now()
};

let state = loadState();
let lastTick = performance.now();
let spawnTimer = 2;
let staffTimer = 0;
let saveTimer = 0;
let customerId = 1;
let currentModalAction = null;
let activeCutscene = null;
let cutsceneIndex = 0;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  try {
    const stored = localStorage.getItem(SAVE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return mergeState(clone(defaultState), parsed);
    }
  } catch (error) {
    console.warn("Save could not be loaded", error);
  }

  const fresh = clone(defaultState);
  fresh.storyLog.push({
    title: "The keys are yours",
    text: "The Haven opens with one dusty room, a counter, and a mascot with too much confidence."
  });
  fresh.storyQuestsStarted = {};
  return fresh;
}

function mergeState(base, saved) {
  const merged = { ...base, ...saved };
  merged.version = SAVE_VERSION;
  merged.avatar = { ...base.avatar, ...(saved.avatar || {}) };
  merged.unlockedAvatar = {
    skins: mergeUnlockList(base.unlockedAvatar.skins, saved.unlockedAvatar?.skins),
    hair: mergeUnlockList(base.unlockedAvatar.hair, saved.unlockedAvatar?.hair),
    outfits: mergeUnlockList(base.unlockedAvatar.outfits, saved.unlockedAvatar?.outfits),
    accessories: mergeUnlockList(base.unlockedAvatar.accessories, saved.unlockedAvatar?.accessories)
  };
  merged.unlockedStrains = mergeUnlockList(base.unlockedStrains, saved.unlockedStrains);
  merged.selectedStrain = merged.unlockedStrains.includes(saved.selectedStrain) ? saved.selectedStrain : base.selectedStrain;
  merged.harvestedStrains = { ...base.harvestedStrains, ...(saved.harvestedStrains || {}) };
  merged.inventory = migrateInventory({ ...base.inventory, ...(saved.inventory || {}) }, merged.selectedStrain);
  merged.upgrades = { ...base.upgrades, ...(saved.upgrades || {}) };
  merged.staff = { ...base.staff, ...(saved.staff || {}) };
  merged.metrics = { ...base.metrics, ...(saved.metrics || {}) };
  merged.completedGates = saved.completedGates || {};
  merged.completedStory = saved.completedStory || {};
  if (merged.completedStory[storyQuests[storyQuests.length - 1].id]) {
    merged.storyQuestIndex = storyQuests.length;
  }
  merged.storyLog = Array.isArray(saved.storyLog) ? saved.storyLog : base.storyLog;
  merged.plants = Array.isArray(saved.plants) ? saved.plants : [];
  merged.customers = [];
  merged.recentMoney = [];
  merged.storyQuestsStarted = saved.storyQuestsStarted || {};
  return merged;
}

function migrateInventory(inventory, fallbackStrain) {
  const migrated = {
    ...inventory,
    flowerByStrain: { ...(inventory.flowerByStrain || {}) },
    counterByStrain: { ...(inventory.counterByStrain || {}) }
  };
  if (Object.keys(migrated.flowerByStrain).length === 0 && migrated.rawFlower > 0) {
    migrated.flowerByStrain[fallbackStrain] = migrated.rawFlower;
  }
  if (Object.keys(migrated.counterByStrain).length === 0 && migrated.shelfStock > 0) {
    migrated.counterByStrain[fallbackStrain] = migrated.shelfStock;
  }
  migrated.rawFlower = sumInventoryMap(migrated.flowerByStrain);
  migrated.shelfStock = sumInventoryMap(migrated.counterByStrain);
  return migrated;
}

function mergeUnlockList(baseList, savedList) {
  return [...new Set([...baseList, ...(savedList || [])])];
}

function saveState() {
  syncInventoryTotals();
  const toSave = clone(state);
  toSave.version = SAVE_VERSION;
  toSave.customers = [];
  toSave.recentMoney = [];
  toSave.lastSavedAt = Date.now();
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(toSave));
  } catch (error) {
    console.warn("Save could not be written", error);
  }
}

function moneyText(value) {
  return `$${Math.floor(value).toLocaleString()}`;
}

function percentText(value) {
  return `${Math.round(clamp(value, 0, 100))}%`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function sumInventoryMap(map) {
  return Object.values(map || {}).reduce((sum, value) => sum + value, 0);
}

function addInventory(map, key, amount) {
  map[key] = (map[key] || 0) + amount;
  if (map[key] <= 0) delete map[key];
}

function syncInventoryTotals() {
  state.inventory.flowerByStrain = state.inventory.flowerByStrain || {};
  state.inventory.counterByStrain = state.inventory.counterByStrain || {};
  state.inventory.rawFlower = sumInventoryMap(state.inventory.flowerByStrain);
  state.inventory.shelfStock = sumInventoryMap(state.inventory.counterByStrain);
}

function strainByKey(key) {
  return strainDefs.find((strain) => strain.key === key) || strainDefs[0];
}

function currentStrain() {
  if (!state.unlockedStrains.includes(state.selectedStrain)) {
    state.selectedStrain = state.unlockedStrains[0] || "blueDream";
  }
  return strainByKey(state.selectedStrain);
}

function raritySeedCost(strain) {
  const rarityCosts = { common: 0, uncommon: 2, rare: 5, exotic: 9, legendary: 14, signature: 18 };
  return rarityCosts[strain.rarity] || 0;
}

function seedCost(strain = currentStrain()) {
  return Math.max(4, 6 + raritySeedCost(strain) + Math.max(0, strain.price - 1));
}

function strainUnlockLabel(strain) {
  const unlock = strain.unlock;
  if (unlock.type === "starter") return "Starter seed";
  if (unlock.type === "level") return `Reach Level ${unlock.value}`;
  if (unlock.type === "reputation") return `Reach ${unlock.value} Rep`;
  if (unlock.type === "story") return `Complete ${storyTitle(unlock.value)}`;
  if (unlock.type === "events") return `Run ${unlock.value} event${unlock.value === 1 ? "" : "s"}`;
  if (unlock.type === "gate") return `Complete ${gateTitle(unlock.value)}`;
  if (unlock.type === "allStory") return "Complete current story chapters";
  return "Unlock through play";
}

function storyTitle(id) {
  return storyQuests.find((quest) => quest.id === id)?.title || "story quest";
}

function gateTitle(key) {
  const [upgradeKey, level] = key.split(":");
  return `${upgradeDefs[upgradeKey]?.label || "Upgrade"} Level ${level}`;
}

function strainUnlockedByRule(strain) {
  const unlock = strain.unlock;
  if (unlock.type === "starter") return true;
  if (unlock.type === "level") return state.level >= unlock.value;
  if (unlock.type === "reputation") return state.reputation >= unlock.value;
  if (unlock.type === "story") return Boolean(state.completedStory[unlock.value]);
  if (unlock.type === "events") return state.metrics.events >= unlock.value;
  if (unlock.type === "gate") return Boolean(state.completedGates[unlock.value]);
  if (unlock.type === "allStory") return storyQuests.every((quest) => state.completedStory[quest.id]);
  return false;
}

function unlockStrain(key, announce = true) {
  if (state.unlockedStrains.includes(key)) return false;
  const strain = strainByKey(key);
  state.unlockedStrains.push(key);
  state.metrics.strainUnlocks = state.unlockedStrains.length;
  addLog("Seed Unlocked", `${strain.name} joined the Seed Vault.`);
  if (announce && !el.modalBackdrop.classList.contains("visible")) {
    showDialogue({
      speaker: "Mascot",
      title: `${strain.name} Seeds`,
      text: `${strain.name} is now unlocked in the Seed Vault. Fictional game stats: ${strain.type}, ${strain.rarity}, ${strain.flavor}.`,
      primary: "Nice"
    });
  }
  return true;
}

function checkStrainUnlocks() {
  strainDefs.forEach((strain) => {
    if (strainUnlockedByRule(strain)) unlockStrain(strain.key);
  });
  if (!state.unlockedStrains.includes(state.selectedStrain)) {
    state.selectedStrain = state.unlockedStrains[0] || "blueDream";
  }
  state.metrics.strainUnlocks = state.unlockedStrains.length;
}

function plantedStrainLabel(plant) {
  const name = strainByKey(plant.strain || state.selectedStrain).name;
  return name.length > 12 ? `${name.slice(0, 10)}.` : name;
}

function ownerCharacterDef() {
  const visual = avatarVisualData();
  const personality = optionFor("personalities", state.avatar.personality);
  return {
    key: "owner",
    name: state.avatar.name || "Boss",
    title: personality.label,
    role: "Player owner of The Haven Co.",
    skin: visual.skin,
    hair: visual.hairColor,
    shirt: visual.shirt,
    accent: visual.accent,
    hairClass: visual.hairClass,
    expression: "ready",
    catchphrase: "Let's build High Society."
  };
}

function characterByKey(key) {
  if (key === "owner") return ownerCharacterDef();
  return characterDefs.find((character) => character.key === key) || characterDefs[0];
}

function characterByName(name) {
  if (!name) return characterByKey("mascot");
  if (name === "Mascot" || name === "Haven Mascot") return characterByKey("mascot");
  return characterDefs.find((character) => character.name === name) || characterByKey("mascot");
}

function characterKeyForNpc(name) {
  return characterByName(name).key;
}

function createCharacterBust(character, compact = false) {
  const bust = document.createElement("div");
  bust.className = `character-bust ${compact ? "compact" : ""} hair-${character.hairClass || "fade"} expression-${character.expression || "ready"} ${character.key === "mascot" ? "mascot-bust" : ""}`;
  bust.style.setProperty("--char-skin", character.skin);
  bust.style.setProperty("--char-hair", character.hair);
  bust.style.setProperty("--char-shirt", character.shirt);
  bust.style.setProperty("--char-accent", character.accent);
  bust.innerHTML = `
    <span class="char-hair"></span>
    <span class="char-face"></span>
    <span class="char-eyes"></span>
    <span class="char-mouth"></span>
    <span class="char-body"></span>
    <span class="char-detail"></span>
  `;
  return bust;
}

function activeRoomDetails() {
  return roomDetailDefs.filter((detail) => state.upgrades[detail.upgrade] >= detail.level);
}

function upcomingRoomDetail(key) {
  return roomDetailDefs.find((detail) => detail.upgrade === key && state.upgrades[key] < detail.level);
}

function renderRoomExpansion() {
  const classes = ["scene"];
  Object.keys(upgradeDefs).forEach((key) => {
    classes.push(`${key}-${clamp(state.upgrades[key], 0, 5)}`);
  });
  const growTier = clamp(Math.floor((state.upgrades.growLights + state.upgrades.plantRows) / 4), 0, 3);
  const storeTier = clamp(Math.floor((state.upgrades.counter + state.upgrades.lounge + state.upgrades.snackBar + state.upgrades.stage + state.upgrades.security) / 5), 0, 4);
  classes.push(`grow-tier-${growTier}`, `store-tier-${storeTier}`);
  el.scene.className = classes.join(" ");
}

function renderRoomDetails() {
  const active = activeRoomDetails();
  el.roomDetailCount.textContent = `${active.length}/${roomDetailDefs.length} active`;
  el.roomDetailList.innerHTML = "";
  roomDetailDefs.forEach((detail) => {
    const unlocked = state.upgrades[detail.upgrade] >= detail.level;
    const item = document.createElement("div");
    item.className = `room-detail-item ${unlocked ? "active" : ""}`;
    item.innerHTML = `
      <strong>${detail.label}</strong>
      <span>${detail.room} - ${upgradeDefs[detail.upgrade].label} Lv. ${detail.level}</span>
      <small>${unlocked ? detail.detail : "Locked until this upgrade level."}</small>
    `;
    el.roomDetailList.appendChild(item);
  });
}

function townDistrictByKey(key) {
  return townDistrictDefs.find((district) => district.key === key) || townDistrictDefs[0];
}

function currentTownDistrict() {
  if (!townDistrictDefs.some((district) => district.key === state.townFocus)) {
    state.townFocus = "haven";
  }
  return townDistrictByKey(state.townFocus);
}

function plantedPlantCount() {
  return state.plants.filter((plant) => plant.planted && !plant.ready).length;
}

function townActionCost(district = currentTownDistrict()) {
  const scale = 1 + Math.floor((state.metrics.townActions || 0) / 8) * 0.12;
  return Math.floor(district.cost * scale);
}

function townDistrictStat(district) {
  if (district.key === "grow") return `${plantedPlantCount()} tending`;
  if (district.key === "haven") return `${state.inventory.shelfStock} stocked`;
  if (district.key === "square") return `${Math.floor(state.reputation)} rep`;
  if (district.key === "cityHall") return `${Math.floor(state.favor)} favor`;
  if (district.key === "park") return `${percentText(state.heat)} heat`;
  if (district.key === "delivery") return `${state.inventory.snacks} snacks`;
  return `${percentText(state.vibe)} vibe`;
}

function selectTownDistrict(key) {
  state.townFocus = townDistrictByKey(key).key;
  saveState();
  renderTownMap();
}

function updateTownActionButton() {
  const district = currentTownDistrict();
  const cost = townActionCost(district);
  const needsPlants = district.key === "grow" && plantedPlantCount() === 0;
  el.townPrimaryButton.textContent = needsPlants ? "Plant Rows First" : `${district.actionLabel} ${moneyText(cost)}`;
  el.townPrimaryButton.disabled = needsPlants || state.money < cost;
}

function renderTownMap() {
  const district = currentTownDistrict();
  el.townFocusName.textContent = district.label;
  el.townDistrictGrid.innerHTML = "";
  townDistrictDefs.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `town-district ${item.key === district.key ? "active" : ""}`;
    button.innerHTML = `
      <strong>${item.short}</strong>
      <span>${item.label}</span>
      <small>${townDistrictStat(item)}</small>
    `;
    button.addEventListener("click", () => selectTownDistrict(item.key));
    el.townDistrictGrid.appendChild(button);
  });

  el.townFocusSummary.innerHTML = `
    <strong>${district.label}</strong>
    <p>${district.detail}</p>
    <div class="town-stat-row">
      <span>${townDistrictStat(district)}</span>
      <span>${district.actionLabel}</span>
    </div>
  `;

  document.querySelectorAll("[data-district]").forEach((lot) => {
    const active = lot.dataset.district === district.key;
    lot.classList.toggle("selected", active);
    lot.setAttribute("aria-pressed", active ? "true" : "false");
  });
  updateTownActionButton();
}

function runTownAction() {
  const district = currentTownDistrict();
  const cost = townActionCost(district);
  if (district.key === "grow" && plantedPlantCount() === 0) {
    showDialogue({
      speaker: "Mira Watts",
      title: "Rows Need Plants",
      text: "The crew is ready to tend the warehouse, but the beds need seeds first. Plant a batch, then use the town action to push it forward.",
      primary: "Got It"
    });
    return;
  }
  if (!spendMoney(cost)) return;

  let title = district.label;
  let text = "";
  if (district.key === "grow") {
    let boosted = 0;
    state.plants.forEach((plant) => {
      if (!plant.planted || plant.ready) return;
      plant.progress = clamp(plant.progress + 0.22 + state.upgrades.growLights * 0.01, 0, 1);
      plant.stage = Math.min(6, Math.floor(plant.progress * 7));
      plant.ready = plant.progress >= 1;
      boosted += 1;
    });
    text = `${boosted} planted row${boosted === 1 ? "" : "s"} got a warehouse tending boost.`;
  } else if (district.key === "haven") {
    for (let i = 0; i < 3; i += 1) spawnCustomer(true);
    state.vibe = clamp(state.vibe + 4, 0, 100);
    state.heat = clamp(state.heat + 1.5 * avatarHeatMultiplier(), 0, 100);
    text = "A quick bar promo pulled new customers toward the shelves and stools.";
  } else if (district.key === "square") {
    for (let i = 0; i < 2; i += 1) spawnCustomer(true);
    state.reputation += 2.5;
    state.vibe = clamp(state.vibe + 3, 0, 100);
    state.heat = clamp(state.heat + 2 * avatarHeatMultiplier(), 0, 100);
    text = "The Town Square pop-up brought friendly neighborhood attention and a little extra noise.";
  } else if (district.key === "cityHall") {
    state.heat = clamp(state.heat - 9, 0, 100);
    state.favor = clamp(state.favor + 4, 0, 100);
    text = "Paperwork filed. It was boring, official, and exactly what the warning light needed.";
  } else if (district.key === "park") {
    state.reputation += 2;
    state.vibe = clamp(state.vibe + 4, 0, 100);
    state.heat = clamp(state.heat - 2, 0, 100);
    text = "Cleanup day made the block warmer toward The Haven.";
  } else if (district.key === "delivery") {
    const snacks = 18 + state.upgrades.snackBar * 3;
    state.inventory.snacks += snacks;
    if (state.activeGateQuest) {
      state.activeGateQuest.partsFound = (state.activeGateQuest.partsFound || 0) + 1;
      state.metrics.partsFound += 1;
      text = `${snacks} snacks arrived, plus one useful upgrade piece from the delivery stack.`;
    } else {
      text = `${snacks} snacks arrived for the bar. The delivery yard looks suspiciously organized.`;
    }
  } else if (district.key === "mural") {
    state.vibe = clamp(state.vibe + 7, 0, 100);
    state.reputation += 2;
    text = "Fresh mural work gave the block more color and The Haven more identity.";
  }

  state.metrics.townActions = (state.metrics.townActions || 0) + 1;
  addXp(8);
  addLog(title, text);
  popSpark(district.spark[0], district.spark[1]);
  renderAll();
}

function showTownDistrictScene() {
  const district = currentTownDistrict();
  const cast = {
    grow: ["mira", "owner"],
    haven: ["mascot", "owner"],
    square: ["imani", "owner"],
    cityHall: ["imani", "owner"],
    park: ["darnell", "owner"],
    delivery: ["nova", "owner"],
    mural: ["velma", "owner"]
  }[district.key] || ["mascot", "owner"];
  showCutscene({
    title: district.label,
    location: "Haven Town Map",
    sceneClass: district.key === "grow" ? "grow" : district.key === "cityHall" ? "heat" : "cast",
    left: cast[0],
    right: cast[1],
    beats: [
      {
        speaker: resolveCharacter(cast[0]).name,
        title: district.actionLabel,
        line: district.detail
      },
      {
        speaker: "Haven Mascot",
        title: "Town Gameplay",
        line: `Use ${district.actionLabel} when you want this district to push the business loop. The town is starting to matter now.`
      }
    ]
  });
}

function resolveCharacter(value) {
  if (!value) return characterByKey("mascot");
  if (typeof value === "object") return value;
  if (value === "owner") return ownerCharacterDef();
  return characterDefs.find((character) => character.key === value || character.name === value)
    || characterByName(value);
}

function isCharacterUnlocked(character) {
  if (character.key === "owner" || character.key === "mascot") return true;
  const gateUnlocks = {
    mira: "growLights:5",
    darnell: "plantRows:5",
    sav: "counter:5",
    velma: "lounge:5",
    nova: "snackBar:5",
    rico: "stage:5",
    jules: "security:5"
  };
  const gate = gateUnlocks[character.key];
  if (gate && (state.completedGates[gate] || state.activeGateQuest?.npc === character.name)) return true;
  if (character.key === "vale") return state.completedStory.heat_on_the_block || state.storyQuestIndex >= 4 || state.heat >= 30;
  if (character.key === "imani") return state.favor >= 10 || state.completedStory.heat_on_the_block;
  if (character.key === "rival") return state.reputation >= 42 || state.metrics.events >= 3;
  return false;
}

function characterUnlockText(character) {
  if (isCharacterUnlocked(character)) return "Available";
  return `Meet: ${character.unlock}`;
}

function renderCastBoard() {
  const cast = [ownerCharacterDef(), ...characterDefs];
  el.castGrid.innerHTML = "";
  cast.forEach((character) => {
    const unlocked = isCharacterUnlocked(character);
    const card = document.createElement("button");
    card.className = `cast-member ${unlocked ? "unlocked" : "locked"}`;
    card.type = "button";
    card.appendChild(createCharacterBust(character, true));
    const copy = document.createElement("span");
    copy.className = "cast-copy";
    copy.innerHTML = `
      <strong>${character.name}</strong>
      <em>${character.title}</em>
      <small>${unlocked ? character.catchphrase : characterUnlockText(character)}</small>
    `;
    card.appendChild(copy);
    card.addEventListener("click", () => showCharacterScene(character));
    el.castGrid.appendChild(card);
  });
}

function showCharacterScene(character) {
  const unlocked = isCharacterUnlocked(character);
  showCutscene({
    title: unlocked ? character.name : "Future Introduction",
    location: unlocked ? character.title : character.unlock,
    sceneClass: unlocked ? "cast" : "locked",
    left: "mascot",
    right: character.key,
    beats: [
      {
        speaker: unlocked ? character.name : "Haven Mascot",
        title: unlocked ? character.title : "Not In The Room Yet",
        line: unlocked
          ? `${character.catchphrase} ${character.role}`
          : `${character.name} joins through ${character.unlock}. Keep upgrading and their scene will move from rumor to real conversation.`
      }
    ]
  });
}

function showCastIntroScene() {
  showCutscene({
    title: "Cast Board",
    location: "Original Haven",
    sceneClass: "cast",
    left: "mascot",
    right: "owner",
    beats: [
      {
        speaker: "Haven Mascot",
        title: "The People Make The Place",
        line: "High Society is not just rooms and registers. Every fifth upgrade brings in someone with a problem, a part, and a very specific opinion."
      },
      {
        speaker: state.avatar.name || "Boss",
        title: "Meet The Crew",
        line: "So we grow the shop, meet the neighborhood, and turn upgrades into story moments. I can work with that."
      },
      {
        speaker: "Haven Mascot",
        title: "Tiny Warning",
        line: "Some visitors are friends. Some are rivals. Some are definitely taking notes. The warning light loves drama."
      }
    ]
  });
}

function cutsceneForStory(quest, mode = "start") {
  const ownerName = state.avatar.name || "Boss";
  const scripts = {
    grand_opening: {
      start: {
        left: "mascot",
        right: "owner",
        sceneClass: "grow",
        beats: [
          {
            speaker: "Haven Mascot",
            title: "Welcome To The Haven",
            line: "First rule of High Society: keep the plants happy, the customers happier, and the heat off the front door."
          },
          {
            speaker: ownerName,
            title: "First Day Nerves",
            line: "We plant, harvest, stock the counter, and act like the sign outside has always worked."
          }
        ]
      },
      complete: {
        left: "mascot",
        right: "owner",
        sceneClass: "counter",
        beats: [
          {
            speaker: "Haven Mascot",
            title: "First Sales",
            line: "We grew, stocked, sold, and only mildly panicked. That is basically a business plan with shoes."
          }
        ]
      }
    },
    build_the_vibe: {
      start: {
        left: "velma",
        right: "owner",
        sceneClass: "lounge",
        beats: [
          {
            speaker: "Velma Vibe",
            title: "A Room With A Pulse",
            line: "People can buy and leave anywhere. Give them a couch, a glow, and a reason to text their friends."
          },
          {
            speaker: ownerName,
            title: "Comfort Sells",
            line: "The lounge needs to feel like the neighborhood living room, with fewer mysterious remotes."
          }
        ]
      },
      complete: {
        left: "mascot",
        right: "velma",
        sceneClass: "lounge",
        beats: [
          {
            speaker: "Haven Mascot",
            title: "Vibe Online",
            line: "The room finally feels like a place, not just a counter with ambition."
          }
        ]
      }
    },
    munchies_make_money: {
      start: {
        left: "nova",
        right: "owner",
        sceneClass: "snack",
        beats: [
          {
            speaker: "Nova Sweets",
            title: "Snack Economics",
            line: "Hungry customers are not a problem. They are a menu opportunity with crunch."
          },
          {
            speaker: "Haven Mascot",
            title: "The Snack Bar Exists",
            line: "Open it with Snack Bar Level 1, then press Snack Rush. The story cannot get stuck if the chips keep moving."
          }
        ]
      },
      complete: {
        left: "nova",
        right: "mascot",
        sceneClass: "snack",
        beats: [
          {
            speaker: "Nova Sweets",
            title: "Crunch Confirmed",
            line: "Snack revenue is real. I would like a dramatic entrance, a better cooler, and exactly no questions about the nacho machine."
          }
        ]
      }
    },
    the_stage_is_set: {
      start: {
        left: "rico",
        right: "owner",
        sceneClass: "stage",
        beats: [
          {
            speaker: "Rico Reyes",
            title: "Mic Check",
            line: "A good shop sells product. A great Haven gives people a story to tell, preferably one with a working microphone."
          },
          {
            speaker: ownerName,
            title: "Entertainment In",
            line: "We build the stage, run the event, and pretend open mic confidence is a renewable resource."
          }
        ]
      },
      complete: {
        left: "rico",
        right: "mascot",
        sceneClass: "stage",
        beats: [
          {
            speaker: "Rico Reyes",
            title: "Crowd Warmed Up",
            line: "Open mic survived. Nobody tripped over the speaker cable. High art."
          }
        ]
      }
    },
    heat_on_the_block: {
      start: {
        left: "vale",
        right: "owner",
        sceneClass: "heat",
        beats: [
          {
            speaker: "Officer Vale",
            title: "Friendly Visit",
            line: "The warning light is not a decoration. Keep the line calm, the room tidy, and the paperwork where humans can find it."
          },
          {
            speaker: "Haven Mascot",
            title: "Dash Of Drama",
            line: "Congratulations. The city noticed us. That is either fame or paperwork. Usually both."
          }
        ]
      },
      complete: {
        left: "jules",
        right: "owner",
        sceneClass: "security",
        beats: [
          {
            speaker: "Jules Park",
            title: "Orderly Enough",
            line: "Clean lines, calm room, paperwork handled. I may have smiled for half a second. No witnesses."
          }
        ]
      }
    }
  };

  const scripted = scripts[quest.id]?.[mode];
  if (scripted) {
    return {
      title: mode === "complete" ? `${quest.title} Complete` : quest.title,
      location: quest.chapter || "Daily Loop",
      ...scripted
    };
  }

  return {
    title: mode === "complete" ? `${quest.title} Complete` : quest.title,
    location: quest.chapter || "Daily Loop",
    sceneClass: mode === "complete" ? "counter" : "cast",
    left: "mascot",
    right: "owner",
    beats: [
      {
        speaker: "Haven Mascot",
        title: quest.title,
        line: mode === "complete" ? quest.completeLine : quest.startLine
      }
    ]
  };
}

function cutsceneForGate(quest, mode = "start") {
  const npcKey = characterKeyForNpc(quest.npc);
  const detail = roomDetailDefs.find((item) => item.upgrade === quest.key && item.level === quest.nextLevel)
    || upcomingRoomDetail(quest.key);
  if (mode === "complete") {
    return {
      title: `${quest.upgradeLabel} Level ${quest.nextLevel}`,
      location: "Upgrade Story",
      sceneClass: "gate-complete",
      left: npcKey,
      right: "owner",
      beats: [
        {
          speaker: quest.npc,
          title: detail ? `${detail.label} Installed` : "Upgrade Installed",
          line: `${quest.rewardText} The room should look busier now, because it earned the extra detail.`
        },
        {
          speaker: "Haven Mascot",
          title: "Story Gate Cleared",
          line: "Every fifth upgrade should feel like meeting someone, finding pieces, and making the place more alive. This one counts."
        }
      ]
    };
  }

  return {
    title: quest.title,
    location: `${quest.upgradeLabel} Level ${quest.nextLevel}`,
    sceneClass: "gate",
    left: npcKey,
    right: "owner",
    beats: [
      {
        speaker: quest.npc,
        title: "New Contact",
        line: quest.dialogue
      },
      {
        speaker: "Haven Mascot",
        title: "Find The Pieces",
        line: `Serve customers, keep the loop moving, and use Find Piece when it appears. Then ${quest.npc} can install the upgrade.`
      }
    ]
  };
}

function setCutsceneCharacter(container, value) {
  const character = resolveCharacter(value);
  container.innerHTML = "";
  container.appendChild(createCharacterBust(character));
  const label = document.createElement("span");
  label.className = "cutscene-name";
  label.textContent = character.name;
  container.appendChild(label);
}

function renderCutsceneBeat() {
  if (!activeCutscene) return;
  const beat = activeCutscene.beats[cutsceneIndex] || activeCutscene.beats[0];
  el.cutsceneTitle.textContent = activeCutscene.title;
  el.cutsceneSceneLabel.textContent = activeCutscene.location || "The Haven";
  el.cutsceneStage.className = `cutscene-stage ${activeCutscene.sceneClass || "cast"}`;
  setCutsceneCharacter(el.cutsceneLeft, beat.left || activeCutscene.left || "mascot");
  setCutsceneCharacter(el.cutsceneRight, beat.right || activeCutscene.right || "owner");
  el.cutsceneSpeaker.textContent = beat.speaker || "Haven Mascot";
  el.cutsceneBeatTitle.textContent = beat.title || activeCutscene.title;
  el.cutsceneLine.textContent = beat.line || "";
  el.cutsceneNext.textContent = cutsceneIndex >= activeCutscene.beats.length - 1 ? "Done" : "Next";
}

function showCutscene(cutscene) {
  if (!cutscene || !cutscene.beats?.length) return;
  if (el.modalBackdrop.classList.contains("visible")) closeDialogue(false);
  activeCutscene = cutscene;
  cutsceneIndex = 0;
  el.cutsceneBackdrop.classList.add("visible");
  el.cutsceneBackdrop.setAttribute("aria-hidden", "false");
  renderCutsceneBeat();
}

function advanceCutscene() {
  if (!activeCutscene) return;
  if (cutsceneIndex < activeCutscene.beats.length - 1) {
    cutsceneIndex += 1;
    renderCutsceneBeat();
    return;
  }
  closeCutscene(true);
}

function closeCutscene(runAction = true) {
  const action = activeCutscene?.action;
  el.cutsceneBackdrop.classList.remove("visible");
  el.cutsceneBackdrop.setAttribute("aria-hidden", "true");
  activeCutscene = null;
  cutsceneIndex = 0;
  if (runAction && typeof action === "function") action();
}

function optionFor(group, key) {
  return avatarOptions[group].find((option) => option.key === key) || avatarOptions[group][0];
}

function avatarFieldForGroup(group) {
  if (group === "outfits") return "outfit";
  if (group === "accessories") return "accessory";
  return group;
}

function isAvatarOptionUnlocked(group, key) {
  return Boolean(state.unlockedAvatar?.[group]?.includes(key));
}

function unlockedAvatarOptions(group) {
  return avatarOptions[group].filter((option) => isAvatarOptionUnlocked(group, option.key));
}

function ensureAvatarSelectionsUnlocked() {
  ["skins", "hair", "outfits", "accessories"].forEach((group) => {
    const field = avatarFieldForGroup(group);
    if (!isAvatarOptionUnlocked(group, state.avatar[field])) {
      state.avatar[field] = state.unlockedAvatar[group][0];
    }
  });
}

function unlockAvatarReward(id) {
  const reward = avatarRewardDefs.find((item) => item.id === id);
  if (!reward) return false;
  const collection = state.unlockedAvatar[reward.group];
  if (collection.includes(reward.key)) return false;
  collection.push(reward.key);
  addLog("Style Unlocked", `${reward.title}: ${reward.line}`);
  if (!el.modalBackdrop.classList.contains("visible")) {
    showDialogue({
      speaker: "Mascot",
      title: `${reward.title} Unlocked`,
      text: reward.line,
      primary: "Try It On"
    });
  }
  return true;
}

function checkAvatarUnlocks() {
  if (state.completedGates.growLights_5 || state.completedGates["growLights:5"]) unlockAvatarReward("neon_hair");
  if (state.completedStory.build_the_vibe) unlockAvatarReward("vip_velvet");
  if (state.metrics.events >= 1) unlockAvatarReward("comedy_jacket");
  if (state.upgrades.security >= 1) unlockAvatarReward("paperwork_blazer");
  if (state.reputation >= 30) unlockAvatarReward("vip_shades");
  if (state.completedStory.the_stage_is_set) unlockAvatarReward("mic_charm");
  if (state.metrics.spiesHandled >= 1) unlockAvatarReward("permit_pin");
}

function avatarBonus(key) {
  return state.avatar.personality === key ? 1 : 0;
}

function avatarGrowBonus() {
  return avatarBonus("grower") * 3.5;
}

function avatarPatienceBonus() {
  return avatarBonus("operator") * 1.8;
}

function avatarVibeBonus() {
  return avatarBonus("charmer") * 0.35;
}

function avatarHeatMultiplier() {
  return avatarBonus("compliance") ? 0.78 : 1;
}

function avatarEventBonus() {
  return avatarBonus("host") ? 5 : 0;
}

function legalStatus() {
  if (state.customers.some((customer) => customer.spy && customer.state !== "leaving")) return "spy";
  if (state.heat >= 70) return "warning";
  if (state.heat >= 38) return "caution";
  return "green";
}

function plantCapacity() {
  return clamp(4 + state.upgrades.plantRows * 2, 6, 24);
}

function ensurePlantSlots() {
  const capacity = plantCapacity();
  while (state.plants.length < capacity) {
    state.plants.push({
      planted: false,
      progress: 0,
      stage: 0,
      ready: false
    });
  }
  if (state.plants.length > capacity) {
    state.plants.length = capacity;
  }
}

function getUpgradeCost(key) {
  const def = upgradeDefs[key];
  const level = state.upgrades[key];
  return Math.round(def.baseCost * Math.pow(def.costGrowth, level));
}

function addMoney(amount, x = 72, y = 35) {
  state.money += amount;
  state.recentMoney.push({ amount, time: performance.now() });
  popMoney(amount, x, y);
}

function spendMoney(amount) {
  if (state.money < amount) return false;
  state.money -= amount;
  return true;
}

function addXp(amount) {
  state.xp += amount;
  const needed = state.level * 85;
  if (state.xp >= needed) {
    state.xp -= needed;
    state.level += 1;
    state.gems = (state.gems || 0) + 1;
    addLog("Level Up", `The Haven reached Level ${state.level}. One premium gem added for later systems.`);
    showDialogue({
      speaker: "Mascot",
      title: "Level Up",
      text: `Boss, we hit Level ${state.level}. The sign still flickers, but now it flickers with prestige.`,
      primary: "Nice"
    });
  }
}

function addLog(title, text) {
  state.storyLog.unshift({ title, text });
  state.storyLog = state.storyLog.slice(0, 16);
}

function currentStoryQuest() {
  if (state.storyQuestIndex >= storyQuests.length) {
    const index = state.dailyQuestIndex % endlessQuestTemplates.length;
    const template = endlessQuestTemplates[index];
    const round = state.dailyQuestRound || 1;
    const id = `${template.id}_${round}`;
    if (!state.storyQuestsStarted) state.storyQuestsStarted = {};
    if (!state.storyQuestsStarted[id]) {
      state.storyQuestsStarted[id] = snapshotMetrics();
      if (state.tutorialSeen) {
        setTimeout(() => {
          showCutscene(cutsceneForStory({ ...template, id, repeatable: true }, "start"));
        }, 400);
      }
    }
    return { ...template, id, repeatable: true, startMetrics: state.storyQuestsStarted[id] };
  }

  const quest = storyQuests[state.storyQuestIndex] || storyQuests[storyQuests.length - 1];
  if (!state.storyQuestsStarted) state.storyQuestsStarted = {};
  if (!state.storyQuestsStarted[quest.id]) {
    state.storyQuestsStarted[quest.id] = snapshotMetrics();
    if (state.tutorialSeen) {
      setTimeout(() => {
        showCutscene(cutsceneForStory(quest, "start"));
      }, 400);
    }
  }
  return { ...quest, startMetrics: state.storyQuestsStarted[quest.id] };
}

function displayedQuest() {
  return state.activeGateQuest || currentStoryQuest();
}

function snapshotMetrics() {
  return {
    planted: state.metrics.planted,
    harvested: state.metrics.harvested,
    stocked: state.metrics.stocked,
    served: state.metrics.served,
    snacksSold: state.metrics.snacksSold,
    snackRushes: state.metrics.snackRushes,
    events: state.metrics.events,
    hires: state.metrics.hires,
    partsFound: state.metrics.partsFound
  };
}

function objectiveProgress(quest, objective) {
  if (objective.type === "metric") {
    const start = quest.startMetrics?.[objective.key] || 0;
    return clamp(state.metrics[objective.key] - start, 0, objective.target);
  }
  if (objective.type === "upgrade") {
    return clamp(state.upgrades[objective.key], 0, objective.target);
  }
  if (objective.type === "meter") {
    return clamp(state[objective.key], 0, objective.target);
  }
  if (objective.type === "meterMax") {
    return state[objective.key] <= objective.target ? objective.target : 0;
  }
  if (objective.type === "parts") {
    return clamp(quest.partsFound || 0, 0, objective.target);
  }
  return 0;
}

function isObjectiveDone(quest, objective) {
  if (objective.type === "meterMax") {
    return state[objective.key] <= objective.target;
  }
  return objectiveProgress(quest, objective) >= objective.target;
}

function questComplete(quest) {
  return quest.objectives.every((objective) => isObjectiveDone(quest, objective));
}

function completeStoryQuest(quest) {
  if (!questComplete(quest)) return;
  const rewards = quest.rewards || {};
  if (rewards.money) addMoney(rewards.money, 78, 28);
  state.reputation += rewards.reputation || 0;
  state.vibe = clamp(state.vibe + (rewards.vibe || 0), 0, 100);
  state.munchies = clamp(state.munchies + (rewards.munchies || 0), 0, 100);
  state.favor = clamp(state.favor + (rewards.favor || 0), 0, 100);
  state.completedStory[quest.id] = true;
  unlockStoryFeatureForQuest(quest);
  addLog(quest.title, quest.completeLine);
  showCutscene(cutsceneForStory(quest, "complete"));
  if (quest.repeatable) {
    state.dailyQuestIndex += 1;
    state.dailyQuestRound = (state.dailyQuestRound || 1) + 1;
  } else if (state.storyQuestIndex < storyQuests.length - 1) {
    state.storyQuestIndex += 1;
  } else {
    state.storyQuestIndex = storyQuests.length;
    state.dailyQuestIndex = state.dailyQuestIndex || 0;
    state.dailyQuestRound = state.dailyQuestRound || 1;
  }
  addXp(25);
  renderAll();
}

function scriptedGateQuest(key, nextLevel) {
  const scriptedLevelFive = {
    growLights: {
      title: "Bright Ideas",
      npc: "Mira Watts",
      description: "Mira can install Neon Bloom Lights, but the old breaker needs parts first.",
      dialogue: "You are running grow lights, a register, snack coolers, and stage dreams through one tired breaker. I can fix it, but I need power modules and proof this place can stay busy.",
      rewardText: "Unlocks Neon Bloom Lights, stronger plant glow, and faster growth.",
      objectives: [
        { type: "metric", key: "served", target: 5, label: "Serve customers while Mira watches flow" },
        { type: "metric", key: "harvested", target: 2, label: "Harvest product for the test batch" },
        { type: "parts", target: 3, label: "Find power modules" }
      ]
    },
    plantRows: {
      title: "Room to Grow",
      npc: "Uncle Darnell",
      description: "Darnell knows where to find old raised beds, but he wants The Haven to prove it helps the block.",
      dialogue: "Plants do better when the room has respect. Clear space, feed people right, and I will show you how to expand without making a mess.",
      rewardText: "Adds a wider grow layout and boosts community reputation.",
      objectives: [
        { type: "metric", key: "harvested", target: 4, label: "Harvest clean batches" },
        { type: "metric", key: "served", target: 6, label: "Serve neighbors" },
        { type: "parts", target: 2, label: "Recover grow-bed frames" }
      ]
    },
    counter: {
      title: "The Line Outside",
      npc: "Sav Cruz",
      description: "Sav can redesign the counter if the team proves they can handle a rush.",
      dialogue: "Your counter is cute. Also slow. Give me a rush, a better check-in tablet, and five minutes with that register.",
      rewardText: "Speeds checkout and raises customer patience.",
      objectives: [
        { type: "metric", key: "served", target: 12, label: "Serve a counter rush" },
        { type: "metric", key: "stocked", target: 6, label: "Keep shelves stocked" },
        { type: "parts", target: 2, label: "Find check-in tablet pieces" }
      ]
    },
    lounge: {
      title: "Couch Culture",
      npc: "Velma Vibe",
      description: "Velma has vintage lounge pieces, but she only works with rooms that have real atmosphere.",
      dialogue: "A chair is furniture. A couch is a promise. Show me customers actually want to stay here.",
      rewardText: "Unlocks warmer lounge visuals and a stronger Vibe boost.",
      objectives: [
        { type: "metric", key: "served", target: 8, label: "Serve lounge guests" },
        { type: "meter", key: "vibe", target: 35, label: "Raise Vibe" },
        { type: "parts", target: 3, label: "Find vintage lounge pieces" }
      ]
    },
    snackBar: {
      title: "Munchies Manifesto",
      npc: "Nova Sweets",
      description: "Nova wants to test a signature snack shelf before signing on.",
      dialogue: "The snack bar should not whisper. It should announce itself with crunch, fizz, and questionable confidence.",
      rewardText: "Boosts Munchies spending and unlocks better snack rushes.",
      objectives: [
        { type: "metric", key: "snacksSold", target: 10, label: "Sell test snacks" },
        { type: "metric", key: "served", target: 7, label: "Keep the room moving" },
        { type: "parts", target: 3, label: "Find display shelf pieces" }
      ]
    },
    stage: {
      title: "Mic Check",
      npc: "Rico Reyes",
      description: "Rico can book the first real act, but the stage needs speakers and an audience.",
      dialogue: "Every legendary night begins with someone saying the mic is probably fine. It is not fine. Let us fix it.",
      rewardText: "Unlocks better event turnout and music fan customers.",
      objectives: [
        { type: "metric", key: "events", target: 1, label: "Run a warm-up event" },
        { type: "metric", key: "served", target: 10, label: "Serve the crowd" },
        { type: "parts", target: 4, label: "Find speaker pieces" }
      ]
    },
    security: {
      title: "Front Door Diplomacy",
      npc: "Jules Park",
      description: "Jules will help set up compliance if the shop can keep Heat under control.",
      dialogue: "The law is less scary when your paperwork is boring. Make the room orderly and I will handle the fine print.",
      rewardText: "Lowers Heat and unlocks inspection readiness.",
      objectives: [
        { type: "meterMax", key: "heat", target: 38, label: "Keep Heat below 38" },
        { type: "metric", key: "served", target: 8, label: "Serve customers without chaos" },
        { type: "parts", target: 2, label: "Find check-in gear" }
      ]
    }
  };

  if (nextLevel === 5) return scriptedLevelFive[key];

  const def = upgradeDefs[key];
  const contact = [
    "Mira Watts",
    "Uncle Darnell",
    "Sav Cruz",
    "Nova Sweets",
    "Rico Reyes",
    "Jules Park",
    "Officer Vale",
    "Council Member Imani"
  ][Math.floor(nextLevel / 5) % 8];

  return {
    title: `${def.label} Level ${nextLevel}: New Pieces`,
    npc: contact,
    description: `${contact} has a lead on the next ${def.label.toLowerCase()} upgrade, but The Haven needs to prove it is ready.`,
    dialogue: `Level ${nextLevel} is not a simple install. We need parts, happy customers, and a little reputation before this upgrade feels earned.`,
    rewardText: `Installs ${def.label} Level ${nextLevel} and pushes the room into a new visual tier.`,
    objectives: [
      { type: "metric", key: "served", target: 8 + nextLevel, label: "Serve customers" },
      { type: "metric", key: "harvested", target: 2 + Math.floor(nextLevel / 3), label: "Harvest product" },
      { type: "parts", target: 2 + Math.floor(nextLevel / 5), label: "Find upgrade pieces" }
    ]
  };
}

function startGateQuest(key, nextLevel) {
  if (state.activeGateQuest) {
    showDialogue({
      speaker: "Mascot",
      title: "One Thing At A Time",
      text: "Boss, we already have a story upgrade in motion. Finish that quest, then we can go shopping for more questionable equipment.",
      primary: "Got It"
    });
    return;
  }

  const def = upgradeDefs[key];
  const questDef = scriptedGateQuest(key, nextLevel);
  const id = `${key}_${nextLevel}`;
  state.activeGateQuest = {
    ...questDef,
    id,
    key,
    nextLevel,
    upgradeLabel: def.label,
    startMetrics: snapshotMetrics(),
    partsFound: 0,
    isGateQuest: true
  };

  addLog(questDef.title, `${questDef.npc} entered the story. ${questDef.description}`);
  showCutscene(cutsceneForGate(state.activeGateQuest, "start"));
  renderAll();
}

function findQuestPart() {
  const quest = state.activeGateQuest;
  if (!quest) return;
  const cost = 25 + quest.nextLevel * 4;
  if (!spendMoney(cost)) return;
  quest.partsFound = (quest.partsFound || 0) + 1;
  state.metrics.partsFound += 1;
  state.heat = clamp(state.heat + 0.7 * avatarHeatMultiplier(), 0, 100);
  addLog("Piece Found", `${quest.npc} found one more piece for ${quest.title}.`);
  popSpark(74, 42);
  renderAll();
}

function completeGateQuest(quest) {
  if (!questComplete(quest)) return;
  const cost = getUpgradeCost(quest.key);
  if (!spendMoney(cost)) return;

  applyUpgrade(quest.key, true);
  const gateKey = `${quest.key}:${quest.nextLevel}`;
  state.completedGates[gateKey] = true;
  state.activeGateQuest = null;
  state.reputation += 3 + Math.floor(quest.nextLevel / 5);
  state.favor = clamp(state.favor + (quest.key === "security" ? 6 : 1), 0, 100);
  addXp(35 + quest.nextLevel);
  addLog(quest.title, `${quest.rewardText} ${quest.npc} is now part of The Haven's network.`);
  showCutscene(cutsceneForGate(quest, "complete"));
  renderAll();
}

function upgradeClicked(key) {
  const nextLevel = state.upgrades[key] + 1;
  const gateKey = `${key}:${nextLevel}`;

  if (nextLevel % 5 === 0 && !state.completedGates[gateKey]) {
    startGateQuest(key, nextLevel);
    return;
  }

  const cost = getUpgradeCost(key);
  if (!spendMoney(cost)) return;
  applyUpgrade(key, false);
  renderAll();
}

function applyUpgradeEffects(key) {
  if (key === "plantRows") ensurePlantSlots();
  if (key === "lounge") state.vibe = clamp(state.vibe + 6, 0, 100);
  if (key === "snackBar") state.munchies = clamp(state.munchies + 6, 0, 100);
  if (key === "stage") state.vibe = clamp(state.vibe + 4, 0, 100);
  if (key === "security") state.heat = clamp(state.heat - 8, 0, 100);
  if (key === "counter") state.reputation += 1;
}

function grantUpgradeLevel(key, targetLevel, sourceTitle, silent = false) {
  let unlocked = false;
  while (state.upgrades[key] < targetLevel) {
    state.upgrades[key] += 1;
    const level = state.upgrades[key];
    applyUpgradeEffects(key);
    unlocked = true;
    if (!silent) {
      addLog("New Area Unlocked", `${upgradeDefs[key].label} reached Level ${level}. ${sourceTitle} opened the next part of The Haven.`);
    }
  }
  return unlocked;
}

function unlockStoryFeatureForQuest(quest, silent = false) {
  const unlock = storyFeatureUnlocks[quest.id];
  if (!unlock) return false;
  const unlocked = grantUpgradeLevel(unlock.key, unlock.level, quest.title, silent);
  if (unlocked && !silent) {
    popSpark(unlock.key === "stage" ? 78 : 74, unlock.key === "security" ? 78 : 34);
  }
  return unlocked;
}

function repairStoryFeatureUnlocks() {
  let repaired = false;
  storyQuests.forEach((quest, index) => {
    if (state.completedStory[quest.id] || state.storyQuestIndex > index) {
      repaired = unlockStoryFeatureForQuest(quest, true) || repaired;
    }
  });
  return repaired;
}

function applyUpgrade(key, fromQuest) {
  state.upgrades[key] += 1;
  const level = state.upgrades[key];

  applyUpgradeEffects(key);

  addXp(fromQuest ? 28 : 10);
  addLog("Upgrade Installed", `${upgradeDefs[key].label} reached Level ${level}.`);
  popSpark(key === "growLights" || key === "plantRows" ? 30 : 74, key === "stage" ? 74 : 34);
}

function plantSeeds() {
  ensurePlantSlots();
  const strain = currentStrain();
  const cost = seedCost(strain);
  let planted = 0;
  for (const plant of state.plants) {
    if (!plant.planted && planted < 6 && state.money >= cost) {
      spendMoney(cost);
      plant.planted = true;
      plant.strain = strain.key;
      plant.progress = 0;
      plant.stage = 0;
      plant.ready = false;
      planted += 1;
      state.metrics.planted += 1;
    }
  }

  if (planted > 0) {
    state.vibe = clamp(state.vibe + 0.5 + strain.vibe * 0.06, 0, 100);
    addLog("Seeds Planted", `${planted} ${strain.name} plant slot${planted === 1 ? " is" : "s are"} growing.`);
  } else if (state.money < cost) {
    showDialogue({
      speaker: "Mascot",
      title: "Seed Money Needed",
      text: `${strain.name} seeds cost ${moneyText(cost)} each. The plants are emotionally ready, but the register is not.`,
      primary: "Got It"
    });
  }
  renderAll();
}

function plantGrowTime(strainKey = state.selectedStrain) {
  const strain = strainByKey(strainKey);
  return Math.max(10, 48 - state.upgrades.growLights * 2.1 - state.staff.grower * 2.2 - avatarGrowBonus() - strain.grow * 1.4);
}

function tickPlants(dt) {
  for (const plant of state.plants) {
    if (!plant.planted || plant.ready) continue;
    const growTime = plantGrowTime(plant.strain);
    plant.progress += dt / growTime;
    plant.stage = clamp(Math.floor(plant.progress * 7), 0, 6);
    if (plant.progress >= 1) {
      plant.progress = 1;
      plant.stage = 6;
      plant.ready = true;
    }
  }
}

function harvestPlant(index, auto = false) {
  const plant = state.plants[index];
  if (!plant || !plant.ready) return false;
  const strain = strainByKey(plant.strain || state.selectedStrain);
  const yieldAmount = Math.max(1, 2 + strain.yield + Math.floor(state.upgrades.growLights / 3) + Math.floor(state.upgrades.plantRows / 5));
  addInventory(state.inventory.flowerByStrain, strain.key, yieldAmount);
  syncInventoryTotals();
  state.metrics.harvested += 1;
  state.harvestedStrains[strain.key] = (state.harvestedStrains[strain.key] || 0) + yieldAmount;
  state.vibe = clamp(state.vibe + 0.5 + strain.vibe * 0.08, 0, 100);
  plant.planted = false;
  plant.strain = null;
  plant.progress = 0;
  plant.stage = 0;
  plant.ready = false;
  addXp(4);
  popSpark(24 + Math.random() * 18, 38 + Math.random() * 20);
  if (!auto) addLog("Harvest Ready", `${yieldAmount} ${strain.name} unit${yieldAmount === 1 ? "" : "s"} moved to processing.`);
  return true;
}

function harvestReady() {
  let count = 0;
  state.plants.forEach((plant, index) => {
    if (plant.ready && harvestPlant(index)) count += 1;
  });
  if (count > 0) addLog("Harvest Complete", `${count} ready plants were harvested.`);
  renderAll();
}

function stockCounterUnits(limit = Infinity) {
  syncInventoryTotals();
  if (state.inventory.rawFlower <= 0) return;
  let moved = 0;
  Object.keys(state.inventory.flowerByStrain).forEach((key) => {
    if (moved >= limit) return;
    const available = state.inventory.flowerByStrain[key] || 0;
    const amount = Math.min(available, limit - moved);
    if (amount <= 0) return;
    addInventory(state.inventory.flowerByStrain, key, -amount);
    addInventory(state.inventory.counterByStrain, key, amount);
    moved += amount;
  });
  syncInventoryTotals();
  return moved;
}

function counterStockSummary() {
  const entries = Object.entries(state.inventory.counterByStrain || {}).filter(([, amount]) => amount > 0);
  if (entries.length === 0) return "empty";
  entries.sort((a, b) => b[1] - a[1]);
  return `${strainByKey(entries[0][0]).name} +${Math.max(0, entries.length - 1)} mix`;
}

function stockShelves() {
  const moved = stockCounterUnits();
  if (!moved) return;
  state.metrics.stocked += moved;
  addLog("Counter Stocked", `${moved} unit${moved === 1 ? "" : "s"} moved to the counter. Current mix: ${counterStockSummary()}.`);
  popSpark(67, 22);
  renderAll();
}

function snackRestockCost() {
  return 22 + state.upgrades.snackBar * 6;
}

function restockSnacks(showMessage = false) {
  const cost = snackRestockCost();
  if (!spendMoney(cost)) return false;
  const amount = 18 + state.upgrades.snackBar * 4 + state.staff.snackWorker * 3;
  state.inventory.snacks += amount;
  addLog("Snack Delivery", `${amount} snack items arrived for the bar.`);
  if (showMessage) {
    showDialogue({
      speaker: "Nova Sweets",
      title: "Snack Drop",
      text: "The snack shelf has been restocked. It now has crunch, fizz, and the confidence of a tiny parade.",
      primary: "Serve It"
    });
  }
  return true;
}

function serveSnackToCustomer(customer) {
  if (!customer || customer.didSnack || state.inventory.snacks <= 0) return false;
  setCustomerState(customer, "snacking");
  if (!sellSnack(customer)) return false;
  customer.didSnack = true;
  customer.timer = 0;
  return true;
}

function runSnackRush() {
  if (state.upgrades.snackBar < 1) {
    showDialogue({
      speaker: "Mascot",
      title: "Snack Bar Needed",
      text: "Boss, snacks cannot become strategy until the Snack Bar hits Level 1 on the Upgrade Board.",
      primary: "Got It"
    });
    return;
  }

  if (state.inventory.snacks <= 0 && !restockSnacks(true)) {
    showDialogue({
      speaker: "Nova Sweets",
      title: "Snack Shelf Empty",
      text: `We need ${moneyText(snackRestockCost())} for a snack delivery before the next rush.`,
      primary: "Got It"
    });
    renderAll();
    return;
  }

  const rushSize = clamp(2 + Math.floor(state.upgrades.snackBar / 2) + state.staff.snackWorker, 2, 6);
  const readyStates = ["entering", "checking", "buying", "lounging", "watching"];
  const candidates = state.customers
    .filter((customer) => readyStates.includes(customer.state) && !customer.didSnack && !customer.spy)
    .sort((a, b) => b.snack - a.snack);

  while (candidates.length < rushSize && state.customers.length < 18) {
    const customer = spawnCustomer(false, false, "Snack Lover");
    if (!customer) break;
    candidates.push(customer);
  }

  let sold = 0;
  candidates.slice(0, rushSize).forEach((customer) => {
    if (serveSnackToCustomer(customer)) sold += 1;
  });

  if (sold <= 0) {
    showDialogue({
      speaker: "Mascot",
      title: "No Snack Takers",
      text: "The snack bar is ready, but we need customers in the room first. Keep the counter stocked and the line moving.",
      primary: "Got It"
    });
    renderAll();
    return;
  }

  state.metrics.snackRushes += 1;
  state.munchies = clamp(state.munchies + 3 + state.upgrades.snackBar, 0, 100);
  state.vibe = clamp(state.vibe + sold * 0.35, 0, 100);
  state.reputation += sold * 0.08;
  addXp(4 + sold);
  addLog("Snack Rush", `${sold} customers hit the snack bar. Nova calls this edible crowd control.`);
  popSpark(86, 31);
  renderAll();
}

function runEvent() {
  if (state.upgrades.stage < 1) {
    showDialogue({
      speaker: "Mascot",
      title: "Stage Needed",
      text: "Boss, we need at least Stage Gear Level 1 before asking people to perform near a wall outlet.",
      primary: "Got It"
    });
    return;
  }
  const cost = 42 + state.upgrades.stage * 12;
  if (!spendMoney(cost)) return;

  state.activeEventSeconds = 28 + state.upgrades.stage * 2;
  state.metrics.events += 1;
  state.vibe = clamp(state.vibe + 8 + state.upgrades.stage + avatarEventBonus(), 0, 100);
  state.munchies = clamp(state.munchies + 10, 0, 100);
  state.heat = clamp(state.heat + Math.max(1, 8 - state.upgrades.security) * avatarHeatMultiplier(), 0, 100);
  state.reputation += 2;
  addXp(18);
  addLog("Event Started", "The stage is live. Customers will arrive faster while the event is active.");
  showDialogue({
    speaker: "Rico Reyes",
    title: "Showtime",
    text: "Lights up, snacks ready, vibes high. Try to make money before the noise complaints discover rhythm.",
    primary: "Run It"
  });
  for (let i = 0; i < 4; i += 1) spawnCustomer(true);
  renderAll();
}

function hireStaff() {
  const available = crewDefs.filter((crew) => crew.unlock === "always" || state.upgrades[crew.unlock] > 0);
  const totalStaff = Object.values(state.staff).reduce((sum, value) => sum + value, 0);
  const role = available.sort((a, b) => state.staff[a.key] - state.staff[b.key])[0];
  if (!role) return;
  const cost = 90 + totalStaff * 68;
  if (!spendMoney(cost)) return;

  state.staff[role.key] += 1;
  state.metrics.hires += 1;
  state.reputation += 1;
  addXp(14);
  addLog("New Hire", `${role.label} joined with the ${role.trait} trait.`);
  showDialogue({
    speaker: "Mascot",
    title: "Crew Up",
    text: `${role.label} hired. The Haven is officially less dependent on you sprinting between every crisis.`,
    primary: "Welcome"
  });
  renderAll();
}

function spawnCustomer(forceEventFan = false, forceSpy = false, preferredTypeName = null) {
  let pool = customerTypes.filter((type) => !type.spy);
  if (state.reputation < 18) pool = pool.filter((type) => type.name !== "VIP");
  if (state.upgrades.stage < 1 && !forceEventFan) pool = pool.filter((type) => type.name !== "Music Fan");
  if (state.upgrades.snackBar < 1) pool = pool.filter((type) => type.name !== "Snack Lover");
  let type = pool[Math.floor(Math.random() * pool.length)];
  if (preferredTypeName) {
    type = pool.find((item) => item.name === preferredTypeName) || type;
  }
  if (forceEventFan && state.upgrades.stage > 0) {
    type = customerTypes.find((item) => item.name === "Music Fan");
  }
  if (forceSpy) {
    type = customerTypes.find((item) => item.spy);
  }

  const patience = type.patience + state.upgrades.counter * 0.8 + state.vibe * 0.08 + avatarPatienceBonus();
  const customer = {
    id: customerId++,
    type: type.name,
    className: type.className,
    skin: type.skin,
    shirt: type.shirt,
    state: "entering",
    timer: 0,
    patience,
    maxPatience: patience,
    spend: type.spend,
    snack: type.snack,
    vibe: type.vibe,
    spy: Boolean(type.spy),
    x: 94,
    y: 60,
    didBuy: false,
    didSnack: false
  };
  state.customers.push(customer);
  return customer;
}

function customerTarget(customer) {
  if (customer.state === "entering") return { x: 96, y: 42 };
  if (customer.state === "checking") return { x: 64, y: 18 };
  if (customer.state === "buying") return { x: 61, y: 18 };
  if (customer.state === "lounging") return { x: 65 + Math.random() * 11, y: 42 + Math.random() * 7 };
  if (customer.state === "snacking") return { x: 88, y: 18 };
  if (customer.state === "watching") return { x: 82, y: 76 };
  if (customer.state === "complaining") return { x: 72, y: 31 };
  return { x: 96, y: 72 };
}

function setCustomerState(customer, nextState) {
  customer.state = nextState;
  customer.timer = 0;
  const target = customerTarget(customer);
  customer.x = target.x;
  customer.y = target.y;
}

function tickCustomers(dt) {
  for (const customer of state.customers) {
    customer.timer += dt;
    if (customer.state === "checking" || customer.state === "buying") {
      customer.patience -= dt * Math.max(0.25, 1.2 - state.staff.cashier * 0.15);
    }

    if (customer.patience <= 0 && customer.state !== "complaining" && customer.state !== "leaving") {
      setCustomerState(customer, "complaining");
      state.heat = clamp(state.heat + 2.5 * avatarHeatMultiplier(), 0, 100);
      state.vibe = clamp(state.vibe - 2, 0, 100);
    }

    if (customer.state === "entering" && customer.timer > 1) {
      setCustomerState(customer, "checking");
    } else if (customer.state === "checking" && customer.timer > Math.max(1, 3.2 - state.upgrades.counter * 0.25 - state.staff.cashier * 0.35)) {
      setCustomerState(customer, "buying");
    } else if (customer.state === "buying") {
      if (!customer.didBuy) {
        makeCustomerPurchase(customer);
        customer.didBuy = true;
      }
      if (customer.timer > 1.5) {
        chooseCustomerNext(customer);
      }
    } else if (customer.state === "lounging") {
      state.munchies = clamp(state.munchies + dt * (0.18 + state.upgrades.lounge * 0.018), 0, 100);
      if (state.activeEventSeconds > 0 && customer.timer > 1.8) setCustomerState(customer, "watching");
      else if (state.upgrades.snackBar > 0 && customer.timer > 3 && Math.random() < customer.snack * dt * 0.22) setCustomerState(customer, "snacking");
      else if (customer.timer > 8 + state.upgrades.lounge * 0.6) setCustomerState(customer, "leaving");
    } else if (customer.state === "watching") {
      state.munchies = clamp(state.munchies + dt * 0.24, 0, 100);
      if (customer.timer > 5 && state.upgrades.snackBar > 0 && Math.random() < 0.8) setCustomerState(customer, "snacking");
      else if (customer.timer > 9) setCustomerState(customer, "leaving");
    } else if (customer.state === "snacking") {
      if (!customer.didSnack) {
        sellSnack(customer);
        customer.didSnack = true;
      }
      if (customer.timer > Math.max(1.2, 3 - state.staff.snackWorker * 0.3)) setCustomerState(customer, "leaving");
    } else if (customer.state === "complaining" && customer.timer > Math.max(1.5, 4 - state.staff.security * 0.6)) {
      state.heat = clamp(state.heat + 1 * avatarHeatMultiplier(), 0, 100);
      setCustomerState(customer, "leaving");
    }
  }

  state.customers = state.customers.filter((customer) => !(customer.state === "leaving" && customer.timer > 2.2));
}

function pullCounterStock() {
  syncInventoryTotals();
  const entries = Object.entries(state.inventory.counterByStrain || {}).filter(([, amount]) => amount > 0);
  if (entries.length === 0) return null;
  entries.sort((a, b) => {
    const strainA = strainByKey(a[0]);
    const strainB = strainByKey(b[0]);
    return strainB.price - strainA.price || b[1] - a[1];
  });
  const key = entries[0][0];
  addInventory(state.inventory.counterByStrain, key, -1);
  syncInventoryTotals();
  return strainByKey(key);
}

function makeCustomerPurchase(customer) {
  const strain = pullCounterStock();
  if (!strain) {
    state.vibe = clamp(state.vibe - 1, 0, 100);
    state.heat = clamp(state.heat + (customer.spy ? 4 : 0.5) * avatarHeatMultiplier(), 0, 100);
    if (customer.spy) {
      state.metrics.spiesHandled += 1;
      addLog("Secret Shopper Note", "The suspicious customer found empty shelves and wrote something down with theatrical disappointment.");
    }
    return;
  }

  const sale = Math.round((13 + state.upgrades.counter * 3 + state.upgrades.growLights * 1.3 + strain.price * 2.4) * customer.spend * (1 + state.vibe / 220));
  addMoney(sale, customer.x, customer.y);
  state.metrics.served += 1;
  state.reputation += customer.type === "VIP" ? 0.45 : customer.spy ? 0.05 : 0.18;
  state.vibe = clamp(state.vibe + 0.5 + customer.vibe * 0.3 + strain.vibe * 0.08 + avatarVibeBonus(), 0, 100);
  state.munchies = clamp(state.munchies + customer.snack * 1.6 + strain.munchies * 0.08, 0, 100);
  if (customer.spy) {
    const cleanService = customer.patience / customer.maxPatience > 0.35 || state.staff.security > 0;
    state.metrics.spiesHandled += 1;
    if (cleanService) {
      state.heat = clamp(state.heat - 5 - state.staff.security * 1.5, 0, 100);
      addLog("Boring Report", "A Secret Shopper found stocked shelves, calm service, and nothing dramatic enough for a clipboard.");
    } else {
      state.heat = clamp(state.heat + 3 * avatarHeatMultiplier(), 0, 100);
      addLog("Raised Eyebrow", "The Secret Shopper did not complain, which somehow felt more threatening.");
    }
  }
  addXp(3);
}

function sellSnack(customer) {
  if (state.inventory.snacks <= 0) {
    state.vibe = clamp(state.vibe - 0.6, 0, 100);
    return false;
  }

  state.inventory.snacks -= 1;
  const snackSale = Math.round((6 + state.upgrades.snackBar * 2.2) * (0.8 + customer.snack));
  addMoney(snackSale, customer.x, customer.y);
  state.metrics.snacksSold += 1;
  state.munchies = clamp(state.munchies - 1.5, 0, 100);
  state.vibe = clamp(state.vibe + 0.5, 0, 100);
  addXp(2);
  return true;
}

function chooseCustomerNext(customer) {
  if (state.upgrades.lounge > 0 && Math.random() < 0.62 + state.vibe / 250) {
    setCustomerState(customer, "lounging");
    return;
  }
  if (state.upgrades.snackBar > 0 && Math.random() < customer.snack) {
    setCustomerState(customer, "snacking");
    return;
  }
  setCustomerState(customer, "leaving");
}

function tickSpawning(dt) {
  const eventBoost = state.activeEventSeconds > 0 ? 1.6 : 0;
  const interval = Math.max(1.7, 7.3 - state.upgrades.counter * 0.22 - state.vibe * 0.025 - eventBoost);
  state.spyCooldown = Math.max(0, state.spyCooldown - dt);
  const spyChance = state.heat >= 70 ? 0.45 : state.heat >= 38 ? 0.22 : 0;
  spawnTimer -= dt;
  if (spawnTimer <= 0) {
    const shouldSpawnSpy = state.spyCooldown <= 0 && spyChance > 0 && Math.random() < spyChance;
    spawnCustomer(false, shouldSpawnSpy);
    if (shouldSpawnSpy) {
      state.spyCooldown = 38 + Math.random() * 24;
      addLog("Suspicious Customer", "Someone came in asking very specific questions about paperwork and speaker volume.");
    }
    spawnTimer = interval;
  }
}

function tickStaff(dt) {
  staffTimer += dt;
  if (staffTimer < 5.5) return;
  staffTimer = 0;

  if (state.staff.grower > 0) {
    const readyIndex = state.plants.findIndex((plant) => plant.ready);
    if (readyIndex >= 0) harvestPlant(readyIndex, true);

    const strain = currentStrain();
    const cost = seedCost(strain);
    if (state.money >= cost) {
      const emptyIndex = state.plants.findIndex((plant) => !plant.planted);
      if (emptyIndex >= 0) {
        spendMoney(cost);
        const plant = state.plants[emptyIndex];
        plant.planted = true;
        plant.strain = strain.key;
        plant.progress = 0;
        plant.stage = 0;
        plant.ready = false;
        state.metrics.planted += 1;
      }
    }
  }

  if (state.staff.cashier > 0 && state.inventory.rawFlower > 0 && state.inventory.shelfStock < 6 + state.upgrades.counter * 2) {
    const moved = stockCounterUnits(3 + state.staff.cashier);
    state.metrics.stocked += moved;
  }

  if (state.staff.snackWorker > 0 && state.upgrades.snackBar > 0 && state.inventory.snacks > 0) {
    const snackCustomer = state.customers.find((customer) => {
      return !customer.didSnack && !customer.spy && ["lounging", "watching", "checking"].includes(customer.state);
    });
    if (snackCustomer) serveSnackToCustomer(snackCustomer);
  }

  if (state.staff.security > 0) {
    state.heat = clamp(state.heat - 0.5 * state.staff.security, 0, 100);
  }
}

function tickWorld(dt) {
  tickPlants(dt);
  tickSpawning(dt);
  tickCustomers(dt);
  tickStaff(dt);

  if (state.activeEventSeconds > 0) {
    state.activeEventSeconds = Math.max(0, state.activeEventSeconds - dt);
    state.sceneEventPulse = true;
  }

  state.vibe = clamp(state.vibe - dt * 0.016 + state.upgrades.lounge * dt * 0.006, 0, 100);
  state.munchies = clamp(state.munchies - dt * 0.01 + state.upgrades.snackBar * dt * 0.004, 0, 100);
  state.heat = clamp(state.heat - dt * (0.006 + state.upgrades.security * 0.004), 0, 100);
  state.reputation = clamp(state.reputation, 0, 999);
  const currentLegalStatus = legalStatus();
  if (currentLegalStatus !== state.lastLegalStatus) {
    state.lastLegalStatus = currentLegalStatus;
    if (currentLegalStatus === "caution") {
      addLog("Legal Light", "The warning light flipped yellow. The mascot has begun walking normally, which is somehow suspicious.");
    } else if (currentLegalStatus === "warning") {
      addLog("Legal Light", "The warning light went red. Nobody panic. Especially not the person holding nachos.");
    } else if (currentLegalStatus === "spy") {
      addLog("Spy Watch", "The room has clipboard energy. Keep the shelves stocked and the line calm.");
    } else {
      addLog("All Clear", "The legal light is green again. The mascot says this is what paperwork dreams about.");
    }
  }

  saveTimer += dt;
  if (saveTimer > 5) {
    saveTimer = 0;
    saveState();
  }
}

function calculateCashRate() {
  const now = performance.now();
  state.recentMoney = state.recentMoney.filter((entry) => now - entry.time < 10000);
  const total = state.recentMoney.reduce((sum, entry) => sum + entry.amount, 0);
  return total / 10;
}

function renderPlants() {
  ensurePlantSlots();
  el.plantGrid.innerHTML = "";
  state.plants.forEach((plant, index) => {
    const slot = document.createElement("button");
    slot.type = "button";
    slot.className = `plant-slot ${plant.planted ? "" : "empty"} ${plant.ready ? "ready" : ""}`;
    const strain = strainByKey(plant.strain || state.selectedStrain);
    slot.style.setProperty("--strain-color", strain.color);
    slot.setAttribute("aria-label", plant.ready ? `Harvest ${strain.name}` : plant.planted ? `Growing ${strain.name}` : "Empty plant slot");
    slot.addEventListener("click", () => {
      if (plant.ready) {
        harvestPlant(index);
        renderAll();
      }
    });

    if (plant.planted) {
      const label = document.createElement("span");
      label.className = "seed-chip";
      label.textContent = plantedStrainLabel(plant);
      slot.appendChild(label);
      const art = document.createElement("span");
      art.className = `plant-art stage-${plant.stage}`;
      slot.appendChild(art);
      const timer = document.createElement("span");
      timer.className = "plant-timer";
      const bar = document.createElement("span");
      bar.style.width = `${Math.round(plant.progress * 100)}%`;
      timer.appendChild(bar);
      slot.appendChild(timer);
    }
    el.plantGrid.appendChild(slot);
  });
}

function renderUpgrades() {
  el.upgradeList.innerHTML = "";
  Object.entries(upgradeDefs).forEach(([key, def]) => {
    const level = state.upgrades[key];
    const nextLevel = level + 1;
    const gateKey = `${key}:${nextLevel}`;
    const isGate = nextLevel % 5 === 0 && !state.completedGates[gateKey];
    const cost = getUpgradeCost(key);
    const nextVisual = upcomingRoomDetail(key);
    const visualText = nextVisual
      ? `Next visual: ${nextVisual.label} at Lv. ${nextVisual.level}`
      : "Visual detail set is fully unlocked for this prototype";
    const item = document.createElement("div");
    item.className = `upgrade-item upgrade-tier-${clamp(level, 0, 5)} ${isGate ? "story-gate" : ""}`;
    item.innerHTML = `
      <div>
        <span class="upgrade-name">${def.label} Lv. ${level}</span>
        <span class="upgrade-meta">${def.zone} - ${isGate ? `Story quest with ${def.npc}` : `${def.effect} Cost ${moneyText(cost)}`}</span>
        <span class="upgrade-visual">${visualText}</span>
      </div>
    `;
    const button = document.createElement("button");
    button.textContent = isGate ? "Quest" : moneyText(cost);
    button.disabled = !isGate && state.money < cost;
    button.addEventListener("click", () => upgradeClicked(key));
    item.appendChild(button);
    el.upgradeList.appendChild(item);
  });
}

function renderQuest() {
  const quest = displayedQuest();
  el.chapterName.textContent = quest.chapter || (quest.isGateQuest ? "Story Gate" : "Chapter");
  el.questTitle.textContent = quest.title;
  el.questDescription.textContent = quest.description;
  el.questObjectives.innerHTML = "";

  quest.objectives.forEach((objective) => {
    const done = isObjectiveDone(quest, objective);
    const progress = objectiveProgress(quest, objective);
    const row = document.createElement("div");
    row.className = `objective ${done ? "done" : ""}`;
    const targetLabel = objective.type === "meterMax"
      ? `<= ${objective.target}`
      : `${Math.floor(progress)} / ${objective.target}`;
    row.innerHTML = `<span>${objective.label}</span><strong>${done ? "Done" : targetLabel}</strong>`;
    el.questObjectives.appendChild(row);
  });

  el.questActionButton.classList.add("hidden");
  el.questActionButton.disabled = false;

  if (quest.isGateQuest) {
    const partObjective = quest.objectives.find((objective) => objective.type === "parts");
    const partsDone = !partObjective || objectiveProgress(quest, partObjective) >= partObjective.target;
    if (!partsDone) {
      const partCost = 25 + quest.nextLevel * 4;
      el.questActionButton.textContent = `Find Piece ${moneyText(partCost)}`;
      el.questActionButton.disabled = state.money < partCost;
      el.questActionButton.onclick = findQuestPart;
      el.questActionButton.classList.remove("hidden");
    } else if (questComplete(quest)) {
      const cost = getUpgradeCost(quest.key);
      el.questActionButton.textContent = `Install Upgrade ${moneyText(cost)}`;
      el.questActionButton.disabled = state.money < cost;
      el.questActionButton.onclick = () => completeGateQuest(quest);
      el.questActionButton.classList.remove("hidden");
    }
  } else if (questComplete(quest)) {
    const unlock = storyFeatureUnlocks[quest.id];
    const unlockReady = unlock && state.upgrades[unlock.key] < unlock.level;
    el.questActionButton.textContent = unlockReady ? `Unlock ${unlock.label}` : "Complete Quest";
    el.questActionButton.onclick = () => completeStoryQuest(quest);
    el.questActionButton.classList.remove("hidden");
  }
}

function setSelectOptions(select, options) {
  select.innerHTML = "";
  options.forEach((option) => {
    const node = document.createElement("option");
    node.value = option.key;
    node.textContent = option.label;
    select.appendChild(node);
  });
}

function populateAvatarControls() {
  ensureAvatarSelectionsUnlocked();
  setSelectOptions(el.avatarSkinSelect, unlockedAvatarOptions("skins"));
  setSelectOptions(el.avatarHairSelect, unlockedAvatarOptions("hair"));
  setSelectOptions(el.avatarOutfitSelect, unlockedAvatarOptions("outfits"));
  setSelectOptions(el.avatarAccessorySelect, unlockedAvatarOptions("accessories"));
  setSelectOptions(el.avatarPersonalitySelect, avatarOptions.personalities);
}

function avatarVisualData() {
  const skin = optionFor("skins", state.avatar.skin);
  const hair = optionFor("hair", state.avatar.hair);
  const outfit = optionFor("outfits", state.avatar.outfit);
  const accessory = optionFor("accessories", state.avatar.accessory);
  const hairClass = ["buzz", "curls", "loc"].includes(hair.key) ? hair.key : "fade";
  return {
    name: state.avatar.name || "Boss",
    skin: skin.value,
    hairColor: hair.value,
    hairClass,
    shirt: outfit.shirt,
    accent: outfit.accent,
    accessory: accessory.key
  };
}

function renderAvatar() {
  ensureAvatarSelectionsUnlocked();
  const visual = avatarVisualData();
  const personality = optionFor("personalities", state.avatar.personality);

  el.ownerAvatarPreview.className = `avatar-preview hair-${visual.hairClass} outfit-${state.avatar.outfit} accessory-${state.avatar.accessory}`;
  el.ownerAvatarPreview.style.setProperty("--avatar-skin", visual.skin);
  el.ownerAvatarPreview.style.setProperty("--avatar-hair", visual.hairColor);
  el.ownerAvatarPreview.style.setProperty("--avatar-shirt", visual.shirt);
  el.ownerAvatarPreview.style.setProperty("--avatar-accent", visual.accent);

  if (document.activeElement !== el.avatarNameInput) {
    el.avatarNameInput.value = visual.name;
  }
  el.avatarTitle.textContent = personality.label;
  el.avatarBonus.textContent = personality.bonus;
  el.avatarSkinSelect.value = state.avatar.skin;
  el.avatarHairSelect.value = state.avatar.hair;
  el.avatarOutfitSelect.value = state.avatar.outfit;
  el.avatarAccessorySelect.value = state.avatar.accessory;
  el.avatarPersonalitySelect.value = state.avatar.personality;
}

function avatarSignature() {
  return `${state.avatar.hair}|${state.avatar.outfit}|${state.avatar.accessory}|${state.avatar.personality}`;
}

function styleReaction(previousSignature) {
  const nextSignature = avatarSignature();
  if (!previousSignature || previousSignature === nextSignature) return;
  const outfit = optionFor("outfits", state.avatar.outfit);
  const accessory = optionFor("accessories", state.avatar.accessory);
  const personality = optionFor("personalities", state.avatar.personality);
  const lines = [
    `${state.avatar.name || "Boss"} stepped out in ${outfit.label}. The mascot called it a quarterly brand meeting with shoes.`,
    `New look registered: ${accessory.label}. Sav says the line is moving 2% faster from confidence alone.`,
    `${personality.label} energy activated. Uncle Darnell nodded, which is basically a standing ovation.`
  ];
  addLog("Fit Check", lines[Math.floor(Math.random() * lines.length)]);
}

function updateAvatarFromControls() {
  const previousSignature = avatarSignature();
  state.avatar.name = el.avatarNameInput.value.trim() || "Boss";
  state.avatar.skin = el.avatarSkinSelect.value;
  state.avatar.hair = el.avatarHairSelect.value;
  state.avatar.outfit = el.avatarOutfitSelect.value;
  state.avatar.accessory = el.avatarAccessorySelect.value;
  state.avatar.personality = el.avatarPersonalitySelect.value;
  styleReaction(previousSignature);
  renderAvatar();
  renderCloset();
  renderAnimatedLayer();
  saveState();
}

function randomOption(group) {
  const options = state.unlockedAvatar[group] ? unlockedAvatarOptions(group) : avatarOptions[group];
  return options[Math.floor(Math.random() * options.length)].key;
}

function randomizeAvatar() {
  const previousSignature = avatarSignature();
  const names = ["Boss", "Sunny", "Moxie", "Jules", "Ace", "Nia", "Kai", "Rio"];
  state.avatar.name = names[Math.floor(Math.random() * names.length)];
  state.avatar.skin = randomOption("skins");
  state.avatar.hair = randomOption("hair");
  state.avatar.outfit = randomOption("outfits");
  state.avatar.accessory = randomOption("accessories");
  state.avatar.personality = randomOption("personalities");
  styleReaction(previousSignature);
  renderAvatar();
  renderCloset();
  renderAnimatedLayer();
  saveState();
}

function renderCloset() {
  el.closetGrid.innerHTML = "";
  const unlockedCount = avatarRewardDefs.filter((reward) => isAvatarOptionUnlocked(reward.group, reward.key)).length;
  el.closetCount.textContent = `${unlockedCount}/${avatarRewardDefs.length} rewards`;

  avatarRewardDefs.forEach((reward) => {
    const unlocked = isAvatarOptionUnlocked(reward.group, reward.key);
    const item = document.createElement("div");
    item.className = `closet-item ${unlocked ? "unlocked" : "locked"}`;
    item.innerHTML = `
      <strong>${unlocked ? "Unlocked" : "Locked"}: ${reward.title}</strong>
      <span>${unlocked ? reward.line : reward.requirement}</span>
    `;
    el.closetGrid.appendChild(item);
  });
}

function renderSeedVault() {
  checkStrainUnlocks();
  syncInventoryTotals();
  const unlocked = strainDefs.filter((strain) => state.unlockedStrains.includes(strain.key));
  el.seedUnlockCount.textContent = `${unlocked.length}/${strainDefs.length} unlocked`;

  el.seedSelect.innerHTML = "";
  unlocked.forEach((strain) => {
    const option = document.createElement("option");
    option.value = strain.key;
    option.textContent = `${strain.name} (${strain.rarity})`;
    el.seedSelect.appendChild(option);
  });
  el.seedSelect.value = currentStrain().key;

  const selected = currentStrain();
  const raw = state.inventory.flowerByStrain[selected.key] || 0;
  const counter = state.inventory.counterByStrain[selected.key] || 0;
  el.seedSummary.innerHTML = `
    <div class="seed-color" style="--seed-color:${selected.color}"></div>
    <div>
      <strong>${selected.name}</strong>
      <span>${selected.type} - ${selected.rarity} - ${selected.flavor}</span>
      <small>Seed ${moneyText(seedCost(selected))} | Grow ${selected.grow >= 0 ? "+" : ""}${selected.grow} | Yield +${selected.yield} | Price +${selected.price} | Raw ${raw} | Counter ${counter}</small>
    </div>
  `;

  el.seedCollection.innerHTML = "";
  strainDefs.forEach((strain) => {
    const isUnlocked = state.unlockedStrains.includes(strain.key);
    const isSelected = strain.key === state.selectedStrain;
    const card = document.createElement("button");
    card.type = "button";
    card.className = `seed-card-item ${isUnlocked ? "unlocked" : "locked"} ${isSelected ? "selected" : ""}`;
    card.style.setProperty("--seed-color", strain.color);
    card.innerHTML = `
      <span class="seed-dot"></span>
      <strong>${strain.name}</strong>
      <small>${isUnlocked ? `${strain.type} - ${strain.rarity}` : strainUnlockLabel(strain)}</small>
    `;
    card.disabled = !isUnlocked;
    card.addEventListener("click", () => selectStrain(strain.key));
    el.seedCollection.appendChild(card);
  });
}

function selectStrain(key) {
  if (!state.unlockedStrains.includes(key)) return;
  state.selectedStrain = key;
  const strain = currentStrain();
  addLog("Seed Selected", `${strain.name} is now queued for new plantings.`);
  saveState();
  renderAll();
}

function showSeedInfo() {
  const strain = currentStrain();
  showDialogue({
    speaker: "Mascot",
    title: `${strain.name} Profile`,
    text: `${strain.name} is a ${strain.rarity} ${strain.type} seed with fictional game stats. It grows ${strain.grow >= 0 ? "faster" : "slower"} by ${Math.abs(strain.grow)}, yields +${strain.yield}, improves sale price by +${strain.price}, Vibe by +${strain.vibe}, and Munchies by +${strain.munchies}. Public strain names inspired the vault, but the stats are built for The Haven Co gameplay.`,
    primary: "Got It"
  });
}

function renderCrew() {
  el.crewGrid.innerHTML = "";
  const total = Object.values(state.staff).reduce((sum, value) => sum + value, 0);
  el.crewCount.textContent = `${total} hired`;
  crewDefs.forEach((crew) => {
    const unlocked = crew.unlock === "always" || state.upgrades[crew.unlock] > 0;
    const card = document.createElement("div");
    card.className = "crew-card";
    card.innerHTML = `
      <strong>${crew.label} x${state.staff[crew.key]}</strong>
      <span>${unlocked ? crew.trait : "Unlock later"}</span>
    `;
    el.crewGrid.appendChild(card);
  });
}

function renderStoryLog() {
  el.storyLog.innerHTML = "";
  state.storyLog.forEach((entry) => {
    const log = document.createElement("p");
    log.className = "log-entry";
    log.innerHTML = `<strong>${entry.title}:</strong> ${entry.text}`;
    el.storyLog.appendChild(log);
  });
}

function renderAnimatedLayer() {
  el.animatedLayer.innerHTML = "";
  const owner = avatarVisualData();
  addPerson({
    className: "owner",
    x: 73,
    y: 34,
    skin: owner.skin,
    shirt: owner.shirt,
    hairColor: owner.hairColor,
    hairClass: owner.hairClass,
    accessory: owner.accessory,
    accessoryColor: owner.accent
  });

  if (state.staff.grower > 0) {
    addPerson({ className: "staff", x: 26, y: 30, skin: "#b87355", shirt: "#4fd59b" });
  }
  if (state.staff.cashier > 0) {
    addPerson({ className: "staff", x: 62, y: 18, skin: "#c98c68", shirt: "#3dc9d4" });
  }
  if (state.staff.host > 0) {
    addPerson({ className: "staff", x: 68, y: 44, skin: "#f0bf8f", shirt: "#ff5e93" });
  }
  if (state.staff.snackWorker > 0) {
    addPerson({ className: "staff", x: 87, y: 18, skin: "#9e604b", shirt: "#f5b84b" });
  }
  if (state.staff.security > 0) {
    addPerson({ className: "security", x: 62, y: 80, skin: "#9b684e", shirt: "#26324d" });
  }

  state.customers.forEach((customer) => {
    addPerson(customer);
  });
}

function addPerson(data) {
  const person = document.createElement("span");
  person.className = `person ${data.className || ""}`;
  person.style.left = `${data.x}%`;
  person.style.top = `${data.y}%`;
  person.style.setProperty("--skin", data.skin || "#d99d74");
  person.style.setProperty("--shirt", data.shirt || "#3dc9d4");
  person.style.setProperty("--hair", data.hairColor || "#243042");
  person.style.setProperty("--accessory", data.accessoryColor || "#3dc9d4");
  if (data.hairClass) {
    const hair = document.createElement("span");
    hair.className = `person-hair ${data.hairClass}`;
    person.appendChild(hair);
  }
  if (data.accessory && data.accessory !== "none") {
    const accessory = document.createElement("span");
    accessory.className = `person-accessory ${data.accessory}`;
    person.appendChild(accessory);
  }
  if (data.className && data.className.includes("spy")) {
    const spyGlasses = document.createElement("span");
    spyGlasses.className = "person-accessory";
    person.appendChild(spyGlasses);
  }
  el.animatedLayer.appendChild(person);
}

function renderHud() {
  syncInventoryTotals();
  el.money.textContent = moneyText(state.money);
  el.cashRate.textContent = `${moneyText(calculateCashRate())}/s`;
  el.level.textContent = state.level;
  el.rep.textContent = Math.floor(state.reputation);
  el.heat.textContent = percentText(state.heat);
  const status = legalStatus();
  const statusLabel = status === "green" ? "Green" : status === "caution" ? "Caution" : status === "spy" ? "Spy Watch" : "Warning";
  el.legalLight.textContent = `Legal: ${statusLabel}`;
  el.legalLight.className = `legal-light ${status === "green" ? "" : status}`;
  el.heat.parentElement.className = `hud-chip heat-chip ${status === "green" ? "" : status}`;
  el.vibeText.textContent = percentText(state.vibe);
  el.vibeBar.style.width = `${clamp(state.vibe, 0, 100)}%`;
  el.munchiesText.textContent = percentText(state.munchies);
  el.munchiesBar.style.width = `${clamp(state.munchies, 0, 100)}%`;
  el.favorText.textContent = percentText(state.favor);
  el.favorBar.style.width = `${clamp(state.favor, 0, 100)}%`;
  el.stockBadge.textContent = `Stock ${state.inventory.shelfStock} - ${counterStockSummary()}`;
  const growLevel = Math.floor((state.upgrades.growLights + state.upgrades.plantRows) / 2);
  const storeLevel = Math.floor((state.upgrades.counter + state.upgrades.lounge + state.upgrades.snackBar + state.upgrades.stage + state.upgrades.security) / 5);
  el.growRoomLevel.textContent = `Warehouse Lv. ${Math.max(1, growLevel)}`;
  el.storeRoomLevel.textContent = `Block Lv. ${Math.max(1, storeLevel + 1)}`;

  if (state.activeEventSeconds > 0) {
    el.sceneMood.textContent = `Event live: ${Math.ceil(state.activeEventSeconds)}s`;
  } else if (state.heat > 70) {
    el.sceneMood.textContent = "Heat is getting loud";
  } else if (state.vibe > 70) {
    el.sceneMood.textContent = "The room is buzzing";
  } else {
    el.sceneMood.textContent = "Opening night energy";
  }

  el.harvestButton.disabled = !state.plants.some((plant) => plant.ready);
  el.plantButton.textContent = `Plant ${currentStrain().name}`;
  el.plantButton.title = `Seed cost ${moneyText(seedCost())} each.`;
  el.stockButton.disabled = state.inventory.rawFlower <= 0;
  el.stockButton.textContent = state.inventory.rawFlower > 0 ? `Stock Counter ${state.inventory.rawFlower}` : "Stock Counter";
  el.stockButton.title = state.inventory.rawFlower > 0 ? "Move harvested flower into counter stock." : "Harvest plants before stocking the counter.";
  if (state.upgrades.snackBar < 1) {
    el.snackButton.textContent = "Unlock Snacks";
    el.snackButton.disabled = false;
    el.snackButton.title = "Unlock Snack Bar Level 1 from the Upgrade Board.";
  } else if (state.inventory.snacks <= 0) {
    el.snackButton.textContent = `Restock ${moneyText(snackRestockCost())}`;
    el.snackButton.disabled = state.money < snackRestockCost();
    el.snackButton.title = "Buy a snack delivery for the bar.";
  } else {
    el.snackButton.textContent = `Snack Rush ${state.inventory.snacks}`;
    el.snackButton.disabled = false;
    el.snackButton.title = "Serve snack customers and push Chapter 3 forward.";
  }
  el.eventButton.disabled = state.upgrades.stage < 1 || state.money < 42;
  const hireCost = 90 + Object.values(state.staff).reduce((sum, value) => sum + value, 0) * 68;
  el.hireButton.textContent = `Hire Staff ${moneyText(hireCost)}`;
  el.hireButton.disabled = state.money < hireCost;
  updateTownActionButton();
}

function renderAll() {
  checkAvatarUnlocks();
  checkStrainUnlocks();
  syncInventoryTotals();
  populateAvatarControls();
  renderHud();
  renderAvatar();
  renderCloset();
  renderSeedVault();
  renderRoomExpansion();
  renderTownMap();
  renderPlants();
  renderUpgrades();
  renderRoomDetails();
  renderCastBoard();
  renderQuest();
  renderTutorial();
  renderCrew();
  renderStoryLog();
  renderAnimatedLayer();
}

function popMoney(amount, x, y) {
  const pop = document.createElement("span");
  pop.className = "money-pop";
  pop.textContent = `+${moneyText(amount)}`;
  pop.style.left = `${x}%`;
  pop.style.top = `${y}%`;
  el.floatingLayer.appendChild(pop);
  setTimeout(() => pop.remove(), 1100);
}

function popSpark(x, y) {
  const spark = document.createElement("span");
  spark.className = "spark-pop";
  spark.style.left = `${x}%`;
  spark.style.top = `${y}%`;
  el.floatingLayer.appendChild(spark);
  setTimeout(() => spark.remove(), 800);
}

function showDialogue({ speaker, title, text, primary = "Continue", secondary = "Close", action = null }) {
  el.modalSpeaker.textContent = speaker;
  el.modalTitle.textContent = title;
  el.modalText.textContent = text;
  el.modalPrimary.textContent = primary;
  el.modalSecondary.textContent = secondary;
  currentModalAction = action;
  el.modalBackdrop.classList.add("visible");
  el.modalBackdrop.setAttribute("aria-hidden", "false");
}

function closeDialogue(runAction = false) {
  el.modalBackdrop.classList.remove("visible");
  el.modalBackdrop.setAttribute("aria-hidden", "true");
  if (runAction && typeof currentModalAction === "function") currentModalAction();
  currentModalAction = null;
}

function showStoryBrief() {
  const quest = displayedQuest();
  if (quest.isGateQuest) {
    showCutscene(cutsceneForGate(quest, "start"));
    return;
  }
  showCutscene(cutsceneForStory(quest, "start"));
}

function tutorialSteps() {
  return [
    { label: "Plant", done: state.metrics.planted >= 3 },
    { label: "Harvest", done: state.metrics.harvested >= 1 },
    { label: "Stock", done: state.metrics.stocked >= 2 },
    { label: "Serve", done: state.metrics.served >= 3 },
    { label: "Upgrade", done: state.upgrades.lounge >= 1 || state.storyQuestIndex > 1 }
  ];
}

function currentTutorialTip() {
  const quest = displayedQuest();
  if (state.metrics.planted < 3) {
    return {
      title: "Start the grow loop",
      text: "Pick a seed in the Seed Vault, then press Plant Seeds until the starter pots are full. Plants grow over time and glow when ready."
    };
  }
  if (state.metrics.harvested < 1) {
    return {
      title: "Watch for ready plants",
      text: "When a plant slot glows, press Harvest Ready or tap the plant to move product into processing."
    };
  }
  if (state.inventory.rawFlower > 0 || state.metrics.stocked < 2) {
    return {
      title: "Stock the counter",
      text: "Press Stock Counter after a harvest. The counter now keeps a strain mix, and customers buy from that stock."
    };
  }
  if (state.metrics.served < 3) {
    return {
      title: "Let customers buy",
      text: "Keep shelves stocked and customers will buy at the counter automatically as they walk in."
    };
  }
  if (quest.id === "build_the_vibe" && state.upgrades.lounge < 1) {
    return {
      title: "Unlock the lounge",
      text: "Use the Upgrade Board to buy Lounge Seating Level 1, then serve customers to raise Vibe."
    };
  }
  if (quest.id === "munchies_make_money" && state.upgrades.snackBar < 1) {
    return {
      title: "Open the snack bar",
      text: "Buy Snack Bar Level 1 on the Upgrade Board. The Snack Rush button turns this chapter into active play."
    };
  }
  if (quest.id === "munchies_make_money") {
    return {
      title: "Run Snack Rush",
      text: "Press Snack Rush to pull customers to the snack bar. If snacks run out, the same button restocks them."
    };
  }
  if (quest.id === "the_stage_is_set" && state.upgrades.stage < 1) {
    return {
      title: "Build the stage",
      text: "Buy Stage Gear Level 1, then use Run Event to bring in a bigger entertainment crowd."
    };
  }
  if (quest.id === "heat_on_the_block" && state.upgrades.security < 1) {
    return {
      title: "Open security",
      text: "Finish The Stage Is Set to unlock the Security Desk, then keep Heat low and customers orderly."
    };
  }
  if (quest.isGateQuest) {
    return {
      title: "Finish the story gate",
      text: "Complete the listed objectives, use Find Piece when needed, then install the upgrade."
    };
  }
  return {
    title: "Use the town map",
    text: "Click town lots or use the Town Map panel to tend rows, promote the Haven Bar, build favor, lower heat, and keep supplies moving."
  };
}

function renderTutorial() {
  const tip = currentTutorialTip();
  el.tutorialTitle.textContent = tip.title;
  el.tutorialText.textContent = tip.text;
  el.tutorialSteps.innerHTML = "";
  tutorialSteps().forEach((step) => {
    const item = document.createElement("span");
    item.className = step.done ? "done" : "";
    item.textContent = step.label;
    el.tutorialSteps.appendChild(item);
  });
}

function showTutorialIntro() {
  const shouldShowOpening = state.storyQuestIndex === 0 && !state.completedStory.grand_opening && state.metrics.planted === 0;
  showDialogue({
    speaker: "Mascot",
    title: "How The Haven Starts",
    text: "Start simple: choose a seed in the Seed Vault, Plant Seeds, wait for the timers, Harvest Ready, Stock Counter, then customers buy from the bar automatically. After that, use the Town Map, upgrades, Snack Rush, stage events, staff, security, and more seeds. Every fifth upgrade brings in a new character quest.",
    primary: "Got It",
    action: () => {
      state.tutorialSeen = true;
      saveState();
      renderTutorial();
      if (shouldShowOpening) {
        setTimeout(() => showCutscene(cutsceneForStory(displayedQuest(), "start")), 180);
      }
    }
  });
}

function bindEvents() {
  el.plantButton.addEventListener("click", plantSeeds);
  el.harvestButton.addEventListener("click", harvestReady);
  el.stockButton.addEventListener("click", stockShelves);
  el.snackButton.addEventListener("click", runSnackRush);
  el.eventButton.addEventListener("click", runEvent);
  el.hireButton.addEventListener("click", hireStaff);
  el.storyButton.addEventListener("click", showStoryBrief);
  el.tutorialButton.addEventListener("click", showTutorialIntro);
  el.seedSelect.addEventListener("change", () => selectStrain(el.seedSelect.value));
  el.seedInfoButton.addEventListener("click", showSeedInfo);
  el.avatarNameInput.addEventListener("input", updateAvatarFromControls);
  el.avatarSkinSelect.addEventListener("change", updateAvatarFromControls);
  el.avatarHairSelect.addEventListener("change", updateAvatarFromControls);
  el.avatarOutfitSelect.addEventListener("change", updateAvatarFromControls);
  el.avatarAccessorySelect.addEventListener("change", updateAvatarFromControls);
  el.avatarPersonalitySelect.addEventListener("change", updateAvatarFromControls);
  el.avatarRandomButton.addEventListener("click", randomizeAvatar);
  el.townPrimaryButton.addEventListener("click", runTownAction);
  el.townSceneButton.addEventListener("click", showTownDistrictScene);
  document.querySelectorAll("[data-district]").forEach((lot) => {
    lot.addEventListener("click", () => selectTownDistrict(lot.dataset.district));
    lot.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectTownDistrict(lot.dataset.district);
    });
  });
  el.castSceneButton.addEventListener("click", showCastIntroScene);
  el.modalPrimary.addEventListener("click", () => closeDialogue(true));
  el.modalSecondary.addEventListener("click", () => closeDialogue(false));
  el.modalBackdrop.addEventListener("click", (event) => {
    if (event.target === el.modalBackdrop) closeDialogue(false);
  });
  el.cutsceneNext.addEventListener("click", advanceCutscene);
  el.cutsceneSkip.addEventListener("click", () => closeCutscene(false));
  el.cutsceneBackdrop.addEventListener("click", (event) => {
    if (event.target === el.cutsceneBackdrop) closeCutscene(false);
  });
}

function gameLoop(now) {
  const dt = Math.min(0.2, (now - lastTick) / 1000);
  lastTick = now;
  tickWorld(dt);
  renderHud();
  renderPlants();
  renderQuest();
  renderTutorial();
  renderAnimatedLayer();
  requestAnimationFrame(gameLoop);
}

function init() {
  syncInventoryTotals();
  checkStrainUnlocks();
  ensurePlantSlots();
  if (repairStoryFeatureUnlocks()) saveState();
  populateAvatarControls();
  bindEvents();
  renderAll();
  currentStoryQuest();
  if (!state.tutorialSeen) {
    setTimeout(showTutorialIntro, 320);
  }
  requestAnimationFrame(gameLoop);
}

init();
