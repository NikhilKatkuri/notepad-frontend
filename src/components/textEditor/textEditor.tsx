import React from "react";
import TiptapEditor from "./TipTapEditor";
import Navbar from "../Navbar/Navbar";

function TextEditor() {
  return (
    <div className="w-full h-screen bg-background flex flex-col overflow-hidden">
      <TiptapEditor/>
    </div>
  );
}

export default TextEditor;
