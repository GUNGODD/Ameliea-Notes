"use client";

import { Button } from "@/components/ui/button";
import Header from "./header";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { isGeneratorFunction } from "util/types";
import DocumentCard from "./document-card";
import CreateDocumentButton from "./create-document-button";

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
      <main className="p-24  spaace-y-8">
        <div className="flex justify-between items-center">
          <h1 className="tex-4xl font-bold "> My Documents </h1>
          <CreateDocumentButton /> {/*  component */}
        </div>
        <div className="grid grid-cols-4 gap-8 ">
          {documents?.map((doc) => <DocumentCard document={doc} />)}
        </div>
      </main>
    </>
  );
}
