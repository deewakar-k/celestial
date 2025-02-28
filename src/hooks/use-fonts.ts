"use client"

import { getFonts } from "@/actions/fonts";
import { useEffect, useState } from "react";
import useSWR from "swr"

export function useFonts() {
  const [selectedFont, setSelectedFont] = useState("Geist")

  const { data, isLoading, error } = useSWR("google-fonts", getFonts, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 1000 * 60 * 60 * 24,
  })

  // @ts-expect-error - data is not typed
  const allFonts = data?.items?.map(font => font.family) || []

  const fonts = allFonts.length > 0 
    ? allFonts 
    : ['Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat'];

  useEffect(() => {
    if (!selectedFont) return;
    
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${selectedFont.replace(/ /g, '+')}:wght@400;500;700&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    document.body.style.fontFamily = `'${selectedFont}', sans-serif`;
    
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [selectedFont]);

  return {
    selectedFont,
    setSelectedFont,
    fonts,
    isLoading,
    error,
  };
}