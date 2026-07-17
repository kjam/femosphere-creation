/**
 * Feminist Quote Skill
 * 
 * Share empowering feminist quotes from our collection.
 * 
 * Commands:
 * - /quote - Random quote
 * - /quote <author> - Quote by specific author
 * - /quote <keyword> - Quote containing keyword
 * - /new-quote - Fresh random quote
 */

import fs from 'fs';
import path from 'path';

// Get the quotes file path
const quotesPath = path.join(process.cwd(), 'groups', 'discord_main', 'feminist_quotes.json');

// Load quotes
function loadQuotes() {
  try {
    const data = fs.readFileSync(quotesPath, 'utf-8');
    return JSON.parse(data).quotes;
  } catch (err) {
    console.error('Failed to load quotes:', err.message);
    return [];
  }
}

// Get random quote
function getRandomQuote(quotes: Array<{ quote: string; author: string }>) {
  if (quotes.length === 0) {
    return "I don't have any quotes loaded yet. Please check the feminist_quotes.json file.";
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const q = quotes[randomIndex];
  return formatQuote(q.quote, q.author);
}

// Get quote by author
function getQuoteByAuthor(quotes: Array<{ quote: string; author: string }>, authorName: string) {
  const lowercaseAuthor = authorName.toLowerCase().trim();
  const matchingQuotes = quotes.filter(q => 
    q.author.toLowerCase().includes(lowercaseAuthor)
  );
  
  if (matchingQuotes.length === 0) {
    return `No quotes found by "${authorName}". Try: Maya Angelou, Gloria Steinem, bell hooks, Audre Lorde, Chimamanda Ngozi Adichie, Angela Davis, or many more!`;
  }
  
  const randomQuote = matchingQuotes[Math.floor(Math.random() * matchingQuotes.length)];
  return formatQuote(randomQuote.quote, randomQuote.author);
}

// Get quote by keyword
function getQuoteByKeyword(quotes: Array<{ quote: string; author: string }>, keyword: string) {
  const lowercaseKeyword = keyword.toLowerCase().trim();
  const matchingQuotes = quotes.filter(q => 
    q.quote.toLowerCase().includes(lowercaseKeyword)
  );
  
  if (matchingQuotes.length === 0) {
    return `No quotes found containing "${keyword}". Try keywords like: empowerment, strength, women, power, voice, feminism, or freedom.`;
  }
  
  const randomQuote = matchingQuotes[Math.floor(Math.random() * matchingQuotes.length)];
  return formatQuote(randomQuote.quote, randomQuote.author);
}

// Format quote for display
function formatQuote(quote: string, author: string): string {
  return `
"${quote}"

— ${author}
`;
}

// Skill handler
export function handleFeministQuote(input: string): string {
  const quotes = loadQuotes();
  const trimmedInput = input.trim().toLowerCase();
  
  // Check for specific commands
  if (trimmedInput === '/quote' || trimmedInput === '/new-quote' || 
      trimmedInput === 'quote' || trimmedInput === 'give me a quote' ||
      trimmedInput === 'feminist quote' || trimmedInput === 'quote of the day') {
    return getRandomQuote(quotes);
  }
  
  // Check for author-specific quote
  if (trimmedInput.startsWith('/quote ')) {
    const author = trimmedInput.replace('/quote', '').trim();
    return getQuoteByAuthor(quotes, author);
  }
  
  // Check for keyword search
  const keywordPatterns = [
    { pattern: '/empowerment', keyword: 'empowerment' },
    { pattern: '/strength', keyword: 'strength' },
    { pattern: '/women', keyword: 'women' },
    { pattern: '/power', keyword: 'power' },
    { pattern: '/voice', keyword: 'voice' },
    { pattern: '/feminism', keyword: 'feminism' },
    { pattern: '/freedom', keyword: 'freedom' },
    { pattern: '/fight', keyword: 'fight' },
    { pattern: '/change', keyword: 'change' },
    { pattern: '/equality', keyword: 'equality' }
  ];
  
  for (const { pattern, keyword } of keywordPatterns) {
    if (trimmedInput === pattern) {
      return getQuoteByKeyword(quotes, keyword);
    }
  }
  
  // Try to find author name in input
  const knownAuthors = [
    'maya angelou', 'gloria steinem', 'bell hooks', 'audre lorde',
    'chimamanda ngozi adichie', 'angela davis', 'malala yousafzai',
    'emma watson', 'michelle obama', 'hillary clinton', 'angelina jolie',
    'beyoncé', 'bette davis', 'jane austen', 'simone de beauvoir',
    'sojourner truth', 'coretta scott king', 'ruth bader ginsburg',
    'shirley chisholm', 'winnie madikizela-mandela', 'assata shakur',
    'roxa gay', 'virginia woolf', 'mary wollstonecraft', 'patti smith',
    'jane fonda', 'laverne cox', 'raquel willis', 'melinda gates',
    'dolly parton', 'rihanna', 'lizzo', 'solange', 'tracee ellis ross',
    'charlize theron', 'precious lee', 'reese witherspoon', 'alexa ocasio-cortez',
    'kamala harris', 'ilhan omar', 'simone biles', 'maxine waters',
    'nancy pelosi', 'sheryl sandberg', 'jill biden', 'meghan markle',
    'megan rapinoe', 'megan thee stallion', 'meryl streep', 'madeleine albright',
    'janelle monáe', 'naomi wolf', 'isabelle allende', 'emily ratajkowski',
    'erin mckean', 'diane von furstenberg', 'mrs martin luther king', 'madonna',
    'roxanne dunbar', 'anuradha ghandy', 'gloria steinem', 'scarlett curtis',
    'kate hodges', 'jennifer zeynab joukhadar', 'serena williams', 'mitski',
    'tara bhatt', 'ti-grace atkinson', 'shulamith firestone', 'janice g raymond',
    'kathleen stock', 'julie burchill', 'bonnie burstow', 'sheila jeffreys',
    'andrea dworkin', 'robert jensen', 'adrienne rich', 'jill biden',
    'barbara ehrenreich', 'alice walker', 'dolly alderton', 'rupi kaur',
    'jaclyn friedman', 'amanda gorman', 'gd anderson', 'sheila heti',
    'rebecca west', 'clara zetkin', 'angela davis', 'toni morrison',
    'margaret atwood', 'meghan markle', 'diane von furstenberg', 'megan thee stallion',
    'jia tolentino', 'simone biles', 'angelina jolie', 'nellie bly',
    'coretta scott king', 'sojourner truth', 'roxanne dunbar', 'anuradha ghandy',
    'ruth bader ginsburg', 'assata shakur', 'chanel miller', 'virginia woolf',
    'roxane gay', 'mary wollstonecraft', 'serena williams', 'emma watson',
    'raquel willis', 'sheryl sandberg', 'hillary clinton', 'beyoncé', 'lizzo',
    'meryl streep', 'madeleine albright', 'janelle monáe', 'kamala harris',
    'naomi wolf', 'isabelle allende', 'emily ratajkowski', 'erin mckean',
    'diane von furstenberg', 'madonna', 'melinda gates'
  ];
  
  const foundAuthor = knownAuthors.find(author => trimmedInput.includes(author));
  if (foundAuthor) {
    return getQuoteByAuthor(quotes, foundAuthor);
  }
  
  // Try keyword matching
  const words = trimmedInput.split(' ').filter(w => w.length > 4);
  for (const word of words) {
    const found = keywordPatterns.find(kp => word.includes(kp.keyword));
    if (found) {
      return getQuoteByKeyword(quotes, found.keyword);
    }
  }
  
  return "I'm a feminist quote bot! Try:\n\n" +
    "• `/quote` - Get a random quote\n" +
    "• `/quote <author>` - Get a quote by author (e.g., Maya Angelou)\n" +
    "• `/empowerment`, `/strength`, `/women`, `/power` - Search by topic\n" +
    "\nI have 117 quotes from trailblazing women including Maya Angelou, Gloria Steinem, bell hooks, and more!";
}

// Export for skill system
export default handleFeministQuote;
