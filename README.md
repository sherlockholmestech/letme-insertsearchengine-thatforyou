# Let Me Search That For You

A modern, multi-engine version of "Let Me Google That For You" built with Nuxt 3, Bun, and TailwindCSS.

I got tired of the broken old ones and wanted to create a new and updated version that supports multiple search engines with realistic UIs and animations.

Created with the help of Claude.

## Features

- **Multiple Search Engines**: Support for Google, Bing, DuckDuckGo, and Ecosia
- **Realistic UI**: Each search engine mimics the actual website design
- **Animated Typing Effect**: Classic LMGTFY-style typing animation with blinking cursor
- **Animated Cursor**: Realistic cursor that moves and clicks the search button
- **Dark Mode**: Full dark mode support with system preference detection
- **Snarky Messages**: Engine-specific witty messages after the animation
- **Responsive Design**: Works beautifully on mobile, tablet, and desktop
- **SSR Enabled**: Server-side rendering for better performance and SEO
- **Copy to Clipboard**: Easy link generation and sharing

## Tech Stack

- **Runtime**: Bun v1.3.8
- **Framework**: Nuxt 3 (v4.3.0)
- **UI Framework**: TailwindCSS
- **Styling**: Dark mode with @nuxtjs/color-mode
- **Language**: TypeScript + Vue 3

## Project Structure

```
letme-insertsearchengine-thatforyou/
├── app.vue                          # Root application component
├── assets/
│   └── css/
│       └── main.css                 # Global styles with Tailwind
├── components/
│   ├── AnimatedCursor.vue           # Animated cursor component
│   ├── AnimatedSearch.vue           # Main animation orchestrator
│   ├── SearchBar.vue                # Realistic search engine UIs
│   ├── SearchEngineSelector.vue     # Engine dropdown selector
│   └── ThemeToggle.vue              # Dark/light mode toggle
├── composables/
│   └── useSearchEngines.ts          # Search engine configurations
├── pages/
│   ├── index.vue                    # Home page with link generator
│   └── [engine].vue                 # Dynamic animation page
├── nuxt.config.ts                   # Nuxt configuration
└── tailwind.config.js               # Tailwind configuration
```

## Setup

Install dependencies using Bun:

```bash
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```

Preview the production build:

```bash
bun run preview
```

## Usage

### Generating Links

1. Visit the home page
2. Select a search engine (Google, Bing, DuckDuckGo, or Ecosia)
3. Enter a search query
4. Click "Generate Link"
5. Copy and share the generated link

### Link Format

Generated links follow this pattern:
```
/[engine]?q=[query]

Examples:
/google?q=how+to+use+google
/bing?q=search+engines
/duckduckgo?q=privacy
/ecosia?q=plant+trees
```

### Animation Flow

1. **Initial delay**: 500ms
2. **Typing animation**: 100ms per character with blinking cursor
3. **Post-typing delay**: 300ms
4. **Hide text cursor**: 200ms
5. **Animated cursor appears**: Moves smoothly to search button over 400ms
6. **Cursor click animation**: 150ms with visual feedback
7. **Pre-redirect delay**: 500ms
8. **Snarky message display**: 1000ms
9. **Redirect to actual search engine**

## Customization

### Adding New Search Engines

Edit `composables/useSearchEngines.ts` and add a new engine configuration:

```typescript
{
  id: 'newengine',
  name: 'New Engine',
  displayName: 'New Engine',
  searchUrl: 'https://example.com/search?q=',
  placeholder: 'Search New Engine',
  buttonText: 'Search',
  snarkyMessage: 'Your custom message here!',
  colors: {
    primary: '#hexcolor',
    hover: '#hexcolor'
  }
}
```

### Adjusting Animation Speed

Edit `components/AnimatedSearch.vue` and modify the timeout values:
- Typing speed: Change the 100ms value in the typing loop
- Redirect delay: Change the 500ms value after button click

### Customizing Colors

Edit `tailwind.config.js` to add or modify search engine colors.

## Search Engine Configurations

- **Google**: Blue theme, "Was that so hard?"
- **Bing**: Teal theme, "Now you know how to Bing!"
- **DuckDuckGo**: Orange theme, "DuckDuckGo wasn't so scary, was it?"
- **Ecosia**: Green theme, "Great! Now you can search AND plant trees!"

## Deployment

This app is configured for SSR and can be deployed to:
- Vercel
- Netlify
- DigitalOcean
- Any Node.js hosting platform

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## License

MIT
