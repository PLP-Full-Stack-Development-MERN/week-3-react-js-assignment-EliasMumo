# Apple-Inspired React Application

A modern, responsive React application with an Apple-inspired design system featuring a profile editor and interactive counter components.

## Features

- Clean, Apple-inspired design language
- Responsive interface that works on all screen sizes
- Animated UI components with smooth transitions
- Profile management with editable fields
- Interactive counter with visual feedback

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd <project-folder-name>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at http://localhost:8080 (or another port if 8080 is already in use).

## Project Structure

- `src/components/` - React components
  - `Header.tsx` - Page header component
  - `Profile.tsx` - User profile editor
  - `Counter.tsx` - Interactive counter with animations
- `src/pages/` - Page components
  - `Index.tsx` - Main page
  - `NotFound.tsx` - 404 page
- `src/index.css` - Global CSS including Apple-inspired styles

## Technologies Used

- React (with TypeScript)
- Vite for fast development
- Tailwind CSS for styling
- shadcn/ui components
- React Router for navigation
- TanStack Query for data management

## Customization

### Styling

The application uses Tailwind CSS with custom Apple-inspired variables defined in `src/index.css`:

```css
:root {
  --apple-blue: #0071e3;
  --apple-darkgray: #1d1d1f;
  --apple-gray: #f5f5f7;
  --apple-lightgray: #86868b;
}
```

### Adding New Components

1. Create a new component file in `src/components/`
2. Import and use the component in the relevant page

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`:

```tsx
<Route path="/your-new-path" element={<YourNewPage />} />
```

## Building for Production

Build the app for production:

```bash
npm run build
# or
yarn build
```

This will generate optimized files in the `dist` directory.

## Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## License

[MIT](LICENSE)
