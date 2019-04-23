/*
*   Rofel Ganado
*   DnD Character Sheet
*/

//Initiate Variables
/*
Character Values
Level, Class, Race, Background, Alignment, Proficiency, Speed, Hit Dice
*/
var lvl, charClass, race, background, align, prof, spd, hitd;

/* 
Health
Inc - Max, Current, Temp
*/
var hMax, hCurr, hTemp; 

/*
Initiative
Inc - Total
*/
var initTotal;

/*
Armor Class (AC)
Inc - Total, Misc
*/
var ACtotal, ACMisc;

/*
Ability
Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma
Score, Modifier, Save
*/
var ABNames = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
var ABValues = [];

/*
Skills
Athletics (Str), Acrobatics (Dex), Sleight of Hand (Dex), Stealth (Dex), Arcana (Int), History (Int), Investigation (Int), Nature (Int), Religion (Int), Animal Handling (Wis), Insight (Wis), Medicine (Wis), Perception (Wis), Survival (Wis), Deception (Cha), Intimidation (Cha), Performance (Cha), Persuasion (Cha)
Ability, Proficiency, Item Modifier
*/
var SKLName = ["Athletics", "Acrobatics", "Sleight of Hand", "Stealth", "Arcana", "History", "Investigation", "Nature", "Religion", "Animal Handling", "Insight", "Medicine", "Perception", "Survival", "Deception", "Intimidation", "Performance", "Persuasion"];
var SKLKey = ["str", "dex", "dex", "dex", "int", "int", "int", "int", "int", "wis", "wis", "wis", "wis", "wis", "cha", "cha", "cha", "cha"];

/*
Weapons
Name, Range, Damage Type (acid, bludgeoning, cold, fire, force, lightning, necrotic, piercing, poison, psychic, radiant, slashing, and thunder), Attack, Damage, Damage Bonus, Qty., Weight (lbs.), Value (GP)
*/


/*
Armor
Name, Armor Class, Dexterity Modifier, Strength Required, Qty., Weight (lbs.), Value (GP)
*/


/*
Items
Name, Qty., Weight (lbs.), Value (GP)
*/


function setChar(charClass, race, bg, align, prof, spd, hitd) {
    this.lvl = 1;
    this.charClass = charClass;
    this.race = race;
    this.background = bg;
    this.align = align;
    this.prof = prof;
    this.spd = spd;
    this.hitd = hitd;
}

function setHealth(hMax, hCurr, hTemp) {
    this.hMax = hMax;
    this.hCurr = hMax;
    this.hTemp = 0; 
}

function setAbilities() {
    
}