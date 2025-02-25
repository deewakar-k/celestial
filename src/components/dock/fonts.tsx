import { ChevronDown, Dot } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import React from "react";
import { fonts } from "@/lib/data";

export default function Fonts() {
  const [selectedFont, setSelectedFont] = React.useState("Inter");

  return (
    <>
      <span className="text-xs text-muted-foreground pl-1">Fonts</span>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="h-7 bg-[#E6E6E6] dark:bg-[#181818]"
        >
          <Button variant="outline" size="sm" className="gap-1">
            {selectedFont}
            <ChevronDown className="size-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#E6E6E6] dark:bg-[#191919]">
          {fonts.map((font) => (
            <DropdownMenuItem key={font} onClick={() => setSelectedFont(font)}>
              <Dot
                className={`mr-2 h-4 w-4 ${font === selectedFont ? "opacity-100" : "opacity-0"}`}
              />
              {font}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
