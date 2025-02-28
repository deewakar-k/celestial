"use server"

import axios from "axios"

export const getFonts = async () => {
  const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY}`
  const response = await axios.get(url)
  return response.data
}