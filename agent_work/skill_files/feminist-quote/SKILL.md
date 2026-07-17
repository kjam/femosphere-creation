# /feminist-quote

Share empowering feminist quotes from our collection of 117 quotes by trailblazing women.

## Usage

```
@femosphere_bot quote
@femosphere_bot give me a quote
@femosphere_bot feminist quote
@femosphere_bot quote of the day
```

## Features

- **Random quote**: Share a random quote from the collection
- **By author**: `@femosphere_bot quote Maya Angelou`
- **By keyword**: `@femosphere_bot quote empowerment`
- **Fresh quote**: `@femosphere_bot new quote`

## How It Works

The skill reads from `groups/discord_main/feminist_quotes.json` which contains 117 quotes from:
- Harper's Bazaar
- British Vogue
- Goodreads (Radical Feminism)

Quotes are randomly selected and displayed with the author attribution.

## Example

```
@femosphere_bot quote

"Each time a woman stands up for herself, without knowing it possibly, 
without claiming it, she stands up for all women."
— Maya Angelou
```

## Implementation

This skill is loaded inside the agent container at startup via `/setup` or manually:

```bash
npx tsx scripts/apply-skill.ts .claude/skills/feminist-quote
```

The skill adds a command handler that:
1. Reads the quotes JSON file
2. Selects a random quote (or filters by author/keyword)
3. Formats and returns it with attribution
