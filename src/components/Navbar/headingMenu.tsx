"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useEditor } from "@tiptap/react";

export function TextDropdownMenu({
  editor,
}: {
  editor: ReturnType<typeof useEditor> | null;
}) {
  const [content, setcontent] = useState<string>("Normal Text");
  if (!editor) return null;
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
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`${
            editor.isActive("paragraph") ? "is-active" : ""
          } text-sm font-medium cursor-pointer`}
        >
          <p>Normal Text</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          } text-sm font-medium cursor-pointer`}
        >
          <h1>Heading 1</h1>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          } text-sm font-medium cursor-pointer`}
        >
          <h2>Heading 2</h2>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          } text-sm font-medium cursor-pointer`}
        >
          <h3>Heading 3</h3>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
