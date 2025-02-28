import { create } from 'zustand';
import { hexToHSL } from '@/lib/color-utils';

interface ColorState {
  color: string;
  setColor: (color: string) => void;
}

export const useColorStore = create<ColorState>((set) => ({
  color: "#AABBCC", 
  setColor: (newColor: string) => {
    set({ color: newColor });
    
    const { h, s, l } = hexToHSL(newColor);
    const root = document.documentElement;
    
    // Set primary color
    root.style.setProperty("--primary", `${h} ${s}% ${l}%`);
    
    // For light mode:
    // If the primary color is dark (l < 60), use light text, otherwise dark text
    const lightModeForeground = l < 60 ? 
      `${h} ${Math.max(s - 10, 0)}% 95%` : // light text for dark backgrounds
      `${h} ${Math.max(s - 10, 0)}% 10%`;  // dark text for light backgrounds
    
    root.style.setProperty("--primary-foreground", lightModeForeground);
    
    // For dark mode:
    // If the primary color is light (l > 40), use dark text, otherwise light text
    const darkModeForeground = l > 40 ?
      `${h} ${Math.max(s - 10, 0)}% 10%` :  // dark text for light backgrounds
      `${h} ${Math.max(s - 10, 0)}% 95%`;   // light text for dark backgrounds
    
    const darkModeStyle = document.createElement("style");
    darkModeStyle.innerHTML = `
      .dark {
        --primary: ${h} ${s}% ${l}%;
        --primary-foreground: ${darkModeForeground};
      }
    `;
    
    const prevStyle = document.querySelector('[data-primary-dark]');
    if (prevStyle) {
      prevStyle.remove();
    }
    
    darkModeStyle.setAttribute('data-primary-dark', '');
    document.head.appendChild(darkModeStyle);
  },
})); 