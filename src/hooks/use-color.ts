import { useEffect, useState } from 'react';
import { hexToHSL } from '@/lib/color-utils';

export function useColor() {
  const [color, setColor] = useState("#aabbcc");

  useEffect(() => {
    const { h, s, l } = hexToHSL(color);
    
    const root = document.documentElement;

    root.style.setProperty("--primary", `${h} ${s}% ${l}%`);

    root.style.setProperty("--primary-foreground", `${h} ${s}% 20%`);

    const darkModeStyle = document.createElement("style");
    darkModeStyle.innerHTML = `
      .dark {
        --primary: ${h} ${s}% ${l}%;
        --primary-foreground: ${h} ${s}% 10%;
      }
    `;
    
    const prevStyle = document.querySelector('[data-primary-dark]');
    if (prevStyle) {
      prevStyle.remove();
    }
    
    darkModeStyle.setAttribute('data-primary-dark', '');
    document.head.appendChild(darkModeStyle);
    
  }, [color]);

  return { color, setColor };
}
