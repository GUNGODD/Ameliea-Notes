"use client";

import { Button } from "@/components/ui/button";
import Header from "./header";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { isGeneratorFunction } from "util/types";
import DocumentCard from "./document-card";

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
    <>
      <main className="p-24 ">
        <Button
          size={"sm"}
          onClick={() => {
            createDocument({ title: "hello Convex" });
          }}
        >
          Click Me
        </Button>

        <div className="grid grid-cols-4 ">
          {documents?.map((doc) => <DocumentCard document={doc} />)}
        </div>
      </main>
    </>
  );
}
