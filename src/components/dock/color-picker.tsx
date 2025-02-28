"use client";

import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../ui/input";
import { useColorStore } from "@/store/use-color-store";

interface PopoverPickerProps {
  color: string;
  onChange: (color: string) => void;
}

const PopoverPicker: React.FC<PopoverPickerProps> = ({ color, onChange }) => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <div
            className="w-5 h-5 mb-0.5 rounded-md cursor-pointer shadow-sm border border-dock-light dark:border-dock-light"
            style={{ backgroundColor: color }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 border-none shadow-lg">
          <HexColorPicker color={color} onChange={onChange} />
        </PopoverContent>
      </Popover>
    </>
  );
};

export const ColorPicker: React.FC = () => {
  const { color, setColor } = useColorStore();
  const [inputValue, setInputValue] = useState(color);

  useEffect(() => {
    setInputValue(color);
  }, [color]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
      setColor(value);
    }
  };

  const handleBlur = () => {
    if (!/^#[0-9A-Fa-f]{6}$/.test(inputValue)) {
      setInputValue(color);
    }
  };

  return (
    <div className="flex flex-col items-start gap-y-2">
      <p className="text-xs text-muted-foreground w-full pb-1 text-start">
        Color
      </p>

      <div className="flex items-center gap-2">
        <PopoverPicker color={color} onChange={setColor} />
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-20 h-6 text-xs px-2"
          maxLength={7}
        />
      </div>
    </div>
  );
};
