// Voidlight: Chronicles of the Stellar Veil - Complete Wiki & Character Creator
// Application Data and State Management

const VoidlightData = {
  overview: {
    title: "Voidlight: Chronicles of the Stellar Veil",
    description: "In the post-Silence galaxy, humanity struggles to rebuild civilization among shattered star systems. This comprehensive wiki contains all the rules, lore, and mechanics needed to play Voidlight - a game where Hope and Fear shape reality itself.",
    keyFeatures: [
      "Narrative-first mechanics with Hope and Fear dynamics",
      "Rich post-apocalyptic sci-fi setting",
      "Comprehensive character customization",
      "Political intrigue between Great Houses",
      "Advanced technology and equipment systems"
    ]
  },
  
  coreMechanics: {
    title: "Dancing Between Hope and Fear",
    dualityDice: "Roll 2d12 - one Hope (bright color), one Fear (dark color). Add together plus modifiers vs Difficulty.",
    outcomes: [
      {type: "Hope Higher", result: "Gain Hope token, even failures have silver linings"},
      {type: "Fear Higher", result: "GM gains Fear token, even successes have complications"},
      {type: "Critical Success", result: "Both dice same number - automatic success, gain Hope, clear Stress"}
    ],
    difficulties: [
      {level: 5, description: "Very Easy - You can do it with your eyes closed"},
      {level: 10, description: "Risky - You might fail, but it's doable"},
      {level: 15, description: "Challenging - Requires skill and luck"},
      {level: 20, description: "Heroic - Deeds worthy of legends"},
      {level: 25, description: "Mythic - Feats of cosmic significance"},
      {level: 30, description: "Nearly Impossible - Divine intervention required"}
    ],
    resources: [
      {name: "Hope", max: 6, use: "Help allies, activate Experiences, power special abilities"},
      {name: "Stress", max: 6, effect: "Psychological strain, when full you're overwhelmed"},
      {name: "Hit Points", varies: "3-7", meaning: "Physical trauma, precious and hard to restore"},
      {name: "Armor Slots", varies: "Equipment protection that degrades with use"}
    ]
  },
  
  ancestries: [
    {name: "Humans", description: "The adaptable survivors, scattered and diversified across the galaxy", gifts: ["Adaptive Spirit", "Cultural Bridge"], archetypes: ["Explorer", "Diplomat", "Mercenary"]},
    {name: "Zephyrians", description: "Stardust dancers, psychically sensitive and empathic beings", gifts: ["Veil Sensitivity", "Emotional Resonance"], archetypes: ["Mystic", "Artist", "Counselor"]},
    {name: "Kryllians", description: "The unbreakable forge, four-armed natural engineers", gifts: ["Master Craftsman", "Structural Intuition"], archetypes: ["Engineer", "Soldier", "Architect"]},
    {name: "Ethereals", description: "Ghosts in the machine, energy beings with temporal perception", gifts: ["Phase Shift", "Temporal Perception"], archetypes: ["Spy", "Oracle", "Assassin"]},
    {name: "Synthetics", description: "Liberated minds, self-aware AIs seeking purpose", gifts: ["Modular Consciousness", "Digital Interface"], archetypes: ["Hacker", "Scholar", "Infiltrator"]},
    {name: "Rift Spinners", description: "Time weavers, arachnids who manipulate causality", gifts: ["Chrono-Gift", "Wall Weaver"], archetypes: ["Controller", "Tactician", "Prophet"]},
    {name: "Celestari", description: "Descendants of stars, radiant beings with cosmic grace", gifts: ["Stellar Meditation", "Celestial Grace"], archetypes: ["Leader", "Guardian", "Philosopher"]},
    {name: "Kryx", description: "Voices of the hunt, powerful and honor-based pack culture", gifts: ["Pack Intuition", "Biolume Howl"], archetypes: ["Leader", "Soldier", "Mercenary", "Explorer"]}
  ],
  
  communities: [
    {name: "Core World", description: "Glittering spires and social labyrinths - vast data-nets, towering arcologies, complex hierarchies", benefit: "Institutional Leverage"},
    {name: "Frontier Colony", description: "Grit, rust, and shared hardship - practical ingenuity in harsh conditions", benefit: "Scrap-Savvy Ingenuity"},
    {name: "Void Station", description: "Pressurized cans in the dark - recycled air with dozens of species", benefit: "Cross-Species Intuition"},
    {name: "Trade Hub", description: "Chaotic symphony of commerce - spice, ozone, and desperation", benefit: "Market Oracle"},
    {name: "Research Outpost", description: "Labs humming over silent ruins - pursuit of knowledge", benefit: "Scientific Resonance"},
    {name: "Free Fleet", description: "Home is the next jump - stellar navigation in your bones", benefit: "Voidborn Kinship"}
  ],
  
  classes: [
    {name: "Soldier", description: "Hardened combatants who master weapons and tactics", domains: ["Kinetic", "Synthesis"], startingHP: 7, startingEvasion: 9, subclasses: ["Guardian", "Military Officer", "Peacekeeper"]},
    {name: "Engineer", description: "Technical geniuses who build, repair and hack anything", domains: ["Tech", "Synthesis"], startingHP: 7, startingEvasion: 9, subclasses: ["Tech Specialist", "Xenotech Savant", "Medical Technician"]},
    {name: "Pilot", description: "Navigation aces who dance starships through Veil storms", domains: ["Void", "Tech"], startingHP: 6, startingEvasion: 11, subclasses: ["Void Runner", "Combat Ace", "System Jockey"]},
    {name: "Scoundrel", description: "Ghosts of the underbelly: masters of stealth and subterfuge", domains: ["Void", "Social"], startingHP: 6, startingEvasion: 12, subclasses: ["Assassin", "Ghost", "Data Broker"]},
    {name: "Mystic", description: "Veil-touched beings bending reality with psionic force", domains: ["Neural", "Social"], startingHP: 6, startingEvasion: 10, subclasses: ["Veil Walker", "Mind-Touched", "Precursor Touched"]},
    {name: "Scholar", description: "Guardians of knowledge who unravel ancient secrets", domains: ["Tech", "Social"], startingHP: 5, startingEvasion: 10, subclasses: ["Xenobiologist", "Precursor Archaeologist", "Information Theorist"]},
    {name: "Diplomat", description: "Peace weavers whose words can sway fleets", domains: ["Social", "Synthesis"], startingHP: 6, startingEvasion: 10, subclasses: ["Cultural Attaché", "Trade Negotiator", "Political Operative"]}
  ],
  
  domainPowers: {
    Tech: [
      {name: "System Jackknife", level: 1, type: "Ability", cost: 0, description: "Spend a Hope and choose one electronic system within Very Close range. Make a Knowledge roll against complexity: Simple (10), Complex (13), Military (16). Control system for 10 minutes. Success with Hope: reprogram for simple commands."},
      {name: "Drone Whisper", level: 1, type: "Ability", cost: 0, description: "Spend a Hope, choose mechanical unit within Close range. Spellcast Roll vs programming: Civilian (12), Military (15), AI (18). Control unit for 1 hour. Failure alerts owner."},
      {name: "Quantum Firewall", level: 1, type: "Ability", cost: 1, description: "Spend a Hope, touch device/network. System becomes unhackable for 8 hours except by you. Intrusion attempts fail and alert you."}
    ],
    Synthesis: [
      {name: "Biological Scan", level: 1, type: "Ability", cost: 0, description: "Spend Hope, touch living creature. Learn: current/max HP, condition, health status. Knowledge roll (12): diseases, toxins, cybernetics."},
      {name: "Environmental Adaptation", level: 1, type: "Ability", cost: 0, description: "Spend Hope. Adapt to hostile environment for 1 hour: vacuum, extreme temperature, toxic atmosphere, radiation, underwater. Breathe/comfort/resist environmental damage."},
      {name: "Rapid Regeneration", level: 1, type: "Ability", cost: 1, description: "Spend Hope when you/ally within Very Close takes damage. Target heals 1d4+2 HP immediately. Once per target per scene."}
    ],
    Social: [
      {name: "Perfect Facade", level: 1, type: "Ability", cost: 0, description: "Spend Hope. Perfect disguise for 1 hour matching any observed person (10+ minutes observation). Advantage on Presence rolls to maintain deception."},
      {name: "Silver Tongue", level: 1, type: "Ability", cost: 0, description: "Spend Hope when making Presence roll to persuade/deceive/convince. Add Spellcast modifier, treat 11- as 12."},
      {name: "Linguistic Patch", level: 1, type: "Ability", cost: 1, description: "Spend Hope. Instantly understand and speak any language for 1 hour. Includes written text, cultural idioms, non-verbal communication."}
    ],
    Neural: [
      {name: "Veil Sensitivity", level: 1, type: "Ability", cost: 0, description: "Spend Hope. For 10 minutes, sense emotions and surface thoughts of creatures within Close range. Detect lies and hostile intent through Veil distortions."},
      {name: "Mind Shield", level: 1, type: "Ability", cost: 0, description: "Reaction: When targeted by mental effect or taking psychic damage, mark Stress to reduce damage by 1d6 and gain advantage on any reaction roll against the effect."},
      {name: "Telekinetic Grasp", level: 1, type: "Spell", cost: 1, description: "Spellcast Roll (11). Move object within Far range weighing up to 50 pounds. Manipulate with hand precision for 1 minute."}
    ],
    Kinetic: [
      {name: "Tactical Overwatch", level: 1, type: "Ability", cost: 0, description: "When ally within Close range moves or takes action, spend Hope. They gain advantage on next roll and +2 Armor until start of your next turn."},
      {name: "Kinetic Strike", level: 1, type: "Ability", cost: 0, description: "When making melee attack, spend Hope. Attack deals +1d4 damage and gains Energy tag."},
      {name: "Force Shield", level: 1, type: "Ability", cost: 1, description: "Spend Hope when you/ally within Very Close targeted by attack. Create kinetic barrier providing +3 AC against that attack."}
    ],
    Void: [
      {name: "Zero-G Drift", level: 1, type: "Ability", cost: 0, description: "Spend Hope. Choose Vehicle Mode (spacecraft ignores gravity, maneuvers any direction, advantage on piloting/stealth for 1 hour) or Personal Mode (ignore gravity/vacuum for 1 hour)."},
      {name: "Void Cloak", level: 1, type: "Ability", cost: 0, description: "Spend Hope. Choose Vehicle Mode (bend space around spacecraft, nearly invisible 10 minutes) or Personal Mode (nearly invisible 10 minutes)."},
      {name: "Vector Calculus", level: 1, type: "Ability", cost: 1, description: "Spend Hope when making Agility roll (Personal Mode) or piloting roll (Vehicle Mode). Add Spellcast modifier to roll and treat 10 or lower as 11."}
    ]
  },
  
  wealthTiers: [
    {tier: 0, name: "The Forgotten", lifestyle: "Sleeping rough, scavenged food", allowance: "None", assets: "Nothing", advancement: "10 credits + employment"},
    {tier: 1, name: "The Established", lifestyle: "Crew quarters, mess hall meals", allowance: "Basic supplies", assets: "1 credit monthly", advancement: "25 credits + skills"},
    {tier: 2, name: "The Prosperous", lifestyle: "Private quarters, good food", allowance: "Quality supplies", assets: "1-2 credits monthly", advancement: "75 credits + assets"},
    {tier: 3, name: "The Affluent", lifestyle: "Suite quarters, fine dining", allowance: "Premium supplies", assets: "1-3 credits monthly", advancement: "200 credits + power"},
    {tier: 4, name: "The Powerful", lifestyle: "Luxury accommodations", allowance: "Military-grade unlimited", assets: "1-4 credits monthly", advancement: "Narrative only"},
    {tier: 5, name: "The Transcendent", lifestyle: "Palatial estates", allowance: "Unlimited consumables", assets: "Any item monthly", advancement: "World-changing events"}
  ],
  
  reputation: {
    title: "Your Standing in the Cosmic Dance",
    description: "Reputation determines what doors open, which factions trust you, and how the galaxy responds to your actions.",
    levels: [
      {level: 0, name: "Unknown", description: "A ghost in the crowd - no one knows or cares about you"},
      {level: 1, name: "Recognized", description: "They've heard of you - basic courtesy and faster responses"},
      {level: 2, name: "Respected", description: "You've proven useful - doors crack open, modest perks"},
      {level: 3, name: "Trusted", description: "You're reliable - real perks, access to restricted resources"},
      {level: 4, name: "Honored", description: "You're valued - high officials take calls, deep intel access"},
      {level: 5, name: "Revered", description: "You're practically family - massive resources, command authority"},
      {level: 6, name: "Legendary", description: "You're myth walking - unlimited resources, historical impact"}
    ]
  },
  
  equipment: {
    weapons: [
      {name: "Combat Knife", damage: "d6 physical", slots: 1, tier: 1, features: "Paired"},
      {name: "Slug Pistol", damage: "d8+1 physical", slots: 1, tier: 1, features: "Reliable"},
      {name: "Plasma Pistol", damage: "d8 magic", slots: 2, tier: 2, features: "Overheating"},
      {name: "Assault Rifle", damage: "d8+1 physical", slots: 2, tier: 2, features: "Automatic"},
      {name: "Vibro-Sword", damage: "d8+3 physical", slots: 2, tier: 2, features: "Vibration"}
    ],
    armor: [
      {name: "Environmental Suit", protection: "3 slots", slots: 1, tier: 1, features: "Life Support, Flexible"},
      {name: "Combat Armor", protection: "3 slots", slots: 1, tier: 2, features: "Resilient"},
      {name: "Stealth Armor", protection: "4 slots", slots: 2, tier: 2, features: "Flexible, Cloaking"},
      {name: "Power Armor", protection: "8 slots", slots: 2, tier: 3, features: "Very Heavy, Powered"}
    ]
  },
  
  greatHouses: [
    {name: "House Valerius", motto: "Prosperity Through Unity", philosophy: "Commerce and trade are the foundations of civilization", aesthetic: "Opulent wealth with practical purpose - silk suits, crystal waterfalls", leadership: ["Patriarch Gaius Valerius", "Lady Octavia Valerius (Heir)", "Marcus Valerius the Younger"], secrets: "Funds the Free Trade Coalition rebellion to overthrow Imperial oversight", benefits: "Market access, trade discounts, credit lines, commercial intelligence"},
    {name: "House Kurogane", motto: "Through Fire and Steel", philosophy: "Evolution through technological integration and human enhancement", aesthetic: "Brutalist elegance - polished durasteel, carbon fiber gowns", leadership: ["Patriarch Hiroshi Kurogane", "Lady Akira Kurogane (CTO)", "Dr. Yuki Kurogane"], secrets: "Secret immortality research trying to unlock the Emperor's longevity", benefits: "Advanced technology, augmentation systems, prototype equipment"},
    {name: "House Amaranth", motto: "Wisdom Illuminates the Path", philosophy: "Knowledge and history hold the keys to understanding the future", aesthetic: "Timeworn grandeur - ancient leather tomes, silent archives", leadership: ["Patriarch Cornelius Amaranth", "Lady Minerva Amaranth", "Professor Aurelius Amaranth"], secrets: "Possess Oracle Stone showing apocalyptic visions of galactic convergence", benefits: "Archive access, cultural knowledge, ancient artifacts, prophecies"},
    {name: "House Joric", motto: "Honor Through Strength", philosophy: "Military discipline and martial prowess protect civilization", aesthetic: "Fortress functionality - steel and stone, banners and weapons", leadership: ["Marshal Cassius Joric", "General Helena Joric", "Captain Marcus Joric"], secrets: "Intelligence network knows all other Houses' treacherous activities", benefits: "Military equipment, tactical training, security forces, fortress access"},
    {name: "House Solara", motto: "Beauty Transcends All", philosophy: "Art, culture and elegance elevate civilization above mere survival", aesthetic: "Refined luxury - marble halls, golden accents, perfect symmetry", leadership: ["Duke Alessandro Solara", "Duchess Valentina Solara", "Master Lorenzo Solara"], secrets: "Question whether the Emperor should be replaced with constitutional rule", benefits: "Cultural access, artistic commissions, social connections, luxury goods"},
    {name: "House Volkov", motto: "Strength in the Void", philosophy: "Survival requires constant vigilance against threats from beyond", aesthetic: "Frontier pragmatism - worn leather, practical weapons, battle scars", leadership: ["Khan Dmitri Volkov", "Warlord Natasha Volkov", "Scout-Captain Alexei Volkov"], secrets: "Have detected signs of approaching cosmic threats from deep space", benefits: "Military might, frontier knowledge, survival skills, territory control"}
  ],
  
  worldBuilding: {
    title: "The Shattered Galaxy",
    greatSilence: {
      when: "103 years ago at 14:27 GST",
      what: "The Quantum Entanglement Network collapsed, severing instantaneous galactic communication",
      effects: ["Complete communication blackout across the galaxy", "Economic collapse as trade networks failed", "Political fragmentation as central authority crumbled", "Technology became unreliable and unpredictable", "Emergence of psionic abilities in small population"],
      aftermath: "Century of rebuilding, adaptation, and the rise of new powers"
    },
    stellarVeil: {
      description: "The chaotic quantum field that enables FTL travel but defies prediction",
      phenomena: ["Veil Storms - raging tempests of distorted reality", "Temporal Eddies - regions where time flows backward or forward", "Ghost Ships - vessels crewed by quantum echoes", "Reality Fluctuations - where physics becomes optional"],
      navigation: "Requires intuition, luck, and sometimes psionic guidance"
    },
    factions: [
      {name: "The Starborn Collective", type: "Psionic refugees seeking sanctuary", goal: "Find acceptance and safety for Veil-touched individuals"},
      {name: "The Iron Covenant", type: "Anti-psionic military order", goal: "Eliminate all psionic life as a threat to galactic purity"},
      {name: "Stellar Commerce Guild", type: "Independent traders and merchants", goal: "Free trade without Great House monopolies"},
      {name: "Church of the Eternal Veil", type: "Religious organization", goal: "Spiritual guidance and understanding of cosmic forces"}
    ]
  }
};

// Application State
let currentCharacter = {
  name: "",
  ancestry: null,
  community: null,
  class: null,
  subclass: null,
  traits: {},
  experiences: [],
  domainPowers: [],
  wealth: 1,
  reputation: 0,
  equipment: []
};

let currentStep = 1;
let savedCharacters = [];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Voidlight application...');
  initializeApp();
});

function initializeApp() {
  try {
    setupTabNavigation();
    setupMobileNavigation();
    setupWikiNavigation();
    renderWikiContent();
    setupCharacterCreator();
    setupCharacterManager();
  // setupAdminPanel();
    loadSavedCharacters();
    
    console.log('Voidlight Wiki & Character Creator initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

// Tab Navigation - Fixed
function setupTabNavigation() {
  const tabButtons = document.querySelectorAll('.tab-btn, .tab-btn-mobile');
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const tabName = this.getAttribute('data-tab');
      console.log('Switching to tab:', tabName);
      switchTab(tabName);
      
      // Close mobile nav if open
      const mobileNav = document.getElementById('mobileNav');
      const hamburger = document.getElementById('hamburger');
      if (mobileNav && hamburger) {
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });
}

function switchTab(tabName) {
  console.log('Switching tab to:', tabName);
  
  // Update button states
  document.querySelectorAll('.tab-btn, .tab-btn-mobile').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === tabName) {
      btn.classList.add('active');
    }
  });
  
  // Update content - Hide all tabs first
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
    content.style.display = 'none';
  });
  
  // Show selected tab
  const targetTab = document.getElementById(tabName);
  if (targetTab) {
    targetTab.classList.add('active');
    targetTab.style.display = 'block';
    console.log('Tab switched successfully to:', tabName);
  } else {
    console.error('Tab not found:', tabName);
  }
}

// Mobile Navigation - Fixed
function setupMobileNavigation() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      console.log('Mobile nav toggled');
    });
    
    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
      }
    });
  }
}

// Wiki Navigation - Fixed
function setupWikiNavigation() {
  const wikiButtons = document.querySelectorAll('.wiki-nav-btn');
  
  wikiButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionName = this.getAttribute('data-section');
      console.log('Switching to wiki section:', sectionName);
      switchWikiSection(sectionName);
    });
  });
}

function switchWikiSection(sectionName) {
  console.log('Switching wiki section to:', sectionName);
  
  // Update button states
  document.querySelectorAll('.wiki-nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-section') === sectionName) {
      btn.classList.add('active');
    }
  });
  
  // Update content - Hide all sections first
  document.querySelectorAll('.wiki-section').forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });
  
  // Show selected section
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add('active');
    targetSection.style.display = 'block';
    console.log('Wiki section switched successfully to:', sectionName);
  } else {
    console.error('Wiki section not found:', sectionName);
  }
}

// Render Wiki Content
function renderWikiContent() {
  try {
    renderClasses();
    renderDomains();
    renderWealth();
    renderReputation();
    renderEquipment();
    renderGreatHouses();
    renderWorldBuilding();
    renderCoreRules();
    renderAncestries();
    console.log('Wiki content rendered successfully');
  } catch (error) {
    console.error('Error rendering wiki content:', error);
  }
}

function renderAncestries() {
  const container = document.getElementById('ancestriesContent');
  if (!container) return;
  
  let html = '<div class="ancestries-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; justify-items: center; align-items: stretch; width: 100%;">';

  VoidlightData.ancestries.forEach(ancestry => {
    // Create a sanitized name for image filenames
    const ancestryName = ancestry.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    html += `
      <div class="card" style="box-sizing: border-box; background: #fff; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.08); overflow: hidden; display: flex; flex-direction: column; min-width: 0; max-width: 1035px; width: 100%;">
        <div class="card-header" style="padding: 1.5rem; background: rgba(212, 175, 55, 0.1); border-bottom: 1px solid rgba(212, 175, 55, 0.2);">
          <h3 style="margin: 0; color: var(--gold-dark);">${ancestry.name}</h3>
          <p style="font-style: italic; margin: 0.5rem 0 0 0;">${ancestry.description}</p>
        </div>
        <div class="card-body" style="padding: 1.5rem; flex: 1 1 auto;">
          <div class="ancestry-details" style="font-size: 1.1rem;">
            <div style="margin-bottom: 1rem;">
              <h4 style="margin: 0 0 0.5rem 0;">Ancestry Gifts</h4>
              <ul style="padding-left: 1.2rem; margin: 0;">
                ${ancestry.gifts.map(gift => `<li>${gift}</li>`).join('')}
              </ul>
            </div>
            <div>
              <h4 style="margin: 0 0 0.5rem 0;">Common Archetypes</h4>
              <p>${ancestry.archetypes.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

function renderClasses() {
  const container = document.getElementById('classesContent');
  if (!container) return;
  
  let html = '<div class="classes-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; justify-items: center; align-items: stretch; width: 100%;">';

  VoidlightData.classes.forEach(cls => {
    // Banner image filename: Banner_XXXXX.png where XXXXX is uppercase class name
    const bannerName = cls.name.toUpperCase();
    html += `
      <div class="card" style="box-sizing: border-box; background: #fff; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.08); overflow: hidden; display: flex; flex-direction: column; min-width: 0; max-width: 1035px; width: 100%;">
        <div class="card-header" style="padding: 0; background: none;">
          <img src="img/Banner_${bannerName}.png" alt="${cls.name} Banner" style="width: 100%; height: auto; display: block;" />
        </div>
        <div class="card-body" style="padding: 2rem; flex: 1 1 auto;">
          <p style="font-size: 1.2rem; margin-bottom: 1.2rem;">${cls.description}</p>
          <div class="class-details" style="font-size: 1.1rem;">
            <p><strong>Domains:</strong> ${cls.domains.join(', ')}</p>
            <p><strong>Starting HP:</strong> ${cls.startingHP}</p>
            <p><strong>Starting Evasion:</strong> ${cls.startingEvasion}</p>
            <p><strong>Subclasses:</strong> ${cls.subclasses.join(', ')}</p>
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

function renderDomains() {
  const container = document.getElementById('domainsContent');
  if (!container) return;
  
  let html = '';

  Object.keys(VoidlightData.domainPowers).forEach(domain => {
    // Capitalize first letter of domain name for file (e.g., Neural -> Neural)
    const iconName = domain.charAt(0).toUpperCase() + domain.slice(1).toLowerCase().replace(/\s+/g, '');
    html += `
      <div class="domain-section" style="margin-bottom: 2rem;">
        <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 0.5rem; position: relative;">
          <span style="display: block; width: 41px; height: 60px; overflow: hidden; position: absolute; left: 10px; top: -5px; z-index: 2; border-radius: 0 0 8px 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); background: transparent;">
            <img src="img/${iconName}.png" alt="${domain} icon" style="width: 41px; height: 70px; margin-top: -10px; display: block; background: transparent;" />
          </span>
          <div style="margin-left: 66px;">
            <h3 style="margin: 0; font-size: 2rem; font-weight: 700; letter-spacing: -1px; display: inline-block; vertical-align: middle;">${domain} Domain</h3>
          </div>
        </div>
        <div class="powers-list" style="display: grid; gap: 1rem;">
    `;

    VoidlightData.domainPowers[domain].forEach(power => {
      html += `
        <div class="power-card" style="padding: 1rem; border: 1px solid #e6e2c7; border-radius: 12px; background: rgba(255,255,255,0.95); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <h4 style="margin: 0 0 0.25em 0; font-size: 1.35rem; font-weight: 600; letter-spacing: -0.5px;">
            ${power.name} <span class="power-type" style="font-weight: normal; color: #7a8a99; font-size: 1rem;">(${power.type})</span>
          </h4>
          <p style="margin: 0 0 0.5em 0;"><strong>Cost:</strong> ${power.cost} Hope</p>
          <p style="margin-bottom: 0; font-size: 1.08rem; color: #22313a;">${power.description}</p>
        </div>
      `;
    });

    html += '</div></div>';
  });
  
  container.innerHTML = html;
}

function renderWealth() {
  const container = document.getElementById('wealthContent');
  if (!container) return;
  
  let html = '<table><thead><tr><th>Tier</th><th>Name</th><th>Lifestyle</th><th>Assets</th></tr></thead><tbody>';
  
  VoidlightData.wealthTiers.forEach(tier => {
    html += `
      <tr>
        <td>${tier.tier}</td>
        <td>${tier.name}</td>
        <td>${tier.lifestyle}</td>
        <td>${tier.assets}</td>
      </tr>
    `;
  });
  
  html += '</tbody></table>';
  container.innerHTML = html;
}

function renderReputation() {
  const container = document.getElementById('reputationContent');
  if (!container) return;
  
  let html = `<p>${VoidlightData.reputation.description}</p>`;
  html += '<table><thead><tr><th>Level</th><th>Name</th><th>Description</th></tr></thead><tbody>';
  
  VoidlightData.reputation.levels.forEach(level => {
    html += `
      <tr>
        <td>${level.level}</td>
        <td>${level.name}</td>
        <td>${level.description}</td>
      </tr>
    `;
  });
  
  html += '</tbody></table>';
  container.innerHTML = html;
}

function renderEquipment() {
  const container = document.getElementById('equipmentContent');
  if (!container) return;
  
  let html = '<div class="equipment-sections">';
  
  // Weapons
  html += '<div class="equipment-category"><h3>Weapons</h3><table><thead><tr><th>Name</th><th>Damage</th><th>Tier</th><th>Features</th></tr></thead><tbody>';
  VoidlightData.equipment.weapons.forEach(weapon => {
    html += `<tr><td>${weapon.name}</td><td>${weapon.damage}</td><td>${weapon.tier}</td><td>${weapon.features}</td></tr>`;
  });
  html += '</tbody></table></div>';
  
  // Armor
  html += '<div class="equipment-category" style="margin-top: 2rem;"><h3>Armor</h3><table><thead><tr><th>Name</th><th>Protection</th><th>Tier</th><th>Features</th></tr></thead><tbody>';
  VoidlightData.equipment.armor.forEach(armor => {
    html += `<tr><td>${armor.name}</td><td>${armor.protection}</td><td>${armor.tier}</td><td>${armor.features}</td></tr>`;
  });
  html += '</tbody></table></div>';
  
  html += '</div>';
  container.innerHTML = html;
}

function renderGreatHouses() {
  const container = document.getElementById('housesContent');
  if (!container) return;
  
  let html = '<div class="houses-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">';
  
  VoidlightData.greatHouses.forEach(house => {
    html += `
      <div class="card">
        <div class="card-header">
          <h3>${house.name}</h3>
          <p><em>"${house.motto}"</em></p>
        </div>
        <div class="card-body">
          <p><strong>Philosophy:</strong> ${house.philosophy}</p>
          <p><strong>Aesthetic:</strong> ${house.aesthetic}</p>
          <p><strong>Leadership:</strong> ${house.leadership.join(', ')}</p>
          <p><strong>Secrets:</strong> ${house.secrets}</p>
          <p><strong>Benefits:</strong> ${house.benefits}</p>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

function renderWorldBuilding() {
  const container = document.getElementById('worldContent');
  if (!container) return;
  
  const wb = VoidlightData.worldBuilding;
  
  let html = `
    <div class="world-sections">
      <div class="world-section" style="margin-bottom: 2rem;">
        <h3>The Great Silence</h3>
        <p><strong>When:</strong> ${wb.greatSilence.when}</p>
        <p><strong>What:</strong> ${wb.greatSilence.what}</p>
        <p><strong>Effects:</strong></p>
        <ul>
          ${wb.greatSilence.effects.map(effect => `<li>${effect}</li>`).join('')}
        </ul>
        <p><strong>Aftermath:</strong> ${wb.greatSilence.aftermath}</p>
      </div>
      
      <div class="world-section" style="margin-bottom: 2rem;">
        <h3>The Stellar Veil</h3>
        <p>${wb.stellarVeil.description}</p>
        <p><strong>Phenomena:</strong></p>
        <ul>
          ${wb.stellarVeil.phenomena.map(phenomenon => `<li>${phenomenon}</li>`).join('')}
        </ul>
        <p><strong>Navigation:</strong> ${wb.stellarVeil.navigation}</p>
      </div>
      
      <div class="world-section">
        <h3>Major Factions</h3>
        <div class="factions-list" style="display: grid; gap: 1rem;">
          ${wb.factions.map(faction => `
            <div class="faction-card" style="padding: 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-base); background: var(--color-surface);">
              <h4>${faction.name}</h4>
              <p><strong>Type:</strong> ${faction.type}</p>
              <p style="margin-bottom: 0;"><strong>Goal:</strong> ${faction.goal}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

function renderCoreRules() {
  const container = document.getElementById('rulesContent');
  if (!container) return;
  
  const mechanics = VoidlightData.coreMechanics;
  
  let html = `
    <div class="rules-sections">
      <div class="rule-section">
        <h3>Resources</h3>
        <table>
          <thead><tr><th>Resource</th><th>Max</th><th>Description</th></tr></thead>
          <tbody>
            ${mechanics.resources.map(resource => `
              <tr>
                <td>${resource.name}</td>
                <td>${resource.max || resource.varies}</td>
                <td>${resource.use || resource.effect || resource.meaning}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

// Character Creator Setup
function setupCharacterCreator() {
  try {
    setupCreatorNavigation();
    populateCreatorSelects();
    setupCreatorValidation();
    updateCreatorUI();
    console.log('Character creator setup complete');
  } catch (error) {
    console.error('Error setting up character creator:', error);
  }
}

function setupCreatorNavigation() {
  const prevBtn = document.getElementById('prevStep');
  const nextBtn = document.getElementById('nextStep');
  const finishBtn = document.getElementById('finishCharacter');
  
  if (prevBtn) prevBtn.addEventListener('click', () => goToStep(currentStep - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToStep(currentStep + 1));
  if (finishBtn) finishBtn.addEventListener('click', finishCharacter);
  
  // Progress step clicks
  document.querySelectorAll('.progress-step').forEach(step => {
    step.addEventListener('click', function() {
      const stepNum = parseInt(this.getAttribute('data-step'));
      goToStep(stepNum);
    });
  });
}

function goToStep(stepNum) {
  if (stepNum < 1 || stepNum > 8) return;
  if (stepNum > currentStep && !validateCurrentStep()) return;
  
  currentStep = stepNum;
  updateCreatorUI();
  saveCurrentStepData();
  console.log('Moved to step:', currentStep);
}

function updateCreatorUI() {
  // Update progress
  document.querySelectorAll('.progress-step').forEach(step => {
    const stepNum = parseInt(step.getAttribute('data-step'));
    step.classList.toggle('active', stepNum === currentStep);
  });
  
  // Update steps - Hide all first
  document.querySelectorAll('.creator-step').forEach(step => {
    step.classList.remove('active');
    step.style.display = 'none';
  });
  
  // Show current step
  const currentStepElement = document.querySelector(`[data-step="${currentStep}"].creator-step`);
  if (currentStepElement) {
    currentStepElement.classList.add('active');
    currentStepElement.style.display = 'block';
  }
  
  // Update navigation buttons
  const prevBtn = document.getElementById('prevStep');
  const nextBtn = document.getElementById('nextStep');
  const finishBtn = document.getElementById('finishCharacter');
  
  if (prevBtn) prevBtn.style.display = currentStep === 1 ? 'none' : 'block';
  if (nextBtn) nextBtn.style.display = currentStep === 8 ? 'none' : 'block';
  if (finishBtn) finishBtn.style.display = currentStep === 8 ? 'block' : 'none';
  
  // Update specific step content
  updateStepContent();
}

function updateStepContent() {
  switch(currentStep) {
    case 3:
      updateSubclassList();
      break;
    case 4:
      validateTraits();
      break;
    case 6:
      updateDomainPowers();
      break;
    case 8:
      updateEquipmentLists();
      break;
  }
}

function populateCreatorSelects() {
  // Ancestries
  const ancestrySelect = document.getElementById('ancestrySelect');
  if (ancestrySelect) {
    VoidlightData.ancestries.forEach(ancestry => {
      const option = document.createElement('option');
      option.value = ancestry.name;
      option.textContent = ancestry.name;
      ancestrySelect.appendChild(option);
    });
    ancestrySelect.addEventListener('change', updateAncestryDescription);
  }
  
  // Communities
  const communitySelect = document.getElementById('communitySelect');
  if (communitySelect) {
    VoidlightData.communities.forEach(community => {
      const option = document.createElement('option');
      option.value = community.name;
      option.textContent = community.name;
      communitySelect.appendChild(option);
    });
    communitySelect.addEventListener('change', updateCommunityDescription);
  }
  
  // Classes
  const classSelect = document.getElementById('classSelect');
  if (classSelect) {
    VoidlightData.classes.forEach(cls => {
      const option = document.createElement('option');
      option.value = cls.name;
      option.textContent = cls.name;
      classSelect.appendChild(option);
    });
    classSelect.addEventListener('change', updateClassDescription);
  }
}

function updateAncestryDescription() {
  const select = document.getElementById('ancestrySelect');
  const description = document.getElementById('ancestryDescription');
  const selected = VoidlightData.ancestries.find(a => a.name === select.value);
  
  if (selected && description) {
    description.innerHTML = `
      <p>${selected.description}</p>
      <p><strong>Gifts:</strong> ${selected.gifts.join(', ')}</p>
      <p><strong>Common Archetypes:</strong> ${selected.archetypes.join(', ')}</p>
    `;
  } else if (description) {
    description.innerHTML = '';
  }
}

function updateCommunityDescription() {
  const select = document.getElementById('communitySelect');
  const description = document.getElementById('communityDescription');
  const selected = VoidlightData.communities.find(c => c.name === select.value);
  
  if (selected && description) {
    description.innerHTML = `
      <p>${selected.description}</p>
      <p><strong>Benefit:</strong> ${selected.benefit}</p>
    `;
  } else if (description) {
    description.innerHTML = '';
  }
}

function updateClassDescription() {
  const select = document.getElementById('classSelect');
  const description = document.getElementById('classDescription');
  const subclassSelect = document.getElementById('subclassSelect');
  const selected = VoidlightData.classes.find(c => c.name === select.value);
  
  if (selected && description) {
    description.innerHTML = `
      <p>${selected.description}</p>
      <p><strong>Domains:</strong> ${selected.domains.join(', ')}</p>
      <p><strong>Starting HP:</strong> ${selected.startingHP}</p>
      <p><strong>Starting Evasion:</strong> ${selected.startingEvasion}</p>
    `;
    
    // Enable and populate subclasses
    if (subclassSelect) {
      subclassSelect.disabled = false;
      subclassSelect.innerHTML = '<option value="">Select Subclass</option>';
      selected.subclasses.forEach(sub => {
        const option = document.createElement('option');
        option.value = sub;
        option.textContent = sub;
        subclassSelect.appendChild(option);
      });
    }
  } else {
    if (description) description.innerHTML = '';
    if (subclassSelect) {
      subclassSelect.disabled = true;
      subclassSelect.innerHTML = '<option value="">Select Subclass</option>';
    }
  }
}

function updateSubclassList() {
  const classSelect = document.getElementById('classSelect');
  const subclassSelect = document.getElementById('subclassSelect');
  const selected = VoidlightData.classes.find(c => c.name === classSelect?.value);
  
  if (selected && subclassSelect) {
    subclassSelect.disabled = false;
    subclassSelect.innerHTML = '<option value="">Select Subclass</option>';
    selected.subclasses.forEach(sub => {
      const option = document.createElement('option');
      option.value = sub;
      option.textContent = sub;
      subclassSelect.appendChild(option);
    });
  }
}

function setupCreatorValidation() {
  // Traits validation
  document.querySelectorAll('.trait-select').forEach(select => {
    select.addEventListener('change', validateTraits);
  });
}

function validateTraits() {
  const selects = document.querySelectorAll('.trait-select');
  const requiredValues = ['+2', '+1', '+1', '0', '0', '-1'];
  // Gather current values
  const values = Array.from(selects).map(s => s.value).filter(v => v !== '');
  const validation = document.getElementById('traitsValidation');

  // For each select, update its options to only show available values
  selects.forEach((select, idx) => {
    const currentValue = select.value;
    // Build list of assigned values except this select
    const assigned = Array.from(selects).map((s, i) => i !== idx ? s.value : null).filter(v => v && v !== '');
    // Build available values: required - assigned
    const available = [...requiredValues];
    assigned.forEach(val => {
      const i = available.indexOf(val);
      if (i !== -1) available.splice(i, 1);
    });
    // If currentValue is not empty and not in available, add it (for editing)
    if (currentValue && !available.includes(currentValue)) {
      available.push(currentValue);
    }
    // Save current selection
    const prev = select.value;
    // Rebuild options
    select.innerHTML = '<option value="">Select</option>' + available.map(val => `<option value="${val}">${val}</option>`).join('');
    // Restore previous selection if still available
    select.value = prev;
  });

  // Validation logic
  const sortedValues = [...values].sort();
  const sortedRequired = [...requiredValues].sort();
  const isValid = values.length === 6 && sortedValues.join(',') === sortedRequired.join(',');

  if (validation) {
    if (values.length === 0) {
      validation.innerHTML = '';
      validation.className = 'validation-message';
    } else if (isValid) {
      validation.innerHTML = '✓ Trait distribution is valid';
      validation.className = 'validation-message success';
    } else {
      validation.innerHTML = '✗ Must use exactly: +2, +1, +1, 0, 0, -1';
      validation.className = 'validation-message error';
    }
  }

  return isValid;
}

function updateDomainPowers() {
  const classSelect = document.getElementById('classSelect');
  const container = document.getElementById('domainPowersSelection');
  const selectedClass = VoidlightData.classes.find(c => c.name === classSelect?.value);
  
  if (!container) return;
  
  if (!selectedClass) {
    container.innerHTML = '<p>Please select a class first.</p>';
    return;
  }
  
  let html = '<p>Choose 2 powers from your class domains:</p>';
  
  selectedClass.domains.forEach(domain => {
    html += `
      <div class="domain-powers">
        <h4>${domain} Domain</h4>
        <div class="powers-list">
    `;
    
    VoidlightData.domainPowers[domain].forEach((power, index) => {
      html += `
        <div class="power-option">
          <input type="checkbox" id="power_${domain}_${index}" name="domainPower" value="${domain}:${power.name}">
          <div class="power-info">
            <div class="power-name">${power.name} (${power.type})</div>
            <p class="power-description">${power.description}</p>
          </div>
        </div>
      `;
    });
    
    html += '</div></div>';
  });
  
  container.innerHTML = html;
  
  // Add validation
  container.querySelectorAll('input[name="domainPower"]').forEach(checkbox => {
    checkbox.addEventListener('change', validateDomainPowers);
  });
}

function validateDomainPowers() {
  const checkboxes = document.querySelectorAll('input[name="domainPower"]:checked');
  const validation = document.getElementById('powersValidation');
  
  if (!validation) return false;
  
  if (checkboxes.length === 0) {
    validation.innerHTML = '';
    validation.className = 'validation-message';
  } else if (checkboxes.length === 2) {
    validation.innerHTML = '✓ Power selection is valid';
    validation.className = 'validation-message success';
  } else if (checkboxes.length < 2) {
    validation.innerHTML = `Select ${2 - checkboxes.length} more power(s)`;
    validation.className = 'validation-message';
  } else {
    validation.innerHTML = '✗ Too many powers selected (maximum 2)';
    validation.className = 'validation-message error';
    
    // Uncheck excess selections
    const excess = Array.from(checkboxes).slice(2);
    excess.forEach(cb => cb.checked = false);
  }
  
  return checkboxes.length === 2;
}

function updateEquipmentLists() {
  const weaponsList = document.getElementById('weaponsList');
  const armorList = document.getElementById('armorList');
  
  if (!weaponsList || !armorList) return;
  
  // Weapons
  let weaponsHtml = '';
  VoidlightData.equipment.weapons.forEach((weapon, index) => {
    weaponsHtml += `
      <div class="equipment-item" data-type="weapon" data-index="${index}">
        <input type="checkbox" id="weapon_${index}">
        <div class="equipment-details">
          <div class="equipment-name">${weapon.name}</div>
          <div class="equipment-stats">${weapon.damage} • Tier ${weapon.tier} • ${weapon.features}</div>
        </div>
      </div>
    `;
  });
  weaponsList.innerHTML = weaponsHtml;

  // Armor
  let armorHtml = '';
  VoidlightData.equipment.armor.forEach((armor, index) => {
    armorHtml += `
      <div class="equipment-item" data-type="armor" data-index="${index}">
        <input type="checkbox" id="armor_${index}">
        <div class="equipment-details">
          <div class="equipment-name">${armor.name}</div>
          <div class="equipment-stats">Tier ${armor.tier} • ${armor.features}</div>
        </div>
      </div>
    `;
  });
  armorList.innerHTML = armorHtml;
  
  // Add event listeners
  document.querySelectorAll('.equipment-item').forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.addEventListener('change', updateEquipmentSlots);
      item.addEventListener('click', function(e) {
        if (e.target !== checkbox && !checkbox.disabled) {
          checkbox.checked = !checkbox.checked;
          updateEquipmentSlots();
        }
      });
    }
  });
  // Initial update to enforce limits
  updateEquipmentSlots();
}

function updateEquipmentSlots() {
  // Weapons
  const selectedWeapons = document.querySelectorAll('#weaponsList input:checked');
  let totalWeaponTiers = 0;
  selectedWeapons.forEach(checkbox => {
    const index = checkbox.id.split('_')[1];
    totalWeaponTiers += VoidlightData.equipment.weapons[index].tier;
  });

  // Armor
  const selectedArmor = document.querySelectorAll('#armorList input:checked');
  let totalArmorTiers = 0;
  selectedArmor.forEach(checkbox => {
    const index = checkbox.id.split('_')[1];
    totalArmorTiers += VoidlightData.equipment.armor[index].tier;
  });

  // Show only tier cost (no slots)
  const slotsUsed = document.getElementById('slotsUsed');
  if (slotsUsed) slotsUsed.textContent = `Weapons: ${totalWeaponTiers}/2, Armor: ${totalArmorTiers}/2`;

  // Disable checkboxes if limit would be exceeded
  // Weapons
  document.querySelectorAll('#weaponsList input[type="checkbox"]').forEach(checkbox => {
    const index = checkbox.id.split('_')[1];
    const tier = VoidlightData.equipment.weapons[index].tier;
    if (!checkbox.checked && (totalWeaponTiers + tier > 2)) {
      checkbox.disabled = true;
      checkbox.parentElement.parentElement.classList.add('disabled');
    } else {
      checkbox.disabled = false;
      checkbox.parentElement.parentElement.classList.remove('disabled');
    }
  });
  // Armor
  document.querySelectorAll('#armorList input[type="checkbox"]').forEach(checkbox => {
    const index = checkbox.id.split('_')[1];
    const tier = VoidlightData.equipment.armor[index].tier;
    if (!checkbox.checked && (totalArmorTiers + tier > 2)) {
      checkbox.disabled = true;
      checkbox.parentElement.parentElement.classList.add('disabled');
    } else {
      checkbox.disabled = false;
      checkbox.parentElement.parentElement.classList.remove('disabled');
    }
  });

  // Update item states
  document.querySelectorAll('.equipment-item').forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (checkbox) {
      item.classList.toggle('selected', checkbox.checked);
    }
  });
}

function validateCurrentStep() {
  switch(currentStep) {
    case 1:
      const nameField = document.getElementById('characterName');
      const ancestryField = document.getElementById('ancestrySelect');
      return nameField?.value.trim() !== '' && ancestryField?.value !== '';
    case 2:
      const communityField = document.getElementById('communitySelect');
      return communityField?.value !== '';
    case 3:
      const classField = document.getElementById('classSelect');
      const subclassField = document.getElementById('subclassSelect');
      return classField?.value !== '' && subclassField?.value !== '';
    case 4:
      return validateTraits();
    case 5:
      return true; // Experiences are optional
    case 6:
      return validateDomainPowers();
    case 7:
      return true; // Wealth and reputation have defaults
    case 8:
      return true; // Equipment selection is optional
    default:
      return true;
  }
}

function saveCurrentStepData() {
  try {
    switch(currentStep) {
      case 1:
        const nameField = document.getElementById('characterName');
        const ancestryField = document.getElementById('ancestrySelect');
        if (nameField) currentCharacter.name = nameField.value;
        if (ancestryField) currentCharacter.ancestry = ancestryField.value;
        break;
      case 2:
        const communityField = document.getElementById('communitySelect');
        if (communityField) currentCharacter.community = communityField.value;
        break;
      case 3:
        const classField = document.getElementById('classSelect');
        const subclassField = document.getElementById('subclassSelect');
        if (classField) currentCharacter.class = classField.value;
        if (subclassField) currentCharacter.subclass = subclassField.value;
        break;
      case 4:
        currentCharacter.traits = {};
        document.querySelectorAll('.trait-select').forEach(select => {
          const trait = select.getAttribute('data-trait');
          currentCharacter.traits[trait] = select.value;
        });
        break;
      case 5:
        const exp1 = document.getElementById('experience1');
        const exp2 = document.getElementById('experience2');
        const exp3 = document.getElementById('experience3');
        currentCharacter.experiences = [
          exp1?.value || '',
          exp2?.value || '',
          exp3?.value || ''
        ].filter(exp => exp.trim() !== '');
        break;
      case 6:
        const selectedPowers = document.querySelectorAll('input[name="domainPower"]:checked');
        currentCharacter.domainPowers = Array.from(selectedPowers).map(cb => cb.value);
        break;
      case 7:
        const wealthField = document.getElementById('wealthSelect');
        const reputationField = document.getElementById('reputationSelect');
        if (wealthField) currentCharacter.wealth = parseInt(wealthField.value);
        if (reputationField) currentCharacter.reputation = parseInt(reputationField.value);
        break;
      case 8:
        currentCharacter.equipment = [];
        document.querySelectorAll('#weaponsList input:checked').forEach(cb => {
          const index = cb.id.split('_')[1];
          currentCharacter.equipment.push({type: 'weapon', ...VoidlightData.equipment.weapons[index]});
        });
        document.querySelectorAll('#armorList input:checked').forEach(cb => {
          const index = cb.id.split('_')[1];
          currentCharacter.equipment.push({type: 'armor', ...VoidlightData.equipment.armor[index]});
        });
        break;
    }
  } catch (error) {
    console.error('Error saving step data:', error);
  }
}

function finishCharacter() {
  // Save all steps' data to ensure all fields are filled
  const prevStep = currentStep;
  for (let step = 1; step <= 8; step++) {
    currentStep = step;
    saveCurrentStepData();
  }
  currentStep = prevStep;

  // Add completion timestamp
  currentCharacter.created = new Date().toISOString();

  // Save to localStorage
  savedCharacters.push({ ...currentCharacter });
  try {
    localStorage.setItem('voidlight_characters', JSON.stringify(savedCharacters));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }

  // Reset form
  resetCharacterCreator();

  // Switch to character manager
  switchTab('manager');
  updateCharactersList();
  
  alert('Character created successfully!');
}

function resetCharacterCreator() {
  currentCharacter = {
    name: "",
    ancestry: null,
    community: null,
    class: null,
    subclass: null,
    traits: {},
    experiences: [],
    domainPowers: [],
    wealth: 1,
    reputation: 0,
    equipment: []
  };
  
  currentStep = 1;
  
  // Reset form fields
  const fields = ['characterName', 'ancestrySelect', 'communitySelect', 'classSelect', 'subclassSelect', 'experience1', 'experience2', 'experience3'];
  fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) field.value = '';
  });
  
  document.querySelectorAll('.trait-select').forEach(select => {
    select.value = '';
  });
  
  const wealthSelect = document.getElementById('wealthSelect');
  const reputationSelect = document.getElementById('reputationSelect');
  if (wealthSelect) wealthSelect.value = '1';
  if (reputationSelect) reputationSelect.value = '0';
  
  // Clear descriptions and validations
  const clearElements = ['ancestryDescription', 'communityDescription', 'classDescription', 'traitsValidation', 'powersValidation'];
  clearElements.forEach(elementId => {
    const element = document.getElementById(elementId);
    if (element) element.innerHTML = '';
  });
  
  updateCreatorUI();
}

// Character Manager
function setupCharacterManager() {
  const exportBtn = document.getElementById('exportCharacter');
  const importBtn = document.getElementById('importCharacterBtn');
  const importFile = document.getElementById('importCharacter');
  const clearBtn = document.getElementById('clearCharacters');
  
  if (exportBtn) exportBtn.addEventListener('click', exportCharacters);
  if (importBtn) importBtn.addEventListener('click', () => importFile?.click());
  if (importFile) importFile.addEventListener('change', importCharacters);
  if (clearBtn) clearBtn.addEventListener('click', clearCharacters);
}

function loadSavedCharacters() {
  try {
    const saved = localStorage.getItem('voidlight_characters');
    if (saved) {
      savedCharacters = JSON.parse(saved);
      updateCharactersList();
    }
  } catch (error) {
    console.error('Error loading saved characters:', error);
  }
}

function updateCharactersList() {
  const container = document.getElementById('charactersList');
  if (!container) return;
  
  if (savedCharacters.length === 0) {
    container.innerHTML = '<p>No characters created yet.</p>';
    return;
  }
  
  let html = '';
  savedCharacters.forEach((character, index) => {
    html += `
      <div class="character-card" style="border: 1px solid #e6e2c7; border-radius: 12px; background: #fff; margin-bottom: 2rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <h3 style="margin: 0 0 1rem 0;">${character.name || 'Unnamed Character'}</h3>
          <button onclick="deleteCharacter(${index})" style="background: #e74c3c; color: #fff; border: none; border-radius: 6px; padding: 0.4rem 1rem; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.2rem;">
          <div><strong>Ancestry:</strong> ${character.ancestry || '-'}</div>
          <div><strong>Community:</strong> ${character.community || '-'}</div>
          <div><strong>Class:</strong> ${character.class || '-'}</div>
          <div><strong>Subclass:</strong> ${character.subclass || '-'}</div>
          <div><strong>Wealth:</strong> ${character.wealth !== undefined ? character.wealth : '-'}</div>
          <div><strong>Reputation:</strong> ${character.reputation !== undefined ? character.reputation : '-'}</div>
        </div>
        <div style="margin-top: 1rem;">
          <strong>Traits:</strong>
          <ul style="margin: 0.3rem 0 0.7rem 1.2rem;">
            ${character.traits && Object.keys(character.traits).length > 0 ? Object.entries(character.traits).map(([trait, value]) => `<li>${trait}: ${value}</li>`).join('') : '<li>-</li>'}
          </ul>
          <strong>Experiences:</strong>
          <ul style="margin: 0.3rem 0 0.7rem 1.2rem;">
            ${character.experiences && character.experiences.length > 0 ? character.experiences.map(exp => `<li>${exp}</li>`).join('') : '<li>-</li>'}
          </ul>
          <strong>Domain Powers:</strong>
          <ul style="margin: 0.3rem 0 0.7rem 1.2rem;">
            ${character.domainPowers && character.domainPowers.length > 0 ? character.domainPowers.map(power => `<li>${power}</li>`).join('') : '<li>-</li>'}
          </ul>
          <strong>Equipment:</strong>
          <ul style="margin: 0.3rem 0 0.7rem 1.2rem;">
            ${character.equipment && character.equipment.length > 0 ? character.equipment.map(eq => {
              if (typeof eq === 'string') {
                // fallback for old saves
                return `<li>${eq}</li>`;
              } else if (eq && eq.name) {
                // Try to find matching weapon or armor for stats
                let item = VoidlightData.equipment.weapons.find(w => w.name === eq.name) || VoidlightData.equipment.armor.find(a => a.name === eq.name);
                if (item) {
                  if (item.damage) {
                    // Weapon
                    return `<li><strong>${item.name}</strong> (Weapon): ${item.damage}, Tier ${item.tier}, ${item.features}</li>`;
                  } else {
                    // Armor
                    return `<li><strong>${item.name}</strong> (Armor): ${item.protection}, Tier ${item.tier}, ${item.features}</li>`;
                  }                } else {
                  // Unknown item
                  return `<li>${eq.name}</li>`;
                }
              } else {
                return `<li>-</li>`;
              }
            }).join('') : '<li>-</li>'}
          </ul>
          <div style="font-size: 0.9em; color: #888; margin-top: 0.5rem;">Created: ${character.created ? new Date(character.created).toLocaleString() : '-'}</div>
        </div>
      </div>`;
  });
  
  container.innerHTML = html;
}

function exportCharacters() {
  if (savedCharacters.length === 0) {
    alert('No characters to export');
    return;
  }
  
  const dataStr = JSON.stringify(savedCharacters, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'voidlight_characters.json';
  link.click();
}

function importCharacters(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        savedCharacters = [...savedCharacters, ...imported];
        localStorage.setItem('voidlight_characters', JSON.stringify(savedCharacters));
        updateCharactersList();
        alert('Characters imported successfully!');
      } else {
        alert('Invalid file format');
      }
    } catch (error) {
      alert('Error reading file: ' + error.message);
    }
  };
  reader.readAsText(file);
}

function clearCharacters() {
  if (confirm('Are you sure you want to delete all characters? This cannot be undone.')) {
    savedCharacters = [];
    localStorage.removeItem('voidlight_characters');
    updateCharactersList();
  }
}

function deleteCharacter(index) {
  if (confirm('Are you sure you want to delete this character?')) {
    savedCharacters.splice(index, 1);
    localStorage.setItem('voidlight_characters', JSON.stringify(savedCharacters));
    updateCharactersList();
  }
}


// Make delete function global for onclick handlers
window.deleteCharacter = deleteCharacter;

// Initialize the application
console.log(`
╔══════════════════════════════════════════════════════════════╗
║                     VOIDLIGHT WIKI                          ║
║            Complete Character Creator System                 ║
║                                                              ║
║  Features:                                                   ║
║  • Complete wiki with all game content                      ║
║  • Working character creator (8 steps)                      ║
║  • Character management with import/export                  ║
// (Admin panel for data management removed)
║  • Local storage for character persistence                  ║
║                                                              ║
║  Ready to forge your stellar soul!                         ║
╚══════════════════════════════════════════════════════════════╝
`);
