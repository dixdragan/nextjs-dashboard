"use client";

import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button } from "./ui/button";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <Button
      onClick={handleClick}
      className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
    >
      Like <HandThumbUpIcon className="w-5 md:w-6" /> ({likes})
    </Button>
  );
}
