"use client";
import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
export default function HeaderActions() {
  const documents = useQuery(api.documents.getDocuments);
  const createDocument = useMutation(api.documents.creteDocument);
  return (
    <>
      <Unauthenticated>
        <SignInButton></SignInButton>
      </Unauthenticated>

      <Authenticated>
        <UserButton />
      </Authenticated>
      {/*TODO: change the loading text with svg icon */}
      <AuthLoading>Loading....</AuthLoading>
    </>
  );
}
