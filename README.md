# Personal Website

A modern, production-ready personal website built with React, TypeScript, and Vite.

## Features

- ⚡️ **Fast & Optimized** - Built with Vite for lightning-fast development and optimized production builds
- 🎨 **Modern UI** - Beautiful, responsive design with dark mode support
- 📸 **Photography Gallery** - Showcase your photography work with lazy-loaded images
- ♿️ **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and structured data for better discoverability
- 🛡️ **Error Handling** - Comprehensive error boundaries and graceful error handling
- 🎯 **Type Safe** - Full TypeScript support with strict type checking
- 📱 **Responsive** - Mobile-first design that works on all devices

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **SEO**: React Helmet Async

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
pnpm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration:
```env
VITE_SITE_URL=http://localhost:3000
```

### Development

Start the development server:
```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### Building for Production

Build the production bundle:
```bash
pnpm build
```

Preview the production build:
```bash
pnpm preview
```

### Linting

Run ESLint:
```bash
pnpm lint
```

### Formatting

Format code with Prettier:
```bash
pnpm format
```

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/      # React components
│   ├── custom/      # Custom reusable components
│   ├── home/        # Home page sections
│   ├── icons/       # Icon components
│   ├── layouts/     # Layout components
│   ├── navbar/      # Navigation components
│   ├── photography/ # Photography-related components
│   └── ui/          # UI primitives
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and helpers
├── pages/           # Page components
└── main.tsx         # Application entry point
```

## Production Deployment

### Environment Variables

Set the following environment variables in your deployment platform:

- `VITE_SITE_URL` - Your production site URL (e.g., `https://yourdomain.com`)

### Build Optimization

The project is configured with:
- Code splitting for optimal bundle sizes
- Image lazy loading for better performance
- Minification and tree-shaking
- Vendor chunk separation

### Deployment Platforms

#### Vercel
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

#### Netlify
1. Connect your repository to Netlify
2. Build command: `pnpm build`
3. Publish directory: `dist`
4. Set environment variables in Netlify dashboard

#### Self-hosted
1. Build the project: `pnpm build`
2. Serve the `dist` directory with a static file server (nginx, Apache, etc.)
3. Configure your server to serve `index.html` for all routes (SPA routing)

## Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Image Optimization**: Lazy loading with Intersection Observer
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Size**: Optimized vendor chunks

## Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Mohammad Shahanwaz
