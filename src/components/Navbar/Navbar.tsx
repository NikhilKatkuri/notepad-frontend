import React from "react";
import Separator from "../ui/separator";
import { TextDropdownMenu } from "./headingMenu";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  ListTodo,
  Underline,
} from "lucide-react";
import { Toggle } from "../ui/toggle";
import { Button } from "../ui/button";
import { useEditor } from "@tiptap/react";

function Navbar({ editor }: { editor: ReturnType<typeof useEditor> | null }) {
  if (!editor) {
    return null;
  }
  return (
    <header>
      <div className="w-full   flex items-center h-12 py-2 justify-between">
        <div className="flex items-center gap-2 h-full">
          <TextDropdownMenu editor={editor} />
          <Separator orientation="vertical" />
          <div className="flex items-center ">
            <Toggle
              onClick={() => editor?.chain().focus().toggleBold().run()}
              pressed={editor?.isActive("bold")}
              aria-label="Toggle bold"
            >
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              pressed={editor?.isActive("italic")}
              aria-label="Toggle italic"
            >
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle
              onClick={() => editor?.chain().focus().toggleUnderline().run()}
              pressed={editor?.isActive("underline")}
              aria-label="Toggle underline"
            >
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center ">
            <Toggle
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              pressed={editor.isActive("bulletList")}
              aria-label="Toggle bullet list"
            >
              <List className="h-4 w-4" />
            </Toggle>
            <Toggle
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              pressed={editor.isActive("orderedList")}
              aria-label="Toggle ordered list"
            >
              <ListOrdered className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle todo list">
              <ListTodo className="h-4 w-4" />
            </Toggle>
          </div>
        </div>
        <div className="flex items-center gap-2 h-full">
          <Button variant="outline" className="cursor-pointer active:scale-95">
            new
          </Button>
          <Button className="cursor-pointer active:scale-95">save</Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
