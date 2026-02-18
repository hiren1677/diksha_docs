# Project Structure

This project is set up with Bootstrap 5, SASS, and multiple layouts for different page types.

## Folder Structure

```
src/
├── components/
│   └── common/           # Shared components
│       ├── Header.tsx    # Navigation header
│       └── Footer.tsx    # Footer component
├── layouts/              # Layout components
│   ├── MainLayout.tsx    # Standard layout with header & footer
│   ├── AuthLayout.tsx    # Centered layout for auth pages
│   └── DashboardLayout.tsx # Layout with sidebar
├── styles/               # SASS files
│   ├── main.scss         # Main SCSS (Bootstrap + custom styles)
│   ├── _variables.scss   # Custom variables
│   ├── _components.scss  # Component styles
│   └── _layouts.scss     # Layout styles
├── pages/                # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ContributePage.tsx
│   └── DashboardPage.tsx
└── App.tsx
```

## Using Layouts

### MainLayout (Default)
For standard pages with header and footer:

```tsx
import MainLayout from './layouts/MainLayout'

function HomePage() {
  return (
    <MainLayout>
      <h1>Your content here</h1>
    </MainLayout>
  )
}
```

### AuthLayout
For login/signup pages (centered, no header/footer):

```tsx
import AuthLayout from './layouts/AuthLayout'

function LoginPage() {
  return (
    <AuthLayout>
      <div className="card">
        <div className="card-body">
          <h2>Login</h2>
          {/* Login form */}
        </div>
      </div>
    </AuthLayout>
  )
}
```

### DashboardLayout
For admin/dashboard pages with sidebar:

```tsx
import DashboardLayout from './layouts/DashboardLayout'

function DashboardPage() {
  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
      {/* Dashboard content */}
    </DashboardLayout>
  )
}
```

## Customizing Styles

### Custom Styles in main.scss
**`src/styles/main.scss`** - Add your custom SCSS at the end of this file to override Bootstrap:

```scss
// At the end of main.scss, add your custom styles
.custom-button {
  background-color: #your-color;
  border-radius: 8px;
}

.navbar {
  // Override Bootstrap navbar styles
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

Custom styles are placed at the bottom of `main.scss` so they override Bootstrap defaults due to CSS cascade order.

### Custom Bootstrap Variables
Edit `src/styles/_variables.scss` to define custom variables:

```scss
// Custom application variables
$primary-color: #0056b3;
$secondary-color: #6c757d;
$font-family-base: 'Roboto', sans-serif;
```

**Note:** To override Bootstrap's default variables (like `$primary`), you need to define them in `main.scss` BEFORE the Bootstrap import.

### Component Styles
Add component-specific styles in `src/styles/_components.scss`

### Layout Styles
Add layout-specific styles in `src/styles/_layouts.scss`

## Bootstrap Integration

Bootstrap 5 is imported via SASS in `src/styles/main.scss`. This gives you:
- Full access to Bootstrap utilities
- Ability to customize Bootstrap variables
- Tree-shaking for optimal bundle size
- All Bootstrap JavaScript components via `@popperjs/core`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
