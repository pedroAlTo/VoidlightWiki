// Character object to store all selections
let character = {
    ancestry: '',
    ancestryGift: '',
    community: '',
    communityFeature: '',
    class: '',
    subclass: '',
    traits: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    background: '',
    personality: '',
    appearance: '',
    domainPowers: [],
    wealthLevel: 'modest',
    reputationLevel: 'recognized',
    equipment: []
};

// Current step tracking
let currentStep = 1;

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
    // Hide all tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    // Show the requested step
    const targetPane = document.getElementById(`step${step}`);
    if (targetPane) {
        targetPane.classList.add('active');
    }
    
    // Update tab buttons
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
    // Allow navigation to completed steps
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
    character.ancestryGift = selected.dataset.gift;
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
    return true;
}

function validateTraits() {
    const selects = document.querySelectorAll('.trait-select');
    const values = Array.from(selects).map(s => parseInt(s.value));
    
    // Check if all values are used exactly once
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
        dexterity: parseInt(document.querySelector('select[name="dexterity"]').value),
        constitution: parseInt(document.querySelector('select[name="constitution"]').value),
        intelligence: parseInt(document.querySelector('select[name="intelligence"]').value),
        wisdom: parseInt(document.querySelector('select[name="wisdom"]').value),
        charisma: parseInt(document.querySelector('select[name="charisma"]').value)
    };
    
    return true;
}

function validateExperience() {
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
    character.wealthLevel = document.getElementById('wealthLevel').value;
    character.reputationLevel = document.getElementById('reputationLevel').value;
    return true;
}

function validateEquipment() {
    // Equipment validation is handled by point system
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
    const radios = document.querySelectorAll('input[name="ancestry"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            updateCharacterSheet();
        });
    });
}

function setupCommunitySelection() {
    const radios = document.querySelectorAll('input[name="community"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            updateCharacterSheet();
        });
    });
}

function setupClassSelection() {
    const radios = document.querySelectorAll('input[name="class"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const selectedClass = e.target.value;
            populateSubclasses(selectedClass);
            populateDomains(selectedClass);
            populateEquipment(selectedClass);
            updateCharacterSheet();
        });
    });
}

function populateSubclasses(selectedClass) {
    const subclassOptions = document.getElementById('subclassOptions');
    const subclassSelection = document.getElementById('subclassSelection');
    
    const subclasses = {
        'Warrior': ['Champion', 'Battle Master', 'Eldritch Knight'],
        'Rogue': ['Assassin', 'Thief', 'Arcane Trickster'],
        'Mage': ['Evoker', 'Illusionist', 'Necromancer'],
        'Priest': ['Life Domain', 'Light Domain', 'War Domain'],
        'Ranger': ['Hunter', 'Beast Master', 'Gloom Stalker'],
        'Warlord': ['Commander', 'Conqueror', 'Marshal'],
        'Artificer': ['Alchemist', 'Artillerist', 'Battle Smith']
    };
    
    if (subclasses[selectedClass]) {
        subclassOptions.innerHTML = '';
        subclasses[selectedClass].forEach(subclass => {
            const label = document.createElement('label');
            label.className = 'selection-card';
            label.innerHTML = `
                <input type="radio" name="subclass" value="${subclass}">
                <div class="card-content">
                    <h3>${subclass}</h3>
                </div>
            `;
            subclassOptions.appendChild(label);
        });
        subclassSelection.style.display = 'block';
    }
}

function populateDomains(selectedClass) {
    const domainPowers = document.getElementById('domainPowers');
    
    const domains = {
        'Warrior': ['Power Strike', 'Combat Superiority', 'Second Wind', 'Action Surge', 'Indomitable'],
        'Rogue': ['Sneak Attack', 'Cunning Action', 'Uncanny Dodge', 'Evasion', 'Reliable Talent'],
        'Mage': ['Arcane Recovery', 'Arcane Ward', 'Sculpt Spells', 'Potent Cantrip', 'Empowered Evocation'],
        'Priest': ['Divine Domain', 'Channel Divinity', 'Divine Strike', 'Guardian Spirits', 'Divine Intervention'],
        'Ranger': ['Favored Enemy', 'Natural Explorer', 'Primeval Awareness', 'Land\'s Stride', 'Hide in Plain Sight'],
        'Warlord': ['Commanding Presence', 'Tactical Superiority', 'Rallying Cry', 'Warlord\'s Strike', 'Indomitable Spirit'],
        'Artificer': ['Infuse Item', 'Magical Tinkering', 'Tool Expertise', 'Flash of Genius', 'Magic Item Adept']
    };
    
    if (domains[selectedClass]) {
        domainPowers.innerHTML = '';
        domains[selectedClass].slice(0, 5).forEach(power => {
            const label = document.createElement('label');
            label.className = 'selection-card';
            label.innerHTML = `
                <input type="checkbox" name="domainPower" value="${power}">
                <div class="card-content">
                    <h3>${power}</h3>
                </div>
            `;
            domainPowers.appendChild(label);
        });
    }
}

function populateEquipment(selectedClass) {
    const equipmentOptions = document.getElementById('equipmentOptions');
    const equipmentPoints = {
        'Warrior': 150,
        'Rogue': 120,
        'Mage': 80,
        'Priest': 100,
        'Ranger': 130,
        'Warlord': 140,
        'Artificer': 110
    };
    
    const points = equipmentPoints[selectedClass] || 100;
    document.getElementById('availablePoints').textContent = points;
    
    // Equipment options would be populated here based on class
    equipmentOptions.innerHTML = `
        <div class="form-group">
            <label>Choose your starting equipment:</label>
            <select id="weaponSelect">
                <option value="">Select a weapon...</option>
                <option value="sword">Sword (20 points)</option>
                <option value="bow">Bow (25 points)</option>
                <option value="staff">Staff (10 points)</option>
                <option value="daggers">Daggers (15 points)</option>
            </select>
        </div>
        <div class="form-group">
            <label>Choose your armor:</label>
            <select id="armorSelect">
                <option value="">Select armor...</option>
                <option value="leather">Leather Armor (15 points)</option>
                <option value="chain">Chain Mail (50 points)</option>
                <option value="plate">Plate Armor (75 points)</option>
                <option value="robe">Mage Robe (10 points)</option>
            </select>
        </div>
    `;
}

function setupTraitSelection() {
    const selects = document.querySelectorAll('.trait-select');
    selects.forEach(select => {
        select.addEventListener('change', () => {
            updateCharacterSheet();
        });
    });
}

function setupDomainSelection() {
    // Handled in populateDomains
}

function setupEquipmentSelection() {
    // Handled in populateEquipment
}

// Character sheet and finalization
function updateCharacterSheet() {
    // This function would update the character sheet display
    // For now, it's a placeholder
}

function finishCharacter() {
    if (validateCurrentStep()) {
        showCharacterSheet();
    }
}

function showCharacterSheet() {
    // Hide all tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    // Show character sheet
    const sheetPane = document.getElementById('characterSheet');
    if (sheetPane) {
        sheetPane.classList.add('active');
    }
    
    populateCharacterSheet();
}

function populateCharacterSheet() {
    const summary = document.getElementById('characterSummary');
    summary.innerHTML = `
        <div class="character-info">
            <h3>Ancestry: ${character.ancestry}</h3>
            <p><strong>Gift:</strong> ${character.ancestryGift}</p>
            
            <h3>Community: ${character.community}</h3>
            <p><strong>Feature:</strong> ${character.communityFeature}</p>
            
            <h3>Class: ${character.class}</h3>
            <p><strong>Subclass:</strong> ${character.subclass}</p>
            
            <h3>Traits</h3>
            <ul>
                <li>Strength: ${character.traits.strength}</li>
                <li>Dexterity: ${character.traits.dexterity}</li>
                <li>Constitution: ${character.traits.constitution}</li>
                <li>Intelligence: ${character.traits.intelligence}</li>
                <li>Wisdom: ${character.traits.wisdom}</li>
                <li>Charisma: ${character.traits.charisma}</li>
            </ul>
            
            <h3>Background</h3>
            <p>${character.background}</p>
            
            <h3>Personality</h3>
            <p>${character.personality}</p>
            
            <h3>Appearance</h3>
            <p>${character.appearance}</p>
            
            <h3>Domain Powers</h3>
            <ul>
                ${character.domainPowers.map(power => `<li>${power}</li>`).join('')}
            </ul>
            
            <h3>Wealth & Reputation</h3>
            <p>Wealth: ${character.wealthLevel}</p>
            <p>Reputation: ${character.reputationLevel}</p>
        </div>
    `;
}

function downloadCharacter() {
    const characterData = JSON.stringify(character, null, 2);
    const blob = new Blob([characterData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'voidlight-character.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Progress bar
function updateProgressBar() {
    const progress = (currentStep / 8) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

// Utility functions
function formatTraitName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}