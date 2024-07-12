"use client";

import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";

export default function Home() {
  {
    //  to put some data to convex db
    /*TODO: createDocument-> it is used to create a table inside   convex db an then insert data to  following attributes eg title  name , etc etc */
  }

  {
    //  to get some data to convex db
    /*TODO: getDocument-> it is used to create a table inside   convex db an then insert data to  following attributes eg title  name , etc etc */
  }

  const documents = useQuery(api.documents.getDocuments);
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
