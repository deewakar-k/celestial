import { PostHogProvider } from "@/components/provider/posthog-provider";
import { ThemeProvider } from "@/components/provider/theme-provider";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
      </ThemeProvider>
    </PostHogProvider>
  );
}
