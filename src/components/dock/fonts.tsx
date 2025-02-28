import { ChevronDown, Dot } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import React from "react";
import { useFonts } from "@/hooks/use-fonts";

export default function Fonts() {
  const { selectedFont, setSelectedFont, fonts } = useFonts();
  const [search, setSearch] = React.useState("");

  // Filter and limit fonts based on search
  const filteredFonts = React.useMemo(() => {
    return fonts
      .filter((font: string) =>
        font.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 5);
  }, [fonts, search]);

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
          <div className="p-2">
            <Input
              placeholder="Search fonts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-8"
            />
          </div>
          {filteredFonts.map((font: string) => (
            <DropdownMenuItem key={font} onClick={() => setSelectedFont(font)}>
              <Dot
                className={`mr-2 h-4 w-4 ${
                  font === selectedFont ? "opacity-100" : "opacity-0"
                }`}
              />
              {font}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
