# andrejkoller-next

A minimalist website featuring a particle-based logo as its centerpiece. Built with modern web technologies and a focus on performance, accessibility, and clean design.

## Features

- **Server-Side Rendering** - Fast initial page loads with Next.js App Router
- **Responsive Design** - Mobile-first layout with Tailwind CSS v4
- **Theme Switcher** - Toggle between dark and light mode with `localStorage` persistence and `prefers-color-scheme` support
- **Custom Theming** - CSS custom properties for a consistent color palette
- **Modular Architecture** - Separated Header and layout components
- **Google Fonts** - Geist Sans and Geist Mono via `next/font`
- **TypeScript** - Full type safety across the application
- **Navigation Links** - Configurable header links to official website, developer portfolio, and project showcase

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Library**: React 19
- **Styling**: Tailwind CSS v4

## Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

## Installation

1. Clone the repository

```bash
git clone https://github.com/andrejkoller/andrejkoller-next.git
cd andrejkoller-next
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
andrejkoller-next/
├── app/
│   ├── styles/
│   │   └── globals.css           # Global styles and theme variables
│   ├── client-layout.tsx         # Client-side layout wrapper
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── theme/
│   │   ├── theme-context.ts      # React context definition
│   │   ├── theme-provider.tsx    # Theme provider with useSyncExternalStore
│   │   ├── theme-switcher.tsx    # Toggle button component
│   │   ├── types.ts              # Theme types
│   │   └── use-theme.ts          # useTheme hook
│   └── header.tsx                # Header component
├── config/
│   └── header-links-config.ts    # Header navigation links configuration
├── public/
│   └── images/
│       ├── screenshot-1.png
│       └── screenshot-2.png
├── eslint.config.mjs             # ESLint configuration
├── LICENSE
├── next-env.d.ts                 # Next.js TypeScript declarations
├── next.config.ts                # Next.js configuration
├── package.json
├── postcss.config.mjs            # PostCSS configuration
├── README.md
├── SECURITY.md
└── tsconfig.json                 # TypeScript configuration
```

## Screenshots

![Screenshot 1](public/images/screenshot-1.png)
![Screenshot 2](public/images/screenshot-2.png)

## License

This project is licensed under the [MIT License](LICENSE).
