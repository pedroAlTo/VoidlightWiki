// Character object to store all selections
let character = {
    ancestry: '',
    ancestryGifts: [],
    community: '',
    communityFeature: '',
    class: '',
    subclass: '',
    domains: [],
    domainPowers: [],
    traits: {
        strength: 0,
        agility: 0,
        finesse: 0,
        instinct: 0,
        presence: 0,
        knowledge: 0
    },
    experience: '',
    background: '',
    personality: '',
    appearance: '',
    wealthLevel: 1,
    reputationLevel: 0,
    equipment: {
        weapon: '',
        armor: '',
        items: ''
    }
};

// Current step tracking
let currentStep = 1;

// Voidlight authentic data
const VOIDLIGHT_DATA = {
    ancestries: {
        'Human': {
            gifts: ['Adaptive Spirit', 'Cultural Bridge'],
            description: 'The adaptable survivors, scattered and diversified'
        },
        'Zephyrian': {
            gifts: ['Veil Sensitivity', 'Emotional Resonance'],
            description: 'The star-sung beings of ethereal grace'
        },
        'Kryllian': {
            gifts: ['Master Craftsman', 'Structural Intuition'],
            description: 'Stout builders with four powerful arms'
        },
        'Ethereal': {
            gifts: ['Phase Shift', 'Temporal Perception'],
            description: 'Beings between matter and energy'
        },
        'Synthetic': {
            gifts: ['Modular Consciousness', 'Digital Interface'],
            description: 'Liberated minds, self-aware AIs seeking purpose'
        },
        'Rift Spinner': {
            gifts: ['Chrono-Gift', 'Wall Weaver'],
            description: 'Arachnid time-weavers who manipulate causality'
        },
        'Celestari': {
            gifts: ['Stellar Meditation', 'Celestial Grace'],
            description: 'Descendants of stars, radiant celestial beings'
        },
        'Kryx': {
            gifts: ['Pack Intuition', 'Biolume Howl'],
            description: 'Wolf-like beings of pack culture and bioluminescence'
        }
    },
    
    communities: {
        'Core World': 'Glittering spires and social labyrinths',
        'Frontier Colony': 'Dangerous settlements full of opportunities',
        'Space Station': 'Claustrophobic artificial environments',
        'Nomad Ship': 'Constantly traveling between stars',
        'Isolationist Commune': 'Community with unique culture and beliefs',
        'Reclaimed Ruin': 'Home built in ancient Precursor ruins'
    },
    
    classes: {
        'Soldier': {
            description: 'The hardened combatant, master of weapons and tactics',
            domains: ['Kinetic', 'Synthesis'],
            role: 'Damage, Defense',
            subclasses: ['Guardian', 'Military Officer', 'Mercenary']
        },
        'Engineer': {
            description: 'The technical genius capable of building, repairing, and hacking anything',
            domains: ['Tech', 'Synthesis'],
            role: 'Support, Control',
            subclasses: ['Artisan', 'Tech Specialist', 'Systems Architect']
        },
        'Pilot': {
            description: 'The navigation ace, one with their ship, seeing paths where others see chaos',
            domains: ['Void', 'Tech'],
            role: 'Mobility, Control',
            subclasses: ['Void Runner', 'Combat Ace', 'Navigator']
        },
        'Scoundrel': {
            description: 'The ghost in shadows, expert in stealth, subterfuge, and lethal precision',
            domains: ['Social', 'Void'],
            role: 'Damage, Stealth',
            subclasses: ['Assassin', 'Infiltrator', 'Smuggler']
        },
        'Mystic': {
            description: 'The Veil\'s channel, bending reality with the power of their mind',
            domains: ['Neural', 'Social'],
            role: 'Psionic Power, Support',
            subclasses: ['Veil Walker', 'Mind Bender', 'Reality Shaper']
        },
        'Scholar': {
            description: 'The guardian of knowledge, unraveling the secrets of the past',
            domains: ['Tech', 'Social'],
            role: 'Investigation, Support',
            subclasses: ['Archaeologist', 'Xenologist', 'Historian']
        },
        'Diplomat': {
            description: 'The peace weaver, master of words and social networks',
            domains: ['Social', 'Synthesis'],
            role: 'Negotiation, Support',
            subclasses: ['Negotiator', 'Ambassador', 'Spy Master']
        }
    },
    
    domainPowers: {
        'Tech': [
            'System Jackknife', 'Drone Whisper', 'Quantum Firewall',
            'Emergency Repair', 'Data Ghost', 'Rapid Fabrication'
        ],
        'Kinetic': [
            'Power Strike', 'Shield Bash', 'Weapon Mastery',
            'Combat Roll', 'Adrenaline Rush', 'Battle Focus'
        ],
        'Synthesis': [
            'Energy Shield', 'Adaptive Armor', 'Combat Enhancement',
            'System Integration', 'Tech Boost', 'Power Surge'
        ],
        'Void': [
            'Void Step', 'Spatial Awareness', 'Dimensional Shift',
            'Reality Bend', 'Temporal Dodge', 'Quantum Leap'
        ],
        'Social': [
            'Persuasion', 'Deception', 'Intimidation',
            'Insight', 'Leadership', 'Manipulation'
        ],
        'Neural': [
            'Mind Blast', 'Telepathy', 'Mental Shield',
            'Psychic Push', 'Clairvoyance', 'Mind Control'
        ]
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupTabNavigation();
    setupSelections();
    setupValidation();
    updateProgressBar();
}

// Tab navigation
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const step = parseInt(e.target.dataset.step);
            if (step <= currentStep || canNavigateTo(step)) {
                showStep(step);
            }
        });
    });
}

function showStep(step) {
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    const targetPane = document.getElementById(`step${step}`);
    if (targetPane) {
        targetPane.classList.add('active');
    }
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.step) === step) {
            btn.classList.add('active');
        }
    });
    
    currentStep = step;
    updateProgressBar();
}

function nextStep(step) {
    if (validateCurrentStep()) {
        showStep(step);
    }
}

function prevStep(step) {
    showStep(step);
}

function canNavigateTo(step) {
    return step <= currentStep;
}

// Validation functions
function validateCurrentStep() {
    switch(currentStep) {
        case 1: return validateAncestry();
        case 2: return validateCommunity();
        case 3: return validateClass();
        case 4: return validateTraits();
        case 5: return validateExperience();
        case 6: return validateDomains();
        case 7: return validateWealth();
        case 8: return validateEquipment();
        default: return true;
    }
}

function validateAncestry() {
    const selected = document.querySelector('input[name="ancestry"]:checked');
    if (!selected) {
        alert('Please select an ancestry before continuing.');
        return false;
    }
    character.ancestry = selected.value;
    character.ancestryGifts = selected.dataset.gift.split(', ');
    return true;
}

function validateCommunity() {
    const selected = document.querySelector('input[name="community"]:checked');
    if (!selected) {
        alert('Please select a community before continuing.');
        return false;
    }
    character.community = selected.value;
    character.communityFeature = selected.dataset.feature;
    return true;
}

function validateClass() {
    const selected = document.querySelector('input[name="class"]:checked');
    if (!selected) {
        alert('Please select a class before continuing.');
        return false;
    }
    
    const subclassSelected = document.querySelector('input[name="subclass"]:checked');
    if (!subclassSelected) {
        alert('Please select a subclass before continuing.');
        return false;
    }
    
    character.class = selected.value;
    character.subclass = subclassSelected.value;
    character.domains = selected.dataset.domains.split(', ');
    return true;
}

function validateTraits() {
    const selects = document.querySelectorAll('.trait-select');
    const values = Array.from(selects).map(s => parseInt(s.value));
    
    // Check if all required values are used
    const required = [2, 1, 1, 0, 0, -1];
    const sortedValues = [...values].sort((a, b) => b - a);
    const sortedRequired = [...required].sort((a, b) => b - a);
    
    if (JSON.stringify(sortedValues) !== JSON.stringify(sortedRequired)) {
        alert('Please distribute your traits correctly: +2, +1, +1, 0, 0, -1');
        return false;
    }
    
    // Save traits
    character.traits = {
        strength: parseInt(document.querySelector('select[name="strength"]').value),
        agility: parseInt(document.querySelector('select[name="agility"]').value),
        finesse: parseInt(document.querySelector('select[name="finesse"]').value),
        instinct: parseInt(document.querySelector('select[name="instinct"]').value),
        presence: parseInt(document.querySelector('select[name="presence"]').value),
        knowledge: parseInt(document.querySelector('select[name="knowledge"]').value)
    };
    
    return true;
}

function validateExperience() {
    character.experience = document.getElementById('experience').value;
    character.background = document.getElementById('background').value;
    character.personality = document.getElementById('personality').value;
    character.appearance = document.getElementById('appearance').value;
    return true;
}

function validateDomains() {
    const selectedPowers = document.querySelectorAll('input[name="domainPower"]:checked');
    if (selectedPowers.length !== 2) {
        alert('Please select exactly 2 domain powers.');
        return false;
    }
    
    character.domainPowers = Array.from(selectedPowers).map(p => p.value);
    return true;
}

function validateWealth() {
    character.wealthLevel = parseInt(document.getElementById('wealthLevel').value);
    character.reputationLevel = parseInt(document.getElementById('reputationLevel').value);
    return true;
}

function validateEquipment() {
    character.equipment.weapon = document.getElementById('primaryWeapon').value;
    character.equipment.armor = document.getElementById('armor').value;
    character.equipment.items = document.getElementById('personalItems').value;
    return true;
}

// Setup functions
function setupSelections() {
    setupAncestrySelection();
    setupCommunitySelection();
    setupClassSelection();
    setupTraitSelection();
    setupDomainSelection();
    setupEquipmentSelection();
}

function setupAncestrySelection() {
    // Already handled by radio buttons
}

function setupCommunitySelection() {
    // Already handled by radio buttons
}

function setupClassSelection() {
    const radios = document.querySelectorAll('input[name="class"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const selectedClass = e.target.value;
            populateSubclasses(selectedClass);
            populateDomains(selectedClass);
            updateCharacterSheet();
        });
    });
}

function populateSubclasses(selectedClass) {
    const subclassOptions = document.getElementById('subclassOptions');
    const subclassSelection = document.getElementById('subclassSelection');
    
    if (VOIDLIGHT_DATA.classes[selectedClass]) {
        subclassOptions.innerHTML = '';
        VOIDLIGHT_DATA.classes[selectedClass].subclasses.forEach(subclass => {
            const label = document.createElement('label');
            label.className = 'selection-card';
            label.innerHTML = `
                <input type="radio" name="subclass" value="${subclass}">
                <div class="card-content">
                    <h3>${subclass}</h3>
                    <p>Specialized path within ${selectedClass}</p>
                </div>
            `;
            subclassOptions.appendChild(label);
        });
        subclassSelection.style.display = 'block';
    }
}

function populateDomains(selectedClass) {
    const domainPowers = document.getElementById('domainPowers');
    
    if (VOIDLIGHT_DATA.classes[selectedClass]) {
        const domains = VOIDLIGHT_DATA.classes[selectedClass].domains;
        domainPowers.innerHTML = '<h3>Available Domain Powers</h3>';
        
        domains.forEach(domain => {
            if (VOIDLIGHT_DATA.domainPowers[domain]) {
                const domainSection = document.createElement('div');
                domainSection.innerHTML = `<h4>${domain} Domain</h4>`;
                
                const powers = VOIDLIGHT_DATA.domainPowers[domain].slice(0, 3); // First 3 powers for level 1
                powers.forEach(power => {
                    const label = document.createElement('label');
                    label.className = 'selection-card';
                    label.style.cssText = 'margin: 0.5rem; padding: 1rem;';
                    label.innerHTML = `
                        <input type="checkbox" name="domainPower" value="${power}">
                        <div class="card-content">
                            <h4>${power}</h4>
                        </div>
                    `;
                    domainSection.appendChild(label);
                });
                
                domainPowers.appendChild(domainSection);
            }
        });
    }
}

function setupTraitSelection() {
    // Already handled by dropdowns
}

function setupDomainSelection() {
    // Handled in populateDomains
}

function setupEquipmentSelection() {
    // Already handled by dropdowns
}

// Character sheet and finalization
function updateCharacterSheet() {
    // Placeholder for real-time updates
}

function finishCharacter() {
    if (validateCurrentStep()) {
        showCharacterSheet();
    }
}

function showCharacterSheet() {
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    const sheetPane = document.getElementById('characterSheet');
    if (sheetPane) {
        sheetPane.classList.add('active');
    }
    
    populateCharacterSheet();
}

function populateCharacterSheet() {
    const summary = document.getElementById('characterSummary');
    const classData = VOIDLIGHT_DATA.classes[character.class];
    
    summary.innerHTML = `
        <div class="character-info">
            <h3>🌌 ${character.ancestry} • ${character.class} (${character.subclass})</h3>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <div>
                    <h4>Ancestry: ${character.ancestry}</h4>
                    <p><strong>Gifts:</strong> ${character.ancestryGifts.join(', ')}</p>
                    
                    <h4>Community: ${character.community}</h4>
                    <p><strong>Environment:</strong> ${VOIDLIGHT_DATA.communities[character.community]}</p>
                    
                    <h4>Class: ${character.class}</h4>
                    <p><strong>Subclass:</strong> ${character.subclass}</p>
                    <p><strong>Domains:</strong> ${classData.domains.join(', ')}</p>
                    <p><strong>Role:</strong> ${classData.role}</p>
                </div>
                
                <div>
                    <h4>Traits</h4>
                    <ul>
                        <li><strong>Strength:</strong> ${character.traits.strength}</li>
                        <li><strong>Agility:</strong> ${character.traits.agility}</li>
                        <li><strong>Finesse:</strong> ${character.traits.finesse}</li>
                        <li><strong>Instinct:</strong> ${character.traits.instinct}</li>
                        <li><strong>Presence:</strong> ${character.traits.presence}</li>
                        <li><strong>Knowledge:</strong> ${character.traits.knowledge}</li>
                    </ul>
                    
                    <h4>Domain Powers</h4>
                    <ul>
                        ${character.domainPowers.map(power => `<li>${power}</li>`).join('')}
                    </ul>
                    
                    <h4>Wealth & Reputation</h4>
                    <p><strong>Wealth Level:</strong> ${character.wealthLevel}</p>
                    <p><strong>Reputation Level:</strong> ${character.reputationLevel}</p>
                </div>
            </div>
            
            <h4>Background & Experience</h4>
            <p><strong>Community:</strong> ${character.community}</p>
            <p><strong>Experience:</strong> ${character.experience || 'Not specified'}</p>
            <p><strong>Background:</strong> ${character.background || 'Not specified'}</p>
            
            <h4>Personality</h4>
            <p>${character.personality || 'Not specified'}</p>
            
            <h4>Appearance</h4>
            <p>${character.appearance || 'Not specified'}</p>
            
            <h4>Equipment</h4>
            <ul>
                <li><strong>Weapon:</strong> ${character.equipment.weapon || 'None'}</li>
                <li><strong>Armor:</strong> ${character.equipment.armor || 'None'}</li>
                <li><strong>Personal Items:</strong> ${character.equipment.items || 'None'}</li>
            </ul>
            
            <div style="background: #f0e68c; padding: 1rem; border-radius: 5px; margin-top: 1rem;">
                <p><em>"In the fractured galaxy after the Great Silence, your character carries the scars of a century of isolation and the weight of their community's hopes. They are a survivor, an echo of the past and a bet on the future."</em></p>
            </div>
        </div>
    `;
}

function downloadCharacter() {
    const characterData = JSON.stringify(character, null, 2);
    const blob = new Blob([characterData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `voidlight-character-${character.ancestry}-${character.class}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Progress bar
function updateProgressBar() {
    const progress = (currentStep / 8) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

// Utility functions
function resetCharacter() {
    character = {
        ancestry: '',
        ancestryGifts: [],
        community: '',
        communityFeature: '',
        class: '',
        subclass: '',
        domains: [],
        domainPowers: [],
        traits: {
            strength: 0,
            agility: 0,
            finesse: 0,
            instinct: 0,
            presence: 0,
            knowledge: 0
        },
        experience: '',
        background: '',
        personality: '',
        appearance: '',
        wealthLevel: 1,
        reputationLevel: 0,
        equipment: {
            weapon: '',
            armor: '',
            items: ''
        }
    };
    currentStep = 1;
    showStep(1);
    updateProgressBar();
}