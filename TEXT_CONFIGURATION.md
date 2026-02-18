# Text Configuration Guide

All text content in the application is managed centrally through the `text.yml` file located in `/public/locales/text.yml`.

## Usage

### In Components

Import and use the `useText` hook:

```tsx
import useText from '../hooks/useText';

const MyComponent = () => {
  const { getText } = useText();
  
  return (
    <div>
      <h1>{getText('home.title', 'Default Title')}</h1>
      <p>{getText('home.subtitle', 'Default subtitle')}</p>
    </div>
  );
};
```

### getText Function

The `getText` function accepts two parameters:
- **path** (string): Dot-notation path to the text value in the YAML file (e.g., `'home.title'`)
- **defaultValue** (string, optional): Fallback text if the path is not found

### Example Paths

Based on the current `text.yml` structure:

```tsx
getText('common.appName')                    // "Diksha"
getText('header.navigation.home')            // "Home"
getText('accessibility.skipToMainContent')   // "Skip to Main Content"
getText('home.title')                        // "Welcome to Diksha"
getText('contribute.form.titleLabel')        // "Title"
```

## Editing Text

1. Open `/public/locales/text.yml`
2. Find the text you want to modify or add new text
3. Save the file
4. The changes will be reflected when the page reloads

## YAML Structure

The file uses nested YAML structure:

```yaml
section:
  subsection:
    key: "value"
```

Access as: `getText('section.subsection.key')`

## Benefits

- ✅ **Centralized**: All text in one file
- ✅ **Easy to maintain**: Change text without touching code
- ✅ **i18n ready**: Can be extended for multiple languages
- ✅ **Type-safe**: Default values prevent empty text
- ✅ **Cached**: Text is loaded once and cached

## Components Updated

The following components now use the text configuration:
- Accessibility
- Header
- Footer

Other page components (HomePage, AboutPage, ContributePage, DashboardPage) can be updated similarly.
