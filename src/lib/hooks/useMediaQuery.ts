import { useState, useEffect } from 'react';

/**
 * Custom hook that returns whether a media query matches the current screen size
 * @param query The media query to check
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const checkScreenSize = ({ matches }: MediaQueryListEvent) => {
            setMatches(matches);
        };
        
        mediaQuery.addEventListener('change', checkScreenSize);
        return () => mediaQuery.removeEventListener('change', checkScreenSize);
    }, [query]);

    return matches;
}
