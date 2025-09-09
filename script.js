// Voidlight Character Creation - Main Script

// Character data object to store all selections
const character = {
    name: "Character Name",
    ancestry: null,
    ancestryGifts: [],
    community: null,
    communityFeature: null,
    class: null,
    subclass: null,
    classFeatures: [],
    traits: {
        agility: null,
        strength: null,
        finesse: null,
        knowledge: null,
        instinct: null,
        presence: null
    },
    experience: {
        title: "",
        trait: "",
        description: ""
    },
    domains: [],
    domainPowers: [],
    wealth: 1,
    reputation: 0,
    equipment: {
        weapons: [],
        armor: []
    },
    hitPoints: 0,
    evasion: 0,
    armorValue: 0,
    hope: 3,
    stress: 0
};

// Domain powers data
const domainPowers = {
    tech: [
        {
            name: "System Jackknife",
            level: 1,
            type: "Ability",
            recallCost: 0,
            description: "Spend a Hope and choose one electronic system within Very Close range. Make a Knowledge roll against complexity: Simple (10), Complex (13), Military (16). Control system for 10 minutes. Success with Hope: reprogram for simple commands."
        },
        {
            name: "Drone Whisper",
            level: 1,
            type: "Ability",
            recallCost: 0,
            description: "Spend a Hope, choose mechanical unit within Close range. Spellcast Roll vs programming: Civilian (12), Military (15), AI (18). Control unit for 1 hour. Failure alerts owner."
        },
        {
            name: "Quantum Firewall",
            level: 1,
            type: "Ability",
            recallCost: 1,
            description: "Spend a Hope, touch device/network. System becomes unhackable for 8 hours except by you. Intrusion attempts fail and alert you."
        }
    ],
    void: [
        {
            name: "Zero-G Drift",
            level: 1,
            type: "Ability",
            recallCost: 0,
            description: "Spend Hope. Choose Vehicle Mode (spacecraft ignores gravity, maneuvers any direction, advantage on piloting/stealth for 1 hour) or Personal Mode (ignore gravity/vacuum for 1 hour, advantage on Agility rolls for movement/stealth)."
        },
        {
            name: "Void Cloak",
            level: 1,
            type: "Ability",
            recallCost: 0,
            description: "Spend Hope. Choose Vehicle Mode (bend space around spacecraft, nearly invisible 10 minutes, advantage on stealth, enemies disadvantage on attacks, ends if attack/use weapons) or Personal Mode (nearly invisible 10 minutes, advantage on stealth, enemies disadvantage on attacks, ends if attack/use other Void power)."
        },
        {
            name: "Vector Calculus",
            level: 1,
            type: "Ability",
            recallCost: 1,
            description: "Spend Hope when making Agility roll (Personal Mode) or piloting roll (Vehicle Mode). Add Spellcast modifier to roll and treat 10 or lower as 11."
        }
    ],
    social: [
        {
            name: "Perfect Facade",
            level: 1,
            type: "Ability",
            recallCost: 0,
            description: "Spend Hope. Perfect disguise for 1 hour matching any observed person (10+ minutes observation). Advantage on Presence rolls to maintain deception. Flawless to casual observation, detectable by close scrutiny."
        },
        {
            name: "Silver Tongue",
            level: 1,
            type: "Ability",
            recallCost: 0,
            description: "Spend Hope when making Presence roll to persuade/deceive/convince. Add Spellcast modifier, treat 11- as 12. Make outrageous lies plausible or convince people to consider rejected ideas."
        },
        {
            name: "Linguistic Patch",
            level: 1,
            type: "Ability",
            recallCost: 1,
            description: "Spend Hope. Instantly understand and speak any language for 1 hour. Includes written text, cultural idioms, non-verbal communication. Advantage on cultural context and social customs."
        }
    ],
    kinetic: [
        {
            name: "Combat Surge",
            level: 1,
            type: "Ability",
            recallCost: 0,
            description: "Spend Hope. Gain +2 to all attack rolls until the end of your next turn."
        },
        {
            name: "Defensive Stance",
            level: 1,
            type: "Ability",
            recallCost: 0,
            description: "Spend Hope. Gain +2 to Evasion until the start of your next turn."
        },
        {
            name: "Precise Strike",
            level: 1,
            type: "Ability",
            recallCost: 1,
            description: "Spend Hope when making an attack. Ignore target's armor for this attack."
        }
    ],
    synthesis: [
        {
            name: "Quick Analysis",
            level: 1,
            type: "Ability",
            recallCost: 0,
            description: "Spend Hope. Instantly analyze a substance, material, or simple device. Learn its composition, function, and one weakness."
        },
        {
            name: "Adaptive Interface",
            level: 1,
            type: "Ability",
            recallCost: 0,
            description: "Spend Hope. Interface with any technology, regardless of compatibility. Gain advantage on tech-related checks for 10 minutes."
        },
        {
            name: "Knowledge Transfer",
            level: 1,
            type: "Ability",
            recallCost: 1,
            description: "Spend Hope. Share knowledge with an ally within Close range. They gain advantage on their next Knowledge check."
        }
    ],
    neural: [
        {
            name: "Mind Touch",
            level: 1,
            type: "Ability",
            recallCost: 0,
            description: "Spend Hope. Establish telepathic communication with a willing creature within Close range for 10 minutes."
        },
        {
            name: "Psychic Shield",
            level: 1,
            type: "Ability",
            recallCost: 0,
            description: "Spend Hope. Gain advantage on saves against mental effects for 1 hour."
        },
        {
            name: "Mental Push",
            level: 1,
            type: "Ability",
            recallCost: 1,
            description: "Spend Hope. Target within Close range must make a Will save or be pushed 5 feet in any direction."
        }
    ]
};

// Class domains mapping
const classDomains = {
    soldier: ["kinetic", "synthesis"],
    engineer: ["tech", "synthesis"],
    pilot: ["void", "tech"],
    scoundrel: ["social", "void"],
    mystic: ["neural", "social"],
    scholar: ["tech", "social"],
    diplomat: ["social", "synthesis"]
};

// Class stats
const classStats = {
    soldier: { evasion: 12, hitPoints: 8, hope: 3 },
    engineer: { evasion: 11, hitPoints: 6, hope: 3 },
    pilot: { evasion: 11, hitPoints: 6, hope: 3 },
    scoundrel: { evasion: 12, hitPoints: 5, hope: 3 },
    mystic: { evasion: 10, hitPoints: 5, hope: 3 },
    scholar: { evasion: 10, hitPoints: 5, hope: 3 },
    diplomat: { evasion: 10, hitPoints: 5, hope: 3 }
};

// Ancestry data
console.log("Initializing ancestry data");
const ancestryData = {
    human: {
        name: "Human",
        description: "The adaptable survivors, scattered and diversified across the galaxy.",
        gifts: [
            {
                name: "Adaptive Spirit",
                description: "Once per session, when you fail an action roll, spend 2 Hope to gain advantage on your next roll of the same type."
            },
            {
                name: "Cultural Bridge",
                description: "During a rest, mark a Stress to ask the GM one question about a group's motivations or customs."
            }
        ]
    },
    zephyrian: {
        name: "Zephyrian",
        description: "Stardust dancers, psychically sensitive and empathic beings.",
        gifts: [
            {
                name: "Veil Sensitivity",
                description: "You automatically sense strong Veil phenomena and emotional states within Very Close range."
            },
            {
                name: "Emotional Resonance",
                description: "Once per scene, you may convert 1 Stress from yourself or an ally into 1 Hope."
            }
        ]
    },
    kryllian: {
        name: "Kryllian",
        description: "The unbreakable forge, four-armed natural engineers.",
        gifts: [
            {
                name: "Master Craftsman",
                description: "When making rolls related to crafting or repairing, mark a Stress to gain advantage."
            },
            {
                name: "Structural Intuition",
                description: "Once per session, mark a Stress to ask the GM about a system's most significant weakness."
            }
        ]
    },
    ethereal: {
        name: "Ethereal",
        description: "Ghosts in the machine, energy beings with temporal perception.",
        gifts: [
            {
                name: "Phase Shift",
                description: "Once per scene, mark a Stress to become incorporeal until the end of your next turn, allowing you to pass through solid objects and become immune to physical attacks."
            },
            {
                name: "Temporal Perception",
                description: "You can sense temporal anomalies and distortions within Close range. Once per session, you can ask the GM about the most likely immediate consequence of a proposed action."
            }
        ]
    },
    synthetic: {
        name: "Synthetic",
        description: "Liberated minds, self-aware AIs seeking purpose.",
        gifts: [
            {
                name: "Modular Consciousness",
                description: "Once per long rest, you can temporarily download a new skill or knowledge set. Choose a trait; you gain advantage on rolls using that trait until your next long rest."
            },
            {
                name: "Digital Interface",
                description: "You can directly interface with electronic systems and networks. You have advantage on rolls to hack, operate, or understand technological devices."
            }
        ]
    },
    "rift-spinner": {
        name: "Rift Spinner",
        description: "Time weavers, arachnids who manipulate causality.",
        gifts: [
            {
                name: "Chrono-Gift",
                description: "Once per session, after any roll within Close range, spend 2 Hope to force a reroll."
            },
            {
                name: "Wall Weaver",
                description: "You can move on vertical or inverted surfaces as normal ground. While touching a surface, you sense vibrations through it, gaining +2 on Perception checks to detect moving creatures within Close range that are also in contact with it."
            }
        ]
    },
    celestari: {
        name: "Celestari",
        description: "Descendants of stars, radiant beings with cosmic grace.",
        gifts: [
            {
                name: "Stellar Meditation",
                description: "Once per long rest, meditate for 10 minutes to mark a Stress and gain 2 Hope."
            },
            {
                name: "Celestial Grace",
                description: "Your unarmed attacks deal d6 magic damage. Once per session, heal the same damage dealt to nearby allies."
            }
        ]
    },
    kryx: {
        name: "Kryx",
        description: "Voices of the hunt, powerful and honor-based pack culture.",
        gifts: [
            {
                name: "Pack Intuition",
                description: "When an ally within Very Close range is targeted by an attack, mark a Stress to gain advantage on your next attack against that foe."
            },
            {
                name: "Biolume Howl",
                description: "Your unarmed attacks deal d6 magic damage. Once per session, mark a Stress to make your target Dizzied and gain 1 Hope."
            }
        ]
    }
};

// Community data
const communityData = {
    "core-world": {
        name: "Core World",
        description: "Glittering Spires and Social Labyrinths",
        feature: {
            name: "Institutional Leverage",
            description: "When navigating bureaucracy or social labyrinths, roll a d20 as your Hope die. On success (10+), gain 1 Favor Token. Spend Tokens to auto-pass permits or expose institutional flaws."
        }
    },
    "frontier-colony": {
        name: "Frontier Colony",
        description: "Grit, Rust, and Shared Hardship",
        feature: {
            name: "Scrap-Savvy Ingenuity",
            description: "Improvise tools from junk: Roll your Fear die (e.g., d6/d8) for effect. On 1-3, it breaks spectacularly. Once per rest, reroll if you sacrifice a personal item."
        }
    },
    "void-station": {
        name: "Void Station",
        description: "Pressurized Cans in the Dark",
        feature: {
            name: "Cross-Species Intuition",
            description: "When negotiating with aliens or adapting tech, you have 3 Linguistic Tokens. Spend 1 to reroll Hope OR treat Fear as Hope for negotiations. Regain all by mediating a faction dispute or 1 after long rest."
        }
    },
    "trade-hub": {
        name: "Trade Hub",
        description: "The Chaotic Symphony of Commerce",
        feature: {
            name: "Market Oracle",
            description: "When negotiating prices, gamble resources on rumors: Roll Comprehend (DC12). On success, you gain true intel +1 Hope. Critical: Reveal a secret granting 24h Advantage on related rolls."
        }
    },
    "research-outpost": {
        name: "Research Outpost",
        description: "Labs Humming Over Silent Ruins",
        feature: {
            name: "Scientific Resonance",
            description: "Your lab's instruments can detect echoes of ancient technologies. Once per session, invoke Resonance to attune to a creature or artifact: roll Insight or Investigation against DC 14. On success, learn one factual secret and gain advantage on research or social rolls involving that subject."
        }
    },
    "free-fleet": {
        name: "Free Fleet",
        description: "Home is the Next Jump",
        feature: {
            name: "Voidborn Kinship",
            description: "When recalling stellar hazards or aiding fleet allies, reroll a failed Hope piloting check OR let an ally in your system use your Hope die result as their own."
        }
    },
    "agrisynth": {
        name: "AgriSynth",
        description: "Children of the Harvest-Mind",
        feature: {
            name: "Nourished by Nature",
            description: "You have advantage on Knowledge checks to stabilize creatures near death and on Survival checks to find or purify food and water in technologically-supported environments."
        }
    },
    "axiom": {
        name: "Axiom",
        description: "The Chosen of the Unbroken Chain",
        feature: {
            name: "Scriptural Knowledge",
            description: "You have advantage on checks related to the history, lore, or internal workings of your faith, and on Insight checks to discern falsehoods in conversations about matters of faith or doctrine."
        }
    },
    "circuit": {
        name: "Circuit",
        description: "The Integrated Self",
        feature: {
            name: "Hardware Proficiency",
            description: "You have advantage on Computers checks to hack, interface with, or reprogram any device with a digital component, as well as on Thievery checks involving electronic locks or disabling security systems."
        }
    },
    "voidfarer": {
        name: "Voidfarer",
        description: "The Edge of the Abyss",
        feature: {
            name: "Cold-Blooded",
            description: "You have advantage on saving throws to resist damage from extreme cold or vacuum exposure, as well as on Stealth checks made to hide in shadows or behind cover in zero-gravity or low-light environments."
        }
    }
};

// Class data
const classData = {
    soldier: {
        name: "Soldier",
        description: "The hardened combatant, master of weapons and tactics",
        primaryRole: "Damage, Defense",
        domains: ["Kinetic", "Synthesis"],
        startingEvasion: 12,
        startingHitPoints: 8,
        hopeFeature: {
            name: "Combat Focus",
            cost: "3 Hope",
            description: "Gain advantage on all attack rolls until the end of your next turn."
        },
        classFeature: {
            name: "Tactical Expertise",
            description: "Once per combat, reposition an ally or enemy within Close range."
        },
        subclasses: {
            guardian: {
                name: "Guardian",
                features: {
                    foundation: {
                        name: "Bastion Protocol",
                        description: "Reaction: When an ally takes damage nearby, reduce it by 1d8 + Spirit."
                    },
                    specialization: {
                        name: "Reinforced Weave",
                        description: "Action: Grant adjacent allies +1 Armor until your next turn."
                    },
                    mastery: {
                        name: "Absorb Barrage",
                        description: "Reaction: Redirect all damage within Near to yourself (take half)."
                    }
                }
            },
            "military-officer": {
                name: "Military Officer",
                features: {
                    foundation: {
                        name: "Tactical Overwatch",
                        description: "Free, 1 Hope/round: Grant an ally +1d6 damage on their next attack."
                    },
                    specialization: {
                        name: "Field Upgrades",
                        description: "Action: Permanently add one tag (e.g., Reliable) to an ally's weapon or armor."
                    },
                    mastery: {
                        name: "Drone Swarm",
                        description: "Action: Summon 1d4 drones for 3 rounds (1d8 damage each)."
                    }
                }
            },
            peacekeeper: {
                name: "Peacekeeper",
                features: {
                    foundation: {
                        name: "De-escalate",
                        description: "Action: Roll with advantage to pacify aggressors; on success, gain 1 Hope."
                    },
                    specialization: {
                        name: "Temporary Alliance",
                        description: "Action: Turn one foe into an ally for 1 hour (Presence vs. Spirit)."
                    },
                    mastery: {
                        name: "Restorative Justice",
                        description: "Downtime: Reduce crime in a settlement for 1 week; entering it grants +2 Hope."
                    }
                }
            }
        }
    },
    engineer: {
        name: "Engineer",
        description: "The technical genius, capable of building, repairing, and hacking anything",
        primaryRole: "Support, Control",
        domains: ["Tech", "Synthesis"],
        startingEvasion: 11,
        startingHitPoints: 6,
        hopeFeature: {
            name: "Technical Miracle",
            cost: "3 Hope",
            description: "Instantly repair a broken device or create a simple tool from available materials."
        },
        classFeature: {
            name: "Jury Rig",
            description: "Once per rest, improvise a device that grants advantage on a specific type of check for 10 minutes."
        },
        subclasses: {
            "tech-specialist": {
                name: "Tech Specialist",
                features: {
                    foundation: {
                        name: "Digital Ghost",
                        description: "Action: Advantage on hacking tests. Spend 1 Hope to bypass security without trace."
                    },
                    specialization: {
                        name: "Firewall Architect",
                        description: "Passive: Your installed defenses deal 1d8 damage to intruders."
                    },
                    mastery: {
                        name: "Unhackable Network",
                        description: "Downtime: Build a secure network in one sector for 1 month."
                    }
                }
            },
            "xenotech-savant": {
                name: "Xenotech Savant",
                features: {
                    foundation: {
                        name: "Adaptive Interface",
                        description: "Action: Operate any alien tech with advantage; repurpose it for new functions."
                    },
                    specialization: {
                        name: "Hybrid Synthesis",
                        description: "Action: Fuse alien and human tech into dual-function devices for 24 hours."
                    },
                    mastery: {
                        name: "Precursor Resonance",
                        description: "Action: Channel alien principles to grant nearby allies one of: +2 Armor, -2 Evasion to foes, or +2 Tech tests."
                    }
                }
            },
            "medical-technician": {
                name: "Medical Technician",
                features: {
                    foundation: {
                        name: "Field Surgery",
                        description: "Action: Heal 1d8 + Knowledge HP or install simple cybernetics. Spend 1 Stress to stabilize."
                    },
                    specialization: {
                        name: "Implant Design",
                        description: "Downtime: Create implants granting +1 to Strength or Agility tests."
                    },
                    mastery: {
                        name: "Bio-Synthetic Regeneration",
                        description: "1/arc Downtime: Revive a corpse within 1 hour; they return with implants but gain 1d6 Stress daily."
                    }
                }
            }
        }
    },
    pilot: {
        name: "Pilot",
        description: "The navigation ace, one with their ship, seeing paths where others see chaos",
        primaryRole: "Mobility, Control",
        domains: ["Void", "Tech"],
        startingEvasion: 11,
        startingHitPoints: 6,
        hopeFeature: {
            name: "Veil Surge",
            cost: "3 Hope",
            description: "Gain advantage on piloting tests and ignore one Severe Damage until your next rest."
        },
        classFeature: {
            name: "Stellar Instinct",
            description: "Advantage on piloting/navigation tests. Once per session, reroll one failed Void-related test; if you spend Hope on navigation, add +1d8."
        },
        subclasses: {
            "void-runner": {
                name: "Void Runner",
                features: {
                    foundation: {
                        name: "Pathfinder's Sense",
                        description: "Action: Detect safe routes or resources in deep space. Spend 1 Hope to bypass spatial hazards automatically."
                    },
                    specialization: {
                        name: "Sensor Savant",
                        description: "Action: Reroll one failed jump-drive or sensor test (DC 12)."
                    },
                    mastery: {
                        name: "Permanent Chart",
                        description: "Downtime: Map a stable route through a Veil storm system for repeated safe passage each session."
                    }
                }
            },
            "combat-ace": {
                name: "Combat Ace",
                features: {
                    foundation: {
                        name: "Tactical Grace",
                        description: "Reaction: When piloting, spend 1 Stress to gain advantage on Evasion for 1 round."
                    },
                    specialization: {
                        name: "Target Analysis",
                        description: "Action: Study an enemy vehicle for 1 round; your next attack deals +1d8 damage."
                    },
                    mastery: {
                        name: "Fleet Redirect",
                        description: "Free Action, 1/combat: Redirect movement of one allied fleet unit within Near range."
                    }
                }
            },
            "system-jockey": {
                name: "System Jockey",
                features: {
                    foundation: {
                        name: "Orbital Whisperer",
                        description: "Reaction: Reroll one docking or navigation test. Spend 1 Hope to scan local defenses."
                    },
                    specialization: {
                        name: "Fuel Efficiency",
                        description: "Action: Halve fuel costs for a gravity slingshot maneuver."
                    },
                    mastery: {
                        name: "Automated Control",
                        description: "Action: Hack and control station systems (defenses, comms) for 10 minutes."
                    }
                }
            }
        }
    },
    scoundrel: {
        name: "Scoundrel",
        description: "The ghost in the shadows, expert in stealth, subterfuge, and lethal precision",
        primaryRole: "Damage, Stealth",
        domains: ["Social", "Void"],
        startingEvasion: 12,
        startingHitPoints: 5,
        hopeFeature: {
            name: "Perfect Strike",
            cost: "3 Hope",
            description: "Deal maximum damage with an attack and ignore target's armor."
        },
        classFeature: {
            name: "Shadow Step",
            description: "Once per rest, become invisible for one round or until you attack."
        },
        subclasses: {
            assassin: {
                name: "Assassin",
                features: {
                    foundation: {
                        name: "Deadly Masquerade",
                        description: "Action: Assume any identity; spend 1 Hope to forge untraceable credentials."
                    },
                    specialization: {
                        name: "Neuro-Synth Strike",
                        description: "Action: Critical hits Stun; spend 1 Stress to add Poisoned (1d6 ongoing)."
                    },
                    mastery: {
                        name: "Perfect Kill",
                        description: "1/combat: Automatically crit Surprised or Helpless targets."
                    }
                }
            },
            ghost: {
                name: "Ghost",
                features: {
                    foundation: {
                        name: "Phantom Step",
                        description: "Action: Remove all traces of passage; spend 1 Stress to bypass obstacles with advantage. Phase Cloak once per rest: invisible until you attack or fail Stealth."
                    },
                    specialization: {
                        name: "Surveillance Evasion",
                        description: "Passive: Gain an extra Phase Cloak use per rest."
                    },
                    mastery: {
                        name: "Underworld Network",
                        description: "Downtime: Command unseen agents across a sector for intel and favors."
                    }
                }
            },
            "data-broker": {
                name: "Data Broker",
                features: {
                    foundation: {
                        name: "Info Web",
                        description: "Action: Study a target for 1 minute to learn one secret or gain blackmail material (GM's choice). Spend 1 Hope to ask the GM one specific question about faction plans or motivations."
                    },
                    specialization: {
                        name: "Combat Intel",
                        description: "Free: Grant allies +1d6 damage against a studied foe."
                    },
                    mastery: {
                        name: "System Override",
                        description: "Action: Control any automated defense or comms for 10 minutes."
                    }
                }
            }
        }
    },
    mystic: {
        name: "Mystic",
        description: "The Veil's channel, bending reality with the power of their mind",
        primaryRole: "Psionic Power, Support",
        domains: ["Neural", "Social"],
        startingEvasion: 10,
        startingHitPoints: 5,
        hopeFeature: {
            name: "Veil Surge",
            cost: "3 Hope",
            description: "Double the effect of your next psionic power."
        },
        classFeature: {
            name: "Mind Touch",
            description: "Communicate telepathically with a willing creature within Close range."
        },
        subclasses: {
            "veil-walker": {
                name: "Veil Walker",
                features: {
                    foundation: {
                        name: "Phase Step",
                        description: "Reaction: Spend 1 Stress to evade attacks or move through walls. Once per rest, with 1 minute preparation, create a pocket dimension sanctuary for 10 minutes that protect against external hazards."
                    },
                    specialization: {
                        name: "Glimpse Future",
                        description: "Action: Roll 1d6 + Instinct; on 4+, foresee an enemy's action or trap."
                    },
                    mastery: {
                        name: "Causality Reverse",
                        description: "3 Stress Action: Within Close range, undo one recent event (heal a wound or remove a trap)."
                    }
                }
            },
            "mind-touched": {
                name: "Mind-Touched",
                features: {
                    foundation: {
                        name: "Thought Tide",
                        description: "Action: Spend 1 Hope to share an ally's skill for one roll; once per rest, grant mental shield to a group."
                    },
                    specialization: {
                        name: "Implant Suggestion",
                        description: "Action: Presence vs. Spirit to plant a command lasting 1 hour."
                    },
                    mastery: {
                        name: "Hive Mind",
                        description: "Action: For 10 minutes, allies share senses, skills, and HP; afterwards all take 1d6 Stress."
                    }
                }
            },
            "precursor-touched": {
                name: "Precursor Touched",
                features: {
                    foundation: {
                        name: "Ancient Echo",
                        description: "Action: Attune to any precursor artifact, Veil device, site, or anomaly to gain advantage on control or interpretation rolls this scene. Once per rest, channel its echoes to ask one question about that target; receive a truthful but cryptic insight."
                    },
                    specialization: {
                        name: "Collective Consciousness",
                        description: "Action: Fuse minds into a hive for 10 minutes; upon dissolution, each takes 1d6 Stress."
                    },
                    mastery: {
                        name: "Cosmic Truth",
                        description: "Action: Spend 3 Stress: Ask one specific, actionable question about a creature, object, place, or event present or encountered this arc; the answer is true. Then the GM gains 2 Fear and introduces a Veil-tied complication before scene end."
                    }
                }
            }
        }
    },
    scholar: {
        name: "Scholar",
        description: "The guardian of knowledge, unraveling the secrets of the past",
        primaryRole: "Investigation, Support",
        domains: ["Tech", "Social"],
        startingEvasion: 10,
        startingHitPoints: 5,
        hopeFeature: {
            name: "Eureka Moment",
            cost: "3 Hope",
            description: "Instantly recall a crucial piece of information or solve a complex puzzle."
        },
        classFeature: {
            name: "Analytical Mind",
            description: "Once per session, ask the GM one specific question about a situation and receive a truthful answer."
        },
        subclasses: {
            xenobiologist: {
                name: "Xenobiologist",
                features: {
                    foundation: {
                        name: "Life Reader",
                        description: "Action: Study an organism to learn biology/behavior; spend 1 Hope to predict its actions for 1 hour."
                    },
                    specialization: {
                        name: "Ecosystem Decoder",
                        description: "Free: Advantage on Survival tests in alien biomes."
                    },
                    mastery: {
                        name: "Evolutionary Forecast",
                        description: "Downtime: Predict environmental shifts in a system for 1 week."
                    }
                }
            },
            "precursor-archaeologist": {
                name: "Precursor Archaeologist",
                features: {
                    foundation: {
                        name: "Artifact Whisper",
                        description: "Action: Sense an artifact's history; roll with advantage to activate Precursor tech."
                    },
                    specialization: {
                        name: "Cultural Reconstructor",
                        description: "Passive: +2 on Social tests with civilizations you've studied."
                    },
                    mastery: {
                        name: "Philosophy Engine",
                        description: "Downtime: Convert Precursor wisdom into a relic-tier invention."
                    }
                }
            },
            "information-theorist": {
                name: "Information Theorist",
                features: {
                    foundation: {
                        name: "Data Storm",
                        description: "Reaction: Reroll any decryption test; spend 1 Stress to firewall a system for 1d6 hours."
                    },
                    specialization: {
                        name: "Social Algorithm",
                        description: "Passive: Advantage on Social tests against organizations you analyze."
                    },
                    mastery: {
                        name: "Quantum Network",
                        description: "Downtime: Create an unhackable comms network across one star system for 1 month."
                    }
                }
            }
        }
    },
    diplomat: {
        name: "Diplomat",
        description: "The peace weaver, master of words and social networks",
        primaryRole: "Negotiation, Support",
        domains: ["Social", "Synthesis"],
        startingEvasion: 10,
        startingHitPoints: 5,
        hopeFeature: {
            name: "Perfect Words",
            cost: "3 Hope",
            description: "Automatically succeed on a social interaction check."
        },
        classFeature: {
            name: "Network of Contacts",
            description: "Once per session, call upon a contact for information or a minor favor."
        },
        subclasses: {
            "cultural-attache": {
                name: "Cultural Attaché",
                features: {
                    foundation: {
                        name: "The Unmasking Gaze",
                        description: "Action: Spend 3 Hope to pierce deception. The GM must reveal the 'Hidden' layer (deepest fear, secret, or agenda) of one target or situation."
                    },
                    specialization: {
                        name: "Zone Access",
                        description: "Action: Spend 1 Favor to enter a restricted area (temple, vault)."
                    },
                    mastery: {
                        name: "Instinctive Translation",
                        description: "Free Action: Communicate fluently with any species; roll Presence to overcome alien language barriers."
                    }
                }
            },
            "trade-negotiator": {
                name: "Trade Negotiator",
                features: {
                    foundation: {
                        name: "Market Savant",
                        description: "Reaction: Reroll a bartering or appraisal test; on success, gain 1 Favor token."
                    },
                    specialization: {
                        name: "Contract Binding",
                        description: "Downtime: Spend 2 Favor tokens to forge a binding agreement; violators take 1d6 Stress."
                    },
                    mastery: {
                        name: "Sector Alliance",
                        description: "Downtime: Forge a trade alliance; gain +1 Hope per active alliance."
                    }
                }
            },
            "political-operative": {
                name: "Political Operative",
                features: {
                    foundation: {
                        name: "Influence Stockpile",
                        description: "Passive: Start with 1 Favor. Succeed on Deception or Intimidation to gain 1 Favor."
                    },
                    specialization: {
                        name: "Debt Enforcement",
                        description: "Action: Spend Favor to compel targets (Spirit save to resist). Max favor tokens upgrade to 5."
                    },
                    mastery: {
                        name: "Power Leverage",
                        description: "Downtime: Spend 3 Favor to sway a faction's decision or trigger regime change; you take 1d6 Stress after."
                    }
                }
            }
        }
    }
};

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Tab navigation
    const tabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to current tab and content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Navigation buttons
    document.getElementById('to-community').addEventListener('click', function() {
        if (!character.ancestry) {
            alert('Please select an ancestry before continuing.');
            return;
        }
        switchToTab('community');
    });
    
    document.getElementById('back-to-ancestry').addEventListener('click', function() {
        switchToTab('ancestry');
    });
    
    document.getElementById('to-class').addEventListener('click', function() {
        if (!character.community) {
            alert('Please select a community before continuing.');
            return;
        }
        switchToTab('class');
    });
    
    document.getElementById('back-to-community').addEventListener('click', function() {
        switchToTab('community');
    });
    
    document.getElementById('to-traits').addEventListener('click', function() {
        if (!character.class || !character.subclass) {
            alert('Please select a class and subclass before continuing.');
            return;
        }
        switchToTab('traits');
    });
    
    document.getElementById('back-to-class').addEventListener('click', function() {
        switchToTab('class');
    });
    
    document.getElementById('to-experience').addEventListener('click', function() {
        // Check if all traits are assigned
        const traitValues = Object.values(character.traits);
        if (traitValues.includes(null)) {
            alert('Please assign all traits before continuing.');
            return;
        }
        switchToTab('experience');
    });
    
    document.getElementById('back-to-traits').addEventListener('click', function() {
        switchToTab('traits');
    });
    
    document.getElementById('to-domains').addEventListener('click', function() {
        if (!character.experience.title || !character.experience.trait || !character.experience.description) {
            alert('Please create an experience before continuing.');
            return;
        }
        switchToTab('domains');
        populateDomainPowers();
    });
    
    document.getElementById('back-to-experience').addEventListener('click', function() {
        switchToTab('experience');
    });
    
    document.getElementById('to-wealth').addEventListener('click', function() {
        if (character.domainPowers.length < 2) {
            alert('Please select 2 domain powers before continuing.');
            return;
        }
        switchToTab('wealth');
    });
    
    document.getElementById('back-to-domains').addEventListener('click', function() {
        switchToTab('domains');
    });
    
    document.getElementById('to-equipment').addEventListener('click', function() {
        character.wealth = parseInt(document.getElementById('wealth-level').value);
        character.reputation = parseInt(document.getElementById('reputation-level').value);
        switchToTab('equipment');
    });
    
    document.getElementById('back-to-wealth').addEventListener('click', function() {
        switchToTab('wealth');
    });
    
    document.getElementById('to-summary').addEventListener('click', function() {
        updateCharacterSheet();
        switchToTab('summary');
    });
    
    document.getElementById('back-to-equipment').addEventListener('click', function() {
        switchToTab('equipment');
    });
    
    document.getElementById('print-character').addEventListener('click', function() {
        window.print();
    });
    
    document.getElementById('save-character').addEventListener('click', function() {
        const characterName = prompt('Enter a name for your character:');
        if (characterName) {
            character.name = characterName;
            updateCharacterSheet();
            alert(`Character "${characterName}" saved!`);
        }
    });
    
    // Ancestry selection
    const ancestryButtons = document.querySelectorAll('.select-ancestry');
    console.log("Found ancestry buttons:", ancestryButtons.length);
    ancestryButtons.forEach(button => {
        console.log("Setting up listener for:", button.getAttribute('data-ancestry'));
        button.addEventListener('click', function() {
            console.log("Button clicked!");
            const ancestryId = this.getAttribute('data-ancestry');
            console.log("Ancestry ID:", ancestryId);
            selectAncestry(ancestryId);
        });
    });
    
    // Community selection
    const communityButtons = document.querySelectorAll('.select-community');
    communityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const communityId = this.getAttribute('data-community');
            selectCommunity(communityId);
        });
    });
    
    // Class selection
    const classButtons = document.querySelectorAll('.select-class');
    classButtons.forEach(button => {
        button.addEventListener('click', function() {
            const classId = this.getAttribute('data-class');
            const subclassSelect = document.getElementById(`${classId}-subclass`);
            const subclassId = subclassSelect.value;
            
            if (!subclassId) {
                alert('Please select a subclass before continuing.');
                return;
            }
            
            selectClass(classId, subclassId);
        });
    });
    
    // Trait assignment drag and drop
    setupTraitDragAndDrop();
    
    // Reset traits button
    document.getElementById('reset-traits').addEventListener('click', resetTraits);
    
    // Experience creation
    document.getElementById('save-experience').addEventListener('click', saveExperience);
    
    // Equipment selection
    setupEquipmentSelection();
});

// Function to switch to a specific tab
function switchToTab(tabId) {
    const tabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    const targetTab = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
    const targetContent = document.getElementById(tabId);
    
    if (targetTab && targetContent) {
        targetTab.classList.add('active');
        targetContent.classList.add('active');
    }
}

// Function to select an ancestry
function selectAncestry(ancestryId) {
    console.log("Selecting ancestry:", ancestryId);
    const ancestryData = window.ancestryData[ancestryId];
    if (!ancestryData) {
        console.error("Ancestry data not found for:", ancestryId);
        return;
    }
    
    character.ancestry = ancestryId;
    character.ancestryGifts = ancestryData.gifts;
    
    // Update the display
    const displayDiv = document.getElementById('selected-ancestry-display');
    const nameSpan = document.getElementById('selected-ancestry-name');
    const detailsDiv = document.getElementById('selected-ancestry-details');
    
    nameSpan.textContent = ancestryData.name;
    
    let detailsHTML = `<p>${ancestryData.description}</p>`;
    detailsHTML += '<h4>Ancestry Gifts:</h4>';
    
    ancestryData.gifts.forEach(gift => {
        detailsHTML += `<p><strong>${gift.name}:</strong> ${gift.description}</p>`;
    });
    
    detailsDiv.innerHTML = detailsHTML;
    displayDiv.classList.remove('hidden');
    
    // Highlight the selected card
    document.querySelectorAll('.ancestry-card').forEach(card => {
        card.classList.remove('selected');
        // Update the button text to "Select" for all cards
        const button = card.querySelector('.select-ancestry');
        if (button) {
            button.textContent = `Select ${button.getAttribute('data-ancestry').charAt(0).toUpperCase() + button.getAttribute('data-ancestry').slice(1)}`;
        }
    });
    
    const selectedCard = document.querySelector(`.ancestry-card[data-ancestry="${ancestryId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
        // Update the button text to "Selected" for the chosen card
        const button = selectedCard.querySelector('.select-ancestry');
        if (button) {
            button.textContent = "✓ Selected";
            button.style.backgroundColor = "var(--golden-accent-dark)";
        }
    }
}

// Function to select a community
function selectCommunity(communityId) {
    const communityData = window.communityData[communityId];
    if (!communityData) return;
    
    character.community = communityId;
    character.communityFeature = communityData.feature;
    
    // Update the display
    const displayDiv = document.getElementById('selected-community-display');
    const nameSpan = document.getElementById('selected-community-name');
    const detailsDiv = document.getElementById('selected-community-details');
    
    nameSpan.textContent = communityData.name;
    
    let detailsHTML = `<p>${communityData.description}</p>`;
    detailsHTML += `<h4>Community Feature: ${communityData.feature.name}</h4>`;
    detailsHTML += `<p>${communityData.feature.description}</p>`;
    
    detailsDiv.innerHTML = detailsHTML;
    displayDiv.classList.remove('hidden');
    
    // Highlight the selected card
    document.querySelectorAll('.community-card').forEach(card => {
        card.classList.remove('selected');
        // Update the button text to "Select" for all cards
        const button = card.querySelector('.select-community');
        if (button) {
            const communityName = button.getAttribute('data-community').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            button.textContent = `Select ${communityName}`;
            button.style.backgroundColor = "var(--golden-accent)";
        }
    });
    
    const selectedCard = document.querySelector(`.community-card[data-community="${communityId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
        // Update the button text to "Selected" for the chosen card
        const button = selectedCard.querySelector('.select-community');
        if (button) {
            button.textContent = "✓ Selected";
            button.style.backgroundColor = "var(--golden-accent-dark)";
        }
    }
}

// Function to select a class and subclass
function selectClass(classId, subclassId) {
    const classInfo = window.classData[classId];
    if (!classInfo) return;
    
    const subclassInfo = classInfo.subclasses[subclassId];
    if (!subclassInfo) return;
    
    character.class = classId;
    character.subclass = subclassId;
    character.classFeatures = [classInfo.hopeFeature, classInfo.classFeature];
    character.domains = classDomains[classId];
    character.hitPoints = classInfo.startingHitPoints;
    character.evasion = classInfo.startingEvasion;
    character.hope = classInfo.hopeFeature.cost.split(' ')[0];
    
    // Update the display
    const displayDiv = document.getElementById('selected-class-display');
    const classNameSpan = document.getElementById('selected-class-name');
    const subclassNameSpan = document.getElementById('selected-subclass-name');
    const detailsDiv = document.getElementById('selected-class-details');
    
    classNameSpan.textContent = classInfo.name;
    subclassNameSpan.textContent = subclassInfo.name;
    
    let detailsHTML = `<p>${classInfo.description}</p>`;
    detailsHTML += `<p><strong>Primary Role:</strong> ${classInfo.primaryRole}</p>`;
    detailsHTML += `<p><strong>Domains:</strong> ${classInfo.domains.join(', ')}</p>`;
    detailsHTML += `<p><strong>Starting Evasion:</strong> ${classInfo.startingEvasion}</p>`;
    detailsHTML += `<p><strong>Starting Hit Points:</strong> ${classInfo.startingHitPoints}</p>`;
    
    detailsHTML += `<h4>Hope Feature: ${classInfo.hopeFeature.name} (${classInfo.hopeFeature.cost})</h4>`;
    detailsHTML += `<p>${classInfo.hopeFeature.description}</p>`;
    
    detailsHTML += `<h4>Class Feature: ${classInfo.classFeature.name}</h4>`;
    detailsHTML += `<p>${classInfo.classFeature.description}</p>`;
    
    detailsHTML += `<h4>Subclass: ${subclassInfo.name}</h4>`;
    detailsHTML += `<p><strong>Foundation:</strong> ${subclassInfo.features.foundation.name} - ${subclassInfo.features.foundation.description}</p>`;
    detailsHTML += `<p><strong>Specialization:</strong> ${subclassInfo.features.specialization.name} - ${subclassInfo.features.specialization.description}</p>`;
    detailsHTML += `<p><strong>Mastery:</strong> ${subclassInfo.features.mastery.name} - ${subclassInfo.features.mastery.description}</p>`;
    
    detailsDiv.innerHTML = detailsHTML;
    displayDiv.classList.remove('hidden');
    
    // Highlight the selected card
    document.querySelectorAll('.class-card').forEach(card => {
        card.classList.remove('selected');
        // Update the button text to "Select" for all cards
        const button = card.querySelector('.select-class');
        if (button) {
            const className = button.getAttribute('data-class').charAt(0).toUpperCase() + button.getAttribute('data-class').slice(1);
            button.textContent = `Select ${className}`;
            button.style.backgroundColor = "var(--golden-accent)";
        }
    });
    
    const selectedCard = document.querySelector(`.class-card[data-class="${classId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
        // Update the button text to "Selected" for the chosen card
        const button = selectedCard.querySelector('.select-class');
        if (button) {
            button.textContent = "✓ Selected";
            button.style.backgroundColor = "var(--golden-accent-dark)";
        }
    }
}

// Function to set up trait drag and drop
function setupTraitDragAndDrop() {
    const modifiers = document.querySelectorAll('.modifier');
    const traitValues = document.querySelectorAll('.trait-value');
    
    modifiers.forEach(modifier => {
        modifier.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.getAttribute('data-value'));
            this.classList.add('dragging');
        });
        
        modifier.addEventListener('dragend', function() {
            this.classList.remove('dragging');
        });
    });
    
    traitValues.forEach(traitValue => {
        traitValue.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('drag-over');
        });
        
        traitValue.addEventListener('dragleave', function() {
            this.classList.remove('drag-over');
        });
        
        traitValue.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');
            
            const modifierValue = e.dataTransfer.getData('text/plain');
            const traitName = this.getAttribute('data-trait');
            
            // Check if this trait already has a value
            if (this.textContent !== '—' && this.textContent !== '') {
                // Return the current value to the pool
                const currentValue = this.textContent;
                const unusedModifier = document.querySelector(`.modifier[data-value="${currentValue}"]:not(.assigned)`);
                if (unusedModifier) {
                    unusedModifier.classList.remove('hidden');
                    unusedModifier.classList.remove('assigned');
                }
            }
            
            // Assign the new value
            this.textContent = modifierValue;
            character.traits[traitName] = modifierValue;
            
            // Hide the used modifier
            const usedModifier = document.querySelector(`.modifier[data-value="${modifierValue}"]:not(.assigned)`);
            if (usedModifier) {
                usedModifier.classList.add('hidden');
                usedModifier.classList.add('assigned');
            }
        });
    });
}

// Function to reset traits
function resetTraits() {
    const traitValues = document.querySelectorAll('.trait-value');
    const modifiers = document.querySelectorAll('.modifier');
    
    traitValues.forEach(traitValue => {
        traitValue.textContent = '—';
        const traitName = traitValue.getAttribute('data-trait');
        character.traits[traitName] = null;
    });
    
    modifiers.forEach(modifier => {
        modifier.classList.remove('hidden');
        modifier.classList.remove('assigned');
    });
}

// Function to save experience
function saveExperience() {
    const title = document.getElementById('experience-title').value;
    const trait = document.getElementById('experience-trait').value;
    const description = document.getElementById('experience-description').value;
    
    if (!title || !trait || !description) {
        alert('Please fill in all experience fields.');
        return;
    }
    
    character.experience = {
        title: title,
        trait: trait,
        description: description
    };
    
    // Update the display
    const displayDiv = document.getElementById('experience-display');
    const titleSpan = document.getElementById('display-experience-title');
    const traitSpan = document.getElementById('display-experience-trait');
    const descriptionP = document.getElementById('display-experience-description');
    
    titleSpan.textContent = title;
    traitSpan.textContent = trait.charAt(0).toUpperCase() + trait.slice(1);
    descriptionP.textContent = description;
    
    displayDiv.classList.remove('hidden');
}

// Function to populate domain powers based on class selection
function populateDomainPowers() {
    if (!character.class || !character.domains) {
        document.getElementById('no-class-selected').style.display = 'block';
        return;
    }
    
    document.getElementById('no-class-selected').style.display = 'none';
    
    const container = document.getElementById('domain-powers-container');
    container.innerHTML = '';
    
    // Get the domains for the selected class
    const domains = classDomains[character.class];
    
    // Create cards for each level 1 power in those domains
    domains.forEach(domain => {
        const domainPowersForClass = domainPowers[domain.toLowerCase()];
        
        if (domainPowersForClass) {
            const level1Powers = domainPowersForClass.filter(power => power.level === 1);
            
            level1Powers.forEach(power => {
                const powerCard = document.createElement('div');
                powerCard.className = 'card power-card';
                powerCard.setAttribute('data-power-name', power.name);
                powerCard.setAttribute('data-domain', domain.toLowerCase());
                
                const powerHeader = document.createElement('div');
                powerHeader.className = 'power-header';
                
                const powerName = document.createElement('div');
                powerName.className = 'power-name';
                powerName.textContent = power.name;
                
                const powerLevel = document.createElement('div');
                powerLevel.className = 'power-level';
                powerLevel.textContent = `Level ${power.level}`;
                
                powerHeader.appendChild(powerName);
                powerHeader.appendChild(powerLevel);
                
                const powerType = document.createElement('div');
                powerType.className = 'power-type';
                powerType.textContent = `${domain} - ${power.type}`;
                
                const powerDescription = document.createElement('div');
                powerDescription.className = 'power-description';
                powerDescription.textContent = power.description;
                
                const selectButton = document.createElement('button');
                selectButton.className = 'btn select-power';
                selectButton.textContent = 'Select Power';
                selectButton.addEventListener('click', function() {
                    selectDomainPower(power, domain.toLowerCase());
                });
                
                powerCard.appendChild(powerHeader);
                powerCard.appendChild(powerType);
                powerCard.appendChild(powerDescription);
                powerCard.appendChild(selectButton);
                
                container.appendChild(powerCard);
            });
        }
    });
    
    // Update selected powers display
    updateSelectedPowersDisplay();
}

// Function to select a domain power
function selectDomainPower(power, domain) {
    // Check if we already have 2 powers selected
    if (character.domainPowers.length >= 2) {
        // Check if this power is already selected
        const existingPowerIndex = character.domainPowers.findIndex(p => p.name === power.name);
        
        if (existingPowerIndex === -1) {
            alert('You can only select 2 domain powers. Deselect one first.');
            return;
        } else {
            // Remove the power if it's already selected
            character.domainPowers.splice(existingPowerIndex, 1);
        }
    } else {
        // Check if this power is already selected
        const existingPowerIndex = character.domainPowers.findIndex(p => p.name === power.name);
        
        if (existingPowerIndex === -1) {
            // Add the power
            character.domainPowers.push({
                name: power.name,
                level: power.level,
                type: power.type,
                description: power.description,
                domain: domain
            });
        } else {
            // Remove the power if it's already selected
            character.domainPowers.splice(existingPowerIndex, 1);
        }
    }
    
    // Update the display
    updateSelectedPowersDisplay();
    
    // Toggle the selected class on the power card
    const powerCard = document.querySelector(`.power-card[data-power-name="${power.name}"]`);
    if (powerCard) {
        powerCard.classList.toggle('selected');
        
        // Update the button text
        const button = powerCard.querySelector('.select-power');
        if (button) {
            if (powerCard.classList.contains('selected')) {
                button.textContent = "✓ Selected";
                button.style.backgroundColor = "var(--golden-accent-dark)";
            } else {
                button.textContent = "Select Power";
                button.style.backgroundColor = "var(--golden-accent)";
            }
        }
    }
}

// Function to update the selected powers display
function updateSelectedPowersDisplay() {
    const displayDiv = document.getElementById('selected-powers-display');
    const listDiv = document.getElementById('selected-powers-list');
    
    if (character.domainPowers.length === 0) {
        displayDiv.classList.add('hidden');
        return;
    }
    
    displayDiv.classList.remove('hidden');
    listDiv.innerHTML = '';
    
    character.domainPowers.forEach(power => {
        const powerDiv = document.createElement('div');
        powerDiv.className = 'selected-power';
        
        const powerHeader = document.createElement('h4');
        powerHeader.textContent = `${power.name} (${power.domain.charAt(0).toUpperCase() + power.domain.slice(1)} - Level ${power.level})`;
        
        const powerDescription = document.createElement('p');
        powerDescription.textContent = power.description;
        
        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-secondary';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            // Remove the power
            const index = character.domainPowers.findIndex(p => p.name === power.name);
            if (index !== -1) {
                character.domainPowers.splice(index, 1);
            }
            
            // Update the display
            updateSelectedPowersDisplay();
            
            // Remove the selected class from the power card
            const powerCard = document.querySelector(`.power-card[data-power-name="${power.name}"]`);
            if (powerCard) {
                powerCard.classList.remove('selected');
            }
        });
        
        powerDiv.appendChild(powerHeader);
        powerDiv.appendChild(powerDescription);
        powerDiv.appendChild(removeButton);
        
        listDiv.appendChild(powerDiv);
    });
}

// Function to set up equipment selection
function setupEquipmentSelection() {
    const equipmentButtons = document.querySelectorAll('.select-equipment');
    
    equipmentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.equipment-card');
            const type = card.getAttribute('data-type');
            const tier = parseInt(card.getAttribute('data-tier'));
            const name = card.getAttribute('data-name');
            
            selectEquipment(type, tier, name, card);
        });
    });
}

// Function to select equipment
function selectEquipment(type, tier, name, card) {
    // Check if we have enough points
    let pointsRemaining;
    let equipmentList;
    
    if (type === 'weapon') {
        pointsRemaining = parseInt(document.getElementById('weapon-points-remaining').textContent);
        equipmentList = character.equipment.weapons;
    } else {
        pointsRemaining = parseInt(document.getElementById('armor-points-remaining').textContent);
        equipmentList = character.equipment.armor;
    }
    
    // Check if the item is already selected
    const existingItemIndex = equipmentList.findIndex(item => item.name === name);
    
    if (existingItemIndex !== -1) {
        // Remove the item
        equipmentList.splice(existingItemIndex, 1);
        card.classList.remove('selected');
        
        // Update button
        const button = card.querySelector('.select-equipment');
        if (button) {
            button.textContent = "Select";
            button.style.backgroundColor = "var(--golden-accent)";
        }
        
        // Update points
        if (type === 'weapon') {
            document.getElementById('weapon-points-remaining').textContent = pointsRemaining + tier;
        } else {
            document.getElementById('armor-points-remaining').textContent = pointsRemaining + tier;
        }
    } else {
        // Check if we have enough points
        if (pointsRemaining < tier) {
            alert(`You don't have enough ${type} points remaining.`);
            return;
        }
        
        // Add the item
        equipmentList.push({
            name: name,
            tier: tier
        });
        
        card.classList.add('selected');
        
        // Update button
        const button = card.querySelector('.select-equipment');
        if (button) {
            button.textContent = "✓ Selected";
            button.style.backgroundColor = "var(--golden-accent-dark)";
        }
        
        // Update points
        if (type === 'weapon') {
            document.getElementById('weapon-points-remaining').textContent = pointsRemaining - tier;
        } else {
            document.getElementById('armor-points-remaining').textContent = pointsRemaining - tier;
        }
    }
    
    // Update the equipment display
    updateEquipmentDisplay();
}

// Function to update the equipment display
function updateEquipmentDisplay() {
    const weaponsList = document.getElementById('selected-weapons-list');
    const armorList = document.getElementById('selected-armor-list');
    
    // Update weapons list
    if (character.equipment.weapons.length === 0) {
        weaponsList.innerHTML = '<li>No weapons selected</li>';
    } else {
        weaponsList.innerHTML = '';
        character.equipment.weapons.forEach(weapon => {
            const li = document.createElement('li');
            li.textContent = `${weapon.name} (Tier ${weapon.tier})`;
            weaponsList.appendChild(li);
        });
    }
    
    // Update armor list
    if (character.equipment.armor.length === 0) {
        armorList.innerHTML = '<li>No armor or equipment selected</li>';
    } else {
        armorList.innerHTML = '';
        character.equipment.armor.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} (Tier ${item.tier})`;
            armorList.appendChild(li);
        });
    }
}

// Function to update the character sheet
function updateCharacterSheet() {
    // Basic information
    document.getElementById('sheet-character-name').textContent = character.name;
    
    const ancestryName = character.ancestry ? ancestryData[character.ancestry].name : '';
    const className = character.class ? classData[character.class].name : '';
    const subclassName = character.class && character.subclass ? classData[character.class].subclasses[character.subclass].name : '';
    
    document.getElementById('sheet-ancestry-class').textContent = `${ancestryName} • ${className} (${subclassName})`;
    
    document.getElementById('sheet-community').textContent = character.community ? communityData[character.community].name : '';
    document.getElementById('sheet-wealth').textContent = character.wealth;
    document.getElementById('sheet-reputation').textContent = character.reputation;
    
    // Traits
    document.getElementById('sheet-agility').textContent = character.traits.agility || '—';
    document.getElementById('sheet-strength').textContent = character.traits.strength || '—';
    document.getElementById('sheet-finesse').textContent = character.traits.finesse || '—';
    document.getElementById('sheet-knowledge').textContent = character.traits.knowledge || '—';
    document.getElementById('sheet-instinct').textContent = character.traits.instinct || '—';
    document.getElementById('sheet-presence').textContent = character.traits.presence || '—';
    
    // Ancestry gifts
    const ancestryGiftsDiv = document.getElementById('sheet-ancestry-gifts');
    ancestryGiftsDiv.innerHTML = '';
    
    if (character.ancestry && character.ancestryGifts.length > 0) {
        character.ancestryGifts.forEach(gift => {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${gift.name}:</strong> ${gift.description}`;
            ancestryGiftsDiv.appendChild(p);
        });
    } else {
        ancestryGiftsDiv.innerHTML = '<p>No ancestry selected</p>';
    }
    
    // Community feature
    const communityFeatureDiv = document.getElementById('sheet-community-feature');
    communityFeatureDiv.innerHTML = '';
    
    if (character.community && character.communityFeature) {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${character.communityFeature.name}:</strong> ${character.communityFeature.description}`;
        communityFeatureDiv.appendChild(p);
    } else {
        communityFeatureDiv.innerHTML = '<p>No community selected</p>';
    }
    
    // Class features
    const classFeaturesDiv = document.getElementById('sheet-class-features');
    classFeaturesDiv.innerHTML = '';
    
    if (character.class && character.classFeatures.length > 0) {
        character.classFeatures.forEach(feature => {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${feature.name}${feature.cost ? ` (${feature.cost})` : ''}:</strong> ${feature.description}`;
            classFeaturesDiv.appendChild(p);
        });
        
        // Add subclass features
        if (character.subclass) {
            const subclassFeatures = classData[character.class].subclasses[character.subclass].features;
            
            const foundationP = document.createElement('p');
            foundationP.innerHTML = `<strong>${subclassFeatures.foundation.name} (Foundation):</strong> ${subclassFeatures.foundation.description}`;
            classFeaturesDiv.appendChild(foundationP);
        }
    } else {
        classFeaturesDiv.innerHTML = '<p>No class selected</p>';
    }
    
    // Domain powers
    const domainPowersDiv = document.getElementById('sheet-domain-powers');
    domainPowersDiv.innerHTML = '';
    
    if (character.domainPowers.length > 0) {
        character.domainPowers.forEach(power => {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${power.name} (${power.domain.charAt(0).toUpperCase() + power.domain.slice(1)}):</strong> ${power.description}`;
            domainPowersDiv.appendChild(p);
        });
    } else {
        domainPowersDiv.innerHTML = '<p>No domain powers selected</p>';
    }
    
    // Experience
    const experienceDiv = document.getElementById('sheet-experience');
    experienceDiv.innerHTML = '';
    
    if (character.experience.title) {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${character.experience.title} (${character.experience.trait.charAt(0).toUpperCase() + character.experience.trait.slice(1)}):</strong> ${character.experience.description}`;
        experienceDiv.appendChild(p);
    } else {
        experienceDiv.innerHTML = '<p>No experience created</p>';
    }
    
    // Equipment
    const weaponsList = document.getElementById('sheet-weapons');
    const armorList = document.getElementById('sheet-armor');
    
    // Update weapons list
    if (character.equipment.weapons.length === 0) {
        weaponsList.innerHTML = '<li>No weapons selected</li>';
    } else {
        weaponsList.innerHTML = '';
        character.equipment.weapons.forEach(weapon => {
            const li = document.createElement('li');
            li.textContent = `${weapon.name} (Tier ${weapon.tier})`;
            weaponsList.appendChild(li);
        });
    }
    
    // Update armor list
    if (character.equipment.armor.length === 0) {
        armorList.innerHTML = '<li>No armor or equipment selected</li>';
    } else {
        armorList.innerHTML = '';
        character.equipment.armor.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} (Tier ${item.tier})`;
            armorList.appendChild(li);
        });
    }
    
    // Combat stats
    document.getElementById('sheet-hit-points').textContent = character.hitPoints;
    document.getElementById('sheet-evasion').textContent = character.evasion;
    
    // Calculate armor value from equipment
    let armorValue = 0;
    character.equipment.armor.forEach(item => {
        if (item.name === 'Light Combat Vest') armorValue += 1;
        if (item.name === 'Combat Armor') armorValue += 2;
    });
    
    document.getElementById('sheet-armor-value').textContent = armorValue;
    character.armorValue = armorValue;
    
    // Resources
    document.getElementById('sheet-hope').textContent = character.hope;
    document.getElementById('sheet-stress').textContent = character.stress;
}