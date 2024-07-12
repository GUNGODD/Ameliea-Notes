"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";

export default function Home() {
  return (
    <div>
      <h1> hello world </h1>

      <Unauthenticated>
        <SignInButton></SignInButton>
      </Unauthenticated>

      <Authenticated>
        <UserButton></UserButton>
      </Authenticated>
    </div>
  );
}
