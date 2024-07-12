"use client";

import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation } from "convex/react";

export default function Home() {
  // what is createDocument used for ?
  const createDocument = useMutation(api.documents.creteDocument);

  return (
    <div>
      <h1> hello world </h1>

      <Unauthenticated>
        <SignInButton></SignInButton>
      </Unauthenticated>

      <Authenticated>
        <UserButton />
        <button
          onClick={() => {
            createDocument({ title: "hello Convex  i am aditya" });
          }}
        >
          Click me{" "}
        </button>
      </Authenticated>
    </div>
  );
}
