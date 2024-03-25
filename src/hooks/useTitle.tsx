import { useEffect } from 'preact/hooks';

export function useTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} - Mike DelGaudio`;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
