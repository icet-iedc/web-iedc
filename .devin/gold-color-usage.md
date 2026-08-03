# Gold Color Text Usage Documentation

**Primary Gold Color:** `#D4AF37` (CSS variable: `--gold`)
**Secondary Gold Color:** `#FFD700` (used in gradients)

## Text Usage of Gold Color (#D4AF37)

### Component-Specific Usage

#### 1. **Executive Committee Components**
- **ProfileInfo.tsx** (line 18): Icon text color `text-[#D4AF37]`
- **ProfileHeader.tsx** (line 40): Member name heading `text-[#D4AF37]`
- **ExecomCard.tsx** (lines 37, 42): 
  - Member name hover state `group-hover:text-[#D4AF37]`
  - Member role text `text-[#D4AF37]`
- **SocialLinks.tsx** (line 20): Hover state `hover:text-[#D4AF37]`

#### 2. **Gallery Components**
- **GalleryNavigation.tsx** (line 36): Page number text `text-[#D4AF37]`
- **LatestGallery.tsx** (line 82): Section subtitle "One Moment at a Time" `text-[#D4AF37]`
- **GalleryCard.tsx** (lines 57, 67):
  - Card title hover state `group-hover:text-[#D4AF37]`
  - Category/metadata text `text-[#D4AF37]`

#### 3. **Achievement Components**
- **AchievementCard.tsx** (lines 47, 56, 61):
  - Calendar icon `text-[#D4AF37]`
  - Card title hover state `group-hover:text-[#D4AF37]`
  - Achievement category/role text `text-[#D4AF37]`
- **LatestAchievements.tsx** (lines 30, 31):
  - Award icon `text-[#D4AF37]`
  - "Achievement" label text `text-[#D4AF37]`

#### 4. **Event Components**
- **RecentEvent.tsx** (line 34): "Recent Event" badge text `text-[#D4AF37]`
- **EventInfo.tsx** (lines 36, 54, 84, 112):
  - Badge text `text-[#D4AF37]`
  - Event date/location text `text-[#D4AF37]`
  - Info icons `text-[#D4AF37]`
  - Status badge text `text-[#D4AF37]`

#### 5. **Page Components**
- **events/page.tsx** (lines 27, 72): Calendar and info icons `text-[#D4AF37]`
- **achievements/page.tsx** (line 40): Page title gradient `from-[#D4AF37] to-[#FFD700]`
- **gallery/page.tsx** (line 40): "Coming Soon" text `text-[#D4AF37]`
- **execom/[name]/not-found.tsx** (line 7): Error icon `text-[#D4AF37]/60`

#### 6. **Section Components**
- **ProgramsSection.tsx** (lines 69, 71):
  - Program icons `text-[#D4AF37]`
  - Program title hover state `group-hover:text-[#D4AF37]`
- **StatsSection.tsx** (line 28): Stat icons `text-[#D4AF37]`
- **StartupsSection.tsx** (lines 58, 61):
  - Startup title hover state `group-hover:text-[#D4AF37]`
  - Category badge text `text-[#D4AF37]`
- **AboutSection.tsx**: Gold gradient text for "Begins Here" (uses `.gold-gradient` class)
- **StartupsSection.tsx**: Gold gradient text for "Startups" (uses `.gold-gradient` class)
- **ProgramsSection.tsx**: Gold gradient text for "Programs" (uses `.gold-gradient` class)
- **StatsSection.tsx**: Gold gradient text for stats (uses `.gold-gradient` class)
- **Footer.tsx** (line 33): Section heading `text-[#D4AF37]`
- **HeroSection.tsx** (line 57): Uses `text-[var(--primary)]` which maps to gold

#### 7. **Footer Component**
- **Footer.tsx** (lines 58, 61, 64): Link hover states `hover:text-[#D4AF37]`

## Gold Gradient Text Usage

The `.gold-gradient` class is defined in `app/globals.css` (lines 103-106):
```css
.gold-gradient {
  @apply bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent;
}
```

**Components using gold gradient text:**
- **RecentEvent.tsx** (line 45): Event title
- **LatestAchievements.tsx** (line 42): Section title
- **EventPoster.tsx**: Background effects
- **EventInfo.tsx** (line 128): Button text (on gold background)
- **AchievementCard.tsx**: Bottom accent line
- **LatestAchievements.tsx** (line 79): Button text (on gold background)
- **AboutSection.tsx** (line 23): "Begins Here" text
- **StartupsSection.tsx** (line 38): "Startups" text
- **ProgramsSection.tsx** (line 50): "Programs" text
- **StatsSection.tsx** (line 29): Stats numbers
- **ExecomSection.tsx** (line 29): Section title
- **events/page.tsx** (line 40): Page title
- **achievements/page.tsx** (line 40): Page title

## Summary

**Gold text is used for:**
1. **Emphasis & Highlights** - Important headings, labels, and key information
2. **Interactive States** - Hover effects on links, cards, and buttons
3. **Icons** - Decorative and functional icons throughout the UI
4. **Metadata** - Categories, roles, dates, and secondary information
5. **Gradients** - Premium gradient text effects for titles and CTAs
6. **Navigation** - Active states and interactive elements

**Common patterns:**
- Direct text color: `text-[#D4AF37]`
- Hover states: `group-hover:text-[#D4AF37]`
- Gradient text: `.gold-gradient` class
- CSS variable: `text-[var(--primary)]` (maps to gold)
