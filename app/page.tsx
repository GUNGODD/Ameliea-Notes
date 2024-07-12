"use client";

import { Button } from "@/components/ui/button";
import Header from "./header";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  {
    //  to put some data to convex db
    /*TODO: createDocument-> it is used to create a table inside   convex db an then insert data to  following attributes eg title  name , etc etc */
  }

  {
    //  to get some data to convex db
    /*TODO: getDocument-> it is used to create a table inside   convex db an then insert data to  following attributes eg title  name , etc etc */
  }

  const document = useQuery(api.documents.getDocuments);
  const createDocument = useMutation(api.documents.creteDocument);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <Button
          size={"sm"}
          onClick={() => {
            createDocument({ title: "hello Convex" });
          }}
        >
          Click Me
        </Button>
        {document?.map((doc) => {
          <div key={doc._id}>{doc.title}</div>;
        })}
      </main>
    </>
  );
}
