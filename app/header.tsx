"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/Mode-toggle";
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import Image from "next/image";
export default function Header() {
  const documents = useQuery(api.documents.getDocuments);
  const createDocument = useMutation(api.documents.creteDocument);

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

        <div>
          <Unauthenticated>
            <SignInButton></SignInButton>
          </Unauthenticated>

          <Authenticated>
            <div className="flex gap-4">
              <ModeToggle />
              <UserButton />
            </div>
          </Authenticated>
        </div>
      </div>
    </div>
  );
}

// mx-auto  container everything in container class will conatain  full of screen
