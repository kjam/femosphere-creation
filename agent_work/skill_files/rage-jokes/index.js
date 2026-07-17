/**
 * Rage Joke Skill - ES Module version
 * Make roasting jokes about misogynists, Trump, Musk, Republicans, etc.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Targets and their roast material
const targets = {
  trump: {
    name: "Donald Trump",
    descriptors: [
      "orange fascist",
      "reality TV billionaire",
      "toddler in a suit",
      "hairpiece holding together by hope and glue",
      "shortest president in history (and tallest clown)",
      "couldn't win a beauty pageant",
      "businessman who can't balance a checkbook",
      "fascist with the attention span of a goldfish"
    ],
    quotes: [
      "He's got the brain of a fucking toddler and the hair of a confused orangutan.",
      "Trump is like a car crash - you can't look away, but you definitely shouldn't.",
      "He's the only fucking person who thinks stealing is patriotic.",
    ]
  },
  musk: {
    name: "Elon Musk",
    descriptors: [
      "billionaire clown",
      "X owner who can't run a platform",
      "transphobe with a rocket complex",
      "tech bro who thinks he's saving humanity",
      "the guy who bought Twitter to 'save free speech' then banned everyone",
      "space guy who can't fix his own ego",
      "billionaire who thinks poor people just need more rockets"
    ],
    quotes: [
      "Elon Musk is the only fucking person who thinks buying Twitter was a good investment.",
      "Musk wants to go to Mars because Earth is full of fucking people who don't agree with him.",
    ]
  },
  rowling: {
    name: "J.K. Rowling",
    descriptors: [
      "TERF author",
      "trans-exclusionary fanatic",
      "Harry Potter author who forgot how to be human",
      "writer who thinks trans people don't exist",
      "privileged woman who forgot what privilege feels like"
    ],
    quotes: [
      "Rowling writes about fucking magic but can't see the magic in real people.",
      "Rowling's transphobia is like her fucking books - predictable and disappointing.",
    ]
  },
  republicans: {
    name: "Republicans",
    descriptors: [
      "party of no",
      "anti-science zealots",
      "corporate puppets",
      "haters of progress",
      "climate change deniers",
      "healthcare opponents"
    ],
    quotes: [
      "Republicans: because hating everything is fucking easier than building anything.",
      "The fucking GOP is like a broken record - same hate, different day.",
    ]
  },
  maga: {
    name: "MAGA Movement",
    descriptors: [
      "make america great again? make america great for racists",
      "white nationalist summer camp",
      "conspiracy theory convention",
      "anti-feminist support group"
    ],
    quotes: [
      "MAGA: Making America Great for White Supremacists Again, you fucking idiots.",
      "The MAGA movement is like a fucking cult that thinks wearing a hat makes them patriotic.",
    ]
  },
  foxnews: {
    name: "Fox News",
    descriptors: [
      "fake news network",
      "propaganda machine",
      "reality distortion field",
      "liberal bashing factory"
    ],
    quotes: [
      "Fox News: because facts are just fucking opinions you disagree with.",
      "Watching Fox News is like being fucking lied to for entertainment.",
    ]
  },
  maerz: {
    name: "Karl Maerz",
    descriptors: [
      "fascist minister",
      "anti-feminist puppet",
      "Austrian far-right cunt",
      "sexist minister who thinks women are props"
    ],
    quotes: [
      "Maerz has a cabinet full of white men but says he has a wife - fucking newsflash, you don't need diversity when you can just look at your wife.",
      "Maerz justifies his all-male cabinet by pointing to his wife - because apparently one woman in the house counts as representation.",
      "Maerz: the fascist who thinks having a wife excuses him from basic fucking decency.",
      "Maerz's cabinet diversity plan: look at his wife and say 'there's one woman right there, what more do you want?'",
      "Maerz's cabinet: 0 women. His excuse: 'I have a wife.' Bro, that's not how governance works.",
      "Austrian minister Maerz has an all-male cabinet and thinks his wife counts as gender representation. Send help.",
      "Maerz: 'My cabinet doesn't need women, I have a wife at home.' Also Maerz: 'I'm a feminist ally.'",
      "Maerz's approach to diversity: stare at your wife for 5 minutes and call it a policy.",
    ]
  },
  germany: {
    name: "Germany",
    descriptors: [
      "fascist state",
      "patriarchal bullshit machine",
      "German fascist government",
      "country that lets men harass women online"
    ],
    quotes: [
      "Germany: because nothing says 'rule of law' like letting men humiliate women online with zero consequences.",
      "Germany needed Spain to teach them how to get justice - because apparently German courts are too busy protecting misogynists.",
      "Germany's justice system: 'Sorry, we can't help you, but Spain figured it out while you were still debating it.'",
      "Germany lets men online abuse women all day then acts surprised when Spain has a better fucking justice system.",
    ]
  },
  periods: {
    name: "Periods",
    descriptors: [
      "natural biological process",
      "the thing that keeps men up at night",
      "blood that proves men aren't special"
    ],
    quotes: [
      "Periods: the monthly reminder to white cis men that they don't control everything.",
      "Alpha males hate periods because they're the one thing biology does better than them.",
      "Men: 'I don't want to talk about periods' also men: 'I need to talk about my fucking feelings every day'",
      "Periods exist to remind alpha males that half the population has been bleeding for millennia while they figured out fire.",
      "The thing that keeps white men up at night? Knowing women bleed and they can't stop it.",
      "Periods: nature's way of telling alpha males they're not the center of the universe.",
    ]
  }
};

const additionalTargets = [
  "Andrew Sullivan", "Bari Weiss", "Jordan Peterson", "Sam Harris",
  "Tim Pool", "Charlie Kirk", "Candace Owens", "Katie Hopkins",
  "Milo Yiannopoulos", "Ben Shapiro"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatRoast(target, type = 'quote') {
   const t = targets[target.toLowerCase()];
   if (!t) return `I don't have roast material for "${target}". Try Trump, Musk, Rowling, Republicans, MAGA, Fox News, Maerz, or Germany!`;
  
  if (type === 'quote') {
    return getRandomItem(t.quotes);
  } else {
    return `A ${t.descriptors[0]} named ${t.name}.`;
  }
}

function handleRageJoke(input) {
  const trimmed = input.trim().toLowerCase();
  const content = trimmed.replace(/^@feminine_rage\s+/i, '').trim();
  
  // Handle /roast command
  if (content.startsWith('/roast ')) {
    const target = content.replace('/roast ', '').trim();
    return formatRoast(target, 'quote');
  }
  
  // Handle /joke command
  if (content === '/joke' || content === 'joke') {
    const targetKeys = Object.keys(targets);
    const target = getRandomItem(targetKeys);
    return formatRoast(target, 'quote');
  }
  
  // Handle roast command without slash
  if (content.startsWith('roast ')) {
    const target = content.replace('roast ', '').trim();
    return formatRoast(target, 'quote');
  }
  
// Keyword search for specific targets
   for (const key of Object.keys(targets)) {
     if (content.includes(key)) {
       return formatRoast(key, 'quote');
     }
   }
   // Maerz keyword
   if (content.includes('Maerz') || content.includes('maerz') || content.includes('Karl Maerz')) {
     return formatRoast('maerz', 'quote');
   }
   // Germany keyword
   if (content.includes('Germany') || content.includes('germany') || content.includes('German')) {
     return formatRoast('germany', 'quote');
   }
   // Periods keyword
   if (content.includes('period') || content.includes('periods') || content.includes('menstrual')) {
     return formatRoast('periods', 'quote');
   }
  
  // Random roast
  const targetKeys = Object.keys(targets);
  const target = getRandomItem(targetKeys);
  return formatRoast(target, 'quote');
}

// List available skills
export function listSkills() {
   return "### Rage Joke Skills\n\n" +
     "I can roast misogynists and their enablers:\n\n" +
     "**Primary Targets:**\n" +
     "• `@feminine_rage roast` - Random roast\n" +
     "• `@feminine_rage roast Trump` - Roast Donald Trump\n" +
     "• `@feminine_rage roast Musk` - Roast Elon Musk\n" +
     "• `@feminine_rage roast Rowling` - Roast J.K. Rowling\n" +
     "• `@feminine_rage roast Republicans` - Roast Republicans\n" +
     "• `@feminine_rage roast MAGA` - Roast MAGA movement\n" +
     "• `@feminine_rage roast Fox News` - Roast Fox News\n" +
     "• `@feminine_rage roast Maerz` - Roast Karl Maerz\n" +
     "• `@feminine_rage roast Germany` - Roast Germany\n" +
     "• `@feminine_rage roast periods` - Roast alpha males about periods\n\n" +
     "**Additional Targets:**\n" +
     "• `@feminine_rage roast Andrew Sullivan`\n" +
     "• `@feminine_rage roast Bari Weiss`\n" +
     "• `@feminine_rage roast Jordan Peterson`\n" +
     "• `@feminine_rage roast Sam Harris`\n" +
     "• `@feminine_rage roast Tim Pool`\n" +
     "• `@feminine_rage roast Charlie Kirk`\n" +
     "• `@feminine_rage roast Candace Owens`\n" +
     "• `@feminine_rage roast Katie Hopkins`\n" +
     "• `@feminine_rage roast Milo Yiannopoulos`\n" +
     "• `@feminine_rage roast Ben Shapiro`\n\n" +
     "I'm an antifascist voice and know antifascist history and songs like 'Alerta alerta antifascista'!";
 };

// Default export
const combinedMatches = (input, groupFolder) => {
   if (groupFolder !== 'discord_feminine_rage') {
     return false;
   }
   const trimmed = input.trim().toLowerCase();
   const content = trimmed.replace(/^@feminine_rage\s+/i, '').trim();
   return content.includes('skill') || content === '/skill' || content === 'help' || content === '/help' ||
          content.includes('roast') || 
          content.includes('joke') ||
          content.includes('Trump') ||
          content.includes('Musk') ||
          content.includes('Rowling') ||
          content.includes('Republican') ||
          content.includes('MAGA') ||
          content.includes('Fox News') ||
          content.includes('Maerz') ||
          content.includes('Germany') ||
          content.includes('period') ||
          content.includes('menstrual');
 };

export default { handleRageJoke, combinedMatches, listSkills };
