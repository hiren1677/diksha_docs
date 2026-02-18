import { useEffect, useState } from 'react';
import yaml from 'js-yaml';

interface TextContent {
  [key: string]: string | TextContent | unknown;
}

let cachedText: TextContent | null = null;

export const useText = () => {
  const [text, setText] = useState<TextContent | null>(cachedText);
  const [loading, setLoading] = useState(!cachedText);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (cachedText) {
      setText(cachedText);
      setLoading(false);
      return;
    }

    const loadText = async () => {
      try {
        const response = await fetch('/locales/text.yml');
        if (!response.ok) {
          throw new Error('Failed to load text configuration');
        }
        const yamlText = await response.text();
        const parsedText = yaml.load(yamlText) as TextContent;
        cachedText = parsedText;
        setText(parsedText);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
        console.error('Error loading text configuration:', err);
      }
    };

    loadText();
  }, []);

  // Helper function to get nested text by path (e.g., "home.title")
  const getText = (path: string, defaultValue: string = ''): string => {
    if (!text) return defaultValue;
    
    const keys = path.split('.');
    let value: string | TextContent | unknown = text;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = (value as Record<string, unknown>)[key];
      } else {
        return defaultValue;
      }
    }
    
    return typeof value === 'string' ? value : defaultValue;
  };

  return { text, loading, error, getText };
};

export default useText;
