"use client";
import { ModeToggle } from "@/components/ui/Mode-toggle";
import Image from "next/image";
import HeaderActions from "./header-actions";
export default function Header() {
  return (
    <div className="bg-slate-900 py-4 ">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="Ameleia Logo "
            className="rounded"
          />
          <span className="text-3xl"> AMELIEA</span>
        </div>

        <div className="flex gap-4 items-center">
          <ModeToggle />
          <HeaderActions />
        </div>
      </div>
    </div>
  );
}

// mx-auto  container everything in container class will conatain  full of screen
