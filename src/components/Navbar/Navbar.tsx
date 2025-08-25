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

function Navbar() {
  return (
    <header>
      <div className="w-full px-3 flex items-center h-12 py-2 justify-between">
        <div className="flex items-center gap-2 h-full">
          <TextDropdownMenu />
          <Separator orientation="vertical" />
          <div className="flex items-center ">
            <Toggle aria-label="Toggle italic">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center ">
            <Toggle aria-label="Toggle italic">
              <List className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <ListOrdered className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
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
