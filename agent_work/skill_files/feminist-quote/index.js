/**
 * Feminist Quote Skill
 * 
 * Add /quote command to share empowering quotes.
 * 
 * Usage:
 *   @femosphere_bot quote
 *   @femosphere_bot quote Maya Angelou
 *   @femosphere_bot empowerment
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load quotes from JSON file
function loadQuotes() {
  try {
    const quotesPath = path.join(process.cwd(), 'feminist_quotes.json');
    const data = fs.readFileSync(quotesPath, 'utf-8');
    return JSON.parse(data).quotes;
  } catch (err) {
    console.error('Failed to load quotes:', err.message);
    return [];
  }
}

// Format quote for display
function formatQuote(quote, author) {
  return `\n"${quote}"\n\n— ${author}\n`;
}

// Get random quote
function getRandomQuote(quotes) {
  if (quotes.length === 0) {
    return "I don't have any quotes loaded yet.";
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const q = quotes[randomIndex];
  return formatQuote(q.quote, q.author);
}

// Get quote by author
function getQuoteByAuthor(quotes, authorName) {
  const lowercaseAuthor = authorName.toLowerCase().trim();
  const matchingQuotes = quotes.filter(q => 
    q.author.toLowerCase().includes(lowercaseAuthor)
  );
  
  if (matchingQuotes.length === 0) {
    return `No quotes found by "${authorName}". Try: Maya Angelou, Gloria Steinem, bell hooks, Audre Lorde, or many more!`;
  }
  
  const randomQuote = matchingQuotes[Math.floor(Math.random() * matchingQuotes.length)];
  return formatQuote(randomQuote.quote, randomQuote.author);
}

// Check if input matches quote command
function handleQuoteCommand(input) {
  const trimmed = input.trim().toLowerCase();
  
  // Remove trigger prefix if present (e.g., @femosphere_bot)
  const content = trimmed.replace(/^@femosphere_bot\s+/i, '').trim();
  
  // Random quote commands
  if (content === '/quote' || content === 'quote' || 
      content === 'give me a quote' || content === 'feminist quote' ||
      content === 'quote of the day' || content === 'new quote') {
    const quotes = loadQuotes();
    return getRandomQuote(quotes);
  }
  
  // Quote by author
  if (content.startsWith('/quote ') || content.startsWith('quote ')) {
    const author = content.replace(/^\/quote\s+|quote\s+/i, '').trim();
    const quotes = loadQuotes();
    return getQuoteByAuthor(quotes, author);
  }
  
  // Keyword search
  const keywords = ['empowerment', 'strength', 'women', 'power', 'voice', 
                   'feminism', 'freedom', 'fight', 'change', 'equality'];
  for (const keyword of keywords) {
    if (trimmed.includes(keyword) && !trimmed.includes('quote')) {
      const quotes = loadQuotes();
      const matching = quotes.filter(q => q.quote.toLowerCase().includes(keyword));
      if (matching.length > 0) {
        const randomQuote = matching[Math.floor(Math.random() * matching.length)];
        return formatQuote(randomQuote.quote, randomQuote.author);
      }
    }
  }
  
  // Check for known authors in input
  const knownAuthors = [
    'maya angelou', 'gloria steinem', 'bell hooks', 'audre lorde',
    'chimamanda ngozi adichie', 'angela davis', 'malala yousafzai',
    'emma watson', 'michelle obama', 'hillary clinton', 'angelina jolie',
    'beyoncé', 'bette davis', 'jane austen', 'simone de beauvoir',
    'sojourner truth', 'ruth bader ginsburg', 'shirley chisholm',
    'alexandria ocasio-cortez', 'kamala harris', 'lizzo', 'rihanna'
  ];
  
  for (const author of knownAuthors) {
    if (trimmed.includes(author)) {
      const quotes = loadQuotes();
      return getQuoteByAuthor(quotes, author);
    }
  }
  
  // Help message
  return "I'm a feminist quote bot! Try:\n\n" +
    "• `@femosphere_bot quote` - Get a random quote\n" +
    "• `@femosphere_bot quote Maya Angelou` - Get a quote by a specific author\n" +
    "• `@femosphere_bot empowerment` - Get a quote about empowerment\n" +
    "• `@femosphere_bot strength`, `women`, `power`, `freedom` - Search by topic\n" +
    "\nI have 117 quotes from trailblazing women!";
}

// List available skills
export function listSkills() {
  return "### Feminist Quote Skills\n\n" +
    "I can share empowering feminist quotes:\n\n" +
    "• `@femosphere_bot quote` - Random quote\n" +
    "• `@femosphere_bot quote <author>` - Quote by author\n" +
    "• `@femosphere_bot empowerment` - Quote about empowerment\n" +
    "• `@femosphere_bot strength` - Quote about strength\n" +
    "• `@femosphere_bot women` - Quote about women\n" +
    "• `@femosphere_bot power` - Quote about power\n" +
    "• `@femosphere_bot voice` - Quote about voice\n" +
    "• `@femosphere_bot feminism` - Quote about feminism\n" +
    "• `@femosphere_bot freedom` - Quote about freedom\n" +
    "\nAvailable authors: Maya Angelou, Gloria Steinem, bell hooks, Audre Lorde, Chimamanda Ngozi Adichie, Angela Davis, Malala Yousafzai, Emma Watson, and more!";
}

// Combined matches function - only for femosphere_bot (discord_main)
const combinedMatches = (input, groupFolder) => {
  // Only activate for femosphere_bot group
  if (groupFolder !== 'discord_main') {
    return false;
  }
  const trimmed = input.trim().toLowerCase();
  const content = trimmed.replace(/^@femosphere_bot\s+/i, '').trim();
  return content.includes('skill') || content === '/skill' || content === 'help' || content === '/help' ||
         content.includes('quote') || 
         content === '/quote' ||
         ['empowerment', 'strength', 'women', 'power', 'voice', 
          'feminism', 'freedom', 'fight', 'change', 'equality'].some(k => content.includes(k));
};

// Export for skill system
export default {
  name: 'feminist-quote',
  description: 'Share empowering feminist quotes. Usage: @femosphere_bot quote, empowerment, strength, etc.',
  handler: handleQuoteCommand,
  listSkills: listSkills,
  matches: combinedMatches
};
