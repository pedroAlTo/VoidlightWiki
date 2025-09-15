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
  {name: "Humans", description: "The adaptable survivors, scattered and diversified across the galaxy", gifts: ["<p><b>Adaptive Spirit:</b>Once per session, when you fail an action roll, spend 2 Hope to gain advantage on your next roll of the same type</p>", "<p><b>Cultural Bridge:</b>During a rest, mark a Stress to ask the GM one question about a group's motivations or customs.</p>"], archetypes: ["Explorer", "Diplomat", "Mercenary"]},
  {name: "Zephyrians", description: "Stardust dancers, psychically sensitive and empathic beings", gifts: ["<p><b>Veil Sensitivity:</b>You automatically sense strong Veil phenomena and emotional states within Very Close range.</p>", "<p><b>Emotional Resonance:</b>Once per scene, you may convert 1 Stress from yourself or an ally into 1 Hope.</p>"], archetypes: ["Mystic", "Artist", "Counselor"]},
  {name: "Kryllians", description: "The unbreakable forge, four-armed natural engineers", gifts: ["<p><b>Master Craftsman:</b>When making rolls related to crafting or repairing, mark a Stress to gain advantage.</p>", "<p><b>Structural Intuition:</b>Once per session, mark a Stress to ask the GM about a system's most significant weakness.</p>"], archetypes: ["Engineer", "Soldier", "Architect"]},
  {name: "Ethereals", description: "Ghosts in the machine, energy beings with temporal perception", gifts: ["<p><b>Phase Shift:</b>Once per scene, mark a Stress to become incorporeal until the end of your next turn, allowing you to pass through solid objects and become immune to physical attacks.</p>", "<p><b>Temporal Perception:</b>You can sense temporal anomalies and distortions within Close range. Once per session, you can ask the GM about the most likely immediate consequence of a proposed action.</p>"], archetypes: ["Spy", "Oracle", "Assassin"]},
  {name: "Synthetics", description: "Liberated minds, self-aware AIs seeking purpose", gifts: ["<p><b>Modular Consciousness:</b>Once per long rest, you can temporarily download a new skill or knowledge set. Choose a trait; you can spend a hope to gain a +1 on rolls using that trait until your next long rest.</p>", "<p><b>Digital Interface:</b>You can directly interface with electronic systems and networks. You have advantage on rolls to hack, operate, or understand technological devices.</p>"], archetypes: ["Hacker", "Scholar", "Infiltrator"]},
  {name: "Rift Spinners", description: "Time weavers, arachnids who manipulate causality", gifts: ["<p><b>Chrono-Gift:</b>Once per session, after any roll within Close range, spend 2 Hope to force a reroll.</p>", "<p><b>Wall Weaver:</b>You can move on vertical or inverted surfaces as normal ground. While touching a surface, you sense vibrations through it, gaining +2 on Perception checks to detect moving creatures within Close range that are also in contact with it. This does not apply to creatures not touching the surface.</p>"], archetypes: ["Controller", "Tactician", "Prophet"]},
  {name: "Celestari", description: "Descendants of stars, radiant beings with cosmic grace", gifts: ["<p><b>Stellar Meditation:</b>Once per long rest, meditate for 10 minutes to mark a Stress and gain 2 Hope.</p>", "<p><b>Celestial Grace:</b>Your unarmed attacks deal d6 magic damage. Once per session, heal the same damage dealt to nearby allies.</p>"], archetypes: ["Leader", "Guardian", "Philosopher"]},
  {name: "Kryx", description: "Voices of the hunt, powerful and honor-based pack culture", gifts: ["<p><b>Pack Intuition:</b>When an ally within Very Close range is targeted by an attack, mark a Stress to gain advantage on your next attack against that foe.</p>", "<p><b>Biolume Howl:</b>Your unarmed attacks deal d6 magic damage. Once per session, mark a Stress to make your target Dizzied and gain 1 Hope.</p>"], archetypes: ["Leader", "Soldier", "Mercenary", "Explorer"]}
  ],
  
communities: [
    {name: "Core World", description: "Glittering spires and social labyrinths - vast data-nets, towering arcologies, complex hierarchies", benefit: "<p><b>Institutional Leverage:</b> When navigating bureaucracy or social labyrinths, roll a d20 as your Hope die. On success (10+), gain 1 Favor Token. Spend Tokens to auto-pass permits or expose institutional flaws. If playing with Diplomat also add 1 favor token to your max tokens.</p>"},
    {name: "Frontier Colony", description: "Grit, rust, and shared hardship - practical ingenuity in harsh conditions", benefit: "<p><b>Scrap-Savvy Ingenuity:</b> Improvise tools from junk: Roll your Fear die (e.g., d6/d8) for effect. On 1-3, it breaks spectacularly. Once per rest, reroll if you sacrifice a personal item.</p>"},
    {name: "Void Station", description: "Pressurized cans in the dark - recycled air with dozens of species", benefit: "<p><b>Cross-Species Intuition:</b> When negotiating with aliens or adapting tech, you have 3 Linguistic Tokens. Spend 1 to reroll Hope OR treat Fear as Hope for negotiations. Regain all by mediating a faction dispute or 1 after long rest.</p>"},
    {name: "Trade Hub", description: "Chaotic symphony of commerce - spice, ozone, and desperation", benefit: "<p><b>Market Oracle:</b> When negotiating prices, gamble resources on rumors: Roll Comprehend (DC12). On success, you gain true intel +1 Hope. Critical: Reveal a secret granting 24h Advantage on related rolls.</p>"},
    {name: "Research Outpost", description: "Labs humming over silent ruins - pursuit of knowledge", benefit: "<p><b>Scientific Resonance:</b> Your lab's instruments can detect echoes of ancient technologies. Once per session, invoke Resonance to attune to a creature or artifact: roll Insight or Investigation (player's choice) against DC 14. On success, learn one factual secret and gain advantage on research or social rolls involving that subject.</p>"},
    {name: "Free Fleet", description: "Home is the next jump - stellar navigation in your bones", benefit: "<p><b>Voidborn Kinship:</b> When recalling stellar hazards or aiding fleet allies, reroll a failed Hope piloting check OR let an ally in your system use your Hope die result as their own.</p>"}
  ],
  
  classes: [
    {name: "Pilot", description: "Masters of navigation, threading ships through treacherous Veil currents", domains: ["Void", "Tech"], startingHP: 6, startingEvasion: 11, hopeFeature: "Veil Surge (3 Hope) - Gain advantage on piloting tests and ignore one Severe Damage until next rest", classFeature: "Stellar Instinct - Advantage on piloting/navigation tests; once per session reroll failed Void-related test", subclasses: [
      {name: "Void Runner", feature: "Pathfinder's Sense - Detect safe routes/resources in deep space, spend 1 Hope to bypass spatial hazards"},
      {name: "Combat Ace", feature: "Tactical Grace - When piloting, spend 1 Stress for advantage on Evasion for 1 round"},
      {name: "System Jockey", feature: "Orbital Whisperer - Reroll docking/navigation test, spend 1 Hope to scan defenses"}
    ],
    proficiency: "Military at Tier 2, Experimental at Tier 5: Armour (light/medium), Weapons (Pistols/Rifles/Heavy), Weapon/armor mods (all), Augmentations (physical/sensory/neural/stealth), Other equipment (Communication/Utility)"
    },
    {name: "Engineer", description: "Salvaged poets jury-rigging Precursor tech into miraculous solutions", domains: ["Tech", "Synthesis"], startingHP: 7, startingEvasion: 9, hopeFeature: "Scrap Genius (3 Hope) - Create temporary device that works flawlessly for one scene", classFeature: "Technical Intuition - Advantage on repair/diagnosis tests; once per session spend 1 Stress to improvise perfect fix", subclasses: [
      {name: "Tech Specialist", feature: "Digital Ghost - Advantage on hacking, spend 1 Hope to bypass security without trace"},
      {name: "Xenotech Savant", feature: "Adaptive Interface - Operate alien tech with advantage, repurpose for new functions"},
      {name: "Medical Technician", feature: "Field Surgery - Heal 1d8+Knowledge HP or install cybernetics, spend 1 Stress to stabilize"}
    ],
    proficiency: "Military at Tier 2, Experimental at Tier 5: Armour (all), Weapons (Pistol/Rifles), Weapon/armor mods (all), Augmentations (all), Other equipment (all)"
    },
    {name: "Diplomat", description: "Peace weavers mastering words, social networks and galactic politics", domains: ["Social", "Synthesis"], startingHP: 6, startingEvasion: 10, hopeFeature: "Power of Suggestion (3 Hope) - Plant idea, create opening, or gather intelligence", classFeature: "Cultural Lens - Advantage on Social tests; gain Favor Tokens on success; gain 1 per long rest", subclasses: [
      {name: "Cultural Attaché", feature: "Unmasking Gaze - Spend 3 Hope to reveal hidden layer of target/situation"},
      {name: "Trade Negotiator", feature: "Market Savant - Reroll bartering/appraisal test, gain 1 Favor on success"},
      {name: "Political Operative", feature: "Influence Stockpile - Start with 1 Favor, gain 1 on Deception/Intimidation success"}
    ],
    proficiency: "Military at Tier 2, Experimental at Tier 5: Armour (light), Weapons (melee/pistol), Weapon mods (weapons), Augmentations (Neural/Sensory), Other equipment (Communication/Utility)"
    },
    {name: "Scholar", description: "Galactic detectives chasing lost truths through cosmic mysteries", domains: ["Tech", "Social"], startingHP: 5, startingEvasion: 10, hopeFeature: "Eureka Moment (3 Hope) - Auto-succeed on research/analysis test and uncover hidden connections", classFeature: "Pattern Weaver - Advantage on Knowledge analysis; once per session spend 1 Stress for hidden truth; Research Projects during long rest", subclasses: [
      {name: "Xenobiologist", feature: "Life Reader - Study organism to learn biology/behavior, spend 1 Hope to predict actions"},
      {name: "Precursor Archaeologist", feature: "Artifact Whisper - Sense artifact's history, advantage on Precursor tech activation"},
      {name: "Information Theorist", feature: "Data Storm - Reroll decryption test, spend 1 Stress to firewall system"}
    ],
    proficiency: "Military at Tier 2, Experimental at Tier 5: Armour (light), Weapons (Pistol), Augmentations (Neural/Sensory), Other equipment (all)"
    },
    {name: "Soldier", description: "Unbreakable walls standing between refugees and the void's darkness", domains: ["Kinetic", "Synthesis"], startingHP: 7, startingEvasion: 9, hopeFeature: "Combat Surge (2 Hope) - After hitting, deal +1d6 extra damage", classFeature: "Combat Focus - Use escalating dice (d4→d8) for damage/attack bonuses and ally advantages", subclasses: [
      {name: "Guardian", feature: "Bastion Protocol - When ally takes nearby damage, reduce by 1d8+Spirit"},
      {name: "Military Officer", feature: "Tactical Overwatch - Spend 1 Hope to grant ally +1d6 damage"},
      {name: "Peacekeeper", feature: "De-escalate - Advantage to pacify aggressors, gain 1 Hope on success"}
    ],
    proficiency: "Military at Tier 2, Experimental at Tier 5: Armour (all), Weapons (all), Weapon/armor mods (all), Augmentations (physical/sensory), Other equipment (Communication/Utility)"
    },
    {name: "Mystic", description: "Veil channels bending reality with the power of mind", domains: ["Neural", "Social"], startingHP: 6, startingEvasion: 10, hopeFeature: "Reality Unfold (3 Hope) - Advantage on all rolls until rolling with Fear, then take 1d4 Stress", classFeature: "Psychic Resonance - Once per round when rolling Mystic feature, reroll one die (gain 1 stress if lower)", subclasses: [
      {name: "Veil Walker", feature: "Phase Step - Spend 1 Stress to evade attacks/move through walls"},
      {name: "Mind-Touched", feature: "Thought Tide - Spend 1 Hope to share ally's skill for one roll"},
      {name: "Precursor Touched", feature: "Ancient Echo - Attune to Precursor artifact/site for advantage on control/interpretation"}
    ],
    proficiency: "Military at Tier 2, Experimental at Tier 5: Armour (light), Weapons (melee/pistol), Augmentations (Neural/Sensory), Other equipment (Communication)"
    },
    {name: "Scoundrel", description: "Ghosts in machines slipping through security with charm and paranoia", domains: ["Void", "Social"], startingHP: 6, startingEvasion: 12, hopeFeature: "Vanishing Act (3 Hope) - Disappear from sight/sound for 1 minute, immune to tracking", classFeature: "Shadow Operative - Advantage on Stealth; reroll failed Evasion; Sneak Attack +1d6 with advantage", subclasses: [
      {name: "Assassin", feature: "Deadly Masquerade - Assume any identity, spend 1 Hope for untraceable credentials"},
      {name: "Ghost", feature: "Phantom Step - Remove passage traces, spend 1 Stress for advantage on obstacles"},
      {name: "Data Broker", feature: "Info Web - Study target for secret/blackmail, spend 1 Hope for specific intel"}
    ],
    proficiency: "Military at Tier 2, Experimental at Tier 5: Armour (light), Weapons (Melee/Pistol/Rifles), Weapon mods (weapons), Augmentations (physical/sensory/stealth), Other equipment (Communication/Utility)"
    }
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
      {name: "Frontier Vest", slots: 3, damageThreshold: "5/11", as: 3, features: "Flexible", proficiency: "Common", tier: 1},
      {name: "Environmental Suit", slots: 3, damageThreshold: "4/8", as: 3, features: "Life Support, Flexible", proficiency: "Common", tier: 1},
      {name: "Mesh Armor", slots: 4, damageThreshold: "5/10", as: 3, features: "Self-Repair", proficiency: "Common", tier: 2},
      {name: "Pilot's Jacket", slots: 3, damageThreshold: "5/11", as: 4, features: "Life Support, Flexible", proficiency: "Common", tier: 2},
      {name: "Spacer's Suit", slots: 3, damageThreshold: "4/8", as: 3, features: "Life Support, Flexible", proficiency: "Common", tier: 1},
      {name: "Stealth Armor", slots: 4, damageThreshold: "7/16", as: 4, features: "Flexible, Cloaking", proficiency: "Military", tier: 3},
      {name: "Smart Fabric Armor", slots: 5, damageThreshold: "8/16", as: 4, features: "Flexible, Self-Repair", proficiency: "Military", tier: 3},
      {name: "Infiltrator Suit", slots: 4, damageThreshold: "7/14", as: 4, features: "Flexible, Cloaking", proficiency: "Military", tier: 2},
      {name: "Special Forces Suit", slots: 5, damageThreshold: "9/18", as: 5, features: "Flexible, Resilient", proficiency: "Military", tier: 3},
      {name: "Tactical Armor", slots: 5, damageThreshold: "10/20", as: 5, features: "Resilient, Tactical", proficiency: "Military", tier: 3},
      {name: "Powered Armor", slots: 6, damageThreshold: "13/28", as: 5, features: "Heavy, Powered", proficiency: "Military", tier: 4},
      {name: "Assault Armor", slots: 5, damageThreshold: "11/22", as: 5, features: "Resilient, Assault", proficiency: "Military", tier: 3},
      {name: "Marine Armor", slots: 5, damageThreshold: "12/24", as: 5, features: "Resilient, Environmental", proficiency: "Military", tier: 4}
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
    setupLogoNavigation();
    setupBreadcrumbs();
  // setupAdminPanel();
    loadSavedCharacters();
    
    console.log('Voidlight Wiki & Character Creator initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

// Tab Navigation - Fixed
// Logo Navigation
function setupLogoNavigation() {
  const logo = document.getElementById('logoHome');
  if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      switchTab('wiki');
      updateBreadcrumbs('wiki');
    });
  }
}

// Breadcrumbs
function setupBreadcrumbs() {
  // Initial render
  updateBreadcrumbs('wiki');

  // Listen for tab and wiki section changes
  document.querySelectorAll('.tab-btn, .tab-btn-mobile').forEach(btn => {
    btn.addEventListener('click', function() {
      updateBreadcrumbs(this.getAttribute('data-tab'));
    });
  });
  document.querySelectorAll('.wiki-nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      updateBreadcrumbs('wiki', this.getAttribute('data-section'));
    });
  });
}

function updateBreadcrumbs(tab, wikiSection) {
  const bc = document.getElementById('breadcrumbs');
  if (!bc) return;
  let crumbs = [];
  if (tab === 'wiki') {
    crumbs.push('<span class="bc-link" data-tab="wiki">Wiki</span>');
    if (wikiSection) {
      // Find button label
      const btn = document.querySelector('.wiki-nav-btn[data-section="' + wikiSection + '"]');
      if (btn) crumbs.push('<span class="bc-link" data-tab="wiki" data-section="' + wikiSection + '">' + btn.textContent + '</span>');
    }
  } else if (tab === 'creator') {
    crumbs.push('<span class="bc-link" data-tab="creator">Character Creator</span>');
  } else if (tab === 'manager') {
    crumbs.push('<span class="bc-link" data-tab="manager">Character Manager</span>');
  }
  bc.innerHTML = crumbs.join(' <span style="color:#aaa">/</span> ');
  bc.style.display = crumbs.length > 0 ? 'block' : 'none';

  // Clickable crumbs
  bc.querySelectorAll('.bc-link').forEach(link => {
    link.style.cursor = 'pointer';
    link.addEventListener('click', function() {
      const t = this.getAttribute('data-tab');
      const s = this.getAttribute('data-section');
      switchTab(t);
      if (t === 'wiki' && s) {
        // Show correct wiki section
        document.querySelectorAll('.wiki-nav-btn').forEach(btn => {
          btn.classList.remove('active');
          if (btn.getAttribute('data-section') === s) btn.classList.add('active');
        });
        document.querySelectorAll('.wiki-section').forEach(sec => {
          sec.classList.remove('active');
          sec.style.display = 'none';
        });
        const target = document.getElementById(s);
        if (target) {
          target.classList.add('active');
          target.style.display = 'block';
        }
        updateBreadcrumbs('wiki', s);
      } else {
        updateBreadcrumbs(t);
      }
    });
  });
}
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
    const bannerName = cls.name.toUpperCase();
    html += `
      <div class="card" style="box-sizing: border-box; background: #fff; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.08); overflow: hidden; display: flex; flex-direction: column; min-width: 0; max-width: 1035px; width: 100%;">
        <div class="card-header" style="padding: 0; background: none;">
          <img src="img/Banner_${bannerName}.png" alt="${cls.name} Banner" style="width: 100%; height: auto; display: block;" />
        </div>
        <div class="card-body" style="padding: 2rem; flex: 1 1 auto;">
          <h3 style="margin-top: 0;">${cls.name}</h3>
          <p style="font-size: 1.1rem; font-style: italic; margin-bottom: 1rem;">${cls.description}</p>
          <div class="class-details" style="font-size: 1.05rem;">
            <p><strong>Domains:</strong> ${cls.domains.join(' & ')}</p>
            <p><strong>Starting HP:</strong> ${cls.startingHP}</p>
            <p><strong>Starting Evasion:</strong> ${cls.startingEvasion}</p>
            <p><strong>Hope Feature:</strong> ${cls.hopeFeature || '-'}</p>
            <p><strong>Class Feature:</strong> ${cls.classFeature || '-'}</p>
            <div style="margin-bottom: 0.5rem;"><strong>Subclasses & Foundation:</strong>
              <ul style="margin: 0.5rem 0 0 1.2rem;">
                ${Array.isArray(cls.subclasses) && typeof cls.subclasses[0] === 'object'
                  ? cls.subclasses.map(sub => `<li><b>${sub.name}:</b> ${sub.feature}</li>`).join('')
                  : (cls.subclasses || []).join(', ')}
              </ul>
            </div>
            <p><strong>Proficiency:</strong> ${cls.proficiency || '-'}</p>
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
  
  // Define your domain header colors here. Update these hex values as desired.
  const domainHeaderColors = {
    Tech: '#0a4a57',
    Synthesis: '#00440aff',
    Social: '#4b0038ff',
    Neural: '#684e00ff',
    Kinetic: '#570000ff',
    Void: '#000203ff',
    // Add more as needed
  };

  let html = '';
  const domainKeys = Object.keys(VoidlightData.domainPowers);
  domainKeys.forEach((domain, idx) => {
    const iconName = domain.charAt(0).toUpperCase() + domain.slice(1).toLowerCase().replace(/\s+/g, '');
    const imgId = `domain-img-${idx}`;
    const titleId = `domain-title-${idx}`;
    const bgColor = domainHeaderColors[domain] || '#0a4a57';
    html += `
      <div class="domain-section" style="margin-bottom: 2rem;">
        <div id="${titleId}" class="domain-title-strip" style="display: flex; align-items: center; border-radius: 12px 12px 0 0; min-height: 60px; background: ${bgColor}; color: #fff; position: relative; margin-bottom: 0.5rem;">
          <span style="display: block; width: 41px; height: 60px; overflow: hidden; position: absolute; left: 10px; top: -5px; z-index: 2; border-radius: 0 0 8px 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); background: transparent;">
            <img id="${imgId}" src="img/${iconName}.png" alt="${domain} icon" style="width: 41px; height: 70px; margin-top: -10px; display: block; background: transparent;" />
          </span>
          <div style="margin-left: 66px; width: 100%;">
            <h3 style="margin: 0; font-size: 2rem; font-weight: 700; letter-spacing: -1px; display: inline-block; vertical-align: middle; color: #fff;">${domain} Domain</h3>
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
  html += '<div class="equipment-category" style="margin-top: 2rem;"><h3>Armor</h3><table><thead><tr><th>Name</th><th>Slots</th><th>Damage Thre</th><th>A.S.</th><th>Features</th><th>Proficiency</th><th>Tier Cost</th></tr></thead><tbody>';
  VoidlightData.equipment.armor.forEach(armor => {
    html += `<tr>
      <td>${armor.name}</td>
      <td>${armor.slots}</td>
      <td>${armor.damageThreshold || ''}</td>
      <td>${armor.as || ''}</td>
      <td>${armor.features}</td>
      <td>${armor.proficiency || ''}</td>
      <td>${armor.tier}</td>
    </tr>`;
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
  // Update progress and completed step color
  document.querySelectorAll('.progress-step').forEach(step => {
    const stepNum = parseInt(step.getAttribute('data-step'));
    step.classList.toggle('active', stepNum === currentStep);
    // Add completed class for finished steps
    if (stepNum < currentStep) {
      step.classList.add('completed');
    } else {
      step.classList.remove('completed');
    }
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

  // Button green if step valid
  let valid = validateCurrentStep();
  if (nextBtn) {
    if (valid && currentStep < 8) {
      nextBtn.classList.add('btn-green');
    } else {
      nextBtn.classList.remove('btn-green');
    }
  }
  if (finishBtn) {
    if (valid && currentStep === 8) {
      finishBtn.classList.add('btn-green');
    } else {
      finishBtn.classList.remove('btn-green');
    }
  }
// Add styles for completed step circles (light green) and green button
const style = document.createElement('style');
style.innerHTML = `
.progress-step.completed {
  background: #d2f7df !important;
  border-color: #3ec96b !important;
}
.progress-step.completed .step-circle {
  background: #3ec96b !important;
  color: #fff !important;
}
.progress-step.active {
  border-color: #3ec96b !important;
}
.btn-green {
  background: #3ec96b !important;
  color: #fff !important;
  border-color: #3ec96b !important;
  transition: background 0.2s;
}
`;
document.head.appendChild(style);
  
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
    ancestrySelect.addEventListener('change', function() {
      updateAncestryDescription();
      updateCreatorUI();
    });
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
    communitySelect.addEventListener('change', function() {
      updateCommunityDescription();
      updateCreatorUI();
    });
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
    classSelect.addEventListener('change', function() {
      updateClassDescription();
      updateCreatorUI();
    });
  }
}

function updateAncestryDescription() {
    const select = document.getElementById('ancestrySelect');
    const description = document.getElementById('ancestryDescription');
    const selected = VoidlightData.ancestries.find(c => c.name === select.value);
    
    if (selected && description) {
        // TRACKING EVENT
        if (select.value) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'character_creator_selection',
                selection_type: 'ancestry',
                selection_value: select.value,
                selection_name: selected.name
            });
        }
        
        description.innerHTML = `
            <h4>${selected.name}</h4>
            <p><strong>Common Archetypes:</strong> ${selected.archetypes.join(', ')}</p>
            <p>${selected.description}</p>
            <p><strong>Gifts:</strong> ${selected.gifts.join('')}</p>
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
        // TRACKING EVENT  
        if (select.value) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'character_creator_selection',
                selection_type: 'community',
                selection_value: select.value,
                selection_name: selected.name
            });
        }
        
        description.innerHTML = `
            <h4>${selected.name}</h4>
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
    if (selected && description) {
    // TRACKING EVENT PARA CLASE
    if (select.value) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'character_creator_selection',
            selection_type: 'class',
            selection_value: select.value,
            selection_name: selected.name
        });
    }
  } 
    // Only update the main subclassSelect dropdown and show the feature below
    if (subclassSelect) {
      subclassSelect.disabled = false;
      const prevValue = subclassSelect.value;
      subclassSelect.innerHTML = '<option value="">Select Subclass</option>';
      selected.subclasses.forEach(sub => {
        const option = document.createElement('option');
        option.value = sub.name;
        option.textContent = sub.name;
        subclassSelect.appendChild(option);
      });
      // Restore previous selection if possible
      if (prevValue && Array.from(subclassSelect.options).some(opt => opt.value === prevValue)) {
        subclassSelect.value = prevValue;
      } else {
        subclassSelect.value = '';
      }
      // Always update feature display and button color on change
      if (!subclassSelect._hasListener) {
    subclassSelect.addEventListener('change', function() {
        // TRACKING EVENT PARA SUBCLASE
        if (this.value) {
            const sub = selected.subclasses.find(s => s.name === this.value);
            if (sub) {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'character_creator_selection',
                    selection_type: 'subclass',
                    selection_value: this.value,
                    selection_name: sub.name
                });
            }
        }
        
        updateClassDescription();
        updateCreatorUI();
    });
    subclassSelect._hasListener = true;
}
    // Find the selected foundation feature
    let foundationFeatureHtml = '';
    if (subclassSelect && subclassSelect.value) {
      const sub = selected.subclasses.find(s => s.name === subclassSelect.value);
      if (sub) {
        foundationFeatureHtml = `<div id="foundationFeature" style="margin-top:1em;"><strong>Foundation Feature:</strong> <b>${sub.name}:</b> ${sub.feature}</div>`;
      }
    } else {
      foundationFeatureHtml = '<div id="foundationFeature" style="margin-top:1em;"></div>';
    }

    // Render class info (without foundation feature)
    description.innerHTML = `
      <p>${selected.description}</p>
      <p><strong>Domains:</strong> ${selected.domains.join(' & ')}</p>
      <p><strong>Starting HP:</strong> ${selected.startingHP}</p>
      <p><strong>Starting Evasion:</strong> ${selected.startingEvasion}</p>
      <p><strong>Hope Feature:</strong> ${selected.hopeFeature || '-'}</p>
      <p><strong>Class Feature:</strong> ${selected.classFeature || '-'}</p>
      <p><strong>Proficiency:</strong> ${selected.proficiency || '-'}</p>
    `;

    // Insert foundation feature below the subclass dropdown in the DOM
    if (subclassSelect && subclassSelect.parentElement) {
      let featureDiv = document.getElementById('foundationFeature');
      if (!featureDiv) {
        featureDiv = document.createElement('div');
        featureDiv.id = 'foundationFeature';
        subclassSelect.parentElement.appendChild(featureDiv);
      }
      featureDiv.outerHTML = foundationFeatureHtml;
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
    const prevValue = subclassSelect.value;
    subclassSelect.innerHTML = '<option value="">Select Subclass</option>';
    selected.subclasses.forEach(sub => {
      const option = document.createElement('option');
      option.value = sub.name;
      option.textContent = sub.name;
      subclassSelect.appendChild(option);
    });
    // Restore previous selection if possible
    if (prevValue && Array.from(subclassSelect.options).some(opt => opt.value === prevValue)) {
      subclassSelect.value = prevValue;
    } else {
      subclassSelect.value = '';
    }
  }
}

function setupCreatorValidation() {
  // Traits validation
  document.querySelectorAll('.trait-select').forEach(select => {
    select.addEventListener('change', function() {
      validateTraits();
      updateCreatorUI();
    });
  });
}
window.setupCreatorValidation = setupCreatorValidation;

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
          <div class="equipment-stats">
            Threshold: ${armor.damageThreshold || '-'} • A.S.: ${armor.as || '-'} • ${armor.features} • ${armor.proficiency || '-'} • Tier ${armor.tier}
          </div>
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
// Make validateCurrentStep globally accessible
window.validateCurrentStep = validateCurrentStep;

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
window.setupCharacterManager = setupCharacterManager;

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
    // Find class and subclass data
    const classData = VoidlightData.classes.find(c => c.name === character.class);
    const subclassData = classData && character.subclass ? classData.subclasses.find(s => s.name === character.subclass) : null;

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
          <strong>Class Attributes:</strong>
          <ul style="margin: 0.3rem 0 0.7rem 1.2rem;">
            <li><strong>Description:</strong> ${classData ? classData.description : '-'}</li>
            <li><strong>Domains:</strong> ${classData ? classData.domains.join(' & ') : '-'}</li>
            <li><strong>Starting HP:</strong> ${classData ? classData.startingHP : '-'}</li>
            <li><strong>Starting Evasion:</strong> ${classData ? classData.startingEvasion : '-'}</li>
            <li><strong>Hope Feature:</strong> ${classData ? classData.hopeFeature : '-'}</li>
            <li><strong>Class Feature:</strong> ${classData ? classData.classFeature : '-'}</li>
            <li><strong>Proficiency:</strong> ${classData ? classData.proficiency : '-'}</li>
          </ul>
          <strong>Subclass Feature:</strong>
          <ul style="margin: 0.3rem 0 0.7rem 1.2rem;">
            <li><strong>${character.subclass || '-'}:</strong> ${subclassData ? subclassData.feature : '-'}</li>
          </ul>
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
                    return `<li><strong>${item.name}</strong> (Armor): Slots ${item.slots}, Threshold ${item.damageThreshold || '-'}, A.S. ${item.as || '-'}, ${item.features}, ${item.proficiency || '-'}, Tier ${item.tier}</li>`;
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
║  • Local storage for character persistence                  ║
║                                                              ║
║  Ready to forge your stellar soul!                         ║
╚══════════════════════════════════════════════════════════════╝
`);
  }
