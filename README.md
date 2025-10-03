# Rich Text Editor

A modern, accessible rich text editor built with React, TypeScript, and Vite. Convert formatted text to clean HTML with real-time preview and download functionality.

## Features

- **Rich Text Formatting**: Bold, italic, underline, and heading styles
- **Real-time HTML Preview**: See generated HTML code as you type
- **HTML Export**: Download formatted content as a complete HTML file
- **Accessibility**: Full keyboard navigation and screen reader support
- **Security**: HTML sanitization with DOMPurify
- **Modern Stack**: React 18, TypeScript, Vite, and modern tooling

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with modern layout
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier
- **Security**: DOMPurify for HTML sanitization

## Getting Started

### Prerequisites

- Node.js 16+ 
- Yarn or npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

### Development

Start the development server:
```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn test` - Run tests
- `yarn test:ui` - Run tests with UI
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues
- `yarn format` - Format code with Prettier

## Usage

1. **Type in the editor**: Use the formatting toolbar to apply styles
2. **Preview HTML**: See the generated HTML code in real-time
3. **Download**: Click "Download HTML" to save as a complete HTML file

### Keyboard Shortcuts

- **Ctrl+B**: Bold text
- **Ctrl+I**: Italic text  
- **Ctrl+U**: Underline text

## Architecture

### Components

- **App.tsx**: Main application component with editor and preview
- **ActionBar.tsx**: Formatting toolbar with accessibility features

### Key Features

- **HTML Sanitization**: All content is sanitized using DOMPurify
- **Modern DOM APIs**: Replaced jQuery with native DOM manipulation
- **Type Safety**: Full TypeScript coverage with strict settings
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## Testing

Run the test suite:
```bash
yarn test
```

Run tests with UI:
```bash
yarn test:ui
```

## Code Quality

The project includes:

- **ESLint**: Code linting with TypeScript rules
- **Prettier**: Code formatting
- **TypeScript**: Strict type checking
- **Testing**: Component and integration tests

## Deployment

The app is configured for GitHub Pages deployment with the base path `/stringToHtml/`.

Build for production:
```bash
yarn build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
