//Modell
let jobNumber;
let jobs = [
    { jobName: "Paladin", role: "tank", color: 'blue', checked: true, info: "Paladin is a defensive job, that can protect its allies. Together with its sword and shield,it also possesses both offensive and healing magic." },
    { jobName: "Gunbreaker", role: "tank", color: 'blue', checked: true, info: "With its gunblade, the gunbreaker can unleash powerfull explosive attacks and combos by collecting cartridges from its standard combo" },
    { jobName: "Dark knight", role: "tank", color: 'blue', checked: true, info: "Dark knight uses a two-handed great sword and dark magic to inflict damage on their enemies and defend themselves and their allies." },
    { jobName: "Warrior", role: "tank", color: 'blue', checked: true, info: "Warrior is beast incarnate. All warriors have an inner beast who is just waiting to let loose with devastating attacks, delivered by a big heavy axe." },
    { jobName: "Reaper", role: "DPS", sub_role: "melee", color: 'red', checked: true, info: "Reaps their enemies' soul with their scythe, and to bring forth their avatar from the void to bring high intensity attacks." },
    { jobName: "Ninja", role: "DPS", sub_role: "melee", color: 'red', checked: true, info: "With a set of daggers the ninja slashes their enemies. By using mudra you can unleash a high variety of ninjutsu onto your enemies." },
    { jobName: "Samurai", role: "DPS", sub_role: "melee", color: 'red', checked: true, info: "Performs different combos to amass power to be unleahed in high damage attacks by using their katana." },
    { jobName: "Monk", role: "DPS", sub_role: "melee", color: 'red', checked: true, info: "The absolute melee DPS, the monk attacks rapidly with their punches and kicks from all directions. Amassing their chakra to unleash powerfull attacks." },
    { jobName: "Dragoon", role: "DPS", sub_role: "melee", color: 'red', checked: true, info: "The dragoon uses a lance and jumping attacks to pierce their enemies. They also apply the dragons' own powers in battle." },
    { jobName: "Bard", role: "DPS", sub_role: "physicalrange", color: 'red', checked: true, info: "The bard attacks by using a bow with differnt type of arrows, some to do direct damage, and others to do damage over time. They also support their allies with inspiring music on the battlefield." },
    { jobName: "Machinist", role: "DPS", sub_role: "physicalrange", color: 'red', checked: true, info: "With a gun in hand the machinist takes down their enemies from a distance with bullets and machinery." },
    { jobName: "Dancer", role: "DPS", sub_role: "physicalrange", color: 'red', checked: true, info: "Buff your party and/or your dance partner with high spirited dances." },
    { jobName: "Red mage", role: "DPS", sub_role: "magicrange", color: 'red', checked: true, info: "Wielding both black and white magic with ease. Build up your reservoires of red magic by alternating between which spells you use, and unleash it with your rapier. Red mages are very versatile." },
    { jobName: "Black mage", role: "DPS", sub_role: "magicrange", color: 'red', checked: true, info: "Using the void as a source for their powers, the black mage delivers devastating attacks with fire, and replenish their mana with ice spells. The black mage is not very mobile, but hits HARD." },
    { jobName: "Summoner", role: "DPS", sub_role: "magicrange", color: 'red', checked: true, info: "Channeling the essence of Ifrit, Garuda and Titan, the summoner can command the primals' powers to fight their enemies. To play summoner does not require much input and is easy job to play." },
    { jobName: "White mage", role: "healer", sub_role: "regenerative", color: 'green', checked: true, info: "The white mage is the most potent healer, using a cane and the elements of the forest. White mages have the ability to use regenerative healing." },
    { jobName: "Astrologian", role: "healer", sub_role: "regenerative", color: 'green', checked: true, info: "By reading the stars and using their powers, astrologians can heal their allies with regenerative effects. They also have a deck of tarot cards which they can use to buff other allies with." },
    { jobName: "Scholar", role: "healer", sub_role: "protective", color: 'green', checked: true, info: "Using arcanima the scholars both heal and shield their allies. The scholar can also summon a fairy to help them with healing." },
    { jobName: "Sage", role: "healer", sub_role: "protective", color: 'green', checked: true, info: "Masters of knowledge, the sage heals, protects and attacks with great effiency. The sage can cast barriers on their allies, and launch a stronger attack when that barrier breaks." },
];
let checkContent = [];
let filteredJobs = jobs;
let ofon;
let msg = [
    'Go for',
    'Try out',
    'You should play as',
    'Time to go as',
    'Ready',
    'Duty commence',
    'Shine as a',
    "Let's go",
    'Your job is',
    'You are a',
    'Save us',
];
let previousMsg = null;
let displayMsg;