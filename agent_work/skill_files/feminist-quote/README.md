# /feminist-quote Skill

Share empowering feminist quotes from a collection of 117 quotes by trailblazing women.

## Installation

```bash
npx tsx scripts/apply-skill.ts container/skills/feminist-quote
```

Or use `/setup` in Claude Code and select "Add feminist-quote skill".

## Usage

### Random Quote
```
@femosphere_bot quote
@femosphere_bot give me a quote
@femosphere_bot feminist quote
@femosphere_bot quote of the day
```

### Quote by Author
```
@femosphere_bot quote Maya Angelou
@femosphere_bot quote Gloria Steinem
@femosphere_bot quote bell hooks
```

### Keyword Search
```
@femosphere_bot empowerment
@femosphere_bot strength
@femosphere_bot women
@femosphere_bot power
@femosphere_bot voice
@femosphere_bot feminism
@femosphere_bot freedom
```

## Examples

```
@femosphere_bot quote

"Each time a woman stands up for herself, without knowing it possibly, 
without claiming it, she stands up for all women."

— Maya Angelou
```

```
@femosphere_bot quote Chimamanda

"Of course I am not worried about intimidating men. The type of man 
who will be intimidated by me is exactly the type of man I have no interest in."

— Chimamanda Ngozi Adichie
```

```
@femosphere_bot empowerment

"There is no limit to what we, as women, can accomplish."

— Michelle Obama
```

## Features

- **Random quotes**: 117 unique quotes from diverse feminist voices
- **Author search**: Find quotes by specific authors
- **Keyword search**: Search by themes like empowerment, strength, freedom
- **Smart matching**: Recognizes author names in natural language

## Sources

- Harper's Bazaar: 100 quotes
- British Vogue: 17 quotes
- Goodreads (Radical Feminism): 4 quotes

## Files

- `index.js` - Main skill handler
- `skill.json` - Skill registration metadata
- `SKILL.md` - Skill documentation
- `README.md` - This file

## Quote Collection

The quotes are stored in `groups/discord_main/feminist_quotes.json` and can be expanded by adding more quotes to the JSON file.
