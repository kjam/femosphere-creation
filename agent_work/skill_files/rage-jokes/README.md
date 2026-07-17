# /rage-joke Skill

Make roasting jokes about misogynists, Trump, Musk, Republicans, and other targets.

## Installation

```bash
npx tsx scripts/apply-skill.ts container/skills/rage-jokes
```

Or use `/setup` in Claude Code and select "Add rage-jokes skill".

## Usage

### Random Roast
```
@feminine_rage make a joke
@feminine_rage roast
@feminine_rage /roast
```

### Roast Specific Target
```
@feminine_rage roast Trump
@feminine_rage roast Musk
@feminine_rage roast Rowling
@feminine_rage roast Republicans
@feminine_rage roast MAGA
@feminine_rage roast Fox News
```

### Additional Targets
```
@feminine_rage roast Andrew Sullivan
@feminine_rage roast Bari Weiss
@feminine_rage roast Jordan Peterson
@feminine_rage roast Sam Harris
@feminine_rage roast Tim Pool
@feminine_rage roast Charlie Kirk
@feminine_rage roast Candace Owens
@feminine_rage roast Katie Hopkins
@feminine_rage roast Milo Yiannopoulos
@feminine_rage roast Ben Shapiro
```

## Examples

```
@feminine_rage roast Trump

*Roast:* He's got the brain of a toddler and the hair of a confused orangutan.
```

```
@feminine_rage roast Musk

*Roast:* Elon Musk is the only person who thinks buying Twitter was a good investment. It's like buying a haunted house and then complaining about the ghosts.
```

```
@feminine_rage roast Rowling

*Roast:* J.K. Rowling writes about magic but can't magically stop being a bigot.
```

```
@feminine_rage roast Republicans

*Roast:* The GOP is like a horror movie where the villain keeps winning and the only way to survive is to realize the whole thing is bullshit.
```

## Targets

### Primary Targets
- **Donald Trump** - The orange fascist, reality TV billionaire
- **Elon Musk** - The billionaire clown, X owner, transphobe
- **J.K. Rowling** - TERF author, trans-exclusionary fanatic
- **US Republicans** - The entire party, especially women who pretend to be feminist
- **MAGA movement** - The whole circus
- **Fox News** - The propaganda channel

### Additional Targets
- Andrew Sullivan
- Bari Weiss
- Jordan Peterson
- Sam Harris
- Tim Pool
- Charlie Kirk
- Candace Owens
- Katie Hopkins
- Milo Yiannopoulos
- Ben Shapiro

## Style

- **Sharp and cutting** - No holding back
- **Specific** - Call out exact behaviors, statements
- **Visual** - Paint vivid pictures of their absurdity
- **Witty** - Wordplay, irony, sarcasm
- **Unapologetic** - Don't soften the blow

## Files

- `index.js` - Main skill handler with joke logic
- `SKILL.md` - Skill documentation
- `skill.json` - Skill registration metadata
- `README.md` - This file

## Customization

To add more targets, edit `index.js` and add them to the `additionalTargets` array:

```javascript
{
  name: "Target Name",
  descriptors: ["descriptor 1", "descriptor 2"],
  quotes: ["joke 1", "joke 2"]
}
```