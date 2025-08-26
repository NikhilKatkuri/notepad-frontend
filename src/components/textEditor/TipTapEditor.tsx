"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Navbar from "../Navbar/Navbar";
import TextAlign from "@tiptap/extension-text-align";

import Highlight from "@tiptap/extension-highlight";
import { TaskItem, TaskList } from "@tiptap/extension-list";
const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc  ml-6",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal  ml-6",
          },
        },
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: "<p>what you want to do?</p>",
    immediatelyRender: false,
  });

  return (
    <>
      <div className="flex-1 w-full overflow-hidden flex flex-col">
        <Navbar editor={editor} />
        <div className="flex-1 overflow-y-auto">
          <EditorContent
            className="h-full w-full prose prose-sm max-w-none"
            editor={editor}
          />
        </div>
      </div>
    </>
  );
};

export default TiptapEditor;
