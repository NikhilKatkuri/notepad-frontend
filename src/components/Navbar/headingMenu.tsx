"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, 
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function TextDropdownMenu() {
  const [content, setcontent] = useState<string>("Normal Text");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p>
          <span className="px-3 text-sm py-1 rounded-md hover:bg-accent font-medium cursor-pointer flex items-end gap-1">
            {content}
            <ChevronDown className="text-black/50" size={18} />
          </span>
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuItem
          className="text-sm font-medium cursor-pointer"
          onClick={() => {
            setcontent("Normal Text");
          }}
        >
          <p>Normal Text</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-sm font-medium cursor-pointer"
          onClick={() => {
            setcontent("Heading 1");
          }}
        >
          <h1>Heading 1</h1>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-sm font-medium cursor-pointer"
          onClick={() => {
            setcontent("Heading 2");
          }}
        >
          <h2>Heading 2</h2>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-sm font-medium cursor-pointer"
          onClick={() => {
            setcontent("Heading 3");
          }}
        >
          <h3>Heading 3</h3>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
