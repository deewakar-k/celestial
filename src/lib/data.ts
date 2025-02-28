export const radiusSizes = ["0", "0.3", "0.5", "0.75", "1.0"];

export const chartData = [
  {
    average: 400,
    today: 240,
  },
  {
    average: 300,
    today: 139,
  },
  {
    average: 200,
    today: 980,
  },
  {
    average: 278,
    today: 390,
  },
  {
    average: 189,
    today: 480,
  },
  {
    average: 239,
    today: 380,
  },
  {
    average: 349,
    today: 430,
  },
];

export const themeConfig = {
  Falcon: {
    color: "#aabbcc"
  },
  Candy: {
    color: "#CFA4F6",
  },
  Crimson: {
    color: "#C94A4A",
  },
  SkyBlue: {
    color: "#5A9EE0",
  },
  Sunset: {
    color: "#FFA23D",
  },
  Midnight: {
    color: "#4CA3A6",
  },
} as const;

export const themes = Object.keys(themeConfig) as (keyof typeof themeConfig)[];
